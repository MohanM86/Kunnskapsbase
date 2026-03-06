---
title: "Hva er strukturerte data?"
slug: "hva-er-strukturerte-data"
category: "SEO"
subcategory: "Teknisk"
description: "Strukturerte data hjelper søkemotorer å forstå innholdet på nettsiden din og kan gi rike søkeresultater. Lær om Schema.org og JSON-LD."
keywords: ["strukturerte data", "Schema.org", "JSON-LD", "rich snippets", "rike resultater"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "Strukturerte data"
aliases: ["Schema markup", "structured data", "schema.org markup", "JSON-LD"]
related: ["hva-er-teknisk-seo", "hva-er-seo", "hva-er-on-page-seo"]
seeAlso: ["hva-er-core-web-vitals", "hva-er-google-search-console"]
tags: ["strukturerte data", "Schema.org", "JSON-LD", "rich snippets"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er strukturerte data?

Strukturerte data er en standardisert måte å gi søkemotorer eksplisitt informasjon om innholdet på en nettside. Ved å legge til maskinlesbar kode i HTML-en din hjelper du Google, Bing og andre søkemotorer med å forstå hva siden handler om – og belønningen kan være rike, visuelt fremtredende søkeresultater.

> **Kort forklart**
> Strukturerte data er kode du legger til på nettsidene dine for å forklare innholdet til søkemotorer på en presis måte. Det kan gi deg synlige fordeler i søkeresultatene som stjerner, bilder, priser og FAQ-er.

## Hvorfor bruke strukturerte data?

Søkemotorer er gode til å lese tekst, men de kan ikke alltid forstå konteksten. Er «Apple» en frukt eller et teknologiselskap? Er «300» en pris, et antall eller et årstall? Strukturerte data fjerner denne tvetydigheten.

Den største fordelen er muligheten for rike resultater (rich results) i søkeresultatene. Disse forbedrede visningene tar mer plass, tiltrekker oppmerksomhet og har typisk høyere klikkrate enn vanlige resultater. Google-studier antyder at rike resultater kan øke klikkraten med 20–30 %.

## Schema.org

Schema.org er det felles vokabularet som brukes for strukturerte data. Det ble opprettet i 2011 av Google, Bing, Yahoo og Yandex som en felles standard. Schema.org definerer hundrevis av typer og egenskaper som beskriver alt fra artikler og produkter til hendelser og oppskrifter.

Noen av de mest brukte typene er Article for nyhetsartikler og blogginnlegg, Product for produkter med pris og tilgjengelighet, LocalBusiness for lokale bedrifter med adresse og åpningstider, FAQ for ofte stilte spørsmål, Recipe for oppskrifter med ingredienser og tilberedningstid, Event for arrangementer med dato og sted, HowTo for trinn-for-trinn-instruksjoner, og BreadcrumbList for brødsmulenavigasjon.

## JSON-LD – det anbefalte formatet

Det finnes tre formater for strukturerte data: JSON-LD, Microdata og RDFa. Google anbefaler JSON-LD (JavaScript Object Notation for Linked Data) fordi det er enklest å implementere og vedlikeholde. JSON-LD plasseres i en `<script>`-tag i HTML-en og er helt adskilt fra det synlige innholdet, noe som gjør det ryddig og enkelt å oppdatere.

Et enkelt eksempel for en artikkel ser slik ut: du oppretter et script-element med type `application/ld+json` som inneholder et JSON-objekt med `@context` satt til schema.org, `@type` satt til Article, og deretter felter som `headline`, `author`, `datePublished` og `description`. Denne blokken forteller Google eksakt hva artikkelen heter, hvem som skrev den, og når den ble publisert.

## Typer rike resultater

### FAQ (Ofte stilte spørsmål)

FAQ-markup lar spørsmål og svar vises direkte i søkeresultatene som utvidbare seksjoner. Dette er en av de enkleste typene å implementere og kan gi betydelig mer plass i søkeresultatene. Hver FAQ-side kan inneholde flere spørsmål-svar-par.

### Produkt

Produktmarkup kan vise pris, tilgjengelighet, anmeldelser og vurderinger direkte i søkeresultatet. For nettbutikker er dette svært verdifullt da det gir brukeren viktig informasjon allerede før de klikker.

### Brødsmulesti (Breadcrumbs)

Breadcrumb-markup viser navigasjonsstien i søkeresultatene i stedet for den rå URL-en. For eksempel «Hjem > SEO > Teknisk» i stedet for «kunnskapsbase.no/seo/hva-er-strukturerte-data». Dette gir bedre brukerforståelse og høyere klikkrate.

### Artikler og nyheter

Article-markup hjelper Google med å forstå artikkelens tittel, forfatter, publiseringsdato og bilde. For nyhetsartikler kan dette gi synlighet i Google News og topphistorier-karusellen.

### Lokale bedrifter

LocalBusiness-markup viser bedriftsinformasjon som adresse, åpningstider, telefonnummer og anmeldelser direkte i søkeresultatene og Google Maps.

## Implementering i praksis

For å implementere strukturerte data på din nettside bør du starte med å identifisere hvilke typer som er relevante for innholdet ditt. En blogg bør bruke Article, en nettbutikk bør bruke Product, og en lokal bedrift bør bruke LocalBusiness.

Generer JSON-LD-koden enten manuelt, med et verktøy som Googles Structured Data Markup Helper, eller programmatisk via ditt CMS. Mange CMS-systemer og plugins støtter strukturerte data ut av boksen – for WordPress er Yoast SEO og Rank Math populære valg.

Plasser JSON-LD-blokken i `<head>`-seksjonen eller like før `</body>`-taggen i HTML-en. Begge plasseringer fungerer, men `<head>` er vanligst.

## Validering og testing

Google tilbyr flere verktøy for å sjekke implementeringen din. **Rich Results Test** (search.google.com/test/rich-results) viser om siden din er kvalifisert for rike resultater og eventuelle feil i markupen. **Schema Markup Validator** (validator.schema.org) sjekker at strukturen følger Schema.org-standarden. **Google Search Console** viser statusen til strukturerte data på tvers av hele nettstedet under «Forbedringer»-rapporten.

Test alltid etter implementering, og sjekk regelmessig for feil. Selv små syntaksfeil i JSON-LD kan gjøre hele blokken ubrukelig.

## Vanlige feil å unngå

De vanligste feilene med strukturerte data er markup som ikke matcher det synlige innholdet på siden – Google krever at strukturerte data reflekterer det brukeren faktisk ser. Andre feil er manglende påkrevde felter der hvert schema-type har obligatoriske egenskaper, bruk av utdaterte typer som ikke lenger støttes, og overmarkering der sider tagges med irrelevante typer for å prøve å utløse rike resultater.

Google kan gi en manuell straff for villedende strukturerte data, så vær alltid nøyaktig og ærlig i implementeringen.

## Strukturerte data for norske nettsider

For norske nettsider er det spesielt relevant å bruke riktig språkattributt (`inLanguage: "nb"` for bokmål), norske valutakoder (`priceCurrency: "NOK"`) for produkter, norske adresseformater for LocalBusiness, og norsk datoformat og tidssone for hendelser og artikler.

## Ofte stilte spørsmål

### Gir strukturerte data bedre rangering?
Strukturerte data er ikke en direkte rangeringsfaktor, men de kan gi rike resultater som øker klikkraten. Høyere klikkrate kan indirekte forbedre rangeringen over tid.

### Hvilke strukturerte data bør jeg starte med?
Start med det som er mest relevant for ditt innhold. For de fleste nettsider er Article, BreadcrumbList og Organization et godt utgangspunkt. Legg til FAQ hvis du har spørsmål-svar-innhold.

### Kan for mye strukturerte data skade?
Nei, så lenge markupen er korrekt og relevant. Men unødvendig eller villedende markup kan føre til en manuell handling fra Google.
