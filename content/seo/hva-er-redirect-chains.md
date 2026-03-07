---
title: "Hva er redirect chains?"
slug: "hva-er-redirect-chains"
category: "seo"
subcategory: "teknisk"
description: "Redirect chains er omdirigeringskjeder der en URL omdirigeres til en annen som omdirigeres til en tredje – det sløser crawl budget og taper lenke-verdi. Lær hva det er og fiksen."
keywords: ["redirect chains", "omdirigeringskjede", "301 kjede", "redirect loop", "redirect hops"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 3
draft: false
entityType: "Concept"
topic: "Redirect chains"
aliases: ["omdirigeringskjede", "redirect hops"]
related: ["hva-er-301-omdirigering", "hva-er-http-statuskoder", "hva-er-crawl-budget", "hva-er-teknisk-seo", "hva-er-seo-audit"]
seeAlso: ["hva-er-301-omdirigering", "hva-er-crawl-budget"]
tags: ["redirect", "seo", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er redirect chains?

Redirect chains (omdirigeringskjeder) er når en URL omdirigeres til en annen, som omdirigeres til en tredje (eller flere) – i stedet for å gå direkte til den endelige destinasjonen.

> **Kort forklart**
> Du klikker en lenke til /gammel-side → den 301-er til /mellomside → som 301-er til /ny-side. To hopp i stedet for ett. Hvert hopp taper ~10 prosent lenke-verdi og sløser crawl budget. Google følger maks 10 hopp – deretter gir den opp. Redirect chains bygger seg opp over tid (migrasjon, URL-endringer) og er et vanlig teknisk SEO-problem. Fiksen er enkel: oppdater alle omdirigeringer til å peke DIREKTE til endelig URL.

## Hva betyr begrepet

En redirect chain er en serie av omdirigeringer. Kjede: A → 301 → B → 301 → C → 301 → D. Det som burde vært: A → 301 → D (direkte). Redirect loop er det verste: A → B → C → A (evig sløyfe – krasjer).

Vanlige årsaker er flere migrasjoner over tid (2020: /side → /ny-side, 2023: /ny-side → /nyeste-side), HTTP til HTTPS-migrering + URL-endring samtidig, og manglende oppdatering av gamle omdirigeringer ved nye endringer.

## Hvordan finne og fikse

Finn og kutt kjeder.

```
Finn:
  Screaming Frog: Crawl → Reports → Redirect Chains
  → Viser alle kjeder med antall hopp
  
  Ahrefs: Site Audit → "Redirect chain" issue

Fiks:
  Kjede: /a → /b → /c → /d
  Oppdater: /a → /d (direkte)
  Oppdater: /b → /d (direkte)
  Oppdater: /c → /d (direkte)
  
  → Alle peker direkte til endelig destinasjon
  → Lenke-verdi overføres maksimalt
  → Crawl budget frigjøres

Forebygg:
  Ved hver URL-endring: sjekk om den nye URL-en allerede ER en omdirigering
  Etter migrering: kjør Screaming Frog og fiks alle kjeder
```

## Hvorfor er det viktig

Hvert hopp taper ~10 prosent lenke-verdi (omdiskutert men konservativt estimat). En kjede med 3 hopp taper ~27 prosent. For sider med sterke backlinks er det en betydelig autoritetslekkasje. I tillegg sløser det crawl budget og forsinker brukeropplevelsen (hvert hopp = ekstra server-request).

## Vanlige spørsmål

### Hvor mange hopp er for mange?
1 hopp er ideelt. 2 er akseptabelt. 3+ bør fikses. Google følger maks ~10 hopp.

### Hva er en redirect loop?
A → B → A (evig sløyfe). Krasjer nettleseren. Google gir opp. Må fikses umiddelbart.

### Hvor ofte bør jeg sjekke?
Etter hver migrering/URL-endring. Kvartalsvis crawl med Screaming Frog for vedlikehold.

## Relaterte begreper

- [301-omdirigering](/seo/hva-er-301-omdirigering) – byggesteinene i kjeder
- [HTTP-statuskoder](/seo/hva-er-http-statuskoder) – bredere kontekst
- [Crawl budget](/seo/hva-er-crawl-budget) – det som sløses
- [Teknisk SEO](/seo/hva-er-teknisk-seo) – bredere kategori
- [SEO-audit](/seo/hva-er-seo-audit) – finner kjeder

## Se også

- [Hva er 301-omdirigering?](/seo/hva-er-301-omdirigering)
- [Hva er crawl budget?](/seo/hva-er-crawl-budget)

## Oppsummering

Redirect chains er omdirigeringskjeder (A→B→C→D) som taper lenke-verdi og sløser crawl budget. Bygg seg opp over tid ved migrasjoner. Finn med Screaming Frog. Fiks: alle peker direkte til endelig URL. Forebygg: sjekk ved hver URL-endring. Redirect loops (A→B→A) er kritisk og må fikses umiddelbart.
