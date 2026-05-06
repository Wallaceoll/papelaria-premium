import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Personalizacao.css';

const STEPS = [
  {
    num: '01',
    icon: '◎',
    title: 'Você nos conta sua ideia',
    desc: 'Tudo começa com uma conversa. Você preenche nosso briefing detalhado ou nos chama diretamente. Quanto mais contexto você compartilha — o evento, o público, a emoção que quer transmitir — mais preciso será o resultado.',
    detail: 'Briefing via formulário, WhatsApp ou reunião online. Prazo de resposta: até 24h.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '02',
    icon: '◈',
    title: 'Desenvolvemos o conceito',
    desc: 'Nossa equipe mergulha na sua história. Pesquisamos referências, desenvolvemos a paleta de cores, escolhemos tipografias e criamos um moodboard exclusivo antes de qualquer linha de design.',
    detail: 'Entrega de conceito criativo em até 5 dias úteis após a aprovação do briefing.',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '03',
    icon: '◇',
    title: 'Preview e refinamento',
    desc: 'Você recebe um preview digital em alta resolução com todas as peças do projeto. Analisamos juntos cada detalhe e fazemos quantos ajustes forem necessários até que tudo esteja exatamente certo.',
    detail: 'Até 3 rodadas de revisão inclusas. Revisões adicionais por valor acordado.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '04',
    icon: '◉',
    title: 'Produção com atenção artesanal',
    desc: 'Com a aprovação final, entramos em produção. Selecionamos os papéis, configuramos as máquinas e aplicamos os acabamentos especiais. Cada lote passa por inspeção visual rigorosa antes do empacotamento.',
    detail: 'Prazo de produção: 10 a 20 dias úteis, conforme a complexidade e os acabamentos.',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '05',
    icon: '◍',
    title: 'Entrega com carinho',
    desc: 'Cada pedido é embalado individualmente com papel tissue, fita e cartão de identificação. Enviamos por transportadora especializada em materiais gráficos para garantir que tudo chegue perfeito.',
    detail: 'Entrega para todo o Brasil. Retirada disponível em São Paulo – SP.',
    image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1400&q=80',
  },
];

const MATERIALS = [
  { name: 'Cotton 300g', desc: 'Textura suave e macia. Ideal para convites de casamento e eventos sofisticados.', color: '#F5F0E8', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Linho 240g', desc: 'Textura natural com padrão de trama. Rústico e elegante, muito usado em casamentos no campo.', color: '#EDE8DC', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Perolado 250g', desc: 'Brilho discreto e sofisticado. Perfeito para eventos noturnos e festas formais.', color: '#F2EEF5', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Kraft 300g', desc: 'Visual orgânico e sustentável. Tendência em eventos boho, rústicos e ambientalmente conscientes.', color: '#D4C4A8', image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Couchê Matte 350g', desc: 'Base neutra e premium para impressões de alta saturação de cores. Versátil e elegante.', color: '#F0EDE8', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Color Plus 180g', desc: 'Disponível em +40 cores. Ideal para projetos coloridos ou infantis.', color: '#E8D5C4', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80' },
];

const FINISHES = [
  {
    id: 'foil-gold',
    name: 'Foil Dourado',
    icon: '✦',
    tag: 'Mais popular',
    desc: 'Película metálica prensada a quente com temperatura controlada. O acabamento mais desejado em papelaria premium — cria reflexo dourado com profundidade única que não se obtém com impressão digital.',
    specs: [
      { label: 'Processo', value: 'Hot stamping a 180°C' },
      { label: 'Compatibilidade', value: 'Cotton, Linho, Perolado' },
      { label: 'Prazo extra', value: '+3 dias úteis' },
      { label: 'Ideal para', value: 'Logotipos, títulos' },
    ],
  },
  {
    id: 'foil-silver',
    name: 'Foil Prata',
    icon: '◈',
    tag: 'Elegância moderna',
    desc: 'Elegância contemporânea com reflexo metálico frio. Combina com paletas azul, verde e tons neutros. Indicado para marcas modernas e eventos sofisticados com visual minimalista.',
    specs: [
      { label: 'Processo', value: 'Hot stamping a 175°C' },
      { label: 'Compatibilidade', value: 'Todos os papéis' },
      { label: 'Prazo extra', value: '+3 dias úteis' },
      { label: 'Ideal para', value: 'Eventos noturnos' },
    ],
  },
  {
    id: 'emboss',
    name: 'Relevo Seco',
    icon: '◎',
    tag: 'Tátil',
    desc: 'Técnica sem tinta — a prensa molda o papel criando textura tridimensional perceptível ao toque. Confere sofisticação discreta e sensorial. Muito usado em brasões, monogramas e bordas decorativas.',
    specs: [
      { label: 'Processo', value: 'Matriz metálica CNC' },
      { label: 'Compatibilidade', value: 'Cotton 300g, Linho 240g' },
      { label: 'Prazo extra', value: '+4 dias úteis' },
      { label: 'Ideal para', value: 'Brasões, monogramas' },
    ],
  },
  {
    id: 'laser',
    name: 'Corte a Laser',
    icon: '◍',
    tag: 'Artístico',
    desc: 'Recortes milimétricos com precisão de 0.1mm. Permite criar rendas, padrões geométricos e formas orgânicas impossíveis de cortar manualmente. Transforma o convite em peça de arte tridimensional.',
    specs: [
      { label: 'Precisão', value: '±0.1mm' },
      { label: 'Compatibilidade', value: 'Cotton, Kraft, Color Plus' },
      { label: 'Prazo extra', value: '+5 dias úteis' },
      { label: 'Ideal para', value: 'Bordas, janelas, rendas' },
    ],
  },
  {
    id: 'uv',
    name: 'Verniz UV',
    icon: '◇',
    tag: 'Brilho localizado',
    desc: 'Camada de verniz de alto brilho aplicada em regiões específicas com precisão. Cria contraste visual entre áreas brilhantes e matte, destacando elementos como logotipos e ilustrações.',
    specs: [
      { label: 'Processo', value: 'Serigrafia UV' },
      { label: 'Compatibilidade', value: 'Couchê Matte 350g' },
      { label: 'Prazo extra', value: '+2 dias úteis' },
      { label: 'Ideal para', value: 'Logotipos, destaques' },
    ],
  },
  {
    id: 'letterpress',
    name: 'Letterpress',
    icon: '◉',
    tag: 'Artesanal',
    desc: 'Impressão tipográfica com pressão mecânica — cada letra é prensada individualmente no papel, criando leve depressão visível e tátil. Técnica milenar que remete à tradição gráfica artesanal.',
    specs: [
      { label: 'Processo', value: 'Prensa tipográfica' },
      { label: 'Compatibilidade', value: 'Cotton 300g, Linho 240g' },
      { label: 'Prazo extra', value: '+7 dias úteis' },
      { label: 'Ideal para', value: 'Texto, títulos, bordas' },
    ],
  },
];

function FinishModal({ finish, onClose }) {
  if (!finish) return null;
  return (
    <div className="finish-modal-bg" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="finish-modal">
        <button type="button" className="finish-modal__close" onClick={onClose}>✕</button>
        <div className={`finish-modal__preview finish-modal__preview--${finish.id}`}>
          <div className="finish-modal__card">
            <span className="finish-modal__card-label">✦ Convite de Casamento</span>
            <span className="finish-modal__card-name">Ana &amp; Rafael</span>
            <span className="finish-modal__card-date">15 · NOV · 2025</span>
            {finish.id === 'laser' && (
              <>
                <div className="finish-modal__laser-tl" />
                <div className="finish-modal__laser-br" />
              </>
            )}
          </div>
        </div>
        <div className="finish-modal__body">
          <div className="finish-modal__title-row">
            <div className="finish-modal__icon">{finish.icon}</div>
            <h3 className="finish-modal__name">{finish.name}</h3>
          </div>
          <p className="finish-modal__desc">{finish.desc}</p>
          <div className="finish-modal__specs">
            {finish.specs.map(s => (
              <div key={s.label} className="finish-modal__spec">
                <span className="finish-modal__spec-label">{s.label}</span>
                <span className="finish-modal__spec-value">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="finish-modal__actions">
            <Link to="/contato" className="btn btn-primary" onClick={onClose}>
              Quero este acabamento →
            </Link>
            <button type="button" className="btn btn-outline-light" onClick={onClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Simulator() {
  const [sel, setSel] = useState({ material: 0, finish: 0, color: '#C9A84C', text: 'Ana & Rafael' });

  return (
    <div className="simulator">
      <div className="sim-preview">
        <div className="sim-card" style={{ background: MATERIALS[sel.material].color }}>
          <div className="sim-card__finish-line" style={{ background: sel.color }} />
          <div className="sim-card__content">
            <p className="sim-card__label" style={{ color: sel.color }}>✦ Convite de Casamento</p>
            <p className="sim-card__name" style={{ color: '#1A1714' }}>{sel.text || 'Seu Nome Aqui'}</p>
            <p className="sim-card__detail">Sábado, 15 de novembro de 2025</p>
            <p className="sim-card__venue">Quinta da Boa Vista · São Paulo</p>
          </div>
          <div className="sim-card__finish-badge">
            <span>{FINISHES[sel.finish].icon}</span>
            <span>{FINISHES[sel.finish].name}</span>
          </div>
        </div>
        <p className="sim-caption">
          Papel: <strong>{MATERIALS[sel.material].name}</strong> · Acabamento: <strong>{FINISHES[sel.finish].name}</strong>
        </p>
      </div>

      <div className="sim-controls">
        <div className="sim-intro">
          <h3 className="heading-1">Escolha materiais e entenda combinações</h3>
          <p className="body-base">Explore as possibilidades para o seu projeto.</p>
        </div>
        <div className="sim-group">
          <label className="sim-label eyebrow">Tipo de papel</label>
          <div className="sim-options">
            {MATERIALS.slice(0, 4).map((m, i) => (
              <button key={m.name} type="button" className={`sim-option ${sel.material === i ? 'active' : ''}`} onClick={() => setSel(s => ({ ...s, material: i }))}>
                <span className="sim-swatch" style={{ background: m.color }} /> {m.name}
              </button>
            ))}
          </div>
        </div>
        <div className="sim-group">
          <label className="sim-label eyebrow">Acabamento</label>
          <div className="sim-options">
            {FINISHES.slice(0, 4).map((f, i) => (
              <button key={f.name} type="button" className={`sim-option ${sel.finish === i ? 'active' : ''}`} onClick={() => setSel(s => ({ ...s, finish: i }))}>
                {f.name}
              </button>
            ))}
          </div>
        </div>
        <div className="sim-group">
          <label className="sim-label eyebrow">Texto personalizado</label>
          <input className="sim-input" value={sel.text} onChange={e => setSel(s => ({ ...s, text: e.target.value }))} maxLength={40} />
        </div>
        <div className="sim-actions">
          <Link to="/contato" className="btn btn-primary btn-lg">Quero este projeto →</Link>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button type="button" className="faq-q" onClick={() => setOpen(v => !v)}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-content" aria-hidden={!open}>
        <div><p className="faq-a">{a}</p></div>
      </div>
    </div>
  );
}

export default function Personalizacao() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);
  const [activeFinish, setActiveFinish] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance && activeStep < STEPS.length - 1) {
      handleStepChange(activeStep + 1);
    } else if (distance < -minSwipeDistance && activeStep > 0) {
      handleStepChange(activeStep - 1);
    }
    setTouchStart(null);
  };

  const handleStepChange = (index) => {
    setActiveStep(index);
    setShowFullDesc(false);
  };

  const faqs = [
    { q: 'Qual o pedido mínimo?', a: 'O mínimo varia por produto. Convites de casamento: mínimo 50 unidades. Papelaria corporativa: mínimo 100 unidades.' },
    { q: 'Posso solicitar amostras?', a: 'Sim! Enviamos o kit de amostras de papéis e acabamentos para você sentir a qualidade antes de fechar o pedido. O kit tem o custo de R$ 25 (valor descontado do pedido final).' },
    { q: 'Vocês atendem fora de São Paulo?', a: 'Atendemos todo o Brasil via Correios e transportadoras especializadas. Para clientes de SP, também há opção de retirada no nosso ateliê.' },
    { q: 'Como funciona a aprovação de arte?', a: 'Enviamos previews digitais em PDF e imagem. Você aprova online com assinatura digital. A produção só inicia após a aprovação formal do cliente.' },
    { q: 'Posso cancelar após iniciar a produção?', a: 'Cancelamentos antes do início da produção são aceitos com reembolso integral. Após o início da produção, não é possível cancelar por se tratar de um produto personalizado.' },
    { q: 'Qual o prazo para convites de casamento?', a: 'Recomendamos iniciar o processo com pelo menos 60 dias de antecedência. O processo criativo e a produção levam, em média, de 25 a 35 dias úteis.' },
  ];

  return (
    <div className="personalizacao">
      <FinishModal finish={activeFinish} onClose={() => setActiveFinish(null)} />

      <section className="pers-hero mesh-bg noise">
        <div className="container">
          <span className="eyebrow reveal">Processo Criativo</span>
          <h1 className="display-1 reveal reveal-delay-1">A arte de criar <br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>algo único</em></h1>
          <p className="body-large reveal reveal-delay-2">Entendemos sua história para criar algo exclusivo para você.</p>
        </div>
      </section>

      <section className="section pers-process">
        <div className="container-wide">
          {/* Desktop Version */}
          <div className="pers-steps-desktop">
            <div className="pers-steps">
              <div className="pers-steps-nav">
                {STEPS.map((s, i) => (
                  <button key={s.num} type="button" className={`step-nav-btn ${activeStep === i ? 'active' : ''}`} onClick={() => setActiveStep(i)}>
                    <span className="step-nav-num eyebrow">{s.num}</span>
                    <span className="step-nav-title">{s.title}</span>
                  </button>
                ))}
              </div>
              <div className="pers-steps-content">
                <div className="step-panel" key={activeStep}>
                  <div className="step-icon">{STEPS[activeStep].icon}</div>
                  <img className="step-image" src={STEPS[activeStep].image} alt={STEPS[activeStep].title} loading="lazy" />
                  <h3 className="step-title display-3">{STEPS[activeStep].title}</h3>
                  <p className="step-desc body-large">{STEPS[activeStep].desc}</p>
                  <div className="step-nav-arrows">
                    <button className="btn btn-outline" type="button" onClick={() => setActiveStep(i => Math.max(0, i - 1))} disabled={activeStep === 0}>← Anterior</button>
                    <button className="btn btn-primary" type="button" onClick={() => setActiveStep(i => Math.min(STEPS.length - 1, i + 1))} disabled={activeStep === STEPS.length - 1}>Próximo →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Version (Horizontal Stepper) */}
          <div className="pers-steps-mobile">
            <div className="mobile-stepper">
              {STEPS.map((s, i) => (
                <button 
                  key={s.num} 
                  className={`mobile-step-item ${activeStep === i ? 'active' : ''}`}
                  onClick={() => handleStepChange(i)}
                >
                  <span className="mobile-step-num">{s.num}</span>
                  <div className="mobile-step-line" />
                </button>
              ))}
            </div>

            <div 
              className="mobile-active-content"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              key={activeStep}
            >
              <div className="mobile-step-visual">
                <img src={STEPS[activeStep].image} alt={STEPS[activeStep].title} className="mobile-step-img" />
                <div className="mobile-step-badge">{STEPS[activeStep].icon}</div>
              </div>
              <div className="mobile-step-info">
                <h3 className="mobile-step-title">{STEPS[activeStep].title}</h3>
                <div className={`mobile-step-desc ${showFullDesc ? 'expanded' : ''}`}>
                  <p>{STEPS[activeStep].desc}</p>
                </div>
                <button className="mobile-step-toggle" onClick={() => setShowFullDesc(!showFullDesc)}>
                  {showFullDesc ? 'Ler menos' : 'Ver mais'}
                </button>
                
                {showFullDesc && (
                  <div className="mobile-step-detail">
                    <span className="gold-bullet">✦</span>
                    <p>{STEPS[activeStep].detail}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mobile-swipe-hint">
              <span>← deslize para navegar →</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section pers-materials">
        <div className="container-wide">
          <div className="section-header reveal">
            <span className="eyebrow">Nossa curadoria</span>
            <h2 className="display-2">Papéis selecionados</h2>
          </div>
          <div className="materials-grid">
            {MATERIALS.map((m) => (
              <div className="material-card" key={m.name}>
                <div className="material-swatch" style={{ background: m.color }} />
                <div className="material-info">
                  <h3 className="material-name">{m.name}</h3>
                  <p className="material-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pers-finishes section-dark">
        <div className="container-wide">
          <div className="section-header section-header--light reveal">
            <span className="eyebrow">Técnicas especiais</span>
            <h2 className="display-2">Acabamentos premium</h2>
          </div>
          <div className="finishes-grid">
            {FINISHES.map((f) => (
              <button
                key={f.name}
                type="button"
                className={`finish-card finish-card--${f.id}`}
                onClick={() => setActiveFinish(f)}
              >
                <div className="finish-card__top">
                  <div className="finish-icon">{f.icon}</div>
                  <span className="finish-tag">{f.tag}</span>
                </div>
                <h3 className="finish-name">{f.name}</h3>
                <p className="finish-desc">{f.desc}</p>
                <span className="finish-cta">Ver detalhes →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section pers-simulator">
        <div className="container-wide">
          <div className="section-header reveal">
            <h2 className="display-2">Simulador de Convite</h2>
          </div>
          <Simulator />
        </div>
      </section>

      <section className="section pers-faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Dúvidas</span>
            <h2 className="display-2">Perguntas comuns</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}