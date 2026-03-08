import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personvernerklæring',
  description: 'Personvernerklæring for kunnskapsbase.no – informasjon om hvordan vi behandler data og bruker informasjonskapsler.',
};

export default function PersonvernPage() {
  return (
    <article style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem', lineHeight: '1.8', color: '#e0e0e0' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Personvernerklæring</h1>
      <p style={{ color: '#888', marginBottom: '2rem' }}>Sist oppdatert: 8. mars 2026</p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Hvem vi er</h2>
      <p>Kunnskapsbase.no er en norsk kunnskapsbase som tilbyr artikler og veiledninger innen teknologi, AI, økonomi, helse, vitenskap og mer. Nettstedet drives fra Norge.</p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Hvilke data vi samler inn</h2>
      <p>Vi samler kun inn anonymisert bruksdata gjennom Google Analytics dersom du gir samtykke via cookie-banneret. Dette inkluderer informasjon om hvilke sider som besøkes, hvor lenge besøk varer, og hvilken enhet og nettleser som brukes. Vi samler ikke inn personlig identifiserbar informasjon som navn, e-post eller IP-adresser.</p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Informasjonskapsler (cookies)</h2>
      <p>Vi bruker Google Analytics for å forstå hvordan nettstedet brukes. Analysecookies settes kun dersom du klikker &laquo;Godta&raquo; i cookie-banneret. Hvis du klikker &laquo;Avslå&raquo;, settes ingen analysecookies og ingen bruksdata samles inn.</p>
      <p>Du kan når som helst slette informasjonskapsler i nettleseren din. Hvis du ønsker å trekke tilbake samtykket, kan du slette cookies og laste siden på nytt.</p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Dine rettigheter</h2>
      <p>I henhold til personopplysningsloven og GDPR har du rett til å be om innsyn i, retting av eller sletting av dine personopplysninger. Siden vi ikke samler inn personlig identifiserbar informasjon, vil dette i praksis være begrenset til informasjonskapsler lagret i din nettleser.</p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Tredjeparter</h2>
      <p>Google Analytics behandler anonymisert data på vegne av oss. Du kan lese mer om hvordan Google behandler data på <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', textDecoration: 'underline' }}>Googles personvernerklæring</a>.</p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.75rem' }}>Kontakt</h2>
      <p>Har du spørsmål om personvern, kan du kontakte oss via e-post: <a href="mailto:post@kunnskapsbase.no" style={{ color: '#4ade80', textDecoration: 'underline' }}>post@kunnskapsbase.no</a></p>
    </article>
  );
}
