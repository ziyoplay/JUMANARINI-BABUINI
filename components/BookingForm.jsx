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
      setStatus({ type: 'success', message: 'Спасибо! Заявка отправлена. Мы скоро с вами свяжемся.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Ошибка соединения. Попробуйте ещё раз или напишите в WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input type="hidden" name="formStartedAt" value={formStartedAt.current} readOnly />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" />
      </div>
      <h3>Отправить заявку</h3>
      <p className="form-intro">Заполните форму — заявка сразу придёт менеджеру в Telegram.</p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="customerName">Ваше имя</label>
          <input id="customerName" name="name" type="text" autoComplete="name" required maxLength="80" />
        </div>
        <div className="form-field">
          <label htmlFor="customerContact">Телефон или Telegram</label>
          <input id="customerContact" name="contact" type="text" autoComplete="tel" required maxLength="80" />
        </div>
        <div className="form-field">
          <label htmlFor="tour">Тур или услуга</label>
          <select id="tour" name="tour" required defaultValue="">
            <option value="" disabled>Выберите вариант</option>
            <option>Шесть крепостей Хорезма</option>
            <option>Тринадцать крепостей</option>
            <option>Аральское море и юрт-лагерь</option>
            <option>Дахма Чилпык и Нукус</option>
            <option>Прогулка по Ичан-Кала</option>
            <option>Трансфер с осмотром крепостей</option>
            <option>Номер в Doppi Hotel</option>
            <option>Другое</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="travelDate">Желаемая дата</label>
          <input id="travelDate" name="date" type="date" required />
        </div>
        <div className="form-field">
          <label htmlFor="guests">Количество гостей</label>
          <input id="guests" name="guests" type="number" min="1" max="30" defaultValue="1" required />
        </div>
        <div className="form-field full">
          <label htmlFor="details">Пожелания</label>
          <textarea id="details" name="details" maxLength="1000" placeholder="Детали и что хотите увидеть" />
        </div>
      </div>
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Отправляем…' : 'Отправить заявку'}
      </button>
      <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>
    </form>
  );
}
