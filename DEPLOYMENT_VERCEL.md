# Guia de Deploy no Vercel - Papelaria Premium

## 🚀 Quick Start (Mais Rápido)

### Opção 1: Deploy via GitHub (Recomendado)

1. **Fazer push do projeto para GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Papelaria Premium site"
git branch -M main
git remote add origin https://github.com/seu-usuario/papelaria-premium.git
git push -u origin main
```

2. **Conectar no Vercel**
   - Acesse https://vercel.com
   - Clique em "New Project"
   - Selecione seu repositório GitHub
   - Vercel detectará automaticamente que é um projeto Vite
   - Clique em "Deploy"

3. **Pronto!** Seu site estará online em `https://seu-projeto.vercel.app`

### Opção 2: Deploy via CLI (Mais Controle)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy (primeira vez)
vercel

# Deploy para produção
vercel --prod
```

---

## 📋 Pré-requisitos

- Node.js v18+
- npm v9+ (ou yarn/pnpm)
- Conta Vercel (gratuita em https://vercel.com)
- Repositório GitHub (opcional, mas recomendado)

---

## 🔧 Configuração Local

### 1. Instalar Dependências

```bash
cd papelaria-premium
npm install
```

### 2. Testar Localmente

```bash
npm run dev
```

Abrirá em `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
npm run preview
```

Isso simula o build de produção localmente.

---

## ✅ Checklist Antes do Deploy

- [ ] Todas as dependências instaladas (`npm install`)
- [ ] Build local funciona (`npm run build`)
- [ ] Sem erros TypeScript (`npm run build` sem erros)
- [ ] Imagens carregam corretamente
- [ ] Links internos funcionam
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Meta tags e SEO verificados
- [ ] Formulários testados (se houver)
- [ ] Performance verificada com Lighthouse

---

## 🌐 Configuração de Domínio

### Usar Domínio Vercel Gratuito

Seu site terá um domínio gratuito: `seu-projeto.vercel.app`

### Usar Domínio Customizado

1. No Vercel Dashboard, vá para "Settings" → "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio (ex: `papelariapremium.com`)
4. Escolha uma opção:
   - **Comprar domínio via Vercel** (mais fácil)
   - **Usar domínio existente** (atualize DNS no seu registrador)

### Atualizando DNS (Domínio Existente)

Se você já tem um domínio em outro registrador:

1. No Vercel, copie os registros DNS fornecidos
2. Vá ao painel de controle do seu registrador
3. Atualize os registros DNS:
   - Adicione registros `A` ou `CNAME` conforme indicado
   - Aguarde propagação (até 48 horas)

---

## 🔐 Variáveis de Ambiente

Se seu projeto usar variáveis de ambiente:

1. No Vercel Dashboard, vá para "Settings" → "Environment Variables"
2. Adicione suas variáveis:
   - **Key**: Nome da variável (ex: `REACT_APP_API_URL`)
   - **Value**: Valor da variável
3. Selecione em quais ambientes usar (Production, Preview, Development)
4. Clique em "Save"

**Exemplo de variáveis comuns:**
```
REACT_APP_API_URL=https://api.papelariapremium.com
REACT_APP_ANALYTICS_ID=UA-XXXXXXXXX-X
```

---

## 📊 Monitorando o Deploy

### Dashboard Vercel

1. Acesse https://vercel.com/dashboard
2. Selecione seu projeto
3. Veja:
   - **Deployments**: Histórico de deploys
   - **Analytics**: Visitantes, performance
   - **Logs**: Erros e informações
   - **Settings**: Configurações do projeto

### Verificar Status do Deploy

```bash
vercel status
```

### Ver Logs do Deploy

```bash
vercel logs
```

---

## 🐛 Troubleshooting

### Build Falha no Vercel

**Erro: "Failed to compile"**

1. Verifique erros localmente: `npm run build`
2. Corrija erros TypeScript
3. Certifique-se que todas as dependências estão em `package.json`
4. Faça push das mudanças: `git push origin main`

**Erro: "Cannot find module"**

1. Instale a dependência: `npm install nome-do-pacote`
2. Adicione ao `package.json`
3. Faça commit: `git add package.json && git commit -m "Add dependency"`
4. Faça push: `git push origin main`

### Site Mostra Erro 404

1. Verifique se `vercel.json` está configurado corretamente
2. Confirme que `dist/` foi gerado no build
3. Verifique se `outputDirectory` em `vercel.json` está correto

### Performance Lenta

1. Verifique tamanho das imagens
2. Comprima imagens com TinyPNG
3. Use WebP em vez de PNG/JPG
4. Ative lazy loading nas imagens

### Imagens Não Carregam

1. Verifique caminhos das imagens (devem ser `/images/...`)
2. Certifique-se que imagens estão em `public/images/`
3. Verifique permissões dos arquivos

---

## 📈 Otimizações Pós-Deploy

### Ativar Caching

No `vercel.json`, adicione:
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Ativar Compressão

Vercel ativa automaticamente gzip/brotli.

### Monitorar Core Web Vitals

1. Acesse Vercel Analytics
2. Monitore LCP, FID, CLS
3. Otimize conforme necessário

---

## 🔄 Atualizando o Site

### Fazer Mudanças Localmente

```bash
# Editar arquivos
# Testar localmente
npm run dev

# Build
npm run build
npm run preview
```

### Fazer Push para GitHub

```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

### Vercel Fará Deploy Automaticamente

- Vercel detecta mudanças no GitHub
- Faz build automaticamente
- Deploy em produção após sucesso

---

## 📞 Suporte

### Documentação Vercel
- https://vercel.com/docs

### Comunidade
- https://github.com/vercel/vercel/discussions
- https://stackoverflow.com/questions/tagged/vercel

### Contato
- Email: support@vercel.com
- Twitter: @vercel

---

## 🎯 Próximos Passos

1. **Configurar domínio customizado**
2. **Adicionar analytics** (Google Analytics, Vercel Analytics)
3. **Configurar CI/CD** (testes automáticos)
4. **Monitorar performance** (Lighthouse, Web Vitals)
5. **Otimizar SEO** (meta tags, schema markup)
6. **Configurar email** (para formulários de contato)

---

## 📝 Checklist Final

- [ ] Site rodando localmente sem erros
- [ ] Build de produção funciona
- [ ] Repositório GitHub criado e conectado
- [ ] Projeto criado no Vercel
- [ ] Deploy inicial bem-sucedido
- [ ] Domínio customizado configurado (opcional)
- [ ] Variáveis de ambiente adicionadas
- [ ] Analytics configurado
- [ ] SSL/HTTPS ativado (automático no Vercel)
- [ ] Backup do projeto realizado

---

**Seu site Papelaria Premium está pronto para ir ao vivo! 🚀**
