import type { Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card gsap-reveal">
      <span
        style={{
          fontSize: 11,
          fontWeight: 300,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          display: 'block',
          marginBottom: 16,
        }}
      >
        {project.category}
      </span>

      <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
        {project.title}
      </h3>

      <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, marginBottom: 32 }}>
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <span style={{ fontSize: 13, fontWeight: 300 }}>{project.year}</span>
        <span className="slide-link" style={{ fontSize: 14, fontWeight: 500 }}>
          View →
        </span>
      </div>
    </div>
  );
}
