import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { getAllArticlesMeta } from '@/lib/articles';
import JsonLd from '@/components/seo/JsonLd';
import { buildCollectionPageSchema, buildBreadcrumbSchema } from '@/lib/schema';
import ArtiklerClient from './ArtiklerClient';

const BASE_URL = 'https://kunnskapsbase.no';
const PAGE_URL = `${BASE_URL}/artikler`;

export const metadata: Metadata = {
  title: 'Alle artikler',
  description: 'Komplett liste over alle artikler i kunnskapsbasen. Filtrer på kategori eller søk etter emne.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Alle artikler | Kunnskapsbase.no',
    description: 'Komplett liste over alle artikler i kunnskapsbasen.',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/og-default.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alle artikler | Kunnskapsbase.no',
    description: 'Komplett liste over alle artikler i kunnskapsbasen.',
  },
};

export default function ArtiklerPage() {
  const articles = getAllArticlesMeta();
  const breadcrumbs = [
    { label: 'Hjem', href: '/' },
    { label: 'Artikler', href: '/artikler' },
  ];
  const schemas = [
    buildCollectionPageSchema(PAGE_URL, 'Alle artikler – Kunnskapsbase.no', 'Komplett artikkelliste med filter', articles.length),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="static-page">
        <div className="static-page-header">
          <nav className="breadcrumbs" aria-label="Brødsmulesti">
            <ol>
              <li><Link href="/">Hjem</Link><span className="breadcrumb-sep" aria-hidden="true">›</span></li>
              <li><span aria-current="page">Artikler</span></li>
            </ol>
          </nav>
          <h1>Alle artikler</h1>
          <p>{articles.length} artikler i kunnskapsbasen.</p>
        </div>
        <Suspense fallback={<div className="artikler-loading">Laster artikler…</div>}>
          <ArtiklerClient articles={articles} />
        </Suspense>
      </div>
    </>
  );
}
