import Link from 'next/link';
import { Metadata } from 'next';
import { getAllArticlesMeta } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Norske kommuner – Fakta om alle 356 kommuner',
  description: 'Utforsk alle norske kommuner – befolkning, areal, politikk, næringsliv og historie. Finn din kommune og lær mer.',
};

const FYLKER: { name: string; kommuner: string[] }[] = [
  { name: 'Agder', kommuner: ['Arendal', 'Birkenes', 'Bygland', 'Bykle', 'Evje og Hornnes', 'Farsund', 'Flekkefjord', 'Froland', 'Gjerstad', 'Grimstad', 'Hægebostad', 'Iveland', 'Kristiansand', 'Kvinesdal', 'Lillesand', 'Lindesnes', 'Lyngdal', 'Mandal', 'Risør', 'Sirdal', 'Tvedestrand', 'Valle', 'Vegårshei', 'Vennesla', 'Åmli', 'Åseral'] },
  { name: 'Akershus', kommuner: ['Asker', 'Aurskog-Høland', 'Bærum', 'Eidsvoll', 'Enebakk', 'Frogn', 'Gjerdrum', 'Hurdal', 'Lillestrøm', 'Lunner', 'Lørenskog', 'Nannestad', 'Nes', 'Nittedal', 'Nordre Follo', 'Rælingen', 'Ullensaker', 'Vestby', 'Ås'] },
  { name: 'Buskerud', kommuner: ['Drammen', 'Flå', 'Gol', 'Hemsedal', 'Hol', 'Hole', 'Jevnaker', 'Kongsberg', 'Krødsherad', 'Lier', 'Modum', 'Nesbyen', 'Nore og Uvdal', 'Ringerike', 'Rollag', 'Sigdal', 'Øvre Eiker'] },
  { name: 'Finnmark', kommuner: ['Alta', 'Berlevåg', 'Båtsfjord', 'Gamvik', 'Hammerfest', 'Hasvik', 'Karasjok', 'Kautokeino', 'Lebesby', 'Loppa', 'Måsøy', 'Nesseby', 'Nordkapp', 'Porsanger', 'Sør-Varanger', 'Tana', 'Vadsø', 'Vardø'] },
  { name: 'Innlandet', kommuner: ['Alvdal', 'Dovre', 'Eidskog', 'Elverum', 'Engerdal', 'Etnedal', 'Folldal', 'Gausdal', 'Gjøvik', 'Gran', 'Grue', 'Hamar', 'Kongsvinger', 'Lesja', 'Lillehammer', 'Lom', 'Løten', 'Nord-Aurdal', 'Nord-Fron', 'Nord-Odal', 'Nordre Land', 'Os', 'Østre Toten', 'Øyer', 'Rendalen', 'Ringebu', 'Ringsaker', 'Sel', 'Skjåk', 'Stange', 'Stor-Elvdal', 'Søndre Land', 'Sør-Aurdal', 'Sør-Fron', 'Sør-Odal', 'Tolga', 'Trysil', 'Tynset', 'Vang', 'Vestre Slidre', 'Vestre Toten', 'Vågå', 'Åmot', 'Åsnes'] },
  { name: 'Møre og Romsdal', kommuner: ['Aukra', 'Aure', 'Averøy', 'Fjord', 'Giske', 'Gjemnes', 'Hareid', 'Herøy', 'Hustadvika', 'Kristiansund', 'Molde', 'Rauma', 'Sande', 'Smøla', 'Stranda', 'Sula', 'Sunndal', 'Surnadal', 'Sykkylven', 'Tingvoll', 'Ulstein', 'Vanylven', 'Vestnes', 'Volda', 'Ålesund', 'Ørsta'] },
  { name: 'Nordland', kommuner: ['Alstahaug', 'Andøy', 'Beiarn', 'Bindal', 'Bodø', 'Brønnøy', 'Bø', 'Dønna', 'Evenes', 'Fauske', 'Flakstad', 'Gildeskål', 'Grane', 'Hadsel', 'Hamarøy', 'Hattfjelldal', 'Hemnes', 'Herøy', 'Leirfjord', 'Lurøy', 'Lødingen', 'Meløy', 'Moskenes', 'Narvik', 'Nesna', 'Rana', 'Rødøy', 'Røst', 'Saltdal', 'Sortland', 'Steigen', 'Sømna', 'Sørfold', 'Træna', 'Vefsn', 'Vega', 'Vestvågøy', 'Værøy', 'Øksnes'] },
  { name: 'Oslo', kommuner: ['Oslo'] },
  { name: 'Rogaland', kommuner: ['Bokn', 'Eigersund', 'Gjesdal', 'Haugesund', 'Hjelmeland', 'Hå', 'Karmøy', 'Klepp', 'Kvitsøy', 'Lund', 'Randaberg', 'Sandnes', 'Sauda', 'Sokndal', 'Sola', 'Stavanger', 'Strand', 'Suldal', 'Time', 'Tysvær', 'Utsira', 'Vindafjord'] },
  { name: 'Telemark', kommuner: ['Bamble', 'Drangedal', 'Fyresdal', 'Hjartdal', 'Kragerø', 'Kviteseid', 'Midt-Telemark', 'Nissedal', 'Nome', 'Notodden', 'Porsgrunn', 'Seljord', 'Siljan', 'Skien', 'Tinn', 'Tokke', 'Vinje'] },
  { name: 'Troms', kommuner: ['Balsfjord', 'Bardu', 'Dyrøy', 'Gratangen', 'Harstad', 'Ibestad', 'Karlsøy', 'Kvæfjord', 'Lavangen', 'Lyngen', 'Målselv', 'Salangen', 'Senja', 'Skjervøy', 'Storfjord', 'Sørreisa', 'Tjeldsund', 'Tromsø'] },
  { name: 'Trøndelag', kommuner: ['Flatanger', 'Frosta', 'Grong', 'Heim', 'Hitra', 'Holtålen', 'Høylandet', 'Inderøy', 'Indre Fosen', 'Leka', 'Levanger', 'Lierne', 'Malvik', 'Melhus', 'Meråker', 'Midtre Gauldal', 'Namsos', 'Namsskogan', 'Nærøysund', 'Oppdal', 'Orkland', 'Osen', 'Overhalla', 'Rennebu', 'Rindal', 'Røros', 'Røyrvik', 'Selbu', 'Skaun', 'Snåsa', 'Steinkjer', 'Stjørdal', 'Trondheim', 'Tydal', 'Verdal', 'Åfjord', 'Ørland'] },
  { name: 'Vestfold', kommuner: ['Færder', 'Holmestrand', 'Horten', 'Larvik', 'Sandefjord', 'Tønsberg'] },
  { name: 'Vestland', kommuner: ['Alver', 'Askøy', 'Askvoll', 'Austevoll', 'Austrheim', 'Bergen', 'Bjørnafjorden', 'Bremanger', 'Bømlo', 'Eidfjord', 'Etne', 'Fedje', 'Fitjar', 'Fjaler', 'Gloppen', 'Gulen', 'Hyllestad', 'Høyanger', 'Kinn', 'Kvam', 'Kvinnherad', 'Luster', 'Lærdal', 'Masfjorden', 'Modalen', 'Osterøy', 'Samnanger', 'Sogndal', 'Solund', 'Stad', 'Stord', 'Stryn', 'Suldal', 'Sunnfjord', 'Tysnes', 'Ullensvang', 'Ulvik', 'Vaksdal', 'Vik', 'Voss', 'Øygarden', 'Årdal'] },
  { name: 'Østfold', kommuner: ['Aremark', 'Fredrikstad', 'Halden', 'Hvaler', 'Indre Østfold', 'Moss', 'Marker', 'Rakkestad', 'Råde', 'Sarpsborg', 'Skiptvet', 'Våler'] },
];

function toSlug(name: string): string {
  return name.toLowerCase()
    .replace(/æ/g, 'ae').replace(/ø/g, 'oe').replace(/å/g, 'aa')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const POPULAR = [
  { name: 'Oslo', fylke: 'Oslo', pop: '729 000' },
  { name: 'Bergen', fylke: 'Vestland', pop: '294 000' },
  { name: 'Trondheim', fylke: 'Trøndelag', pop: '213 000' },
  { name: 'Stavanger', fylke: 'Rogaland', pop: '144 000' },
  { name: 'Bærum', fylke: 'Akershus', pop: '129 000' },
  { name: 'Kristiansand', fylke: 'Agder', pop: '115 000' },
  { name: 'Drammen', fylke: 'Buskerud', pop: '104 000' },
  { name: 'Asker', fylke: 'Akershus', pop: '96 000' },
  { name: 'Lillestrøm', fylke: 'Akershus', pop: '89 000' },
  { name: 'Fredrikstad', fylke: 'Østfold', pop: '84 000' },
  { name: 'Sandnes', fylke: 'Rogaland', pop: '83 000' },
  { name: 'Tromsø', fylke: 'Troms', pop: '78 000' },
];

export default function KommunePage() {
  const articles = getAllArticlesMeta().filter(a => a.category === 'kommune' || a.slugPath[0] === 'kommune');
  const publishedSlugs = new Set(articles.map(a => a.slug));

  return (
    <div className="kommune-page">
      <div className="kommune-hero">
        <h1 className="kommune-title">Norske kommuner</h1>
        <p className="kommune-subtitle">
          Utforsk alle {FYLKER.reduce((sum, f) => sum + f.kommuner.length, 0)} norske kommuner – befolkning, areal, politikk, næringsliv og historie.
        </p>
      </div>

      <div className="kommune-content">
        <section className="kommune-section">
          <h2 className="kommune-section-title">
            <span className="kommune-section-icon">🏛️</span> Populære kommuner
          </h2>
          <div className="kommune-grid">
            {POPULAR.map((k) => {
              const slug = toSlug(k.name);
              const hasArticle = publishedSlugs.has(slug);
              const href = `/kommune/${slug}`;
              return hasArticle ? (
                <Link key={k.name} href={href} className="kommune-card">
                  <span className="kommune-card-name">{k.name}</span>
                  <span className="kommune-card-fylke">{k.fylke}</span>
                  <span className="kommune-card-pop">{k.pop} innbyggere</span>
                </Link>
              ) : (
                <div key={k.name} className="kommune-card kommune-card-soon">
                  <span className="kommune-card-name">{k.name}</span>
                  <span className="kommune-card-fylke">{k.fylke}</span>
                  <span className="kommune-card-pop">{k.pop} innbyggere</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="kommune-section">
          <h2 className="kommune-section-title">
            <span className="kommune-section-icon">📍</span> Alle kommuner etter fylke
          </h2>
          <div className="fylke-list">
            {FYLKER.map((fylke) => (
              <details key={fylke.name} className="fylke-accordion">
                <summary className="fylke-summary">
                  <div>
                    <span className="fylke-name">{fylke.name}</span>
                    <span className="fylke-count">{fylke.kommuner.length} kommuner</span>
                  </div>
                  <svg className="fylke-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </summary>
                <div className="fylke-kommuner">
                  {fylke.kommuner.map((name) => {
                    const slug = toSlug(name);
                    const hasArticle = publishedSlugs.has(slug);
                    return hasArticle ? (
                      <Link key={name} href={`/kommune/${slug}`} className="fylke-kommune-link">{name}</Link>
                    ) : (
                      <span key={name} className="fylke-kommune-name">{name}</span>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
