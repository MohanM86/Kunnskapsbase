---
title: "Hva er bilde-SEO?"
slug: "hva-er-bilde-seo"
category: "SEO"
subcategory: "Innhold"
description: "Bilde-SEO handler om å optimalisere bilder for søkemotorer. Lær om alt-tekst, filformat, komprimering og hvordan du driver trafikk fra Google Bildesøk."
keywords: ["bilde-SEO", "bildeoptimalisering", "Google Bildesøk", "WebP", "lazy loading", "bildesøk"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "Bilde-SEO"
aliases: ["image SEO", "bildeoptimalisering SEO", "bildeopptimalisering"]
related: ["hva-er-alt-tekst", "hva-er-on-page-seo", "hva-er-core-web-vitals"]
seeAlso: ["hva-er-teknisk-seo", "hva-er-seo-for-nettbutikk"]
tags: ["bilde-SEO", "bildeoptimalisering", "Google Bildesøk", "WebP"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er bilde-SEO?

Bilde-SEO er optimalisering av bilder på nettsiden din for å forbedre synligheten i Google Bildesøk og styrke den generelle SEO-ytelsen til sidene dine. Det omfatter alt fra filnavn og alt-tekst til komprimering, format og kontekstuell plassering. Bilder som er godt optimalisert kan drive betydelig trafikk og forbedre brukeropplevelsen.

> **Kort forklart**
> Bilde-SEO handler om å gjøre bildene dine synlige i Google Bildesøk og sørge for at de styrker – i stedet for å bremse – nettsiden din. God bildeoptimalisering forbedrer både rangering og sidehastighet.

## Hvorfor er bilde-SEO viktig?

Google Bildesøk er den nest største søkemotoren i verden etter Google Websøk. Milliarder av bildesøk gjøres daglig, og bilder dukker stadig oftere opp i vanlige søkeresultater via bildekaruseller. For visuelt orienterte bransjer som interiør, mat, mote, reise og eiendom kan bildetrafikk utgjøre 20–30 % av total organisk trafikk.

I tillegg påvirker bilder Core Web Vitals direkte. Store, uoptimaliserte bilder er den vanligste årsaken til dårlig LCP (Largest Contentful Paint) og CLS (Cumulative Layout Shift). God bildeoptimalisering forbedrer derfor ikke bare bildesynlighet, men også den generelle rangeringen.

## Filnavn

Gi bildene beskrivende filnavn som forteller hva bildet viser. Google leser filnavnet som et signal om bildeinnholdet. Bruk bindestrek mellom ord, hold det kort og relevant, og inkluder søkeord naturlig.

Et godt filnavn er «norsk-fjordlandskap-sognefjorden.webp». Dårlige filnavn er «IMG_4837.jpg», «bilde1.png» eller «photo-2026-03-06.jpeg». Gi bildene beskrivende navn før du laster dem opp – å endre filnavn etter publisering krever omdirigeringer.

## Alt-tekst

Alt-tekst er den viktigste bilde-SEO-faktoren. Den forteller søkemotorer hva bildet viser og brukes av skjermlesere for tilgjengelighet. Skriv en konsis, beskrivende tekst på 5–15 ord som naturlig inkluderer relevante søkeord. Unngå keyword stuffing og «Bilde av»-innledninger.

## Bildeformat

Valg av bildeformat påvirker både kvalitet og filstørrelse. **WebP** er det anbefalte formatet for de fleste bilder – det gir 25–35 % mindre filstørrelse enn JPEG med tilsvarende kvalitet. Nesten alle moderne nettlesere støtter WebP. **AVIF** er det nyeste formatet med enda bedre komprimering enn WebP, men støtten er ikke like bred. **JPEG** er fortsatt akseptabelt for fotografier hvis WebP ikke er mulig. **PNG** bør brukes for bilder som krever transparens eller for grafikk med få farger. **SVG** er ideelt for ikoner, logoer og illustrasjoner som må skalere uten kvalitetstap.

For de fleste nettsider er WebP standardvalget med JPEG som fallback for eldre nettlesere.

## Komprimering

Bildekomprimering reduserer filstørrelsen uten vesentlig synlig kvalitetstap. Det finnes to typer. Lossy komprimering fjerner noe bildedata for dramatisk mindre filstørrelse. For de fleste nettbilder er 75–85 % kvalitet i JPEG/WebP helt tilstrekkelig. Lossless komprimering beholder all bildedata men gir mindre komprimering. Nyttig for bilder der hvert piksel teller, som medisinske bilder eller tekniske diagrammer.

Verktøy for bildekomprimering inkluderer ShortPixel og Imagify som WordPress-plugins med automatisk komprimering, TinyPNG og Squoosh som nettbaserte verktøy for manuell komprimering, og Sharp og imagemin som programmatiske verktøy for byggesystemer.

## Responsive bilder

Moderne nettsider bør servere ulike bildestørrelser til ulike enheter. En mobilbruker trenger ikke et 2000px bredt bilde – en 600px versjon er tilstrekkelig og laster mye raskere.

HTML5 gir to metoder for responsive bilder. Srcset-attributtet lar nettleseren velge riktig bildestørrelse basert på skjermbredde og pixeltethet. Picture-elementet gir full kontroll over hvilke bilder som vises ved ulike forhold, inkludert muligheten til å servere ulike formater.

De fleste CMS-systemer og bildeoptimaliserings-plugins genererer responsive bilder automatisk.

## Lazy loading

Lazy loading utsetter innlastingen av bilder som ikke er synlige i visningsfeltet. I stedet for å laste alle bilder ved sideinnlasting, lastes bilder først når brukeren scroller ned til dem. Dette forbedrer initial lastetid og LCP dramatisk.

HTML5 har innebygd lazy loading via loading-attributtet satt til «lazy» på img-elementet. For mer avansert kontroll kan JavaScript-baserte løsninger som Intersection Observer API brukes.

Viktig: Ikke bruk lazy loading på bilder som er synlige umiddelbart (above the fold) – dette forsinker LCP. Bruk loading satt til «eager» eller utelat attributtet for de første bildene.

## Bildedimensjoner

Definer alltid bredde og høyde på bilder i HTML-en. Uten definerte dimensjoner vet nettleseren ikke hvor mye plass bildet trenger før det er lastet, noe som forårsaker layout shift (CLS). Med eksplisitte dimensjoner reserverer nettleseren riktig plass fra starten.

Moderne CSS-teknikken med aspect-ratio kombinert med width og height-attributter gir best resultat for responsive bilder som tilpasser seg bredden uten CLS.

## Kontekst og plassering

Google bruker ikke bare bildets metadata, men også den omgivende teksten for å forstå hva bildet viser. Plasser bilder nær relevant tekst som beskriver eller relaterer til bildeinnholdet. En bildetekst (caption) under bildet gir ekstra kontekst og er synlig for brukere.

Bruk bilder som beriker innholdet – ikke bare som pynt. Diagrammer, infografikk, skjermbilder og illustrasjoner som visualiserer det teksten forklarer gir verdi til både brukere og søkemotorer.

## Bilde-sitemap

For nettsider med mange bilder kan en bilde-sitemap hjelpe Google med å oppdage bilder som kanskje ikke finnes gjennom vanlig crawling. Bildeinformasjon kan enten inkluderes i den vanlige XML-sitemapen via image-namespace, eller i en separat bilde-sitemap.

## Opphavsrett og originalitet

Bruk originale bilder der det er mulig. Google vektlegger unike bilder høyere enn stockfoto som brukes på tusenvis av nettsider. Egne fotografier, skjermbilder, diagrammer og illustrasjoner differensierer innholdet ditt.

Hvis du bruker andres bilder, sørg for at du har rettigheter til bruk. Creative Commons-lisensierte bilder og royalty-free stockfoto er trygge alternativer, men de gir mindre differensiering.

## Ofte stilte spørsmål

### Hvilke bildestørrelser bør jeg bruke?
For innholdsbilder er 800–1200px bredde typisk tilstrekkelig. For hero-bilder og bakgrunner kan du gå opp til 1920px. Server alltid responsive varianter slik at mobile brukere får mindre filer.

### Påvirker bildefilnavn virkelig SEO?
Ja, Google bruker filnavnet som et signal om bildeinnholdet. Det er en liten faktor, men enkelt å gjøre riktig. Beskrivende filnavn hjelper også med organisering.

### Bør jeg bruke WebP eller AVIF?
WebP er det tryggeste valget med bred nettleserstøtte og god komprimering. AVIF gir enda bedre komprimering men har noe svakere støtte. Ideelt sett serverer du begge med picture-elementet og JPEG som fallback.

### Hvor mye kan bilde-SEO øke trafikken?
For visuelt orienterte bransjer kan godt optimaliserte bilder øke total organisk trafikk med 10–30 %. For teksttunge nettsider er effekten mindre, men god bildeoptimalisering forbedrer sidehastighet som hjelper all SEO.
