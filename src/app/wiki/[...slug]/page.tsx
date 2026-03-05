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
  const categoryTree = getCategoryTree();
  for (const catSlug of Object.keys(categoryTree)) {
    paths.push({ slug: [catSlug] });
  }
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  if (article) {
    const { frontmatter } = article;
    const url = `${BASE_URL}/wiki/${slug.join('/')}`;
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
  const cat = categoryTree[catSlug];
  if (cat) {
    const url = `${BASE_URL}/wiki/${catSlug}`;
    return {
      title: cat.label,
      description: `Artikler og guider om ${cat.label.toLowerCase()} – Kunnskapsbase.no`,
      alternates: { canonical: url },
      openGraph: {
        title: `${cat.label} | Kunnskapsbase.no`,
        description: `Artikler og guider om ${cat.label.toLowerCase()}`,
        url,
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
      },
    };
  }

  return { title: 'Ikke funnet' };
}

export default async function WikiPage({ params }: PageProps) {
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

  // Category page
  const catSlug = slug[0];
  const cat = categoryTree[catSlug];
  if (!cat) return notFound();

  const breadcrumbs = [
    { label: 'Hjem', href: '/' },
    { label: cat.label, href: `/wiki/${catSlug}` },
  ];

  const allCatArticles = [
    ...cat.articles,
    ...Object.values(cat.subcategories).flatMap((s) => s.articles),
  ];

  const catSvgIcons: Record<string, React.ReactNode> = {
    domener: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg">
        <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="1.4"/>
        <ellipse cx="14" cy="14" rx="4" ry="10.5" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="3.5" y1="14" x2="24.5" y2="14" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="5" y1="8.5" x2="23" y2="8.5" stroke="currentColor" strokeWidth="1"/>
        <line x1="5" y1="19.5" x2="23" y2="19.5" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    dns: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg">
        <rect x="3" y="5" width="22" height="7" rx="1.8" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="3" y="16" width="22" height="7" rx="1.8" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="22.5" cy="8.5" r="1.3" fill="currentColor"/>
        <circle cx="22.5" cy="19.5" r="1.3" fill="currentColor"/>
        <circle cx="19" cy="8.5" r="1.3" fill="currentColor"/>
        <circle cx="19" cy="19.5" r="1.3" fill="currentColor"/>
      </svg>
    ),
    epost: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <polyline points="3,6 14,16 25,6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    nettsider: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="cat-icon-svg">
        <rect x="3" y="3" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="3" y1="9" x2="25" y2="9" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="7" cy="6" r="1" fill="currentColor"/>
        <circle cx="10.5" cy="6" r="1" fill="currentColor"/>
        <line x1="10" y1="25" x2="18" y2="25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="14" y1="21" x2="14" y2="25" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  };

  const catSchema = buildCollectionPageSchema(
    `${BASE_URL}/wiki/${catSlug}`,
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
            <p className="category-page-desc">{allCatArticles.length} artikler i denne kategorien</p>
          </div>
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
