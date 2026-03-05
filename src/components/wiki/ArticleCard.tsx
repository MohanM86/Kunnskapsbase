import Link from 'next/link';
import type { ArticleMeta } from '@/lib/types';

interface ArticleCardProps {
  article: ArticleMeta;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const href = `/wiki/${article.slugPath.join('/')}`;
  const date = new Date(article.updatedAt).toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={href} className="article-card">
      <div className="article-card-cat">{article.category}</div>
      <h3 className="article-card-title">{article.title}</h3>
      <p className="article-card-desc">{article.description}</p>
      <div className="article-card-meta">
        <time dateTime={article.updatedAt}>{date}</time>
        <div className="article-card-tags">
          {(article.tags || []).slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
