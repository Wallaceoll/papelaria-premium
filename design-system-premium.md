# Design System Premium — Papelaria Premium

## Direção criativa escolhida

A direção selecionada para o projeto é **Editorial Noir Technologique**. Trata-se de uma linguagem visual que combina **luxo editorial**, **sofisticação de marca premium** e **clareza de interface contemporânea**, alinhada à referência enviada e às tendências recentes de websites de posicionamento elevado. A lógica central é simples: a experiência deve transmitir **curadoria**, **autoridade visual** e **acabamento refinado**, sem cair em excessos decorativos. A combinação entre fundos escuros, tipografia serifada de alto contraste, acento metálico controlado e grandes áreas de respiro reforça exatamente esse posicionamento [1].

A recomendação, portanto, é iniciar o site em **dark mode como linguagem principal**, utilizando um preto mineral profundo como base, superfícies em grafite frio para profundidade e um dourado envelhecido como cor de assinatura. Esse conjunto passa uma sensação simultânea de **modernidade**, **luxo** e **tecnologia discreta**, o que é especialmente adequado para uma papelaria que deseja se posicionar como marca premium e memorável.

## Estrutura técnica do sistema visual

| Camada | Diretriz | Aplicação recomendada |
|---|---|---|
| **Modo base** | **Dark-first premium** | Hero, navegação, áreas institucionais e blocos de posicionamento |
| **Tom de destaque** | **Dourado envelhecido / champagne metálico** | Botões principais, linhas finas, ícones-chave, detalhes editoriais |
| **Contraponto tecnológico** | **Cinza aço azulado** | Divisores, estados de hover, detalhes secundários e UI de apoio |
| **Tom de leitura** | **Marfim quente / off-white sofisticado** | Texto principal, números de destaque e contraste em áreas escuras |
| **Superfícies** | **Grafite, carvão e ardósia fria** | Cards, painéis, overlays e seções de conteúdo |

## Paleta de cores

A paleta foi desenhada para evitar o clichê do “preto com dourado genérico”. O preto aqui não é absoluto; ele possui fundo mineral e nuances frias, o que aproxima a percepção de tecnologia premium. O dourado também não deve parecer festivo ou excessivamente brilhante. A intenção é trabalhar um metal envelhecido, elegante e seletivo, aplicado em baixa frequência para manter valor simbólico alto.

| Token | Cor | Hex | Função |
|---|---|---:|---|
| **Background Primary** | Preto mineral | `#0B0D12` | Fundo principal do site |
| **Background Secondary** | Grafite profundo | `#12161D` | Seções alternadas e painéis |
| **Background Tertiary** | Ardósia escura | `#1A212B` | Cards e elementos elevados |
| **Surface Soft** | Cinza carvão azulado | `#232C38` | Inputs, blocos secundários e hover states |
| **Accent Primary** | Dourado envelhecido | `#C6A86A` | CTA principal, links premium, detalhes finos |
| **Accent Hover** | Champagne quente | `#D7BB82` | Hover e estado ativo de destaque |
| **Accent Deep** | Bronze sofisticado | `#8E7345` | Bordas premium e contraste do acento |
| **Accent Cool** | Aço azulado | `#8FA2B8` | Tecnologia, ícones de apoio, microdetalhes |
| **Text Primary** | Marfim claro | `#F5F1EA` | Títulos e texto principal sobre dark |
| **Text Secondary** | Bege acinzentado | `#C7C0B6` | Parágrafos longos e conteúdo institucional |
| **Text Muted** | Cinza editorial | `#8E949F` | Metadados, descrições auxiliares, labels secundárias |
| **Border Soft** | Linha translúcida fria | `rgba(255,255,255,0.08)` | Bordas discretas |
| **Border Premium** | Linha dourada translúcida | `rgba(198,168,106,0.32)` | Separadores nobres e estados especiais |

## Tipografia

A dupla tipográfica recomendada é **Bodoni Moda** para títulos e **Manrope** para texto corrido e interface. Essa combinação funciona porque a primeira entrega o impacto editorial e a percepção de luxo, enquanto a segunda traz limpeza, legibilidade e contemporaneidade digital. Em conjunto, elas equilibram o universo da papelaria — que pede refinamento e sensibilidade — com o contexto de um site institucional moderno em React.

| Função | Fonte | Peso sugerido | Uso |
|---|---|---:|---|
| **Display / Headlines** | `Bodoni Moda` | 600–700 | Hero titles, títulos de seção, frases de impacto |
| **Body / UI** | `Manrope` | 400–600 | Parágrafos, navegação, cards, botões, legendas |
| **Labels editoriais** | `Manrope` | 500–700 | Menus, categorias, badges, microcopy em caixa alta |

A regra de hierarquia deve ser rigorosa. Os títulos principais devem usar serif com bastante presença, tracking levemente negativo e entrelinhas compactas. O texto corrido deve permanecer limpo, com largura confortável de leitura e contraste alto. Menus, subtítulos curtos e labels podem ser apresentados em caixa alta com espaçamento de letras expandido, criando uma atmosfera de catálogo premium [1].

## Vibe visual e princípios de composição

O site deve trabalhar **white space como ativo de valor**, não como vazio. Marcas premium frequentemente parecem mais sofisticadas porque deixam o conteúdo respirar; isso faz com que cada bloco tenha peso visual e transmite segurança. Em vez de preencher a tela com muitos elementos, o ideal é trabalhar composições mais editoriais, com alinhamentos laterais fortes, respiros generosos e seções com ritmo visual bem controlado [1].

| Elemento | Diretriz premium | Regra prática |
|---|---|---|
| **White Space** | Espaço negativo amplo e intencional | Seções com `padding-block` generoso entre `96px` e `160px` |
| **Border Radius** | Raios sutis e elegantes | Cards entre `16px` e `22px`; inputs entre `12px` e `16px` |
| **Sombras** | Soft shadows profundas e difusas | Nada de sombras duras; usar blur amplo e opacidade baixa |
| **Bordas** | Linhas finas, discretas e refinadas | Preferir `1px` translúcido a contornos pesados |
| **Profundidade** | Camadas suaves com contraste tonal | Sobrepor superfícies grafite sobre o fundo mineral |
| **Textura** | Quase invisível | Leve granulação, degradês muito suaves ou glow controlado |

A sensação visual deve ser de **objeto bem acabado**, quase como se a interface tivesse sido impressa sobre materiais nobres. Isso significa evitar saturação excessiva, gradientes chamativos e curvas exageradas. O refinamento aqui vem da contenção.

## Regras de aplicação visual

| Componente | Direção recomendada |
|---|---|
| **Hero** | Fundo escuro com tipografia serifada grande, imagem ou textura de alto contraste e detalhes finos em dourado |
| **Botão primário** | Base dourada ou grafite com contorno premium; hover com leve elevação e aumento sutil de brilho |
| **Botão secundário** | Transparente, borda fina translúcida, texto marfim |
| **Cards** | Superfície grafite com sombra suave, raio médio e borda fria discreta |
| **Navbar** | Estrutura limpa, caixa alta com espaçamento amplo, comportamento quase editorial |
| **Seções institucionais** | Alternância entre fundos escuros e áreas claras pontuais apenas se houver intenção curatorial |

## Variáveis de CSS (`:root`)

O bloco abaixo já está estruturado de forma semântica para ser usado como base do projeto. Ele foi pensado para um sistema de interface premium, com tokens prontos para cor, tipografia, radius, sombras, espaçamento e transições.

```css
:root {
  --bg-primary: #0b0d12;
  --bg-secondary: #12161d;
  --bg-tertiary: #1a212b;
  --surface-soft: #232c38;
  --surface-elevated: rgba(255, 255, 255, 0.04);
  --surface-glass: rgba(255, 255, 255, 0.06);

  --text-primary: #f5f1ea;
  --text-secondary: #c7c0b6;
  --text-muted: #8e949f;
  --text-dark: #16181d;

  --accent-primary: #c6a86a;
  --accent-hover: #d7bb82;
  --accent-deep: #8e7345;
  --accent-cool: #8fa2b8;

  --border-soft: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.14);
  --border-premium: rgba(198, 168, 106, 0.32);

  --shadow-soft: 0 12px 40px rgba(0, 0, 0, 0.18);
  --shadow-card: 0 18px 50px rgba(0, 0, 0, 0.24);
  --shadow-premium: 0 10px 30px rgba(198, 168, 106, 0.08);
  --shadow-focus: 0 0 0 1px rgba(198, 168, 106, 0.44), 0 0 0 6px rgba(198, 168, 106, 0.12);

  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 22px;
  --radius-xl: 28px;
  --radius-pill: 999px;

  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;
  --space-4xl: 96px;
  --space-section: clamp(96px, 12vw, 160px);
  --space-container: clamp(20px, 4vw, 40px);

  --font-display: "Bodoni Moda", "Times New Roman", serif;
  --font-body: "Manrope", "Segoe UI", sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 3rem;
  --text-5xl: clamp(3.5rem, 8vw, 6.5rem);

  --leading-tight: 0.95;
  --leading-snug: 1.1;
  --leading-body: 1.65;

  --tracking-tight: -0.035em;
  --tracking-normal: 0;
  --tracking-wide: 0.08em;
  --tracking-label: 0.16em;

  --container-max: 1280px;
  --transition-fast: 180ms ease;
  --transition-medium: 280ms cubic-bezier(0.22, 1, 0.36, 1);
  --transition-slow: 500ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Recomendação final de direção

Se o objetivo é atrair novos clientes com uma presença visual memorável, a melhor escolha para este projeto é um sistema **dark-first sofisticado**, com **acentos dourados seletivos**, **tipografia editorial de alto contraste** e **UI limpa com respiro generoso**. Essa abordagem evita o visual genérico comum em sites institucionais e posiciona a marca de papelaria como uma empresa com curadoria, design e valor percebido mais alto.

Na próxima etapa, esse design system pode ser convertido diretamente para a implementação em React, com adaptação dos tokens para o `index.css`, escolha de fontes no `index.html` e desdobramento em componentes como hero, navbar, cards, botões e seções institucionais.

## References

[1]: https://moriahriona.com/website-design-trends/ "7 Premium Luxury Website Design Trends to Spice Up Your Site" 
