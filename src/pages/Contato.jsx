import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Contato.css';

const PRODUCT_TYPES = [
  'Convite de Casamento',
  'Papelaria de Bebê',
  'Kit Corporativo',
  'Papelaria Escolar',
  'Papelaria de Escritório',
  'Convite de Aniversário',
  'Kit de Formatura',
  'Packaging / Embalagem',
  'Brindes e Presentes',
  'Projeto Especial',
  'Outro',
];

const QUANTITIES = ['Até 50 unidades', '50–100', '100–300', '300–500', '500–1000', 'Acima de 1000'];

const BUDGETS = ['Até R$ 500', 'R$ 500–1.500', 'R$ 1.500–5.000', 'R$ 5.000–15.000', 'Acima de R$ 15.000', 'A definir'];

export default function Contato() {
  useReveal();
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    productType: '', quantity: '', budget: '',
    eventDate: '', description: '', file: null,
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const handleFile = (e) => setForm(f => ({ ...f, file: e.target.files[0] }));

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1600);
  };

  return (
    <div className="contato">

      {/* Hero */}
      <section className="contato-hero mesh-bg noise">
        <div className="container">
          <span className="eyebrow reveal">Entre em contato</span>
          <h1 className="display-1 reveal reveal-delay-1">
            Vamos criar <br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>juntos</em>
          </h1>
          <p className="body-large reveal reveal-delay-2">
            Preencha o formulário abaixo com o máximo de detalhes.<br className="hide-mobile" />
            Nossa equipe retorna em até 24 horas úteis.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section contato-main">
        <div className="container-wide">
          <div className="contato-grid">

            {/* Sidebar info */}
            <div className="contato-info reveal-left">
              <div className="info-block info-block--contact">
                <span className="eyebrow">Fale conosco</span>
                <p className="info-copy">
                  Escolha o canal que fizer mais sentido para você. Se preferir, fale direto no WhatsApp e aceleramos a conversa.
                </p>
                <div className="info-items">
                  {[
                    { icon: '✉', label: 'E-mail', value: 'ola@foliapapelaria.com.br', href: 'mailto:ola@foliapapelaria.com.br' },
                    { icon: '◎', label: 'WhatsApp', value: '(11) 99999-0000', href: 'https://wa.me/5511999990000' },
                    { icon: '◈', label: 'Localização', value: 'São Paulo, SP · Brasil', href: null },
                    { icon: '◇', label: 'Horário', value: 'Segunda a Sexta, 9h–18h', href: null },
                  ].map(item => (
                    <div className="info-item" key={item.label}>
                      <span className="info-icon">{item.icon}</span>
                      <div>
                        <p className="info-label eyebrow">{item.label}</p>
                        {item.href
                          ? <a href={item.href} className="info-value">{item.value}</a>
                          : <p className="info-value">{item.value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-block info-block--timeline">
                <span className="eyebrow">Nosso processo</span>
                <p className="info-copy">
                  Depois do primeiro contato, organizamos o atendimento para você entender prazo, proposta e próximos passos sem ruído.
                </p>
                <div className="info-timeline">
                  {[
                    { day: 'Dia 1', text: 'Recebemos seu orçamento e respondemos' },
                    { day: 'Dia 2–3', text: 'Enviamos proposta detalhada e contrato' },
                    { day: 'Dia 5+', text: 'Início do processo criativo com briefing' },
                  ].map(t => (
                    <div className="timeline-item" key={t.day}>
                      <div className="timeline-dot" />
                      <div>
                        <p className="timeline-day eyebrow">{t.day}</p>
                        <p className="timeline-text">{t.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contato-form-wrap reveal-right">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon">✦</div>
                  <h2 className="heading-1">Mensagem enviada!</h2>
                  <p className="body-large">
                    Obrigada pelo contato. Nossa equipe vai analisar seu projeto e retornar em até 24 horas úteis.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',productType:'',quantity:'',budget:'',eventDate:'',description:'',file:null }); }}
                  >
                    Enviar outro orçamento
                  </button>
                </div>
              ) : (
                <form className="contato-form" onSubmit={submit}>
                  <div className="form-header">
                    <h2 className="heading-1">Solicitar orçamento</h2>
                    <p className="body-base">Preencha todos os campos para um atendimento mais ágil.</p>
                  </div>

                  {/* Personal info */}
                  <div className="form-section">
                    <p className="form-section-title eyebrow">Seus dados</p>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Nome completo *</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Seu nome"
                          value={form.name}
                          onChange={handle('name')}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-mail *</label>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="seu@email.com"
                          value={form.email}
                          onChange={handle('email')}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group" style={{ maxWidth: '50%' }}>
                      <label className="form-label">WhatsApp / Telefone</label>
                      <input
                        className="form-input"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={form.phone}
                        onChange={handle('phone')}
                      />
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="form-section">
                    <p className="form-section-title eyebrow">Sobre o projeto</p>
                    <div className="form-group">
                      <label className="form-label">Tipo de produto *</label>
                      <div className="form-chips">
                        {PRODUCT_TYPES.map(p => (
                          <button
                            key={p}
                            type="button"
                            className={`form-chip ${form.productType === p ? 'active' : ''}`}
                            onClick={() => setForm(f => ({ ...f, productType: p }))}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Quantidade estimada</label>
                        <select className="form-select" value={form.quantity} onChange={handle('quantity')}>
                          <option value="">Selecione...</option>
                          {QUANTITIES.map(q => <option key={q} value={q}>{q}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Orçamento disponível</label>
                        <select className="form-select" value={form.budget} onChange={handle('budget')}>
                          <option value="">Selecione...</option>
                          {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="form-group" style={{ maxWidth: '50%' }}>
                      <label className="form-label">Data do evento (se aplicável)</label>
                      <input
                        className="form-input"
                        type="date"
                        value={form.eventDate}
                        onChange={handle('eventDate')}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="form-section">
                    <p className="form-section-title eyebrow">Detalhes e referências</p>
                    <div className="form-group">
                      <label className="form-label">Descrição do projeto *</label>
                      <textarea
                        className="form-textarea"
                        rows={5}
                        placeholder="Descreva sua ideia com o máximo de detalhes: tema, cores, estilo, inspirações, o que você quer transmitir, quem vai receber..."
                        value={form.description}
                        onChange={handle('description')}
                        required
                      />
                      <p className="form-hint">Quanto mais detalhe, melhor conseguimos atender.</p>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Referências visuais (opcional)</label>
                      <label className="form-file-label">
                        <input
                          type="file"
                          className="form-file-input"
                          accept="image/*,.pdf"
                          onChange={handleFile}
                        />
                        <div className="form-file-area">
                          <span className="form-file-icon">◈</span>
                          <span className="form-file-text">
                            {form.file
                              ? form.file.name
                              : 'Clique para selecionar ou arraste um arquivo'}
                          </span>
                          <span className="form-file-hint">PNG, JPG ou PDF · Máx. 10MB</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary btn-lg form-submit ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading
                      ? <><span className="form-spinner" /> Enviando...</>
                      : <>Enviar solicitação <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></>
                    }
                  </button>
                  <p className="form-privacy">
                    Seus dados são tratados com total confidencialidade. Nunca compartilhamos informações com terceiros.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
