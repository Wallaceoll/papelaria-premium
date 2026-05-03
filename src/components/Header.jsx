import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const nav = [
  { label: 'Home',           path: '/' },
  { label: 'Serviços',       path: '/servicos' },
  { label: 'Personalização', path: '/personalizacao' },
  { label: 'Contato',        path: '/contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (path) => {
    setMenuOpen(false);

    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(path);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--open' : ''}`}>
      <div className="header__inner container-wide">
        <Link
          to="/"
          className="header__logo"
          onClick={(event) => {
            if (pathname === '/') {
              event.preventDefault();
              handleNavClick('/');
            }
          }}
        >
          <span className="header__logo-mark">F</span>
          <span className="header__logo-text">Folia</span>
        </Link>

        <nav className="header__nav">
          {nav.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__link ${pathname === item.path ? 'active' : ''}`}
              onClick={(event) => {
                if (pathname === item.path) {
                  event.preventDefault();
                }
                handleNavClick(item.path);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link to="/contato" className="btn btn-primary btn-header">
            Solicitar orçamento
          </Link>
          <button
            className={`header__burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`header__mobile ${menuOpen ? 'open' : ''}`}>
        <nav className="header__mobile-nav">
          {nav.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__mobile-link ${pathname === item.path ? 'active' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={(event) => {
                if (pathname === item.path) {
                  event.preventDefault();
                }
                handleNavClick(item.path);
              }}
            >
              <span className="header__mobile-num">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link to="/contato" className="btn btn-gold btn-lg header__mobile-cta">
            Solicitar orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}