import type { MetadataRoute } from 'next';

const BASE_URL = 'https://kunnskapsbase.no';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/search'],
      },
      { userAgent: 'GPTBot',            allow: '/' },
      { userAgent: 'ChatGPT-User',      allow: '/' },
      { userAgent: 'PerplexityBot',     allow: '/' },
      { userAgent: 'ClaudeBot',         allow: '/' },
      { userAgent: 'anthropic-ai',      allow: '/' },
      { userAgent: 'Google-Extended',   allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Amazonbot',         allow: '/' },
      { userAgent: 'cohere-ai',         allow: '/' },
      { userAgent: 'Bytespider',        allow: '/' },
      { userAgent: 'Meta-ExternalAgent',allow: '/' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
