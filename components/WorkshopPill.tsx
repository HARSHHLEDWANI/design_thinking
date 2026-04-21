import type { Workshop } from '@/lib/data';

export default function WorkshopPill({ workshop }: { workshop: Workshop }) {
  return (
    <div className="workshop-pill gsap-reveal">
      <h3
        style={{
          fontSize: 'clamp(20px, 2vw, 24px)',
          fontWeight: 700,
          lineHeight: 1.2,
          flex: '1 1 50%',
          minWidth: 0,
          wordWrap: 'break-word',
          hyphens: 'auto',
        }}
      >
        {workshop.title}
      </h3>

      <div 
        className="flex flex-wrap gap-2" 
        style={{ 
          flex: '1 1 50%', 
          minWidth: 0,
          justifyContent: 'flex-start',
          alignContent: 'center'
        }}
      >
        <span className="pill-tag">{workshop.audience}</span>
        <span className="pill-tag">{workshop.duration}</span>
        <span className="pill-tag">{workshop.location}</span>
      </div>
    </div>
  );
}
