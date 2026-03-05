import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import { CATEGORIES, LEGACY_IT_SLUGS, LEGACY_LABELS, CATEGORY_LABEL } from '@/lib/categories';
import JsonLd from '@/components/seo/JsonLd';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
const PAGE_URL = `${BASE_URL}/tema`;

export const metadata: Metadata = {
  title: 'Tema',
  description: 'Oversikt over alle kategorier, underkategorier og temaer – teknologi, AI, økonomi, helse, vitenskap og mer.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tema | Kunnskapsbase.no',
    description: 'Alle kategorier og temaer i kunnskapsbasen.',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/og-default.png`, width: 1200, height: 630 }],
  },
};

// ── Icons (20×20 monoline) ────────────────────────────────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  teknologi: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polyline points="5,6 2,9 5,12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><polyline points="13,6 16,9 13,12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><line x1="11" y1="3" x2="7" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  ai:        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/><circle cx="9" cy="2" r="1.3" stroke="currentColor" strokeWidth="1.1"/><circle cx="9" cy="16" r="1.3" stroke="currentColor" strokeWidth="1.1"/><circle cx="2" cy="9" r="1.3" stroke="currentColor" strokeWidth="1.1"/><circle cx="16" cy="9" r="1.3" stroke="currentColor" strokeWidth="1.1"/><line x1="9" y1="3.3" x2="9" y2="6" stroke="currentColor" strokeWidth="1.1"/><line x1="9" y1="12" x2="9" y2="14.7" stroke="currentColor" strokeWidth="1.1"/><line x1="3.3" y1="9" x2="6" y2="9" stroke="currentColor" strokeWidth="1.1"/><line x1="12" y1="9" x2="14.7" y2="9" stroke="currentColor" strokeWidth="1.1"/></svg>,
  oekonomi:  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polyline points="2,14 7,8 11,11 16,4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><polyline points="13,4 16,4 16,7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><line x1="2" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  helse:     <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 15C9 15 3 11 3 6.5C3 4.5 4.7 3 7 3C8 3 8.9 3.5 9 3.8C9.1 3.5 10 3 11 3C13.3 3 15 4.5 15 6.5C15 11 9 15 9 15Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  vitenskap: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 3V9L3 15H15L11 9V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><line x1="6" y1="3" x2="12" y2="3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="11" r="1" fill="currentColor"/></svg>,
  historie:  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4"/><polyline points="9,5 9,9 12,11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  samfunn:   <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="13" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M2 16C2 13.2 4.2 11 7 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M9 16C9 13.2 10.8 11 13 11C15.2 11 17 13.2 17 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  utdanning: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polygon points="9,2 17,6 9,10 1,6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/><path d="M4.5,8.5 V13 C4.5,13 7,15 9,15 C11,15 13.5,13 13.5,13 V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  reise:     <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M9 2C5.7 2 3 4.7 3 8C3 12 9 16 9 16C9 16 15 12 15 8C15 4.7 12.3 2 9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  mat:       <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 2V7C7 8.7 8.3 10 10 10H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="10" y1="10" x2="10" y2="16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="7.5" y1="16" x2="12.5" y2="16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="4" y1="2" x2="4" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M3 2C3 2 3 5.5 4 6C5 6.5 5 2 5 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Legacy IT
  domener:   <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3"/><ellipse cx="9" cy="9" rx="2.5" ry="7" stroke="currentColor" strokeWidth="1.3"/><line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.1"/></svg>,
  dns:       <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="2" y="10" width="14" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.3"/><circle cx="13.5" cy="5.25" r="0.8" fill="currentColor"/><circle cx="13.5" cy="12.25" r="0.8" fill="currentColor"/></svg>,
  epost:     <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><polyline points="2,4 9,10 16,4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
  nettsider: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><line x1="2" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.1"/><circle cx="4" cy="4" r="0.7" fill="currentColor"/><circle cx="6.5" cy="4" r="0.7" fill="currentColor"/></svg>,
};

export default function TemaPage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  // Count articles per top-level folder
  const countFor = (slug: string) => {
    const cat = categoryTree[slug];
    if (!cat) return 0;
    return cat.articles.length + Object.values(cat.subcategories).reduce((s, sub) => s + sub.articles.length, 0);
  };

  // Legacy IT articles appear under teknologi/internett visually
  const legacyCount = LEGACY_IT_SLUGS.reduce((s, sl) => s + countFor(sl), 0);

  const breadcrumbs = [
    { label: 'Hjem', href: '/' },
    { label: 'Tema', href: '/tema' },
  ];
  const schemas = [
    buildCollectionPageSchema(PAGE_URL, 'Tema – Kunnskapsbase.no', 'Alle kategorier og temaer', allArticles.length),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="static-page">
        <div className="static-page-header">
          <nav className="breadcrumbs" aria-label="Brødsmulesti">
            <ol>
              <li><Link href="/">Hjem</Link><span className="breadcrumb-sep" aria-hidden="true">›</span></li>
              <li><span aria-current="page">Tema</span></li>
            </ol>
          </nav>
          <h1>Tema</h1>
          <p>Naviger kunnskapsbasen etter kategori og underkategori.</p>
        </div>

        {/* New main categories */}
        <div className="tema-grid">
          {CATEGORIES.map((cat) => {
            const tree = categoryTree[cat.slug];
            const ownCount = countFor(cat.slug);
            const totalCount = cat.slug === 'teknologi' ? ownCount + legacyCount : ownCount;
            const subs = cat.subcategories;

            return (
              <section key={cat.slug} className="tema-category">
                <Link href={`/${cat.slug}`} className="tema-cat-header">
                  <span className="tema-cat-icon">{ICONS[cat.slug]}</span>
                  <div>
                    <div className="tema-cat-name">{cat.label}</div>
                    <div className="tema-cat-count">{totalCount > 0 ? `${totalCount} artikler` : 'Kommer snart'}</div>
                  </div>
                </Link>
                <div className="tema-subs">
                  {subs.map((sub) => {
                    const subArticles = tree?.subcategories[sub.slug]?.articles || [];
                    // For teknologi/internett, show legacy IT subcategories
                    const legacySubItems = cat.slug === 'teknologi' && sub.slug === 'internett'
                      ? LEGACY_IT_SLUGS.map((ls) => ({
                          label: LEGACY_LABELS[ls],
                          href: `/${ls}`,
                          count: countFor(ls),
                        }))
                      : [];

                    return (
                      <div key={sub.slug} className="tema-sub">
                        <div className="tema-sub-label">{sub.label}</div>
                        <div className="tema-topics">
                          {legacySubItems.map(({ label, href, count }) => (
                            <Link key={href} href={href} className="tema-topic-chip">
                              {label}
                              {count > 0 && <span className="tema-topic-count">{count}</span>}
                            </Link>
                          ))}
                          {subArticles.map((a) => (
                            <Link
                              key={a.slug}
                              href={`/${a.slugPath.join('/')}`}
                              className="tema-topic-chip"
                            >
                              {a.title}
                            </Link>
                          ))}
                          {legacySubItems.length === 0 && subArticles.length === 0 && (
                            <span className="tema-topic-chip tema-topic-empty">Kommer snart</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
