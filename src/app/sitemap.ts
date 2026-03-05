import type { MetadataRoute } from 'next';
import { getAllArticlesMeta, getCategoryTree } from '@/lib/articles';

const BASE_URL = 'https://kunnskapsbase.no';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticlesMeta();
  const categoryTree = getCategoryTree();

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/wiki/${article.slugPath.join('/')}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly',
    priority: article.featured ? 0.9 : 0.7,
  }));

  const categoryUrls: MetadataRoute.Sitemap = Object.keys(categoryTree).map((catSlug) => ({
    url: `${BASE_URL}/wiki/${catSlug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...categoryUrls,
    ...articleUrls,
  ];
}
