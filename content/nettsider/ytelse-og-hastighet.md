---
title: Optimaliser nettsidens ytelse og hastighet
description: Guide til Core Web Vitals (LCP, INP, CLS), bildeoptimering, caching, CDN og andre tiltak som forbedrer nettsidens hastighet og SEO-rangering.
entityType: Guide
category: Nettsider
subcategory: Ytelse
topic: Nettstedytelse
aliases: ["nettsidens ytelse", "sidefart", "Core Web Vitals", "LCP", "CLS", "INP", "page speed"]
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

```html
<img src="bilde.webp" alt="Beskrivelse" loading="lazy" width="800" height="600">
```

I Next.js brukes `<Image>`-komponenten som håndterer dette automatisk.

## Caching med Nginx

```nginx
location ~* \.(js|css|png|jpg|webp|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, no-transform";
}
```

## CDN

Cloudflare gir gratis CDN med global edge-distribusjon. Aktiver proxy (oransje sky) på A-poster.

## Ytelsesbudsjett

| Metrikk | Mål |
|---------|-----|
| Total sidestørrelse | < 1 MB |
| Antall forespørsler | < 50 |
| Time to First Byte | < 200 ms |
