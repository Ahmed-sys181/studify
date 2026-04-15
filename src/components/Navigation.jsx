import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navigation.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">Studify</span>
        </Link>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/housing" className="nav-link" onClick={closeMenu}>
              🏠 Logements
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/transport" className="nav-link" onClick={closeMenu}>
              🚌 Transport
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deals" className="nav-link" onClick={closeMenu}>
              🎁 Bons Plans
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/marketplace" className="nav-link" onClick={closeMenu}>
              🛍️ Marketplace
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
