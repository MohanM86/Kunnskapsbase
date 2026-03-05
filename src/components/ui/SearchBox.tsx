'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Result { slugPath: string[]; title: string; description: string; category: string; categorySlug: string; }

export default function SearchBox({ compact }: { compact?: boolean }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fn = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const search = useCallback(async (val: string) => {
    if (val.trim().length < 2) { setResults([]); return; }
    setLoading(true);
    try {
      const r = await fetch(`/api/search?q=${encodeURIComponent(val)}`);
      const d = await r.json();
      setResults(d.results || []);
    } catch { setResults([]); } finally { setLoading(false); }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => search(q), 220);
    return () => clearTimeout(t);
  }, [q, search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) { setOpen(false); router.push(`/artikler?q=${encodeURIComponent(q)}`); }
  };

  if (compact) {
    return (
      <div ref={ref} className="search-box-compact" style={{ position: 'relative' }}>
        <button
          className="header-search-btn"
          onClick={() => { setOpen(!open); }}
          aria-label="Søk"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          Søk...
          <span className="kbd">⌘K</span>
        </button>
        {open && (
          <div className="search-dropdown" style={{ minWidth: 320 }}>
            <form onSubmit={handleSubmit}>
              <div style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>
                <div className="search-field">
                  <svg className="search-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <input autoFocus className="search-input" style={{ borderRadius: '8px', fontSize: '0.875rem' }} value={q} onChange={e => { setQ(e.target.value); }} placeholder="Søk i kunnskapsbasen..." />
                </div>
              </div>
            </form>
            {results.slice(0, 6).map(r => (
              <Link key={r.slugPath.join('/')} href={`/${r.slugPath.join('/')}`} className="search-result-item" onClick={() => setOpen(false)}>
                <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'2px' }}>
                  <span className="search-result-cat">{r.category}</span>
                  <span className="search-result-title">{r.title}</span>
                </div>
                <div className="search-result-meta">{r.description}</div>
              </Link>
            ))}
            {results.length > 6 && (
              <Link href={`/artikler?q=${encodeURIComponent(q)}`} className="search-see-all" onClick={() => setOpen(false)}>
                Se alle {results.length} resultater →
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit} role="search">
        <div className="search-field">
          <svg className="search-field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input
            className="search-input"
            type="search"
            value={q}
            onChange={e => { setQ(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            placeholder="Søk etter begreper, temaer, artikler..."
            aria-label="Søk"
          />
        </div>
      </form>
      {open && results.length > 0 && (
        <div className="search-dropdown">
          {results.slice(0, 6).map(r => (
            <Link key={r.slugPath.join('/')} href={`/${r.slugPath.join('/')}`} className="search-result-item" onClick={() => { setOpen(false); setQ(''); }}>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'2px' }}>
                <span className="search-result-cat">{r.category}</span>
                <span className="search-result-title">{r.title}</span>
              </div>
              <div className="search-result-meta">{r.description}</div>
            </Link>
          ))}
          {results.length > 6 && (
            <Link href={`/artikler?q=${encodeURIComponent(q)}`} className="search-see-all" onClick={() => setOpen(false)}>
              Se alle {results.length} resultater →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
