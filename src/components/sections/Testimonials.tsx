import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marina Silva',
      role: 'Diretora Criativa',
      company: 'Estúdio de Moda',
      text: 'A qualidade do trabalho e a atenção aos detalhes foram impecáveis. Nossos clientes imediatamente perceberam o valor agregado.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      role: 'CEO',
      company: 'Consultoria Premium',
      text: 'Transformaram nossa identidade visual completamente. O design reflete exatamente a sofisticação que buscávamos.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Juliana Costa',
      role: 'Gerente de Marketing',
      company: 'Joalharia Exclusiva',
      text: 'Profissionais dedicados, criativos e que entendem o que significa luxo. Recomendo fortemente!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-header__eyebrow">O que nossos clientes dizem</p>
          <h2 className="section-header__title" id="testimonials-title">Depoimentos de satisfação</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.id} className={`testimonial-card reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>

              <p className="testimonial-card__text">"{testimonial.text}"</p>

              <div className="testimonial-card__author">
                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                <div className="author-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                  <span className="author-company">{testimonial.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
