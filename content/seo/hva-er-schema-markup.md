---
title: "Hva er schema markup?"
slug: "hva-er-schema-markup"
category: "SEO"
subcategory: "Teknisk"
description: "Schema markup er kode som hjelper søkemotorer å forstå innholdet ditt bedre. Lær om de viktigste schema-typene og hvordan du implementerer dem."
keywords: ["schema markup", "schema.org", "JSON-LD", "rich results", "FAQ-schema"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "Schema markup"
aliases: ["Schema.org markup", "schema-kode", "markup"]
related: ["hva-er-strukturerte-data", "hva-er-teknisk-seo", "hva-er-serp"]
seeAlso: ["hva-er-on-page-seo", "hva-er-google-search-console"]
tags: ["schema markup", "JSON-LD", "rich results", "teknisk SEO"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er schema markup?

Schema markup er strukturert kode du legger til i HTML-en på nettsiden din for å hjelpe søkemotorer med å forstå innholdet mer presist. Det er den praktiske implementeringen av Schema.org-vokabularet – et felles språk utviklet av Google, Bing, Yahoo og Yandex for å beskrive innhold på nettet.

> **Kort forklart**
> Schema markup er en måte å «merke» innholdet ditt slik at søkemotorer forstår nøyaktig hva det handler om. Riktig implementert kan det gi deg fremtredende rike resultater i Google.

## Schema markup vs. strukturerte data

Begrepene brukes ofte om hverandre, men det er en teknisk forskjell. Strukturerte data er det overordnede konseptet – en standardisert måte å organisere informasjon på. Schema markup er den spesifikke implementeringen ved hjelp av Schema.org-vokabularet. I praksis er schema markup den typen strukturerte data som er mest relevant for SEO.

## JSON-LD i praksis

JSON-LD (JavaScript Object Notation for Linked Data) er det anbefalte formatet for schema markup. Koden plasseres i en script-tag med type «application/ld+json» og påvirker ikke det synlige innholdet på siden.

En typisk JSON-LD-blokk starter med `@context` som alltid er «https://schema.org», etterfulgt av `@type` som definerer hva du beskriver. Deretter følger egenskapene som er spesifikke for den aktuelle typen. For en artikkel inkluderer du typisk headline, author, datePublished, dateModified, description og publisher.

Fordelen med JSON-LD er at koden er samlet på ett sted og helt adskilt fra HTML-strukturen, noe som gjør den enklere å vedlikeholde og feilsøke.

## De viktigste schema-typene

### Article

Article-markup brukes for nyhetsartikler, blogginnlegg og fagartikler. Den forteller Google hvem som skrev artikkelen, når den ble publisert og oppdatert, og hva den handler om. For nyhetssider kan dette gi synlighet i Google News og topphistorier-karusellen.

Viktige egenskaper er headline for artikkeltittelen, author med navn og eventuelt URL til forfatterprofil, datePublished og dateModified med ISO 8601-format, image for artikkelens hovedbilde, og publisher med organisasjonens navn og logo.

### FAQ

FAQ-schema lar spørsmål og svar fra siden din vises som utvidbare elementer direkte i søkeresultatene. Dette kan gi betydelig mer plass i SERP-en og høyere klikkrate.

Hver FAQ-side implementeres med typen FAQPage som inneholder en mainEntity-array med Question-objekter. Hvert spørsmål har et name-felt med spørsmålet og et acceptedAnswer-felt med svaret.

Det er viktig at FAQ-innholdet er synlig på selve siden – du kan ikke ha schema markup for FAQ-innhold som brukeren ikke kan se.

### LocalBusiness

For lokale bedrifter er LocalBusiness-markup essensiell. Den gir Google strukturert informasjon om bedriftens navn, adresse, telefonnummer, åpningstider, priskategori og geografiske koordinater. Det finnes spesialiserte undertyper som Restaurant, Dentist, Attorney og mange flere.

### Product

Product-markup er viktig for nettbutikker og viser pris, tilgjengelighet, merke og anmeldelser i søkeresultatene. Kombinert med Offer-typen kan du spesifisere pris, valuta, tilgjengelighetsstatus og gyldighetstid for tilbudet.

### BreadcrumbList

BreadcrumbList viser navigasjonsstien i søkeresultatene i stedet for den rå URL-en. For eksempel «Hjem > SEO > Teknisk» gir bedre brukerforståelse og visuell presentasjon i SERP-en. Implementeringen består av en liste med ListItem-objekter der hvert element har en posisjon, et navn og en URL.

### HowTo

HowTo-schema er ideelt for instruksjons- og veiledningsinnhold. Det lar Google vise trinn-for-trinn-instruksjoner direkte i søkeresultatene, komplett med estimert tid, nødvendig utstyr og materialinformasjon.

### Organization og WebSite

Organization-markup gir Google informasjon om bedriften din, inkludert logo, kontaktinformasjon og sosiale profiler. WebSite-markup kan aktivere søkeboks direkte i søkeresultatene (Sitelinks Search Box) for kjente merkenavn.

## Implementeringsstrategier

### Manuell implementering

For små nettsider eller enkeltimplementeringer kan du skrive JSON-LD manuelt. Bruk Schema.org-dokumentasjonen som referanse og valider med Googles Rich Results Test. Denne tilnærmingen gir full kontroll, men skalerer dårlig for store nettsider.

### CMS-plugins

De fleste CMS-plattformer har plugins som genererer schema markup automatisk. For WordPress er Yoast SEO, Rank Math og Schema Pro populære valg. Disse pluginene genererer grunnleggende schema automatisk og lar deg legge til spesifikke typer via et grensesnitt.

### Programmatisk generering

For dynamiske nettsider og moderne rammeverk som Next.js, Nuxt.js og Gatsby er programmatisk generering av JSON-LD den mest effektive tilnærmingen. Schema genereres automatisk basert på sidens innhold og metadata, noe som sikrer konsistens og skalerbarhet.

## Validering og feilsøking

Valider alltid schema markup før og etter implementering. Googles Rich Results Test på search.google.com/test/rich-results viser om siden kvalifiserer for rike resultater og identifiserer feil og advarsler. Schema Markup Validator på validator.schema.org kontrollerer at koden er syntaktisk korrekt. Google Search Console rapporterer feil i strukturerte data under «Forbedringer»-seksjonen og varsler om nye problemer.

Vanlige feil inkluderer manglende påkrevde felter, feil datatyper, markup som ikke matcher synlig innhold, og syntaksfeil i JSON-formatet.

## Avanserte teknikker

### Nesting

Schema-typer kan nestes inne i hverandre for å skape rike, detaljerte beskrivelser. En Article kan inneholde en author som er en Person med tilknytning til en Organization. Denne dybden gir Google mer kontekst og øker sjansen for rike resultater.

### Flere schema-typer per side

En enkelt side kan ha flere JSON-LD-blokker med ulike schema-typer. For eksempel kan en produktside ha både Product-schema, BreadcrumbList og Organization. Alternativt kan alle typene samles i én JSON-LD-blokk med @graph-egenskapen.

## Ofte stilte spørsmål

### Er schema markup en rangeringsfaktor?
Ikke direkte, men det kan gi rike resultater som øker klikkraten, og høyere klikkrate kan indirekte påvirke rangering. Schema hjelper også Google med å forstå innholdet bedre.

### Hvilken schema bør jeg implementere først?
Start med Article eller WebPage for innholdssider, BreadcrumbList for navigasjon, og Organization for bedriftsinformasjon. Legg til FAQ hvis du har relevant innhold.

### Kan feil schema markup skade?
Villedende markup kan føre til en manuell handling fra Google. Syntaksfeil gjør at markupen ignoreres, men skader ikke rangeringen. Sørg alltid for at markup reflekterer det synlige innholdet.

### Støtter alle søkemotorer schema markup?
Google, Bing og Yahoo støtter Schema.org. Google er den mest avanserte og støtter flest schema-typer. Bing bruker schema for rike resultater i sine søkeresultater, men støtter færre typer enn Google.
