import type { MetadataRoute } from 'next';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';

const BASE_URL = 'https://kunnskapsbase.no';
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                       lastModified: NOW, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/tema`,             lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/artikler`,         lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/ordbok`,           lastModified: NOW, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/ai-index`,         lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/rss.xml`,          lastModified: NOW, changeFrequency: 'daily',   priority: 0.5 },
    { url: `${BASE_URL}/entity-index.json`,lastModified: NOW, changeFrequency: 'weekly',  priority: 0.5 },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.keys(categoryTree).map((catSlug) => ({
    url: `${BASE_URL}/wiki/${catSlug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/wiki/${a.slugPath.join('/')}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: 'monthly',
    priority: a.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
