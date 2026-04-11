import React from 'react';
import CTA from '../components/sections/CTA';
import './Services.css';

const services = [
  {
    id: 1,
    icon: '📋',
    title: 'Papelaria Corporativa',
    description: 'Cartões de visita, letterheads, envelopes e blocos de notas com design sofisticado que refletem a identidade da sua marca com precisão.',
    features: ['Cartões de visita premium', 'Papéis timbrados', 'Envelopes personalizados', 'Blocos de notas'],
  },
  {
    id: 2,
    icon: '✉️',
    title: 'Convites Premium',
    description: 'Convites para eventos corporativos e sociais com acabamento refinado e linguagem visual exclusiva.',
    features: ['Convites corporativos', 'Convites de casamento', 'Convites de gala', 'Save the dates'],
  },
  {
    id: 3,
    icon: '📦',
    title: 'Embalagens Luxo',
    description: 'Caixas, sacolas e embalagens customizadas que elevam a percepção de valor do seu produto.',
    features: ['Caixas especiais', 'Sacolas de marca', 'Embalagens para presente', 'Tags e selos'],
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Identidade Visual',
    description: 'Desenvolvimento completo de marca com paleta de cores, tipografia e diretrizes de aplicação.',
    features: ['Logotipo', 'Manual de marca', 'Paleta cromática', 'Guia tipográfico'],
  },
  {
    id: 5,
    icon: '📚',
    title: 'Catálogos & Brochuras',
    description: 'Materiais de comunicação editorial com design sofisticado e conteúdo bem estruturado.',
    features: ['Catálogos de produto', 'Brochuras institucionais', 'Lookbooks', 'Relatórios anuais'],
  },
  {
    id: 6,
    icon: '✨',
    title: 'Acabamentos Especiais',
    description: 'Técnicas como hot stamping, relevo e verniz localizado para um toque de exclusividade.',
    features: ['Hot stamping', 'Relevo seco', 'Verniz localizado', 'Corte especial'],
  },
];

const process_steps = [
  { step: '01', title: 'Briefing', description: 'Entendemos suas necessidades, valores de marca e objetivos do projeto.' },
  { step: '02', title: 'Conceito', description: 'Desenvolvemos a direção criativa com referências visuais e propostas iniciais.' },
  { step: '03', title: 'Design', description: 'Criamos o projeto com atenção aos detalhes, materiais e acabamentos.' },
  { step: '04', title: 'Entrega', description: 'Finalizamos e produzimos com controle de qualidade em cada etapa.' },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="services-page" aria-labelledby="services-page-title">
        <div className="container">
          <div className="services-page__hero reveal">
            <p className="section-eyebrow">Nossos serviços</p>
            <h1 id="services-page-title">Soluções completas de design premium para papelaria.</h1>
            <p className="services-page__lead">
              Da concepção à entrega, oferecemos um ecossistema completo para marcas que buscam excelência em materiais impressos e papelaria institucional.
            </p>
          </div>

          <div className="services-page__grid">
            {services.map((service, index) => (
              <article key={service.id} className={`sp-card reveal reveal-delay-${(index % 3) + 1}`}>
                <div className="sp-card__icon">{service.icon}</div>
                <h3 className="sp-card__title">{service.title}</h3>
                <p className="sp-card__description">{service.description}</p>
                <ul className="sp-card__features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="services-page__process reveal reveal-delay-2">
            <p className="section-eyebrow">Nosso processo</p>
            <h2>Como trabalhamos</h2>
            <div className="process-grid">
              {process_steps.map((item) => (
                <div key={item.step} className="process-step">
                  <span className="process-step__number">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ServicesPage;

