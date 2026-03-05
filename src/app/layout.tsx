import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { buildWebSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://kunnskapsbase.no'),
  title: {
    default: 'Kunnskapsbase – Domener, DNS, E-post og Nettsider',
    template: '%s | Kunnskapsbase.no',
  },
  description: 'Norsk kunnskapsbase for alt om domener, DNS, e-post og nettsider. Finn svar, veiledninger og tekniske guider.',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Kunnskapsbase.no',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kunnskapsbase',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://kunnskapsbase.no',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <JsonLd schema={buildWebSiteSchema()} />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
