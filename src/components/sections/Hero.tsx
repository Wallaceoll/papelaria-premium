import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../modals/ContactModal';
import './Hero.css';

const Hero: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__content reveal reveal-delay-1">
              <p className="hero__eyebrow">Design editorial • luxo contemporâneo • presença institucional</p>

              <h1 className="hero__title" id="hero-title">
                Papelaria com estética <strong>premium</strong> para marcas que exigem presença.
              </h1>

              <p className="hero__description">
                Criamos experiências visuais elegantes para papelaria institucional, convites, embalagens e materiais de marca com acabamento refinado, linguagem contemporânea e alto valor percebido.
              </p>

              <div className="hero__actions reveal reveal-delay-2">
                <button 
                  className="button-primary"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Quero um projeto premium
                </button>
                <Link to="/portfolio" className="button-secondary">Explorar portfólio</Link>
              </div>

              <div className="hero__metrics reveal reveal-delay-3" aria-label="Indicadores de valor">
                <article className="metric">
                  <strong>+120</strong>
                  <span>Projetos assinados</span>
                </article>
                <article className="metric">
                  <strong>98%</strong>
                  <span>Aprovação visual</span>
                </article>
                <article className="metric">
                  <strong>High-End</strong>
                  <span>Curadoria estética</span>
                </article>
              </div>
            </div>

            <div className="hero__visual reveal reveal-delay-2" aria-hidden="true">
              <article className="hero-card">
                <div className="hero-card__content">
                  <div className="hero-card__top">
                    <span className="hero-card__badge">Coleção Signature</span>
                    <span className="hero-card__chip">Editorial Finish</span>
                  </div>

                  <div className="hero-card__center">
                    <div className="hero-card__circle"></div>
                    <div className="hero-card__panel">
                      <p>Luxury stationery</p>
                      <h2>Precisão visual com acabamento autoral.</h2>
                      <p>
                        Texturas suaves, composição premium e linguagem sofisticada para posicionar sua marca com clareza e impacto.
                      </p>
                    </div>
                  </div>

                  <div className="hero-card__footer">
                    <p className="hero-card__footer-note">
                      <strong>Brand-first design.</strong> Materiais criados para transmitir valor, exclusividade e consistência visual.
                    </p>
                    <div className="hero-card__mini">
                      <span>Percepção de marca</span>
                      <strong>Elevada</strong>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default Hero;
