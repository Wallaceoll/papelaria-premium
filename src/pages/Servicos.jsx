import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Servicos.css';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'celebracao', label: 'Celebração' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'papelaria', label: 'Linha papelaria' },
  { id: 'packaging', label: 'Packaging' },
];

const products = [
  {
    id: 1,
    cat: 'celebracao',
    title: 'Suite de casamento editorial',
    desc: 'Convite principal, RSVP, menu e envelope em composição de alto padrão com leitura sofisticada e toque tátil.',
    price: 'A partir de R$ 18/conj.',
    details: ['Envelope em linho', 'Foil dourado', 'Menu de mesa', 'Tag nominal'],
    badge: 'Personalizado',
    tone: 'gold',
    kind: 'suite',
  },
  {
    id: 2,
    cat: 'celebracao',
    title: 'Kit festa infantil premium',
    desc: 'Convites, toppers, cartões de lembrança e complementos gráficos com linguagem delicada e coleção coesa.',
    price: 'A partir de R$ 12/conj.',
    details: ['Convite principal', 'Tags e toppers', 'Cartão de agradecimento', 'Paleta temática'],
    badge: 'Sob medida',
    tone: 'terracotta',
    kind: 'suite',
  },
  {
    id: 3,
    cat: 'corporativo',
    title: 'Kit onboarding de marca',
    desc: 'Bloco, carta de boas-vindas, folder e elementos institucionais para uma entrada de marca mais memorável.',
    price: 'A partir de R$ 85/kit',
    details: ['Caderno A5', 'Folder institucional', 'Cartão da marca', 'Embalagem coordenada'],
    badge: 'Corporativo',
    tone: 'ink',
    kind: 'corporate',
  },
  {
    id: 4,
    cat: 'corporativo',
    title: 'Identidade impressa executiva',
    desc: 'Cartão, pasta, envelope, bloco e papel timbrado com acabamento refinado para fortalecer percepção de marca.',
    price: 'Sob consulta',
    details: ['Cartão frente e verso', 'Envelope coordenado', 'Pasta de proposta', 'Bloco executivo'],
    badge: null,
    tone: 'sage',
    kind: 'corporate',
  },
  {
    id: 5,
    cat: 'papelaria',
    title: 'Planner semanal premium',
    desc: 'Produto de linha para rotina, organização e presente. Visual limpo, capa especial e miolo funcional.',
    price: 'A partir de R$ 68/unid.',
    details: ['Capa especial', 'Miolo semanal', 'Controle de metas', 'Bolso interno'],
    badge: 'Linha papelaria',
    tone: 'sage',
    kind: 'planner',
  },
  {
    id: 6,
    cat: 'papelaria',
    title: 'Desk set presenteável',
    desc: 'Conjunto com bloco, cartões, adesivos e marcador pensado para venda em vitrine ou presente corporativo.',
    price: 'A partir de R$ 54/kit',
    details: ['Bloco destacável', 'Marcador', 'Mini cartões', 'Cinta personalizada'],
    badge: 'Pronta entrega',
    tone: 'gold',
    kind: 'desk',
  },
  {
    id: 7,
    cat: 'papelaria',
    title: 'Cartões e tags de loja',
    desc: 'Peças de apoio para embalagem, presente e recado de marca com visual consistente e acabamento premium.',
    price: 'A partir de R$ 1,20/unid.',
    details: ['Tag com furo', 'Cartão de cuidado', 'Mensagem de presente', 'Cartela adesiva'],
    badge: null,
    tone: 'terracotta',
    kind: 'desk',
  },
  {
    id: 8,
    cat: 'packaging',
    title: 'Caixa boutique com insert',
    desc: 'Packaging para varejo, presentes ou lançamentos com estrutura pensada para unboxing e valor percebido.',
    price: 'A partir de R$ 8/unid.',
    details: ['Caixa rígida', 'Insert interno', 'Selo e cinta', 'Cartão de marca'],
    badge: 'Mais pedido',
    tone: 'ink',
    kind: 'packaging',
  },
  {
    id: 9,
    cat: 'packaging',
    title: 'Etiquetas e selos premium',
    desc: 'Tags, selos e etiquetas que complementam produto, embalagem e experiência de compra sem parecer genérico.',
    price: 'A partir de R$ 1,40/unid.',
    details: ['Hot stamping opcional', 'Corte especial', 'Cordão ou adesivo', 'Frente e verso'],
    badge: null,
    tone: 'gold',
    kind: 'packaging',
  },
];

const collections = [
  {
    title: 'Personalizados sob medida',
    desc: 'Projetos que começam no briefing e terminam em uma coleção visual completa para evento, marca ou lançamento.',
    tone: 'gold',
    items: ['Convites', 'Papelaria de mesa', 'Kits corporativos', 'Projetos editoriais'],
  },
  {
    title: 'Linha de papelaria premium',
    desc: 'Itens que não dependem de personalização total para vender bem e transmitir cuidado visual.',
    tone: 'sage',
    items: ['Planners', 'Cadernos', 'Desk sets', 'Cartões e tags'],
  },
  {
    title: 'Packaging e apoio de marca',
    desc: 'Peças para compor vitrine, unboxing, presente e experiência de compra com melhor percepção de valor.',
    tone: 'terracotta',
    items: ['Caixas', 'Etiquetas', 'Selos', 'Cartões de cuidado'],
  },
];

function ProductMock({ tone, kind }) {
  return (
    <div className={`produto-mock produto-mock--${tone} produto-mock--${kind}`}>
      <div className="produto-mock__plane produto-mock__plane--back" />
      <div className="produto-mock__plane produto-mock__plane--front" />
      <div className="produto-mock__seal" />
      <div className="produto-mock__text">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function Servicos() {
  useReveal();
  const [active, setActive] = useState('todos');
  const [expanded, setExpanded] = useState(null);

  const filtered = active === 'todos' ? products : products.filter((product) => product.cat === active);

  return (
    <div className="servicos">
      <section className="servicos-hero mesh-bg noise">
        <div className="container-wide servicos-hero__layout">
          <div className="servicos-hero__copy">
            <span className="eyebrow reveal">Catálogo Folia</span>
            <h1 className="display-1 reveal reveal-delay-1">
              Um catálogo mais visual, claro e convincente para mostrar o que vocês realmente entregam.
            </h1>
            <p className="body-large reveal reveal-delay-2">
              Aqui o cliente encontra tanto produtos personalizados quanto itens de papelaria premium e peças de packaging,
              com exemplos visuais suficientes para confiar antes de pedir orçamento.
            </p>
            <div className="servicos-hero__chips reveal reveal-delay-3">
              <span>Personalizados</span>
              <span>Linha papelaria</span>
              <span>Packaging</span>
              <span>Corporativo</span>
            </div>
          </div>

          <div className="servicos-hero__board reveal-right card">
            <div className="servicos-hero__board-grid">
              {products.slice(0, 4).map((product) => (
                <article key={product.id} className="servicos-hero__sample">
                  <ProductMock tone={product.tone} kind={product.kind} />
                  <div>
                    <p>{product.badge || 'Produto Folia'}</p>
                    <strong>{product.title}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="collections-strip section">
        <div className="container-wide collections-strip__grid">
          {collections.map((collection, index) => (
            <article className={`collection-card card reveal reveal-delay-${index + 1}`} key={collection.title}>
              <div className={`collection-card__dot collection-card__dot--${collection.tone}`} />
              <h2 className="heading-1">{collection.title}</h2>
              <p className="body-base">{collection.desc}</p>
              <div className="collection-card__tags">
                {collection.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="servicos-filter">
        <div className="container-wide">
          <div className="filter-bar">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${active === category.id ? 'active' : ''}`}
                onClick={() => setActive(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section servicos-grid-section">
        <div className="container-wide">
          <div className="servicos-grid">
            {filtered.map((product, index) => (
              <article className={`produto-card reveal reveal-delay-${(index % 3) + 1}`} key={product.id}>
                {product.badge && <div className="produto-badge">{product.badge}</div>}
                <div className="produto-visual">
                  <ProductMock tone={product.tone} kind={product.kind} />
                </div>
                <div className="produto-body">
                  <div className="produto-meta">
                    <span className="produto-category">{categories.find((category) => category.id === product.cat)?.label}</span>
                    <span className="produto-price">{product.price}</span>
                  </div>
                  <h3 className="produto-title">{product.title}</h3>
                  <p className="produto-desc">{product.desc}</p>
                  <button
                    className="produto-details-btn btn btn-ghost"
                    onClick={() => setExpanded(expanded === product.id ? null : product.id)}
                  >
                    {expanded === product.id ? 'Ocultar detalhes' : 'Ver composição'}
                  </button>
                  {expanded === product.id && (
                    <ul className="produto-details-list">
                      {product.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  <div className="produto-footer">
                    <Link to="/contato" className="btn btn-primary">
                      Solicitar orçamento
                    </Link>
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
            <span className="eyebrow">Por que funciona melhor</span>
            <h2 className="display-2">Produto visível aumenta confiança e deixa a oferta mais clara.</h2>
          </div>

          <div className="diferenciais-grid">
            {[
              {
                title: 'Mais percepção de valor',
                desc: 'Quando o cliente vê formato, composição e acabamento, ele entende melhor a diferença entre uma peça simples e uma peça premium.',
              },
              {
                title: 'Menos dúvida comercial',
                desc: 'Exemplos resolvem parte das perguntas antes do contato e ajudam o lead a chegar mais preparado para orçar.',
              },
              {
                title: 'Mix mais honesto',
                desc: 'A página deixa evidente que a Folia não trabalha só com personalizados, mas também com produtos de papelaria e apoio de marca.',
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
            <span className="eyebrow">Precisa de algo fora da grade?</span>
            <h2 className="display-2">Também montamos combinações exclusivas entre papelaria, produto e embalagem.</h2>
            <p className="body-large">
              Se a solução ideal envolve criação personalizada junto de itens de linha, estruturamos o mix completo para sua necessidade.
            </p>
            <Link to="/contato" className="btn btn-gold btn-lg">
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}