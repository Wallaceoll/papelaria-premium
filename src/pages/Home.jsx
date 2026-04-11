import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Home.css';

const FLOAT_WORDS = ['casamento', 'marca', 'evento', 'escritório', 'presente', 'coleção'];

const showcaseProducts = [
  {
    title: 'Convite editorial',
    subtitle: 'Personalizado',
    tone: 'gold',
    lines: ['Envelope em linho', 'Foil dourado', 'Tag de nome'],
  },
  {
    title: 'Kit de escritório',
    subtitle: 'Linha papelaria',
    tone: 'sage',
    lines: ['Planner semanal', 'Bloco A5', 'Cartela de adesivos'],
  },
  {
    title: 'Packaging boutique',
    subtitle: 'Marca & varejo',
    tone: 'terracotta',
    lines: ['Caixa rígida', 'Cartão de cuidado', 'Selo autocolante'],
  },
];

const sampleFamilies = [
  {
    eyebrow: 'Personalizados',
    title: 'Projetos sob medida para eventos, marcas e ocasiões especiais',
    desc: 'Convites, kits de celebração, papelaria de mesa, brindes e peças editoriais criadas do zero com conceito, escolha de material e acabamento alinhados ao seu momento.',
    items: ['Convites premium', 'Menu e papelaria de mesa', 'Onboarding corporativo', 'Packaging comemorativo'],
    tone: 'gold',
  },
  {
    eyebrow: 'Linha papelaria',
    title: 'Produtos prontos para elevar rotina, presente e organização',
    desc: 'Nem tudo precisa nascer de um briefing. Também trabalhamos com cadernos, blocos, planners, cartões, tags, adesivos e itens de papelaria com curadoria visual e acabamento premium.',
    items: ['Cadernos e planners', 'Blocos e fichários', 'Cartões e tags', 'Kits presenteáveis'],
    tone: 'sage',
  },
];

const featuredCards = [
  {
    num: '01',
    title: 'Celebrações com direção de arte',
    desc: 'Suites completas com convite, envelope, menu, RSVP e papelaria de apoio pensadas como coleção.',
    tags: ['Casamento', 'Noivado', 'Aniversário'],
    tone: 'gold',
    kind: 'suite',
  },
  {
    num: '02',
    title: 'Papelaria para marcas e equipes',
    desc: 'Cartões, pastas, blocos, brindes e kits que traduzem a identidade da empresa em matéria e toque.',
    tags: ['Branding', 'RH', 'Eventos'],
    tone: 'sage',
    kind: 'corporate',
  },
  {
    num: '03',
    title: 'Prateleira de papelaria premium',
    desc: 'Produtos com apelo visual imediato para presentear, organizar e vender melhor dentro da sua marca.',
    tags: ['Planner', 'Bloco', 'Desk set'],
    tone: 'terracotta',
    kind: 'desk',
  },
  {
    num: '04',
    title: 'Packaging que vira experiência',
    desc: 'Caixas, cintas, cartões e inserts desenvolvidos para valorizar o produto mesmo antes da abertura.',
    tags: ['Caixas', 'Etiquetas', 'Unboxing'],
    tone: 'ink',
    kind: 'packaging',
  },
];

const galleryProducts = [
  {
    title: 'Coleção casamento Aurora',
    label: 'Envelope + convite + menu',
    tone: 'gold',
    kind: 'suite',
  },
  {
    title: 'Planner semanal Folia',
    label: 'Linha papelaria pronta',
    tone: 'sage',
    kind: 'planner',
  },
  {
    title: 'Caixa boutique com tag',
    label: 'Packaging para varejo',
    tone: 'terracotta',
    kind: 'packaging',
  },
  {
    title: 'Kit onboarding de marca',
    label: 'Bloco + folder + cartão',
    tone: 'ink',
    kind: 'corporate',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Curadoria',
    desc: 'Entendemos se o projeto pede criação exclusiva, adaptação de linha existente ou uma combinação dos dois.',
  },
  {
    step: '02',
    title: 'Direção visual',
    desc: 'Definimos paleta, papel, formato, textura e o conjunto de peças com previews claros para aprovação.',
  },
  {
    step: '03',
    title: 'Produção',
    desc: 'Executamos com acabamento premium, controle de prova e composição final pensada para valor percebido.',
  },
  {
    step: '04',
    title: 'Entrega',
    desc: 'Seu pedido chega pronto para encantar, organizar ou vender melhor, com apresentação e proteção adequadas.',
  },
];

const testimonials = [
  {
    quote: 'A apresentação dos kits elevou imediatamente a percepção da nossa marca. O material parecia editorial, não só institucional.',
    author: 'Paula Nogueira',
    role: 'Brand manager · Marea Studio',
  },
  {
    quote: 'Os clientes conseguiam visualizar exatamente o que iam receber. Isso reduziu dúvidas e aumentou muito a segurança na compra.',
    author: 'Bruna e Caio',
    role: 'Papelaria para casamento',
  },
  {
    quote: 'A combinação entre produtos personalizados e itens prontos deixou nossa operação mais inteligente e a vitrine muito mais forte.',
    author: 'Renata Alves',
    role: 'Loja conceito · Casa Lume',
  },
];

function ProductMock({ tone, kind, compact = false }) {
  return (
    <div className={`product-mock product-mock--${tone} product-mock--${kind} ${compact ? 'product-mock--compact' : ''}`}>
      <div className="product-mock__sheet product-mock__sheet--base" />
      <div className="product-mock__sheet product-mock__sheet--top" />
      <div className="product-mock__accent" />
      <div className="product-mock__label" />
      <div className="product-mock__lines">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function Home() {
  useReveal();
  const wordRef = useRef(null);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    let i = 0;
    const cycle = () => {
      el.classList.add('fade-out');
      setTimeout(() => {
        i = (i + 1) % FLOAT_WORDS.length;
        el.textContent = FLOAT_WORDS[i];
        el.classList.remove('fade-out');
      }, 400);
    };

    const id = setInterval(cycle, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home">
      <section className="hero hero--editorial mesh-bg noise">
        <div className="hero__orb hero__orb--one" aria-hidden />
        <div className="hero__orb hero__orb--two" aria-hidden />
        <div className="container-wide hero__layout">
          <div className="hero__content">
            <div className="hero__eyebrow eyebrow reveal reveal-delay-1">
              Folia Studio de papelaria
            </div>
            <h1 className="hero__title display-1 reveal reveal-delay-2">
              Papelaria com presença de <em className="hero__em" ref={wordRef}>{FLOAT_WORDS[0]}</em>,
              <br />mais leve, tátil e memorável.
            </h1>
                    Folia Studio de papelaria
              Desenvolvemos projetos personalizados e também linhas de papelaria premium para quem precisa vender melhor,
              presentear melhor ou simplesmente apresentar melhor o próprio universo.
                    Papelaria com linguagem de <em className="hero__em" ref={wordRef}>{FLOAT_WORDS[0]}</em>,<br />visual real e desejo imediato.
              <Link to="/contato" className="btn btn-primary btn-lg">
                Solicitar orçamento
                    Criamos produtos personalizados e também linhas prontas de papelaria, escola, escritório, presentes e packaging.
                    A proposta aqui é simples: mostrar melhor para vender melhor e gerar mais confiança desde a primeira visita.
                Ver exemplos de produtos
              </Link>
            </div>
            <div className="hero__mini-points reveal reveal-delay-5">
              <span>Convites e celebrações</span>
              <span>Papelaria para marcas</span>
              <span>Planners, blocos e presentes</span>
            </div>
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
                      <h3>{item.title}</h3>
                      <ul>
                        {item.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
                    Em vez de blocos decorativos sem função, a home agora trabalha como vitrine: apresenta as frentes principais da Folia e leva direto para o filtro correto em serviços.
              <span className="eyebrow">Mix de catálogo</span>
              <strong>Personalizados + linha de papelaria</strong>
              <p>
                A experiência não depende só do texto. Por isso a vitrine já apresenta formatos, materiais e tipos de produto logo na primeira dobra.
                  {CATALOG_ITEMS.map((item, index) => (
                    <article className={`catalog-card card reveal reveal-delay-${(index % 4) + 1}`} key={item.title}>
                      <img className="catalog-card__image" src={item.image} alt={item.title} loading="lazy" />
                      <div className="catalog-card__overlay" />
                      <div className="catalog-card__body">
                        <h3 className="heading-1">{item.title}</h3>
                        <p className="body-base">{item.desc}</p>
                        <Link to={item.to} className="catalog-card__cta btn btn-primary">
                          {item.cta}
                        </Link>
                      </div>
                    </article>
                  ))}
          <span>Presentes em papel</span>
        </div>
      </section>

      <section className="section section-xl catalog-intro">
        <div className="container-wide catalog-intro__grid">
          <div className="catalog-intro__copy reveal">
            <span className="eyebrow">O que a sua página precisa mostrar</span>
            <h2 className="display-2">Menos bloco de texto, mais produto visível e contexto de compra.</h2>
            <p className="body-large">
              A inspiração da referência está na força da composição: títulos grandes, respiro, prova visual e seções que explicam rapidamente o valor da solução.
              Aqui traduzimos isso para uma papelaria clara, sofisticada e confiável.
                  {PROCESS.map((item, index) => (
                    <div className={`process-item reveal reveal-delay-${index + 1}`} key={item.step}>
                      <div className="process-icon">{item.icon}</div>
                      <div className="process-step eyebrow">0{item.step}</div>
                      <h3 className="process-title">{item.title}</h3>
                      <p className="process-desc">{item.desc}</p>
                    </div>
                  ))}
                <h3 className="heading-1">{family.title}</h3>
                <p className="body-base">{family.desc}</p>
                <div className="catalog-family__chips">
                  {family.items.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>
                <ProductMock tone={family.tone} kind={family.tone === 'sage' ? 'planner' : 'suite'} compact />
              </article>
            ))}
          </div>
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
                <div className="fs-card__topline">
                  <div className="fs-card__num eyebrow">{item.num}</div>
                  <span className={`fs-card__tone fs-card__tone--${item.tone}`} />
                </div>
                <ProductMock tone={item.tone} kind={item.kind} compact />
                <h3 className="fs-card__title heading-1">{item.title}</h3>
                <p className="fs-card__desc body-base">{item.desc}</p>
                <div className="fs-card__tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section visual-gallery">
        <div className="container-wide visual-gallery__layout">
          <div className="visual-gallery__sticky reveal-left">
            <span className="eyebrow">Exposição visual</span>
            <h2 className="display-2">O cliente precisa enxergar formatos, não só imaginar.</h2>
            <p className="body-large">
              A galeria abaixo funciona como uma vitrine editorial: mostra famílias de produto, ajuda a precificar mentalmente a qualidade e passa confiança antes do primeiro contato.
            </p>
            <Link to="/servicos" className="btn btn-primary">
              Abrir catálogo completo
            </Link>
          </div>

          <div className="visual-gallery__grid">
            {galleryProducts.map((item, index) => (
              <article className={`gallery-card card reveal reveal-delay-${(index % 4) + 1}`} key={item.title}>
                <ProductMock tone={item.tone} kind={item.kind} />
                <div className="gallery-card__body">
                  <p className="gallery-card__label">{item.label}</p>
                  <h3>{item.title}</h3>
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
            <h2 className="display-2">Do briefing ao produto final com leitura simples.</h2>
          </div>

          <div className="process-grid process-grid--editorial">
            {processSteps.map((step, index) => (
              <article className={`process-item process-item--card reveal reveal-delay-${index + 1}`} key={step.step}>
                <div className="process-step eyebrow">{step.step}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </article>
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
            {testimonials.map((item, index) => (
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
            <span className="eyebrow">Pronto para vender melhor sua papelaria?</span>
            <h2 className="display-2 cta-final__title">
              Sua marca e seus produtos podem <em>parecer mais desejáveis</em> já na primeira visita.
            </h2>
            <p className="body-large cta-final__sub">
              Montamos vitrine, direcionamos materiais e desenhamos uma linha visual que valoriza tanto o personalizado quanto a papelaria pronta.
            </p>
            <div className="cta-final__actions">
              <Link to="/contato" className="btn btn-primary btn-lg">
                Falar com a equipe
              </Link>
              <Link to="/servicos" className="btn btn-outline btn-lg">
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
