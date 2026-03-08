'use client';
import { useState, useEffect } from 'react';
export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) { setShowBanner(true); } else if (consent === 'accepted') { grantConsent(); }
  }, []);
  function grantConsent() {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  }
  function handleAccept() { localStorage.setItem('cookie-consent', 'accepted'); grantConsent(); setShowBanner(false); }
  function handleDecline() { localStorage.setItem('cookie-consent', 'declined'); setShowBanner(false); }
  if (!showBanner) return null;
  return (<div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: '#111111', borderTop: '1px solid #222', color: '#a0a0a0', padding: '1rem 1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.875rem', lineHeight: '1.5' }}><p style={{ margin: 0, maxWidth: '720px' }}>Vi bruker informasjonskapsler for å analysere trafikk og forbedre innholdet vårt. Du kan lese mer i vår <a href="/personvern" style={{ color: '#4ade80', textDecoration: 'underline' }}>personvernerklæring</a>.</p><div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}><button onClick={handleDecline} style={{ padding: '0.5rem 1.25rem', border: '1px solid #333', borderRadius: '6px', background: 'transparent', color: '#a0a0a0', cursor: 'pointer', fontSize: '0.85rem' }}>Avslå</button><button onClick={handleAccept} style={{ padding: '0.5rem 1.25rem', border: 'none', borderRadius: '6px', background: '#4ade80', color: '#111111', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>Godta</button></div></div>);
}
