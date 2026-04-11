import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: '📋',
      title: 'Papelaria Corporativa',
      description: 'Cartões de visita, letterheads e envelopes com design sofisticado que refletem a identidade da sua marca com precisão.',
    },
    {
      id: 2,
      icon: '✉️',
      title: 'Convites Premium',
      description: 'Convites para eventos corporativos e sociais com acabamento refinado e linguagem visual exclusiva.',
    },
    {
      id: 3,
      icon: '📦',
      title: 'Embalagens Luxo',
      description: 'Caixas, sacolas e embalagens customizadas que elevam a percepção de valor do seu produto.',
    },
    {
      id: 4,
      icon: '🎨',
      title: 'Identidade Visual',
      description: 'Desenvolvimento completo de marca com paleta de cores, tipografia e diretrizes de aplicação.',
    },
    {
      id: 5,
      icon: '📚',
      title: 'Catálogos & Brochuras',
      description: 'Materiais de comunicação editorial com design sofisticado e conteúdo bem estruturado.',
    },
    {
      id: 6,
      icon: '✨',
      title: 'Acabamentos Especiais',
      description: 'Técnicas como hot stamping, relevo e verniz localizado para um toque de exclusividade.',
    },
  ];

  return (
    <section className="services" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-header__eyebrow">Soluções completas</p>
          <h2 className="section-header__title" id="services-title">Serviços de design premium para papelaria</h2>
          <p className="section-header__description">
            Oferecemos uma gama completa de soluções de design editorial, desde papelaria corporativa até embalagens de luxo, sempre com foco em excelência visual e consistência de marca.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article key={service.id} className={`service-card reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
