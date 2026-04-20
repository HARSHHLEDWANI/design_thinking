import type { Publication } from '@/lib/data';
import MarqueeButton from './MarqueeButton';

export default function PublicationRow({ pub }: { pub: Publication }) {
  return (
    <div className="gsap-reveal" style={{ borderBottom: '1px solid #0a0a0a', padding: '40px 0' }}>
      <div className="flex gap-8 items-start">
        {/* Year */}
        <div style={{ minWidth: '15%', flexShrink: 0 }}>
          <span style={{ fontSize: 48, fontWeight: 700, lineHeight: 1 }}>{pub.year}</span>
        </div>

        {/* Vertical divider */}
        <div className="v-divider hidden md:block" style={{ minHeight: 80 }} />

        {/* Content */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
            {pub.title}
          </h3>
          <p style={{ fontSize: 15, fontWeight: 300, fontStyle: 'italic', marginBottom: 12 }}>
            {pub.journal}
          </p>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6 }}>
            {pub.abstract}
          </p>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 hidden md:block">
          <MarqueeButton label="Read →" href={pub.url ?? '#'} small />
        </div>
      </div>
    </div>
  );
}
