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
  },
  {
    num: '02',
    icon: '◈',
    title: 'Desenvolvemos o conceito',
    desc: 'Nossa equipe mergulha na sua história. Pesquisamos referências, desenvolvemos paleta de cores, escolhemos tipografias e criamos um moodboard exclusivo antes de qualquer linha de design.',
    detail: 'Entrega de conceito criativo em até 5 dias úteis após aprovação do briefing.',
  },
  {
    num: '03',
    icon: '◇',
    title: 'Preview e refinamento',
    desc: 'Você recebe um preview digital em alta resolução com todas as peças do projeto. Analisamos juntos cada detalhe e fazemos quantos ajustes forem necessários até que tudo esteja exatamente certo.',
    detail: 'Até 3 rodadas de revisão inclusas. Revisões adicionais por valor acordado.',
  },
  {
    num: '04',
    icon: '◉',
    title: 'Produção com atenção artesanal',
    desc: 'Com a aprovação final, entramos em produção. Selecionamos os papéis, configuramos as máquinas, aplicamos os acabamentos especiais. Cada lote passa por inspeção visual rigorosa antes do empacotamento.',
    detail: 'Prazo de produção: 10 a 20 dias úteis conforme complexidade e acabamentos.',
  },
  {
    num: '05',
    icon: '◍',
    title: 'Entrega com carinho',
    desc: 'Cada pedido é embalado individualmente com papel tissue, fita e cartão de identificação. Enviamos por transportadora especializada em materiais gráficos para garantir que tudo chegue perfeito.',
    detail: 'Entrega para todo o Brasil. Retirada disponível em São Paulo – SP.',
  },
];

const MATERIALS = [
  { name: 'Cotton 300g', desc: 'Textura suave e macia. Ideal para convites de casamento e eventos sofisticados.', color: '#F5F0E8' },
  { name: 'Linho 240g', desc: 'Textura natural com padrão de trama. Rústico-elegante, muito usado em casamentos no campo.', color: '#EDE8DC' },
  { name: 'Perolado 250g', desc: 'Brilho discreto e sofisticado. Perfeito para eventos noturnos e festas formais.', color: '#F2EEF5' },
  { name: 'Kraft 300g', desc: 'Visual orgânico e sustentável. Tendência em eventos boho, rústicos e ambientemente conscientes.', color: '#D4C4A8' },
  { name: 'Couchê Matte 350g', desc: 'Base neutra e premium para impressões de alta saturação de cores. Versátil e elegante.', color: '#F0EDE8' },
  { name: 'Color Plus 180g', desc: 'Disponível em +40 cores. Ideal para projetos coloridos, infantis ou com paletas específicas.', color: '#E8D5C4' },
];

const FINISHES = [
  { name: 'Foil Dourado', icon: '✦', desc: 'Película metálica prensada a quente. O acabamento mais desejado em papelaria premium.' },
  { name: 'Foil Prata', icon: '◈', desc: 'Elegância moderna e contemporânea. Ótimo para paletas frias e estilos minimalistas.' },
  { name: 'Relevo Seco', icon: '◎', desc: 'Textura tátil sem tinta. Cria profundidade e sofisticação ao toque.' },
  { name: 'Corte a Laser', icon: '◍', desc: 'Recortes precisos com formas complexas. Transforma o convite numa obra de arte.' },
  { name: 'Verniz UV', icon: '◇', desc: 'Brilho localizado em áreas específicas. Contraste entre matte e brilhante.' },
  { name: 'Letterpress', icon: '◉', desc: 'Impressão tipográfica com pressão. Marca visível e tátil, artesanal e atemporal.' },
];

/* ─── Mini simulador ─────────────────────────────── */
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
            <p className="sim-card__detail">Sábado, 15 de Novembro de 2025</p>
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
        <div className="sim-group">
          <label className="sim-label eyebrow">Tipo de papel</label>
          <div className="sim-options">
            {MATERIALS.map((m, i) => (
              <button
                key={m.name}
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
          <label className="sim-label eyebrow">Cor de destaque</label>
          <div className="sim-colors">
            {['#C9A84C', '#6B6560', '#8BA89A', '#C4785A', '#1A1714', '#9A7B2E'].map(c => (
              <button
                key={c}
                className={`sim-color ${sel.color === c ? 'active' : ''}`}
                style={{ background: c }}
                onClick={() => setSel(s => ({ ...s, color: c }))}
                aria-label={c}
              />
            ))}
          </div>
        </div>

        <div className="sim-group">
          <label className="sim-label eyebrow">Nome / texto principal</label>
          <input
            className="sim-input"
            value={sel.text}
            onChange={e => setSel(s => ({ ...s, text: e.target.value }))}
            placeholder="Ex: Maria & João"
            maxLength={40}
          />
        </div>

        <Link to="/contato" className="btn btn-primary btn-lg sim-cta">
          Quero este projeto →
        </Link>
      </div>
    </div>
  );
}

export default function Personalizacao() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="personalizacao">

      {/* Hero */}
      <section className="pers-hero mesh-bg noise">
        <div className="container">
          <span className="eyebrow reveal">Processo Criativo</span>
          <h1 className="display-1 reveal reveal-delay-1">
            A arte de criar <br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>algo único</em>
          </h1>
          <p className="body-large reveal reveal-delay-2">
            Personalização não é só colocar um nome. É entender sua história, <br className="hide-mobile" />
            sua estética e criar algo que só poderia existir para você.
          </p>
        </div>
      </section>

      {/* Processo interativo */}
      <section className="section pers-process">
        <div className="container-wide">
          <div className="section-header reveal">
            <span className="eyebrow">Passo a passo</span>
            <h2 className="display-2">Como funciona</h2>
          </div>

          <div className="pers-steps">
            <div className="pers-steps-nav">
              {STEPS.map((s, i) => (
                <button
                  key={s.num}
                  className={`step-nav-btn ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <span className="step-nav-num eyebrow">{s.num}</span>
                  <span className="step-nav-title">{s.title}</span>
                  <span className="step-nav-arrow">→</span>
                </button>
              ))}
            </div>

            <div className="pers-steps-content">
              <div className="step-panel" key={activeStep}>
                <div className="step-icon">{STEPS[activeStep].icon}</div>
                <span className="step-num eyebrow">{STEPS[activeStep].num} / 05</span>
                <h3 className="step-title display-3">{STEPS[activeStep].title}</h3>
                <p className="step-desc body-large">{STEPS[activeStep].desc}</p>
                <div className="step-detail">
                  <span className="step-detail-icon">ℹ</span>
                  <span>{STEPS[activeStep].detail}</span>
                </div>
                <div className="step-nav-arrows">
                  <button
                    className="btn btn-outline"
                    onClick={() => setActiveStep(i => Math.max(0, i - 1))}
                    disabled={activeStep === 0}
                  >
                    ← Anterior
                  </button>
                  <button
                    className="btn btn-primary"
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

      {/* Materiais */}
      <section className="section pers-materials">
        <div className="container-wide">
          <div className="section-header reveal">
            <span className="eyebrow">Nossa curadoria</span>
            <h2 className="display-2">Papéis selecionados</h2>
          </div>
          <p className="body-large reveal" style={{ maxWidth: 560, marginBottom: 'var(--space-12)' }}>
            Trabalhamos com mais de 30 tipos de papel. Cada projeto recebe a recomendação certa baseada na finalidade, estética e acabamentos desejados.
          </p>
          <div className="materials-grid">
            {MATERIALS.map((m, i) => (
              <div className={`material-card reveal reveal-delay-${(i % 3) + 1}`} key={m.name}>
                <div className="material-swatch" style={{ background: m.color }}>
                  <div className="material-texture" />
                </div>
                <div className="material-info">
                  <h3 className="material-name">{m.name}</h3>
                  <p className="material-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acabamentos */}
      <section className="section pers-finishes section-dark">
        <div className="container-wide">
          <div className="section-header section-header--light reveal">
            <span className="eyebrow" style={{ color: 'rgba(201,168,76,0.8)' }}>Técnicas especiais</span>
            <h2 className="display-2" style={{ color: 'var(--warm-white)' }}>Acabamentos premium</h2>
          </div>
          <div className="finishes-grid">
            {FINISHES.map((f, i) => (
              <div className={`finish-card reveal reveal-delay-${(i % 3) + 1}`} key={f.name}>
                <div className="finish-icon">{f.icon}</div>
                <h3 className="finish-name">{f.name}</h3>
                <p className="finish-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section className="section pers-simulator">
        <div className="container-wide">
          <div className="section-header reveal">
            <span className="eyebrow">Experimente</span>
            <h2 className="display-2">Monte seu convite</h2>
            <p className="body-large" style={{ maxWidth: 480 }}>
              Uma prévia de como suas escolhas de papel, acabamento e cor se combinam. O resultado final é ainda mais impressionante ao vivo.
            </p>
          </div>
          <Simulator />
        </div>
      </section>

      {/* FAQ */}
      <section className="section pers-faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 className="display-2">Perguntas comuns</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Qual o pedido mínimo?', a: 'O mínimo varia por produto. Convites de casamento: mínimo 50 unidades. Papelaria corporativa: mínimo 100 unidades. Projetos especiais podem ser sob consulta.' },
              { q: 'Posso solicitar amostras?', a: 'Sim! Enviamos kit de amostras de papéis e acabamentos para que você possa sentir a qualidade antes de fechar o pedido. O kit tem custo de R$ 25 (debitado do pedido final).' },
              { q: 'Vocês atendem fora de São Paulo?', a: 'Atendemos todo o Brasil via Correios e transportadoras especializadas. Para clientes de SP, também há opção de retirada no nosso ateliê.' },
              { q: 'Como funciona a aprovação de arte?', a: 'Enviamos previews digitais em PDF e imagem. Você aprova online com assinatura digital. Produção só inicia após aprovação formal do cliente.' },
              { q: 'Posso cancelar após iniciar a produção?', a: 'Cancelamentos antes do início da produção são aceitos com reembolso integral. Após início da produção, não é possível cancelar por se tratar de produto personalizado.' },
              { q: 'Qual o prazo para convites de casamento?', a: 'Recomendamos iniciar o processo com pelo menos 60 dias de antecedência. O processo criativo + produção leva em média 25 a 35 dias úteis.' },
            ].map((faq, i) => (
              <FaqItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item reveal ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(v => !v)}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}
