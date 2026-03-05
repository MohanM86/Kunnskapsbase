import type { ArticleFrontmatter, FAQItem, BreadcrumbItem } from './types';

const SITE = { name: 'Kunnskapsbase.no', url: 'https://kunnskapsbase.no' };

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: `${SITE.url}/og-logo.png` },
  sameAs: ['https://twitter.com/kunnskapsbase'],
};

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  description: 'Norges største kunnskapsplattform – forklarer verden på norsk.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/artikler?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export function articleSchema(fm: ArticleFrontmatter, slugPath: string[]) {
  const url = `${SITE.url}/${slugPath.join('/')}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fm.title,
    description: fm.description,
    datePublished: fm.publishedAt,
    dateModified: fm.updatedAt,
    author: { '@type': 'Person', name: fm.author || 'Redaksjonen' },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: { '@type': 'Thing', name: fm.category },
    keywords: (fm.tags || []).join(', '),
    url,
    abstract: fm.definition,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
