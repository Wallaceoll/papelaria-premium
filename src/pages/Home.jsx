import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Home.css';

/* ─── Animated counter ─────────────────────────── */
function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(to / 60);
      const id = setInterval(() => {
        start = Math.min(start + step, to);
        el.textContent = start + suffix;
        if (start >= to) clearInterval(id);
      }, 20);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Floating word ─────────────────────────────── */
const FLOAT_WORDS = ['casamento', 'aniversário', 'nascimento', 'corporativo', 'formatura', 'chá de bebê'];

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

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero mesh-bg noise">
        <div className="hero__bg-shapes" aria-hidden>
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__eyebrow eyebrow reveal reveal-delay-1">
              ✦ Papelaria de Alto Padrão
            </div>
            <h1 className="hero__title display-1 reveal reveal-delay-2">
              Arte que existe <br />
              para o seu <br />
              <em className="hero__em" ref={wordRef}>{FLOAT_WORDS[0]}</em>
            </h1>
            <p className="hero__sub body-large reveal reveal-delay-3">
              Criamos peças únicas que transformam papel em emoção. <br className="hide-mobile" />
              Design exclusivo, produção artesanal, entrega impecável.
            </p>
            <div className="hero__actions reveal reveal-delay-4">
              <Link to="/contato" className="btn btn-primary btn-lg">
                Solicitar Orçamento
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link to="/servicos" className="btn btn-ghost btn-lg">
                Ver portfólio
                <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          <div className="hero__visual reveal-right">
            <div className="hero__card-stack">
              <div className="hero__card hero__card--back">
                <div className="hero__card-inner">
                  <div className="hero__card-pattern" />
                  <p className="hero__card-label eyebrow">Kit Casamento</p>
                </div>
              </div>
              <div className="hero__card hero__card--mid">
                <div className="hero__card-inner">
                  <div className="hero__card-monogram">A & R</div>
                  <p className="hero__card-detail eyebrow">Convite Premium</p>
                </div>
              </div>
              <div className="hero__card hero__card--front">
                <div className="hero__card-inner">
                  <div className="hero__card-seal">✦</div>
                  <p className="hero__card-front-text">
                    <span className="hero__card-from">Folia</span>
                    <span className="hero__card-desc">Papelaria de Alto Padrão</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint reveal reveal-delay-5">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="stats">
        <div className="container-wide">
          <div className="stats__grid">
            {[
              { value: 1200, suffix: '+', label: 'Projetos entregues' },
              { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
              { value: 7, suffix: ' anos', label: 'De experiência' },
              { value: 40, suffix: '+', label: 'Tipos de produto' },
            ].map((s, i) => (
              <div className={`stats__item reveal reveal-delay-${i + 1}`} key={s.label}>
                <p className="stats__value display-3">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="stats__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPOSTA ─────────────────────────────── */}
      <section className="section proposta">
        <div className="container">
          <div className="proposta__grid">
            <div className="proposta__left">
              <span className="eyebrow reveal">Nossa proposta</span>
              <h2 className="display-2 proposta__title reveal reveal-delay-1">
                Papelaria que <br /><em>conta histórias</em>
              </h2>
              <span className="divider reveal reveal-delay-2" />
            </div>
            <div className="proposta__right">
              <p className="body-large reveal reveal-delay-2">
                No mundo do digital, o papel se tornou o mais sofisticado dos gestos. Uma peça bem elaborada não é apenas impressão — é tato, textura, perfume, emoção.
              </p>
              <p className="body-base reveal reveal-delay-3">
                Na Folia, cada projeto nasce de uma conversa profunda sobre o que você quer sentir e o que quer fazer sentir. Desenvolvemos identidades visuais para os seus momentos, produzidas com materiais selecionados e atenção minuciosa a cada detalhe.
              </p>
              <Link to="/personalizacao" className="btn btn-outline reveal reveal-delay-4">
                Como funciona →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS DESTAQUE ────────────────────── */}
      <section className="section featured-services">
        <div className="container-wide">
          <div className="section-header reveal">
            <span className="eyebrow">O que criamos</span>
            <h2 className="display-2">Nossos serviços</h2>
          </div>

          <div className="fs-grid">
            {[
              {
                num: '01',
                title: 'Convites & Celebrações',
                desc: 'Do convite de casamento ao kit de aniversário infantil. Cada detalhe pensado para criar expectativa e encantamento antes mesmo do evento começar.',
                tags: ['Casamento', 'Bebê', 'Aniversário', 'Formatura'],
                color: '#C9A84C',
              },
              {
                num: '02',
                title: 'Papelaria Corporativa',
                desc: 'Cartões, pastas, blocos e kits de onboarding que elevam a percepção da sua marca. Porque a primeira impressão começa antes do primeiro aperto de mão.',
                tags: ['Cartões', 'Branding', 'Onboarding', 'Kits'],
                color: '#8BA89A',
              },
              {
                num: '03',
                title: 'Brindes & Packaging',
                desc: 'Embalagens e brindes que se tornam parte da experiência. Packaging premium que transforma qualquer produto em um presente memorável.',
                tags: ['Caixas', 'Sacolas', 'Tags', 'Fitas'],
                color: '#C4785A',
              },
              {
                num: '04',
                title: 'Projetos Especiais',
                desc: 'Instalações em papel, cenografias, peças de arte editorial e projetos únicos que não cabem em categorias. Se está na sua imaginação, executamos.',
                tags: ['Arte', 'Editorial', 'Cenografia', 'Instalação'],
                color: '#6B6560',
              },
            ].map((s, i) => (
              <div
                className={`fs-card reveal reveal-delay-${i + 1}`}
                key={s.num}
              >
                <div className="fs-card__num eyebrow">{s.num}</div>
                <div className="fs-card__accent" style={{ background: s.color }} />
                <h3 className="fs-card__title heading-1">{s.title}</h3>
                <p className="fs-card__desc body-base">{s.desc}</p>
                <div className="fs-card__tags">
                  {s.tags.map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <Link to="/servicos" className="fs-card__link btn btn-ghost">
                  Saiba mais
                  <svg className="arrow" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO ─────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header--light reveal">
            <span className="eyebrow" style={{ color: 'rgba(201,168,76,0.8)' }}>Como trabalhamos</span>
            <h2 className="display-2" style={{ color: 'var(--warm-white)' }}>Do conceito à entrega</h2>
          </div>

          <div className="process-grid">
            {[
              { step: '1', title: 'Briefing', icon: '◎', desc: 'Você nos conta sua ideia, o evento ou a necessidade. Quanto mais detalhe, mais personalizado o resultado.' },
              { step: '2', title: 'Conceito', icon: '◈', desc: 'Nossa equipe desenvolve conceitos criativos exclusivos para o seu projeto, com referências e moodboard.' },
              { step: '3', title: 'Aprovação', icon: '◇', desc: 'Você recebe previews digitais detalhados. Ajustamos até que cada detalhe esteja perfeito para você.' },
              { step: '4', title: 'Produção', icon: '◉', desc: 'Imprimimos com equipamentos de alta precisão e acabamentos artesanais selecionados especialmente para o projeto.' },
              { step: '5', title: 'Entrega', icon: '◍', desc: 'Entregamos com embalagem premium, protegida e identificada. Seu projeto chega exatamente como aprovado.' },
            ].map((p, i) => (
              <div className={`process-item reveal reveal-delay-${i + 1}`} key={p.step}>
                <div className="process-icon">{p.icon}</div>
                <div className="process-step eyebrow">{p.step < 10 ? `0${p.step}` : p.step}</div>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────── */}
      <section className="section testimonials">
        <div className="container-wide">
          <div className="section-header reveal">
            <span className="eyebrow">O que dizem</span>
            <h2 className="display-2">Clientes que confiam</h2>
          </div>

          <div className="testimonials-grid">
            {[
              {
                quote: 'Os convites do nosso casamento foram o objeto mais comentado por todos os convidados. Cada detalhe era exatamente o que sonhamos, e a qualidade do papel e dos acabamentos superou qualquer expectativa.',
                author: 'Mariana & Felipe',
                role: 'Casamento',
                stars: 5,
              },
              {
                quote: 'Contratamos a Folia para o kit de boas-vindas da nossa empresa e a diferença foi imediata. Novos colaboradores comentam sobre a qualidade das peças no primeiro dia. Tornou-se parte da nossa cultura.',
                author: 'Carolina Mendes',
                role: 'Diretora de RH · TechFlow',
                stars: 5,
              },
              {
                quote: 'A Folia transformou nossa coleção de verão com um packaging que virou objeto de desejo. Clientes fotografam e postam a embalagem antes mesmo de abrir o produto. ROI imediato.',
                author: 'André Lima',
                role: 'Fundador · Casa Verde',
                stars: 5,
              },
            ].map((t, i) => (
              <div className={`testimonial-card reveal reveal-delay-${i + 1}`} key={t.author}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="star">★</span>
                  ))}
                </div>
                <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.author[0]}</div>
                  <div>
                    <p className="testimonial-name">{t.author}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────── */}
      <section className="cta-final mesh-bg noise">
        <div className="container">
          <div className="cta-final__inner reveal">
            <span className="eyebrow">Pronto para começar?</span>
            <h2 className="display-2 cta-final__title">
              Seu projeto merece <br />
              ser <em>extraordinário</em>
            </h2>
            <p className="body-large cta-final__sub">
              Peça um orçamento sem compromisso. Respondemos em até 24h.
            </p>
            <div className="cta-final__actions">
              <Link to="/contato" className="btn btn-primary btn-lg">
                Quero um orçamento
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link to="/personalizacao" className="btn btn-outline btn-lg">
                Ver processo →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
