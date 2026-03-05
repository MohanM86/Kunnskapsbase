---
title: Optimaliser nettsidens ytelse og hastighet
description: Slik får du nettstedet ditt til å laste raskere. Guide til Core Web Vitals, bilder, caching, CDN og andre ytelsestiltak som påvirker SEO og brukervennlighet.
category: Nettsider
subcategory: Ytelse
tags: [ytelse, hastighet, Core Web Vitals, LCP, CLS, CDN, caching, SEO]
updatedAt: "2024-10-20"
---

Nettsidens hastighet påvirker direkte **brukeropplevelse**, **SEO-rangering** og **konverteringsrate**. En 1 sekunds forsinkelse kan redusere konverteringer med 7%.

## Core Web Vitals

Google måler nettsidens ytelse gjennom tre nøkkelmål:

### LCP – Largest Contentful Paint

Tid til det største synlige elementet er lastet inn. Mål: **under 2,5 sekunder**.

### INP – Interaction to Next Paint

Tid fra brukerinteraksjon til respons. Mål: **under 200 millisekunder**.

### CLS – Cumulative Layout Shift

Hvor mye sideelementer hopper rundt under innlasting. Mål: **under 0,1**.

Test på [PageSpeed Insights](https://pagespeed.web.dev) eller [web.dev/measure](https://web.dev/measure/).

## Bilder

Bilder er ofte den **største kilden til treg innlasting**.

### Velg riktig format

- **WebP** – Best komprimering for de fleste bilder (30% mindre enn JPEG)
- **AVIF** – Enda bedre, men begrenset nettleserstøtte
- **SVG** – For ikoner og logoer
- **JPEG** – Fotografier der WebP ikke støttes

### Komprimer bilder

```bash
# Konverter til WebP med cwebp
cwebp -q 80 bilde.jpg -o bilde.webp

# Eller bruk Squoosh (web): squoosh.app
```

### Lazy loading

```html
<img src="bilde.webp" alt="Beskrivelse" loading="lazy" width="800" height="600">
```

### Next.js Image-komponent

```jsx
import Image from 'next/image'

<Image
  src="/bilde.jpg"
  alt="Beskrivelse"
  width={800}
  height={600}
  priority={false} // true for above-the-fold bilder
/>
```

## Caching

### Browser caching

I Nginx:
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, no-transform";
}
```

### CDN (Content Delivery Network)

Et CDN leverer statiske filer fra servere nær brukeren.

**Cloudflare** (gratis) gjør dette automatisk når du bruker proxy-modusen.

For Next.js kan du bruke Vercel som har innebygd CDN globalt.

## Minimere HTTP-forespørsler

- **Bundle CSS og JS** – Next.js og Vite gjør dette automatisk
- **Bruk CSS-sprites** for ikoner (eller helst SVG-sprites)
- **Fjern ubrukt kode** – sjekk med Coverage-verktøyet i Chrome DevTools

## Fonter

Dårlig optimaliserte fonter er en vanlig synder for CLS og LCP.

```css
/* Forhindre FOUT (Flash of Unstyled Text) */
@font-face {
  font-family: 'MinFont';
  src: url('/fonts/minfont.woff2') format('woff2');
  font-display: swap;
}
```

I Next.js:
```jsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

## Minifisering og komprimering

### Gzip / Brotli i Nginx

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml;
gzip_min_length 1000;
brotli on;
brotli_types text/plain text/css application/json application/javascript;
```

## Ytelsesbudsjett

Sett deg mål og mål jevnlig:

| Metrikk | Mål |
|---------|-----|
| LCP | < 2.5 sek |
| INP | < 200 ms |
| CLS | < 0.1 |
| Total sidestørrelse | < 1 MB |
| Antall forespørsler | < 50 |
| Time to First Byte | < 200 ms |

## Verktøy

- [PageSpeed Insights](https://pagespeed.web.dev) – Google sine Core Web Vitals
- [WebPageTest](https://webpagetest.org) – Detaljert ytelsestest
- [GTmetrix](https://gtmetrix.com) – Lett å forstå rapport
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) – Innebygd i Chrome DevTools
