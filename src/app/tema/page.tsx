import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import { CATEGORIES, LEGACY_IT_SLUGS, LEGACY_LABELS } from '@/lib/categories';
import JsonLd from '@/components/seo/JsonLd';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
const PAGE_URL = `${BASE_URL}/tema`;

export const metadata: Metadata = {
  title: 'Tema',
  description: 'Oversikt over alle kategorier, underkategorier og temaer.',
  alternates: { canonical: PAGE_URL },
};

export default function TemaPage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();
  const countFor = (slug: string) => { const cat = categoryTree[slug]; if (!cat) return 0; return cat.articles.length + Object.values(cat.subcategories).reduce((s, sub) => s + sub.articles.length, 0); };
  const legacyCount = LEGACY_IT_SLUGS.reduce((s, sl) => s + countFor(sl), 0);
  const breadcrumbs = [{ label: 'Hjem', href: '/' }, { label: 'Tema', href: '/tema' }];
  const schemas = [buildCollectionPageSchema(PAGE_URL, 'Tema – Kunnskapsbase.no', 'Alle kategorier og temaer', allArticles.length), buildBreadcrumbSchema(breadcrumbs)];

  return (
    <><JsonLd schema={schemas} />
      <div className="static-page">
        <div className="static-page-header">
          <nav className="breadcrumbs" aria-label="Brødsmulesti"><ol><li><Link href="/">Hjem</Link><span className="breadcrumb-sep" aria-hidden="true">›</span></li><li><span aria-current="page">Tema</span></li></ol></nav>
          <h1>Tema</h1><p>Naviger kunnskapsbasen etter kategori og underkategori.</p>
        </div>
        <div className="tema-grid">
          {CATEGORIES.map((cat) => {
            const tree = categoryTree[cat.slug];
            const ownCount = countFor(cat.slug);
            const totalCount = cat.slug === 'teknologi' ? ownCount + legacyCount : ownCount;
            return (
              <section key={cat.slug} className="tema-category">
                <Link href={`/${cat.slug}`} className="tema-cat-header">
                  <div><div className="tema-cat-name">{cat.label}</div><div className="tema-cat-count">{totalCount > 0 ? `${totalCount} artikler` : 'Kommer snart'}</div></div>
                </Link>
                <div className="tema-subs">
                  {cat.subcategories.map((sub) => {
                    const subArticles = tree?.subcategories[sub.slug]?.articles || [];
                    const legacySubItems = cat.slug === 'teknologi' && sub.slug === 'internett' ? LEGACY_IT_SLUGS.map((ls) => ({ label: LEGACY_LABELS[ls], href: `/${ls}`, count: countFor(ls) })) : [];
                    return (
                      <div key={sub.slug} className="tema-sub">
                        <div className="tema-sub-label">{sub.label}</div>
                        <div className="tema-topics">
                          {legacySubItems.map(({ label, href, count }) => (<Link key={href} href={href} className="tema-topic-chip">{label}{count > 0 && <span className="tema-topic-count">{count}</span>}</Link>))}
                          {subArticles.map((a) => (<Link key={a.slug} href={`/${a.slugPath.join('/')}`} className="tema-topic-chip">{a.title}</Link>))}
                          {legacySubItems.length === 0 && subArticles.length === 0 && (<span className="tema-topic-chip tema-topic-empty">Kommer snart</span>)}
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
