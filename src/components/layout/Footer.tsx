import Link from 'next/link';
import { TAXONOMY } from '@/lib/taxonomy';

export default function Footer() {
  const cats = TAXONOMY.map(c => c.slug);
  const left = cats.slice(0, 5);
  const right = cats.slice(5);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="site-logo">
              <div className="logo-mark">K</div>
              <span className="logo-text">kunnskapsbase<span className="logo-tld">.no</span></span>
            </Link>
            <p>Norges største kunnskapsbase. Forklarer verden på norsk – for nysgjerrige mennesker.</p>
          </div>

          <div className="footer-col">
            <h4>Kategorier</h4>
            {left.map(s => (
              <Link key={s} href={`/${s}`}>{TAXONOMY.find(c=>c.slug===s)?.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Mer</h4>
            {right.map(s => (
              <Link key={s} href={`/${s}`}>{TAXONOMY.find(c=>c.slug===s)?.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Nettstedet</h4>
            <Link href="/tema">Alle temaer</Link>
            <Link href="/artikler">Alle artikler</Link>
            <Link href="/ordbok">Ordbok</Link>
            <Link href="/om">Om prosjektet</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} kunnskapsbase.no — Innhold under CC BY 4.0</span>
          <span>Bygget for Google, AI og nysgjerrige mennesker</span>
        </div>
      </div>
    </footer>
  );
}
