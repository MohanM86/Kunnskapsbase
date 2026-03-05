import type { ArticleFrontmatter, FAQItem } from './types';

const SITE_NAME = 'Kunnskapsbase';
const SITE_URL = 'https://kunnskapsbase.no';
const SITE_LOGO = `${SITE_URL}/images/og-default.png`;

const publisher = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: SITE_LOGO,
  },
  sameAs: [`${SITE_URL}`],
};

export function buildArticleSchema(
  frontmatter: ArticleFrontmatter,
  slug: string,
) {
  const url = `${SITE_URL}/${slug}`;
  const schemaType = frontmatter.entityType === 'Protocol' || frontmatter.entityType === 'Technology'
    ? 'TechArticle'
    : 'Article';

  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    '@id': `${url}#article`,
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.updatedAt,
    dateModified: frontmatter.updatedAt,
    author: {
      '@type': 'Person',
      name: frontmatter.author || 'Redaksjonen',
    },
    publisher,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    about: {
      '@type': 'Thing',
      name: frontmatter.topic || frontmatter.category,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
    },
    keywords: [
      ...(frontmatter.tags || []),
      ...(frontmatter.aliases || []),
    ].join(', '),
    inLanguage: 'nb-NO',
    url,
  };
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: Array<{ label: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function buildWebSiteSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'nb-NO',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      publisher,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO,
        width: 1200,
        height: 630,
      },
    },
  ];
}

export function buildCollectionPageSchema(
  url: string,
  name: string,
  description: string,
  itemCount?: number,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: 'nb-NO',
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher,
    ...(itemCount !== undefined && {
      about: {
        '@type': 'ItemList',
        numberOfItems: itemCount,
      },
    }),
  };
}

export function buildWebPageSchema(
  url: string,
  name: string,
  description: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: 'nb-NO',
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher,
  };
}
