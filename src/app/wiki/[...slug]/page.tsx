import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getAllArticlesMeta,
  getCategoryTree,
  getRelatedArticles,
} from '@/lib/articles';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/schema';
import Sidebar from '@/components/wiki/Sidebar';
import Breadcrumbs from '@/components/wiki/Breadcrumbs';
import RelatedArticles from '@/components/wiki/RelatedArticles';
import ArticleCard from '@/components/wiki/ArticleCard';
import JsonLd from '@/components/seo/JsonLd';
import Link from 'next/link';

interface PageProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  const slugPaths = getAllArticleSlugs();
  const paths = slugPaths.map((slugPath) => ({ slug: slugPath }));

  // Also add category pages
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
    const url = `https://kunnskapsbase.no/wiki/${slug.join('/')}`;
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      alternates: { canonical: url },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        url,
        type: 'article',
        publishedTime: frontmatter.updatedAt,
        modifiedTime: frontmatter.updatedAt,
        tags: frontmatter.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.description,
      },
    };
  }

  // Category page
  const categoryTree = getCategoryTree();
  const catSlug = slug[0];
  const cat = categoryTree[catSlug];
  if (cat) {
    return {
      title: cat.label,
      description: `Artikler og guider om ${cat.label.toLowerCase()} – Kunnskapsbase.no`,
    };
  }

  return { title: 'Ikke funnet' };
}

export default async function WikiPage({ params }: PageProps) {
  const { slug } = params;
  const categoryTree = getCategoryTree();

  // Try to load as an article
  const article = await getArticleBySlug(slug);

  if (article) {
    const allArticles = getAllArticlesMeta();
    const currentMeta = allArticles.find((a) => a.slugPath.join('/') === slug.join('/'));
    const related = currentMeta ? getRelatedArticles(currentMeta, allArticles) : [];
    const breadcrumbs = buildBreadcrumbs(slug, article.frontmatter.title);
    const articleSchema = buildArticleSchema(article.frontmatter, slug.join('/'), article.htmlContent);
    const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

    const date = new Date(article.frontmatter.updatedAt).toLocaleDateString('nb-NO', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

    return (
      <>
        <JsonLd schema={[articleSchema, breadcrumbSchema]} />
        <div className="wiki-layout">
          <Sidebar categoryTree={categoryTree} activeCategory={slug[0]} />
          <div className="wiki-main">
            <Breadcrumbs items={breadcrumbs} />
            <article>
              <header className="article-header">
                <div className="article-meta">
                  <span className="article-cat">{article.frontmatter.category}</span>
                  {article.frontmatter.subcategory && (
                    <span className="article-cat" style={{ background: '#f0f0f8', color: '#4a4a8a' }}>
                      {article.frontmatter.subcategory}
                    </span>
                  )}
                  <time className="article-date" dateTime={article.frontmatter.updatedAt}>{date}</time>
                  <span className="article-reading-time">· {article.readingTime}</span>
                </div>
                <h1 className="article-title">{article.frontmatter.title}</h1>
                <p className="article-description">{article.frontmatter.description}</p>
                {article.frontmatter.tags?.length > 0 && (
                  <div className="article-tags">
                    {article.frontmatter.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </header>
              <hr className="article-divider" />
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.htmlContent }}
              />
            </article>
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

  const categoryIcons: Record<string, string> = {
    domener: '🌐', dns: '🔧', epost: '✉️', nettsider: '💻',
  };

  const allCatArticles = [
    ...cat.articles,
    ...Object.values(cat.subcategories).flatMap((s) => s.articles),
  ];

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbs)} />
      <div className="wiki-layout">
        <Sidebar categoryTree={categoryTree} activeCategory={catSlug} />
        <div className="wiki-main">
          <Breadcrumbs items={breadcrumbs} />
          <div className="category-page-header">
            <div className="category-page-icon">{categoryIcons[catSlug] || '📄'}</div>
            <h1 className="category-page-title">{cat.label}</h1>
            <p className="category-page-desc">{allCatArticles.length} artikler i denne kategorien</p>
          </div>

          {/* Articles without subcategory */}
          {cat.articles.length > 0 && (
            <section className="home-section">
              <div className="articles-grid">
                {cat.articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}

          {/* Subcategories */}
          {Object.entries(cat.subcategories).map(([subSlug, sub]) => (
            <section key={subSlug} className="home-section">
              <div className="home-section-header">
                <h2 className="home-section-title">{sub.label}</h2>
              </div>
              <div className="articles-grid">
                {sub.articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
