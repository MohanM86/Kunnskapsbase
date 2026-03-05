import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { organizationSchema, webSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://kunnskapsbase.no'),
  title: {
    default: 'Kunnskapsbase.no – Norges kunnskapsplattform',
    template: '%s | Kunnskapsbase.no',
  },
  description: 'Kunnskapsbase.no forklarer verden på norsk. Dyptgående artikler om teknologi, AI, økonomi, helse, vitenskap og mer.',
  keywords: ['kunnskapsbase', 'norsk', 'forklaring', 'læring', 'teknologi', 'vitenskap'],
  authors: [{ name: 'Kunnskapsbase.no' }],
  creator: 'Kunnskapsbase.no',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://kunnskapsbase.no',
    siteName: 'Kunnskapsbase.no',
    title: 'Kunnskapsbase.no – Norges kunnskapsplattform',
    description: 'Forklarer verden på norsk. Dyptgående artikler om teknologi, AI, økonomi, helse og mer.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Kunnskapsbase.no' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kunnskapsbase',
    creator: '@kunnskapsbase',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://kunnskapsbase.no' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Kunnskapsbase.no RSS" href="/api/rss" />
        <JsonLd schema={[organizationSchema, webSiteSchema]} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
