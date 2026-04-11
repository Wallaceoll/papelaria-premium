# Papelaria Premium - Site Institucional

![Papelaria Premium](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**Design Editorial Sofisticado para Marcas que Exigem Presença**

Um site institucional premium desenvolvido com React, TypeScript e Vite, apresentando design editorial de alta qualidade, componentes modularizados e experiência de usuário imersiva.

---

## 🎯 Visão Geral

Papelaria Premium é uma solução completa de site institucional para uma empresa especializada em papelaria corporativa de luxo. O projeto combina:

- **Design Premium**: Paleta Editorial Noir Technologique com acabamento sofisticado
- **Experiência Imersiva**: Animações fluidas, reveal on scroll, cursor personalizado
- **Modularização React**: Componentes reutilizáveis e bem organizados
- **Responsividade Total**: Funcional em todos os dispositivos
- **Performance Otimizada**: Build rápida, carregamento eficiente
- **Deploy Simplificado**: Pronto para Vercel, GitHub Pages ou servidores próprios

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js v18+
- npm v9+ (ou yarn/pnpm)

### Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/papelaria-premium.git
cd papelaria-premium

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site abrirá em `http://localhost:5173`

### Build para Produção

```bash
npm run build
npm run preview
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx          # Navegação principal
│   │   ├── Carousel.tsx        # Carrossel de projetos
│   │   └── Footer.tsx          # Rodapé
│   ├── sections/
│   │   ├── Hero.tsx            # Seção hero principal
│   │   ├── Services.tsx        # 6 serviços oferecidos
│   │   ├── Portfolio.tsx       # Portfólio interativo
│   │   ├── Testimonials.tsx    # Depoimentos de clientes
│   │   └── CTA.tsx             # Call-to-action
│   └── modals/
│       ├── ContactModal.tsx    # Modal de contato
│       └── ProjectModal.tsx    # Modal de detalhes do projeto
├── pages/
│   ├── Home.tsx                # Página inicial
│   ├── Services.tsx            # Página de serviços
│   ├── Portfolio.tsx           # Página de portfólio
│   └── Contact.tsx             # Página de contato
├── styles/
│   └── global.css              # Estilos globais
├── App.tsx                     # Componente raiz
└── main.tsx                    # Entry point
```

---

## 🎨 Design System

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Background | `#0B0D12` | Fundo principal |
| Foreground | `#F5F1EA` | Texto principal |
| Accent | `#C6A86A` | Destaques (ouro) |
| Secondary | `#3A5F7D` | Acentos secundários |
| Border | `rgba(255, 255, 255, 0.08)` | Bordas sutis |

### Tipografia

- **Títulos**: Bodoni Moda 700-800 (serif)
- **Corpo**: Manrope 300-400 (sans-serif)
- **Tamanhos**: Responsivos com `clamp()`

### Componentes

- **Cards**: Glassmorphism com borders semi-transparentes
- **Botões**: Gradientes sutis com hover effects
- **Animações**: Reveal on scroll, fade-in, transições suaves
- **Efeitos**: Noise texture, mesh gradient, cursor personalizado

---

## ⚙️ Tecnologias

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| React | 18.2.0 | Framework UI |
| TypeScript | 5.2.2 | Type safety |
| Vite | 5.0.8 | Build tool |
| React Router | 6.20.0 | Roteamento |
| CSS3 | Nativo | Styling |

---

## 📋 Funcionalidades

### ✅ Implementadas

- [x] Hero section com card interativo
- [x] 6 serviços em grid responsivo
- [x] Portfólio com carrossel e modal
- [x] Depoimentos de clientes
- [x] CTA dupla (Solicitar proposta + Explorar)
- [x] Modal de contato com validação
- [x] Reveal on scroll
- [x] Cursor personalizado
- [x] Background dinâmico
- [x] Responsividade total
- [x] Acessibilidade (ARIA labels)
- [x] Performance otimizada

### 🔄 Em Desenvolvimento

- [ ] Integração com backend de formulários
- [ ] Sistema de blog
- [ ] Dashboard de admin
- [ ] Integração com Stripe

---

## 🎯 Seções Principais

### Hero
Apresentação impactante com título dramático, card com métricas e CTAs duplas.

### Serviços
6 soluções especializadas:
1. Papelaria Corporativa
2. Convites Premium
3. Embalagens Luxo
4. Identidade Visual
5. Catálogos & Brochuras
6. Acabamentos Especiais

### Portfólio
Carrossel interativo com 6 projetos, grid responsivo e modal de detalhes.

### Depoimentos
Validação social com 3 clientes satisfeitos, avaliação 5 estrelas.

### CTA
Seção de chamada à ação com 3 diferenciais (Processo transparente, Qualidade garantida, Suporte contínuo).

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Via CLI
npm install -g vercel
vercel
vercel --prod

# Ou via GitHub
# 1. Push para GitHub
# 2. Conectar repositório no Vercel
# 3. Deploy automático
```

### GitHub Pages

```bash
npm run build
# Fazer push da pasta dist/
```

### Servidor Próprio

```bash
npm run build
# Copiar pasta dist/ para servidor
```

Veja [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) para instruções detalhadas.

---

## 📊 Plano de Marketing

O projeto inclui um plano de marketing digital completo com:

- **SEO**: Otimização on-page e link building
- **Paid Ads**: Google Ads, Meta Ads, LinkedIn
- **Conteúdo**: Blog, redes sociais, email marketing
- **Parcerias**: Influenciadores e agências
- **Eventos**: Webinars e workshops

Veja [MARKETING_PLAN.md](./MARKETING_PLAN.md) para detalhes.

---

## 📈 Métricas & KPIs

| Métrica | Meta | Status |
|---------|------|--------|
| Visitantes/mês | 5.000 | 📊 Em acompanhamento |
| Taxa de conversão | 8-12% | 📊 Em acompanhamento |
| Leads/mês | 50+ | 📊 Em acompanhamento |
| Posição SEO | Top 5 | 📊 Em acompanhamento |
| ROI de ads | > 3:1 | 📊 Em acompanhamento |

---

## 🎓 Apresentação em Slides

Uma apresentação premium em HTML com 20 slides cobrindo:
- Visão geral do projeto
- Design system
- Seções principais
- Tecnologia
- Plano de marketing
- KPIs e timeline

Localização: `/presentation/`

---

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
npm run lint         # Verifica erros de linting
npm run type-check   # Verifica tipos TypeScript
```

---

## 📱 Responsividade

- **Desktop**: 1440px+
- **Tablet**: 768px - 1439px
- **Mobile**: < 768px

Todos os componentes são totalmente responsivos com media queries otimizadas.

---

## ♿ Acessibilidade

- ARIA labels em elementos interativos
- Contraste de cores adequado (WCAG AA)
- Navegação por teclado
- Respeita `prefers-reduced-motion`

---

## 🐛 Troubleshooting

### Porta já em uso
```bash
lsof -ti:5173 | xargs kill -9
```

### Limpar cache
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erros TypeScript
```bash
npm run type-check
```

Veja [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) para mais soluções.

---

## 📞 Contato

- **Email**: contato@papelariapremium.com
- **Telefone**: (11) 99999-9999
- **Website**: [papelariapremium.com](https://papelariapremium.com)
- **Instagram**: [@papelariapremium](https://instagram.com/papelariapremium)
- **LinkedIn**: [Papelaria Premium](https://linkedin.com/company/papelaria-premium)

---

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](./LICENSE) para detalhes.

---

## 👥 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 🙏 Agradecimentos

- Design System baseado em tendências premium 2024
- Ícones de [Font Awesome](https://fontawesome.com)
- Fontes de [Google Fonts](https://fonts.google.com)
- Hospedagem por [Vercel](https://vercel.com)

---

## 📝 Changelog

### v1.0.0 (Abril 2024)
- ✨ Lançamento inicial
- 🎨 Design system completo
- 🚀 Componentes React modularizados
- 📱 Responsividade total
- 🎯 Plano de marketing digital
- 📊 Apresentação em slides

---

**Desenvolvido com ❤️ por [Seu Nome/Empresa]**

Última atualização: Abril 2024
