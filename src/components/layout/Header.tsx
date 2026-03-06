'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import SearchBox from '@/components/wiki/SearchBox';

function LogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="18" height="18" rx="3" stroke="#1d6a3a" strokeWidth="1.5" />
      <path d="M5 7h6M5 10h10M5 13h8" stroke="#1d6a3a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PRIMARY_NAV = [
  { href: '/teknologi', label: 'Teknologi' },
  { href: '/ai', label: 'AI' },
  { href: '/oekonomi', label: 'Økonomi' },
  { href: '/helse', label: 'Helse' },
  { href: '/vitenskap', label: 'Vitenskap' },
];

const MEGA_MENU_CATS = [
  { href: '/historie', label: 'Historie', desc: 'Verdenshistorie og norsk historie' },
  { href: '/samfunn', label: 'Samfunn', desc: 'Politikk, jus og rettigheter' },
  { href: '/utdanning', label: 'Utdanning', desc: 'Skole, studier og karriere' },
  { href: '/reise', label: 'Reise', desc: 'Destinasjoner og reisetips' },
  { href: '/mat', label: 'Mat', desc: 'Kosthold og matkultur' },
  { href: '/bil', label: 'Bil', desc: 'Elbil, forsikring og vedlikehold' },
  { href: '/dyr', label: 'Dyr', desc: 'Kjæledyr og dyrevelferd' },
  { href: '/jus', label: 'Jus', desc: 'Lover og rettigheter' },
  { href: '/klima', label: 'Klima', desc: 'Klimaendringer og energi' },
  { href: '/hobby', label: 'Hobby', desc: 'Fritid og kreativitet' },
];

const SYSTEM_NAV = [
  { href: '/tema', label: 'Tema' },
  { href: '/artikler', label: 'Artikler' },
  { href: '/ordbok', label: 'Ordbok' },
];

const ALL_CATS = [...PRIMARY_NAV, ...MEGA_MENU_CATS];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="site-logo" onClick={close}>
          <LogoIcon />
          <span className="logo-text">
            kunnskapsbase<span className="logo-tld">.no</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="header-nav" aria-label="Hovedmeny">
          {/* Left group: categories */}
          <div className="header-nav-left">
            {PRIMARY_NAV.map(({ href, label }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}

            {/* Mega menu trigger */}
            <div
              className="header-mega-wrap"
              ref={megaRef}
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <button
                className="header-mega-btn"
                onClick={() => setMegaOpen(!megaOpen)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                aria-label="Flere kategorier"
              >
                Mer <ChevronDown />
              </button>

              {megaOpen && (
                <div className="header-mega-menu" role="menu">
                  <div className="mega-menu-grid">
                    {MEGA_MENU_CATS.map(({ href, label, desc }) => (
                      <Link
                        key={href}
                        href={href}
                        className="mega-menu-item"
                        role="menuitem"
                        onClick={() => setMegaOpen(false)}
                      >
                        <span className="mega-menu-label">{label}</span>
                        <span className="mega-menu-desc">{desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mega-menu-footer">
                    <Link href="/tema" onClick={() => setMegaOpen(false)}>
                      Se alle kategorier →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <span className="header-nav-divider" aria-hidden="true" />

          {/* Right group: system nav */}
          <div className="header-nav-right">
            {SYSTEM_NAV.map(({ href, label }) => (
              <Link key={href} href={href} className="header-nav-secondary">{label}</Link>
            ))}
            <Link href="/ai-index" className="header-nav-ai">AI-indeks</Link>
          </div>
        </nav>

        {/* Search */}
        <div className="header-search">
          <SearchBox compact />
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="mobile-nav" role="navigation" aria-label="Mobil meny">
          <div className="mobile-nav-section-label">Kategorier</div>
          {ALL_CATS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close}>{label}</Link>
          ))}
          <div className="mobile-nav-divider" />
          <div className="mobile-nav-section-label">Utforsk</div>
          {SYSTEM_NAV.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close}>{label}</Link>
          ))}
          <Link href="/ai-index" onClick={close}>AI-indeks</Link>
          <div className="mobile-nav-divider" />
          <div className="mobile-search">
            <SearchBox compact />
          </div>
        </div>
      )}
    </header>
  );
}
