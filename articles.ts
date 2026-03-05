import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';
import type { Article, ArticleMeta, CategoryTree, ArticleFrontmatter, EntityIndexEntry } from './types';
import { CATEGORY_LABEL, SUBCATEGORY_LABEL } from './categories';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const SITE_URL = 'https://kunnskapsbase.no';

function safeTimestamp(dateStr?: string): number {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

export function getAllArticleSlugs(): string[][] {
  const slugPaths: string[][] = [];
  function walk(dir: string, parts: string[]) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...parts, entry.name]);
      } else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
        slugPaths.push([...parts, entry.name.replace(/\.md$/, '')]);
      } else if (entry.name === 'index.md' && parts.length > 0) {
        slugPaths.push([...parts]);
      }
    }
  }
  walk(CONTENT_DIR, []);
  return slugPaths;
}

function readContentFile(slugPath: string[]): string | null {
  const filePath = path.join(CONTENT_DIR, ...slugPath) + '.md';
  const indexPath = path.join(CONTENT_DIR, ...slugPath, 'index.md');
  try {
    if (fs.existsSync(filePath)) return fs.readFileSync(filePath, 'utf8');
    if (fs.existsSync(indexPath)) return fs.readFileSync(indexPath, 'utf8');
  } catch {}
  return null;
}

export async function getArticleBySlug(slugPath: string[]): Promise<Article | null> {
  const fileContent = readContentFile(slugPath);
  if (!fileContent) return null;
  const { data, content } = matter(fileContent);
  const frontmatter = data as ArticleFrontmatter;
  const htmlContent = await markdownToHtml(content);
  const rt = readingTime(content);
  return {
    slug: slugPath[slugPath.length - 1],
    slugPath,
    frontmatter,
    content,
    htmlContent,
    readingTime: `${Math.ceil(rt.minutes)} min lesetid`,
  };
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse as any)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

export function getAllArticlesMeta(): ArticleMeta[] {
  const slugPaths = getAllArticleSlugs();
  const articles: ArticleMeta[] = [];
  for (const slugPath of slugPaths) {
    const fileContent = readContentFile(slugPath);
    if (!fileContent) continue;
    const { data } = matter(fileContent);
    const fm = data as ArticleFrontmatter;
    articles.push({
      title: fm.title,
      slug: slugPath[slugPath.length - 1],
      slugPath,
      description: fm.description,
      category: fm.category,
      subcategory: fm.subcategory,
      topic: fm.topic,
      tags: fm.tags || [],
      updatedAt: fm.updatedAt || '',
      featured: fm.featured,
      entityType: fm.entityType,
      aliases: fm.aliases || [],
      related: fm.related || [],
      seeAlso: fm.seeAlso || [],
    });
  }
  return articles.sort((a, b) => safeTimestamp(b.updatedAt) - safeTimestamp(a.updatedAt));
}

export function getCategoryTree(): CategoryTree {
  const articles = getAllArticlesMeta();
  const tree: CategoryTree = {};
  for (const article of articles) {
    const catSlug = article.slugPath[0]; // folder name is canonical
    const catLabel = CATEGORY_LABEL[catSlug] || article.category;
    if (!tree[catSlug]) {
      tree[catSlug] = { label: catLabel, slug: catSlug, subcategories: {}, articles: [] };
    }
    if (article.subcategory) {
      const subSlug = article.subcategory.toLowerCase().replace(/\s+/g, '-');
      const subLabel = SUBCATEGORY_LABEL[subSlug] || article.subcategory;
      if (!tree[catSlug].subcategories[subSlug]) {
        tree[catSlug].subcategories[subSlug] = { label: subLabel, slug: subSlug, articles: [] };
      }
      tree[catSlug].subcategories[subSlug].articles.push(article);
    } else {
      tree[catSlug].articles.push(article);
    }
  }
  return tree;
}

export function getRelatedArticles(current: ArticleMeta, all: ArticleMeta[], limit = 4): ArticleMeta[] {
  const scored = all
    .filter((a) => a.slug !== current.slug)
    .map((a) => {
      let score = 0;
      if (a.category === current.category) score += 3;
      if (a.subcategory && a.subcategory === current.subcategory) score += 2;
      if (a.topic && a.topic === current.topic) score += 2;
      const sharedTags = (a.tags || []).filter((t) => (current.tags || []).includes(t));
      score += sharedTags.length;
      // Boost explicitly linked entities
      if ((current.related || []).includes(a.slug)) score += 5;
      if ((current.seeAlso || []).includes(a.slug)) score += 3;
      return { article: a, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.article);
  return scored;
}

// Resolve article metas by slug list (for related/seeAlso fields)
export function resolveArticlesBySlug(slugs: string[], all: ArticleMeta[]): ArticleMeta[] {
  return slugs
    .map((s) => all.find((a) => a.slug === s || a.slugPath.join('/') === s))
    .filter((a): a is ArticleMeta => a !== undefined);
}

export function getAllArticlesForSearch() {
  const slugPaths = getAllArticleSlugs();
  const results = [];
  for (const slugPath of slugPaths) {
    const fileContent = readContentFile(slugPath);
    if (!fileContent) continue;
    const { data, content } = matter(fileContent);
    const fm = data as ArticleFrontmatter;
    results.push({
      slug: slugPath[slugPath.length - 1],
      slugPath,
      title: fm.title,
      description: fm.description,
      content: content.replace(/#{1,6}\s/g, '').replace(/\*\*/g, '').replace(/\*/g, '').slice(0, 500),
      category: fm.category,
      tags: fm.tags || [],
    });
  }
  return results;
}

export function getEntityIndex(): EntityIndexEntry[] {
  const all = getAllArticlesMeta();
  return all.map((a) => ({
    title: a.title,
    slug: a.slug,
    url: `${SITE_URL}/${a.slugPath.join('/')}`,
    description: a.description,
    category: a.category,
    subcategory: a.subcategory,
    topic: a.topic,
    entityType: a.entityType,
    aliases: a.aliases,
    related: a.related,
    seeAlso: a.seeAlso,
    date: a.updatedAt,
  }));
}
