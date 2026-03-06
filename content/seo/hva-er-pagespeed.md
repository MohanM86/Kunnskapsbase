---
title: "Hva er PageSpeed?"
slug: "hva-er-pagespeed"
category: "SEO"
subcategory: "Verktøy"
description: "PageSpeed Insights er Googles gratis verktøy for å måle og forbedre nettsiders hastighet. Lær hvordan du tolker resultatene og forbedrer ytelsen."
keywords: ["PageSpeed", "PageSpeed Insights", "sidehastighet", "Lighthouse", "ytelsesscore"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Tool"
topic: "PageSpeed"
aliases: ["PageSpeed Insights", "Google PageSpeed", "PSI", "Lighthouse"]
related: ["hva-er-core-web-vitals", "hva-er-teknisk-seo", "hva-er-mobil-seo"]
seeAlso: ["hva-er-google-search-console", "hva-er-bilde-seo"]
tags: ["PageSpeed", "Lighthouse", "sidehastighet", "ytelse"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er PageSpeed?

PageSpeed Insights (PSI) er et gratis verktøy fra Google som analyserer ytelsen til nettsider på både mobil og desktop. Det gir en score fra 0 til 100, identifiserer spesifikke ytelsesproblemer, og foreslår konkrete forbedringer. PageSpeed er basert på Lighthouse – Googles åpen kildekode-verktøy for nettstedsanalyse.

> **Kort forklart**
> PageSpeed Insights måler hvor raskt nettsiden din laster og gir en score fra 0 til 100. Høyere score betyr raskere nettside, bedre brukeropplevelse og potensielt bedre SEO-rangering.

## PageSpeed og SEO

Sidehastighet er en bekreftet Google-rangeringsfaktor. Trege sider rangerer dårligere enn raske sider, alt annet likt. I tillegg påvirker hastighet brukeropplevelsen direkte – studier viser at over halvparten av mobilbrukere forlater sider som tar mer enn tre sekunder å laste.

Google bruker Core Web Vitals som de primære hastighetssignalene for rangering, og PageSpeed Insights er det viktigste verktøyet for å måle og forbedre disse.

## Forstå PageSpeed-scoren

### Scoreskalaen

Scoren deles i tre kategorier. Grønt fra 90 til 100 betyr god ytelse. Oransje fra 50 til 89 betyr at forbedring trengs. Rødt fra 0 til 49 betyr dårlig ytelse som krever umiddelbar oppmerksomhet.

Scoren beregnes basert på seks ytelsesmetrikker vektet forskjellig. First Contentful Paint måler tiden til første synlige innhold og utgjør 10 % av scoren. Largest Contentful Paint måler tiden til største innholdselement og utgjør 25 %. Total Blocking Time måler tiden hovedtråden er blokkert og utgjør 30 %. Cumulative Layout Shift måler visuell stabilitet og utgjør 25 %. Speed Index måler hvor raskt innholdet blir visuelt komplett og utgjør 10 %.

### Feltdata vs. laboratoriedata

PageSpeed viser to typer data. **Feltdata** (Core Web Vitals Assessment) er basert på ekte brukerdata fra Chrome User Experience Report. Det er disse dataene Google bruker for rangering. Feltdata krever et minimum antall besøkende og kan vise «Ingen data tilgjengelig» for nye eller lite besøkte sider.

**Laboratoriedata** (Lighthouse) genereres ved å simulere en sideinnlasting i kontrollerte omgivelser. Resultatene kan variere mellom kjøringer og reflekterer ikke nødvendigvis den ekte brukeropplevelsen, men er nyttige for å identifisere spesifikke problemer.

## De viktigste forbedringsforslagene

### Eliminere render-blokkerende ressurser

CSS- og JavaScript-filer som lastes i head-seksjonen blokkerer sidevisning til de er ferdig lastet. Løsninger er å flytte ikke-kritisk CSS og JavaScript til bunnen av dokumentet, laste ressurser asynkront med async eller defer-attributter, og ekstrahere kritisk CSS inline i head for umiddelbar rendering.

### Komprimere og tilpasse bilder

Bilder er typisk den største ressursen på en nettside. Konverter til WebP eller AVIF for bedre komprimering. Bruk responsive bilder med srcset for å servere riktig størrelse. Komprimer med lossy komprimering på 75–85 % kvalitet. Bruk lazy loading for bilder under folden.

### Redusere JavaScript

Overdrevent JavaScript er den vanligste årsaken til dårlig Total Blocking Time. Fjern ubrukt JavaScript med code splitting og tree shaking. Utsett lasting av tredjepartsskript som ikke er kritiske. Bruk dynamisk import for kode som bare trengs ved interaksjon.

### Bruke effektiv caching

Riktig konfigurert caching lar returnerende besøkende laste sider mye raskere. Sett lang cache-levetid for statiske ressurser som bilder, CSS og JavaScript. Bruk versjonering i filnavn for cache-busting ved oppdateringer. Konfigurer CDN for å servere statisk innhold fra servere nær brukeren.

### Minimere CSS og JavaScript

Minifisering fjerner unødvendige tegn som mellomrom, kommentarer og linjeskift fra kode. De fleste byggesystemer gjør dette automatisk. Vurder også å fjerne ubrukt CSS med verktøy som PurgeCSS.

## Tolke resultatene

### Mobil vs. desktop

PageSpeed viser separate scorer for mobil og desktop. Mobilscoren er nesten alltid lavere fordi testen simulerer en middelklasse mobilenhet på en middels rask forbindelse. Fokuser primært på mobilscoren siden Google bruker mobile-first indexing.

### Muligheter vs. diagnostikk

«Muligheter» viser konkrete forbedringer med estimert tidsbesparelse. Prioriter tiltakene med størst estimert besparelse. «Diagnostikk» gir teknisk informasjon om ytelsesaspekter som ikke direkte påvirker scoren, men som kan indikere underliggende problemer.

### Tredjepartsskript

Mange ytelsesproblemer skyldes tredjepartsskript som analyseverktøy, annonseplattformer, chat-widgets og cookie-samtykkeløsninger. PageSpeed identifiserer tredjepartspåvirkning, og det kan være verdt å vurdere om alle tredjepartsskript er nødvendige.

## PageSpeed-verktøy

Utover PageSpeed Insights finnes det flere relaterte verktøy. **Lighthouse** i Chrome DevTools gir samme analyse men med mer detaljerte resultater og mulighet for tilpasset konfigurasjon. **WebPageTest** gir avansert ytelsesanalyse med vannfallsdiagrammer og filmstripe-visning. **GTmetrix** kombinerer Lighthouse-data med egne analyser og har et brukervennlig grensesnitt. **web.dev/measure** er Googles eget testverktøy som inkluderer tilgjengelighet og SEO i tillegg til ytelse.

## Praktiske mål

For de fleste nettsider er en PageSpeed-score på 90+ på desktop og 70+ på mobil realistisk og tilstrekkelig. Perfekte 100 på mobil krever svært minimal JavaScript og er urealistisk for de fleste dynamiske nettsider.

Viktigere enn selve scoren er å bestå Core Web Vitals-vurderingen med grønne verdier for LCP, INP og CLS. En nettside med score 85 men gode Core Web Vitals er bedre stilt enn en med score 95 men dårlige vitals.

## PageSpeed for norske nettsider

Norske nettsider har generelt gode forutsetninger for ytelse takket være god internettinfrastruktur. Men mange norske sider bremses av cookie-samtykkeløsninger som er påkrevd av GDPR, tunge analyseverktøy og markedsføringspikser, og uoptimaliserte bilder og videoer.

For norske nettsider er det spesielt viktig å velge en hostingleverandør med servere i Norge eller Norden for lav latens, optimalisere cookie-samtykkeløsningen for minimal ytelsesvpåvirkning, og vurdere om alle tredjepartsskript er nødvendige.

## Ofte stilte spørsmål

### Hva er en god PageSpeed-score?
90+ er god, 50–89 trenger forbedring, under 50 er dårlig. For mobil er 70+ realistisk for de fleste nettsider. Viktigere enn scoren er at Core Web Vitals er grønne.

### Varierer PageSpeed-scoren mellom tester?
Ja, laboratorietester kan variere med 5–10 poeng mellom kjøringer. Feltdata er mer stabil. Kjør flere tester og se på gjennomsnittet.

### Påvirker PageSpeed-scoren rangering direkte?
Scoren i seg selv er ikke en rangeringsfaktor. Google bruker Core Web Vitals (LCP, INP, CLS) basert på feltdata. PageSpeed er et verktøy for å måle og forbedre disse.

### Kan jeg oppnå 100 på mobil?
Det er mulig for enkle, statiske sider med minimal JavaScript. For dynamiske nettsider med tredjepartsskript er det svært vanskelig. Sikt på 80+ og fokuser på grønne Core Web Vitals.
