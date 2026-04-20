import type { Workshop } from '@/lib/data';

export default function WorkshopPill({ workshop }: { workshop: Workshop }) {
  return (
    <div className="workshop-pill gsap-reveal">
      <h3
        style={{
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 1.2,
          flex: '1 1 auto',
          minWidth: 0,
        }}
      >
        {workshop.title}
      </h3>

      <div className="flex flex-wrap gap-2 flex-shrink-0">
        <span className="pill-tag">{workshop.audience}</span>
        <span className="pill-tag">{workshop.duration}</span>
        <span className="pill-tag">{workshop.location}</span>
      </div>
    </div>
  );
}
