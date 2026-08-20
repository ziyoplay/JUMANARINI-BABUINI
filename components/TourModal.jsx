'use client';

import { useState, useEffect } from 'react';

const VEHICLES = [
  { id: 'sedan', name: 'Седан', seats: '1–3 чел.', desc: 'Chevrolet Cobalt / Lacetti' },
  { id: 'suv', name: 'Внедорожник / SUV', seats: '1–4 чел.', desc: 'Chevrolet Tracker / Captiva / Prado' },
  { id: 'minivan', name: 'Минивэн', seats: '1–6 чел.', desc: 'Hyundai Staria / Damas' }
];

export default function TourModal({ tour, initialVehicle = 'sedan', onClose, onSelectTourForBooking }) {
  const [vehicle, setVehicle] = useState(initialVehicle);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!tour) return null;

  const currentPrice = tour.prices ? (tour.prices[vehicle] || tour.prices.sedan || 50) : 50;
  const currentPriceUZS = (currentPrice * 12800).toLocaleString('ru-RU');
  const selectedVehicleObj = VEHICLES.find(v => v.id === vehicle) || VEHICLES[0];

  function handleWhatsAppClick() {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу забронировать тур/трансфер:\n` +
      `*${tour.title}*\n` +
      `Автомобиль: *${selectedVehicleObj.name}* (${selectedVehicleObj.seats})\n` +
      `Стоимость: *$${currentPrice}* (~${currentPriceUZS} сум)\n` +
      `Дистанция: ${tour.distance || '—'}`
    );
    window.open(`https://wa.me/998995060808?text=${text}`, '_blank');
  }

  return (
    <div className="tour-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="tour-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="tour-modal-close" onClick={onClose} aria-label="Закрыть">✕</button>
        
        <div className="tour-modal-header">
          <img src={tour.photo} alt={tour.title} className="tour-modal-img" />
          <div className="tour-modal-title-wrap">
            <span className="eyebrow">Информация о маршруте</span>
            <h2 id="modal-title">{tour.title}</h2>
            <div className="tour-modal-badges">
              <span className="meta-pill highlight">В пути: {tour.driveTime}</span>
              <span className="meta-pill">Длительность: {tour.badge}</span>
              {tour.distance && <span className="meta-pill">Дистанция: {tour.distance}</span>}
            </div>
          </div>
        </div>

        <div className="tour-modal-body">
          {/* Interactive Vehicle Selection & Price Calculator */}
          <div className="tour-modal-price-box">
            <div className="modal-price-header">
              <span className="modal-price-title">Выберите тип автомобиля:</span>
              <div className="modal-vehicle-options">
                {VEHICLES.map(v => (
                  <button
                    key={v.id}
                    type="button"
                    className={`modal-v-btn ${vehicle === v.id ? 'active' : ''}`}
                    onClick={() => setVehicle(v.id)}
                  >
                    <b>{v.name}</b>
                    <span>{v.seats}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="modal-calc-result">
              <div className="calc-left">
                <span className="calc-note">Фиксированная цена за всю машину ({selectedVehicleObj.name}):</span>
                <span className="calc-car-model">{selectedVehicleObj.desc}</span>
              </div>
              <div className="calc-right">
                <div className="calc-usd">${currentPrice}</div>
                <div className="calc-uzs">~{currentPriceUZS} сум</div>
              </div>
            </div>
          </div>

          <div className="tour-modal-section">
            <h4>Нить маршрута и тайминг переездов</h4>
            <div className="route-path-box">{tour.route}</div>
            
            {tour.timeline && tour.timeline.length > 0 && (
              <div className="tour-timeline">
                {tour.timeline.map((step, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-dot">{idx + 1}</div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <span className="timeline-segment">{step.segment}</span>
                        {step.drive && <span className="timeline-drive">{step.drive}</span>}
                      </div>
                      <p className="timeline-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="tour-modal-section">
            <h4>Описание поездки</h4>
            <p className="tour-modal-full-desc">{tour.fullDescription || tour.description}</p>
            
            {tour.included && (
              <div className="included-box">
                <h5>В стоимость включено:</h5>
                <ul>
                  {tour.included.map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {tour.entranceFees && (
              <div className="fees-box">
                <h5>Входные билеты и дополнительные расходы:</h5>
                <p>{tour.entranceFees}</p>
                <span className="fees-sub">* Услуги отдельного лицензированного гида — по желанию ($80 / тур).</span>
              </div>
            )}

            {tour.tips && (
              <div className="tips-box">
                <b>Совет путешественнику:</b> {tour.tips}
              </div>
            )}
          </div>
        </div>

        <div className="tour-modal-footer">
          <button className="btn btn-outline" onClick={onClose}>Закрыть</button>
          <button 
            type="button" 
            className="btn btn-whatsapp-modal" 
            onClick={handleWhatsAppClick}
          >
            Забронировать в WhatsApp
          </button>
          <button 
            type="button"
            className="btn btn-primary" 
            onClick={() => {
              onClose();
              if (onSelectTourForBooking) {
                onSelectTourForBooking(tour.title, vehicle);
              }
            }}
          >
            Заполнить заявку →
          </button>
        </div>
      </div>
    </div>
  );
}
