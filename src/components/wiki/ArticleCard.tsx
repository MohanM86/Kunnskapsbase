import Link from 'next/link';
import type { ArticleMeta } from '@/lib/types';
interface ArticleCardProps { article: ArticleMeta; }
export default function ArticleCard({ article }: ArticleCardProps) {
  const href = `/${article.slugPath.join('/')}`;
  let dateStr = '';
  if (article.updatedAt) {
    const d = new Date(article.updatedAt);
    if (!isNaN(d.getTime())) {
      dateStr = d.toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
  return (
    <Link href={href} className="article-card">
      <div className="article-card-cat">{article.category}</div>
      <h3 className="article-card-title">{article.title}</h3>
      <p className="article-card-desc">{article.description}</p>
      <div className="article-card-meta">
        {dateStr && <time dateTime={article.updatedAt}>{dateStr}</time>}
        <div className="article-card-tags">{(article.tags || []).slice(0, 3).map((tag) => (<span key={tag} className="tag">{tag}</span>))}</div>
      </div>
    </Link>
  );
}