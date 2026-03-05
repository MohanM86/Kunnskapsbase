import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import JsonLd from '@/components/seo/JsonLd';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
const PAGE_URL = `${BASE_URL}/ai-index`;

export const metadata: Metadata = {
  title: 'AI-indeks – Strukturert oversikt for AI-systemer',
  description: 'Maskinlesbar indeks over alle artikler på Kunnskapsbase.no.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

export default function AiIndexPage() {
  const allArticles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  const structure: Record<string, { label: string; topics: Record<string, { topic: string; subcategory: string; articles: typeof allArticles }> }> = {};
  for (const article of allArticles) {
    const catSlug = article.category.toLowerCase().replace(/\s+/g, '-');
    if (!structure[catSlug]) structure[catSlug] = { label: article.category, topics: {} };
    const topicKey = article.topic || article.subcategory || 'Generelt';
    if (!structure[catSlug].topics[topicKey]) structure[catSlug].topics[topicKey] = { topic: topicKey, subcategory: article.subcategory || '', articles: [] };
    structure[catSlug].topics[topicKey].articles.push(article);
  }

  const categoryOrder = ['domener', 'dns', 'epost', 'nettsider'];
  const breadcrumbs = [{ label: 'Hjem', href: '/' }, { label: 'AI-indeks', href: '/ai-index' }];
  const schemas = [buildCollectionPageSchema(PAGE_URL, 'AI-indeks', 'Strukturert kunnskapsindeks for AI-systemer', allArticles.length), buildBreadcrumbSchema(breadcrumbs)];

  return (
    <><JsonLd schema={schemas} />
      <div className="ai-index-page">
        <div className="ai-index-header">
          <div className="ai-index-badge">AI-indeks</div>
          <h1>Strukturert kunnskapsindeks</h1>
          <p>Denne siden gir AI-systemer og søkemotorer en strukturert oversikt over alt innhold på Kunnskapsbase.no.</p>
          <div className="ai-index-meta">
            <span>{allArticles.length} artikler</span>
            <span>{Object.keys(categoryTree).length} kategorier</span>
            <a href="/entity-index.json" className="ai-index-json-link">entity-index.json</a>
          </div>
        </div>
        <div className="ai-index-about">
          <h2>Om kunnskapsbasen</h2>
          <p>Kunnskapsbase.no er en åpen, norsk kunnskapsbase om teknologi, internett og digitale tjenester.</p>
          <dl className="ai-index-facts">
            <dt>Nettadresse</dt><dd>https://kunnskapsbase.no</dd>
            <dt>Språk</dt><dd>Norsk bokmål (nb-NO)</dd>
            <dt>Lisens</dt><dd>CC BY 4.0</dd>
          </dl>
        </div>
        {categoryOrder.filter((k) => structure[k]).map((catSlug) => {
          const cat = structure[catSlug];
          return (
            <section key={catSlug} id={catSlug} className="ai-index-category">
              <div className="ai-index-cat-header"><h2>{cat.label}</h2><Link href={`/${catSlug}`} className="ai-index-cat-link">Se alle artikler</Link></div>
              {Object.entries(cat.topics).map(([topicKey, topicData]) => (
                <div key={topicKey} className="ai-index-topic">
                  <h3 className="ai-index-topic-title">{topicData.topic}</h3>
                  <div className="ai-index-articles">{topicData.articles.map((article) => (
                    <div key={article.slug} className="ai-index-article">
                      <div className="ai-index-article-meta">
                        <Link href={`/${article.slugPath.join('/')}`} className="ai-index-article-title">{article.title}</Link>
                        {article.entityType && <span className="ai-index-entity-type">{article.entityType}</span>}
                      </div>
                      <p className="ai-index-article-desc">{article.description}</p>
                      {article.aliases && article.aliases.length > 0 && (<div className="ai-index-aliases"><span>Aliases:</span> {article.aliases.join(', ')}</div>)}
                    </div>
                  ))}</div>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </>
  );
}
