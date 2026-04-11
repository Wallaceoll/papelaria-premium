import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <div className="container">
        <div className="about-hero reveal">
          <p className="section-eyebrow">Quem somos</p>
          <h1 id="about-title">Tradição e inovação na arte da papelaria.</h1>
          <p className="about-hero__lead">
            Somos um estúdio especializado em papelaria premium, convites e materiais de marca com acabamento editorial. Nossa missão é transformar cada projeto em uma experiência tátil e visual que comunica sofisticação.
          </p>
        </div>

        <div className="about-values reveal reveal-delay-1">
          <article className="value-card">
            <span className="value-number">01</span>
            <h3>Curadoria estética</h3>
            <p>Cada projeto passa por um processo rigoroso de seleção visual, garantindo que somente os melhores materiais, cores e composições cheguem ao resultado final.</p>
          </article>
          <article className="value-card">
            <span className="value-number">02</span>
            <h3>Acabamento autoral</h3>
            <p>Hot stamping, relevo seco, verniz localizado e papel de gramatura alta são parte do nosso vocabulário padrão. O detalhe faz a diferença.</p>
          </article>
          <article className="value-card">
            <span className="value-number">03</span>
            <h3>Consistência de marca</h3>
            <p>Atuamos como extensão da identidade visual do cliente, garantindo que todos os materiais reflitam o posicionamento e os valores da marca.</p>
          </article>
        </div>

        <div className="about-story reveal reveal-delay-2">
          <div className="about-story__text">
            <p className="section-eyebrow">Nossa história</p>
            <h2>Mais de uma década criando materiais que comunicam valor.</h2>
            <p>
              Fundada com a convicção de que papelaria institucional é um dos mais poderosos instrumentos de comunicação de marca, a Papelaria Premium nasceu da intersecção entre design editorial, artes gráficas e branding contemporâneo.
            </p>
            <p>
              Ao longo dos anos, desenvolvemos projetos para marcas de diferentes segmentos — moda, joalheria, advocacia, arquitetura, gastronomia e hospitalidade — sempre com o mesmo compromisso: entregar materiais que transmitem autoridade, elegância e intenção.
            </p>
          </div>
          <div className="about-story__visual" aria-hidden="true">
            <div className="story-visual-block">
              <div className="story-visual-block__inner">
                <span className="story-visual-block__accent">P</span>
                <p>Design editorial desde 2012</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-numbers reveal reveal-delay-3">
          <div className="number-item">
            <strong>+120</strong>
            <span>Projetos entregues</span>
          </div>
          <div className="number-item">
            <strong>98%</strong>
            <span>Taxa de aprovação</span>
          </div>
          <div className="number-item">
            <strong>+40</strong>
            <span>Marcas atendidas</span>
          </div>
          <div className="number-item">
            <strong>12</strong>
            <span>Anos de mercado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
