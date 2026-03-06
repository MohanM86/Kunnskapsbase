import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import { CATEGORIES, LEGACY_IT_SLUGS } from '@/lib/categories';
import SearchBox from '@/components/wiki/SearchBox';
import JsonLd from '@/components/seo/JsonLd';
import { buildWebSiteSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
export const metadata: Metadata = {
  title: 'Kunnskapsbase – Norsk kunnskapsbase for alt',
  description: 'Norsk kunnskapsbase om teknologi, AI, økonomi, helse, vitenskap og mer.',
  alternates: { canonical: BASE_URL },
};

/* ── tiny SVG icons per category slug ── */
const CAT_ICONS: Record<string, React.ReactNode> = {
  teknologi: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><line x1="7" y1="19" x2="15" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="11" y1="16" x2="11" y2="19" stroke="currentColor" strokeWidth="1.5"/></svg>,
  ai: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="11" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="11" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="3" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="19" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.2"/><line x1="11" y1="4.5" x2="11" y2="7" stroke="currentColor" strokeWidth="1.2"/><line x1="11" y1="15" x2="11" y2="17.5" stroke="currentColor" strokeWidth="1.2"/><line x1="4.5" y1="11" x2="7" y2="11" stroke="currentColor" strokeWidth="1.2"/><line x1="15" y1="11" x2="17.5" y2="11" stroke="currentColor" strokeWidth="1.2"/></svg>,
  oekonomi: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 17V10M8 17V8M12 17V5M16 17V9M20 17V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  helse: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 4C8 4 5 6.5 5 9.5C5 15 11 19 11 19C11 19 17 15 17 9.5C17 6.5 14 4 11 4Z" stroke="currentColor" strokeWidth="1.5"/><line x1="11" y1="8" x2="11" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="8.5" y1="10.5" x2="13.5" y2="10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  vitenskap: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 3V12L4 18H18L14 12V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="7" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="15" r="1" fill="currentColor"/><circle cx="13" cy="14" r="0.7" fill="currentColor"/></svg>,
  historie: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><polyline points="11,6 11,11 15,13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  samfunn: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M5 19C5 15.5 7.5 13 11 13C14.5 13 17 15.5 17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  utdanning: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 9L11 5L19 9L11 13L3 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 10.5V15.5C6 15.5 8 18 11 18C14 18 16 15.5 16 15.5V10.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  reise: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="11" cy="11" rx="3.5" ry="8" stroke="currentColor" strokeWidth="1.2"/><line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1"/></svg>,
  mat: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11C5 7 8 4 11 4C14 4 17 7 17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 14H16L15 18H7L6 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  bil: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 14L6 8H16L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><rect x="3" y="14" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="18" r="1.5" fill="currentColor"/><circle cx="15" cy="18" r="1.5" fill="currentColor"/></svg>,
  dyr: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth="1.3"/><path d="M6 12C6 9.5 8 8 11 8C14 8 16 9.5 16 12C16 16 13 19 11 19C9 19 6 16 6 12Z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  hobby: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3L13 9H19L14 13L16 19L11 15L6 19L8 13L3 9H9L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  jus: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><line x1="11" y1="3" x2="11" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 7L11 5L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 7V10C5 11 6 12 8 12" stroke="currentColor" strokeWidth="1.3"/><path d="M17 7V10C17 11 16 12 14 12" stroke="currentColor" strokeWidth="1.3"/><line x1="7" y1="19" x2="15" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  klima: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M11 3V5M11 19V17M3 12H5M19 12H17M5.5 5.5L7 7M16.5 16.5L15 15M16.5 5.5L15 7M5.5 16.5L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
};

function CategoryIcon({ slug }: { slug: string }) {
  return (
    <span className="home-cat-icon">
      {CAT_ICONS[slug] || <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/><line x1="7" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><line x1="7" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><line x1="7" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>}
    </span>
  );
}

export default function HomePage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  // ── Build fully dynamic category list ──
  const handledSlugs = new Set<string>();
  const allCats: { slug: string; label: string; description: string; count: number }[] = [];

  // Config categories first
  for (const cat of CATEGORIES) {
    handledSlugs.add(cat.slug);
    let count = 0;
    const tree = categoryTree[cat.slug];
    if (tree) {
      count += tree.articles.length;
      for (const sub of Object.values(tree.subcategories)) count += sub.articles.length;
    }
    if (cat.slug === 'teknologi') {
      for (const ls of LEGACY_IT_SLUGS) {
        const lt = categoryTree[ls];
        if (lt) {
          count += lt.articles.length;
          for (const sub of Object.values(lt.subcategories)) count += sub.articles.length;
        }
      }
    }
    allCats.push({ slug: cat.slug, label: cat.label, description: cat.description, count });
  }

  // Dynamic categories from content
  for (const [slug, tree] of Object.entries(categoryTree)) {
    if (handledSlugs.has(slug) || LEGACY_IT_SLUGS.includes(slug)) continue;
    let count = tree.articles.length;
    for (const sub of Object.values(tree.subcategories)) count += sub.articles.length;
    allCats.push({
      slug,
      label: tree.label,
      description: `Artikler om ${tree.label.toLowerCase()}.`,
      count,
    });
  }

  // ── Featured & recent ──
  const featured = allArticles.filter((a) => a.featured).slice(0, 8);
  const recent = allArticles.slice(0, 8);

  // ── Stats ──
  const totalArticles = allArticles.length;
  const totalCategories = allCats.filter((c) => c.count > 0).length;
  const totalTopics = new Set(allArticles.map((a) => a.topic).filter(Boolean)).size;

  return (
    <>
      <JsonLd schema={buildWebSiteSchema()} />

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-badge">Åpen kunnskapsbase · CC BY 4.0</div>
          <h1>Norsk kunnskapsbase<br /><span className="home-hero-accent">for alt.</span></h1>
          <p>Teknologi, AI, økonomi, helse, vitenskap, historie og mer. Skrevet på norsk, strukturert for mennesker og AI.</p>
          <div className="hero-search"><SearchBox /></div>
          <div className="home-hero-stats">
            <div className="home-hero-stat"><span className="home-hero-stat-num">{totalArticles}</span> artikler</div>
            <div className="home-hero-stat-sep" aria-hidden="true" />
            <div className="home-hero-stat"><span className="home-hero-stat-num">{totalCategories}</span> kategorier</div>
            <div className="home-hero-stat-sep" aria-hidden="true" />
            <div className="home-hero-stat"><span className="home-hero-stat-num">{totalTopics}</span> temaer</div>
          </div>
        </div>
      </section>

      <div className="home-content">

        {/* ── CATEGORIES ── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Kategorier</h2>
            <Link href="/tema" className="home-section-link">Se alle →</Link>
          </div>
          <div className="categories-grid categories-grid-wide">
            {allCats.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`} className="category-card">
                <CategoryIcon slug={cat.slug} />
                <div className="category-name">{cat.label}</div>
                <div className="category-desc">{cat.description}</div>
                {cat.count > 0 && <div className="category-count">{cat.count} artikler</div>}
              </Link>
            ))}
          </div>
        </section>

        {/* ── FEATURED ── */}
        {featured.length > 0 && (
          <section className="home-section">
            <div className="home-section-header">
              <h2 className="home-section-title">Populære artikler</h2>
            </div>
            <div className="articles-grid">
              {featured.map((a) => (
                <Link key={a.slug} href={`/${a.slugPath.join('/')}`} className="article-card">
                  <div className="article-card-cat">{a.category}</div>
                  <h3 className="article-card-title">{a.title}</h3>
                  <p className="article-card-desc">{a.description}</p>
                  <div className="article-card-meta">
                    {a.updatedAt && (() => { const d = new Date(a.updatedAt); return isNaN(d.getTime()) ? null : <time dateTime={a.updatedAt}>{d.toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}</time>; })()}
                    <div className="article-card-tags">{(a.tags || []).slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── RECENT ── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Nyeste artikler</h2>
            <Link href="/artikler" className="home-section-link">Se alle →</Link>
          </div>
          <div className="articles-grid">
            {recent.map((a) => (
              <Link key={a.slug} href={`/${a.slugPath.join('/')}`} className="article-card">
                <div className="article-card-cat">{a.category}</div>
                <h3 className="article-card-title">{a.title}</h3>
                <p className="article-card-desc">{a.description}</p>
                <div className="article-card-meta">
                  {a.updatedAt && (() => { const d = new Date(a.updatedAt); return isNaN(d.getTime()) ? null : <time dateTime={a.updatedAt}>{d.toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}</time>; })()}
                  <div className="article-card-tags">{(a.tags || []).slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── AI SECTION ── */}
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
