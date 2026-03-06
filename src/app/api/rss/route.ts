import { getAllArticlesMeta } from '@/lib/articles';

const BASE_URL = 'https://kunnskapsbase.no';
const SITE_NAME = 'Kunnskapsbase.no';
const SITE_DESC = 'Norsk kunnskapsbase for domener, DNS, e-post, nettsider, AI, økonomi, helse og mer.';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function safeDate(dateStr?: string): Date {
  if (!dateStr) return new Date('2025-01-01');
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date('2025-01-01') : d;
}

export const dynamic = 'force-dynamic';

export function GET() {
  const articles = getAllArticlesMeta().slice(0, 50);
  const buildDate = new Date().toUTCString();

  const items = articles
    .map((a) => {
      const url = `${BASE_URL}/${a.slugPath.join('/')}`;
      const pubDate = safeDate(a.updatedAt).toUTCString();
      const cats = [a.category, a.subcategory, a.topic]
        .filter(Boolean)
        .map((c) => `    <category>${esc(c!)}</category>`)
        .join('\n');
      return `  <item>
    <title>${esc(a.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${esc(a.description)}</description>
    <pubDate>${pubDate}</pubDate>
${cats}
  </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(SITE_NAME)}</title>
    <link>${BASE_URL}</link>
    <description>${esc(SITE_DESC)}</description>
    <language>nb</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
