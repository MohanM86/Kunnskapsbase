---
title: Optimaliser nettsidens ytelse og hastighet
description: Guide til Core Web Vitals (LCP, INP, CLS), bildeoptimering, caching, CDN og andre tiltak.
entityType: Guide
category: Nettsider
subcategory: Ytelse
topic: Nettstedytelse
aliases: ["nettsidens ytelse", "sidefart", "Core Web Vitals", "LCP", "CLS"]
related: ["ssl-sertifikat", "velge-webhotell", "wordpress-installasjon"]
seeAlso: ["bytte-navnetjener"]
tags: [ytelse, hastighet, Core Web Vitals, LCP, CLS, CDN, caching, SEO]
updatedAt: "2024-10-20"
---

## Core Web Vitals

| Metrikk | Hva det måler | Mål |
|---------|---------------|-----|
| LCP | Tid til største element | < 2,5 sek |
| INP | Responstid på interaksjon | < 200 ms |
| CLS | Layoutforskyvning | < 0,1 |

Test på [PageSpeed Insights](https://pagespeed.web.dev).

## Bilder
Bruk **WebP** format (30% mindre enn JPEG). Legg til `loading="lazy"` på bilder under folden.

## CDN
Cloudflare gir gratis CDN med global edge-distribusjon.

## Ytelsesbudsjett

| Metrikk | Mål |
|---------|-----|
| Total sidestørrelse | < 1 MB |
| Antall forespørsler | < 50 |
| Time to First Byte | < 200 ms |
