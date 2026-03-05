import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import ArticleCard from '@/components/wiki/ArticleCard';
import SearchBox from '@/components/wiki/SearchBox';

export const metadata: Metadata = {
  title: 'Kunnskapsbase – Domener, DNS, E-post og Nettsider',
  description: 'Norsk kunnskapsbase for alt om domener, DNS, e-post og nettsider. Finn svar, veiledninger og tekniske guider.',
};

const categories = [
  {
    slug: 'domener',
    name: 'Domener',
    icon: '🌐',
    desc: 'Alt om domeneregistrering, overføring, WHOIS og forvaltning av domenenavn.',
  },
  {
    slug: 'dns',
    name: 'DNS',
    icon: '🔧',
    desc: 'Forstå DNS-systemet, ulike posttyper, TTL, navnetjenere og feilsøking.',
  },
  {
    slug: 'epost',
    name: 'E-post',
    icon: '✉️',
    desc: 'Sett opp e-post, konfigurer SPF, DKIM og DMARC, og løs leveringsproblemer.',
  },
  {
    slug: 'nettsider',
    name: 'Nettsider',
    icon: '💻',
    desc: 'Webhotell, SSL/TLS, ytelse, CMS og alt du trenger for nettstedet ditt.',
  },
];

export default function HomePage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();
  const featured = allArticles.filter((a) => a.featured).slice(0, 6);
  const recent = allArticles.slice(0, 6);

  const catCounts = Object.fromEntries(
    Object.entries(categoryTree).map(([slug, cat]) => {
      const total =
        cat.articles.length +
        Object.values(cat.subcategories).reduce((sum, s) => sum + s.articles.length, 0);
      return [slug, total];
    })
  );

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <h1>Norsk kunnskapsbase</h1>
        <p>Finn svar på alt om domener, DNS, e-post og nettsider – skrevet på norsk.</p>
        <div className="hero-search">
          <SearchBox />
        </div>
      </section>

      <div className="home-content">
        {/* Categories */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Kategorier</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/wiki/${cat.slug}`} className="category-card">
                <div className="category-icon">{cat.icon}</div>
                <div className="category-name">{cat.name}</div>
                <div className="category-desc">{cat.desc}</div>
                <div className="category-count">{catCounts[cat.slug] || 0} artikler</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured articles */}
        {featured.length > 0 && (
          <section className="home-section">
            <div className="home-section-header">
              <h2 className="home-section-title">Populære artikler</h2>
            </div>
            <div className="articles-grid">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Recent articles */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Nyeste artikler</h2>
          </div>
          <div className="articles-grid">
            {recent.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
