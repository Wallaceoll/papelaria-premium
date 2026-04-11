import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.14);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.14);
      ring.style.left = ringPos.current.x + 'px';
      ring.style.top  = ringPos.current.y + 'px';
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    };
    const onLeave = () => {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    };

    document.addEventListener('mousemove', move);
    raf.current = requestAnimationFrame(animate);

    const targets = document.querySelectorAll('a, button, [data-cursor]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
