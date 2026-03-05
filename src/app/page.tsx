import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';
import ArticleCard from '@/components/wiki/ArticleCard';
import SearchBox from '@/components/wiki/SearchBox';
import JsonLd from '@/components/seo/JsonLd';
import { buildWebSiteSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';

export const metadata: Metadata = {
  title: 'Kunnskapsbase – Norsk kunnskapsbase for alt',
  description: 'Norsk kunnskapsbase om teknologi, AI, økonomi, helse, vitenskap og mer. Strukturert for mennesker og AI-søk.',
  alternates: { canonical: BASE_URL },
};

// ── Category Icons (monoline SVG, 28×28) ──────────────────────────────────────

const TechIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <polyline points="8,10 4,14 8,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="20,10 24,14 20,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="17" y1="7" x2="11" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AIIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="14" cy="24" r="2" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="4" cy="14" r="2" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="24" cy="14" r="2" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="14" y1="6" x2="14" y2="10" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="14" y1="18" x2="14" y2="22" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="6" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="18" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const EkonomiIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <polyline points="4,20 10,13 15,16 24,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="20,7 24,7 24,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="4" y1="23" x2="24" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const HelseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 22C14 22 5 17 5 10.5C5 7.5 7.5 5 10.5 5C12.2 5 13.7 5.9 14 6.5C14.3 5.9 15.8 5 17.5 5C20.5 5 23 7.5 23 10.5C23 17 14 22 14 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const VitenskapIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M10 5V14L5 22H23L18 14V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="5" x2="19" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="17" r="1.5" fill="currentColor"/>
    <circle cx="11" cy="19" r="1" fill="currentColor"/>
  </svg>
);

const HistorieIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <polyline points="14,8 14,14 18,17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14H2M6.5 7L4.5 5M21.5 7L23.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const SamfunnIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="20" cy="9" r="3" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M4 22C4 18.7 6.7 16 10 16C11.3 16 12.5 16.4 13.5 17.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M14.5 22C14.5 18.7 17.2 16 20.5 16C23.8 16 26.5 18.7 26.5 22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const UtdanningIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <polygon points="14,4 26,10 14,16 2,10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    <path d="M7 13V19C7 19 10 22 14 22C18 22 21 19 21 19V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="26" y1="10" x2="26" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ReiseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 3C9 3 5 7 5 12C5 18 14 25 14 25C14 25 23 18 23 12C23 7 19 3 14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const MatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M9 4V10C9 12.2 10.8 14 13 14H15C17.2 14 19 12.2 19 10V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="14" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="6" y1="4" x2="6" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 4C4 4 4 8 6 9C8 10 8 4 8 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CAT_ICONS: Record<string, React.ComponentType> = {
  teknologi: TechIcon,
  ai: AIIcon,
  oekonomi: EkonomiIcon,
  helse: HelseIcon,
  vitenskap: VitenskapIcon,
  historie: HistorieIcon,
  samfunn: SamfunnIcon,
  utdanning: UtdanningIcon,
  reise: ReiseIcon,
  mat: MatIcon,
};

export default function HomePage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  const featured = allArticles.filter((a) => a.featured).slice(0, 6);
  const recent = allArticles.slice(0, 6);

  // Count articles per category (new + legacy)
  const catCounts = Object.fromEntries(
    Object.entries(categoryTree).map(([slug, cat]) => {
      const total = cat.articles.length +
        Object.values(cat.subcategories).reduce((sum, s) => sum + s.articles.length, 0);
      return [slug, total];
    })
  );

  // Also count legacy IT articles under "teknologi" slot for display
  const legacySlugs = ['domener', 'dns', 'epost', 'nettsider'];
  const legacyCount = legacySlugs.reduce((sum, s) => sum + (catCounts[s] || 0), 0);

  const getCount = (slug: string) => {
    if (slug === 'teknologi') return (catCounts['teknologi'] || 0) + legacyCount;
    return catCounts[slug] || 0;
  };

  return (
    <>
      <JsonLd schema={buildWebSiteSchema()} />

      <section className="home-hero">
        <h1>Norsk kunnskapsbase</h1>
        <p>Finn svar på alt – teknologi, AI, økonomi, helse, vitenskap og mer. Skrevet på norsk, strukturert for mennesker og AI.</p>
        <div className="hero-search">
          <SearchBox />
        </div>
      </section>

      <div className="home-content">
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Kategorier</h2>
            <Link href="/tema" className="home-section-link">Se alle →</Link>
          </div>
          <div className="categories-grid categories-grid-wide">
            {CATEGORIES.map((cat) => {
              const Icon = CAT_ICONS[cat.slug];
              const count = getCount(cat.slug);
              return (
                <Link key={cat.slug} href={`/${cat.slug}`} className="category-card">
                  <div className="category-svg-icon">
                    {Icon && <Icon />}
                  </div>
                  <div className="category-name">{cat.label}</div>
                  <div className="category-desc">{cat.description}</div>
                  {count > 0 && <div className="category-count">{count} artikler</div>}
                </Link>
              );
            })}
          </div>
        </section>

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

        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Nyeste artikler</h2>
            <Link href="/artikler" className="home-section-link">Se alle →</Link>
          </div>
          <div className="articles-grid">
            {recent.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
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
            <div className="home-ai-graph" aria-hidden="true">
              <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
                <circle cx="90" cy="70" r="18" stroke="#1d6a3a" strokeWidth="1.5"/>
                <circle cx="30" cy="30" r="10" stroke="#1d6a3a" strokeWidth="1.2" opacity=".6"/>
                <circle cx="150" cy="30" r="10" stroke="#1d6a3a" strokeWidth="1.2" opacity=".6"/>
                <circle cx="20" cy="100" r="10" stroke="#1d6a3a" strokeWidth="1.2" opacity=".6"/>
                <circle cx="160" cy="100" r="10" stroke="#1d6a3a" strokeWidth="1.2" opacity=".6"/>
                <circle cx="90" cy="125" r="10" stroke="#1d6a3a" strokeWidth="1.2" opacity=".6"/>
                <line x1="72" y1="59" x2="39" y2="38" stroke="#1d6a3a" strokeWidth="1" opacity=".4"/>
                <line x1="108" y1="59" x2="141" y2="38" stroke="#1d6a3a" strokeWidth="1" opacity=".4"/>
                <line x1="72" y1="79" x2="29" y2="93" stroke="#1d6a3a" strokeWidth="1" opacity=".4"/>
                <line x1="108" y1="79" x2="151" y2="93" stroke="#1d6a3a" strokeWidth="1" opacity=".4"/>
                <line x1="90" y1="88" x2="90" y2="115" stroke="#1d6a3a" strokeWidth="1" opacity=".4"/>
                <text x="90" y="74" textAnchor="middle" fontSize="9" fill="#1d6a3a" fontWeight="600">entity</text>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
