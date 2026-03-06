---
title: "Hva er Core Web Vitals?"
slug: "hva-er-core-web-vitals"
category: "SEO"
subcategory: "Teknisk"
description: "Core Web Vitals er Googles mål på brukeropplevelsen på nettsider. Lær om LCP, INP og CLS – og hvordan du forbedrer dem."
keywords: ["Core Web Vitals", "LCP", "INP", "CLS", "sidehastighet", "brukeropplevelse"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 8
draft: false
entityType: "Concept"
topic: "Core Web Vitals"
aliases: ["CWV", "Web Vitals", "kjerneytelsesmål"]
related: ["hva-er-teknisk-seo", "hva-er-seo", "hva-er-google-search-console"]
seeAlso: ["hva-er-on-page-seo", "hva-er-strukturerte-data"]
tags: ["Core Web Vitals", "LCP", "INP", "CLS", "PageSpeed"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er Core Web Vitals?

Core Web Vitals er et sett med standardiserte ytelsesmål fra Google som måler den reelle brukeropplevelsen på en nettside. De tre målingene fokuserer på lastetid, interaktivitet og visuell stabilitet – de tre aspektene av brukeropplevelse som Google anser som viktigst.

> **Kort forklart**
> Core Web Vitals er Googles måte å tallfeste hvor god eller dårlig brukeropplevelsen på nettsiden din er. De er en bekreftet rangeringsfaktor og påvirker direkte hvor høyt du rangerer i søkeresultatene.

## De tre Core Web Vitals

### LCP – Largest Contentful Paint

LCP måler lastetiden for det største synlige innholdselementet i visningsfeltet. Det kan være et stort bilde, en videoplakat, en stor tekstblokk eller et bakgrunnsbilde. LCP reflekterer det brukeren opplever som «når siden er lastet».

En god LCP er under 2,5 sekunder. Mellom 2,5 og 4 sekunder trenger forbedring, og over 4 sekunder regnes som dårlig.

De vanligste årsakene til dårlig LCP er treg serverresponstid der serveren bruker lang tid på å svare (høy TTFB), render-blokkerende ressurser der store CSS- og JavaScript-filer hindrer nettleseren i å vise innholdet, treg ressurslasting der store bilder eller skrifttyper tar lang tid å laste ned, og klientsiderendering der JavaScript må kjøre før innholdet vises.

For å forbedre LCP bør du optimalisere serveren med caching og CDN, komprimere og bruke moderne bildeformater som WebP og AVIF, forhåndslaste kritiske ressurser med `<link rel="preload">`, fjerne eller utsette unødvendig JavaScript, og bruke server-side rendering eller static generation.

### INP – Interaction to Next Paint

INP (Interaction to Next Paint) erstattet FID (First Input Delay) i mars 2024 som Core Web Vital. INP måler den totale responstiden fra en bruker interagerer med siden (klikk, tastetrykk, tap) til nettleseren oppdaterer det visuelle. I motsetning til FID som bare målte den første interaksjonen, måler INP alle interaksjoner gjennom hele sidebesøket.

En god INP er under 200 millisekunder. Mellom 200 og 500 millisekunder trenger forbedring, og over 500 millisekunder er dårlig.

Vanlige årsaker til dårlig INP er tungt JavaScript som blokkerer hovedtråden, tredjepartsskript som annonser, analyseverktøy og chat-widgets, store DOM-oppdateringer der nettleseren må rendere mange elementer på nytt, og manglende kodedeling der hele applikasjonen lastes selv om bare en liten del trengs.

For å forbedre INP bør du bryte opp lange JavaScript-oppgaver i mindre deler, bruke `requestAnimationFrame` og `requestIdleCallback`, minimere tredjepartsskript, bruke kodedeling og lazy loading, og virtualisere store lister og tabeller.

### CLS – Cumulative Layout Shift

CLS måler hvor mye innholdet på siden uventet flytter seg mens det lastes. Hvis du noen gang har prøvd å klikke på en knapp og den plutselig hoppet ned fordi et bilde lastet inn over den, har du opplevd layout shift.

En god CLS er under 0,1. Mellom 0,1 og 0,25 trenger forbedring, og over 0,25 er dårlig.

De vanligste årsakene til dårlig CLS er bilder og videoer uten definerte dimensjoner, annonser og embeds som endrer størrelse, dynamisk injisert innhold over eksisterende innhold, webfonter som forårsaker FOUT (Flash of Unstyled Text), og elementer som lastes asynkront og skyver innhold.

For å forbedre CLS bør du alltid definere bredde og høyde på bilder og videoer, reservere plass til annonser og embeds med faste dimensjoner, bruke `font-display: swap` sammen med forhåndslasting av skrifttyper, unngå å sette inn innhold over eksisterende innhold, og bruke CSS `contain`-egenskapen for å isolere layout-endringer.

## Hvordan måle Core Web Vitals

### Feltdata vs. laboratoriedata

Det finnes to typer data for Core Web Vitals. **Feltdata** (field data) kommer fra ekte brukere via Chrome User Experience Report (CrUX). Det er denne dataen Google bruker for rangering. **Laboratoriedata** (lab data) måles i kontrollerte omgivelser med verktøy som Lighthouse. Den er nyttig for feilsøking, men reflekterer ikke nødvendigvis den reelle brukeropplevelsen.

### Verktøy for måling

**Google PageSpeed Insights** viser både feltdata og laboratoriedata for en gitt URL, med konkrete forbedringsforslag. **Google Search Console** gir en oversikt over Core Web Vitals for hele nettstedet, gruppert i «Bra», «Trenger forbedring» og «Dårlig». **Chrome DevTools** har et ytelsespanel der du kan profilere siden og identifisere flaskehalser i detalj. **web.dev/measure** er Googles eget verktøy for å teste ytelse, tilgjengelighet og SEO.

## Core Web Vitals som rangeringsfaktor

Google bekreftet i 2021 at Core Web Vitals er en rangeringsfaktor. Det betyr ikke at en side med perfekte vitals automatisk rangerer høyt – innholdskvalitet og relevans er fortsatt viktigere. Men når to sider er like relevante, kan Core Web Vitals være det som vipper rangeringen i din favør.

Det er verdt å merke seg at Google bruker feltdata fra CrUX, ikke laboratorietester. Det betyr at nettsiden din trenger et minimum antall besøkende for å ha tilstrekkelig data. For nye eller lite besøkte sider kan Google falle tilbake på andre signaler.

## Core Web Vitals for norske nettsider

Norge har generelt god internettinfrastruktur og raske nettverksforbindelser, noe som gir et godt utgangspunkt for Core Web Vitals. Likevel er det viktig å teste med varierte nettverksforhold, siden mobile brukere i grisgrendte strøk kan ha tregere forbindelser.

Mange norske nettsider bruker tunge tredjepartsverktøy som cookie-samtykkeløsninger (påkrevd av GDPR), analyseverktøy og markedsføringspikser, og chat-widgets og kundeserviceløsninger. Disse kan ha betydelig negativ innvirkning på Core Web Vitals, spesielt INP og LCP. Vurder nøye om alle tredjepartsskript er nødvendige, og last dem asynkront der det er mulig.

## Ofte stilte spørsmål

### Hvor viktige er Core Web Vitals for rangering?
De er en bekreftet rangeringsfaktor, men ikke den viktigste. Google har uttalt at innholdskvalitet og relevans veier tyngre. Tenk på Core Web Vitals som en tiebreaker mellom ellers like sider.

### Hva erstattet FID?
INP (Interaction to Next Paint) erstattet FID (First Input Delay) som Core Web Vital i mars 2024. INP er et mer helhetlig mål fordi det vurderer alle interaksjoner, ikke bare den første.

### Kan jeg bestå Core Web Vitals uten å endre koden?
Noen forbedringer kan gjøres uten kodeendringer, som å optimalisere bilder og bruke et CDN. Men for vesentlige forbedringer, spesielt på INP, kreves det som regel endringer i koden.

### Hvor ofte oppdaterer Google Core Web Vitals-data?
CrUX-data oppdateres med en 28-dagers rullerende periode. Det betyr at forbedringer du gjør i dag vil gradvis reflekteres i dataen over de neste fire ukene.
