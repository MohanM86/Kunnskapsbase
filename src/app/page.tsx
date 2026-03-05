import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getRecentArticles, getFeaturedArticles } from '@/lib/articles';
import { TAXONOMY } from '@/lib/taxonomy';
import SearchBox from '@/components/ui/SearchBox';
import ArticleCard from '@/components/wiki/ArticleCard';
import { CategoryIcon } from '@/components/icons/CategoryIcons';
import JsonLd from '@/components/seo/JsonLd';
import { webSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kunnskapsbase.no – Norges kunnskapsplattform',
  description: 'Forklarer verden på norsk. Dyptgående artikler om teknologi, AI, økonomi, helse, vitenskap og mer – optimalisert for Google og AI-søk.',
  alternates: { canonical: 'https://kunnskapsbase.no' },
};

export default function HomePage() {
  const all = getAllArticlesMeta();
  const featured = getFeaturedArticles(3);
  const recent = getRecentArticles(6);
  const totalArticles = all.length;
  const totalCategories = TAXONOMY.length;

  const catCounts: Record<string, number> = {};
  for (const a of all) catCounts[a.categorySlug] = (catCounts[a.categorySlug] || 0) + 1;

  return (
    <>
      <JsonLd schema={webSiteSchema} />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="fade-up">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Norges største kunnskapsbase
            </div>
          </div>
          <h1 className="display-xl fade-up stagger-1">
            Forstå verden<br />
            <span className="text-gradient">på norsk</span>
          </h1>
          <p className="hero-subtitle fade-up stagger-2">
            Dyptgående artikler om teknologi, AI, økonomi, helse og vitenskap.
            Forklart klart og presist – for nysgjerrige mennesker.
          </p>
          <div className="hero-search-wrap fade-up stagger-3">
            <SearchBox />
          </div>

          {/* Stats */}
          <div className="stats-bar fade-up stagger-4" style={{ justifyContent: 'center', gap: '4rem', marginTop: '2.5rem' }}>
            <div className="stat-item">
              <span className="stat-value">{totalArticles}+</span>
              <span className="stat-label">Artikler</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{totalCategories}</span>
              <span className="stat-label">Kategorier</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Norsk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Utforsk etter tema</h2>
            <Link href="/tema" className="section-link">Se alle →</Link>
          </div>
          <div className="categories-grid">
            {TAXONOMY.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`} className={`category-card cat-color-${cat.color}`}>
                <div className="cat-icon-wrap">
                  <CategoryIcon name={cat.icon} size={22} />
                </div>
                <div className="cat-name">{cat.label}</div>
                <div className="cat-count">{catCounts[cat.slug] || 0} artikler</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="page-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Fremhevede artikler</h2>
            </div>
            {featured.slice(0, 1).map(a => (
              <Link key={a.slugPath.join('/')} href={`/${a.slugPath.join('/')}`} className="featured-article">
                <div>
                  <div className="featured-label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                    Fremhevet artikkel · {a.category}
                  </div>
                  <div className="featured-title">{a.title}</div>
                  <div className="featured-desc">{a.description}</div>
                </div>
                <div className="featured-arrow">→</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recent */}
      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nyeste artikler</h2>
            <Link href="/artikler" className="section-link">Se alle →</Link>
          </div>
          <div className="articles-grid">
            {recent.map((a, i) => (
              <ArticleCard key={a.slugPath.join('/')} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
