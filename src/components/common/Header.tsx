import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="site-header reveal">
      <div className="container">
        <div className="site-header__bar">
          <Link to="/" className="brand" aria-label="Papelaria Premium, início">
            <span className="brand__mark">P</span>
            <span className="brand__text">
              <span className="brand__eyebrow">Papelaria institucional</span>
              <span className="brand__title">Papelaria Premium</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Navegação principal">
            <div className={`site-nav__links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link to="/servicos">Serviços</Link>
              <Link to="/portfolio">Portfólio</Link>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#contato">Contato</a>
            </div>
            <Link to="/contato" className="site-nav__cta">Solicitar proposta</Link>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
