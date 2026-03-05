import { NextRequest, NextResponse } from 'next/server';
import Fuse from 'fuse.js';
import { getAllArticlesForSearch } from '@/lib/articles';

let cachedIndex: Fuse<ReturnType<typeof getAllArticlesForSearch>[number]> | null = null;
let cachedData: ReturnType<typeof getAllArticlesForSearch> | null = null;

function getSearchIndex() {
  if (!cachedIndex || !cachedData) {
    cachedData = getAllArticlesForSearch();
    cachedIndex = new Fuse(cachedData, {
      keys: [{ name: 'title', weight: 0.5 }, { name: 'description', weight: 0.3 }, { name: 'content', weight: 0.15 }, { name: 'tags', weight: 0.05 }],
      threshold: 0.4, includeScore: true, minMatchCharLength: 2,
    });
  }
  return { index: cachedIndex, data: cachedData };
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') || '';
  if (q.trim().length < 2) return NextResponse.json({ results: [] });
  const { index } = getSearchIndex();
  const results = index.search(q).slice(0, 20).map((r) => ({
    slug: r.item.slug, slugPath: r.item.slugPath, title: r.item.title, description: r.item.description,
    category: r.item.category, excerpt: r.item.content.slice(0, 150) + '...', score: r.score ?? 1,
  }));
  return NextResponse.json({ results });
}
