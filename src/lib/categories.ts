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
    slug: 'seo', label: 'SEO',
    description: 'Søkemotoroptimalisering, søkeord, lenkebygging, teknisk SEO og Google-verktøy.',
    introText: 'SEO (søkemotoroptimalisering) handler om å øke nettsiders synlighet i søkemotorer som Google. Her finner du artikler om søkeord, on-page og off-page SEO, teknisk optimalisering, lenkebygging og verktøy som Google Search Console.',
    subcategories: [{ slug: 'grunnleggende', label: 'Grunnleggende' }, { slug: 'teknisk', label: 'Teknisk' }, { slug: 'innhold', label: 'Innhold' }, { slug: 'off-page', label: 'Off-page' }, { slug: 'verktoy', label: 'Verktøy' }],
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
    slug: 'krypto', label: 'Krypto',
    description: 'Blockchain, Bitcoin, Ethereum, DeFi, NFT, Web3 og kryptovaluta.',
    introText: 'Krypto omfatter blockchain-teknologi, kryptovalutaer og det desentraliserte internett. I denne kategorien finner du artikler om Bitcoin, Ethereum, DeFi, NFT-er, smarte kontrakter og Web3 – forklart på en måte som gjør kompleks teknologi tilgjengelig for alle.',
    subcategories: [{ slug: 'grunnleggende', label: 'Grunnleggende' }, { slug: 'kryptovalutaer', label: 'Kryptovalutaer' }, { slug: 'defi', label: 'DeFi' }],
  },
  {
    slug: 'handel', label: 'Handel',
    description: 'Toll, import, eksport, netthandel og forbrukerrettigheter.',
    introText: 'Handel berører alle som kjøper og selger varer. Her finner du artikler om toll og avgifter, import og eksport, netthandel, forbrukerrettigheter, frakt og internasjonal handel – praktisk kunnskap for både forbrukere og næringsdrivende.',
    subcategories: [{ slug: 'toll-og-avgifter', label: 'Toll og avgifter' }, { slug: 'netthandel', label: 'Netthandel' }, { slug: 'forbruker', label: 'Forbruker' }],
  },
  {
    slug: 'bolig', label: 'Bolig',
    description: 'Boligkjøp, lån, oppussing, strøm og borettslag.',
    introText: 'Bolig er den største investeringen de fleste gjør. Her finner du artikler om boligkjøp, boliglån, oppussing, strøm, borettslag, husleie og vedlikehold – kunnskap som hjelper deg ta gode boligbeslutninger.',
    subcategories: [{ slug: 'boligkjoep', label: 'Boligkjøp' }, { slug: 'oppussing', label: 'Oppussing' }, { slug: 'utleie', label: 'Utleie' }],
  },
  {
    slug: 'jobb', label: 'Jobb',
    description: 'CV, jobbintervju, lønn, arbeidsmarked og karriere.',
    introText: 'Arbeidslivet er i stadig endring. Her finner du artikler om CV-skriving, jobbintervju, lønnsforhandlinger, arbeidsrettigheter, frilans og karriereutvikling – fra første jobb til seniorkarriere.',
    subcategories: [{ slug: 'jobbsoek', label: 'Jobbsøk' }, { slug: 'arbeidsliv', label: 'Arbeidsliv' }, { slug: 'karriere', label: 'Karriere' }, { slug: 'frilans', label: 'Frilans' }],
  },
  {
    slug: 'helse', label: 'Helse',
    description: 'Medisin, ernæring, mental helse, trening og velvære.',
    introText: 'God helse er grunnlaget for livskvalitet. Her finner du artikler om kroppen, ernæring, styrketrening, søvn, mental helse og medisinsk kunnskap – basert på forskning og skrevet for å være forståelig og nyttig i hverdagen.',
    subcategories: [{ slug: 'medisin', label: 'Medisin' }, { slug: 'diabetes', label: 'Diabetes' }, { slug: 'hjerte', label: 'Hjerte og kar' }, { slug: 'kreft', label: 'Kreft' }, { slug: 'ernaering', label: 'Ernæring' }, { slug: 'mental-helse', label: 'Mental helse' }, { slug: 'kroppen', label: 'Kroppen' }, { slug: 'trening', label: 'Trening' }],
  },
  {
    slug: 'sport', label: 'Sport',
    description: 'Fotball, håndball, ski, trening, OL og idrettsverden.',
    introText: 'Sport engasjerer millioner av nordmenn. Her finner du artikler om fotball, håndball, ski, løping, sykkel, OL og idrettsverden – regler, historie, treningsråd og de store øyeblikkene i norsk og internasjonal idrett.',
    subcategories: [{ slug: 'fotball', label: 'Fotball' }, { slug: 'ski', label: 'Ski' }, { slug: 'haandball', label: 'Håndball' }, { slug: 'trening', label: 'Trening' }, { slug: 'idrettsverden', label: 'Idrettsverden' }],
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
  {
    slug: 'underholdning', label: 'Underholdning',
    description: 'Film, TV, musikk, streaming, spill og kultur.',
    introText: 'Underholdning er en viktig del av hverdagen. Her finner du artikler om film, TV-serier, musikk, strømmetjenester, spill og kulturopplevelser – fra anmeldelser og anbefalinger til forståelse av mediene som former vår tid.',
    subcategories: [{ slug: 'film-og-tv', label: 'Film og TV' }, { slug: 'musikk', label: 'Musikk' }, { slug: 'spill', label: 'Spill' }, { slug: 'streaming', label: 'Streaming' }],
  },
  {
    slug: 'bil', label: 'Bil',
    description: 'Elbil, bilforsikring, EU-kontroll, vedlikehold og selvkjørende teknologi.',
    introText: 'Alt om bil – fra elbil og hybridbil til bilforsikring, EU-kontroll og selvkjørende teknologi. Praktisk kunnskap for norske bilister.',
    subcategories: [{ slug: 'elbil', label: 'Elbil' }, { slug: 'vedlikehold', label: 'Vedlikehold' }, { slug: 'forsikring-bil', label: 'Forsikring' }],
  },
  {
    slug: 'dyr', label: 'Dyr',
    description: 'Kjæledyr, hundetrening, dyrevelferd, dyreforsikring og allergi.',
    introText: 'Kjæledyr beriker livene våre. Her finner du artikler om hundetrening, kattens adferd, dyrevelferd, dyreforsikring, allergi og mikrochiping.',
    subcategories: [{ slug: 'hund', label: 'Hund' }, { slug: 'katt', label: 'Katt' }, { slug: 'dyrevelferd', label: 'Dyrevelferd' }],
  },
  {
    slug: 'jus', label: 'Jus',
    description: 'Forbrukerkjøpsloven, arbeidsmiljøloven, GDPR, arverett og strafferett.',
    introText: 'Jus handler om lover og rettigheter som påvirker hverdagen din. Her finner du artikler om forbrukerkjøpsloven, arbeidsmiljøloven, GDPR, husleieloven, arverett og strafferett.',
    subcategories: [{ slug: 'forbrukerrett', label: 'Forbrukerrett' }, { slug: 'arbeidsrett', label: 'Arbeidsrett' }, { slug: 'personvern', label: 'Personvern' }],
  },
  {
    slug: 'klima', label: 'Klima',
    description: 'Klimaendringer, fornybar energi, Parisavtalen og karbonfotavtrykk.',
    introText: 'Klimaendringer er vår tids største utfordring. Her finner du artikler om drivhuseffekten, fornybar energi, Parisavtalen, karbonfotavtrykk og havforsuring.',
    subcategories: [{ slug: 'fornybar-energi', label: 'Fornybar energi' }, { slug: 'klimapolitikk', label: 'Klimapolitikk' }],
  },
  {
    slug: 'hobby', label: 'Hobby',
    description: 'Sjakk, fotografi, friluftsliv, hagearbeid og kreative aktiviteter.',
    introText: 'Hobbyer gir glede, mestring og kreativitet. Her finner du artikler om sjakk, fotografi, friluftsliv, hagearbeid, strikking og 3D-printing.',
    subcategories: [{ slug: 'friluftsliv', label: 'Friluftsliv' }, { slug: 'kreativt', label: 'Kreativt' }, { slug: 'spill-hobby', label: 'Spill og brettspill' }],
  },
];

/* ── Dynamic categories without config get auto-descriptions ── */
export const DYNAMIC_CAT_INTROS: Record<string, string> = {};

export const LEGACY_IT_SLUGS = ['domener', 'dns', 'epost', 'nettsider'];
export const LEGACY_LABELS: Record<string, string> = { domener: 'Domener', dns: 'DNS', epost: 'E-post', nettsider: 'Nettsider' };
export const CATEGORY_LABEL: Record<string, string> = { ...Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.label])), ...LEGACY_LABELS };
export const SUBCATEGORY_LABEL: Record<string, string> = Object.fromEntries(CATEGORIES.flatMap((c) => c.subcategories.map((s) => [s.slug, s.label])));
