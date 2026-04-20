'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const actualRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      actualRef.current.x += (posRef.current.x - actualRef.current.x) * 0.15;
      actualRef.current.y += (posRef.current.y - actualRef.current.y) * 0.15;
      if (cursor) {
        cursor.style.left = actualRef.current.x + 'px';
        cursor.style.top  = actualRef.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => cursor?.classList.add('expanded');
    const onLeave = () => cursor?.classList.remove('expanded');

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-expand]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden />;
}
