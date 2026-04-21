import type { BlogPost } from '@/lib/data';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="blog-card gsap-reveal flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <span className="pill-tag">{post.category}</span>
        <span style={{ fontSize: 12, fontWeight: 300 }}>{post.readTime}</span>
      </div>

      <h3
        style={{
          fontSize: 26,
          fontWeight: 700,
          lineHeight: 1.2,
          marginBottom: 16,
          flex: '1 0 auto',
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          fontWeight: 300,
          lineHeight: 1.6,
          marginBottom: 32,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {post.excerpt}
      </p>

      <div className="mt-auto">
        <span style={{ fontSize: 12, fontWeight: 300 }}>{post.date}</span>
      </div>
    </div>
  );
}

