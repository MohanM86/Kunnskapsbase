export type EntityType =
  | 'Concept'
  | 'Protocol'
  | 'Technology'
  | 'Process'
  | 'Tool'
  | 'Standard'
  | 'Service'
  | 'Guide';

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  topic?: string;
  tags: string[];
  updatedAt: string;
  author?: string;
  featured?: boolean;
  order?: number;
  entityType?: EntityType;
  aliases?: string[];
  related?: string[];
  seeAlso?: string[];
}

export interface Article {
  slug: string;
  slugPath: string[];
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
    articles: ArticleMeta[];
  };
}

export interface ArticleMeta {
  title: string;
  slug: string;
  slugPath: string[];
  description: string;
  category: string;
  subcategory?: string;
  topic?: string;
  tags: string[];
  updatedAt: string;
  featured?: boolean;
  entityType?: EntityType;
  aliases?: string[];
  related?: string[];
  seeAlso?: string[];
}

export interface EntityIndexEntry {
  title: string;
  slug: string;
  url: string;
  description: string;
  category: string;
  subcategory?: string;
  topic?: string;
  entityType?: EntityType;
  aliases?: string[];
  related?: string[];
  seeAlso?: string[];
  date?: string;
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
