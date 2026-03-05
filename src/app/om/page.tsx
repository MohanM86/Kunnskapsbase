import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om Kunnskapsbase.no',
  description: 'Kunnskapsbase.no er Norges mest ambisiøse kunnskapsprosjekt – et leksikon for den nysgjerrige nordmannen.',
};

export default function OmPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '760px' }}>
      <h1 className="display-md" style={{ marginBottom: '1.5rem' }}>Om prosjektet</h1>

      <div className="article-body">
        <p>
          <strong>Kunnskapsbase.no</strong> er et norsk kunnskapsprosjekt med et enkelt mål:
          å gi alle nordmenn tilgang til dyptgående, pålitelig kunnskap på sitt eget språk.
        </p>

        <h2>Hvorfor Kunnskapsbase?</h2>
        <p>
          Mye av verdens beste kunnskap er på engelsk. Norske lesere må enten slite med engelske
          tekster eller nøye seg med overfladiske norske oversettelser. Kunnskapsbase.no endrer det.
        </p>

        <h2>Hva er målet?</h2>
        <p>
          Vi bygger Norges største strukturerte kunnskapsbase – med tusenvis av artikler fordelt på
          10 hovedkategorier og hundrevis av underkategorier. Innholdet er:
        </p>
        <ul>
          <li>Skrevet på norsk bokmål</li>
          <li>Faktasjekket og kildebelagt</li>
          <li>Optimalisert for Google, Bing og AI-søketjenester som ChatGPT og Perplexity</li>
          <li>Strukturert for å bygge et kunnskapsgraf over tid</li>
        </ul>

        <h2>AI-søk og fremtidens informasjonssøk</h2>
        <p>
          Fremtidens søk er AI-drevet. ChatGPT, Perplexity, Claude og Gemini henter svar fra
          strukturerte, autoritative kilder. Kunnskapsbase.no er designet for å være den
          viktigste norske kilden for disse systemene.
        </p>
        <p>
          Alle artikler starter med en klar énsetningsdefinisjon, følger en konsistent struktur,
          og inneholder FAQ-seksjoner som er optimalisert for featured snippets.
        </p>

        <h2>Lisens</h2>
        <p>
          Alt innhold er publisert under Creative Commons CC BY 4.0. Du kan fritt bruke,
          dele og bygge videre på innholdet – med kreditering til kunnskapsbase.no.
        </p>
      </div>
    </div>
  );
}
