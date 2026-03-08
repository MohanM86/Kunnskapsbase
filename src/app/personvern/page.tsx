import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Personvernerklæring for kunnskapsbase.no',
  description: 'Les vår fullstendige personvernerklæring. Informasjon om informasjonskapsler, GDPR-rettigheter, databehandling, Google Analytics og hvordan kunnskapsbase.no ivaretar ditt personvern.',
  openGraph: {
    title: 'Personvernerklæring – kunnskapsbase.no',
    description: 'Fullstendig personvernerklæring for kunnskapsbase.no. Les om cookies, GDPR, databehandling og dine rettigheter.',
  },
};

const TOC_ITEMS = [
  { id: 'behandlingsansvarlig', label: '1. Behandlingsansvarlig' },
  { id: 'definisjoner', label: '2. Sentrale begreper' },
  { id: 'opplysninger', label: '3. Hvilke opplysninger samles inn' },
  { id: 'formal', label: '4. Formål og rettslig grunnlag' },
  { id: 'cookies', label: '5. Informasjonskapsler' },
  { id: 'tredjeparter', label: '6. Tredjeparter og databehandlere' },
  { id: 'overfoering', label: '7. Overføring utenfor EØS' },
  { id: 'oppbevaring', label: '8. Oppbevaring og sikkerhet' },
  { id: 'rettigheter', label: '9. Dine rettigheter etter GDPR' },
  { id: 'barn', label: '10. Barn og mindreårige' },
  { id: 'automatisert', label: '11. Automatisert behandling' },
  { id: 'endringer', label: '12. Endringer i erklæringen' },
  { id: 'klage', label: '13. Klagerett' },
  { id: 'kontakt', label: '14. Kontakt oss' },
];

export default function PersonvernPage() {
  return (
    <div className="wiki-layout">
      <div className="wiki-main">
        <div className="article-content-wrapper">
          <article className="personvern-article">
            <style>{`
              .personvern-article {
                max-width: 780px;
                color: #111;
                line-height: 1.85;
                font-size: 1rem;
              }
              .personvern-article .pv-badge {
                display: inline-block;
                font-size: 0.7rem;
                font-weight: 700;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #4ade80;
                border: 1.5px solid #4ade80;
                border-radius: 4px;
                padding: 0.2rem 0.65rem;
                margin-bottom: 1rem;
              }
              .personvern-article h1 {
                font-size: 2.25rem;
                font-weight: 800;
                color: #000;
                line-height: 1.15;
                margin: 0 0 0.5rem 0;
                letter-spacing: -0.02em;
              }
              .personvern-article .pv-subtitle {
                font-size: 1.1rem;
                color: #444;
                margin: 0 0 1rem 0;
                font-weight: 400;
              }
              .personvern-article .pv-meta {
                font-size: 0.85rem;
                color: #777;
                margin-bottom: 2rem;
                padding-bottom: 1.5rem;
                border-bottom: 1px solid #ddd;
              }
              .personvern-article .pv-intro-box {
                font-size: 1.05rem;
                color: #111;
                line-height: 1.85;
                margin-bottom: 2.5rem;
                padding: 1.25rem 1.5rem;
                background: #f7f7f7;
                border-left: 3px solid #4ade80;
                border-radius: 0 6px 6px 0;
              }
              .personvern-article h2 {
                font-size: 1.3rem;
                font-weight: 700;
                color: #000;
                margin: 2.75rem 0 0.75rem 0;
                padding-top: 1.5rem;
                border-top: 1px solid #e5e5e5;
                letter-spacing: -0.01em;
              }
              .personvern-article h3 {
                font-size: 1.1rem;
                font-weight: 600;
                color: #111;
                margin: 1.75rem 0 0.5rem 0;
              }
              .personvern-article p {
                color: #111;
                margin-bottom: 1rem;
              }
              .personvern-article strong {
                color: #000;
                font-weight: 700;
              }
              .personvern-article ul, .personvern-article ol {
                color: #111;
                padding-left: 1.5rem;
                margin-bottom: 1.25rem;
              }
              .personvern-article li {
                margin-bottom: 0.5rem;
              }
              .personvern-article a {
                color: #16a34a;
                text-decoration: underline;
                text-underline-offset: 2px;
              }
              .personvern-article a:hover {
                color: #15803d;
              }
              .personvern-article .pv-table-wrap {
                overflow-x: auto;
                margin: 1.25rem 0 1.75rem;
              }
              .personvern-article table {
                width: 100%;
                border-collapse: collapse;
                font-size: 0.9rem;
              }
              .personvern-article th {
                text-align: left;
                font-weight: 700;
                color: #000;
                padding: 0.7rem 0.85rem;
                background: #f3f3f3;
                border-bottom: 2px solid #d4d4d4;
              }
              .personvern-article td {
                padding: 0.7rem 0.85rem;
                color: #222;
                border-bottom: 1px solid #eee;
                vertical-align: top;
              }
              .personvern-article .pv-highlight {
                background: #f0fdf4;
                border: 1px solid #bbf7d0;
                border-radius: 8px;
                padding: 1.25rem 1.5rem;
                margin: 1.5rem 0;
              }
              .personvern-article .pv-highlight p {
                margin: 0;
              }
              .personvern-article .pv-contact-box {
                background: #f5f5f5;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 1.5rem;
                margin-top: 1.5rem;
              }
              .personvern-article .pv-back {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
                margin-top: 2.5rem;
                padding: 0.55rem 1.1rem;
                font-size: 0.875rem;
                font-weight: 600;
                color: #111;
                background: #f0f0f0;
                border-radius: 6px;
                text-decoration: none;
                transition: background 0.15s;
              }
              .personvern-article .pv-back:hover {
                background: #e0e0e0;
                color: #111;
              }
              .pv-toc-sidebar {
                position: sticky;
                top: 5rem;
                align-self: start;
              }
              .pv-toc-sidebar nav {
                padding: 1.25rem;
                background: #fafafa;
                border: 1px solid #eee;
                border-radius: 8px;
              }
              .pv-toc-sidebar .pv-toc-title {
                font-size: 0.75rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: #999;
                margin-bottom: 0.75rem;
              }
              .pv-toc-sidebar ol {
                list-style: none;
                margin: 0;
                padding: 0;
              }
              .pv-toc-sidebar li {
                margin-bottom: 0.35rem;
              }
              .pv-toc-sidebar a {
                font-size: 0.82rem;
                color: #555;
                text-decoration: none;
                line-height: 1.5;
                transition: color 0.15s;
              }
              .pv-toc-sidebar a:hover {
                color: #16a34a;
              }
            `}</style>

            <span className="pv-badge">Personvern &amp; GDPR</span>
            <h1>Personvernerklæring</h1>
            <p className="pv-subtitle">Slik ivaretar kunnskapsbase.no ditt personvern og dine rettigheter</p>
            <p className="pv-meta">Sist oppdatert: 8. mars 2026 &middot; Versjon 1.0 &middot; Gjelder for alle sider på kunnskapsbase.no</p>

            <div className="pv-intro-box">
              <p>Kunnskapsbase.no er en norsk kunnskapsbase som tilbyr fritt tilgjengelige artikler og veiledninger innen teknologi, kunstig intelligens, økonomi, helse, vitenskap, historie, samfunn, utdanning, reise og mat. Vi tar personvern på alvor. Denne personvernerklæringen forklarer i detalj hvilke opplysninger vi samler inn, hvordan de behandles, hvem som har tilgang, og hvilke rettigheter du har i henhold til personopplysningsloven og EUs personvernforordning (GDPR, forordning 2016/679).</p>
            </div>

            <h2 id="behandlingsansvarlig">1. Behandlingsansvarlig</h2>
            <p>Kunnskapsbase.no er behandlingsansvarlig for all behandling av personopplysninger som skjer gjennom nettstedet. Behandlingsansvarlig er den som bestemmer formålet med og midlene for behandling av personopplysninger. Nettstedet drives fra Norge og er underlagt norsk personvernlovgivning, herunder personopplysningsloven av 2018 som gjennomfører EUs personvernforordning (GDPR) i norsk rett. Datatilsynet er tilsynsmyndighet for personvern i Norge.</p>

            <h2 id="definisjoner">2. Sentrale begreper</h2>
            <p>For å gjøre denne erklæringen lettere å forstå, definerer vi følgende begreper slik de brukes i GDPR og norsk personvernlovgivning:</p>
            <ul>
              <li><strong>Personopplysninger</strong> — Enhver opplysning som kan knyttes til en identifisert eller identifiserbar fysisk person, for eksempel navn, e-postadresse, IP-adresse eller lokaliseringsdata.</li>
              <li><strong>Behandling</strong> — Enhver operasjon som utføres med personopplysninger, enten automatisert eller manuelt, som innsamling, registrering, lagring, tilpasning, utlevering eller sletting.</li>
              <li><strong>Behandlingsansvarlig</strong> — Den fysiske eller juridiske personen som bestemmer formålet med og midlene for behandling av personopplysninger.</li>
              <li><strong>Databehandler</strong> — En fysisk eller juridisk person som behandler personopplysninger på vegne av den behandlingsansvarlige.</li>
              <li><strong>Samtykke</strong> — En frivillig, spesifikk, informert og utvetydig viljesytring fra den registrerte om at vedkommende godtar behandling av personopplysninger om seg selv.</li>
              <li><strong>Informasjonskapsler (cookies)</strong> — Små tekstfiler som lagres på din enhet når du besøker et nettsted, og som kan brukes til å gjenkjenne enheten ved senere besøk.</li>
            </ul>

            <h2 id="opplysninger">3. Hvilke opplysninger samles inn</h2>
            <h3>3.1 Anonymisert bruksdata</h3>
            <p>Dersom du samtykker til bruk av analysecookies, samler vi inn følgende anonymiserte bruksdata gjennom Google Analytics 4:</p>
            <ul>
              <li>Sidevisninger og navigasjonsmønster på tvers av nettstedet</li>
              <li>Varighet på besøk og tid brukt på individuelle sider</li>
              <li>Enhetstype, skjermoppløsning, nettleser og operativsystem</li>
              <li>Omtrentlig geografisk plassering basert på anonymisert IP-adresse (land og region, ikke nøyaktig posisjon)</li>
              <li>Henvisningskilde som viser hvordan du kom til nettstedet (søkemotor, direkte, ekstern lenke)</li>
              <li>Interaksjoner med nettstedet som rulledybde og utgående klikk</li>
            </ul>

            <h3>3.2 Opplysninger vi ikke samler inn</h3>
            <p>Kunnskapsbase.no samler <strong>ikke</strong> inn personlig identifiserbar informasjon. Vi lagrer ikke navn, e-postadresser, telefonnumre, fødselsdato, personnummer eller nøyaktige IP-adresser. Nettstedet har ingen brukerkontoer, påloggingsfunksjonalitet, nyhetsbrev, kontaktskjemaer eller kommentarfelt som krever at du oppgir personopplysninger. Vi bruker heller ikke sporingspiksler, fingerprinting-teknologi, annonsecookies eller remarketing-tjenester.</p>

            <h3>3.3 Tekniske logger</h3>
            <p>Vår hostingleverandør Vercel kan midlertidig lagre tekniske serverlogger som inneholder IP-adresser og forespørselsdata. Disse loggene brukes utelukkende for å sikre driftsstabilitet og beskytte mot misbruk, og slettes automatisk innen kort tid. Vi har ingen tilgang til eller kontroll over disse loggene utover det Vercel tilbyr som standard.</p>

            <h2 id="formal">4. Formål og rettslig grunnlag</h2>
            <p>Vi behandler opplysninger for følgende formål, med tilhørende rettslig grunnlag etter GDPR:</p>

            <div className="pv-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Formål</th>
                    <th>Rettslig grunnlag</th>
                    <th>Beskrivelse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trafikkanalyse</td>
                    <td>Samtykke (art. 6(1)(a))</td>
                    <td>Forstå hvordan nettstedet brukes for å forbedre innhold, struktur, brukeropplevelse og tilgjengelighet</td>
                  </tr>
                  <tr>
                    <td>Teknisk drift</td>
                    <td>Berettiget interesse (art. 6(1)(f))</td>
                    <td>Sikre at nettstedet fungerer teknisk, beskytte mot angrep og misbruk, og opprettholde driftsstabilitet</td>
                  </tr>
                  <tr>
                    <td>Samtykkelagring</td>
                    <td>Berettiget interesse (art. 6(1)(f))</td>
                    <td>Huske ditt samtykkevalg for informasjonskapsler slik at du ikke blir spurt gjentatte ganger</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Du kan når som helst trekke tilbake samtykket ditt ved å slette informasjonskapsler i nettleseren din og deretter laste kunnskapsbase.no på nytt. Da vil cookie-banneret vises igjen og du kan velge «Avslå». Tilbaketrekking av samtykke påvirker ikke lovligheten av behandling som allerede har funnet sted basert på samtykket.</p>

            <h2 id="cookies">5. Informasjonskapsler (cookies)</h2>
            <p>Informasjonskapsler er små tekstfiler som lagres lokalt på din enhet (datamaskin, nettbrett eller mobiltelefon) når du besøker et nettsted. Vi bruker informasjonskapsler utelukkende for anonym trafikkanalyse gjennom Google Analytics 4. Analysecookies settes <strong>kun</strong> dersom du aktivt klikker «Godta» i cookie-banneret som vises ved ditt første besøk. Dersom du klikker «Avslå», settes ingen analysecookies og ingen bruksdata samles inn gjennom Google Analytics.</p>

            <h3>5.1 Oversikt over informasjonskapsler</h3>
            <div className="pv-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Navn</th>
                    <th>Leverandør</th>
                    <th>Formål</th>
                    <th>Varighet</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Google</td>
                    <td>Genererer en anonym identifikator for å skille mellom unike besøkende uten å identifisere enkeltpersoner</td>
                    <td>2 år</td>
                    <td>Analyse</td>
                  </tr>
                  <tr>
                    <td>_ga_[ID]</td>
                    <td>Google</td>
                    <td>Opprettholder økttilstand og samler anonymisert statistikk om hvordan besøkende navigerer på nettstedet</td>
                    <td>2 år</td>
                    <td>Analyse</td>
                  </tr>
                  <tr>
                    <td>cookie-consent</td>
                    <td>kunnskapsbase.no</td>
                    <td>Lagrer ditt samtykkevalg lokalt i nettleseren slik at banneret ikke vises ved hvert besøk</td>
                    <td>Permanent (localStorage)</td>
                    <td>Nødvendig</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>5.2 Administrere informasjonskapsler</h3>
            <p>Du kan administrere og slette informasjonskapsler gjennom innstillingene i nettleseren din. De fleste nettlesere lar deg blokkere alle informasjonskapsler, akseptere alle, eller bli varslet når en informasjonskapsel settes. Merk at blokkering av alle informasjonskapsler kan påvirke funksjonaliteten på enkelte nettsteder, men kunnskapsbase.no fungerer fullt ut uten analysecookies.</p>

            <h2 id="tredjeparter">6. Tredjeparter og databehandlere</h2>
            <p>Vi benytter følgende tredjepartstjenester som kan behandle data i forbindelse med ditt besøk på kunnskapsbase.no:</p>

            <h3>6.1 Google Analytics (Google LLC)</h3>
            <p>Google Analytics 4 brukes til å samle inn og analysere anonymisert bruksdata om hvordan besøkende bruker nettstedet. Google opptrer som databehandler på våre vegne. Vi har aktivert IP-anonymisering, noe som betyr at din IP-adresse forkortes og ikke lagres i fullstendig form. Google kan overføre data til servere i USA, men er underlagt EUs standardkontraktsklausuler (SCC) og tilleggstiltak for å sikre tilstrekkelig beskyttelsesnivå. Du kan lese mer om hvordan Google behandler data i <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Googles personvernerklæring</a> og om Google Analytics-spesifikk databehandling på <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">Googles informasjonsside for Analytics</a>.</p>

            <h3>6.2 Vercel Inc.</h3>
            <p>Vercel er vår hostingleverandør og leverer nettstedet til besøkende verden over gjennom sitt globale CDN-nettverk (Content Delivery Network). Vercel behandler tekniske forespørsler som er nødvendige for å vise nettsider, inkludert midlertidig logging av IP-adresser for sikkerhetsformål. Vercel har sin hovedbase i USA og opererer under EU-US Data Privacy Framework. Du kan lese mer i <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercels personvernerklæring</a>.</p>

            <h3>6.3 GitHub (Microsoft)</h3>
            <p>Kildekoden for kunnskapsbase.no er lagret på GitHub. GitHub behandler ingen personopplysninger om besøkende på nettstedet, men nevnes her for fullstendighetens skyld da det er en del av den tekniske infrastrukturen.</p>

            <div className="pv-highlight">
              <p><strong>Viktig:</strong> Vi selger, deler eller utleverer aldri personopplysninger eller bruksdata til annonsører, markedsførere eller andre tredjeparter. Vi bruker ingen annonsecookies, remarketing-tjenester eller sporingsnettverk.</p>
            </div>

            <h2 id="overfoering">7. Overføring av data utenfor EØS</h2>
            <p>Enkelte av våre databehandlere har hovedkontor i USA, noe som innebærer at anonymisert data kan bli overført til servere utenfor Det europeiske økonomiske samarbeidsområdet (EØS). For å sikre at slike overføringer skjer i samsvar med GDPR, har vi forsikret oss om at våre databehandlere benytter følgende overføringsmekanismer:</p>
            <ul>
              <li><strong>EU-US Data Privacy Framework</strong> — Både Google og Vercel er sertifisert under EU-US Data Privacy Framework, som EU-kommisjonen har anerkjent som et tilstrekkelig beskyttelsesnivå for personopplysninger.</li>
              <li><strong>Standardkontraktsklausuler (SCC)</strong> — I tillegg til DPF benytter våre databehandlere EUs standardkontraktsklausuler som et supplerende overføringsgrunnlag.</li>
              <li><strong>Tekniske tiltak</strong> — IP-anonymisering er aktivert i Google Analytics, og vi samler ikke inn direkte personidentifiserende opplysninger.</li>
            </ul>

            <h2 id="oppbevaring">8. Oppbevaring og sikkerhet</h2>
            <h3>8.1 Oppbevaringstid</h3>
            <p>Anonymisert analysedata i Google Analytics oppbevares i maksimalt 14 måneder fra innsamlingstidspunktet. Etter denne perioden aggregeres dataene ytterligere og individuelle datapunkter slettes automatisk. Ditt lokale samtykkevalg i nettleseren (localStorage) har ingen utløpsdato, men du kan slette det manuelt når som helst gjennom nettleserens innstillinger.</p>

            <h3>8.2 Sikkerhetstiltak</h3>
            <p>Vi har implementert følgende tekniske og organisatoriske tiltak for å beskytte data:</p>
            <ul>
              <li><strong>Kryptert overføring</strong> — Alt innhold på kunnskapsbase.no leveres over HTTPS med TLS-kryptering, som sikrer at kommunikasjonen mellom din nettleser og våre servere er kryptert og beskyttet mot avlytting.</li>
              <li><strong>Ingen database med personopplysninger</strong> — Nettstedet har ingen database som lagrer personopplysninger. Alt innhold er statisk generert og det finnes ingen brukerkontoer eller innlogging.</li>
              <li><strong>IP-anonymisering</strong> — Google Analytics er konfigurert med IP-anonymisering slik at fullstendige IP-adresser aldri lagres.</li>
              <li><strong>Minimal datainnsamling</strong> — Vi følger prinsippet om dataminimering og samler kun inn opplysninger som er nødvendige for det angitte formålet.</li>
              <li><strong>Tilgangskontroll</strong> — Tilgang til Google Analytics-kontoen er begrenset til et minimum av autoriserte personer.</li>
            </ul>

            <h2 id="rettigheter">9. Dine rettigheter etter GDPR</h2>
            <p>I henhold til EUs personvernforordning (GDPR) og norsk personopplysningslov har du følgende rettigheter knyttet til behandling av dine personopplysninger:</p>
            <ul>
              <li><strong>Rett til informasjon (art. 13–14)</strong> — Du har rett til å bli informert om hvordan dine personopplysninger behandles. Denne personvernerklæringen oppfyller denne retten.</li>
              <li><strong>Rett til innsyn (art. 15)</strong> — Du kan be om bekreftelse på om vi behandler personopplysninger om deg, og i så fall få en kopi av disse opplysningene.</li>
              <li><strong>Rett til retting (art. 16)</strong> — Du kan be om at uriktige personopplysninger om deg rettes uten ugrunnet opphold.</li>
              <li><strong>Rett til sletting (art. 17)</strong> — Du kan be om at personopplysninger om deg slettes når de ikke lenger er nødvendige for formålet de ble samlet inn for, eller når du trekker tilbake samtykket.</li>
              <li><strong>Rett til begrensning (art. 18)</strong> — Du kan be om at behandlingen av dine personopplysninger begrenses under visse omstendigheter.</li>
              <li><strong>Rett til dataportabilitet (art. 20)</strong> — Du har rett til å motta personopplysninger du har gitt oss i et strukturert, alminnelig brukt og maskinlesbart format.</li>
              <li><strong>Rett til å protestere (art. 21)</strong> — Du kan protestere mot behandling av personopplysninger som er basert på berettiget interesse.</li>
              <li><strong>Rett til å trekke tilbake samtykke (art. 7(3))</strong> — Du kan når som helst trekke tilbake et samtykke du har gitt. Tilbaketrekking påvirker ikke lovligheten av behandling som har funnet sted før tilbaketrekkingen.</li>
            </ul>
            <p>Siden kunnskapsbase.no ikke samler inn personlig identifiserbar informasjon, vil de fleste av disse rettighetene i praksis være begrenset til informasjonskapsler og anonymisert bruksdata. Du kan utøve dine rettigheter ved å kontakte oss på e-postadressen som er oppgitt nederst i denne erklæringen.</p>

            <h2 id="barn">10. Barn og mindreårige</h2>
            <p>Kunnskapsbase.no er et informasjonsnettsted som er åpent for alle aldersgrupper. Vi samler ikke bevisst inn personopplysninger fra barn under 16 år, som er aldersgrensen for samtykke til databehandling i Norge i henhold til personopplysningsloven § 5. Siden vi ikke samler inn personlig identifiserbar informasjon overhodet, og analysecookies kun settes ved aktivt samtykke, anser vi nettstedet som trygt for brukere i alle aldre. Foreldre og foresatte oppfordres til å veilede barn i trygg bruk av internett.</p>

            <h2 id="automatisert">11. Automatisert behandling og profilering</h2>
            <p>Kunnskapsbase.no foretar ingen automatisert individuell beslutningstaking eller profilering som definert i GDPR artikkel 22. Google Analytics utfører aggregert statistisk analyse, men dette innebærer ingen individuell profilering eller automatiserte beslutninger som har rettslige eller tilsvarende virkninger for den enkelte besøkende.</p>

            <h2 id="endringer">12. Endringer i denne erklæringen</h2>
            <p>Vi forbeholder oss retten til å oppdatere denne personvernerklæringen ved behov, for eksempel ved endringer i lovgivning, nye tjenester eller endrede behandlingsaktiviteter. Ved vesentlige endringer som påvirker dine rettigheter eller hvordan personopplysninger behandles, vil vi oppdatere datoen øverst på denne siden og eventuelt informere besøkende gjennom et oppdatert cookie-banner. Vi oppfordrer deg til å gjennomgå denne erklæringen jevnlig for å holde deg informert om hvordan vi beskytter dine opplysninger.</p>

            <h2 id="klage">13. Klagerett</h2>
            <p>Dersom du mener at kunnskapsbase.no behandler personopplysninger i strid med personvernregelverket, har du rett til å klage til tilsynsmyndigheten. I Norge er dette Datatilsynet:</p>
            <div className="pv-contact-box">
              <p><strong>Datatilsynet</strong></p>
              <p>Postboks 458 Sentrum, 0105 Oslo</p>
              <p>Telefon: 22 39 69 00</p>
              <p>E-post: <a href="mailto:postkasse@datatilsynet.no">postkasse@datatilsynet.no</a></p>
              <p>Nettsted: <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a></p>
            </div>

            <h2 id="kontakt">14. Kontakt oss</h2>
            <p>Dersom du har spørsmål om denne personvernerklæringen, ønsker å utøve dine rettigheter, eller har andre henvendelser knyttet til personvern og databehandling på kunnskapsbase.no, kan du kontakte oss:</p>
            <div className="pv-contact-box">
              <p><strong>Kunnskapsbase.no</strong></p>
              <p>E-post: <a href="mailto:post@kunnskapsbase.no">post@kunnskapsbase.no</a></p>
              <p>Vi bestreber oss på å besvare alle henvendelser innen 30 dager, i tråd med kravene i GDPR.</p>
            </div>

            <Link href="/" className="pv-back">← Tilbake til forsiden</Link>
          </article>

          <aside className="toc-sidebar pv-toc-sidebar">
            <nav>
              <div className="pv-toc-title">Innhold</div>
              <ol>
                {TOC_ITEMS.map((item) => (
                  <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}
