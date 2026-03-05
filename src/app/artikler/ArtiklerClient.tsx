'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { ArticleMeta } from '@/lib/types';

const CATEGORIES = ['Alle', 'Domener', 'DNS', 'E-post', 'Nettsider'];

interface Props {
  articles: ArticleMeta[];
}

export default function ArtiklerClient({ articles }: Props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Alle');

  // Read URL params on mount
  useEffect(() => {
    const kat = searchParams.get('kategori');
    const tema = searchParams.get('tema');
    if (kat) setActiveCategory(kat);
    if (tema) setQuery(tema);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const catMatch = activeCategory === 'Alle' || a.category === activeCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        (a.topic?.toLowerCase().includes(q)) ||
        (a.tags || []).some((t) => t.toLowerCase().includes(q)) ||
        (a.aliases || []).some((al) => al.toLowerCase().includes(q))
      );
    });
  }, [articles, query, activeCategory]);

  const date = (d: string) =>
    new Date(d).toLocaleDateString('nb-NO', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className="artikler-layout">
      <div className="artikler-controls">
        <div className="artikler-search-wrap">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrer artikler…"
            className="artikler-search"
            aria-label="Søk i artikler"
          />
          {query && (
            <button className="artikler-clear" onClick={() => setQuery('')} aria-label="Tøm søk">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="3" y1="3" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="11" y1="3" x2="3" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>
        <div className="artikler-cats" role="group" aria-label="Filtrer på kategori">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`artikler-cat-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="artikler-count">
        {filtered.length} {filtered.length === 1 ? 'artikkel' : 'artikler'}
        {(query || activeCategory !== 'Alle') && (
          <button className="artikler-reset" onClick={() => { setQuery(''); setActiveCategory('Alle'); }}>
            Nullstill filter
          </button>
        )}
      </div>

      <div className="artikler-list">
        {filtered.length === 0 ? (
          <div className="artikler-empty">Ingen artikler matcher søket.</div>
        ) : (
          filtered.map((a) => (
            <Link key={a.slug} href={`/wiki/${a.slugPath.join('/')}`} className="artikler-row">
              <div className="artikler-row-main">
                <span className="artikler-row-title">{a.title}</span>
                <span className="artikler-row-desc">{a.description}</span>
              </div>
              <div className="artikler-row-meta">
                <span className="artikler-row-cat">{a.category}</span>
                {a.topic && <span className="artikler-row-topic">{a.topic}</span>}
                <time className="artikler-row-date" dateTime={a.updatedAt}>{date(a.updatedAt)}</time>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
