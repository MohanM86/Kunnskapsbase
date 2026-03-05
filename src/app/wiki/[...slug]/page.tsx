import { redirect } from 'next/navigation';

// All /wiki/* traffic is redirected to /* via next.config.js (permanent 301).
// This component is a safety net for any request that slips through.
export default function WikiRedirect({ params }: { params: { slug: string[] } }) {
  redirect(`/${params.slug.join('/')}`);
}

export function generateStaticParams() {
  return []; // No static pages — all redirected
}
