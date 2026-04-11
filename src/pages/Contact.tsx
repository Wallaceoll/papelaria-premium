import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-page__hero reveal">
          <p className="section-eyebrow">Fale conosco</p>
          <h1 id="contact-title">Vamos criar algo extraordinário juntos.</h1>
          <p className="contact-page__lead">
            Preencha o formulário ou utilize nossos canais de contato. Retornaremos em até 24 horas úteis.
          </p>
        </div>

        <div className="contact-page__grid">
          <div className="contact-form-wrapper reveal reveal-delay-1">
            {isSubmitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h2>Mensagem enviada!</h2>
                <p>Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome completo *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(11) 99999-9999" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Empresa</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Serviço de interesse</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Selecione um serviço</option>
                    <option value="papelaria">Papelaria Corporativa</option>
                    <option value="convites">Convites Premium</option>
                    <option value="embalagens">Embalagens Luxo</option>
                    <option value="identidade">Identidade Visual</option>
                    <option value="catalogos">Catálogos & Brochuras</option>
                    <option value="acabamentos">Acabamentos Especiais</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Conte-nos sobre seu projeto..." rows={5} />
                </div>
                <button type="submit" className="contact-submit">Enviar mensagem</button>
              </form>
            )}
          </div>

          <aside className="contact-sidebar reveal reveal-delay-2">
            <div className="contact-card">
              <span className="contact-card__icon">📧</span>
              <h3>Email</h3>
              <a href="mailto:contato@papelariapremium.com">contato@papelariapremium.com</a>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon">📱</span>
              <h3>Telefone</h3>
              <a href="tel:+5511999999999">(11) 99999-9999</a>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon">📍</span>
              <h3>Localização</h3>
              <p>São Paulo, SP — Brasil</p>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon">⏰</span>
              <h3>Horário</h3>
              <p>Seg–Sex: 9h às 18h</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
