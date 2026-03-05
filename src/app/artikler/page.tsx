import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta } from '@/lib/articles';
import ArticleCard from '@/components/wiki/ArticleCard';

export const metadata: Metadata = {
  title: 'Alle artikler',
  description: 'Komplett liste over alle artikler på Kunnskapsbase.no.',
};

export default function ArtiklerPage() {
  const articles = getAllArticlesMeta();

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 className="display-md">Alle artikler</h1>
        <p className="text-muted" style={{ marginTop: '0.5rem' }}>{articles.length} artikler totalt</p>
      </div>
      <div className="articles-grid">
        {articles.map(a => <ArticleCard key={a.slugPath.join('/')} article={a} />)}
      </div>
    </div>
  );
}
