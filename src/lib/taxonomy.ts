// ============================================================
// TAXONOMY – Single source of truth for all categories
// Add new categories/subcategories here as the site grows
// ============================================================

export interface TaxonomyCategory {
  slug: string;
  label: string;
  description: string;
  icon: string;        // maps to CategoryIcon component
  color: string;       // CSS custom property suffix
  subcategories: TaxonomySubcategory[];
}

export interface TaxonomySubcategory {
  slug: string;
  label: string;
  description: string;
}

export const TAXONOMY: TaxonomyCategory[] = [
  {
    slug: 'teknologi',
    label: 'Teknologi',
    description: 'Internett, programvare, datasikkerhet, hosting og alt som driver den digitale verden.',
    icon: 'IconTechnology',
    color: 'cyan',
    subcategories: [
      { slug: 'internett', label: 'Internett', description: 'Protokoller, DNS, domener og internettets infrastruktur' },
      { slug: 'programvare', label: 'Programvare', description: 'Applikasjoner, operativsystemer og programmeringsverktøy' },
      { slug: 'datasikkerhet', label: 'Datasikkerhet', description: 'Kryptering, hacking, personvern og cybersikkerhet' },
      { slug: 'hosting', label: 'Hosting', description: 'Webhotell, sky-tjenester og serverinfrastruktur' },
      { slug: 'hardware', label: 'Hardware', description: 'Prosessorer, minnebrikker og fysiske komponenter' },
    ],
  },
  {
    slug: 'ai',
    label: 'AI',
    description: 'Kunstig intelligens, maskinlæring, store språkmodeller og fremtidens teknologi.',
    icon: 'IconAI',
    color: 'purple',
    subcategories: [
      { slug: 'maskinlaering', label: 'Maskinlæring', description: 'Nevrale nettverk, treningsdata og algoritmer' },
      { slug: 'sprakmodeller', label: 'Språkmodeller', description: 'GPT, Claude, Gemini og store språkmodeller' },
      { slug: 'bildegjenkjenning', label: 'Bildegjenkjenning', description: 'Computer vision og bildegenerering' },
      { slug: 'robotikk', label: 'Robotikk', description: 'Autonome systemer og menneskelig-robot-interaksjon' },
      { slug: 'etikk', label: 'AI-etikk', description: 'Ansvarlig AI, bias og samfunnsmessige konsekvenser' },
    ],
  },
  {
    slug: 'okonomi',
    label: 'Økonomi',
    description: 'Aksjer, investering, bank, skatt og personlig økonomi på norsk.',
    icon: 'IconEconomy',
    color: 'green',
    subcategories: [
      { slug: 'aksjer', label: 'Aksjer', description: 'Aksjemarkedet, børs og aksjehandel' },
      { slug: 'investering', label: 'Investering', description: 'Fond, ETF, eiendom og langsiktig sparing' },
      { slug: 'bank', label: 'Bank', description: 'Lån, renter, konto og banktjenester' },
      { slug: 'skatt', label: 'Skatt', description: 'Norsk skattesystem, fradrag og selvangivelse' },
      { slug: 'krypto', label: 'Krypto', description: 'Bitcoin, Ethereum og desentralisert finans' },
    ],
  },
  {
    slug: 'helse',
    label: 'Helse',
    description: 'Søvn, trening, ernæring, mental helse og evidensbasert helsevitenskap.',
    icon: 'IconHealth',
    color: 'emerald',
    subcategories: [
      { slug: 'sovn', label: 'Søvn', description: 'Søvnsykluser, insomni og søvnkvalitet' },
      { slug: 'trening', label: 'Trening', description: 'Styrketrening, kondisjon og restitusjon' },
      { slug: 'ernaering', label: 'Ernæring', description: 'Makronæringsstoffer, vitaminer og kosthold' },
      { slug: 'mental-helse', label: 'Mental helse', description: 'Psykologi, stress, angst og velvære' },
      { slug: 'medisin', label: 'Medisin', description: 'Sykdommer, behandlinger og legemidler' },
    ],
  },
  {
    slug: 'vitenskap',
    label: 'Vitenskap',
    description: 'Fysikk, biologi, kjemi, romfart og vitenskapens store spørsmål.',
    icon: 'IconScience',
    color: 'blue',
    subcategories: [
      { slug: 'fysikk', label: 'Fysikk', description: 'Kvantefysikk, relativitetsteori og termodynamikk' },
      { slug: 'biologi', label: 'Biologi', description: 'DNA, evolusjon, celler og levende organismer' },
      { slug: 'kjemi', label: 'Kjemi', description: 'Atomer, molekyler, reaksjoner og grunnstoff' },
      { slug: 'romfart', label: 'Romfart', description: 'Planeter, galakser, romsonder og universet' },
      { slug: 'klima', label: 'Klima', description: 'Klimavitenskap, CO₂ og naturlige systemer' },
    ],
  },
  {
    slug: 'historie',
    label: 'Historie',
    description: 'Verdenshistorie, norsk historie, sivilisasjoner og historiske hendelser.',
    icon: 'IconHistory',
    color: 'amber',
    subcategories: [
      { slug: 'verdenshistorie', label: 'Verdenshistorie', description: 'Riker, kriger, revolusjoner og globale hendelser' },
      { slug: 'norsk-historie', label: 'Norsk historie', description: 'Vikingtid, union og Norges moderne utvikling' },
      { slug: 'oldtiden', label: 'Oldtiden', description: 'Egypt, Roma, Hellas og antikkens sivilisasjoner' },
      { slug: 'moderne-tid', label: 'Moderne tid', description: '1800-1900-tallet og industrialiseringen' },
      { slug: 'krig-og-fred', label: 'Krig og fred', description: 'Verdenskrigene, konflikter og fredsavtaler' },
    ],
  },
  {
    slug: 'reise',
    label: 'Reise',
    description: 'Destinasjoner, reisetips, visa, pakking og reiseplanlegging over hele verden.',
    icon: 'IconTravel',
    color: 'sky',
    subcategories: [
      { slug: 'destinasjoner', label: 'Destinasjoner', description: 'Land, byer og reisemål verden over' },
      { slug: 'reisetips', label: 'Reisetips', description: 'Pakking, flybilletter og praktiske råd' },
      { slug: 'natur', label: 'Natur', description: 'Nasjonalparker, fjell og naturfenomener' },
      { slug: 'kultur', label: 'Kultur', description: 'Lokale skikker, mat og kulturopplevelser' },
      { slug: 'visa-og-regler', label: 'Visa og regler', description: 'Innreise, visa og reisevilkår' },
    ],
  },
  {
    slug: 'mat',
    label: 'Mat',
    description: 'Oppskrifter, matkultur, ernæring og alt om matlaging og råvarer.',
    icon: 'IconFood',
    color: 'orange',
    subcategories: [
      { slug: 'oppskrifter', label: 'Oppskrifter', description: 'Middager, desserter og bakst' },
      { slug: 'matkultur', label: 'Matkultur', description: 'Verdensmat, tradisjoner og matsystemer' },
      { slug: 'teknikker', label: 'Teknikker', description: 'Kokkens teknikker og kjøkkenferdigheter' },
      { slug: 'drikke', label: 'Drikke', description: 'Kaffe, vin, øl og andre drikker' },
      { slug: 'kosthold', label: 'Kosthold', description: 'Spesielle dietter og kostholdsretninger' },
    ],
  },
  {
    slug: 'utdanning',
    label: 'Utdanning',
    description: 'Studieteknikker, norsk utdanningssystem, karriere og livslang læring.',
    icon: 'IconEducation',
    color: 'violet',
    subcategories: [
      { slug: 'studieteknikk', label: 'Studieteknikk', description: 'Lesemetoder, notattaking og eksamen' },
      { slug: 'norsk-skole', label: 'Norsk skole', description: 'Grunnskole, VGS, UH og Lånekassen' },
      { slug: 'karriere', label: 'Karriere', description: 'Jobbsøking, CV og karriereutvikling' },
      { slug: 'sprak', label: 'Språk', description: 'Norsk, engelsk og fremmedspråk' },
      { slug: 'online-laering', label: 'Online læring', description: 'MOOC, sertifiseringer og digitale kurs' },
    ],
  },
  {
    slug: 'samfunn',
    label: 'Samfunn',
    description: 'Politikk, juss, demokrati, norsk velferd og samfunnsfaglige temaer.',
    icon: 'IconSociety',
    color: 'rose',
    subcategories: [
      { slug: 'politikk', label: 'Politikk', description: 'Demokrati, partier og politiske systemer' },
      { slug: 'juss', label: 'Juss', description: 'Norsk lov, rettigheter og juridiske begreper' },
      { slug: 'velferd', label: 'Velferd', description: 'Nav, trygd, barnehage og velferdsstaten' },
      { slug: 'medier', label: 'Medier', description: 'Journalistikk, sosiale medier og pressefrihet' },
      { slug: 'miljo', label: 'Miljø', description: 'Klima, bærekraft og miljøpolitikk' },
    ],
  },
];

export function getCategoryBySlug(slug: string): TaxonomyCategory | undefined {
  return TAXONOMY.find((c) => c.slug === slug);
}

export function getSubcategoryBySlug(catSlug: string, subSlug: string) {
  const cat = getCategoryBySlug(catSlug);
  return cat?.subcategories.find((s) => s.slug === subSlug);
}

export const CATEGORY_SLUGS = TAXONOMY.map((c) => c.slug);
