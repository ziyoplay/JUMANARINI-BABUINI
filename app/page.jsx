import BookingForm from '../components/BookingForm';
import DoppiCap from '../components/DoppiCap';

export default function HomePage() {
  return (
    <>

<header>
  <div className="nav">
    <div className="logo">
      <span className="logo-doppi-container">
        <DoppiCap width={42} height={26} className="doppi-cap-hat" />
        <span className="word"><span className="doppi-text">Doppi</span> Travel</span>
      </span>
    </div>
    <nav className="nav-links">
      <a href="#tours">Туры</a>
      <a href="#hotel">Отель</a>
      <a href="#why">Почему мы</a>
      <a href="#booking">Бронирование</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <a className="btn btn-primary" href="https://wa.me/998995060808" target="_blank" rel="noopener">WhatsApp</a>
    <button className="burger" aria-label="Меню">☰</button>
  </div>
</header>

<section className="hero">
  <div className="hero-grid">
    <div className="hero-text-side">
      <span className="eyebrow">
        <DoppiCap width={24} height={16} className="eyebrow-doppi" /> ✦ Хива · Узбекистан
      </span>
      <h1>Однодневные туры к крепостям <span>древнего Хорезма</span></h1>
      <p className="lead">Doppi Travel — местное агентство в Хиве. Организуем приватные и групповые поездки к пустынным крепостям, экспедиции на Аральское море и комфортные трансферы по Хорезмской области.</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#tours">Смотреть туры</a>
        <a className="btn btn-outline" href="https://wa.me/998995060808" target="_blank" rel="noopener">Написать в WhatsApp</a>
      </div>
      <div className="stats">
        <div className="stat"><b>15+</b><span>крепостей в маршрутах</span></div>
        <div className="stat"><b>2000&nbsp;лет</b><span>истории Хорезма</span></div>
        <div className="stat"><b>24/7</b><span>на связи</span></div>
      </div>
    </div>
    <div className="hero-image-side">
      <div className="hero-image-card">
        <span className="hero-image-badge-top">⭐ 4.9 · 15+ отзывов</span>
        <img src="/khiva-hero.jpg" alt="Ичан-Кала Хива Узбекистан sunset" />
        <div className="hero-image-badge">
          📍 Ичан-Кала, Хива · Узбекистан
        </div>
      </div>
    </div>
  </div>
</section>
<div className="divider"></div>

<section className="section" id="tours">
  <div className="section-head">
    <span className="eyebrow">✦ Маршруты</span>
    <h2>Приватные однодневные туры</h2>
    <p>Забираем от отеля в Хиве, Ургенче или Нукусе. Машина, вода и русско/англоговорящий водитель уже включены.</p>
  </div>
  <div className="grid">

    <div className="card">
      <span className="badge">9–10 часов</span>
      <img className="tour-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/Toprak-Kala%2009.jpg?width=960" alt="Топрак-Кала, Хорезм" loading="lazy" />
      <h3>Шесть крепостей Хорезма</h3>
      <div className="route">Хива → Топрак-Кала → Кызыл-Кала → Аяз-Кала</div>
      <p>Классический маршрут по укреплениям кушанского и античного периодов среди пустыни Кызылкум.</p>
      <a className="more" href="#booking">Забронировать →</a>
    </div>

    <div className="card">
      <span className="badge">12–14 часов</span>
      <img className="tour-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/Kyzylkum%20Desert%20in%20Uzbekistan.jpg?width=960" alt="Кызылкум у крепостей Хорезма" loading="lazy" />
      <h3>Тринадцать крепостей</h3>
      <div className="route">Хива → Гулдурсун-Кала → Аяз-Кала → Топрак-Кала</div>
      <p>Расширенный маршрут для тех, кто хочет увидеть максимум городищ и сторожевых крепостей за один день.</p>
      <a className="more" href="#booking">Забронировать →</a>
    </div>

    <div className="card">
      <span className="badge">2 дня / 1 ночь</span>
      <img className="tour-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/Aral%20Sea.jpg?width=960" alt="Аральское море" loading="lazy" />
      <h3>Аральское море и юрт-лагерь</h3>
      <div className="route">Нукус → плато Устюрт → Аральское море</div>
      <p>Ночёвка в юрточном лагере на обрыве Устюрта и рассвет над бывшим четвёртым по величине озером мира.</p>
      <a className="more" href="#booking">Забронировать →</a>
    </div>

    <div className="card">
      <span className="badge">3–4 часа</span>
      <img className="tour-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/Karakalpakstan%20Chilpyk%20Tower%20of%20Silence%20(dakhma)%201st%20cent%20BCE-1st%20cent%20CE%20Zoroastrian%20(4).jpg?width=960" alt="Дахма Чилпык" loading="lazy" />
      <h3>Дахма Чилпык и Нукус</h3>
      <div className="route">Хива/Ургенч → Чилпык-Кала → Нукус</div>
      <p>Зороастрийская «башня молчания» и музей Савицкого — короткая, но насыщенная поездка по пути в Нукус.</p>
      <a className="more" href="#booking">Забронировать →</a>
    </div>

    <div className="card">
      <span className="badge">2–3 часа</span>
      <img className="tour-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan_Kala_east_gate.jpg?width=960" alt="Ичан-Кала, Хива" loading="lazy" />
      <h3>Прогулка по Ичан-Кала</h3>
      <div className="route">Внутри крепостных стен Хивы</div>
      <p>Пешая экскурсия по старому городу: медресе, минареты, ремесленные мастерские и смотровые площадки.</p>
      <a className="more" href="#booking">Забронировать →</a>
    </div>

    <div className="card" id="transfers">
      <span className="badge">7–9 часов</span>
      <img className="tour-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/20230609%20189%20Kyzylkum.jpg?width=960" alt="Дорога через Кызылкум" loading="lazy" />
      <h3>Трансфер с осмотром крепостей</h3>
      <div className="route">Хива ⇄ Бухара, через Топрак-Кала и Кызыл-Кала</div>
      <p>Едете дальше по маршруту? Совместите переезд между городами с остановками у древних городищ.</p>
      <a className="more" href="#booking">Забронировать →</a>
    </div>

  </div>
</section>

<div className="divider thin"></div>

<section className="section" id="hotel">
  <div className="section-head">
    <span className="eyebrow">✦ Проживание</span>
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
      <a className="btn btn-primary" href="https://wa.me/998995060808" target="_blank" rel="noopener">Забронировать номер</a>
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
    <span className="eyebrow">✦ Doppi Travel</span>
    <h2>Почему выбирают нас</h2>
    <p>Мы живём и работаем в Хиве — знаем каждую дорогу к крепостям и лучшее время для фото.</p>
  </div>
  <div className="features">
    <div className="feature">
      <div className="fi">🧭</div>
      <h4>Местные гиды и водители</h4>
      <p>Знают историю каждой крепости и говорят по-русски и по-английски.</p>
    </div>
    <div className="feature">
      <div className="fi">🚙</div>
      <h4>Комфортный транспорт</h4>
      <p>Седаны, внедорожники и минивэны с кондиционером — под размер вашей группы.</p>
    </div>
    <div className="feature">
      <div className="fi">🗓️</div>
      <h4>Гибкое расписание</h4>
      <p>Отправление в удобное для вас время, маршрут можно скорректировать на месте.</p>
    </div>
    <div className="feature">
      <div className="fi">💳</div>
      <h4>Честная цена</h4>
      <p>Стоимость поездки фиксируется заранее, без скрытых доплат.</p>
    </div>
  </div>
</section>

<div className="divider"></div>

<section className="section" id="booking">
  <div className="section-head">
    <span className="eyebrow">✦ Бронирование</span>
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
      <a className="btn btn-primary" href="https://wa.me/998995060808" target="_blank" rel="noopener">Написать в WhatsApp</a>
      <a className="btn btn-outline" href="mailto:info@doppitravel.uz">info@doppitravel.uz</a>
    </div>
  </div>
</section>

<footer>
  <div className="foot-grid">
    <div>
      <div className="foot-logo logo">
        <span className="logo-doppi-container">
          <DoppiCap width={42} height={26} className="doppi-cap-hat" />
          <span className="word"><span className="doppi-text" style={{ color: '#fff' }}>Doppi</span> Travel</span>
        </span>
      </div>
      <p className="about">Местное туристическое агентство в Ичан-Кала, Хива. Организуем туры по крепостям Хорезма, поездки на Аральское море и трансферы по Узбекистану.</p>
    </div>
    <div>
      <h5>Разделы</h5>
      <ul>
        <li><a href="#tours">Однодневные туры</a></li>
        <li><a href="#transfers">Трансферы</a></li>
        <li><a href="#why">Почему мы</a></li>
        <li><a href="#booking">Бронирование</a></li>
      </ul>
    </div>
    <div>
      <h5>Контакты</h5>
      <ul>
        <li>ул. П. Махмуд 86, Ичан-Кала, Хива</li>
        <li>WhatsApp: +998 99 506 08 08</li>
        <li>info@doppitravel.uz</li>
      </ul>
    </div>
  </div>
  <div className="bottom-bar">
    <span>© 2026 Doppi Travel. Все права защищены.</span>
    <span>Сделано с любовью к Хорезму ✦</span>
  </div>
</footer>

    </>
  );
}
