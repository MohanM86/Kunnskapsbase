---
title: "Hva er crawl budget?"
slug: "hva-er-crawl-budget"
category: "seo"
subcategory: "teknisk"
description: "Crawl budget er antall sider Google crawler på nettstedet ditt per besøk. Lær hva det er, hva som påvirker det, og hvorfor det er kritisk for store nettsteder."
keywords: ["crawl budget", "crawl-budsjett", "Googlebot crawling", "crawl rate", "crawl demand"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Crawl budget"
aliases: ["crawl-budsjett", "crawlingsbudsjett"]
related: ["hva-er-crawling-og-indeksering", "hva-er-robots-txt", "hva-er-xml-sitemap", "hva-er-teknisk-seo", "hva-er-content-pruning"]
seeAlso: ["hva-er-crawling-og-indeksering", "hva-er-robots-txt"]
tags: ["crawl budget", "seo", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er crawl budget?

Crawl budget er det totale antallet sider Googlebot crawler og prosesserer på nettstedet ditt innenfor en gitt tidsperiode – bestemt av nettstedets størrelse, hastighet, autoritet og innholdskvalitet.

> **Kort forklart**
> Google har begrenset kapasitet – den kan ikke crawle hele internett hver dag. Hvert nettsted får et «crawl budget»: antall sider Googlebot besøker per dag/uke. Et lite nettsted (100 sider) trenger ikke bekymre seg – Google crawler alt. Et stort nettsted (50 000+ sider) MÅ optimalisere: hvis halvparten er verdiløse sider, kaster Google budsjett på søppel i stedet for å indeksere viktige sider. Content pruning, rask server og smart robots.txt er nøklene.

## Hva betyr begrepet

Crawl budget styres av to faktorer. Crawl rate limit er den tekniske grensen – hvor raskt Googlebot kan crawle uten å overbelaste serveren. Rask server = høyere grense. Treg server = lavere. Crawl demand er Googles ønske om å crawle – populære, oppdaterte sider med mange lenker crawles oftere enn obskure, statiske sider.

Google prioriterer nye og oppdaterte sider (fersk innhold crawles raskt), populære sider (mye trafikk og lenker = høy crawl demand), og viktige sider (dypt i sitemap-hierarkiet = lavere prioritet).

Crawl-budsjett sløsere er duplikatsider (parameterbaserte URL-er, filtre), 404-sider (crawler brukt på ikke-eksisterende innhold), redirect-kjeder (301→301→301 kaster bort crawling), trege sider (tar lang tid = færre sider per besøk), og lavkvalitets-sider (Google nedprioriterer etter crawling).

## Hvordan fungerer det

Google fordeler crawl-ressurser basert på verdi.

```
Nettsted A: 500 sider, alle med innhold
  Google crawler ~500/uke → Alt indeksert → Ingen problem

Nettsted B: 50 000 sider, 30 000 er filter-varianter
  Google crawler ~5 000/uke → Crawl-budsjett brukt på filter-sider
  → Viktige produktsider crawles sjelden → Treg indeksering

Løsning for B:
  robots.txt: blokker filter-URL-er
  Canonical: pek varianter til hoveside
  Pruning: fjern verdiløse sider
  → Crawl-budsjett brukes på viktige sider → Raskere indeksering
```

## Hvorfor er det viktig

For små nettsteder (under 1 000 sider): crawl budget er sjelden et problem. For store nettsteder (10 000+ sider): det er ofte flaskehalsen. E-handelsnettsteder med tusenvis av filter-kombinasjoner, medienettsteder med daglig publisering, og programmatic SEO-sider med tusenvis av genererte sider MÅ optimalisere crawl budget.

Sjekk ditt crawl-budsjett i Google Search Console under Innstillinger → Crawl-statistikk.

## Vanlige spørsmål

### Trenger jeg å bekymre meg om crawl budget?
Under 1 000 sider: nei. 1 000–10 000: moderat. Over 10 000: ja, spesielt med mange parameter-URL-er eller filtre.

### Hvordan øker jeg crawl budget?
Raskere server (reduser responstid), fjern verdiløse sider (pruning), fiks redirect-kjeder, og oppdater innhold regelmessig (øker crawl demand).

### Kan jeg se crawl-statistikk?
Ja – Google Search Console → Innstillinger → Crawl-statistikk viser antall forespørsler, responstid og status.

## Relaterte begreper

- [Crawling og indeksering](/seo/hva-er-crawling-og-indeksering) – grunnprosessen
- [Robots.txt](/seo/hva-er-robots-txt) – styre crawling
- [XML sitemap](/seo/hva-er-xml-sitemap) – guide for crawler
- [Teknisk SEO](/seo/hva-er-teknisk-seo) – bredere kontekst
- [Content pruning](/seo/hva-er-content-pruning) – frigjør crawl budget

## Se også

- [Hva er crawling og indeksering?](/seo/hva-er-crawling-og-indeksering)
- [Hva er robots.txt?](/seo/hva-er-robots-txt)

## Oppsummering

Crawl budget er antall sider Google crawler per besøk. For store nettsteder (10 000+) er det kritisk – verdiløse sider sløser budsjettet. Optimaliser med raskere server, pruning, robots.txt og sitemap. Sjekk i Search Console. For små nettsteder: ikke bekymre deg. For store: det kan være flaskehalsen som hindrer indeksering.
