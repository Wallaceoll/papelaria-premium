import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Home.css';

const FLOAT_WORDS = ['casamento', 'marca', 'evento', 'escritório', 'presente', 'coleção'];

const HERO_PRODUCTS = [
  {
    title: 'Convites e celebrações',
    subtitle: 'Personalizados',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    to: '/servicos',
  },
  {
    title: 'Papelaria para marcas',
    subtitle: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    to: '/servicos',
  },
  {
    title: 'Planners, blocos e presentes',
    subtitle: 'Linha papelaria',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    to: '/servicos',
  },
];

const CATALOG_ITEMS = [
  {
    title: 'Convites com direção de arte',
    desc: 'Suites completas com envelope, RSVP, menu e acabamentos que valorizam o momento desde o primeiro contato.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
    to: '/servicos',
    cta: 'Ver celebrações',
  },
  {
    title: 'Papelaria escolar e de escritório',
    desc: 'Cadernos, planners, blocos, desk sets e itens de rotina com visual premium e utilidade real no dia a dia.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
    to: '/servicos',
    cta: 'Ver linha papelaria',
  },
  {
    title: 'Materiais para marcas e equipes',
    desc: 'Cartões, folders, onboarding, kits institucionais e peças impressas para transmitir organização e valor percebido.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    to: '/servicos',
    cta: 'Ver corporativo',
  },
  {
    title: 'Packaging e apoio de produto',
    desc: 'Caixas, cintas, cartões, etiquetas e selos para transformar entrega e unboxing em experiência de marca.',
    image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1400&q=80',
    to: '/servicos',
    cta: 'Ver packaging',
  },
];

const PROCESS = [
  {
    step: '1',
    icon: '◎',
    title: 'Briefing',
    desc: 'Você explica a necessidade e nós orientamos o melhor caminho entre produto personalizado, linha pronta ou mix dos dois.',
  },
  {
    step: '2',
    icon: '◈',
    title: 'Curadoria',
    desc: 'Selecionamos formato, papel, acabamento e estrutura visual para que a peça tenha presença e função clara.',
  },
  {
    step: '3',
    icon: '◇',
    title: 'Aprovação',
    desc: 'Você valida proposta, composição e detalhes antes da produção, com leitura simples do que será entregue.',
  },
  {
    step: '4',
    icon: '◉',
    title: 'Produção',
    desc: 'Entramos em produção com atenção a acabamento, consistência visual e apresentação final do produto.',
  },
  {
    step: '5',
    icon: '◍',
    title: 'Entrega',
    desc: 'O pedido chega pronto para encantar, organizar ou vender melhor, com apresentação compatível com a proposta.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Conseguimos visualizar os produtos logo na primeira visita. Isso passou muito mais segurança para fechar o projeto.',
    author: 'Bruna e Caio',
    role: 'Papelaria para casamento',
  },
  {
    quote: 'A combinação entre linha de papelaria e peças personalizadas deixou nossa vitrine muito mais forte e comercial.',
    author: 'Renata Alves',
    role: 'Loja conceito',
  },
  {
    quote: 'A apresentação dos materiais elevou a percepção da marca antes mesmo do cliente tocar no produto.',
    author: 'Paula Nogueira',
    role: 'Brand manager',
  },
];

export default function Home() {
  useReveal();
  const wordRef = useRef(null);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    let index = 0;
    const cycle = () => {
      el.classList.add('fade-out');
      setTimeout(() => {
        index = (index + 1) % FLOAT_WORDS.length;
        el.textContent = FLOAT_WORDS[index];
        el.classList.remove('fade-out');
      }, 400);
    };

    const interval = setInterval(cycle, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section className="hero hero--editorial mesh-bg noise">
        <div className="hero__orb hero__orb--one" aria-hidden />
        <div className="hero__orb hero__orb--two" aria-hidden />
        <div className="container-wide hero__layout">
          <div className="hero__content">
            <div className="hero__eyebrow eyebrow reveal reveal-delay-1">Folia Studio de papelaria</div>
            <h1 className="hero__title display-1 reveal reveal-delay-2">
              Papelaria com presença de <em className="hero__em" ref={wordRef}>{FLOAT_WORDS[0]}</em>,
              <br />mais leve, tátil e memorável.
            </h1>
            <p className="hero__sub body-large reveal reveal-delay-3">
              Projetos personalizados, papelaria escolar e de escritório, produtos presenteáveis e soluções impressas para marcas.
            </p>
            <div className="hero__actions reveal reveal-delay-4">
              <Link to="/contato" className="btn btn-primary btn-lg">Solicitar orçamento</Link>
              <Link to="/servicos" className="btn btn-outline btn-lg">Abrir catálogo completo</Link>
            </div>
          </div>

          <div className="hero-showcase reveal-right">
            <div className="hero-showcase__main card">
              <div className="hero-showcase__header">
                <span className="eyebrow">Produtos em destaque</span>
                <p>Exemplos reais para o cliente entender melhor o que a Folia entrega.</p>
              </div>
              <div className="hero-showcase__grid">
                {HERO_PRODUCTS.map((item) => (
                  <article className="showpiece showpiece--photo card" key={item.title}>
                    <img className="showpiece__image" src={item.image} alt={item.title} loading="lazy" />
                    <div className="showpiece__body">
                      <span className="showpiece__subtitle">{item.subtitle}</span>
                      <h3>{item.title}</h3>
                      <Link to={item.to} className="showpiece__link">Explorar categoria</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="hero-showcase__aside card">
              <span className="eyebrow">Mix de catálogo</span>
              <strong>Personalizados, papelaria pronta e materiais para marca</strong>
              <p>
                Em vez de blocos decorativos sem função, a home funciona como vitrine e leva o usuário para as categorias que realmente importam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-xl catalog-intro">
        <div className="container-wide catalog-intro__grid">
          <div className="catalog-intro__copy reveal">
            <span className="eyebrow">Visão do catálogo</span>
            <h2 className="display-2">Mais produto visível, mais clareza comercial e mais confiança para comprar.</h2>
            <p className="body-large">
              A navegação precisa mostrar o que vocês vendem de verdade. Por isso a vitrine abaixo dá contexto para evento, escola, escritório, marca e embalagem.
            </p>
          </div>

          <div className="catalog-intro__cards">
            {CATALOG_ITEMS.map((item, index) => (
              <article className={`catalog-card card reveal reveal-delay-${(index % 4) + 1}`} key={item.title}>
                <img className="catalog-card__image" src={item.image} alt={item.title} loading="lazy" />
                <div className="catalog-card__overlay" />
                <div className="catalog-card__body">
                  <h3 className="heading-1">{item.title}</h3>
                  <p className="body-base">{item.desc}</p>
                  <Link to={item.to} className="catalog-card__cta btn btn-primary">{item.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark section-dark--soft">
        <div className="container-wide">
          <div className="section-header section-header--light reveal">
            <span className="eyebrow">Fluxo de trabalho</span>
            <h2 className="display-2">Do briefing à entrega, com leitura simples.</h2>
          </div>
          <div className="process-grid">
            {PROCESS.map((item, index) => (
              <div className={`process-item reveal reveal-delay-${index + 1}`} key={item.step}>
                <div className="process-icon">{item.icon}</div>
                <div className="process-step eyebrow">0{item.step}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials testimonials--light">
        <div className="container-wide">
          <div className="section-header reveal">
            <span className="eyebrow">Confiança</span>
            <h2 className="display-2">Quando o produto aparece, a decisão fica mais fácil.</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((item, index) => (
              <article className={`testimonial-card reveal reveal-delay-${index + 1}`} key={item.author}>
                <span className="testimonial-kicker">Feedback de cliente</span>
                <blockquote className="testimonial-quote">“{item.quote}”</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{item.author[0]}</div>
                  <div>
                    <p className="testimonial-name">{item.author}</p>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-final mesh-bg noise">
        <div className="container">
          <div className="cta-final__inner reveal">
            <span className="eyebrow">Pronto para começar?</span>
            <h2 className="display-2 cta-final__title">Seu projeto pode <em>parecer mais desejável</em> já na primeira visita.</h2>
            <p className="body-large cta-final__sub">
              Organizamos uma linha visual que valoriza tanto a papelaria personalizada quanto os produtos prontos para vender e apresentar melhor.
            </p>
            <div className="cta-final__actions">
              <Link to="/contato" className="btn btn-primary btn-lg">Falar com a equipe</Link>
              <Link to="/servicos" className="btn btn-outline btn-lg">Ver catálogo</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}