import Link from 'next/link';
import type { ArticleMeta } from '@/lib/types';

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  const href = `/${article.slugPath.join('/')}`;
  const date = new Date(article.publishedAt).toLocaleDateString('nb-NO', { year:'numeric', month:'long', day:'numeric' });

  return (
    <Link href={href} className="article-card fade-up">
      <div className="article-card-eyebrow">
        <span className="article-cat-badge">{article.category}</span>
        {article.difficulty && <span className="article-diff-badge">{article.difficulty}</span>}
      </div>
      <div className="article-card-title">{article.title}</div>
      <div className="article-card-desc">{article.description}</div>
      <div className="article-card-footer">
        <time dateTime={article.publishedAt}>{date}</time>
        <span className="article-card-arrow">→</span>
      </div>
    </Link>
  );
}
