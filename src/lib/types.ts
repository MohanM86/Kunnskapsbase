// ============================================================
// Core data types for kunnskapsbase.no
// Designed to scale to 100,000+ articles
// ============================================================

export interface ArticleFrontmatter {
  title: string;
  description: string;            // 150-160 chars for SEO
  definition: string;             // One-sentence definition for AI search
  category: string;               // e.g. "Teknologi"
  categorySlug: string;           // e.g. "teknologi"
  subcategory: string;            // e.g. "Internett"
  subcategorySlug: string;        // e.g. "internett"
  tags: string[];
  author?: string;
  publishedAt: string;            // ISO date
  updatedAt: string;              // ISO date
  featured?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  readingTime?: number;           // minutes, auto-calculated
  relatedArticles?: string[];     // slugPaths for internal linking
  faqs?: FAQItem[];
  imageAlt?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Article {
  slugPath: string[];             // ['teknologi', 'internett', 'hva-er-dns']
  frontmatter: ArticleFrontmatter;
  content: string;                // raw markdown
  htmlContent: string;
  readingTime: string;
}

export interface ArticleMeta {
  slugPath: string[];
  title: string;
  description: string;
  definition: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategorySlug: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  difficulty?: string;
}

// ── Taxonomy ──────────────────────────────────────────────

export interface SubcategoryMeta {
  slug: string;
  label: string;
  articleCount: number;
  articles: ArticleMeta[];
}

export interface CategoryMeta {
  slug: string;
  label: string;
  description: string;
  icon: string;                   // icon component name
  subcategories: SubcategoryMeta[];
  articleCount: number;
  featuredArticle?: ArticleMeta;
}

// ── Search ────────────────────────────────────────────────

export interface SearchDoc {
  slugPath: string[];
  title: string;
  description: string;
  definition: string;
  content: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  tags: string[];
}

export interface SearchResult {
  slugPath: string[];
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  excerpt: string;
}

// ── Navigation ────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href: string;
}
