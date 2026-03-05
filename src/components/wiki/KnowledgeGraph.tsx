import Link from 'next/link';
import type { ArticleMeta } from '@/lib/types';

interface KnowledgeGraphProps {
  related: ArticleMeta[];
  seeAlso: ArticleMeta[];
  sameTopic: ArticleMeta[];
}

export default function KnowledgeGraph({ related, seeAlso, sameTopic }: KnowledgeGraphProps) {
  const hasAny = related.length > 0 || seeAlso.length > 0 || sameTopic.length > 0;
  if (!hasAny) return null;

  return (
    <aside className="knowledge-graph" aria-label="Kunnskapsnettverk">
      <div className="kg-header">
        <svg className="kg-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="2.5" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="13.5" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="2.5" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="13.5" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
          <line x1="5.5" y1="6.5" x2="3.8" y2="4.8" stroke="currentColor" strokeWidth="1"/>
          <line x1="10.5" y1="6.5" x2="12.2" y2="4.8" stroke="currentColor" strokeWidth="1"/>
          <line x1="5.5" y1="9.5" x2="3.8" y2="11.2" stroke="currentColor" strokeWidth="1"/>
          <line x1="10.5" y1="9.5" x2="12.2" y2="11.2" stroke="currentColor" strokeWidth="1"/>
        </svg>
        <span>Kunnskapsnettverk</span>
      </div>
      <div className="kg-sections">
        {related.length > 0 && (
          <div className="kg-section">
            <div className="kg-section-label">Relaterte begreper</div>
            <div className="kg-links">
              {related.map((a) => (
                <Link key={a.slug} href={`/wiki/${a.slugPath.join('/')}`} className="kg-link kg-link-related">
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        {seeAlso.length > 0 && (
          <div className="kg-section">
            <div className="kg-section-label">Se også</div>
            <div className="kg-links">
              {seeAlso.map((a) => (
                <Link key={a.slug} href={`/wiki/${a.slugPath.join('/')}`} className="kg-link kg-link-seealso">
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        {sameTopic.length > 0 && (
          <div className="kg-section">
            <div className="kg-section-label">I samme tema</div>
            <div className="kg-links">
              {sameTopic.map((a) => (
                <Link key={a.slug} href={`/wiki/${a.slugPath.join('/')}`} className="kg-link kg-link-topic">
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
