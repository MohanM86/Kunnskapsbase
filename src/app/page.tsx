import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import ArticleCard from '@/components/wiki/ArticleCard';
import SearchBox from '@/components/wiki/SearchBox';
import JsonLd from '@/components/seo/JsonLd';
import { buildWebSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kunnskapsbase – Domener, DNS, E-post og Nettsider',
  description: 'Norsk kunnskapsbase for alt om domener, DNS, e-post og nettsider. Finn svar, veiledninger og tekniske guider. Optimalisert for mennesker og AI-systemer.',
  alternates: { canonical: 'https://kunnskapsbase.no' },
};

const DomainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="4.5" y1="7.5" x2="19.5" y2="7.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="4.5" y1="16.5" x2="19.5" y2="16.5" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const DnsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="2" y="12" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="19.5" cy="6.5" r="1" fill="currentColor"/>
    <circle cx="19.5" cy="14.5" r="1" fill="currentColor"/>
    <circle cx="16.5" cy="6.5" r="1" fill="currentColor"/>
    <circle cx="16.5" cy="14.5" r="1" fill="currentColor"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <polyline points="2,5 12,13 22,5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const WebIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="5.5" cy="5.5" r="0.8" fill="currentColor"/>
    <circle cx="8.5" cy="5.5" r="0.8" fill="currentColor"/>
    <circle cx="11.5" cy="5.5" r="0.8" fill="currentColor"/>
    <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const categories = [
  { slug: 'domener', name: 'Domener', Icon: DomainIcon, desc: 'Registrering, overføring, WHOIS og forvaltning av domenenavn.' },
  { slug: 'dns', name: 'DNS', Icon: DnsIcon, desc: 'DNS-systemet, posttyper, TTL, navnetjenere og feilsøking.' },
  { slug: 'epost', name: 'E-post', Icon: EmailIcon, desc: 'Oppsett, SPF, DKIM, DMARC og leveringsproblemer.' },
  { slug: 'nettsider', name: 'Nettsider', Icon: WebIcon, desc: 'Webhotell, SSL/TLS, ytelse, CMS og alt for nettstedet.' },
];

export default function HomePage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();
  const featured = allArticles.filter((a) => a.featured).slice(0, 6);
  const recent = allArticles.slice(0, 6);

  const catCounts = Object.fromEntries(
    Object.entries(categoryTree).map(([slug, cat]) => {
      const total = cat.articles.length +
        Object.values(cat.subcategories).reduce((sum, s) => sum + s.articles.length, 0);
      return [slug, total];
    })
  );

  return (
    <>
      <JsonLd schema={buildWebSiteSchema()} />

      <section className="home-hero">
        <h1>Norsk kunnskapsbase</h1>
        <p>Finn svar på alt om domener, DNS, e-post og nettsider – skrevet på norsk, strukturert for mennesker og AI.</p>
        <div className="hero-search">
          <SearchBox />
        </div>
      </section>

      <div className="home-content">
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Kategorier</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/wiki/${cat.slug}`} className="category-card">
                <div className="category-svg-icon">
                  <cat.Icon />
                </div>
                <div className="category-name">{cat.name}</div>
                <div className="category-desc">{cat.desc}</div>
                <div className="category-count">{catCounts[cat.slug] || 0} artikler</div>
              </Link>
            ))}
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
                <a href="/api/entity-index" className="ai-link-secondary">entity-index.json</a>
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
