import Link from 'next/link';

function LogoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5"/>
      <path d="M5 7h6M5 10h10M5 13h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="site-logo">
            <LogoIcon />
            <span className="logo-text">kunnskapsbase<span className="logo-tld">.no</span></span>
          </Link>
          <p>Norsk kunnskapsbase for domener, DNS, e-post og nettsider.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Kategorier</h4>
            <Link href="/wiki/domener">Domener</Link>
            <Link href="/wiki/dns">DNS</Link>
            <Link href="/wiki/epost">E-post</Link>
            <Link href="/wiki/nettsider">Nettsider</Link>
          </div>
          <div>
            <h4>Utforsk</h4>
            <Link href="/tema">Tema</Link>
            <Link href="/artikler">Alle artikler</Link>
            <Link href="/ordbok">Ordbok</Link>
            <Link href="/ai-index">AI-indeks</Link>
          </div>
          <div>
            <h4>For maskiner</h4>
            <a href="/entity-index.json">entity-index.json</a>
            <a href="/rss.xml">RSS-feed</a>
            <a href="/llms.txt">llms.txt</a>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
          <div>
            <h4>Nettsted</h4>
            <Link href="/robots.txt">Robots.txt</Link>
            <Link href="/admin">CMS</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} kunnskapsbase.no – Innhold under CC BY 4.0</p>
      </div>
    </footer>
  );
}
