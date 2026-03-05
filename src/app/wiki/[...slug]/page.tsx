import { redirect } from 'next/navigation';
export default function WikiRedirect({ params }: { params: { slug: string[] } }) { redirect(`/${params.slug.join('/')}`); }
export function generateStaticParams() { return []; }