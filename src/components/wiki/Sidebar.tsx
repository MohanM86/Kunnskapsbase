'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { CategoryTree } from '@/lib/types';

interface SidebarProps {
  categoryTree: CategoryTree;
  activeCategory?: string;
}

export default function Sidebar({ categoryTree, activeCategory }: SidebarProps) {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(activeCategory ? [activeCategory] : [])
  );

  const toggleCategory = (slug: string) => {
    const next = new Set(openCategories);
    if (next.has(slug)) {
      next.delete(slug);
    } else {
      next.add(slug);
    }
    setOpenCategories(next);
  };

  const isActive = (href: string) => pathname === href;

  const categoryOrder = ['domener', 'dns', 'epost', 'nettsider'];
  const sortedCategories = categoryOrder
    .filter((k) => categoryTree[k])
    .map((k) => [k, categoryTree[k]] as const);

  const categoryIcons: Record<string, string> = {
    domener: '🌐',
    dns: '🔧',
    epost: '✉️',
    nettsider: '💻',
  };

  return (
    <nav className="sidebar" aria-label="Innholdsfortegnelse">
      <div className="sidebar-title">Innhold</div>
      {sortedCategories.map(([catSlug, cat]) => {
        const isOpen = openCategories.has(catSlug);
        const hasSubcats = Object.keys(cat.subcategories).length > 0;

        return (
          <div key={catSlug} className="sidebar-section">
            <button
              className={`sidebar-category ${isOpen ? 'open' : ''} ${activeCategory === catSlug ? 'active-cat' : ''}`}
              onClick={() => toggleCategory(catSlug)}
              aria-expanded={isOpen}
            >
              <span>{categoryIcons[catSlug] || '📄'} {cat.label}</span>
              <span className="sidebar-chevron">{isOpen ? '▾' : '▸'}</span>
            </button>

            {isOpen && (
              <div className="sidebar-items">
                {/* Direct category articles */}
                {cat.articles.map((article) => {
                  const href = `/wiki/${article.slugPath.join('/')}`;
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

                {/* Subcategories */}
                {Object.entries(cat.subcategories).map(([subSlug, sub]) => (
                  <div key={subSlug} className="sidebar-subcategory">
                    <div className="sidebar-sublabel">{sub.label}</div>
                    {sub.articles.map((article) => {
                      const href = `/wiki/${article.slugPath.join('/')}`;
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
    </nav>
  );
}
