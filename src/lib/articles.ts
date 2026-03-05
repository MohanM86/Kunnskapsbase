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
import type { Article, ArticleMeta, CategoryTree, ArticleFrontmatter } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

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

export async function getArticleBySlug(slugPath: string[]): Promise<Article | null> {
  // Try direct file match
  const filePath = path.join(CONTENT_DIR, ...slugPath) + '.md';
  const indexPath = path.join(CONTENT_DIR, ...slugPath, 'index.md');

  let fileContent: string;
  try {
    if (fs.existsSync(filePath)) {
      fileContent = fs.readFileSync(filePath, 'utf8');
    } else if (fs.existsSync(indexPath)) {
      fileContent = fs.readFileSync(indexPath, 'utf8');
    } else {
      return null;
    }
  } catch {
    return null;
  }

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
    const filePath = path.join(CONTENT_DIR, ...slugPath) + '.md';
    const indexPath = path.join(CONTENT_DIR, ...slugPath, 'index.md');

    let fileContent: string;
    try {
      if (fs.existsSync(filePath)) {
        fileContent = fs.readFileSync(filePath, 'utf8');
      } else if (fs.existsSync(indexPath)) {
        fileContent = fs.readFileSync(indexPath, 'utf8');
      } else {
        continue;
      }
    } catch {
      continue;
    }

    const { data } = matter(fileContent);
    const frontmatter = data as ArticleFrontmatter;

    articles.push({
      title: frontmatter.title,
      slug: slugPath[slugPath.length - 1],
      slugPath,
      description: frontmatter.description,
      category: frontmatter.category,
      subcategory: frontmatter.subcategory,
      tags: frontmatter.tags || [],
      updatedAt: frontmatter.updatedAt,
      featured: frontmatter.featured,
    });
  }

  return articles.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export function getCategoryTree(): CategoryTree {
  const articles = getAllArticlesMeta();
  const tree: CategoryTree = {};

  const categoryLabels: Record<string, string> = {
    domener: 'Domener',
    dns: 'DNS',
    epost: 'E-post',
    nettsider: 'Nettsider',
  };

  for (const article of articles) {
    const catSlug = article.category.toLowerCase().replace(/\s+/g, '-');
    const catLabel = categoryLabels[catSlug] || article.category;

    if (!tree[catSlug]) {
      tree[catSlug] = {
        label: catLabel,
        slug: catSlug,
        subcategories: {},
        articles: [],
      };
    }

    if (article.subcategory) {
      const subSlug = article.subcategory.toLowerCase().replace(/\s+/g, '-');
      if (!tree[catSlug].subcategories[subSlug]) {
        tree[catSlug].subcategories[subSlug] = {
          label: article.subcategory,
          slug: subSlug,
          articles: [],
        };
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
      const sharedTags = (a.tags || []).filter((t) => (current.tags || []).includes(t));
      score += sharedTags.length;
      return { article: a, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.article);

  return scored;
}

export function getAllArticlesForSearch(): Array<{ slug: string; slugPath: string[]; title: string; description: string; content: string; category: string; tags: string[] }> {
  const slugPaths = getAllArticleSlugs();
  const results = [];

  for (const slugPath of slugPaths) {
    const filePath = path.join(CONTENT_DIR, ...slugPath) + '.md';
    const indexPath = path.join(CONTENT_DIR, ...slugPath, 'index.md');

    let fileContent: string;
    try {
      if (fs.existsSync(filePath)) {
        fileContent = fs.readFileSync(filePath, 'utf8');
      } else if (fs.existsSync(indexPath)) {
        fileContent = fs.readFileSync(indexPath, 'utf8');
      } else {
        continue;
      }
    } catch {
      continue;
    }

    const { data, content } = matter(fileContent);
    const frontmatter = data as ArticleFrontmatter;
    results.push({
      slug: slugPath[slugPath.length - 1],
      slugPath,
      title: frontmatter.title,
      description: frontmatter.description,
      content: content.replace(/#{1,6}\s/g, '').replace(/\*\*/g, '').replace(/\*/g, '').slice(0, 500),
      category: frontmatter.category,
      tags: frontmatter.tags || [],
    });
  }

  return results;
}
