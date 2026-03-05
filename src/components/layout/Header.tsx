'use client';
import Link from 'next/link';
import { useState } from 'react';
import SearchBox from '@/components/ui/SearchBox';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="site-logo">
            <div className="logo-mark">K</div>
            <span className="logo-text">kunnskapsbase<span className="logo-tld">.no</span></span>
          </Link>

          <nav className="header-nav" aria-label="Primærnavigasjon">
            <Link href="/tema">Temaer</Link>
            <Link href="/artikler">Artikler</Link>
            <Link href="/ordbok">Ordbok</Link>
            <Link href="/om">Om</Link>
          </nav>

          <div className="header-actions">
            <SearchBox compact />
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)} aria-label="Åpne meny">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} aria-label="Mobilnavigasjon">
        <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>✕</button>
        <div className="mobile-nav-links">
          <Link href="/" onClick={() => setMenuOpen(false)}>Hjem</Link>
          <Link href="/tema" onClick={() => setMenuOpen(false)}>Temaer</Link>
          <Link href="/artikler" onClick={() => setMenuOpen(false)}>Alle artikler</Link>
          <Link href="/ordbok" onClick={() => setMenuOpen(false)}>Ordbok</Link>
          <Link href="/om" onClick={() => setMenuOpen(false)}>Om prosjektet</Link>
        </div>
      </nav>
    </>
  );
}
