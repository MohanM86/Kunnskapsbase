import { NextRequest, NextResponse } from 'next/server';
import Fuse from 'fuse.js';
import { getAllSearchDocs } from '@/lib/articles';

let index: Fuse<ReturnType<typeof getAllSearchDocs>[number]> | null = null;

function getIndex() {
  if (!index) {
    const docs = getAllSearchDocs();
    index = new Fuse(docs, {
      keys: [
        { name: 'title', weight: 0.5 },
        { name: 'definition', weight: 0.25 },
        { name: 'description', weight: 0.15 },
        { name: 'content', weight: 0.07 },
        { name: 'tags', weight: 0.03 },
      ],
      threshold: 0.35,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }
  return index;
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') || '';
  if (q.trim().length < 2) return NextResponse.json({ results: [] });

  const results = getIndex()
    .search(q)
    .slice(0, 20)
    .map(r => ({
      slugPath: r.item.slugPath,
      title: r.item.title,
      description: r.item.description,
      category: r.item.category,
      categorySlug: r.item.categorySlug,
      excerpt: r.item.content.slice(0, 120) + '…',
    }));

  return NextResponse.json({ results });
}
