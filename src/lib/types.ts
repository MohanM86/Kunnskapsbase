export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  tags: string[];
  updatedAt: string;
  author?: string;
  featured?: boolean;
  order?: number;
}

export interface Article {
  slug: string;
  slugPath: string[]; // e.g. ['domener', 'hva-er-et-domene']
  frontmatter: ArticleFrontmatter;
  content: string;
  htmlContent: string;
  readingTime: string;
}

export interface CategoryTree {
  [category: string]: {
    label: string;
    slug: string;
    subcategories: {
      [subcategory: string]: {
        label: string;
        slug: string;
        articles: ArticleMeta[];
      };
    };
    articles: ArticleMeta[]; // articles without subcategory
  };
}

export interface ArticleMeta {
  title: string;
  slug: string;
  slugPath: string[];
  description: string;
  category: string;
  subcategory?: string;
  tags: string[];
  updatedAt: string;
  featured?: boolean;
}

export interface SearchResult {
  slug: string;
  slugPath: string[];
  title: string;
  description: string;
  category: string;
  excerpt: string;
  score: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
