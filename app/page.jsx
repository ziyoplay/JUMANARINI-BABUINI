import Header from '../components/Header';
import Hero from '../components/Hero';
import ToursSection from '../components/ToursSection';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      <div className="divider"></div>

      <ToursSection />

      <div className="divider thin"></div>

      <section className="section" id="hotel">
        <div className="section-head">
          <span className="eyebrow">Проживание</span>
          <h2>Гостевой дом Doppi Hotel</h2>
          <p>Останавливайтесь у нас в Ичан-Кала — в паре минут ходьбы от главных памятников старой Хивы.</p>
        </div>
        <div className="hotel-wrap">
          <div className="hotel-info">
            <div className="rating-badge">
              <span className="num">4,7</span>
              <div>
                <div className="stars">★★★★★</div>
                <div className="count">15 отзывов на Google</div>
              </div>
            </div>
            <ul className="info-list">
              <li><b>Адрес</b><span>ул. П. Махмуд 86, Ичан-Кала, Хива</span></li>
              <li><b>Заезд</b><span>с 14:00</span></li>
              <li><b>Выезд</b><span>до 12:00</span></li>
              <li><b>Телефон</b><span>+998 99 506 08 08</span></li>
              <li><b>Расположение</b><span>внутри крепостных стен Ичан-Кала</span></li>
            </ul>
            <a className="btn btn-primary" href="https://wa.me/998995060808" target="_blank" rel="noopener noreferrer">Забронировать номер</a>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>Тихое расположение в самом старом городе — вышел из дверей, и вокруг красота. Рядом хорошая чайхана.</p>
              <div className="who">Гость Google</div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>Очень чистый и уютный семейный гестхаус в центре Ичан-Кала, все достопримечательности рядом, вкусный завтрак.</p>
              <div className="who">Yekaterina M. <span>· местный эксперт</span></div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>Просторные и современные номера, быстрый интернет, любезные хозяева и вкусный завтрак — идеальное место в старом городе.</p>
              <div className="who">Maria R. <span>· местный эксперт</span></div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>Почувствовали себя как дома: гостеприимная хозяйка, удобные номера рядом с историческими зданиями Ичан-Кала.</p>
              <div className="who">Ece K.</div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>Каждая потраченная копейка того стоит — чисто, сытный завтрак и внимательный сервис, будто в гостях у друзей.</p>
              <div className="who">Chinoros N. <span>· местный эксперт</span></div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>Прекрасное место, приятная семья хозяев, центральное расположение и великолепный завтрак — настоятельно рекомендую.</p>
              <div className="who">Teresa B.</div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>Всё было чисто и идеально, отличное расположение, хороший завтрак и очень дружелюбный персонал с улыбкой.</p>
              <div className="who">Cristina G. <span>· местный эксперт</span></div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★☆</div>
              <p>Хорошая цена и хороший завтрак — отличное соотношение цены и качества для старого города.</p>
              <div className="who">Torsten R.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider thin"></div>

      <section className="section why" id="why">
        <div className="section-head">
          <span className="eyebrow">Doppi Travel</span>
          <h2>Почему выбирают нас</h2>
          <p>Мы живём и работаем в Хиве — знаем каждую дорогу к крепостям и лучшее время для фото.</p>
        </div>
        <div className="features">
          <div className="feature">
            <div className="fi">✦</div>
            <h4>Местные гиды и водители</h4>
            <p>Знают историю каждой крепости и говорят по-русски и по-английски.</p>
          </div>
          <div className="feature">
            <div className="fi">✦</div>
            <h4>Комфортный транспорт</h4>
            <p>Седаны, внедорожники и минивэны с кондиционером — под размер вашей группы.</p>
          </div>
          <div className="feature">
            <div className="fi">✦</div>
            <h4>Гибкое расписание</h4>
            <p>Отправление в удобное для вас время, маршрут можно скорректировать на месте.</p>
          </div>
          <div className="feature">
            <div className="fi">✦</div>
            <h4>Честная цена</h4>
            <p>Стоимость поездки фиксируется заранее, без скрытых доплат.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section" id="booking">
        <div className="section-head">
          <span className="eyebrow">Бронирование</span>
          <h2>Как забронировать поездку</h2>
          <p>Бронирование бесплатное — просто пришлите нам данные в WhatsApp или Telegram.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="n">1</div>
            <div><h4>Выберите тур или трансфер</h4><p>Название маршрута с этой страницы.</p></div>
          </div>
          <div className="step">
            <div className="n">2</div>
            <div><h4>Укажите дату и число участников</h4><p>Дата поездки и количество человек в группе.</p></div>
          </div>
          <div className="step">
            <div className="n">3</div>
            <div><h4>Сообщите место отправления</h4><p>Название отеля, аэропорта или вокзала для встречи.</p></div>
          </div>
          <div className="step">
            <div className="n">4</div>
            <div><h4>Получите подтверждение</h4><p>Мы пришлём подтверждение брони и данные водителя в течение дня.</p></div>
          </div>
        </div>
        <BookingForm />
      </section>

      <section className="section" id="contacts">
        <div className="cta">
          <h2>Готовы открыть для себя Хорезм?</h2>
          <p>Напишите нам, и мы подберём маршрут под ваши даты и интересы.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://wa.me/998995060808" target="_blank" rel="noopener noreferrer">Написать в WhatsApp</a>
            <a className="btn btn-outline" href="mailto:info@doppitravel.uz">info@doppitravel.uz</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
