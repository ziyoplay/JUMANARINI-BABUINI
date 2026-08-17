import DoppiCap from './DoppiCap';

export default function Header() {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <span className="logo-doppi-container">
            <DoppiCap width={48} height={36} className="doppi-cap-hat" />
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
        <a className="btn btn-primary" href="https://wa.me/998995060808" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <button className="burger" aria-label="Меню">☰</button>
      </div>
    </header>
  );
}
