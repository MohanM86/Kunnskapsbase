'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { CategoryTree } from '@/lib/types';

interface SidebarProps {
  categoryTree: CategoryTree;
  activeCategory?: string;
}

/* ── Grouped sidebar structure ── */
const SIDEBAR_GROUPS: { label: string; categories: string[] }[] = [
  { label: 'Teknologi', categories: ['ai', 'teknologi', 'domener', 'dns', 'epost', 'nettsider'] },
  { label: 'Samfunn', categories: ['oekonomi', 'historie', 'jus', 'samfunn'] },
  { label: 'Livsstil', categories: ['helse', 'mat', 'reise', 'hobby'] },
  { label: 'Annet', categories: ['bil', 'dyr', 'klima', 'utdanning', 'vitenskap'] },
];

const catIcons: Record<string, React.ReactNode> = {
  domener: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><ellipse cx="7" cy="7" rx="2" ry="5.5" stroke="currentColor" strokeWidth="1.2"/><line x1="1.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="1"/></svg>,
  dns: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="1" y="8" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/><circle cx="11" cy="4" r="0.8" fill="currentColor"/><circle cx="11" cy="10" r="0.8" fill="currentColor"/></svg>,
  epost: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.2"/><polyline points="1,3 7,8.5 13,3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>,
  nettsider: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.2"/><line x1="1" y1="4.5" x2="13" y2="4.5" stroke="currentColor" strokeWidth="1"/><circle cx="3" cy="3" r="0.6" fill="currentColor"/><circle cx="5" cy="3" r="0.6" fill="currentColor"/></svg>,
  ai: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="2" r="1.2" stroke="currentColor" strokeWidth="1"/><circle cx="7" cy="12" r="1.2" stroke="currentColor" strokeWidth="1"/><circle cx="2" cy="7" r="1.2" stroke="currentColor" strokeWidth="1"/><circle cx="12" cy="7" r="1.2" stroke="currentColor" strokeWidth="1"/><line x1="7" y1="3.2" x2="7" y2="4.5" stroke="currentColor" strokeWidth="1"/><line x1="7" y1="9.5" x2="7" y2="10.8" stroke="currentColor" strokeWidth="1"/><line x1="3.2" y1="7" x2="4.5" y2="7" stroke="currentColor" strokeWidth="1"/><line x1="9.5" y1="7" x2="10.8" y2="7" stroke="currentColor" strokeWidth="1"/></svg>,
  oekonomi: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 11V7M5 11V5M8 11V3M11 11V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  historie: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><polyline points="7,3.5 7,7 9.5,8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  jus: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="7" y1="2" x2="7" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M3 4.5L7 3L11 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 4.5V6.5C3 7.2 4 8 5.5 8" stroke="currentColor" strokeWidth="1"/><path d="M11 4.5V6.5C11 7.2 10 8 8.5 8" stroke="currentColor" strokeWidth="1"/><line x1="4.5" y1="12" x2="9.5" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  samfunn: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.2"/><path d="M3 12C3 9.5 4.8 8 7 8C9.2 8 11 9.5 11 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  helse: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3C5 3 3 4.8 3 6.8C3 10.5 7 13 7 13C7 13 11 10.5 11 6.8C11 4.8 9 3 7 3Z" stroke="currentColor" strokeWidth="1.2"/><line x1="7" y1="5.5" x2="7" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><line x1="5.2" y1="7.2" x2="8.8" y2="7.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  mat: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5C3 5 5 3 7 3C9 3 11 5 11 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><line x1="2" y1="7.5" x2="12" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M4 9.5H10L9.5 12H4.5L4 9.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>,
  reise: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/><ellipse cx="7" cy="7" rx="2.2" ry="5.5" stroke="currentColor" strokeWidth="1"/><line x1="1.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="0.8"/></svg>,
  hobby: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L8.2 5.5H12L8.9 7.8L10 11.3L7 9L4 11.3L5.1 7.8L2 5.5H5.8L7 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>,
  bil: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 9L4 5H10L11.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><rect x="2" y="9" width="10" height="3" rx="0.8" stroke="currentColor" strokeWidth="1.2"/><circle cx="4.5" cy="12" r="1" fill="currentColor"/><circle cx="9.5" cy="12" r="1" fill="currentColor"/></svg>,
  dyr: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1"/><circle cx="9" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1"/><path d="M4 8C4 6.5 5.2 5.5 7 5.5C8.8 5.5 10 6.5 10 8C10 10.5 8.5 12.5 7 12.5C5.5 12.5 4 10.5 4 8Z" stroke="currentColor" strokeWidth="1.2"/></svg>,
  klima: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M7 2V3.5M7 11.5V13M2 7.5H3.5M10.5 7.5H12M3.5 3.5L4.5 4.5M9.5 10.5L10.5 11.5M10.5 3.5L9.5 4.5M3.5 11.5L4.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  utdanning: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 5.5L7 3L12 5.5L7 8L2 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M4 6.5V10C4 10 5.2 11.5 7 11.5C8.8 11.5 10 10 10 10V6.5" stroke="currentColor" strokeWidth="1.2"/></svg>,
  vitenskap: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2V8L2.5 12H11.5L9 8V2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><line x1="4.5" y1="2" x2="9.5" y2="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="6.5" cy="10" r="0.7" fill="currentColor"/><circle cx="8.5" cy="9.5" r="0.5" fill="currentColor"/></svg>,
};

export default function Sidebar({ categoryTree, activeCategory }: SidebarProps) {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(activeCategory ? [activeCategory] : [])
  );

  const toggleCategory = (slug: string) => {
    const next = new Set(openCategories);
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    setOpenCategories(next);
  };

  const isActive = (href: string) => pathname === href;

  // Collect all slugs already placed in groups
  const placedSlugs = new Set(SIDEBAR_GROUPS.flatMap((g) => g.categories));

  // Find any categories from content not in any group
  const extraSlugs = Object.keys(categoryTree).filter((s) => !placedSlugs.has(s));

  // Build final groups, only including categories that have content
  const groups = SIDEBAR_GROUPS.map((group) => ({
    ...group,
    categories: group.categories
      .filter((catSlug) => categoryTree[catSlug])
      .map((catSlug) => ({ ...categoryTree[catSlug], slug: catSlug })),
  })).filter((g) => g.categories.length > 0);

  // Add extras to "Annet" if any
  if (extraSlugs.length > 0) {
    const annetGroup = groups.find((g) => g.label === 'Annet');
    const extras = extraSlugs
      .filter((catSlug) => categoryTree[catSlug])
      .map((catSlug) => ({ ...categoryTree[catSlug], slug: catSlug }));
    if (annetGroup) {
      annetGroup.categories.push(...extras);
    } else {
      groups.push({ label: 'Annet', categories: extras });
    }
  }

  return (
    <nav className="sidebar" aria-label="Innholdsfortegnelse">
      {groups.map((group) => (
        <div key={group.label} className="sidebar-group">
          <div className="sidebar-group-label">{group.label}</div>
          {group.categories.map((cat) => {
            const isOpen = openCategories.has(cat.slug);
            const hasArticles =
              cat.articles.length > 0 ||
              Object.values(cat.subcategories).some((s) => s.articles.length > 0);

            if (!hasArticles) return null;

            return (
              <div key={cat.slug} className="sidebar-section">
                <button
                  className={`sidebar-category ${isOpen ? 'open' : ''} ${activeCategory === cat.slug ? 'active-cat' : ''}`}
                  onClick={() => toggleCategory(cat.slug)}
                  aria-expanded={isOpen}
                >
                  <span className="sidebar-cat-inner">
                    <span className="sidebar-cat-icon">{catIcons[cat.slug] || null}</span>
                    {cat.label}
                  </span>
                  <span className="sidebar-chevron" aria-hidden="true">
                    {isOpen ? '▾' : '▸'}
                  </span>
                </button>
                {isOpen && (
                  <div className="sidebar-items">
                    {cat.articles.map((article) => {
                      const href = `/${article.slugPath.join('/')}`;
                      return (
                        <Link
                          key={article.slug}
                          href={href}
                          className={`sidebar-link ${isActive(href) ? 'active' : ''}`}
                        >
                          {article.title}
                        </Link>
                      );
                    })}
                    {Object.entries(cat.subcategories).map(([subSlug, sub]) => (
                      <div key={subSlug} className="sidebar-subcategory">
                        <div className="sidebar-sublabel">{sub.label}</div>
                        {sub.articles.map((article) => {
                          const href = `/${article.slugPath.join('/')}`;
                          return (
                            <Link
                              key={article.slug}
                              href={href}
                              className={`sidebar-link sidebar-link-sub ${isActive(href) ? 'active' : ''}`}
                            >
                              {article.title}
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
