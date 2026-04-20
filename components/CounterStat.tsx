'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function CounterStat({ value, suffix = '', label }: CounterStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="stat-number" style={{ fontWeight: 700, lineHeight: 1 }}>
        {count}{suffix}
      </span>
      <span className="stat-label" style={{ fontWeight: 300 }}>
        {label}
      </span>
    </div>
  );
}
