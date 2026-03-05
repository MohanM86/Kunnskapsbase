import { getAllArticlesMeta } from '@/lib/articles';

const BASE_URL = 'https://kunnskapsbase.no';
const SITE_NAME = 'Kunnskapsbase.no';
const SITE_DESC = 'Norsk kunnskapsbase for domener, DNS, e-post og nettsider.';

function esc(s: string): string { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;'); }
function safeDate(dateStr?: string): Date { if (!dateStr) return new Date(); const d = new Date(dateStr); return isNaN(d.getTime()) ? new Date() : d; }

export const dynamic = 'force-static';
export const revalidate = 3600;

export function GET() {
  const articles = getAllArticlesMeta().slice(0, 40);
  const items = articles.map((a) => {
    const url = `${BASE_URL}/${a.slugPath.join('/')}`;
    const pubDate = safeDate(a.updatedAt).toUTCString();
    const cats = [a.category, a.subcategory, a.topic].filter(Boolean).map((c) => `    <category>${esc(c!)}</category>`).join('\n');
    return `  <item>\n    <title>${esc(a.title)}</title>\n    <link>${url}</link>\n    <guid isPermaLink="true">${url}</guid>\n    <description>${esc(a.description)}</description>\n    <pubDate>${pubDate}</pubDate>\n${cats}\n  </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">\n  <channel>\n    <title>${esc(SITE_NAME)}</title>\n    <link>${BASE_URL}</link>\n    <description>${esc(SITE_DESC)}</description>\n    <language>nb</language>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>\n${items}\n  </channel>\n</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
