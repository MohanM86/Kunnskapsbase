---
title: "Hva er faceted navigation og SEO?"
slug: "hva-er-faceted-navigation"
category: "seo"
subcategory: "teknisk"
description: "Faceted navigation (filtre i nettbutikker) kan skape tusenvis av duplikatsider som ødelegger SEO. Lær hva det er, problemene, og de tekniske løsningene."
keywords: ["faceted navigation", "filtre SEO", "nettbutikk filtre", "parameter URL", "e-handel teknisk SEO"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Faceted navigation"
aliases: ["filtrert navigasjon", "produktfiltre SEO"]
related: ["hva-er-seo-for-nettbutikk", "hva-er-crawl-budget", "hva-er-canonical-tag", "hva-er-teknisk-seo", "hva-er-duplisert-innhold"]
seeAlso: ["hva-er-seo-for-nettbutikk", "hva-er-crawl-budget"]
tags: ["faceted navigation", "seo", "teknisk", "e-handel"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er faceted navigation og SEO?

Faceted navigation er filter- og sorteringsfunksjoner i nettbutikker (farge, størrelse, pris, merke) som genererer unike URL-er per filterkombinasjon – og kan skape tusenvis av duplikatsider som ødelegger crawl budget og forvirrer Google.

> **Kort forklart**
> En nettbutikk med 500 sko og filtre for farge (10), størrelse (15), merke (20) og pris (5) kan generere 500 × 10 × 15 × 20 × 5 = 7,5 millioner unike URL-er. De fleste er duplikater eller nær-duplikater. Google prøver å crawle dem alle – crawl-budsjettet brukes opp, viktige sider ignoreres, og rangeringene synker. Faceted navigation er det vanligste tekniske SEO-problemet i e-handel.

## Hva betyr begrepet

Faceted navigation oppretter URL-er for hver filterkombinasjon. Eksempler er /sko?farge=rod, /sko?farge=rod&storrelse=42, og /sko?farge=rod&storrelse=42&merke=nike&pris=500-1000. Hver kombinasjon er en unik URL med omtrent identisk innhold. Google ser dem som separate sider – tusenvis av «duplikater» som sløser crawl budget.

Problemene er index bloat (tusenvis av verdiløse sider i Googles indeks), crawl budget waste (Google bruker ressurser på filter-URL-er), duplikat innhold (samme produkter, litt ulik rekkefølge), og kannibalsiering (filter-sider konkurrerer med kategorisider).

## Hvordan løse det

Tekniske løsninger for faceted navigation.

```
Løsning 1 – Robots.txt (enklest):
  Disallow: /sko?farge=
  Disallow: /sko?storrelse=
  → Google crawler ikke filter-URL-er
  ⚠️ Ulempe: lenke-verdi til filter-sider tapes

Løsning 2 – Canonical (anbefalt for de fleste):
  /sko?farge=rod → canonical til /sko
  /sko?farge=rod&storrelse=42 → canonical til /sko
  → Google forstår at /sko er hoved-siden
  ✅ Lenke-verdi konsolideres

Løsning 3 – Noindex (for spesifikke filtre):
  <meta name="robots" content="noindex, follow">
  → Sider indekseres ikke men lenker følges
  
Løsning 4 – AJAX/JavaScript filtre (beste):
  Filtre endrer IKKE URL-en – kun innholdet via JavaScript
  → Ingen nye URL-er → Ingen duplikatproblem
  ⚠️ Ulempe: mister SEO-verdi fra filter-spesifikke søk

Beste praksis (hybrid):
  Verdifulle filtre (merke, hovedkategori) → Egne indekserbare sider
  Kombinerbare filtre (farge+størrelse+pris) → Canonical/noindex
  Sortering (pris lav-høy) → Alltid canonical til standard
```

## Hvorfor er det viktig

Nesten alle nettbutikker har faceted navigation – og de fleste har IKKE løst SEO-problemet. Resultatet er millioner av verdiløse URL-er i Googles indeks, treg indeksering av nye produkter, og lavere rangering enn nødvendig.

For norske nettbutikker er det spesielt viktig: lavere trafikk enn amerikanske betyr at hvert crawl-budsjettsminutt teller mer.

## Vanlige spørsmål

### Skal jeg blokkere alle filtre?
Nei – noen filtre har SEO-verdi. «Nike sko» er et søkeord folk bruker – den filter-siden kan rangere. Blokker kombinerbare filtre, behold verdifulle.

### Hva med Shopify?
Shopify genererer /collections/sko?filter.v.color=Red URL-er. Bruk canonical tags (Shopify gjør det automatisk for noen) og vurder robots.txt for komplekse kombinasjoner.

### Hvordan vet jeg om jeg har et problem?
Google Search Console → Dekningsrapport → Sjekk «Indeksert, ikke innsendt i sitemap.» Hvis tusenvis av filter-URL-er er indeksert: du har et problem.

## Relaterte begreper

- [SEO for nettbutikk](/seo/hva-er-seo-for-nettbutikk) – bredere e-handel SEO
- [Crawl budget](/seo/hva-er-crawl-budget) – det som sløses
- [Canonical tag](/seo/hva-er-canonical-tag) – primær løsning
- [Teknisk SEO](/seo/hva-er-teknisk-seo) – bredere kontekst
- [Duplisert innhold](/seo/hva-er-duplisert-innhold) – problemet som oppstår

## Se også

- [Hva er SEO for nettbutikk?](/seo/hva-er-seo-for-nettbutikk)
- [Hva er crawl budget?](/seo/hva-er-crawl-budget)

## Oppsummering

Faceted navigation skaper tusenvis av filter-URL-er som sløser crawl budget og forvirrer Google. Løs med canonical tags (anbefalt), robots.txt-blokkering, eller AJAX-filtre. Behold SEO-verdifulle filtre (merke, kategori) – blokker kombinasjoner. Det vanligste tekniske SEO-problemet i e-handel – og et av de mest oversette.
