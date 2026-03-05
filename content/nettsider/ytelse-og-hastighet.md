---
title: "Optimaliser nettsidens ytelse"
slug: "ytelse-og-hastighet"
category: "Nettsider"
subcategory: "Ytelse"
description: "Guide til Core Web Vitals, bildeoptimering, caching og CDN for raskere nettsider og bedre SEO."
keywords: ["ytelse", "Core Web Vitals", "LCP", "CLS", "CDN", "caching"]
date: "2024-10-20"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Guide"
topic: "Nettstedytelse"
aliases: ["nettsidens ytelse", "sidefart", "Core Web Vitals"]
related: ["ssl-sertifikat", "velge-webhotell", "wordpress-installasjon"]
seeAlso: ["velge-webhotell", "ssl-sertifikat"]
tags: ["ytelse", "Core Web Vitals", "LCP", "CDN", "caching", "SEO"]
updatedAt: "2025-03-05"
contentType: "knowledge-article"
difficulty: "beginner"
---

# Optimaliser nettsidens ytelse

Nettstedytelse handler om hvor raskt sidene lastes og responderer, målt gjennom Googles Core Web Vitals.

> **Kort forklart**
> Tre metrikker avgjør: LCP (lastetid), INP (responstid) og CLS (layoutstabilitet). Raskere sider gir bedre SEO og høyere konvertering.

## Hva betyr begrepet

Core Web Vitals er tre metrikker Google bruker til å vurdere brukeropplevelsen. De påvirker SEO-rangering direkte.

## Hvordan fungerer det

### Lasteprosess

```
Forespørsel → Server svarer (TTFB) → HTML → Bilder/CSS (LCP) → Interaktivitet (INP)
```

| Metrikk | Måler | Mål |
|---------|-------|-----|
| LCP | Største element | < 2,5 sek |
| INP | Responstid | < 200 ms |
| CLS | Layoutforskyvning | < 0,1 |

Test på [PageSpeed Insights](https://pagespeed.web.dev).

## Hvorfor er det viktig

Hver sekunds forsinkelse reduserer konverteringen opptil 7 prosent. Google belønner raske sider med bedre rangering.

## Eksempler

- **WebP-bilder** – 30 prosent mindre enn JPEG
- **CDN (Cloudflare)** – gratis global distribusjon
- **Lazy loading** – last bilder først når de er synlige
- **Caching** – lange cache-headere for statiske filer

| Metrikk | Mål |
|---------|-----|
| Sidestørrelse | < 1 MB |
| Forespørsler | < 50 |
| TTFB | < 200 ms |

## Vanlige spørsmål

### Hva er LCP?
Largest Contentful Paint – tid til største synlige element lastes.

### Hva er CLS?
Cumulative Layout Shift – uventede layoutforskyvninger.

### Hjelper CDN?
Ja. Innhold serveres fra servere nær brukeren.

### Bør jeg bruke WebP?
Ja. Ca. 30 prosent mindre enn JPEG med lik kvalitet.

### Hva er TTFB?
Time to First Byte – serverens responstid. Bør være under 200 ms.

## Relaterte begreper

- [Webhotell](/nettsider/velge-webhotell) – serveren som påvirker TTFB
- [SSL](/nettsider/ssl-sertifikat) – HTTPS kan påvirke hastighet
- [WordPress](/nettsider/wordpress-installasjon) – caching-plugins
- [DNS](/dns/hva-er-dns) – DNS-oppslag påvirker hastighet
- CDN – Content Delivery Network

## Se også

- [Velge webhotell](/nettsider/velge-webhotell)
- [SSL-sertifikat](/nettsider/ssl-sertifikat)

## Oppsummering

Nettstedytelse måles gjennom Core Web Vitals. Bruk WebP, CDN, caching og komprimering for rask lasting og bedre Google-rangering.
