import type { BreadcrumbItem } from './types';
import { CATEGORY_LABEL, SUBCATEGORY_LABEL } from './categories';

export function buildBreadcrumbs(slugPath: string[], articleTitle: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: 'Hjem', href: '/' }];
  if (slugPath.length === 0) return crumbs;

  const catSlug = slugPath[0];
  crumbs.push({
    label: CATEGORY_LABEL[catSlug] || catSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    href: `/${catSlug}`,
  });

  if (slugPath.length === 3) {
    const subSlug = slugPath[1];
    crumbs.push({
      label: SUBCATEGORY_LABEL[subSlug] || subSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/${catSlug}/${subSlug}`,
    });
  }

  if (slugPath.length >= 2) {
    crumbs.push({
      label: articleTitle,
      href: `/${slugPath.join('/')}`,
    });
  }

  return crumbs;
}
