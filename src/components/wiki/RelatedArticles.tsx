import Link from 'next/link';
import type { ArticleMeta } from '@/lib/types';
interface RelatedArticlesProps { articles: ArticleMeta[]; }
export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;
  return (
    <aside className="related-articles"><h2>Relaterte artikler</h2>
      <div className="related-grid">{articles.map((article) => (
        <Link key={article.slug} href={`/${article.slugPath.join('/')}`} className="related-card">
          <div className="related-cat">{article.category}</div>
          <div className="related-title">{article.title}</div>
          <div className="related-desc">{article.description}</div>
        </Link>
      ))}</div>
    </aside>
  );
}