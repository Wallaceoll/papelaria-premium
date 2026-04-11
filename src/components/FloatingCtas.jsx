import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_URL = 'https://wa.me/5511999990000';

export default function FloatingCtas() {
  const { pathname } = useLocation();

  const secondaryAction = pathname === '/contato'
    ? { to: '/servicos', label: 'Ver catalogo' }
    : { to: '/contato', label: 'Pedir orcamento' };

  return (
    <div className="floating-ctas" aria-label="Acoes rapidas">
      <div className="floating-ctas__label">Fale com a Folia</div>
      <div className="floating-ctas__actions">
        <a
          className="floating-cta floating-cta--whatsapp"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
        >
          <span className="floating-cta__icon" aria-hidden="true">◎</span>
          <span className="floating-cta__text">
            <strong>WhatsApp</strong>
            <small>Resposta rapida</small>
          </span>
        </a>

        <Link className="floating-cta floating-cta--secondary" to={secondaryAction.to}>
          <span className="floating-cta__icon" aria-hidden="true">↗</span>
          <span className="floating-cta__text">
            <strong>{secondaryAction.label}</strong>
            <small>Abrir agora</small>
          </span>
        </Link>
      </div>
    </div>
  );
}