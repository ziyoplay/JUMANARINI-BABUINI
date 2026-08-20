import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_GUESTS = 30;
const MIN_SUBMISSION_MS = 2_500;
const MAX_FORM_AGE_MS = 60 * 60 * 1000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map();

function text(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function clientIp(request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const requests = (requestLog.get(ip) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  requests.push(now);
  requestLog.set(ip, requests);

  if (requestLog.size > 1_000) {
    for (const [key, times] of requestLog) {
      if (!times.some((time) => now - time < RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
    }
  }
  return requests.length > RATE_LIMIT_MAX_REQUESTS;
}

function isSpam(data) {
  const startedAt = Number(data.formStartedAt);
  const elapsed = Date.now() - startedAt;
  return Boolean(text(data.website, 200))
    || !Number.isFinite(startedAt)
    || elapsed < MIN_SUBMISSION_MS
    || elapsed > MAX_FORM_AGE_MS;
}

function validateBooking(data) {
  const booking = {
    name: text(data.name, 80),
    contact: text(data.contact, 80),
    tour: text(data.tour, 150),
    vehicle: text(data.vehicle, 60),
    date: text(data.date, 10),
    guests: Number(data.guests),
    pickup: text(data.pickup, 150),
    details: text(data.details, 1000)
  };

  if (booking.name.length < 2 || booking.contact.length < 3 || !booking.tour || !/^\d{4}-\d{2}-\d{2}$/.test(booking.date)) {
    throw new Error('Пожалуйста, заполните все обязательные поля.');
  }
  if (!Number.isInteger(booking.guests) || booking.guests < 1 || booking.guests > MAX_GUESTS) {
    throw new Error(`Укажите количество гостей от 1 до ${MAX_GUESTS}.`);
  }
  return booking;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function formatDate(date) {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
}

function formatContact(contact) {
  if (/^@[a-zA-Z0-9_]{5,}$/.test(contact)) {
    const username = contact.slice(1);
    return `<a href="https://t.me/${username}">${escapeHtml(contact)}</a>`;
  }
  return `<code>${escapeHtml(contact)}</code>`;
}

function formatVehicle(v) {
  if (v === 'suv') return '🚙 Внедорожник / SUV (1–4 чел)';
  if (v === 'minivan') return '🚐 Минивэн (1–6 чел)';
  return '🚗 Седан (1–3 чел)';
}

function bookingMessage(booking) {
  return [
    '✈️ <b>DOPPI TRAVEL</b>',
    '<b>Yangi buyurtma (Новая бронь)</b>',
    '━━━━━━━━━━━━━━━━━━━',
    '',
    `<b>👤 Mijoz (Имя)</b>\n${escapeHtml(booking.name)}`,
    '',
    `<b>📱 Aloqa (Контакты)</b>\n${formatContact(booking.contact)}`,
    '',
    `<b>🧭 Yo‘nalish (Маршрут)</b>\n${escapeHtml(booking.tour)}`,
    '',
    `<b>🚗 Mashina turi (Авто)</b>\n${formatVehicle(booking.vehicle)}`,
    '',
    `<b>📅 Sana va mehmonlar (Дата и гости)</b>\n${formatDate(booking.date)}  ·  ${booking.guests} kishi`,
    '',
    `<b>📍 Qayerdan olish (Место встречи)</b>\n${escapeHtml(booking.pickup || 'Doppi Hotel / Хива')}`,
    '',
    `<b>📝 Qo‘shimcha (Пожелания)</b>\n${escapeHtml(booking.details || '—')}`
  ].join('\n');
}

export async function POST(request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram is not configured: set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.');
    return NextResponse.json({ ok: false, error: 'Сервис заявок временно недоступен.' }, { status: 503 });
  }

  try {
    const data = await request.json();
    if (isSpam(data)) return NextResponse.json({ ok: true });
    if (isRateLimited(clientIp(request))) {
      return NextResponse.json({ ok: false, error: 'Слишком много заявок. Попробуйте снова через несколько минут.' }, { status: 429 });
    }

    const booking = validateBooking(data);
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: bookingMessage(booking),
        parse_mode: 'HTML',
        link_preview_options: { is_disabled: true }
      }),
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store'
    });

    if (!telegramResponse.ok) {
      throw new Error(`Telegram returned ${telegramResponse.status}`);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    const isValidationError = error.message?.startsWith('Пожалуйста') || error.message?.startsWith('Укажите количество');
    if (!isValidationError) console.error('Could not send booking:', error.message);
    return NextResponse.json(
      { ok: false, error: isValidationError ? error.message : 'Не удалось отправить заявку. Попробуйте ещё раз.' },
      { status: isValidationError ? 400 : 502 }
    );
  }
}
