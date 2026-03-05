'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { TAXONOMY } from '@/lib/taxonomy';
import { CategoryIcon } from '@/components/icons/CategoryIcons';
import type { ArticleMeta } from '@/lib/types';

interface Props {
  articles: ArticleMeta[];
  activeCategorySlug?: string;
}

export default function Sidebar({ articles, activeCategorySlug }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState<Set<string>>(new Set(activeCategorySlug ? [activeCategorySlug] : []));

  const toggle = (slug: string) => {
    const next = new Set(open);
    next.has(slug) ? next.delete(slug) : next.add(slug);
    setOpen(next);
  };

  const byCategory = (catSlug: string) =>
    articles.filter(a => a.categorySlug === catSlug);

  return (
    <nav className="wiki-sidebar" aria-label="Innholdsnavigasjon">
      <div className="sidebar-section-label">Kategorier</div>
      {TAXONOMY.map(cat => {
        const isOpen = open.has(cat.slug);
        const catArticles = byCategory(cat.slug);

        return (
          <div key={cat.slug}>
            <button
              className={`sidebar-cat-btn ${isOpen ? 'open' : ''} ${activeCategorySlug === cat.slug ? 'active-cat' : ''}`}
              onClick={() => toggle(cat.slug)}
              aria-expanded={isOpen}
            >
              <span style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                <span className="sidebar-cat-icon">
                  <CategoryIcon name={cat.icon} size={16} />
                </span>
                {cat.label}
              </span>
              <svg className="sidebar-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {isOpen && (
              <div className="sidebar-items">
                {catArticles.length === 0
                  ? <span className="sidebar-link" style={{ opacity: 0.4, cursor: 'default' }}>Ingen artikler enda</span>
                  : catArticles.map(a => {
                      const href = `/${a.slugPath.join('/')}`;
                      return (
                        <Link key={a.slugPath.join('/')} href={href}
                          className={`sidebar-link ${pathname === href ? 'active' : ''}`}>
                          {a.title}
                        </Link>
                      );
                    })
                }
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
