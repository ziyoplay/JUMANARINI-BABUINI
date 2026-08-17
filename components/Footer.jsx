import DoppiCap from './DoppiCap';

export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div>
          <div className="foot-logo logo">
            <span className="logo-doppi-container">
              <DoppiCap width={48} height={36} className="doppi-cap-hat" />
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
  );
}
