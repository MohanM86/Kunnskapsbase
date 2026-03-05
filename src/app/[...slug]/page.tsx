import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getAllArticlesMeta,
  getCategoryTree,
  getRelatedArticles,
  resolveArticlesBySlug,
} from '@/lib/articles';
import { CATEGORIES, LEGACY_IT_SLUGS, CATEGORY_LABEL } from '@/lib/categories';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import { buildArticleSchema, buildBreadcrumbSchema, buildCollectionPageSchema } from '@/lib/schema';
import Sidebar from '@/components/wiki/Sidebar';
import Breadcrumbs from '@/components/wiki/Breadcrumbs';
import RelatedArticles from '@/components/wiki/RelatedArticles';
import ArticleCard from '@/components/wiki/ArticleCard';
import DefinitionBox from '@/components/wiki/DefinitionBox';
import KnowledgeGraph from '@/components/wiki/KnowledgeGraph';
import JsonLd from '@/components/seo/JsonLd';

const BASE_URL = 'https://kunnskapsbase.no';
const OG_IMAGE = `${BASE_URL}/images/og-default.png`;

interface PageProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  const paths = getAllArticleSlugs().map((s) => ({ slug: s }));
  const allCatSlugs = Array.from(new Set([
    ...Object.keys(getCategoryTree()),
    ...CATEGORIES.map((c) => c.slug),
    ...LEGACY_IT_SLUGS,
  ]));
  for (const catSlug of allCatSlugs) {
    paths.push({ slug: [catSlug] });
  }
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  if (article) {
    const { frontmatter } = article;
    const url = `${BASE_URL}/${slug.join('/')}`;
    const keywords = [
      ...(frontmatter.tags || []),
      ...(frontmatter.aliases || []),
      frontmatter.topic || '',
    ].filter(Boolean).join(', ');

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      keywords,
      alternates: { canonical: url },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        url,
        type: 'article',
        publishedTime: frontmatter.updatedAt,
        modifiedTime: frontmatter.updatedAt,
        tags: frontmatter.tags,
        siteName: 'Kunnskapsbase.no',
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: frontmatter.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.description,
        images: [OG_IMAGE],
      },
    };
  }

  const categoryTree = getCategoryTree();
  const catSlug = slug[0];
  const cat = categoryTree[catSlug] || CATEGORIES.find((c) => c.slug === catSlug);
  if (cat) {
    const label = 'label' in cat ? cat.label : cat.label;
    const url = `${BASE_URL}/${catSlug}`;
    return {
      title: label,
      description: `Artikler og guider om ${label.toLowerCase()} – Kunnskapsbase.no`,
      alternates: { canonical: url },
      openGraph: {
        title: `${label} | Kunnskapsbase.no`,
        description: `Artikler og guider om ${label.toLowerCase()}`,
        url,
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
      },
    };
  }

  return { title: 'Ikke funnet' };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = params;
  const categoryTree = getCategoryTree();
  const article = await getArticleBySlug(slug);

  if (article) {
    const allArticles = getAllArticlesMeta();
    const currentMeta = allArticles.find((a) => a.slugPath.join('/') === slug.join('/'));
    const related = currentMeta ? getRelatedArticles(currentMeta, allArticles) : [];
    const explicitRelated = resolveArticlesBySlug(article.frontmatter.related || [], allArticles);
    const explicitSeeAlso = resolveArticlesBySlug(article.frontmatter.seeAlso || [], allArticles);
    const sameTopic = currentMeta
      ? allArticles.filter((a) => a.slug !== currentMeta.slug && a.topic && a.topic === currentMeta.topic).slice(0, 4)
      : [];

    const breadcrumbs = buildBreadcrumbs(slug, article.frontmatter.title);
    const schemas = [
      buildArticleSchema(article.frontmatter, slug.join('/')),
      buildBreadcrumbSchema(breadcrumbs),
    ];

    const date = new Date(article.frontmatter.updatedAt).toLocaleDateString('nb-NO', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

    return (
      <>
        <JsonLd schema={schemas} />
        <div className="wiki-layout">
          <Sidebar categoryTree={categoryTree} activeCategory={slug[0]} />
          <div className="wiki-main">
            <Breadcrumbs items={breadcrumbs} />
            <article>
              <header className="article-header">
                <div className="article-meta">
                  <span className="article-cat">{article.frontmatter.category}</span>
                  {article.frontmatter.subcategory && (
                    <span className="article-cat article-cat-sub">{article.frontmatter.subcategory}</span>
                  )}
                  {article.frontmatter.topic && (
                    <span className="article-cat article-cat-topic">{article.frontmatter.topic}</span>
                  )}
                  <time className="article-date" dateTime={article.frontmatter.updatedAt}>{date}</time>
                  <span className="article-reading-time">· {article.readingTime}</span>
                </div>
                <h1 className="article-title">{article.frontmatter.title}</h1>
                <DefinitionBox
                  title={article.frontmatter.title}
                  description={article.frontmatter.description}
                  entityType={article.frontmatter.entityType}
                  aliases={article.frontmatter.aliases}
                />
                {article.frontmatter.tags?.length > 0 && (
                  <div className="article-tags">
                    {article.frontmatter.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </header>
              <hr className="article-divider" />
              <div className="article-content" dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
            </article>
            <KnowledgeGraph related={explicitRelated} seeAlso={explicitSeeAlso} sameTopic={sameTopic} />
            <RelatedArticles articles={related} />
          </div>
        </div>
      </>
    );
  }

  // ── Category page ────────────────────────────────────────────────────────────
  const catSlug = slug[0];
  const cat = categoryTree[catSlug] || (() => {
    const regCat = CATEGORIES.find((c) => c.slug === catSlug);
    if (!regCat) return null;
    return { label: regCat.label, slug: catSlug, subcategories: {}, articles: [] as any[] };
  })();
  if (!cat) return notFound();

  const breadcrumbs = [
    { label: 'Hjem', href: '/' },
    { label: cat.label, href: `/${catSlug}` },
  ];

  const allCatArticles = [
    ...cat.articles,
    ...Object.values(cat.subcategories).flatMap((s) => s.articles),
  ];

  const catSvgIcons: Record<string, React.ReactNode> = {
    domener: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="1.4"/><ellipse cx="14" cy="14" rx="4" ry="10.5" stroke="currentColor" strokeWidth="1.4"/><line x1="3.5" y1="14" x2="24.5" y2="14" stroke="currentColor" strokeWidth="1.2"/><line x1="5" y1="8.5" x2="23" y2="8.5" stroke="currentColor" strokeWidth="1"/><line x1="5" y1="19.5" x2="23" y2="19.5" stroke="currentColor" strokeWidth="1"/></svg>),
    dns: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><rect x="3" y="5" width="22" height="7" rx="1.8" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="16" width="22" height="7" rx="1.8" stroke="currentColor" strokeWidth="1.4"/><circle cx="22.5" cy="8.5" r="1.3" fill="currentColor"/><circle cx="22.5" cy="19.5" r="1.3" fill="currentColor"/><circle cx="19" cy="8.5" r="1.3" fill="currentColor"/><circle cx="19" cy="19.5" r="1.3" fill="currentColor"/></svg>),
    epost: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/><polyline points="3,6 14,16 25,6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>),
    nettsider: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><rect x="3" y="3" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/><line x1="3" y1="9" x2="25" y2="9" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="6" r="1" fill="currentColor"/><circle cx="10.5" cy="6" r="1" fill="currentColor"/><line x1="10" y1="25" x2="18" y2="25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="14" y1="21" x2="14" y2="25" stroke="currentColor" strokeWidth="1.4"/></svg>),
    teknologi: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><polyline points="8,10 4,14 8,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="20,10 24,14 20,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="17" y1="7" x2="11" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    ai: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="14" cy="24" r="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="4" cy="14" r="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="24" cy="14" r="2" stroke="currentColor" strokeWidth="1.3"/><line x1="14" y1="6" x2="14" y2="10" stroke="currentColor" strokeWidth="1.3"/><line x1="14" y1="18" x2="14" y2="22" stroke="currentColor" strokeWidth="1.3"/><line x1="6" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="1.3"/><line x1="18" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1.3"/></svg>),
    oekonomi: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><polyline points="4,20 10,13 15,16 24,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="20,7 24,7 24,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="4" y1="23" x2="24" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>),
    helse: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><path d="M14 22C14 22 5 17 5 10.5C5 7.5 7.5 5 10.5 5C12.2 5 13.7 5.9 14 6.5C14.3 5.9 15.8 5 17.5 5C20.5 5 23 7.5 23 10.5C23 17 14 22 14 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
    vitenskap: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><path d="M10 5V14L5 22H23L18 14V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="9" y1="5" x2="19" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="16" cy="17" r="1.5" fill="currentColor"/><circle cx="11" cy="19" r="1" fill="currentColor"/></svg>),
    historie: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/><polyline points="14,8 14,14 18,17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 14H2M6.5 7L4.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>),
    samfunn: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="20" cy="9" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M4 22C4 18.7 6.7 16 10 16C11.3 16 12.5 16.4 13.5 17.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M14.5 22C14.5 18.7 17.2 16 20.5 16C23.8 16 26.5 18.7 26.5 22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>),
    utdanning: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><polygon points="14,4 26,10 14,16 2,10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/><path d="M7 13V19C7 19 10 22 14 22C18 22 21 19 21 19V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="26" y1="10" x2="26" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    reise: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><circle cx="14" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M14 3C9 3 5 7 5 12C5 18 14 25 14 25C14 25 23 18 23 12C23 7 19 3 14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
    mat: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg"><path d="M9 4V10C9 12.2 10.8 14 13 14H15C17.2 14 19 12.2 19 10V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="14" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="6" y1="4" x2="6" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 4C4 4 4 8 6 9C8 10 8 4 8 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  };

  const catSchema = buildCollectionPageSchema(
    `${BASE_URL}/${catSlug}`,
    `${cat.label} – Kunnskapsbase.no`,
    `Artikler og guider om ${cat.label.toLowerCase()}`,
    allCatArticles.length,
  );

  return (
    <>
      <JsonLd schema={[catSchema, buildBreadcrumbSchema(breadcrumbs)]} />
      <div className="wiki-layout">
        <Sidebar categoryTree={categoryTree} activeCategory={catSlug} />
        <div className="wiki-main">
          <Breadcrumbs items={breadcrumbs} />
          <div className="category-page-header">
            <div className="category-page-icon-wrap">{catSvgIcons[catSlug] || null}</div>
            <h1 className="category-page-title">{cat.label}</h1>
            <p className="category-page-desc">
              {allCatArticles.length > 0
                ? `${allCatArticles.length} artikler i denne kategorien`
                : CATEGORIES.find((c) => c.slug === catSlug)?.description || 'Innhold kommer snart.'}
            </p>
          </div>
          {allCatArticles.length === 0 && (
            <div className="category-empty">
              <p>Ingen artikler ennå i denne kategorien. Sjekk tilbake snart.</p>
              <a href="/tema" className="category-empty-link">Se alle kategorier →</a>
            </div>
          )}
          {cat.articles.length > 0 && (
            <section className="home-section">
              <div className="articles-grid">
                {cat.articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </section>
          )}
          {Object.entries(cat.subcategories).map(([subSlug, sub]) => (
            <section key={subSlug} className="home-section">
              <div className="home-section-header">
                <h2 className="home-section-title">{sub.label}</h2>
              </div>
              <div className="articles-grid">
                {sub.articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
