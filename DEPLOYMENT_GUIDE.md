# Guia Completo de Deployment - Papelaria Premium

## 📋 Índice

1. [Requisitos do Sistema](#requisitos-do-sistema)
2. [Instalação Local](#instalação-local)
3. [Executar Localmente](#executar-localmente)
4. [Deploy no Vercel](#deploy-no-vercel)
5. [Variáveis de Ambiente](#variáveis-de-ambiente)
6. [Troubleshooting](#troubleshooting)

---

## Requisitos do Sistema

### Obrigatório
- **Node.js**: v18.0.0 ou superior
- **npm**: v9.0.0 ou superior (ou yarn/pnpm)
- **Git**: Para versionamento

### Verificar Versões
```bash
node --version
npm --version
git --version
```

---

## Instalação Local

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/papelaria-premium.git
cd papelaria-premium
```

### Passo 2: Instalar Dependências

```bash
npm install
```

Ou com yarn:
```bash
yarn install
```

Ou com pnpm:
```bash
pnpm install
```

### Passo 3: Verificar Estrutura de Pastas

```
papelaria-premium/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   ├── Carousel.tsx
│   │   │   └── Carousel.css
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.css
│   │   │   ├── Services.tsx
│   │   │   ├── Services.css
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Portfolio.css
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Testimonials.css
│   │   │   ├── CTA.tsx
│   │   │   ├── CTA.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   └── modals/
│   │       ├── ContactModal.tsx
│   │       ├── ContactModal.css
│   │       ├── ProjectModal.tsx
│   │       └── ProjectModal.css
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .gitignore
```

---

## Executar Localmente

### Desenvolvimento (Com Hot Reload)

```bash
npm run dev
```

O site abrirá automaticamente em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Isso gera uma pasta `dist/` com os arquivos otimizados.

### Preview da Build de Produção

```bash
npm run preview
```

---

## Deploy no Vercel

### Opção 1: Via CLI (Recomendado)

#### 1.1 Instalar Vercel CLI
```bash
npm install -g vercel
```

#### 1.2 Login no Vercel
```bash
vercel login
```

#### 1.3 Deploy
```bash
vercel
```

Siga as instruções interativas. Na primeira execução, você será perguntado:
- **Project name**: `papelaria-premium`
- **Framework**: Selecione `Vite`
- **Root directory**: Deixe em branco (padrão)
- **Build command**: `npm run build`
- **Output directory**: `dist`

#### 1.4 Deploy para Produção
```bash
vercel --prod
```

### Opção 2: Via GitHub (Recomendado para Equipes)

#### 2.1 Criar Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new)
2. Crie um repositório chamado `papelaria-premium`
3. Não inicialize com README

#### 2.2 Push do Código
```bash
git remote add origin https://github.com/seu-usuario/papelaria-premium.git
git branch -M main
git push -u origin main
```

#### 2.3 Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Selecione seu repositório `papelaria-premium`
5. Vercel detectará automaticamente Vite
6. Clique em "Deploy"

#### 2.4 Configurações Automáticas
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Opção 3: Drag & Drop

1. Acesse [vercel.com](https://vercel.com)
2. Faça o build localmente: `npm run build`
3. Arraste a pasta `dist/` para a página do Vercel

---

## Variáveis de Ambiente

### Arquivo `.env.local` (Local)

```env
VITE_APP_NAME=Papelaria Premium
VITE_API_URL=http://localhost:3000
```

### Arquivo `.env.production` (Produção)

```env
VITE_APP_NAME=Papelaria Premium
VITE_API_URL=https://seu-dominio.com
```

### No Vercel (Settings > Environment Variables)

1. Acesse seu projeto no Vercel
2. Vá para **Settings** > **Environment Variables**
3. Adicione as variáveis necessárias:
   - `VITE_APP_NAME=Papelaria Premium`
   - `VITE_API_URL=https://seu-dominio.com`

---

## Domínio Personalizado

### Adicionar Domínio no Vercel

1. Acesse seu projeto no Vercel
2. Vá para **Settings** > **Domains**
3. Clique em "Add Domain"
4. Digite seu domínio (ex: `papelariapremium.com`)
5. Siga as instruções de DNS

### Configuração de DNS

Se seu domínio está em outro registrador:

1. Vá para as configurações de DNS do seu registrador
2. Adicione um registro `CNAME`:
   - **Name**: `www`
   - **Value**: `cname.vercel-dns.com`
3. Ou use um registro `A`:
   - **Name**: `@`
   - **Value**: `76.76.19.165`

---

## Troubleshooting

### Problema: "Port 5173 already in use"

**Solução:**
```bash
# Matar processo na porta 5173
lsof -ti:5173 | xargs kill -9

# Ou usar porta diferente
npm run dev -- --port 3001
```

### Problema: "Module not found"

**Solução:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Problema: Build falha no Vercel

**Solução:**
1. Verifique se `package.json` está correto
2. Verifique se `tsconfig.json` está correto
3. Verifique se não há erros TypeScript: `npm run check`
4. Verifique logs no Vercel: **Deployments** > **Build Logs**

### Problema: Estilos não carregam em produção

**Solução:**
1. Verifique se os arquivos CSS estão sendo importados corretamente
2. Verifique se os caminhos de imagens são absolutos
3. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Problema: Imagens não aparecem

**Solução:**
1. Verifique se as imagens estão em `/public`
2. Verifique se os caminhos começam com `/` (ex: `/image.png`)
3. Ou use URLs CDN completas

---

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview da build |
| `npm run lint` | Verifica erros de linting |
| `npm run type-check` | Verifica tipos TypeScript |

---

## Checklist de Deploy

- [ ] Todas as dependências instaladas (`npm install`)
- [ ] Sem erros TypeScript (`npm run type-check`)
- [ ] Build local funciona (`npm run build`)
- [ ] Variáveis de ambiente configuradas
- [ ] Repositório Git criado e conectado
- [ ] Vercel conectado ao GitHub
- [ ] Domínio configurado (opcional)
- [ ] SSL/HTTPS ativado (automático no Vercel)
- [ ] Analytics configurado (opcional)
- [ ] Emails de notificação configurados

---

## Performance & Otimizações

### Lighthouse Scores (Meta)
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

### Otimizações Implementadas
- ✓ Code splitting automático
- ✓ Lazy loading de componentes
- ✓ Minificação de CSS/JS
- ✓ Compressão de imagens
- ✓ Cache headers otimizados
- ✓ Preload de fontes críticas

---

## Suporte

### Documentação
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Contato
- Email: contato@papelariapremium.com
- GitHub Issues: [Reportar bug](https://github.com/seu-usuario/papelaria-premium/issues)

---

**Última atualização**: Abril 2024
**Versão**: 1.0.0
