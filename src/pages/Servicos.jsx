import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Servicos.css';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'celebracao', label: 'Celebração' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'arte', label: 'Arte & Editorial' },
];

const products = [
  {
    id: 1,
    cat: 'celebracao',
    title: 'Kit Casamento Premium',
    desc: 'Convite principal, save the date, menu, tag de mesa e cartão de agradecimento. Papéis nobres como cotton, linho ou perolado. Acabamentos em foil, relevo ou corte a laser.',
    price: 'A partir de R$ 18/conj.',
    details: ['Convite principal', 'Envelope personalizado', 'Save the date', 'Seating chart', 'Menu e cardápio', 'Tags de mesa', 'Cartão de agradecimento'],
    badge: 'Mais vendido',
    color: '#C9A84C',
  },
  {
    id: 2,
    cat: 'celebracao',
    title: 'Papelaria de Bebê',
    desc: 'Convites de chá de bebê, chá revelação e 1º aniversário. Paleta personalizada de acordo com o tema escolhido, com opções de illustrated ou tipográfico.',
    price: 'A partir de R$ 12/conj.',
    details: ['Convite principal', 'Toppers de cupcake', 'Placas e banners', 'Tags e latinhas', 'Cardápio buffet', 'Lembrancinha embalada'],
    badge: null,
    color: '#E8D5C4',
  },
  {
    id: 3,
    cat: 'celebracao',
    title: 'Formatura & Colação',
    desc: 'Convites formais e modernos para formaturas. Papéis especiais com acabamento em verniz localizado, foil dourado ou prata, e personalização completa com os dados da turma.',
    price: 'A partir de R$ 22/conj.',
    details: ['Convite principal', 'Ingresso nominal', 'Lembrancinha', 'Cardápio jantar', 'Mesa de fotos', 'Pasta de recebimento'],
    badge: null,
    color: '#8BA89A',
  },
  {
    id: 4,
    cat: 'corporativo',
    title: 'Kit Identidade Corporativa',
    desc: 'Cartão de visita, papel timbrado, envelope e pasta corporativa. Todos os itens com consistência visual e acabamentos que elevam a percepção da sua marca.',
    price: 'Sob consulta',
    details: ['Cartões de visita (frente/verso)', 'Papel timbrado A4', 'Envelope personalizado', 'Pasta corporativa', 'Bloco de anotações', 'Capa de proposta'],
    badge: 'Corporativo',
    color: '#6B6560',
  },
  {
    id: 5,
    cat: 'corporativo',
    title: 'Kit Onboarding de Colaboradores',
    desc: 'Caderno, caneta, carta de boas-vindas personalizada e guia da empresa. Uma experiência que começa no primeiro dia e já comunica o valor que a empresa tem.',
    price: 'A partir de R$ 85/kit',
    details: ['Carta de boas-vindas', 'Caderno A5 personalizado', 'Caneta com logomarca', 'Guia de valores', 'Organizer de mesa', 'Embalagem premium'],
    badge: null,
    color: '#C4785A',
  },
  {
    id: 6,
    cat: 'corporativo',
    title: 'Brindes & Kits Presentes',
    desc: 'Kits presentes corporativos de fim de ano, comemorações e ações de branding. Curadoria completa de itens com identidade visual da sua empresa.',
    price: 'A partir de R$ 120/kit',
    details: ['Curadoria de itens', 'Caixa personalizada', 'Papel tissue', 'Cartão personalizado', 'Fita com logomarca', 'Embrulho premium'],
    badge: 'Popular',
    color: '#C9A84C',
  },
  {
    id: 7,
    cat: 'packaging',
    title: 'Caixas & Embalagens Premium',
    desc: 'Caixas rígidas, caixas de papel craft, caixas com abas ou fechamento magnético. Impressão em offset ou digital com acabamentos nobres.',
    price: 'A partir de R$ 8/unid.',
    details: ['Caixa rígida personalizada', 'Fechamento magnético', 'Impressão 4 cores', 'Hot stamping', 'Verniz localizado', 'Fundo e tampa'],
    badge: null,
    color: '#8BA89A',
  },
  {
    id: 8,
    cat: 'packaging',
    title: 'Tags, Selos & Etiquetas',
    desc: 'Tags de produto, selos para embalagem e etiquetas de identificação. Formas recortadas, furos, cordões e acabamentos que valorizam cada produto.',
    price: 'A partir de R$ 1,20/unid.',
    details: ['Tags kraft ou couchê', 'Formas personalizadas', 'Corte especial', 'Furo e cordão', 'Hot stamping dourado', 'Impressão frente e verso'],
    badge: null,
    color: '#C4785A',
  },
  {
    id: 9,
    cat: 'arte',
    title: 'Editorial & Livros',
    desc: 'Publicações, lookbooks, catálogos e livros de arte. Diagramação, escolha de papel, acabamentos e produção gráfica de alto nível para publicações que marcam.',
    price: 'Sob consulta',
    details: ['Projeto gráfico', 'Diagramação profissional', 'Seleção de papéis', 'Encadernação especial', 'Acabamentos nobres', 'Revisão e prova de cor'],
    badge: null,
    color: '#6B6560',
  },
];

export default function Servicos() {
  useReveal();
  const [active, setActive] = useState('todos');
  const [expanded, setExpanded] = useState(null);

  const filtered = active === 'todos' ? products : products.filter(p => p.cat === active);

  return (
    <div className="servicos">

      {/* Hero */}
      <section className="servicos-hero mesh-bg noise">
        <div className="container">
          <span className="eyebrow reveal">Nossos Produtos</span>
          <h1 className="display-1 reveal reveal-delay-1">
            Cada detalhe, <br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>pensado por nós</em>
          </h1>
          <p className="body-large reveal reveal-delay-2">
            Mais de 40 categorias de papelaria personalizada. Do convite ao packaging,<br className="hide-mobile" /> criamos a experiência completa para o seu momento ou marca.
          </p>
        </div>
        <div className="servicos-hero__bg-text" aria-hidden>FOLIA</div>
      </section>

      {/* Filtros */}
      <section className="servicos-filter">
        <div className="container-wide">
          <div className="filter-bar">
            {categories.map(c => (
              <button
                key={c.id}
                className={`filter-btn ${active === c.id ? 'active' : ''}`}
                onClick={() => setActive(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="section servicos-grid-section">
        <div className="container-wide">
          <div className="servicos-grid">
            {filtered.map((p, i) => (
              <div
                className={`produto-card reveal reveal-delay-${(i % 3) + 1}`}
                key={p.id}
              >
                {p.badge && (
                  <div className="produto-badge" style={{ background: p.color }}>{p.badge}</div>
                )}
                <div className="produto-visual" style={{ background: `${p.color}15` }}>
                  <div className="produto-icon" style={{ color: p.color }}>◈</div>
                  <div className="produto-visual-lines">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div key={j} className="pv-line" style={{ opacity: 0.4 - j * 0.08, background: p.color }} />
                    ))}
                  </div>
                </div>
                <div className="produto-body">
                  <h3 className="produto-title">{p.title}</h3>
                  <p className="produto-desc">{p.desc}</p>
                  <button
                    className="produto-details-btn btn btn-ghost"
                    onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                  >
                    {expanded === p.id ? 'Menos detalhes ↑' : 'Ver detalhes ↓'}
                  </button>
                  {expanded === p.id && (
                    <ul className="produto-details-list">
                      {p.details.map(d => (
                        <li key={d}>
                          <span className="produto-check" style={{ color: p.color }}>✓</span> {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="produto-footer">
                    <span className="produto-price">{p.price}</span>
                    <Link to="/contato" className="btn btn-primary" style={{ fontSize: 'var(--text-xs)', padding: '8px 16px' }}>
                      Solicitar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section diferenciais">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Por que a Folia</span>
            <h2 className="display-2">O que nos diferencia</h2>
          </div>
          <div className="diferenciais-grid">
            {[
              { icon: '◎', title: 'Materiais Selecionados', desc: 'Trabalhamos com papéis nobres nacionais e importados. Cotton, linho, perolado, kraft premium e papéis especiais de 180g a 600g.' },
              { icon: '◈', title: 'Design Exclusivo', desc: 'Cada peça é desenvolvida do zero pela nossa equipe. Nunca usamos templates prontos – cada projeto é único como o seu momento.' },
              { icon: '◉', title: 'Acabamentos Artesanais', desc: 'Foil a quente, relevo seco, corte a laser, impressão letterpress e verniz UV. Técnicas que fazem a diferença ao toque.' },
              { icon: '◍', title: 'Prazo Comprometido', desc: 'Prezamos pela pontualidade. Seu projeto chega exatamente quando prometemos, embalado com cuidado e proteção adequada.' },
              { icon: '◇', title: 'Suporte Total', desc: 'Da ideia à entrega, você tem acesso direto à equipe criativa. Nenhuma dúvida fica sem resposta e nenhum detalhe é ignorado.' },
              { icon: '◫', title: 'Sustentabilidade', desc: 'Priorizamos fornecedores com certificação FSC e oferecemos opções de papéis reciclados e tintas vegetais para quem preza pelo meio ambiente.' },
            ].map((d, i) => (
              <div className={`diferencial-item reveal reveal-delay-${(i % 3) + 1}`} key={d.title}>
                <div className="diferencial-icon">{d.icon}</div>
                <h3 className="diferencial-title">{d.title}</h3>
                <p className="diferencial-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section servicos-cta">
        <div className="container">
          <div className="servicos-cta__inner reveal">
            <h2 className="display-2">
              Não encontrou o que precisa?
            </h2>
            <p className="body-large">
              Desenvolvemos projetos completamente personalizados. Conte-nos sua ideia.
            </p>
            <Link to="/contato" className="btn btn-gold btn-lg">
              Falar com a equipe →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
