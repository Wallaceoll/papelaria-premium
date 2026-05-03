import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-mark">F</span>
              <span>Folia</span>
            </Link>
            <p className="footer__tagline">
              Papelaria de alto padrão para momentos que merecem ser lembrados.
            </p>
            <div className="footer__social">
              {['Instagram', 'Pinterest', 'Behance', 'LinkedIn'].map(s => (
                <a key={s} href={`https://${s.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="footer__social-link">{s}</a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <p className="footer__col-title">Navegação</p>
              <ul>
                {[['/', 'Home'], ['/servicos', 'Serviços'], ['/personalizacao', 'Personalização'], ['/contato', 'Contato']].map(([path, label]) => (
                  <li key={path}><Link to={path} className="footer__link">{label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Produtos</p>
              <ul>
                {['Convites de Casamento', 'Papelaria de Bebê', 'Kits Corporativos', 'Brindes Premium', 'Cartas & Envelopes', 'Packaging Personalizado'].map(s => (
                  <li key={s}><Link to="/servicos" className="footer__link">{s}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Contato</p>
              <ul>
                <li><a href="mailto:ola@foliapapelaria.com.br" className="footer__link">ola@foliapapelaria.com.br</a></li>
                <li><a href="tel:+5511999990000" className="footer__link">(11) 99999-0000</a></li>
                <li><span className="footer__link footer__address">São Paulo, SP · Brasil</span></li>
                <li><span className="footer__link">Seg–Sex, 9h–18h</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} Folia Papelaria. Todos os direitos reservados a{' '}
            <a 
              href="https://kodantech-cjcz.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__dev-link"
            >
              KodanTech
            </a>.
          </p>
          <div className="footer__legal">
            <Link to="/" className="footer__link">Privacidade</Link>
            <Link to="/" className="footer__link">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}