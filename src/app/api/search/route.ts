import { NextRequest, NextResponse } from 'next/server';
import { getAllArticlesMeta } from '@/lib/articles';

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim().toLowerCase() || '';
  if (q.length < 2) return NextResponse.json({ results: [] });

  const allArticles = getAllArticlesMeta();

  const results = allArticles
    .map((article) => {
      let score = 0;
      const title = article.title.toLowerCase();
      const desc = article.description?.toLowerCase() || '';
      const tags = (article.tags || []).map((t: string) => t.toLowerCase());
      const aliases = (article.aliases || []).map((a: string) => a.toLowerCase());

      // Exact title match
      if (title === q) score += 100;
      // Title starts with query
      else if (title.startsWith(q)) score += 80;
      // Title contains query
      else if (title.includes(q)) score += 60;

      // Alias match
      for (const alias of aliases) {
        if (alias === q) score += 90;
        else if (alias.startsWith(q)) score += 70;
        else if (alias.includes(q)) score += 50;
      }

      // Tag match
      for (const tag of tags) {
        if (tag === q) score += 40;
        else if (tag.includes(q)) score += 20;
      }

      // Description match
      if (desc.includes(q)) score += 10;

      return { ...article, score };
    })
    .filter((a) => a.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((a) => ({
      slug: a.slug,
      slugPath: a.slugPath,
      title: a.title,
      description: a.description,
      category: a.category,
    }));

  return NextResponse.json({ results });
}
