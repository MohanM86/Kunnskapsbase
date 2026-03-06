---
title: "Hva er hreflang?"
slug: "hva-er-hreflang"
category: "SEO"
subcategory: "Teknisk"
description: "Hreflang er en HTML-tag som forteller søkemotorer hvilke språk- og regionversjoner av en side som finnes. Lær hvordan du implementerer hreflang for flerspråklige nettsider."
keywords: ["hreflang", "flerspråklig SEO", "internasjonal SEO", "språkversjon", "hreflang-tag"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Hreflang"
aliases: ["hreflang tag", "hreflang-attributt", "språk-tag", "internasjonal SEO-tag"]
related: ["hva-er-teknisk-seo", "hva-er-meta-tags", "hva-er-duplisert-innhold"]
seeAlso: ["hva-er-seo-vennlige-urler", "hva-er-crawling-og-indeksering"]
tags: ["hreflang", "internasjonal SEO", "flerspråklig", "teknisk SEO"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er hreflang?

Hreflang er et HTML-attributt som forteller søkemotorer hvilke språk- og regionversjoner av en nettside som finnes. Det hjelper Google med å vise riktig versjon til brukere basert på deres foretrukne språk og geografiske plassering, og forhindrer at flerspråklig innhold behandles som duplisert innhold.

> **Kort forklart**
> Hreflang forteller Google at du har samme innhold på flere språk, slik at norske brukere ser den norske versjonen og engelske brukere ser den engelske – uten at det regnes som duplikat.

## Hvorfor er hreflang viktig?

Uten hreflang kan flerspråklige nettsider oppleve problemer der Google viser feil språkversjon til brukere, der søkemotorer behandler språkversjonene som duplisert innhold og tynner ut rangeringskraften, der den engelske versjonen rangerer i Norge fordi den har flere tilbakekoblinger, og der brukere lander på feil språk og forlater siden frustrert.

Hreflang løser disse problemene ved å etablere et eksplisitt forhold mellom språkversionene, slik at Google vet at de er varianter av samme innhold – ikke konkurrerende duplikater.

## Syntaks og implementering

Hreflang implementeres som link-elementer i HTML-ens head-seksjon. Hvert element har rel satt til «alternate», et hreflang-attributt med språkkoden, og href som peker til den aktuelle språkversjonen.

Språkkodene følger ISO 639-1 standarden for språk og valgfritt ISO 3166-1 Alpha 2 for region. Norsk bokmål er «nb», norsk nynorsk er «nn», engelsk er «en», og svensk er «sv». For regionsspesifikke versjoner kombinerer du språk og region: «en-US» for amerikansk engelsk, «en-GB» for britisk engelsk, «pt-BR» for brasiliansk portugisisk.

### Tre implementeringsmetoder

**HTML link-elementer** er den vanligste metoden. Du legger hreflang-tagger i head-seksjonen på hver side. Alle språkversjoner må referere til hverandre, inkludert en selvhenvisning.

**HTTP-header** brukes for ikke-HTML-filer som PDF-er der du ikke kan legge inn HTML-tagger. Hreflang-informasjonen sendes som en HTTP Link-header fra serveren.

**XML sitemap** er den mest skalerbare metoden for store flerspråklige nettsider. Hreflang-informasjonen inkluderes direkte i sitemapen med xhtml:link-elementer for hver URL.

## Viktige regler

### Gjensidig referanse

Alle hreflang-implementeringer må være gjensidige. Hvis side A (norsk) peker til side B (engelsk), må side B også peke tilbake til side A. Manglende gjensidighet gjør at Google ignorerer hreflang-taggen.

### Selvhenvisning

Hver side må også referere til seg selv. Den norske siden må ha en hreflang-tag som peker til sin egen URL med hreflang «nb». Dette virker redundant, men er nødvendig for at Google skal tolke implementeringen korrekt.

### X-default

Verdien «x-default» brukes for å angi en fallbackside – den versjonen som vises hvis ingen av de spesifiserte språkene matcher brukerens preferanser. Typisk peker x-default til enten en språkvelgerside eller den engelskspråklige versjonen som fallback.

### Canonical og hreflang

Hreflang-tagger og canonical-tagger må være konsistente. Hver språkversjon bør ha en canonical-tag som peker til seg selv, og hreflang-taggene bør peke til de kanoniske URL-ene. Å ha canonical peke til en annen språkversjon ødelegger hreflang-implementeringen.

## Hreflang for norske nettsider

Norge har noen spesielle hensyn for hreflang. Norsk har to offisielle skriftspråk: bokmål (nb) og nynorsk (nn). Hvis nettsiden din har innhold på begge, bør du bruke separate hreflang-koder for hver.

For nettsider som retter seg mot det norske markedet med innhold på norsk og engelsk er en typisk implementering å bruke «nb» for den norske bokmålsversjonen, «en» for den engelske versjonen, og «x-default» som peker til den norske versjonen eller en språkvelger.

Mange norske bedrifter har nettsider som primært er på norsk med noen engelske sider. I slike tilfeller trenger du bare hreflang for de sidene som faktisk finnes på begge språk – ikke for hele nettstedet.

## URL-strukturer for flerspråklige sider

Det finnes tre vanlige tilnærminger til URL-struktur for flerspråklige nettsider. **Undermapper** som eksempel.no/nb/ og eksempel.no/en/ er den mest anbefalte og enkleste å implementere. All autoritet konsolideres på ett domene. **Underdomener** som nb.eksempel.no og en.eksempel.no er teknisk mulig men behandles av Google som separate nettsteder, noe som tynner ut domeneautoriteten. **Separate domener** som eksempel.no og example.com er tydeligst for brukeren men dyrest å vedlikeholde og krever separat SEO-arbeid for hvert domene.

For de fleste norske bedrifter er undermapper den beste løsningen.

## Vanlige feil

De vanligste hreflang-feilene er manglende gjensidighet der side A peker til side B men ikke omvendt, feil språkkoder der man bruker «no» i stedet for «nb» for bokmål, inkonsistens med canonical der canonical-taggen peker til en annen URL enn hreflang, manglende selvhenvisning der siden ikke refererer til seg selv, og hreflang på ikke-indekserbare sider der taggen brukes på noindex-sider eller sider med canonical til en annen URL.

Google Search Console rapporterer hreflang-feil under «Internasjonal målretting» i eldre versjoner, og via «Forbedringer»-rapportene i nyere versjoner.

## Testing og validering

For å validere hreflang-implementeringen kan du bruke Google Search Console for å sjekke om Google oppdager og tolker taggene korrekt, Ahrefs Site Audit som har en spesifikk hreflang-rapport, hreflang Tags Testing Tool fra TechSEO for rask validering av enkeltpager, og Screaming Frog som kan crawle nettstedet og identifisere hreflang-feil på tvers av alle sider.

## Ofte stilte spørsmål

### Trenger jeg hreflang for en enspråklig nettside?
Nei. Hreflang er bare nødvendig for nettsider med innhold på flere språk eller rettet mot flere regioner med samme språk.

### Er «no» eller «nb» riktig språkkode for norsk?
«nb» for bokmål og «nn» for nynorsk er de korrekte ISO 639-1-kodene. «no» er en overordnet kode som ikke skiller mellom bokmål og nynorsk – bruk den bare hvis du ikke skiller mellom de to.

### Garanterer hreflang at riktig versjon vises?
Hreflang er et sterkt hint til Google, men ikke en garanti. Google kan vise en annen versjon hvis den anser den som mer relevant for søket.

### Kan hreflang brukes for regionsvarianter av samme språk?
Ja. For eksempel kan du bruke «en-US» og «en-GB» for amerikanske og britiske engelskversjoner, eller «pt-BR» og «pt-PT» for brasiliansk og europeisk portugisisk.
