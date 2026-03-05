import type { Metadata } from 'next';
import Link from 'next/link';
import { TAXONOMY } from '@/lib/taxonomy';
import { getAllArticlesMeta } from '@/lib/articles';
import { CategoryIcon } from '@/components/icons/CategoryIcons';

export const metadata: Metadata = {
  title: 'Alle temaer',
  description: 'Utforsk alle temaer på Kunnskapsbase.no – fra teknologi og AI til helse, økonomi og vitenskap.',
};

export default function TemaPage() {
  const all = getAllArticlesMeta();
  const counts: Record<string, number> = {};
  for (const a of all) counts[a.categorySlug] = (counts[a.categorySlug] || 0) + 1;

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ marginBottom: '3rem', maxWidth: '560px' }}>
        <div className="hero-eyebrow" style={{ display: 'inline-flex', marginBottom: '1rem' }}>Alle temaer</div>
        <h1 className="display-md">Utforsk etter tema</h1>
        <p className="text-muted" style={{ marginTop: '0.75rem' }}>
          {TAXONOMY.length} hovedkategorier med underkategorier og artikler.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {TAXONOMY.map(cat => (
          <div key={cat.slug} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem 2rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div className={`cat-icon-wrap cat-color-${cat.color}`} style={{ width: 48, height: 48, flexShrink: 0 }}>
                <CategoryIcon name={cat.icon} size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <Link href={`/${cat.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>{cat.label}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{counts[cat.slug] || 0} artikler</span>
                </Link>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>{cat.description}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.subcategories.map(sub => (
                <Link key={sub.slug} href={`/${cat.slug}/${sub.slug}`} style={{
                  padding: '0.25rem 0.75rem',
                  background: 'var(--space-800)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-full)',
                  fontSize: '0.775rem',
                  color: 'var(--text-muted)',
                  transition: 'all var(--t)',
                }}>
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
