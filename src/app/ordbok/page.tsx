import type { Metadata } from 'next';
import { getAllArticlesMeta } from '@/lib/articles';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ordbok',
  description: 'Definisjoner av begreper og fagtermer fra alle kategorier på Kunnskapsbase.no.',
};

export default function OrdbokPage() {
  const articles = getAllArticlesMeta();

  // Sort alphabetically by title
  const sorted = [...articles].sort((a, b) => a.title.localeCompare(b.title, 'nb'));

  // Group by first letter
  const groups: Record<string, typeof sorted> = {};
  for (const a of sorted) {
    const letter = a.title[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(a);
  }

  const letters = Object.keys(groups).sort();

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 className="display-md">Ordbok</h1>
        <p className="text-muted" style={{ marginTop: '0.5rem' }}>
          Definisjoner av begreper fra alle kategorier
        </p>
      </div>

      {/* Letter navigation */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
        {letters.map(l => (
          <a key={l} href={`#${l}`} style={{
            width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)',
            fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)',
            transition: 'all var(--t)',
          }}>{l}</a>
        ))}
      </div>

      {letters.map(letter => (
        <section key={letter} id={letter} style={{ marginBottom: '2rem' }}>
          <div style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--cyan-400)',
            padding: '0.5rem 0', borderBottom: '1px solid var(--border)', marginBottom: '1rem',
          }}>{letter}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {groups[letter].map(a => (
              <Link key={a.slugPath.join('/')} href={`/${a.slugPath.join('/')}`} style={{
                display: 'grid', gridTemplateColumns: '1fr auto',
                padding: '0.75rem 1rem', background: 'var(--bg-card)',
                border: '1px solid var(--border)', borderRadius: 'var(--r)',
                transition: 'all var(--t)', textDecoration: 'none', color: 'inherit', gap: '1rem',
              }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{a.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{a.description}</div>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--cyan-400)', fontWeight: 600, alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>{a.category}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
