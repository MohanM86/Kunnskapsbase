// src/lib/categories.ts
// Single source of truth for all categories.
// Legacy IT content stays at content/{domener,dns,epost,nettsider}/ → /wiki/{slug}/
// New content goes at content/{category}/{article}.md → /wiki/{category}/

export interface SubcategoryConfig {
  slug: string;
  label: string;
}

export interface CategoryConfig {
  slug: string;
  label: string;
  description: string;
  subcategories: SubcategoryConfig[];
}

export const CATEGORIES: CategoryConfig[] = [
  {
    slug: 'teknologi',
    label: 'Teknologi',
    description: 'Internett, domener, DNS, e-post, programmering og digitale tjenester.',
    subcategories: [
      { slug: 'internett', label: 'Internett' },
      { slug: 'programmering', label: 'Programmering' },
      { slug: 'sikkerhet', label: 'Sikkerhet' },
      { slug: 'maskinvare', label: 'Maskinvare' },
    ],
  },
  {
    slug: 'ai',
    label: 'AI',
    description: 'Kunstig intelligens, maskinlæring, store språkmodeller og automatisering.',
    subcategories: [
      { slug: 'maskinlaering', label: 'Maskinlæring' },
      { slug: 'spraakmodeller', label: 'Språkmodeller' },
      { slug: 'automatisering', label: 'Automatisering' },
    ],
  },
  {
    slug: 'oekonomi',
    label: 'Økonomi',
    description: 'Personlig økonomi, investering, næringsliv og makroøkonomi.',
    subcategories: [
      { slug: 'personlig-oekonomi', label: 'Personlig økonomi' },
      { slug: 'investering', label: 'Investering' },
      { slug: 'naeringsliv', label: 'Næringsliv' },
    ],
  },
  {
    slug: 'helse',
    label: 'Helse',
    description: 'Medisin, ernæring, mental helse, trening og velvære.',
    subcategories: [
      { slug: 'medisin', label: 'Medisin' },
      { slug: 'ernaering', label: 'Ernæring' },
      { slug: 'mental-helse', label: 'Mental helse' },
      { slug: 'trening', label: 'Trening' },
    ],
  },
  {
    slug: 'vitenskap',
    label: 'Vitenskap',
    description: 'Fysikk, biologi, kjemi, astronomi og vitenskapelig metode.',
    subcategories: [
      { slug: 'fysikk', label: 'Fysikk' },
      { slug: 'biologi', label: 'Biologi' },
      { slug: 'astronomi', label: 'Astronomi' },
      { slug: 'kjemi', label: 'Kjemi' },
    ],
  },
  {
    slug: 'historie',
    label: 'Historie',
    description: 'Verdenshistorie, norsk historie, biografier og historiske hendelser.',
    subcategories: [
      { slug: 'verdenshistorie', label: 'Verdenshistorie' },
      { slug: 'norsk-historie', label: 'Norsk historie' },
      { slug: 'antikken', label: 'Antikken' },
    ],
  },
  {
    slug: 'samfunn',
    label: 'Samfunn',
    description: 'Politikk, jus, sosiologi, miljø og samfunnsspørsmål.',
    subcategories: [
      { slug: 'politikk', label: 'Politikk' },
      { slug: 'jus', label: 'Jus' },
      { slug: 'miljoe', label: 'Miljø' },
    ],
  },
  {
    slug: 'utdanning',
    label: 'Utdanning',
    description: 'Skole, studieteknikk, karriere og livslang læring.',
    subcategories: [
      { slug: 'studieteknikk', label: 'Studieteknikk' },
      { slug: 'karriere', label: 'Karriere' },
      { slug: 'spraak', label: 'Språk' },
    ],
  },
  {
    slug: 'reise',
    label: 'Reise',
    description: 'Destinasjoner, reisetips, transport og reiseplanlegging.',
    subcategories: [
      { slug: 'destinasjoner', label: 'Destinasjoner' },
      { slug: 'reisetips', label: 'Reisetips' },
      { slug: 'transport', label: 'Transport' },
    ],
  },
  {
    slug: 'mat',
    label: 'Mat',
    description: 'Oppskrifter, råvarer, kosthold, matkultur og drikke.',
    subcategories: [
      { slug: 'oppskrifter', label: 'Oppskrifter' },
      { slug: 'kosthold', label: 'Kosthold' },
      { slug: 'matkultur', label: 'Matkultur' },
    ],
  },
];

// Legacy IT folders (backward compat — stay at /wiki/{slug}/)
export const LEGACY_IT_SLUGS = ['domener', 'dns', 'epost', 'nettsider'];

export const LEGACY_LABELS: Record<string, string> = {
  domener: 'Domener',
  dns: 'DNS',
  epost: 'E-post',
  nettsider: 'Nettsider',
};

// Fast label lookup for any folder slug
export const CATEGORY_LABEL: Record<string, string> = {
  ...Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.label])),
  ...LEGACY_LABELS,
};

export const SUBCATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.flatMap((c) => c.subcategories.map((s) => [s.slug, s.label]))
);
