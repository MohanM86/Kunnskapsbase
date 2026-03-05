import type { MetadataRoute } from 'next';
import { getAllArticlesMeta } from '@/lib/articles';
import { TAXONOMY } from '@/lib/taxonomy';

const BASE = 'https://kunnskapsbase.no';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticlesMeta();

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE}/tema`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/artikler`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE}/ordbok`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...TAXONOMY.map(c => ({
      url: `${BASE}/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...articles.map(a => ({
      url: `${BASE}/${a.slugPath.join('/')}`,
      lastModified: new Date(a.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: a.featured ? 0.85 : 0.7,
    })),
  ];
}
