import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllArticleSlugs, getArticleBySlug, getAllArticlesMeta, getCategoryTree, getRelatedArticles, resolveArticlesBySlug } from '@/lib/articles';
import { CATEGORIES, LEGACY_IT_SLUGS, CATEGORY_LABEL, DYNAMIC_CAT_INTROS } from '@/lib/categories';
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
interface PageProps { params: { slug: string[] }; }

export async function generateStaticParams() {
  const paths = getAllArticleSlugs().map((s) => ({ slug: s }));
  const allCatSlugs = Array.from(new Set([...Object.keys(getCategoryTree()), ...CATEGORIES.map((c) => c.slug), ...LEGACY_IT_SLUGS]));
  for (const catSlug of allCatSlugs) paths.push({ slug: [catSlug] });
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  if (article) {
    const { frontmatter: fm } = article;
    const url = `${BASE_URL}/${slug.join('/')}`;
    return { title: fm.title, description: fm.description, alternates: { canonical: url }, openGraph: { title: fm.title, description: fm.description, url, type: 'article', images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: fm.title }] } };
  }
  const catSlug = slug[0];
  const catConfig = CATEGORIES.find((c) => c.slug === catSlug);
  const catLabel = getCategoryTree()[catSlug]?.label ?? catConfig?.label;
  if (catLabel) {
    const desc = catConfig?.introText || DYNAMIC_CAT_INTROS[catSlug] || `Artikler og guider om ${catLabel.toLowerCase()}`;
    return { title: catLabel, description: desc };
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
    const sameTopic = currentMeta ? allArticles.filter((a) => a.slug !== currentMeta.slug && a.topic && a.topic === currentMeta.topic).slice(0, 4) : [];
    const breadcrumbs = buildBreadcrumbs(slug, article.frontmatter.title);
    const schemas = [buildArticleSchema(article.frontmatter, slug.join('/')), buildBreadcrumbSchema(breadcrumbs)];

    let dateStr = '';
    if (article.frontmatter.updatedAt) {
      const d = new Date(article.frontmatter.updatedAt);
      if (!isNaN(d.getTime())) dateStr = d.toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    return (
      <><JsonLd schema={schemas} />
        <div className="wiki-layout">
          <Sidebar categoryTree={categoryTree} activeCategory={slug[0]} />
          <div className="wiki-main">
            <Breadcrumbs items={breadcrumbs} />
            <article>
              <header className="article-header">
                <div className="article-meta">
                  <span className="article-cat">{article.frontmatter.category}</span>
                  {article.frontmatter.subcategory && <span className="article-cat article-cat-sub">{article.frontmatter.subcategory}</span>}
                  {article.frontmatter.topic && <span className="article-cat article-cat-topic">{article.frontmatter.topic}</span>}
                  {dateStr && <time className="article-date" dateTime={article.frontmatter.updatedAt}>{dateStr}</time>}
                  <span className="article-reading-time">· {article.readingTime}</span>
                </div>
                <h1 className="article-title">{article.frontmatter.title}</h1>
                <DefinitionBox title={article.frontmatter.title} description={article.frontmatter.description} entityType={article.frontmatter.entityType} aliases={article.frontmatter.aliases} />
                {article.frontmatter.tags?.length > 0 && (<div className="article-tags">{article.frontmatter.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}</div>)}
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

  // ── Category page ──
  const catSlug = slug[0];
  const cat = categoryTree[catSlug] || (() => {
    const regCat = CATEGORIES.find((c) => c.slug === catSlug);
    if (!regCat) return null;
    return { label: regCat.label, slug: catSlug, subcategories: {}, articles: [] as any[] };
  })();
  if (!cat) return notFound();

  const breadcrumbs = [{ label: 'Hjem', href: '/' }, { label: cat.label, href: `/${catSlug}` }];
  const allCatArticles = [...cat.articles, ...Object.values(cat.subcategories).flatMap((s) => s.articles)];

  // Get intro text
  const catConfig = CATEGORIES.find((c) => c.slug === catSlug);
  const introText = catConfig?.introText || DYNAMIC_CAT_INTROS[catSlug] || '';

  const catSchema = buildCollectionPageSchema(
    `${BASE_URL}/${catSlug}`,
    `${cat.label} – Kunnskapsbase.no`,
    introText || `Artikler og guider om ${cat.label.toLowerCase()}`,
    allCatArticles.length
  );

  return (
    <><JsonLd schema={[catSchema, buildBreadcrumbSchema(breadcrumbs)]} />
      <div className="wiki-layout">
        <Sidebar categoryTree={categoryTree} activeCategory={catSlug} />
        <div className="wiki-main">
          <Breadcrumbs items={breadcrumbs} />
          <div className="category-page-header">
            <h1 className="category-page-title">{cat.label}</h1>
            {introText ? (
              <p className="category-page-intro">{introText}</p>
            ) : (
              <p className="category-page-desc">
                {allCatArticles.length > 0
                  ? `${allCatArticles.length} artikler i denne kategorien`
                  : 'Innhold kommer snart.'}
              </p>
            )}
            {introText && allCatArticles.length > 0 && (
              <p className="category-page-count">{allCatArticles.length} artikler</p>
            )}
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
