const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const https = require('node:https');

const ROOT = __dirname;
loadEnvFile(path.join(ROOT, '.env'));

const PORT = Number(process.env.PORT || 3000);
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/i);
    if (!match || match[1] in process.env) continue;
    process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
  }
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(JSON.stringify(payload));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.setEncoding('utf8');
    request.on('data', (chunk) => {
      body += chunk;
      if (body.length > 12_000) reject(new Error('Request body is too large.'));
    });
    request.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch { reject(new Error('Invalid JSON.')); }
    });
    request.on('error', reject);
  });
}

function text(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function validateBooking(data) {
  const booking = {
    name: text(data.name, 80),
    contact: text(data.contact, 80),
    tour: text(data.tour, 120),
    date: text(data.date, 10),
    guests: Number(data.guests),
    details: text(data.details, 1000)
  };
  if (booking.name.length < 2 || booking.contact.length < 3 || !booking.tour || !/^\d{4}-\d{2}-\d{2}$/.test(booking.date)) {
    throw new Error('Пожалуйста, заполните все обязательные поля.');
  }
  if (!Number.isInteger(booking.guests) || booking.guests < 1 || booking.guests > 30) {
    throw new Error('Укажите количество гостей от 1 до 30.');
  }
  return booking;
}

function telegramSendMessage(message) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({chat_id: CHAT_ID, text: message});
    const request = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload)},
      timeout: 10_000
    }, (response) => {
      let body = '';
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => {
        if (response.statusCode >= 200 && response.statusCode < 300) resolve();
        else reject(new Error(`Telegram returned ${response.statusCode}`));
      });
    });
    request.on('timeout', () => request.destroy(new Error('Telegram request timed out')));
    request.on('error', reject);
    request.end(payload);
  });
}

function bookingMessage(booking) {
  return [
    '🔔 Новая заявка с сайта Doppi Travel',
    '',
    `Имя: ${booking.name}`,
    `Контакт: ${booking.contact}`,
    `Тур / услуга: ${booking.tour}`,
    `Дата: ${booking.date}`,
    `Гостей: ${booking.guests}`,
    `Детали: ${booking.details || '—'}`
  ].join('\n');
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

  if (request.method === 'GET' && (url.pathname === '/' || url.pathname === '/doppi-travel.html')) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(path.join(ROOT, 'doppi-travel.html')).pipe(response);
    return;
  }

  if (request.method === 'POST' && url.pathname === '/api/booking') {
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram is not configured: set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.');
      sendJson(response, 503, {ok: false, error: 'Сервис заявок временно недоступен.'});
      return;
    }
    try {
      const booking = validateBooking(await readJson(request));
      await telegramSendMessage(bookingMessage(booking));
      sendJson(response, 200, {ok: true});
    } catch (error) {
      const isValidationError = error.message.includes('Пожалуйста') || error.message.includes('количество гостей');
      if (!isValidationError) console.error('Could not send booking:', error.message);
      sendJson(response, isValidationError ? 400 : 502, {
        ok: false,
        error: isValidationError ? error.message : 'Не удалось отправить заявку. Попробуйте ещё раз.'
      });
    }
    return;
  }

  response.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
  response.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Doppi Travel is running at http://localhost:${PORT}`);
});
