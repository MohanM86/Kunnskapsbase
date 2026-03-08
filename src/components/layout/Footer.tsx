import Link from 'next/link';

function LogoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="20" height="20" rx="4" stroke="#4ade80" strokeWidth="1.5" />
      <path d="M6 8h6M6 11h10M6 14h8" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const CATEGORY_LINKS = [
  { href: '/teknologi', label: 'Teknologi' },
  { href: '/ai', label: 'AI' },
  { href: '/okonomi', label: 'Økonomi' },
  { href: '/helse', label: 'Helse' },
  { href: '/vitenskap', label: 'Vitenskap' },
];

const MORE_LINKS = [
  { href: '/historie', label: 'Historie' },
  { href: '/samfunn', label: 'Samfunn' },
  { href: '/utdanning', label: 'Utdanning' },
  { href: '/reise', label: 'Reise' },
  { href: '/mat', label: 'Mat' },
];

const EXPLORE_LINKS = [
  { href: '/kommune', label: 'Alle kommuner' },
  { href: '/tema', label: 'Tema' },
  { href: '/artikler', label: 'Alle artikler' },
  { href: '/ordbok', label: 'Ordbok' },
  { href: '/ai-index', label: 'AI-indeks' },
];

const MACHINE_LINKS = [
  { href: '/entity-index.json', label: 'entity-index.json', external: true },
  { href: '/rss.xml', label: 'RSS-feed', external: true },
  { href: '/llms.txt', label: 'llms.txt', external: true },
  { href: '/sitemap.xml', label: 'Sitemap', external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Accent bar */}
      <div className="footer-accent-bar" aria-hidden="true" />

      <div className="footer-inner">
        {/* Brand section */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <LogoIcon />
            <span className="footer-logo-text">
              kunnskapsbase<span className="footer-logo-tld">.no</span>
            </span>
          </Link>
          <p className="footer-tagline">
            Norsk kunnskapsbase for teknologi, AI, økonomi, helse, vitenskap og mer. 
            Åpen, strukturert og optimalisert for både mennesker og AI.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">CC BY 4.0</span>
            <span className="footer-badge">Norsk bokmål</span>
            <span className="footer-badge footer-badge-ai">AI-optimalisert</span>
          </div>
        </div>

        {/* Links sections */}
        <div className="footer-links">
          <div className="footer-col">
            <span className="footer-col-title">Kategorier</span>
            <ul className="footer-col-list">
              {CATEGORY_LINKS.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Mer</span>
            <ul className="footer-col-list">
              {MORE_LINKS.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Utforsk</span>
            <ul className="footer-col-list">
              {EXPLORE_LINKS.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">For maskiner</span>
            <ul className="footer-col-list">
              {MACHINE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-machine-link">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M4 1h7v7M11 1L5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {year} kunnskapsbase.no
          </p>
          <Link href="/personvern" className="footer-privacy-link">Personvern</Link>
          <p className="footer-license">
            Innhold lisensiert under <a href="https://creativecommons.org/licenses/by/4.0/deed.no" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
