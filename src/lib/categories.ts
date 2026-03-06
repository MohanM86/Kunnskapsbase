export interface SubcategoryConfig { slug: string; label: string; }
export interface CategoryConfig { slug: string; label: string; description: string; introText: string; subcategories: SubcategoryConfig[]; }

export const CATEGORIES: CategoryConfig[] = [
  {
    slug: 'teknologi', label: 'Teknologi',
    description: 'Internett, domener, DNS, e-post, programmering og digitale tjenester.',
    introText: 'Teknologi omfatter digitale verktøy og infrastruktur som driver moderne samfunn. I denne kategorien finner du artikler om internett, domener, DNS, e-post, webhotell, programmering og sikkerhet – forklart på en måte som gjør kompleks teknologi forståelig for alle.',
    subcategories: [{ slug: 'internett', label: 'Internett' }, { slug: 'programmering', label: 'Programmering' }, { slug: 'sikkerhet', label: 'Sikkerhet' }, { slug: 'maskinvare', label: 'Maskinvare' }],
  },
  {
    slug: 'ai', label: 'AI',
    description: 'Kunstig intelligens, maskinlæring, store språkmodeller og automatisering.',
    introText: 'Kunstig intelligens forandrer måten vi jobber, kommuniserer og løser problemer. Her finner du artikler om maskinlæring, store språkmodeller, AI-agenter, prompt engineering og etikk – fra grunnleggende konsepter til avanserte teknikker.',
    subcategories: [{ slug: 'maskinlaering', label: 'Maskinlæring' }, { slug: 'spraakmodeller', label: 'Språkmodeller' }, { slug: 'automatisering', label: 'Automatisering' }],
  },
  {
    slug: 'oekonomi', label: 'Økonomi',
    description: 'Personlig økonomi, investering, næringsliv og makroøkonomi.',
    introText: 'Økonomi er studiet av hvordan ressurser produseres, fordeles og brukes i samfunnet. I denne kategorien finner du artikler om personlig økonomi, budsjettering, investering i aksjer, renter, inflasjon og makroøkonomiske sammenhenger.',
    subcategories: [{ slug: 'personlig-oekonomi', label: 'Personlig økonomi' }, { slug: 'investering', label: 'Investering' }, { slug: 'naeringsliv', label: 'Næringsliv' }],
  },
  {
    slug: 'helse', label: 'Helse',
    description: 'Medisin, ernæring, mental helse, trening og velvære.',
    introText: 'God helse er grunnlaget for livskvalitet. Her finner du artikler om kroppen, ernæring, styrketrening, søvn, mental helse og medisinsk kunnskap – basert på forskning og skrevet for å være forståelig og nyttig i hverdagen.',
    subcategories: [{ slug: 'medisin', label: 'Medisin' }, { slug: 'ernaering', label: 'Ernæring' }, { slug: 'mental-helse', label: 'Mental helse' }, { slug: 'trening', label: 'Trening' }],
  },
  {
    slug: 'vitenskap', label: 'Vitenskap',
    description: 'Fysikk, biologi, kjemi, astronomi og vitenskapelig metode.',
    introText: 'Vitenskap er den systematiske utforskningen av naturen og universet. I denne kategorien finner du artikler om fysikk, biologi, kjemi, astronomi og den vitenskapelige metoden – fra evolusjon og fotosyntese til svarte hull og relativitetsteorien.',
    subcategories: [{ slug: 'fysikk', label: 'Fysikk' }, { slug: 'biologi', label: 'Biologi' }, { slug: 'astronomi', label: 'Astronomi' }, { slug: 'kjemi', label: 'Kjemi' }],
  },
  {
    slug: 'historie', label: 'Historie',
    description: 'Verdenshistorie, norsk historie, biografier og historiske hendelser.',
    introText: 'Historien hjelper oss å forstå nåtiden og forme fremtiden. Her finner du artikler om verdenshistorie, norsk historie og de store hendelsene som har formet vår sivilisasjon – fra antikkens Hellas og vikingtiden til den franske revolusjonen og den kalde krigen.',
    subcategories: [{ slug: 'verdenshistorie', label: 'Verdenshistorie' }, { slug: 'norsk-historie', label: 'Norsk historie' }, { slug: 'antikken', label: 'Antikken' }],
  },
  {
    slug: 'samfunn', label: 'Samfunn',
    description: 'Politikk, jus, sosiologi, miljø og samfunnsspørsmål.',
    introText: 'Samfunnskunnskap handler om hvordan vi organiserer fellesskapet vårt. Her finner du artikler om demokrati, menneskerettigheter, ytringsfrihet, personvern, velferdsstaten og bærekraftig utvikling – temaer som angår alle borgere.',
    subcategories: [{ slug: 'politikk', label: 'Politikk' }, { slug: 'jus', label: 'Jus' }, { slug: 'miljoe', label: 'Miljø' }],
  },
  {
    slug: 'utdanning', label: 'Utdanning',
    description: 'Skole, studieteknikk, karriere og livslang læring.',
    introText: 'Utdanning er nøkkelen til personlig vekst og samfunnsutvikling. I denne kategorien finner du artikler om studieteknikk, kildekritikk, kritisk tenkning, akademisk skriving, læreplanen og fagbrev – kunnskap som gjør deg til en bedre student og livslang lærende.',
    subcategories: [{ slug: 'studieteknikk', label: 'Studieteknikk' }, { slug: 'karriere', label: 'Karriere' }, { slug: 'spraak', label: 'Språk' }],
  },
  {
    slug: 'reise', label: 'Reise',
    description: 'Destinasjoner, reisetips, transport og reiseplanlegging.',
    introText: 'Reise utvider horisonten og gir opplevelser for livet. Her finner du artikler om reiseforsikring, Interrail, visum, backpacking, Airbnb og bærekraftig turisme – praktisk kunnskap som gjør reisene dine tryggere og bedre.',
    subcategories: [{ slug: 'destinasjoner', label: 'Destinasjoner' }, { slug: 'reisetips', label: 'Reisetips' }, { slug: 'transport', label: 'Transport' }],
  },
  {
    slug: 'mat', label: 'Mat',
    description: 'Oppskrifter, råvarer, kosthold, matkultur og drikke.',
    introText: 'Mat er kultur, vitenskap og hverdagsglede. I denne kategorien finner du artikler om norsk matkultur, fermentering, næringsstoffer, glutenfritt kosthold, matsvinn og kokketeknikker som sous vide.',
    subcategories: [{ slug: 'oppskrifter', label: 'Oppskrifter' }, { slug: 'kosthold', label: 'Kosthold' }, { slug: 'matkultur', label: 'Matkultur' }],
  },
];

/* ── Dynamic categories without config get auto-descriptions ── */
export const DYNAMIC_CAT_INTROS: Record<string, string> = {
  bil: 'Alt om bil – fra elbil og hybridbil til bilforsikring, EU-kontroll og selvkjørende teknologi. Praktisk kunnskap for norske bilister.',
  dyr: 'Kjæledyr beriker livene våre. Her finner du artikler om hundetrening, kattens adferd, dyrevelferd, dyreforsikring, allergi og mikrochiping.',
  jus: 'Jus handler om lover og rettigheter som påvirker hverdagen din. Her finner du artikler om forbrukerkjøpsloven, arbeidsmiljøloven, GDPR, husleieloven, arverett og strafferett.',
  klima: 'Klimaendringer er vår tids største utfordring. Her finner du artikler om drivhuseffekten, fornybar energi, Parisavtalen, karbonfotavtrykk og havforsuring.',
  hobby: 'Hobbyer gir glede, mestring og kreativitet. Her finner du artikler om sjakk, fotografi, friluftsliv, hagearbeid, strikking og 3D-printing.',
};

export const LEGACY_IT_SLUGS = ['domener', 'dns', 'epost', 'nettsider'];
export const LEGACY_LABELS: Record<string, string> = { domener: 'Domener', dns: 'DNS', epost: 'E-post', nettsider: 'Nettsider' };
export const CATEGORY_LABEL: Record<string, string> = { ...Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.label])), ...LEGACY_LABELS };
export const SUBCATEGORY_LABEL: Record<string, string> = Object.fromEntries(CATEGORIES.flatMap((c) => c.subcategories.map((s) => [s.slug, s.label])));
