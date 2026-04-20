'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MarqueeButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  small?: boolean;
}

export default function MarqueeButton({
  label,
  href,
  onClick,
  className = '',
  type = 'button',
  small = false,
}: MarqueeButtonProps) {
  const [hovered, setHovered] = useState(false);
  const scrollText = `${label}   ${label}   ${label}   ${label}   `;

  const cls = `btn-marquee${hovered ? ' hovered' : ''}${small ? ' !h-10 !text-xs !px-5' : ''} ${className}`;

  const inner = (
    <>
      <span className="btn-static">{label}</span>
      <span className="btn-scroll">
        <span className="btn-scroll-inner">{scrollText}{scrollText}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {inner}
    </button>
  );
}
