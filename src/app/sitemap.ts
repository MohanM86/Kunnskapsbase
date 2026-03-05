import type { MetadataRoute } from 'next';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import { CATEGORIES, LEGACY_IT_SLUGS } from '@/lib/categories';

const BASE_URL = 'https://kunnskapsbase.no';
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                        lastModified: NOW, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/tema`,              lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/artikler`,          lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/ordbok`,            lastModified: NOW, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/ai-index`,          lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/rss.xml`,           lastModified: NOW, changeFrequency: 'daily',   priority: 0.5 },
    { url: `${BASE_URL}/entity-index.json`, lastModified: NOW, changeFrequency: 'weekly',  priority: 0.5 },
  ];

  // New main category pages
  const newCategoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/${cat.slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Legacy IT category pages (still work as-is)
  const legacyCategoryPages: MetadataRoute.Sitemap = LEGACY_IT_SLUGS.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // All article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/${a.slugPath.join('/')}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: 'monthly',
    priority: a.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...newCategoryPages, ...legacyCategoryPages, ...articlePages];
}
