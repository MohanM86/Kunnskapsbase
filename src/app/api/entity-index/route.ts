import { getEntityIndex } from '@/lib/articles';

export const dynamic = 'force-static';
export const revalidate = 3600;

export function GET() {
  const entities = getEntityIndex();
  const body = JSON.stringify({
    '$schema': 'https://kunnskapsbase.no/entity-index-schema.json',
    version: '1.0',
    site: 'https://kunnskapsbase.no',
    language: 'nb-NO',
    license: 'CC BY 4.0',
    description: 'Maskinlesbar entity-indeks for kunnskapsbase.no.',
    count: entities.length,
    entities,
  }, null, 2);

  return new Response(body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
