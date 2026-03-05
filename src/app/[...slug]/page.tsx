import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getAllSlugPaths, getArticle, getAllArticlesMeta,
  getArticlesByCategory, getRelatedArticles,
} from '@/lib/articles';
import { getCategoryBySlug, TAXONOMY } from '@/lib/taxonomy';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import Sidebar from '@/components/wiki/Sidebar';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/wiki/FAQSection';
import ArticleCard from '@/components/wiki/ArticleCard';
import JsonLd from '@/components/seo/JsonLd';
import { CategoryIcon } from '@/components/icons/CategoryIcons';

interface Props { params: { slug: string[] } }

export async function generateStaticParams() {
  const paths = getAllSlugPaths().map(s => ({ slug: s }));
  for (const cat of TAXONOMY) paths.push({ slug: [cat.slug] });
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticle(slug);
  if (article) {
    const { frontmatter: fm } = article;
    const url = `https://kunnskapsbase.no/${slug.join('/')}`;
    return {
      title: fm.title,
      description: fm.description,
      alternates: { canonical: url },
      openGraph: { title: fm.title, description: fm.description, url, type: 'article', publishedTime: fm.publishedAt, modifiedTime: fm.updatedAt, tags: fm.tags },
      twitter: { card: 'summary_large_image', title: fm.title, description: fm.description },
    };
  }
  const cat = getCategoryBySlug(slug[0]);
  if (cat) {
    return { title: cat.label, description: cat.description };
  }
  return { title: 'Side ikke funnet' };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = params;
  const allArticles = getAllArticlesMeta();

  // ── Try article ──────────────────────────────────────
  const article = await getArticle(slug);
  if (article) {
    const { frontmatter: fm, htmlContent, readingTime } = article;
    const related = getRelatedArticles({ slugPath: slug, ...fm, publishedAt: fm.publishedAt }, allArticles);

    const crumbs = [
      { label: 'Hjem', href: '/' },
      { label: fm.category, href: `/${fm.categorySlug}` },
      { label: fm.subcategory, href: `/${fm.categorySlug}/${fm.subcategorySlug}` },
      { label: fm.title, href: `/${slug.join('/')}` },
    ];

    const schemas: object[] = [
      articleSchema(fm, slug),
      breadcrumbSchema(crumbs),
    ];
    if (fm.faqs?.length) schemas.push(faqSchema(fm.faqs));

    const date = new Date(fm.updatedAt).toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
      <>
        <JsonLd schema={schemas} />
        <div className="wiki-layout">
          <Sidebar articles={allArticles} activeCategorySlug={fm.categorySlug} />
          <div className="wiki-main">
            <Breadcrumbs items={crumbs} />

            <article>
              <header className="article-header">
                <div className="article-badges">
                  <span className="badge badge-cat">{fm.category}</span>
                  <span className="badge badge-sub">{fm.subcategory}</span>
                  <span className="badge badge-date">{date}</span>
                  <span className="badge badge-rt">{readingTime}</span>
                  {fm.difficulty && <span className="badge badge-date">{fm.difficulty}</span>}
                </div>
                <h1 className="article-title-h1">{fm.title}</h1>
                {fm.definition && (
                  <div className="article-definition">{fm.definition}</div>
                )}
                {fm.tags?.length > 0 && (
                  <div className="article-tags">
                    {fm.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                )}
              </header>

              <hr className="article-divider" />

              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {fm.faqs?.length ? <FAQSection items={fm.faqs} /> : null}
            </article>

            {/* Related */}
            {related.length > 0 && (
              <section className="related-section">
                <div className="related-title">Relaterte artikler</div>
                <div className="related-grid">
                  {related.map(a => (
                    <Link key={a.slugPath.join('/')} href={`/${a.slugPath.join('/')}`} className="related-card">
                      <div className="related-cat">{a.category}</div>
                      <div className="related-title-text">{a.title}</div>
                      <div className="related-desc">{a.description}</div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </>
    );
  }

  // ── Category page ────────────────────────────────────
  const catSlug = slug[0];
  const cat = getCategoryBySlug(catSlug);
  if (!cat) return notFound();

  const catArticles = getArticlesByCategory(catSlug);
  const crumbs = [{ label: 'Hjem', href: '/' }, { label: cat.label, href: `/${catSlug}` }];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(crumbs)} />
      <div className="wiki-layout">
        <Sidebar articles={allArticles} activeCategorySlug={catSlug} />
        <div className="wiki-main">
          <Breadcrumbs items={crumbs} />

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className={`cat-icon-wrap cat-color-${cat.color}`} style={{ width: 56, height: 56 }}>
                <CategoryIcon name={cat.icon} size={28} />
              </div>
              <div>
                <h1 className="display-md">{cat.label}</h1>
                <p className="text-muted" style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>{cat.description}</p>
              </div>
            </div>
          </div>

          {/* Subcategories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {cat.subcategories.map(sub => {
              const subArticles = catArticles.filter(a => a.subcategorySlug === sub.slug);
              return (
                <section key={sub.slug}>
                  <div className="section-header">
                    <h2 className="section-title" style={{ fontSize: '1rem' }}>{sub.label}</h2>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{subArticles.length} artikkel{subArticles.length !== 1 ? 'er' : ''}</span>
                  </div>
                  {subArticles.length === 0
                    ? <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', padding: '1rem', border: '1px dashed var(--border)', borderRadius: '10px' }}>
                        Ingen artikler ennå. Kommer snart.
                      </p>
                    : <div className="articles-grid">
                        {subArticles.map(a => <ArticleCard key={a.slugPath.join('/')} article={a} />)}
                      </div>
                  }
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
