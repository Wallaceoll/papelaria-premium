# Integração de efeitos imersivos — Hero Section

Abaixo está o material pronto para integrar os três efeitos pedidos na sua página: **reveal on scroll**, **cursor personalizado interativo** e **background dinâmico leve**. A proposta foi desenhada em **JavaScript nativo**, priorizando fluidez, baixo custo de renderização e manutenção simples.

## 1. Ajuste mínimo no HTML

Adicione estes elementos logo após a abertura da tag `<body>`:

```html
<canvas class="mesh-canvas" aria-hidden="true"></canvas>
<div class="cursor-orb" aria-hidden="true"></div>
```

Em seguida, aplique a classe `reveal` nos blocos que devem surgir com animação. Exemplo:

```html
<header class="site-header reveal">
<section class="hero" aria-labelledby="hero-title">
  <div class="container">
    <div class="hero__grid">
      <div class="hero__content reveal reveal-delay-1">
        ...
      </div>

      <div class="hero__visual reveal reveal-delay-2" aria-hidden="true">
        ...
      </div>
    </div>
  </div>
</section>
```

Se quiser um resultado mais rico, aplique `reveal` também em elementos internos como `.hero__eyebrow`, `.hero__title`, `.hero__description`, `.hero__actions` e `.hero__metrics`.

## 2. CSS para adicionar ao seu `<style>`

```css
.mesh-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
  opacity: 0.82;
}

.cursor-orb {
  position: fixed;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(198, 168, 106, 0.42);
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.32), rgba(198, 168, 106, 0.18) 48%, rgba(198, 168, 106, 0.04) 72%);
  box-shadow: 0 0 24px rgba(198, 168, 106, 0.12);
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(1);
  transition:
    width 240ms cubic-bezier(0.22, 1, 0.36, 1),
    height 240ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 180ms ease,
    border-color 240ms ease,
    background 240ms ease,
    box-shadow 240ms ease;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  mix-blend-mode: screen;
  will-change: transform;
}

body.cursor-ready {
  cursor: none;
}

body.cursor-ready a,
body.cursor-ready button,
body.cursor-ready [role="button"],
body.cursor-ready .button-primary,
body.cursor-ready .button-secondary,
body.cursor-ready .site-nav__cta {
  cursor: none;
}

.cursor-orb.is-active {
  width: 54px;
  height: 54px;
  border-color: rgba(215, 187, 130, 0.55);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.18), rgba(198, 168, 106, 0.14) 52%, rgba(198, 168, 106, 0.03) 75%);
  box-shadow: 0 0 44px rgba(198, 168, 106, 0.16);
}

.reveal {
  opacity: 0;
  transform: translate3d(0, 42px, 0);
  filter: blur(8px);
  transition:
    opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 900ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform, filter;
}

.reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

.reveal-delay-1 {
  transition-delay: 120ms;
}

.reveal-delay-2 {
  transition-delay: 220ms;
}

.reveal-delay-3 {
  transition-delay: 320ms;
}

.hero,
.site-header,
.hero__content,
.hero__visual,
.hero-card,
.hero-card__panel {
  position: relative;
  z-index: 1;
}

@media (max-width: 991px), (pointer: coarse) {
  .cursor-orb {
    display: none;
  }

  body.cursor-ready,
  body.cursor-ready a,
  body.cursor-ready button,
  body.cursor-ready [role="button"] {
    cursor: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal.is-visible {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }

  .mesh-canvas,
  .cursor-orb {
    display: none;
  }
}
```

## 3. JavaScript para adicionar antes do fechamento de `</body>`

```html
<script>
  (() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initReveal = () => {
      const items = document.querySelectorAll('.reveal');

      if (!items.length) return;

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        items.forEach((item) => item.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          });
        },
        {
          threshold: 0.16,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      items.forEach((item) => observer.observe(item));
    };

    const initCursor = () => {
      const cursor = document.querySelector('.cursor-orb');
      if (!cursor || prefersReducedMotion) return;
      if (window.matchMedia('(pointer: coarse)').matches) return;

      document.body.classList.add('cursor-ready');

      let currentX = window.innerWidth * 0.5;
      let currentY = window.innerHeight * 0.5;
      let targetX = currentX;
      let targetY = currentY;
      let rafId = 0;
      let visible = false;

      const interactiveSelector = 'a, button, [role="button"], .button-primary, .button-secondary, .site-nav__cta';

      const render = () => {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(1)`;
        rafId = requestAnimationFrame(render);
      };

      const showCursor = () => {
        if (visible) return;
        visible = true;
        cursor.style.opacity = '1';
      };

      const hideCursor = () => {
        visible = false;
        cursor.style.opacity = '0';
      };

      window.addEventListener('mousemove', (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        showCursor();
      }, { passive: true });

      window.addEventListener('mousedown', () => cursor.classList.add('is-active'));
      window.addEventListener('mouseup', () => cursor.classList.remove('is-active'));
      document.addEventListener('mouseleave', hideCursor);
      document.addEventListener('mouseenter', showCursor);

      document.querySelectorAll(interactiveSelector).forEach((element) => {
        element.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
      });

      rafId = requestAnimationFrame(render);

      window.addEventListener('beforeunload', () => cancelAnimationFrame(rafId));
    };

    const initMeshBackground = () => {
      const canvas = document.querySelector('.mesh-canvas');
      if (!canvas || prefersReducedMotion) return;

      const context = canvas.getContext('2d', { alpha: true });
      if (!context) return;

      let width = 0;
      let height = 0;
      let dpr = Math.min(window.devicePixelRatio || 1, 1.8);
      let animationId = 0;

      const nodes = [
        {
          xRatio: 0.14,
          yRatio: 0.18,
          radius: 220,
          color: '198, 168, 106',
          alpha: 0.08,
          speedX: 0.00045,
          speedY: 0.00035,
          phase: 0.4
        },
        {
          xRatio: 0.82,
          yRatio: 0.22,
          radius: 260,
          color: '143, 162, 184',
          alpha: 0.08,
          speedX: 0.00038,
          speedY: 0.00024,
          phase: 1.2
        },
        {
          xRatio: 0.62,
          yRatio: 0.78,
          radius: 300,
          color: '215, 187, 130',
          alpha: 0.06,
          speedX: 0.00032,
          speedY: 0.00028,
          phase: 2.3
        },
        {
          xRatio: 0.28,
          yRatio: 0.72,
          radius: 240,
          color: '120, 138, 158',
          alpha: 0.05,
          speedX: 0.00026,
          speedY: 0.00022,
          phase: 3.1
        }
      ];

      const resize = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 1.8);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      const draw = (time) => {
        context.clearRect(0, 0, width, height);

        const gradient = context.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(11, 13, 18, 0.08)');
        gradient.addColorStop(0.5, 'rgba(18, 22, 29, 0.03)');
        gradient.addColorStop(1, 'rgba(26, 33, 43, 0.08)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);

        nodes.forEach((node, index) => {
          const x = width * node.xRatio + Math.sin(time * node.speedX + node.phase + index) * 56;
          const y = height * node.yRatio + Math.cos(time * node.speedY + node.phase + index) * 44;
          const radial = context.createRadialGradient(x, y, 0, x, y, node.radius);
          radial.addColorStop(0, `rgba(${node.color}, ${node.alpha})`);
          radial.addColorStop(0.45, `rgba(${node.color}, ${node.alpha * 0.46})`);
          radial.addColorStop(1, `rgba(${node.color}, 0)`);
          context.fillStyle = radial;
          context.beginPath();
          context.arc(x, y, node.radius, 0, Math.PI * 2);
          context.fill();
        });

        for (let index = 0; index < 18; index += 1) {
          const x = (index / 18) * width + (time * 0.004 * (index % 3 === 0 ? 1 : -1));
          const y = ((index * 73) % height);
          context.fillStyle = 'rgba(255, 255, 255, 0.018)';
          context.beginPath();
          context.arc((x % width + width) % width, y, index % 2 === 0 ? 1.2 : 0.8, 0, Math.PI * 2);
          context.fill();
        }

        animationId = requestAnimationFrame(draw);
      };

      resize();
      animationId = requestAnimationFrame(draw);
      window.addEventListener('resize', resize, { passive: true });
      window.addEventListener('beforeunload', () => cancelAnimationFrame(animationId));
    };

    document.addEventListener('DOMContentLoaded', () => {
      initReveal();
      initCursor();
      initMeshBackground();
    });
  })();
</script>
```

## 4. Aplicação recomendada na sua Hero atual

A melhor composição para a sua estrutura é esta:

| Elemento | Classe sugerida |
|---|---|
| Header glassmorphism | `site-header reveal` |
| Bloco textual da hero | `hero__content reveal reveal-delay-1` |
| Bloco visual/card | `hero__visual reveal reveal-delay-2` |
| Métricas | `hero__metrics reveal reveal-delay-3` |

## 5. Observação de performance

A solução usa **IntersectionObserver**, **requestAnimationFrame** e um **canvas único em tela cheia**, o que mantém o custo visual baixo e mais previsível. O cursor customizado é automaticamente desativado em dispositivos touch, e os efeitos também respeitam `prefers-reduced-motion`.
