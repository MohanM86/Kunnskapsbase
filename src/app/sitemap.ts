import type { MetadataRoute } from 'next';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';
import { CATEGORIES, LEGACY_IT_SLUGS } from '@/lib/categories';

const BASE_URL = 'https://kunnskapsbase.no';
const NOW = new Date();

function safeDate(dateStr?: string): Date {
  if (!dateStr) return NOW;
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? NOW : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: NOW, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/tema`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/artikler`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/ordbok`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/ai-index`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/rss.xml`, lastModified: NOW, changeFrequency: 'daily', priority: 0.5 },
    { url: `${BASE_URL}/entity-index.json`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.5 },
  ];

  // Category pages from CATEGORIES config
  const configCategoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/${cat.slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Legacy IT category pages (domener, dns, epost, nettsider)
  const legacyCategoryPages: MetadataRoute.Sitemap = LEGACY_IT_SLUGS.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic category pages discovered from content but not in config or legacy
  const knownSlugs = new Set([
    ...CATEGORIES.map((c) => c.slug),
    ...LEGACY_IT_SLUGS,
  ]);
  const dynamicCategoryPages: MetadataRoute.Sitemap = Object.keys(categoryTree)
    .filter((slug) => !knownSlugs.has(slug))
    .map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: NOW,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // All article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/${a.slugPath.join('/')}`,
    lastModified: safeDate(a.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: a.featured ? 0.9 : 0.7,
  }));

  // Deduplicate by URL
  const seen = new Set<string>();
  const all = [
    ...staticPages,
    ...configCategoryPages,
    ...legacyCategoryPages,
    ...dynamicCategoryPages,
    ...articlePages,
  ];

  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
