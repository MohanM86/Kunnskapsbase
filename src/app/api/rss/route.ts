import { NextResponse } from 'next/server';
import { getRecentArticles } from '@/lib/articles';

export async function GET() {
  const articles = getRecentArticles(20);
  const items = articles.map(a => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>https://kunnskapsbase.no/${a.slugPath.join('/')}</link>
      <description><![CDATA[${a.description}]]></description>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <category>${a.category}</category>
      <guid>https://kunnskapsbase.no/${a.slugPath.join('/')}</guid>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kunnskapsbase.no</title>
    <link>https://kunnskapsbase.no</link>
    <description>Norges kunnskapsplattform – forklarer verden på norsk</description>
    <language>nb</language>
    <atom:link href="https://kunnskapsbase.no/api/rss" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
