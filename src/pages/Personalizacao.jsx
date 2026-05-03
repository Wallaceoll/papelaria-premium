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
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80',
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
  { name: 'Cotton 300g', desc: 'Textura suave e macia. Ideal para convites de casamento e eventos sofisticados.', color: '#F5F0E8' },
  { name: 'Linho 240g', desc: 'Textura natural com padrão de trama. Rústico e elegante, muito usado em casamentos no campo.', color: '#EDE8DC' },
  { name: 'Perolado 250g', desc: 'Brilho discreto e sofisticado. Perfeito para eventos noturnos e festas formais.', color: '#F2EEF5' },
  { name: 'Kraft 300g', desc: 'Visual orgânico e sustentável. Tendência em eventos boho e rústicos.', color: '#D4C4A8' },
];

const FINISHES = [
  { name: 'Foil Dourado', icon: '✦' },
  { name: 'Foil Prata', icon: '◈' },
  { name: 'Relevo Seco', icon: '◎' },
  { name: 'Corte a Laser', icon: '◍' },
];

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
          <p className="body-base">
            Explore as possibilidades. Para seguir, você pode abrir o catálogo ou partir direto para o orçamento.
          </p>
        </div>
        
        <div className="sim-group">
          <label className="sim-label eyebrow">Tipo de papel</label>
          <div className="sim-options">
            {MATERIALS.map((m, i) => (
              <button
                key={m.name}
                type="button"
                className={`sim-option ${sel.material === i ? 'active' : ''}`}
                onClick={() => setSel(s => ({ ...s, material: i }))}
              >
                <span className="sim-swatch" style={{ background: m.color }} />
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <div className="sim-group">
          <label className="sim-label eyebrow">Acabamento especial</label>
          <div className="sim-options sim-options--finish">
            {FINISHES.map((f, i) => (
              <button
                key={f.name}
                type="button"
                className={`sim-option ${sel.finish === i ? 'active' : ''}`}
                onClick={() => setSel(s => ({ ...s, finish: i }))}
              >
                <span className="sim-finish-icon">{f.icon}</span>
                {f.name}
              </button>
            ))}
          </div>
        </div>

        <div className="sim-group">
          <label className="sim-label eyebrow">Nome / Texto principal</label>
          <input
            className="sim-input"
            value={sel.text}
            onChange={e => setSel(s => ({ ...s, text: e.target.value }))}
            placeholder="Ex: Maria & João"
            maxLength={40}
          />
        </div>

        <div className="sim-actions">
          <Link to="/contato" className="btn btn-primary btn-lg sim-cta">
            Quero este projeto →
          </Link>
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
        <div>
          <p className="faq-a">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Personalizacao() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="personalizacao">
      <section className="pers-hero mesh-bg noise">
        <div className="container">
          <span className="eyebrow reveal">Processo Criativo</span>
          <h1 className="display-1 reveal reveal-delay-1">
            A arte de criar <br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>algo único</em>
          </h1>
          <p className="body-large reveal reveal-delay-2">
            Personalização não é só colocar um nome. É entender sua história e criar algo que só poderia existir para você.
          </p>
        </div>
      </section>

      <section className="section pers-process">
        <div className="container-wide">
          <div className="pers-steps">
            <div className="pers-steps-nav">
              {STEPS.map((s, i) => (
                <button
                  key={s.num}
                  type="button"
                  className={`step-nav-btn ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <span className="step-nav-num eyebrow">{s.num}</span>
                  <span className="step-nav-title">{s.title}</span>
                </button>
              ))}
            </div>

            <div className="pers-steps-content">
              <div className="step-panel">
                <div className="step-icon">{STEPS[activeStep].icon}</div>
                <img className="step-image" src={STEPS[activeStep].image} alt={STEPS[activeStep].title} loading="lazy" />
                <h3 className="step-title display-3">{STEPS[activeStep].title}</h3>
                <p className="step-desc body-large">{STEPS[activeStep].desc}</p>
                <div className="step-nav-arrows">
                  <button
                    className="btn btn-outline"
                    type="button"
                    onClick={() => setActiveStep(i => Math.max(0, i - 1))}
                    disabled={activeStep === 0}
                  >
                    ← Anterior
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => setActiveStep(i => Math.min(STEPS.length - 1, i + 1))}
                    disabled={activeStep === STEPS.length - 1}
                  >
                    Próximo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pers-simulator">
        <div className="container-wide">
          <div className="section-header reveal">
            <h2 className="display-2">Monte seu convite</h2>
          </div>
          <Simulator />
        </div>
      </section>

      <section className="section pers-faq">
        <div className="container">
          <div className="faq-list">
            {[
              { q: 'Qual o pedido mínimo?', a: 'O mínimo varia por produto. Convites de casamento: mínimo 50 unidades.' },
              { q: 'Qual o prazo médio?', a: 'O processo criativo e a produção levam em média de 25 a 35 dias úteis.' },
            ].map((faq, i) => (
              <FaqItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}