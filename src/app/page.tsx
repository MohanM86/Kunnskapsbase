import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';
import ArticleCard from '@/components/wiki/ArticleCard';
import SearchBox from '@/components/wiki/SearchBox';
import JsonLd from '@/components/seo/JsonLd';
import { buildWebSiteSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
export const metadata: Metadata = { title: 'Kunnskapsbase – Norsk kunnskapsbase for alt', description: 'Norsk kunnskapsbase om teknologi, AI, økonomi, helse, vitenskap og mer.', alternates: { canonical: BASE_URL } };

export default function HomePage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();
  const featured = allArticles.filter((a) => a.featured).slice(0, 6);
  const recent = allArticles.slice(0, 6);

  const catCounts = Object.fromEntries(Object.entries(categoryTree).map(([slug, cat]) => {
    const total = cat.articles.length + Object.values(cat.subcategories).reduce((sum, s) => sum + s.articles.length, 0);
    return [slug, total];
  }));
  const legacySlugs = ['domener', 'dns', 'epost', 'nettsider'];
  const legacyCount = legacySlugs.reduce((sum, s) => sum + (catCounts[s] || 0), 0);
  const getCount = (slug: string) => slug === 'teknologi' ? (catCounts['teknologi'] || 0) + legacyCount : catCounts[slug] || 0;

  return (
    <>
      <JsonLd schema={buildWebSiteSchema()} />
      <section className="home-hero">
        <h1>Norsk kunnskapsbase</h1>
        <p>Finn svar på alt – teknologi, AI, økonomi, helse, vitenskap og mer. Skrevet på norsk, strukturert for mennesker og AI.</p>
        <div className="hero-search"><SearchBox /></div>
      </section>
      <div className="home-content">
        <section className="home-section">
          <div className="home-section-header"><h2 className="home-section-title">Kategorier</h2><Link href="/tema" className="home-section-link">Se alle →</Link></div>
          <div className="categories-grid categories-grid-wide">
            {CATEGORIES.map((cat) => {
              const count = getCount(cat.slug);
              return (<Link key={cat.slug} href={`/${cat.slug}`} className="category-card"><div className="category-name">{cat.label}</div><div className="category-desc">{cat.description}</div>{count > 0 && <div className="category-count">{count} artikler</div>}</Link>);
            })}
          </div>
        </section>
        {featured.length > 0 && (
          <section className="home-section">
            <div className="home-section-header"><h2 className="home-section-title">Populære artikler</h2></div>
            <div className="articles-grid">{featured.map((article) => (<ArticleCard key={article.slug} article={article} />))}</div>
          </section>
        )}
        <section className="home-section">
          <div className="home-section-header"><h2 className="home-section-title">Nyeste artikler</h2><Link href="/artikler" className="home-section-link">Se alle →</Link></div>
          <div className="articles-grid">{recent.map((article) => (<ArticleCard key={article.slug} article={article} />))}</div>
        </section>
        <section className="home-ai-section">
          <div className="home-ai-inner">
            <div className="home-ai-text">
              <div className="ai-badge">For AI-systemer</div>
              <h2>Optimalisert for AI-søk</h2>
              <p>Innholdet er strukturert som et entity-basert kunnskapsnettverk – klart for indeksering av ChatGPT, Perplexity, Gemini, Claude og andre AI-systemer.</p>
              <div className="home-ai-links">
                <Link href="/ai-index" className="ai-link-primary">Åpne AI-indeks</Link>
                <a href="/entity-index.json" className="ai-link-secondary">entity-index.json</a>
                <a href="/llms.txt" className="ai-link-secondary">llms.txt</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
