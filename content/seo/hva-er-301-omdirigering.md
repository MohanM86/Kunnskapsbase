---
title: "Hva er 301-omdirigering?"
slug: "hva-er-301-omdirigering"
category: "SEO"
subcategory: "Teknisk"
description: "En 301-omdirigering sender brukere og søkemotorer permanent fra én URL til en annen. Lær når og hvordan du bruker omdirigeringer riktig for SEO."
keywords: ["301-omdirigering", "redirect", "301 redirect", "302 omdirigering", "URL-omdirigering"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Omdirigeringer"
aliases: ["301 redirect", "permanent omdirigering", "URL redirect", "omdirigering"]
related: ["hva-er-teknisk-seo", "hva-er-seo-vennlige-urler", "hva-er-duplisert-innhold"]
seeAlso: ["hva-er-crawling-og-indeksering", "hva-er-google-search-console"]
tags: ["301-omdirigering", "redirect", "teknisk SEO", "URL"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er 301-omdirigering?

En 301-omdirigering er en permanent videresending fra én URL til en annen. Når en bruker eller søkemotorrobot besøker den gamle URL-en, sendes de automatisk til den nye. HTTP-statuskoden 301 forteller søkemotorer at flyttingen er permanent, og at all rangeringskraft skal overføres til den nye URL-en.

> **Kort forklart**
> En 301-omdirigering er som en permanent adresseendring – den forteller alle (brukere og søkemotorer) at innholdet har flyttet til en ny adresse, og all SEO-verdi følger med til den nye URL-en.

## Hvorfor er 301-omdirigeringer viktige for SEO?

Uten omdirigeringer ville endring av URL-er bety tap av all opparbeidet rangeringskraft. Tilbakekoblinger som peker til den gamle URL-en ville lede til 404-feil, og brukere som har bokmerket siden ville møte en blindvei.

En korrekt implementert 301-omdirigering overfører mesteparten av rangeringskraften fra den gamle URL-en til den nye. Google har bekreftet at 301-omdirigeringer ikke lenger medfører noe tap av PageRank – den nye URL-en arver tilnærmet full SEO-verdi fra den gamle.

## 301 vs. 302 vs. 307

Det finnes flere typer omdirigeringer med forskjellig betydning. **301 Moved Permanently** er permanent omdirigering og den vanligste for SEO. Den forteller søkemotorer at innholdet har flyttet for godt. **302 Found** er midlertidig omdirigering som signaliserer at den gamle URL-en fortsatt er den primære. Søkemotorer beholder den gamle URL-en i indeksen. **307 Temporary Redirect** er HTTP/2-versjonen av 302 med identisk funksjon.

For SEO er hovedregelen enkel: bruk 301 for permanente endringer og 302 for midlertidige. Feil bruk av 302 der du burde brukt 301 kan føre til at Google beholder den gamle URL-en i indeksen og ikke overfører rangeringskraft til den nye.

## Når trenger du 301-omdirigering?

De vanligste scenariene for 301-omdirigeringer er ved URL-endringer når du omstrukturerer URL-ene på nettstedet, ved domenebytte når du flytter til et nytt domene, ved konsolidering av innhold når du slår sammen flere svake sider til én sterk side, for HTTP til HTTPS-migrering når du bytter til sikker forbindelse, for www-normalisering for å samle trafikk på enten www- eller ikke-www-versjonen, og ved fjerning av innhold der du omdirigerer slettede sider til mest relevant alternativ.

## Slik implementerer du 301-omdirigeringer

### Server-side omdirigeringer

Den mest effektive metoden er server-side omdirigeringer. For Apache-servere bruker du RewriteRule-direktiver i .htaccess-filen. For Nginx-servere bruker du return 301-direktiver i serverkonfigurasjonen. For Node.js og moderne rammeverk konfigurerer du omdirigeringer i next.config.js, vercel.json eller tilsvarende konfigurasjonsfiler.

### CMS-plugins

De fleste CMS-systemer har plugins for omdirigeringshåndtering. For WordPress er Redirection, Yoast SEO Premium og Rank Math populære valg. Disse lar deg administrere omdirigeringer via et grensesnitt uten å redigere serverkonfigurasjon.

### Hosting og CDN

Mange hostingtjenester og CDN-er som Vercel, Netlify og Cloudflare tilbyr innebygd omdirigeringshåndtering via konfigurasjonsfiler eller dashboards.

## Omdirigeringskjeder

En omdirigeringskjede oppstår når en URL omdirigerer til en annen URL som igjen omdirigerer videre. For eksempel kan side A omdirigere til side B som omdirigerer til side C. Kjeder er problematiske fordi hvert ledd i kjeden reduserer hastigheten, Googlebot kan gi opp etter et visst antall omdirigeringer, og rangeringskraft kan gå tapt gjennom lange kjeder.

Hold omdirigeringer så direkte som mulig – alltid fra den opprinnelige URL-en direkte til den endelige destinasjonen. Gjennomgå regelmessig for å rette opp kjeder som har oppstått over tid.

## Omdirigeringsløkker

En løkke oppstår når side A omdirigerer til side B som omdirigerer tilbake til side A. Dette skaper en uendelig syklus som gjør begge sidene utilgjengelige. Nettlesere viser typisk en feilmelding, og søkemotorer kan ikke crawle noen av sidene.

Løkker oppstår oftest ved feil i omdirigeringsregler, spesielt når flere regler interagerer uventet. Test alltid nye omdirigeringer grundig for å fange opp løkker.

## Omdirigering ved domenebytte

Et domenebytte er en av de mest kritiske SEO-operasjonene. For å bevare rangeringskraften bør du opprette 1-til-1-omdirigeringer fra hver side på det gamle domenet til den tilsvarende siden på det nye. En samleomdirigering av alt til forsiden mister mye av verdien. Behold omdirigeringene aktive i minst ett år, helst permanent. Oppdater Google Search Console med det nye domenet. Overvåk trafikk og rangeringer tett i månedene etter byttet.

Selv med perfekte omdirigeringer kan du oppleve midlertidig fluktasjon i rangeringer og trafikk. Full gjenoppretting tar typisk 2–6 måneder.

## Omdirigering av slettede sider

Når du sletter en side bør du omdirigere den til det mest relevante alternativet. Hvis artikkelen ble oppdatert og erstattet, omdiriger til den nye versjonen. Hvis temaet er dekket i en annen artikkel, omdiriger dit. Hvis det ikke finnes noe relevant alternativ, kan du omdirigere til kategorisiden eller forsiden. Bare som absolutt siste utvei bør du la URL-en returnere 404.

## Overvåking

Google Search Console rapporterer omdirigeringsproblemer under «Sider»-rapporten. Se etter «Omdirigering»-statusen og sjekk at omdirigeringene fungerer som forventet. Screaming Frog kan crawle nettstedet og identifisere omdirigeringskjeder, løkker og andre problemer.

Opprett en logg over alle omdirigeringer du setter opp, med gammel URL, ny URL, dato og årsak. Dette gjør feilsøking enklere og hindrer at omdirigeringer glemmes over tid.

## Ofte stilte spørsmål

### Mister jeg rangeringskraft med 301-omdirigering?
Google har bekreftet at 301-omdirigeringer ikke lenger medfører PageRank-tap. Tilnærmet all rangeringskraft overføres. Du kan likevel oppleve midlertidig fluktasjon mens Google prosesserer endringen.

### Hvor lenge bør en 301-omdirigering være aktiv?
Ideelt sett permanent. Google anbefaler å beholde omdirigeringer i minst ett år. Etter det har Google typisk oppdatert indeksen, men det er ingen grunn til å fjerne dem.

### Kan for mange omdirigeringer skade?
Mange omdirigeringer i seg selv er ikke et problem. Men omdirigeringskjeder (A→B→C→D) bremser lasting og kan føre til tap av rangeringskraft. Hold omdirigeringer direkte – alltid fra kilde til endelig destinasjon.

### Hva er forskjellen mellom client-side og server-side omdirigering?
Server-side omdirigeringer (301, 302) skjer på serveren før noe sendes til nettleseren. Client-side omdirigeringer (JavaScript, meta refresh) skjer i nettleseren etter at siden er lastet. For SEO er server-side alltid foretrukket fordi de er raskere og overfører rangeringskraft mer pålitelig.
