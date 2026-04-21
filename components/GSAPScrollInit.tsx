'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollInit() {
  const pathname = usePathname();

  useEffect(() => {
    // CSS animation in globals.css guarantees cards are always visible.
    // GSAP enhances elements that are BELOW the fold with scroll-triggered
    // animations. We only override elements that are not yet in view.
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Wait for Framer Motion transition + DOM settle
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll<HTMLElement>('.gsap-reveal');

      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight;

        // Only add GSAP scroll animation for elements below the fold
        if (!inView) {
          // Override the CSS animation with GSAP for below-fold elements
          el.style.animation = 'none';
          el.style.opacity = '0';
          el.style.transform = 'translateY(40px)';

          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              once: true,
            },
          });
        }
      });

      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname]);

  return null;
}
