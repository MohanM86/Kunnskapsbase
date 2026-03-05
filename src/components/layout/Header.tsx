'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import SearchBox from '@/components/wiki/SearchBox';

function LogoIcon() { return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="1" y="1" width="18" height="18" rx="3" stroke="#1d6a3a" strokeWidth="1.5"/><path d="M5 7h6M5 10h10M5 13h8" stroke="#1d6a3a" strokeWidth="1.5" strokeLinecap="round"/></svg>); }
function ChevronDown() { return (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>); }

const PRIMARY_NAV = [{ href: '/teknologi', label: 'Teknologi' }, { href: '/ai', label: 'AI' }, { href: '/oekonomi', label: 'Økonomi' }, { href: '/helse', label: 'Helse' }, { href: '/vitenskap', label: 'Vitenskap' }];
const MORE_CATS = [{ href: '/historie', label: 'Historie' }, { href: '/samfunn', label: 'Samfunn' }, { href: '/utdanning', label: 'Utdanning' }, { href: '/reise', label: 'Reise' }, { href: '/mat', label: 'Mat' }];
const UTILITY_NAV = [{ href: '/tema', label: 'Tema' }, { href: '/artikler', label: 'Artikler' }, { href: '/ordbok', label: 'Ordbok' }];
const ALL_CATS = [...PRIMARY_NAV, ...MORE_CATS];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo" onClick={close}><LogoIcon /><span className="logo-text">kunnskapsbase<span className="logo-tld">.no</span></span></Link>
        <nav className="header-nav" aria-label="Hovedmeny">
          {PRIMARY_NAV.map(({ href, label }) => (<Link key={href} href={href}>{label}</Link>))}
          <div className="header-dropdown" ref={dropRef}>
            <button className="header-dropdown-btn" onClick={() => setDropOpen(!dropOpen)} aria-expanded={dropOpen} aria-haspopup="true">Mer <ChevronDown /></button>
            {dropOpen && (<div className="header-dropdown-menu" role="menu">{MORE_CATS.map(({ href, label }) => (<Link key={href} href={href} role="menuitem" onClick={() => setDropOpen(false)}>{label}</Link>))}</div>)}
          </div>
          <span className="header-nav-divider" aria-hidden="true"/>
          {UTILITY_NAV.map(({ href, label }) => (<Link key={href} href={href} className="header-nav-secondary">{label}</Link>))}
          <Link href="/ai-index" className="header-nav-ai">AI-indeks</Link>
        </nav>
        <div className="header-search"><SearchBox compact /></div>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Åpne meny" aria-expanded={menuOpen}><span className={`hamburger ${menuOpen ? 'open' : ''}`}><span/><span/><span/></span></button>
      </div>
      {menuOpen && (
        <div className="mobile-nav" role="navigation" aria-label="Mobil meny">
          <div className="mobile-nav-section-label">Kategorier</div>
          {ALL_CATS.map(({ href, label }) => (<Link key={href} href={href} onClick={close}>{label}</Link>))}
          <div className="mobile-nav-divider"/>
          {UTILITY_NAV.map(({ href, label }) => (<Link key={href} href={href} onClick={close}>{label}</Link>))}
          <Link href="/ai-index" onClick={close}>AI-indeks</Link>
          <div className="mobile-search"><SearchBox compact /></div>
        </div>
      )}
    </header>
  );
}
