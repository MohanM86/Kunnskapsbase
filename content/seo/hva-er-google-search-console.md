---
title: "Hva er Google Search Console?"
slug: "hva-er-google-search-console"
category: "SEO"
subcategory: "Verktøy"
description: "Google Search Console er et gratis verktøy fra Google som lar deg overvåke og forbedre nettsiden din i søkeresultatene. Lær hvordan du bruker det."
keywords: ["Google Search Console", "GSC", "søkeanalyse", "indeksering", "crawl-feil", "SEO-verktøy"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Tool"
topic: "SEO-verktøy"
aliases: ["GSC", "Search Console", "Google Webmaster Tools"]
related: ["hva-er-seo", "hva-er-teknisk-seo", "hva-er-soekeord"]
seeAlso: ["hva-er-on-page-seo", "hva-er-lenkebygging"]
tags: ["Google Search Console", "SEO-verktøy", "søkeanalyse", "indeksering"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er Google Search Console?

Google Search Console (GSC) er et gratis verktøy fra Google som gir deg innsikt i hvordan Google ser og indekserer nettsiden din. Det var tidligere kjent som Google Webmaster Tools og er det viktigste SEO-verktøyet for alle som ønsker å forstå og forbedre sin synlighet i Google-søk.

> **Kort forklart**
> Google Search Console er en gratis tjeneste som viser deg hvordan nettsiden din presterer i Google-søk, hvilke problemer Google finner, og hvordan du kan forbedre synligheten.

## Hvorfor bør du bruke Google Search Console?

Google Search Console er det eneste verktøyet som gir deg data direkte fra Google selv. Mens tredjepartsverktøy som Ahrefs og SEMrush estimerer trafikk og rangeringer, gir GSC eksakte tall for visninger, klikk og gjennomsnittlig posisjon for nettsiden din.

Verktøyet er nyttig for å oppdage og fikse tekniske problemer før de påvirker rangeringen, forstå hvilke søkeord som gir trafikk og identifisere muligheter, sikre at Google kan crawle og indeksere alle viktige sider, overvåke Core Web Vitals og brukeropplevelse, og oppdage sikkerhetsroblemer eller manuelle handlinger fra Google.

## Kom i gang

For å bruke Google Search Console trenger du en Google-konto og å verifisere at du eier nettsiden. Du kan verifisere eierskapet på flere måter: via DNS-oppføring hos domeneregistraren din (anbefalt for hele domenet), via en HTML-fil du laster opp til nettsiden, via en meta-tag i HTML-koden, eller via Google Analytics eller Google Tag Manager hvis du allerede bruker disse.

DNS-verifisering anbefales fordi den dekker alle underdomener og protokollvarianter (http, https, www, ikke-www) i én verifisering.

## Ytelsesrapporten

Ytelsesrapporten er hjertet av Google Search Console og viser fire nøkkeltall.

**Totalt antall klikk** er hvor mange ganger brukere klikket på nettsiden din fra Google-søk. Dette er din faktiske organiske trafikk fra Google.

**Totalt antall visninger** er hvor mange ganger nettsiden din dukket opp i søkeresultatene, uavhengig av om noen klikket. Høye visninger med lave klikk kan indikere at titlene eller meta-beskrivelsene dine trenger forbedring.

**Gjennomsnittlig CTR** (klikkrate) er forholdet mellom klikk og visninger. En CTR på 3–5 % er gjennomsnittlig, mens sider som rangerer på topp 3 typisk har 10–30 % CTR.

**Gjennomsnittlig posisjon** viser din gjennomsnittlige rangering for alle søkeord. Vær oppmerksom på at dette er et gjennomsnitt – individuelle søkeord kan rangere svært forskjellig.

Du kan filtrere rapporten etter søkeord, sider, land, enhetstype og datoperiode. Dette er uvurderlig for å identifisere hvilke søkeord som er nær toppen og som kan gi stor gevinst med litt optimalisering, sider med høye visninger men lav CTR (mulighet for bedre titler), sesongvariasjoner og trender i trafikken, og forskjeller mellom mobil- og desktop-ytelse.

## Indekseringsrapporten

Under «Sider» finner du en oversikt over alle URL-er Google har oppdaget og om de er indeksert eller ikke. Sider som ikke er indeksert kan ha statusen «Oppdaget – ikke indeksert ennå» som betyr at Google kjenner til siden men ikke har prioritert å crawle den, «Crawlet – ikke indeksert» som betyr at Google har lest siden men valgt å ikke inkludere den i indeksen (ofte pga. tynt innhold), «Blokkert av robots.txt» som betyr at din robots.txt-fil hindrer Google fra å crawle siden, eller «Noindex-tag» som betyr at du selv har bedt Google om å ikke indeksere siden.

Sjekk denne rapporten regelmessig for å sikre at alle viktige sider er indeksert.

## URL-inspeksjon

URL-inspeksjonsverktøyet lar deg sjekke statusen til en spesifikk URL. Du kan se om siden er indeksert og når den sist ble crawlet, be Google om å indeksere en ny eller oppdatert side raskt, se hvordan Google rendrer siden (nyttig for JavaScript-tunge sider), og oppdage eventuelle problemer med strukturerte data eller mobilbrukbarhet.

Etter at du har publisert nytt innhold, kan du bruke dette verktøyet for å sende en forespørsel om indeksering slik at Google finner siden raskere enn å vente på neste naturlige crawl.

## Sitemap-innlevering

I GSC kan du sende inn XML-sitemap-en din slik at Google vet nøyaktig hvilke sider som finnes på nettsiden din. Gå til «Nettstedskart» og legg inn URL-en til sitemap-filen din (typisk `dittnettsted.no/sitemap.xml`).

Etter innlevering viser GSC statusen til sitemap-en: hvor mange URL-er den inneholder, hvor mange som er indeksert, og eventuelle feil. Hvis sitemap-en inneholder URL-er som ikke er indeksert, bør du undersøke hvorfor.

## Core Web Vitals

GSC inkluderer en rapport over Core Web Vitals som viser hvordan ekte brukere opplever nettsiden din. Rapporten deler URL-er inn i tre kategorier: «Bra» (grønn), «Trenger forbedring» (gul) og «Dårlig» (rød).

Denne rapporten er basert på reelle brukerdata fra Chrome-nettleseren (CrUX-data), noe som gjør den mer pålitelig enn laboratorietester. Vær oppmerksom på at det kreves et minimum antall besøkende for at data skal vises.

## Lenker

Lenkerapporten i GSC viser to viktige oversikter. **Eksterne lenker** viser hvilke nettsider som lenker til deg, hvilke av dine sider som får flest lenker, og hvilke ankertekster som brukes. **Interne lenker** viser hvordan dine egne sider lenker til hverandre, noe som er nyttig for å optimalisere den interne lenkestrukturen.

## Manuelle tiltak og sikkerhetsproblemer

Hvis Google oppdager at nettsiden din bryter retningslinjene (for eksempel unatural lenkebygging eller skjult tekst), kan du motta et manuelt tiltak. Dette vises under «Manuelle tiltak» i GSC, sammen med forklaring på problemet og hva du kan gjøre for å rette det.

Under «Sikkerhetsproblemer» varsles du om hacking, malware eller annet som kan skade besøkende. Disse problemene bør behandles umiddelbart da de kan føre til at Google viser advarsler til brukere som prøver å besøke nettsiden din.

## Tips for effektiv bruk av GSC

Sjekk GSC regelmessig – minst ukentlig for aktive nettsider. Sett opp e-postvarsler for kritiske problemer som indekseringsfeil og sikkerhetsproblemer. Bruk ytelsesrapporten aktivt for å identifisere «lavthengende frukt» – søkeord der du rangerer på posisjon 5–15 og som kan forbedres med relativt liten innsats.

Kombiner data fra GSC med Google Analytics for et komplett bilde av brukerreisen fra søk til konvertering.

## Ofte stilte spørsmål

### Er Google Search Console gratis?
Ja, GSC er helt gratis å bruke for alle som eier eller administrerer en nettside.

### Hvor lang tid tar det før data vises?
Det kan ta noen dager etter verifisering før data begynner å vises. Ytelsesdata har typisk 2–3 dagers forsinkelse.

### Kan jeg bruke GSC for flere nettsider?
Ja, du kan legge til og verifisere så mange nettsider du vil i samme Google-konto.

### Hva er forskjellen mellom Search Console og Google Analytics?
GSC fokuserer på hvordan nettsiden din presterer i Google-søk (visninger, klikk, rangering), mens Google Analytics viser hva besøkende gjør etter at de har kommet til nettsiden din (sidevisninger, tid på siden, konverteringer).
