import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import CookieConsent from '@/components/CookieConsent';
import { buildWebSiteSchema } from '@/lib/schema';

const BASE_URL = 'https://kunnskapsbase.no';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: 'Kunnskapsbase – Domener, DNS, E-post og Nettsider', template: '%s | Kunnskapsbase.no' },
  description: 'Norsk kunnskapsbase for alt om domener, DNS, e-post og nettsider. Finn svar, veiledninger og tekniske guider.',
  icons: { icon: [{ url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }, { url: '/icon.svg', type: 'image/svg+xml' }], apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }] },
  openGraph: { type: 'website', locale: 'nb_NO', siteName: 'Kunnskapsbase.no', url: BASE_URL, images: [{ url: `${BASE_URL}/images/og-default.png`, width: 1200, height: 630, alt: 'Kunnskapsbase.no' }] },
  twitter: { card: 'summary_large_image', site: '@kunnskapsbase', images: [`${BASE_URL}/images/og-default.png`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  alternates: { canonical: BASE_URL, types: { 'application/rss+xml': `${BASE_URL}/rss.xml` } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head><JsonLd schema={buildWebSiteSchema()} /></head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C7P0F9X31J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
            gtag('config', 'G-C7P0F9X31J');
          `}
        </Script>
        <div className="page-wrapper"><Header /><main>{children}</main><Footer /></div>
        <CookieConsent />
      </body>
    </html>
  );
}
