import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Rodapé">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre</h3>
            <ul>
              <li><Link to="/">Quem somos</Link></li>
              <li><a href="#processo">Nosso processo</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Serviços</h3>
            <ul>
              <li><Link to="/servicos">Papelaria Corporativa</Link></li>
              <li><a href="#convites">Convites Premium</a></li>
              <li><a href="#embalagens">Embalagens Luxo</a></li>
              <li><a href="#identidade">Identidade Visual</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li><a href="mailto:contato@papelariapremium.com">contato@papelariapremium.com</a></li>
              <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
              <li><a href="#localizacao">São Paulo, SP</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom__copyright">© {currentYear} Papelaria Premium. Todos os direitos reservados.</p>
          <div className="footer-bottom__links">
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#termos">Termos de Uso</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
