import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta } from '@/lib/articles';
import JsonLd from '@/components/seo/JsonLd';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
const PAGE_URL = `${BASE_URL}/ordbok`;

export const metadata: Metadata = {
  title: 'Ordbok – Begreper fra A til Å',
  description: 'Komplett ordbok over alle begreper i kunnskapsbasen, sortert alfabetisk med definisjoner og aliaser.',
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Ordbok | Kunnskapsbase.no', description: 'Alle begreper fra A til Å.', url: PAGE_URL, images: [{ url: `${BASE_URL}/images/og-default.png`, width: 1200, height: 630 }] },
};

interface OrdEntry {
  title: string;
  href: string;
  description: string;
  entityType?: string;
  isAlias?: boolean;
  aliasOf?: string;
}

export default function OrdbokPage() {
  const allArticles = getAllArticlesMeta();

  // Build entries: one per article + one per alias
  const entries: OrdEntry[] = [];

  for (const article of allArticles) {
    entries.push({
      title: article.title,
      href: `/${article.slugPath.join('/')}`,
      description: article.description,
      entityType: article.entityType,
    });

    // Add aliases as separate entries
    if (article.aliases && article.aliases.length > 0) {
      for (const alias of article.aliases) {
        entries.push({
          title: alias,
          href: `/${article.slugPath.join('/')}`,
          description: article.description,
          entityType: article.entityType,
          isAlias: true,
          aliasOf: article.title,
        });
      }
    }
  }

  // Sort alphabetically (Norwegian locale)
  entries.sort((a, b) => a.title.localeCompare(b.title, 'nb'));

  // Group by first letter
  const groups: Record<string, OrdEntry[]> = {};
  for (const entry of entries) {
    const firstChar = entry.title.charAt(0).toUpperCase();
    const letter = /[A-ZÆØÅ]/.test(firstChar) ? firstChar : '#';
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(entry);
  }

  // Norwegian alphabet order
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ'.split('').map((l) => l.toUpperCase());
  const activeLetters = new Set(Object.keys(groups));

  const breadcrumbs = [{ label: 'Hjem', href: '/' }, { label: 'Ordbok', href: '/ordbok' }];
  const schemas = [
    buildCollectionPageSchema(PAGE_URL, 'Ordbok – Kunnskapsbase.no', 'Alle begreper fra A til Å', entries.length),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="static-page">
        <div className="static-page-header">
          <nav className="breadcrumbs" aria-label="Brødsmulesti">
            <ol>
              <li><Link href="/">Hjem</Link><span className="breadcrumb-sep" aria-hidden="true">›</span></li>
              <li><span aria-current="page">Ordbok</span></li>
            </ol>
          </nav>
          <h1>Ordbok</h1>
          <p>{entries.length} begreper og aliaser fra A til Å.</p>
        </div>

        {/* Alphabet navigation */}
        <nav className="ordbok-alpha-nav" aria-label="Alfabetnavigasjon">
          {alphabet.map((letter) => (
            activeLetters.has(letter) ? (
              <a key={letter} href={`#${letter}`} className="ordbok-alpha-link">{letter}</a>
            ) : (
              <span key={letter} className="ordbok-alpha-link" style={{ opacity: 0.3, cursor: 'default' }}>{letter}</span>
            )
          ))}
        </nav>

        {/* Grouped entries */}
        <div className="ordbok-groups">
          {alphabet.filter((l) => groups[l]).map((letter) => (
            <section key={letter} id={letter} className="ordbok-group">
              <h2 className="ordbok-letter">{letter}</h2>
              <div className="ordbok-list">
                {groups[letter].map((entry, i) => (
                  <div key={`${entry.title}-${i}`} className={`ordbok-entry ${entry.isAlias ? 'ordbok-alias' : ''}`}>
                    <Link href={entry.href} className="ordbok-term">
                      {entry.title}
                      {entry.entityType && <span className="ordbok-entity-type">{entry.entityType}</span>}
                    </Link>
                    <span className="ordbok-def">
                      {entry.isAlias ? (
                        <>→ Se <Link href={entry.href}>{entry.aliasOf}</Link></>
                      ) : (
                        entry.description
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Non-alphabetical entries */}
          {groups['#'] && (
            <section id="#" className="ordbok-group">
              <h2 className="ordbok-letter">#</h2>
              <div className="ordbok-list">
                {groups['#'].map((entry, i) => (
                  <div key={`${entry.title}-${i}`} className={`ordbok-entry ${entry.isAlias ? 'ordbok-alias' : ''}`}>
                    <Link href={entry.href} className="ordbok-term">
                      {entry.title}
                      {entry.entityType && <span className="ordbok-entity-type">{entry.entityType}</span>}
                    </Link>
                    <span className="ordbok-def">
                      {entry.isAlias ? (
                        <>→ Se <Link href={entry.href}>{entry.aliasOf}</Link></>
                      ) : (
                        entry.description
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
