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
      .map((catSlug) => ({ slug: catSlug, ...categoryTree[catSlug] })),
  })).filter((g) => g.categories.length > 0);

  // Add extras to "Annet" if any
  if (extraSlugs.length > 0) {
    const annetGroup = groups.find((g) => g.label === 'Annet');
    const extras = extraSlugs
      .filter((catSlug) => categoryTree[catSlug])
      .map((catSlug) => ({ slug: catSlug, ...categoryTree[catSlug] }));
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
