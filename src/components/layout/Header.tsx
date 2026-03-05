'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBox from '@/components/wiki/SearchBox';

function LogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="18" height="18" rx="3" stroke="#1d6a3a" strokeWidth="1.5"/>
      <path d="M5 7h6M5 10h10M5 13h8" stroke="#1d6a3a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const NAV_LINKS = [
  { href: '/wiki/domener', label: 'Domener' },
  { href: '/wiki/dns',     label: 'DNS' },
  { href: '/wiki/epost',   label: 'E-post' },
  { href: '/wiki/nettsider', label: 'Nettsider' },
];

const SECONDARY_LINKS = [
  { href: '/tema',     label: 'Tema' },
  { href: '/artikler', label: 'Artikler' },
  { href: '/ordbok',   label: 'Ordbok' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo" onClick={close}>
          <LogoIcon />
          <span className="logo-text">kunnskapsbase<span className="logo-tld">.no</span></span>
        </Link>

        <nav className="header-nav" aria-label="Hovedmeny">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <span className="header-nav-divider" aria-hidden="true"/>
          {SECONDARY_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="header-nav-secondary">{label}</Link>
          ))}
          <Link href="/ai-index" className="header-nav-ai">AI-indeks</Link>
        </nav>

        <div className="header-search">
          <SearchBox compact />
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Åpne meny"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span/><span/><span/>
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav" role="navigation" aria-label="Mobil meny">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close}>{label}</Link>
          ))}
          <div className="mobile-nav-divider"/>
          {SECONDARY_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close}>{label}</Link>
          ))}
          <Link href="/ai-index" onClick={close}>AI-indeks</Link>
          <div className="mobile-search">
            <SearchBox compact />
          </div>
        </div>
      )}
    </header>
  );
}
