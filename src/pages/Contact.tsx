import React, { useState } from 'react';
import ContactModal from '../components/modals/ContactModal';
import './Contact.css';

const Contact: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(true);

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-header reveal">
          <h1 id="contact-title">Entre em contato conosco</h1>
          <p>Estamos prontos para transformar sua visão em realidade. Fale com nosso time.</p>
        </div>

        <div className="contact-info reveal reveal-delay-2">
          <article className="info-card">
            <span className="info-icon">📧</span>
            <h3>Email</h3>
            <a href="mailto:contato@papelariapremium.com">contato@papelariapremium.com</a>
          </article>

          <article className="info-card">
            <span className="info-icon">📱</span>
            <h3>Telefone</h3>
            <a href="tel:+5511999999999">(11) 99999-9999</a>
          </article>

          <article className="info-card">
            <span className="info-icon">📍</span>
            <h3>Localização</h3>
            <p>São Paulo, SP - Brasil</p>
          </article>

          <article className="info-card">
            <span className="info-icon">⏰</span>
            <h3>Horário</h3>
            <p>Seg-Sex: 9h às 18h</p>
          </article>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default Contact;
