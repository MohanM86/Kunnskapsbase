import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesMeta } from '@/lib/articles';
import JsonLd from '@/components/seo/JsonLd';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';
const PAGE_URL = `${BASE_URL}/ordbok`;

export const metadata: Metadata = {
  title: 'Ordbok',
  description: 'Alfabetisk oversikt over alle begreper, konsepter og protokoller i kunnskapsbasen med korte definisjoner.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Ordbok | Kunnskapsbase.no',
    description: 'Alfabetisk oversikt over alle begreper med definisjoner.',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/og-default.png`, width: 1200, height: 630 }],
  },
};

export default function OrdbokPage() {
  const articles = getAllArticlesMeta();

  // Build flat list of all terms (articles + aliases)
  type Term = { label: string; description: string; href: string; entityType?: string; isAlias?: boolean };
  const terms: Term[] = [];

  for (const a of articles) {
    const href = `/wiki/${a.slugPath.join('/')}`;
    terms.push({
      label: a.title,
      description: a.description,
      href,
      entityType: a.entityType,
    });
    for (const alias of a.aliases || []) {
      terms.push({ label: alias, description: `Se: ${a.title}`, href, isAlias: true });
    }
  }

  terms.sort((a, b) => a.label.localeCompare(b.label, 'nb'));

  // Group by first letter
  const groups: Record<string, Term[]> = {};
  for (const term of terms) {
    const letter = term.label[0].toUpperCase();
    const key = /[A-ZÆØÅ]/.test(letter) ? letter : '#';
    if (!groups[key]) groups[key] = [];
    groups[key].push(term);
  }

  const letters = Object.keys(groups).sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b, 'nb');
  });

  const breadcrumbs = [
    { label: 'Hjem', href: '/' },
    { label: 'Ordbok', href: '/ordbok' },
  ];
  const schemas = [
    buildCollectionPageSchema(PAGE_URL, 'Ordbok – Kunnskapsbase.no', 'Alfabetisk oversikt over alle begreper', terms.length),
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
          <p>{terms.length} begreper, sortert alfabetisk.</p>
        </div>

        <nav className="ordbok-alpha-nav" aria-label="Hopp til bokstav">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="ordbok-alpha-link">{l}</a>
          ))}
        </nav>

        <div className="ordbok-groups">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`} className="ordbok-group">
              <h2 className="ordbok-letter">{letter}</h2>
              <dl className="ordbok-list">
                {groups[letter].map((term, i) => (
                  <div key={i} className={`ordbok-entry ${term.isAlias ? 'ordbok-alias' : ''}`}>
                    <dt>
                      <Link href={term.href} className="ordbok-term">
                        {term.label}
                        {term.entityType && !term.isAlias && (
                          <span className="ordbok-entity-type">{term.entityType}</span>
                        )}
                      </Link>
                    </dt>
                    <dd className="ordbok-def">{term.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
