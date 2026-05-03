import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_URL = 'https://wa.me/5511966068951';

export default function FloatingCtas() {
  const { pathname } = useLocation();

  const secondaryAction = pathname === '/contato'
    ? { to: '/servicos', label: 'Ver catálogo' }
    : { to: '/contato', label: 'Pedir orçamento' };

  return (
    <div className="floating-ctas" aria-label="Ações rápidas">
      <div className="floating-ctas__actions">
        <a
          className="floating-cta floating-cta--whatsapp"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <span className="floating-cta__icon floating-cta__icon--whatsapp" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.05 4.94A9.9 9.9 0 0 0 12.04 2C6.55 2 2.08 6.46 2.08 11.96c0 1.76.46 3.48 1.33 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.24h.01c5.49 0 9.96-4.47 9.96-9.96a9.9 9.9 0 0 0-2.96-6.98Zm-7.01 15.25h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.09.81.82-3.01-.2-.31a8.27 8.27 0 0 1-1.27-4.38c0-4.58 3.72-8.31 8.3-8.31a8.24 8.24 0 0 1 5.88 2.43 8.23 8.23 0 0 1 2.43 5.88c0 4.58-3.73 8.31-8.33 8.31Zm4.56-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.13-.17.26-.65.81-.8.97-.15.17-.3.19-.56.06-.25-.13-1.07-.39-2.03-1.24a7.62 7.62 0 0 1-1.41-1.75c-.15-.26-.02-.4.11-.53.12-.12.25-.3.38-.45.13-.15.17-.26.25-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.69.32-.23.26-.89.87-.89 2.11 0 1.24.91 2.44 1.04 2.61.13.17 1.78 2.71 4.31 3.8.6.26 1.07.42 1.44.54.61.2 1.16.17 1.6.1.49-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
            </svg>
          </span>
          <span className="floating-cta__text">
            <strong>WhatsApp</strong>
            <small>Resposta rápida</small>
          </span>
        </a>

        {/* Botão de orçamento removido conforme solicitação */}
      </div>
    </div>
  );
}