'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { CategoryTree } from '@/lib/types';

interface SidebarProps {
  categoryTree: CategoryTree;
  activeCategory?: string;
}

const catIcons: Record<string, React.ReactNode> = {
  domener: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
      <ellipse cx="7" cy="7" rx="2" ry="5.5" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="1.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  dns: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="1" y="8" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="11" cy="4" r="0.8" fill="currentColor"/>
      <circle cx="11" cy="10" r="0.8" fill="currentColor"/>
    </svg>
  ),
  epost: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="3" width="12" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.2"/>
      <polyline points="1,3 7,8.5 13,3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
  nettsider: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="1" y1="4.5" x2="13" y2="4.5" stroke="currentColor" strokeWidth="1"/>
      <circle cx="3" cy="3" r="0.6" fill="currentColor"/>
      <circle cx="5" cy="3" r="0.6" fill="currentColor"/>
      <line x1="5.5" y1="13" x2="8.5" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="7" y1="10.5" x2="7" y2="13" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
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
  const categoryOrder = ['domener', 'dns', 'epost', 'nettsider'];
  const sortedCategories = categoryOrder.filter((k) => categoryTree[k]).map((k) => [k, categoryTree[k]] as const);

  return (
    <nav className="sidebar" aria-label="Innholdsfortegnelse">
      <div className="sidebar-title">Innhold</div>
      {sortedCategories.map(([catSlug, cat]) => {
        const isOpen = openCategories.has(catSlug);
        return (
          <div key={catSlug} className="sidebar-section">
            <button
              className={`sidebar-category ${isOpen ? 'open' : ''} ${activeCategory === catSlug ? 'active-cat' : ''}`}
              onClick={() => toggleCategory(catSlug)}
              aria-expanded={isOpen}
            >
              <span className="sidebar-cat-inner">
                <span className="sidebar-cat-icon">{catIcons[catSlug]}</span>
                {cat.label}
              </span>
              <span className="sidebar-chevron" aria-hidden="true">{isOpen ? '▾' : '▸'}</span>
            </button>
            {isOpen && (
              <div className="sidebar-items">
                {cat.articles.map((article) => {
                  const href = `/wiki/${article.slugPath.join('/')}`;
                  return (
                    <Link key={article.slug} href={href} className={`sidebar-link ${isActive(href) ? 'active' : ''}`}>
                      {article.title}
                    </Link>
                  );
                })}
                {Object.entries(cat.subcategories).map(([subSlug, sub]) => (
                  <div key={subSlug} className="sidebar-subcategory">
                    <div className="sidebar-sublabel">{sub.label}</div>
                    {sub.articles.map((article) => {
                      const href = `/wiki/${article.slugPath.join('/')}`;
                      return (
                        <Link key={article.slug} href={href} className={`sidebar-link sidebar-link-sub ${isActive(href) ? 'active' : ''}`}>
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
    </nav>
  );
}
