import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import JsonLd from '@/components/seo/JsonLd';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
const PAGE_URL = `${BASE_URL}/tema`;

export const metadata: Metadata = {
  title: 'Tema',
  description: 'Oversikt over alle kategorier, underkategorier og temaer i kunnskapsbasen. Naviger etter emne.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tema | Kunnskapsbase.no',
    description: 'Oversikt over alle kategorier, underkategorier og temaer.',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/og-default.png`, width: 1200, height: 630 }],
  },
};

const catIcons: Record<string, React.ReactNode> = {
  domener: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3"/>
      <ellipse cx="10" cy="10" rx="2.8" ry="7.5" stroke="currentColor" strokeWidth="1.3"/>
      <line x1="2.5" y1="10" x2="17.5" y2="10" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  ),
  dns: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="2" y="11" width="16" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="16" cy="5.5" r="0.9" fill="currentColor"/>
      <circle cx="16" cy="13.5" r="0.9" fill="currentColor"/>
    </svg>
  ),
  epost: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <polyline points="2,4 10,11.5 18,4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  nettsider: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="16" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <line x1="2" y1="6.5" x2="18" y2="6.5" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="4.5" cy="4.25" r="0.7" fill="currentColor"/>
      <circle cx="6.8" cy="4.25" r="0.7" fill="currentColor"/>
      <line x1="7" y1="18" x2="13" y2="18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="10" y1="15" x2="10" y2="18" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
};

const catOrder = ['domener', 'dns', 'epost', 'nettsider'];

export default function TemaPage() {
  const articles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  // Build topic map: category → subcategory → topics[]
  const topicMap: Record<string, {
    subcategory: string;
    topics: { topic: string; count: number }[];
  }[]> = {};

  for (const catSlug of catOrder) {
    const cat = categoryTree[catSlug];
    if (!cat) continue;
    const subMap: Record<string, { topics: Set<string>; count: number }> = {};
    const allCatArticles = [
      ...cat.articles,
      ...Object.values(cat.subcategories).flatMap((s) => s.articles),
    ];
    for (const a of allCatArticles) {
      const sub = a.subcategory || 'Generelt';
      if (!subMap[sub]) subMap[sub] = { topics: new Set(), count: 0 };
      subMap[sub].count++;
      if (a.topic) subMap[sub].topics.add(a.topic);
    }
    topicMap[catSlug] = Object.entries(subMap).map(([sub, data]) => ({
      subcategory: sub,
      topics: Array.from(data.topics).map((t) => ({
        topic: t,
        count: allCatArticles.filter((a) => a.topic === t).length,
      })),
    }));
  }

  const breadcrumbs = [
    { label: 'Hjem', href: '/' },
    { label: 'Tema', href: '/tema' },
  ];

  const totalArticles = articles.length;
  const schemas = [
    buildCollectionPageSchema(PAGE_URL, 'Tema – Kunnskapsbase.no', 'Alle kategorier, underkategorier og temaer', totalArticles),
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
          <p>Naviger kunnskapsbasen etter kategori, underkategori og tema.</p>
        </div>

        <div className="tema-grid">
          {catOrder.filter((k) => categoryTree[k]).map((catSlug) => {
            const cat = categoryTree[catSlug];
            const subs = topicMap[catSlug] || [];
            const totalCat = [
              ...cat.articles,
              ...Object.values(cat.subcategories).flatMap((s) => s.articles),
            ].length;

            return (
              <section key={catSlug} className="tema-category">
                <Link href={`/wiki/${catSlug}`} className="tema-cat-header">
                  <span className="tema-cat-icon">{catIcons[catSlug]}</span>
                  <div>
                    <div className="tema-cat-name">{cat.label}</div>
                    <div className="tema-cat-count">{totalCat} artikler</div>
                  </div>
                </Link>
                <div className="tema-subs">
                  {subs.map(({ subcategory, topics }) => (
                    <div key={subcategory} className="tema-sub">
                      <div className="tema-sub-label">{subcategory}</div>
                      <div className="tema-topics">
                        {topics.map(({ topic, count }) => (
                          <Link
                            key={topic}
                            href={`/artikler?kategori=${encodeURIComponent(cat.label)}&tema=${encodeURIComponent(topic)}`}
                            className="tema-topic-chip"
                          >
                            {topic}
                            <span className="tema-topic-count">{count}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
