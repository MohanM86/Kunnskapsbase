import type { BreadcrumbItem } from './types';

const categoryLabels: Record<string, string> = {
  domener: 'Domener',
  dns: 'DNS',
  epost: 'E-post',
  nettsider: 'Nettsider',
};

export function buildBreadcrumbs(slugPath: string[], articleTitle: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [
    { label: 'Hjem', href: '/' },
  ];

  if (slugPath.length === 0) return crumbs;

  // Category
  const categorySlug = slugPath[0];
  const categoryLabel = categoryLabels[categorySlug] || slugPath[0];
  crumbs.push({
    label: categoryLabel,
    href: `/wiki/${categorySlug}`,
  });

  // Subcategory (if 3 parts: category/subcategory/article)
  if (slugPath.length === 3) {
    const subSlug = slugPath[1];
    crumbs.push({
      label: subSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/wiki/${categorySlug}/${subSlug}`,
    });
  }

  // Article itself
  if (slugPath.length >= 2) {
    crumbs.push({
      label: articleTitle,
      href: `/wiki/${slugPath.join('/')}`,
    });
  }

  return crumbs;
}
