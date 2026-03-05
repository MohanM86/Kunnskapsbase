'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
  slug: string;
  slugPath: string[];
  title: string;
  description: string;
  category: string;
}

interface SearchBoxProps {
  compact?: boolean;
  autoFocus?: boolean;
  initialQuery?: string;
  onResults?: (results: SearchResult[]) => void;
}

export default function SearchBox({ compact, autoFocus, initialQuery = '', onResults }: SearchBoxProps) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const search = useCallback(async (q: string) => {
    if (q.trim().length < 2) {
      setResults([]);
      if (onResults) onResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data.results || []);
      if (onResults) onResults(data.results || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [onResults]);

  useEffect(() => {
    const timer = setTimeout(() => {
      search(query);
    }, 250);
    return () => clearTimeout(timer);
  }, [query, search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      router.push(`/?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div ref={containerRef} className={`search-box ${compact ? 'compact' : ''}`}>
      <form onSubmit={handleSubmit} role="search">
        <div className="search-input-wrap">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={compact ? 'Søk...' : 'Søk i kunnskapsbasen...'}
            className="search-input"
            aria-label="Søk"
            aria-autocomplete="list"
            aria-expanded={isOpen && results.length > 0}
          />
          {loading && <span className="search-spinner">⟳</span>}
        </div>
      </form>

      {isOpen && results.length > 0 && compact && (
        <div className="search-dropdown" role="listbox">
          {results.slice(0, 5).map((r) => (
            <Link
              key={r.slug}
              href={`/wiki/${r.slugPath.join('/')}`}
              className="search-result-item"
              onClick={() => setIsOpen(false)}
              role="option"
            >
              <span className="result-title">{r.title}</span>
              <span className="result-cat">{r.category}</span>
            </Link>
          ))}
          {results.length > 5 && (
            <button
              className="search-see-all"
              onClick={() => {
                setIsOpen(false);
                router.push(`/?q=${encodeURIComponent(query)}`);
              }}
            >
              Se alle {results.length} resultater →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
