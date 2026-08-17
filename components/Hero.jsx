import DoppiCap from './DoppiCap';

export default function Hero() {
  return (
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
            <a className="btn btn-outline" href="https://wa.me/998995060808" target="_blank" rel="noopener noreferrer">Написать в WhatsApp</a>
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
  );
}
