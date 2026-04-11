import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Servicos.css';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'celebracao', label: 'Celebração' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'papelaria', label: 'Papelaria' },
  { id: 'packaging', label: 'Packaging' },
];

const highlightFamilies = [
  {
    id: 'celebracao',
    label: 'Personalizados',
    title: 'Celebrar com presença visual',
    text: 'Convites, menus, cartões e kits que começam o encanto antes mesmo do evento acontecer.',
    image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'papelaria',
    label: 'Linha papelaria',
    title: 'Papelaria para escola, mesa e rotina',
    text: 'Produtos que funcionam bem na vitrine e continuam desejáveis no uso do dia a dia.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'corporativo',
    label: 'Corporativo',
    title: 'Marcas que querem tocar melhor',
    text: 'Materiais institucionais, onboarding e impressos que elevam a percepção da empresa.',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=80',
  },
];

const products = [
  {
    id: 1,
    cat: 'celebracao',
    badge: 'Celebração',
    title: 'Suite de casamento editorial',
    desc: 'Convite principal, RSVP, envelope e papelaria de mesa pensados como uma coleção delicada, elegante e memorável desde o primeiro toque.',
    price: 'A partir de R$ 18/conj.',
    details: ['Envelope em linho', 'Foil dourado', 'Menu de mesa', 'Tag nominal'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    cat: 'celebracao',
    badge: 'Celebração',
    title: 'Kit festa infantil premium',
    desc: 'Uma família completa de convites, toppers, tags e cartões para deixar o universo da festa coeso, afetivo e encantador.',
    price: 'A partir de R$ 12/conj.',
    details: ['Convite principal', 'Tags e toppers', 'Cartão de agradecimento', 'Paleta temática'],
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    cat: 'corporativo',
    badge: 'Corporativo',
    title: 'Kit onboarding de marca',
    desc: 'Bloco, carta de boas-vindas, folder e elementos institucionais para transformar o primeiro contato com a marca em experiência.',
    price: 'A partir de R$ 85/kit',
    details: ['Caderno A5', 'Folder institucional', 'Cartão da marca', 'Embalagem coordenada'],
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 4,
    cat: 'corporativo',
    badge: 'Corporativo',
    title: 'Identidade impressa executiva',
    desc: 'Cartões, pastas, envelopes e blocos com acabamento refinado para empresas que precisam comunicar organização, cuidado e valor.',
    price: 'Sob consulta',
    details: ['Cartão frente e verso', 'Envelope coordenado', 'Pasta de proposta', 'Bloco executivo'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 5,
    cat: 'papelaria',
    badge: 'Papelaria',
    title: 'Planner semanal premium',
    desc: 'Produto pronto para rotina, organização e presente. Capa especial, layout funcional e visual que chama atenção sem esforço.',
    price: 'A partir de R$ 68/unid.',
    details: ['Capa especial', 'Miolo semanal', 'Controle de metas', 'Bolso interno'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 6,
    cat: 'papelaria',
    badge: 'Papelaria',
    title: 'Desk set presenteável',
    desc: 'Conjunto com bloco, cartões, adesivos e marcador para presentear, montar vitrine ou elevar a experiência no escritório.',
    price: 'A partir de R$ 54/kit',
    details: ['Bloco destacável', 'Marcador', 'Mini cartões', 'Cinta personalizada'],
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 7,
    cat: 'papelaria',
    badge: 'Escolar',
    title: 'Kit escolar premium',
    desc: 'Caderno, fichário, etiquetas e complementos visuais para uma linha escolar mais organizada, desejável e comercialmente forte.',
    price: 'A partir de R$ 72/kit',
    details: ['Caderno capa dura', 'Etiquetas escolares', 'Marcadores', 'Bolsa organizadora'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 8,
    cat: 'papelaria',
    badge: 'Escritório',
    title: 'Linha para mesa e escritório',
    desc: 'Blocos, porta-recados, cartões e organizadores com acabamento premium para ambientes de trabalho que pedem presença visual.',
    price: 'A partir de R$ 32/unid.',
    details: ['Bloco de mesa', 'Cartões de recado', 'Organizador visual', 'Embalagem presenteável'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 9,
    cat: 'packaging',
    badge: 'Packaging',
    title: 'Caixa boutique com insert',
    desc: 'Estrutura pensada para unboxing, presente, lançamento ou varejo. O tipo de embalagem que já comunica valor antes da abertura.',
    price: 'A partir de R$ 8/unid.',
    details: ['Caixa rígida', 'Insert interno', 'Selo e cinta', 'Cartão de marca'],
    image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 10,
    cat: 'packaging',
    badge: 'Packaging',
    title: 'Etiquetas e selos premium',
    desc: 'Pequenos detalhes que seguram a narrativa da marca até o fim: tags, selos, adesivos e cartões de cuidado com acabamento marcante.',
    price: 'A partir de R$ 1,40/unid.',
    details: ['Hot stamping opcional', 'Corte especial', 'Cordão ou adesivo', 'Frente e verso'],
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function Servicos() {
  useReveal();
  const location = useLocation();
  const catalogRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = categories.some((item) => item.id === searchParams.get('categoria'))
    ? searchParams.get('categoria')
    : 'todos';
  const [active, setActive] = useState(initialCategory);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const current = searchParams.get('categoria');
    if (current && categories.some((item) => item.id === current)) {
      setActive(current);
      return;
    }
    setActive('todos');
  }, [searchParams]);

  useEffect(() => {
    if (location.hash !== '#catalogo' || !catalogRef.current) {
      return;
    }

    const top = catalogRef.current.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  }, [location.hash, searchParams]);

  const filtered = useMemo(() => (
    active === 'todos' ? products : products.filter((product) => product.cat === active)
  ), [active]);

  const selectCategory = (categoryId) => {
    setExpanded(null);
    if (categoryId === 'todos') {
      setSearchParams({});
      return;
    }
    setSearchParams({ categoria: categoryId });
  };

  return (
    <div className="servicos">
      <section className="servicos-hero mesh-bg noise">
        <div className="container-wide servicos-hero__layout">
          <div className="servicos-hero__copy">
            <span className="eyebrow reveal">Catálogo Folia</span>
            <h1 className="display-1 reveal reveal-delay-1">
              Produtos e serviços apresentados com mais clareza, mais apelo e mais intenção de compra.
            </h1>
            <p className="body-large reveal reveal-delay-2">
              Aqui o cliente encontra personalizados, papelaria para escola e escritório, materiais corporativos e packaging com exemplos visuais reais.
              A ideia é tirar o catálogo do campo abstrato e trazer vontade de clicar, pedir e comprar.
            </p>
          </div>

          <div className="servicos-hero__board reveal-right">
            {highlightFamilies.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`hero-family-card hero-family-card--${index + 1}`}
                onClick={() => selectCategory(item.id)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="hero-family-card__overlay" />
                <div className="hero-family-card__body">
                  <span className="hero-family-card__subtitle">{item.label}</span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="servicos-filter">
        <div className="container-wide">
          <div className="filter-bar">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`filter-btn ${active === category.id ? 'active' : ''}`}
                onClick={() => selectCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section servicos-grid-section" id="catalogo" ref={catalogRef}>
        <div className="container-wide">
          <div className="servicos-grid">
            {filtered.map((product, index) => (
              <article className={`produto-card reveal reveal-delay-${(index % 3) + 1}`} key={product.id}>
                <div className="produto-badge">{product.badge}</div>
                <img className="produto-visual" src={product.image} alt={product.title} loading="lazy" />
                <div className="produto-body">
                  <div className="produto-meta">
                    <span className="produto-category">{categories.find((category) => category.id === product.cat)?.label}</span>
                    <span className="produto-price">{product.price}</span>
                  </div>
                  <h3 className="produto-title">{product.title}</h3>
                  <p className="produto-desc">{product.desc}</p>
                  <button
                    type="button"
                    className="produto-details-btn btn btn-ghost"
                    onClick={() => setExpanded(expanded === product.id ? null : product.id)}
                  >
                    {expanded === product.id ? 'Ocultar composição' : 'Ver composição'}
                  </button>
                  {expanded === product.id && (
                    <ul className="produto-details-list">
                      {product.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  <div className="produto-footer">
                    <Link to="/contato" className="btn btn-primary">Solicitar orçamento</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section diferenciais">
        <div className="container-wide diferenciais__layout">
          <div className="section-header reveal">
            <span className="eyebrow">Mais do que descrição</span>
            <h2 className="display-2">Uma apresentação mais chamativa faz o cliente sentir qualidade antes mesmo do primeiro orçamento.</h2>
          </div>

          <div className="diferenciais-grid">
            {[
              {
                title: 'Desejo visual imediato',
                desc: 'O produto aparece com presença, enquadramento e contexto, o que gera interesse mais rápido do que uma lista seca de serviços.',
              },
              {
                title: 'Oferta mais bem explicada',
                desc: 'A separação entre personalizados, papelaria pronta, escola, escritório e packaging deixa claro o que a Folia realmente entrega.',
              },
              {
                title: 'Contato mais qualificado',
                desc: 'Quando o visitante já entendeu material, faixa de produto e atmosfera da marca, a conversa comercial fica mais madura e objetiva.',
              },
            ].map((item, index) => (
              <article className={`diferencial-item card reveal reveal-delay-${index + 1}`} key={item.title}>
                <h3 className="diferencial-title">{item.title}</h3>
                <p className="diferencial-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section servicos-cta">
        <div className="container">
          <div className="servicos-cta__inner reveal">
            <span className="eyebrow">Quer uma composição exclusiva?</span>
            <h2 className="display-2">Também combinamos papelaria, produto e embalagem em uma solução completa para sua necessidade.</h2>
            <p className="body-large">
              Se a melhor resposta não estiver em uma categoria só, montamos um mix sob medida com direção visual, curadoria de materiais e apresentação coerente.
            </p>
            <Link to="/contato" className="btn btn-gold btn-lg">Falar com a equipe</Link>
          </div>
        </div>
      </section>
    </div>
  );
}