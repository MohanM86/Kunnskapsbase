import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';
import type { Article, ArticleMeta, ArticleFrontmatter, SearchDoc } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// ── File discovery ──────────────────────────────────────────

export function getAllSlugPaths(): string[][] {
  const results: string[][] = [];
  function walk(dir: string, parts: string[]) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...parts, entry.name]);
      } else if (entry.name.endsWith('.md')) {
        results.push([...parts, entry.name.replace(/\.md$/, '')]);
      }
    }
  }
  walk(CONTENT_DIR, []);
  return results;
}

// ── Single article ──────────────────────────────────────────

export async function getArticle(slugPath: string[]): Promise<Article | null> {
  const filePath = path.join(CONTENT_DIR, ...slugPath) + '.md';
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const fm = data as ArticleFrontmatter;
  const rt = readingTime(content);

  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return {
    slugPath,
    frontmatter: { ...fm, readingTime: Math.ceil(rt.minutes) },
    content,
    htmlContent: String(html),
    readingTime: `${Math.ceil(rt.minutes)} min lesetid`,
  };
}

// ── Article listing ─────────────────────────────────────────

function readMeta(slugPath: string[]): ArticleMeta | null {
  const filePath = path.join(CONTENT_DIR, ...slugPath) + '.md';
  if (!fs.existsSync(filePath)) return null;
  const { data } = matter(fs.readFileSync(filePath, 'utf8'));
  const fm = data as ArticleFrontmatter;
  return {
    slugPath,
    title: fm.title,
    description: fm.description,
    definition: fm.definition,
    category: fm.category,
    categorySlug: fm.categorySlug,
    subcategory: fm.subcategory,
    subcategorySlug: fm.subcategorySlug,
    tags: fm.tags || [],
    publishedAt: fm.publishedAt,
    updatedAt: fm.updatedAt,
    featured: fm.featured,
    difficulty: fm.difficulty,
  };
}

export function getAllArticlesMeta(): ArticleMeta[] {
  return getAllSlugPaths()
    .map(readMeta)
    .filter(Boolean) as ArticleMeta[];
}

export function getArticlesByCategory(categorySlug: string): ArticleMeta[] {
  return getAllArticlesMeta().filter((a) => a.categorySlug === categorySlug);
}

export function getArticlesBySubcategory(categorySlug: string, subcategorySlug: string): ArticleMeta[] {
  return getAllArticlesMeta().filter(
    (a) => a.categorySlug === categorySlug && a.subcategorySlug === subcategorySlug
  );
}

export function getFeaturedArticles(limit = 6): ArticleMeta[] {
  return getAllArticlesMeta()
    .filter((a) => a.featured)
    .slice(0, limit);
}

export function getRecentArticles(limit = 12): ArticleMeta[] {
  return getAllArticlesMeta()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getRelatedArticles(current: ArticleMeta, limit = 4): ArticleMeta[] {
  const all = getAllArticlesMeta();
  return all
    .filter((a) => a.slugPath.join('/') !== current.slugPath.join('/'))
    .map((a) => {
      let score = 0;
      if (a.categorySlug === current.categorySlug) score += 3;
      if (a.subcategorySlug === current.subcategorySlug) score += 2;
      score += (a.tags || []).filter((t) => (current.tags || []).includes(t)).length;
      return { a, score };
    })
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => x.a);
}

// ── Search ──────────────────────────────────────────────────

export function getAllSearchDocs(): SearchDoc[] {
  return getAllSlugPaths().map((slugPath) => {
    const filePath = path.join(CONTENT_DIR, ...slugPath) + '.md';
    const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
    const fm = data as ArticleFrontmatter;
    return {
      slugPath,
      title: fm.title,
      description: fm.description,
      definition: fm.definition || '',
      content: content.replace(/#{1,6}\s/g, '').replace(/\*\*/g, '').slice(0, 1000),
      category: fm.category,
      categorySlug: fm.categorySlug,
      subcategory: fm.subcategory,
      tags: fm.tags || [],
    };
  });
}
