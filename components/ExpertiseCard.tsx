import type { ExpertiseCard as ExpertiseCardType } from '@/lib/data';

export default function ExpertiseCard({ card }: { card: ExpertiseCardType }) {
  return (
    <div className="expertise-card gsap-reveal">
      <div className="flex items-start justify-between mb-6">
        <span style={{ fontSize: 12, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {card.number}
        </span>
        <span className="expertise-arrow">→</span>
      </div>

      <h3 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, lineHeight: 1.1 }}>
        {card.title}
      </h3>

      <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, marginBottom: 32 }}>
        {card.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {card.tags.map(tag => (
          <span key={tag} className="pill-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
