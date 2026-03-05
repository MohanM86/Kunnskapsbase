'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBox from '@/components/wiki/SearchBox';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">kunnskapsbase<span className="logo-tld">.no</span></span>
        </Link>

        <nav className="header-nav">
          <Link href="/wiki/domener">Domener</Link>
          <Link href="/wiki/dns">DNS</Link>
          <Link href="/wiki/epost">E-post</Link>
          <Link href="/wiki/nettsider">Nettsider</Link>
        </nav>

        <div className="header-search">
          <SearchBox compact />
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Åpne meny"
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          <Link href="/wiki/domener" onClick={() => setMenuOpen(false)}>Domener</Link>
          <Link href="/wiki/dns" onClick={() => setMenuOpen(false)}>DNS</Link>
          <Link href="/wiki/epost" onClick={() => setMenuOpen(false)}>E-post</Link>
          <Link href="/wiki/nettsider" onClick={() => setMenuOpen(false)}>Nettsider</Link>
          <div className="mobile-search">
            <SearchBox compact />
          </div>
        </div>
      )}
    </header>
  );
}
