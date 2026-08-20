'use client';

import { useRef, useState } from 'react';

const initialStatus = { type: '', message: '' };

export default function BookingForm() {
  const [status, setStatus] = useState(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formStartedAt = useRef(Date.now());

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus(initialStatus);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Не удалось отправить заявку.');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Спасибо! Заявка отправлена. Мы скоро с вами свяжемся в Telegram/WhatsApp.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Ошибка соединения. Попробуйте ещё раз или напишите сразу в WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleDirectWhatsApp() {
    const tourVal = document.getElementById('tour')?.value || 'Консультация по турам';
    const dateVal = document.getElementById('travelDate')?.value || '';
    const guestsVal = document.getElementById('guests')?.value || '1';
    const vehicleVal = document.getElementById('vehicleType')?.value || 'Седан';

    const text = encodeURIComponent(
      `Здравствуйте! Хочу забронировать поездку в Doppi Travel:\n` +
      `Маршрут: *${tourVal}*\n` +
      `Авто: *${vehicleVal}*\n` +
      `Дата: *${dateVal || 'уточняется'}*\n` +
      `Гостей: *${guestsVal}*`
    );
    window.open(`https://wa.me/998995060808?text=${text}`, '_blank');
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input type="hidden" name="formStartedAt" value={formStartedAt.current} readOnly />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" />
      </div>

      <div className="form-header-row">
        <div>
          <h3>Забронировать поездку</h3>
          <p className="form-intro">Заполните форму или напишите нам напрямую в мессенджер.</p>
        </div>
        <button 
          type="button" 
          className="btn btn-whatsapp-direct"
          onClick={handleDirectWhatsApp}
        >
          Написать в WhatsApp
        </button>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="customerName">Ваше имя</label>
          <input id="customerName" name="name" type="text" autoComplete="name" required maxLength="80" placeholder="Иван Иванов" />
        </div>
        <div className="form-field">
          <label htmlFor="customerContact">Телефон / WhatsApp / Telegram</label>
          <input id="customerContact" name="contact" type="text" autoComplete="tel" required maxLength="80" placeholder="+998 90 123 45 67" />
        </div>

        <div className="form-field">
          <label htmlFor="tour">Маршрут тура или трансфера</label>
          <select id="tour" name="tour" required defaultValue="">
            <option value="" disabled>Выберите маршрут из списка</option>
            <optgroup label="Однодневные туры из Хивы">
              <option>Крепость Аяз-Кала и юртовый лагерь ($50)</option>
              <option>Топ 3 Крепости Хорезма и Озеро Акшакуль ($55)</option>
              <option>Топ 5 Крепостей Хорезма и Озеро Акшакуль ($65)</option>
              <option>Топ 7 Крепостей Хорезма и Озеро Акшакуль ($75)</option>
              <option>Большое кольцо: 10 Крепостей Древнего Хорезма ($80)</option>
              <option>Полная экспедиция: 13 Крепостей Хорезма ($90)</option>
              <option>Дахма Чилпык, Музей Савицкого и Некрополь Миздакхан ($85)</option>
              <option>Муйнак, Кладбище кораблей и Музей Арала (из Хивы) ($115)</option>
              <option>Пешая авторская экскурсия по Ичан-Кала ($35)</option>
            </optgroup>
            <optgroup label="Экскурсионные трансферы Хива ⇄ Нукус">
              <option>Экскурсионный трансфер Хива → Нукус (через Дахму Чилпык) ($65)</option>
              <option>Экскурсионный трансфер Хива → Нукус (через 4 Крепости и Озеро Акшакуль) ($85)</option>
              <option>Экскурсионный трансфер Хива → Нукус (через 6 Крепостей) ($95)</option>
            </optgroup>
            <optgroup label="Экскурсионные трансферы Хива ⇄ Бухара">
              <option>Экскурсионный трансфер Хива → Бухара (через 3 Крепости и Озеро Акшакуль) ($100)</option>
              <option>Экскурсионный трансфер Хива → Бухара (через 5 Крепостей) ($110)</option>
              <option>Экскурсионный трансфер Хива → Бухара (через 8 Крепостей) ($125)</option>
            </optgroup>
            <optgroup label="Нукус, Муйнак и Аральское море">
              <option>Тур из Нукуса: Муйнак, Кладбище кораблей и Некрополь Миздакхан ($85)</option>
              <option>Экспедиция на Аральское море и Плато Устюрт (2 дня / 1 ночь) ($190)</option>
            </optgroup>
            <optgroup label="Проживание">
              <option>Номер в Doppi Hotel (Ичан-Кала, Хива)</option>
              <option>Индивидуальный трансфер в аэропорт / на вокзал</option>
              <option>Другой индивидуальный маршрут</option>
            </optgroup>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="vehicleType">Класс автомобиля</label>
          <select id="vehicleType" name="vehicle" defaultValue="sedan">
            <option value="sedan">Седан (1–3 чел) — Cobalt / Lacetti</option>
            <option value="suv">Внедорожник / SUV (1–4 чел) — Tracker / Captiva / Prado</option>
            <option value="minivan">Минивэн (1–6 чел) — Staria / Damas / Carnival</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="travelDate">Желаемая дата поездки</label>
          <input id="travelDate" name="date" type="date" required />
        </div>

        <div className="form-field">
          <label htmlFor="guests">Количество человек в группе</label>
          <input id="guests" name="guests" type="number" min="1" max="25" defaultValue="2" required />
        </div>

        <div className="form-field full">
          <label htmlFor="pickupLocation">Место встречи (Отель в Хиве / Нукусе / Бухаре или аэропорт)</label>
          <input id="pickupLocation" name="pickup" type="text" maxLength="150" placeholder="Например: Doppi Hotel или аэропорт Ургенча (рейс HY-051)" />
        </div>

        <div className="form-field full">
          <label htmlFor="details">Дополнительные пожелания</label>
          <textarea id="details" name="details" maxLength="1000" placeholder="Нужен ли англо/русскоязычный гид, детское кресло, остановка на обед в юрте и т.д." />
        </div>
      </div>

      <div className="form-submit-row">
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправляем…' : 'Отправить заявку менеджеру →'}
        </button>
        <span className="form-guarantee">Бесплатная отмена за 3 дня • Оплата водителю на месте</span>
      </div>

      <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>
    </form>
  );
}
