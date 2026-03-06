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

  // Build a complete structure: for each category, gather all subcategories and topics from actual content
  const categoryData: {
    slug: string;
    label: string;
    description: string;
    totalCount: number;
    subcategories: { label: string; articles: { title: string; href: string }[] }[];
  }[] = [];

  // First handle CATEGORIES from config
  const handledSlugs = new Set<string>();

  for (const cat of CATEGORIES) {
    handledSlugs.add(cat.slug);
    const tree = categoryTree[cat.slug];

    // Count articles including legacy slugs for teknologi
    let totalCount = 0;
    if (tree) {
      totalCount += tree.articles.length;
      for (const sub of Object.values(tree.subcategories)) {
        totalCount += sub.articles.length;
      }
    }
    if (cat.slug === 'teknologi') {
      for (const ls of LEGACY_IT_SLUGS) {
        const legacyTree = categoryTree[ls];
        if (legacyTree) {
          totalCount += legacyTree.articles.length;
          for (const sub of Object.values(legacyTree.subcategories)) {
            totalCount += sub.articles.length;
          }
        }
      }
    }

    // Build subcategories from actual content
    const subs: { label: string; articles: { title: string; href: string }[] }[] = [];

    // For teknologi, add legacy categories as a subcategory group
    if (cat.slug === 'teknologi') {
      const legacyArticles: { title: string; href: string }[] = [];
      for (const ls of LEGACY_IT_SLUGS) {
        const legacyTree = categoryTree[ls];
        if (legacyTree) {
          const legacyCount = legacyTree.articles.length + Object.values(legacyTree.subcategories).reduce((s, sub) => s + sub.articles.length, 0);
          if (legacyCount > 0) {
            legacyArticles.push({ title: `${LEGACY_LABELS[ls]} (${legacyCount})`, href: `/${ls}` });
          }
        }
      }
      if (legacyArticles.length > 0) {
        subs.push({ label: 'Internett', articles: legacyArticles });
      }
    }

    // Add subcategories from actual content in categoryTree
    if (tree) {
      for (const [subSlug, sub] of Object.entries(tree.subcategories)) {
        if (sub.articles.length > 0) {
          subs.push({
            label: sub.label,
            articles: sub.articles.map((a) => ({ title: a.title, href: `/${a.slugPath.join('/')}` })),
          });
        }
      }
      // Articles without subcategory
      if (tree.articles.length > 0) {
        subs.push({
          label: 'Generelt',
          articles: tree.articles.map((a) => ({ title: a.title, href: `/${a.slugPath.join('/')}` })),
        });
      }
    }

    categoryData.push({
      slug: cat.slug,
      label: cat.label,
      description: cat.description,
      totalCount,
      subcategories: subs,
    });
  }

  // Then handle any dynamic categories from content that aren't in CATEGORIES config
  for (const [catSlug, cat] of Object.entries(categoryTree)) {
    if (handledSlugs.has(catSlug)) continue;
    if (LEGACY_IT_SLUGS.includes(catSlug)) continue; // handled under teknologi
    handledSlugs.add(catSlug);

    let totalCount = cat.articles.length;
    for (const sub of Object.values(cat.subcategories)) {
      totalCount += sub.articles.length;
    }

    const subs: { label: string; articles: { title: string; href: string }[] }[] = [];
    for (const [subSlug, sub] of Object.entries(cat.subcategories)) {
      if (sub.articles.length > 0) {
        subs.push({
          label: sub.label,
          articles: sub.articles.map((a) => ({ title: a.title, href: `/${a.slugPath.join('/')}` })),
        });
      }
    }
    if (cat.articles.length > 0) {
      subs.push({
        label: 'Generelt',
        articles: cat.articles.map((a) => ({ title: a.title, href: `/${a.slugPath.join('/')}` })),
      });
    }

    categoryData.push({
      slug: catSlug,
      label: cat.label,
      description: `Artikler om ${cat.label.toLowerCase()}.`,
      totalCount,
      subcategories: subs,
    });
  }

  const breadcrumbs = [{ label: 'Hjem', href: '/' }, { label: 'Tema', href: '/tema' }];
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
          <p>Naviger kunnskapsbasen etter kategori og underkategori. {allArticles.length} artikler totalt.</p>
        </div>
        <div className="tema-grid">
          {categoryData.map((cat) => (
            <section key={cat.slug} className="tema-category">
              <Link href={`/${cat.slug}`} className="tema-cat-header">
                <div>
                  <div className="tema-cat-name">{cat.label}</div>
                  <div className="tema-cat-count">
                    {cat.totalCount > 0 ? `${cat.totalCount} artikler` : 'Kommer snart'}
                  </div>
                </div>
              </Link>
              <div className="tema-subs">
                {cat.subcategories.length > 0 ? (
                  cat.subcategories.map((sub) => (
                    <div key={sub.label} className="tema-sub">
                      <div className="tema-sub-label">{sub.label}</div>
                      <div className="tema-topics">
                        {sub.articles.map((a) => (
                          <Link key={a.href} href={a.href} className="tema-topic-chip">
                            {a.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <span className="tema-topic-chip tema-topic-empty">Kommer snart</span>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
