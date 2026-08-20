import DoppiCap from './DoppiCap';

export default function Hero() {
  return (
    <section className="hero hero-with-bg">
      <div className="hero-bg-overlay"></div>
      <div className="wrap hero-wrap">
        <div className="hero-content">
          <div className="hero-top-chips">
            <span className="eyebrow hero-chip">
              <DoppiCap width={24} height={16} className="eyebrow-doppi" /> Хива · Узбекистан
            </span>
            <span className="hero-rating-chip">★ 4.9 · 15+ отзывов на Google</span>
          </div>
          
          <h1>Однодневные туры к крепостям <span>древнего Хорезма</span></h1>
          <p className="lead">
            Doppi Travel — местное агентство в Хиве. Организуем приватные экскурсии 
            к глиняным замкам пустыни Кызылкум, экспедиции на Аральское море 
            и комфортные трансферы по Хорезму, Каракалпакстану и Бухаре.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary btn-hero-main" href="#tours">
              Смотреть все туры и цены →
            </a>
            <a 
              className="btn btn-hero-whatsapp" 
              href="https://wa.me/998995060808" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Написать в WhatsApp
            </a>
          </div>

          <div className="stats hero-stats">
            <div className="stat">
              <b>15+</b>
              <span>крепостей в маршрутах</span>
            </div>
            <div className="stat">
              <b>2000 лет</b>
              <span>истории Хорезма</span>
            </div>
            <div className="stat">
              <b>100%</b>
              <span>приватные выезды</span>
            </div>
            <div className="stat">
              <b>24/7</b>
              <span>поддержка гостей</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
