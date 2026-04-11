import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../modals/ContactModal';
import './CTA.css';

const CTA: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="cta" id="contato" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta__content reveal">
            <h2 className="cta__title" id="cta-title">Pronto para elevar sua marca?</h2>
            <p className="cta__description">
              Transforme sua papelaria em um instrumento de comunicação sofisticado. Vamos criar algo extraordinário juntos.
            </p>

            <div className="cta__actions">
              <button 
                className="button-primary"
                onClick={() => setIsContactModalOpen(true)}
              >
                Solicitar proposta
              </button>
              <Link to="/portfolio" className="button-secondary">Ver portfólio completo</Link>
            </div>
          </div>

          <div className="cta__features reveal reveal-delay-2">
            <div className="feature">
              <span className="feature__icon">✓</span>
              <h3>Processo transparente</h3>
              <p>Acompanhamento completo do projeto com comunicação clara.</p>
            </div>
            <div className="feature">
              <span className="feature__icon">✓</span>
              <h3>Qualidade garantida</h3>
              <p>Acabamento premium e atenção aos mínimos detalhes.</p>
            </div>
            <div className="feature">
              <span className="feature__icon">✓</span>
              <h3>Suporte contínuo</h3>
              <p>Revisões e ajustes até a satisfação total.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default CTA;
