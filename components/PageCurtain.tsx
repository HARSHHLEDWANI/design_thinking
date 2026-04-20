'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function PageCurtain() {
  const topRef    = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(topRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1,
    }).to(bottomRef.current, {
      y: '100%',
      duration: 0.8,
      ease: 'power3.out',
    }, '<').then(() => {
      topRef.current?.remove();
      bottomRef.current?.remove();
    });
  }, []);

  return (
    <>
      <div ref={topRef}    className="curtain-top"    aria-hidden />
      <div ref={bottomRef} className="curtain-bottom" aria-hidden />
    </>
  );
}
