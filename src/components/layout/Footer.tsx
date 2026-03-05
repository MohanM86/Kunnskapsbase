import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="site-logo">
            <span className="logo-icon">📚</span>
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
            <h4>Ressurser</h4>
            <Link href="/sitemap.xml">Sitemap</Link>
            <Link href="/robots.txt">Robots.txt</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} kunnskapsbase.no – Innhold under CC BY 4.0</p>
      </div>
    </footer>
  );
}
