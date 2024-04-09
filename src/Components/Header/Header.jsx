import './css/Header.css';

function Header() {
  return (
    <header className='header'>
        <h1 className="header__title">Terna App</h1>
    
        <nav className="header__nav">
            <a href="/" className="nav__link">main</a>
            
            <a href="/catalog" className="nav__link">catalog</a>
            
            <a href="/" className="nav__link">basket</a>
        </nav>
    </header>
  );
}

export default Header;
