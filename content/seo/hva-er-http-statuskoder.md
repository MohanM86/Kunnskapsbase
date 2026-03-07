---
title: "Hva er HTTP-statuskoder for SEO?"
slug: "hva-er-http-statuskoder"
category: "seo"
subcategory: "teknisk"
description: "HTTP-statuskoder (200, 301, 404, 410, 503) forteller Google og brukere om en side fungerer, er flyttet eller mangler. Lær de viktigste kodene og SEO-effekten."
keywords: ["HTTP statuskoder", "301 redirect", "404 feil", "410 gone", "503 error SEO"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "HTTP-statuskoder"
aliases: ["statuskoder", "HTTP-koder SEO"]
related: ["hva-er-301-omdirigering", "hva-er-crawling-og-indeksering", "hva-er-teknisk-seo", "hva-er-seo-audit", "hva-er-redirect-chains"]
seeAlso: ["hva-er-301-omdirigering", "hva-er-teknisk-seo"]
tags: ["HTTP", "seo", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er HTTP-statuskoder for SEO?

HTTP-statuskoder er tresifrede tall serveren returnerer som forteller nettleseren og Googlebot om en side er OK (200), flyttet (301/302), ikke funnet (404), eller midlertidig utilgjengelig (503) – og hver kode har ulik SEO-effekt.

> **Kort forklart**
> Når Googlebot besøker en side, er det første den får en statuskode. 200 betyr «alt OK, her er innholdet.» 301 betyr «denne siden er permanent flyttet hit.» 404 betyr «finnes ikke.» Feil statuskoder ødelegger SEO: 404 på viktige sider = tapt trafikk og lenke-verdi. 302 i stedet for 301 = Google overfører ikke autoritet. 503 under vedlikehold = Google vet at den skal komme tilbake.

## De viktigste statuskodene for SEO

2xx-koder (suksess) inkluderer 200 OK som betyr at siden fungerer, innholdet vises og er den normale, ønskede koden for alle sider. 204 No Content betyr tomt svar og brukes sjelden for nettsider.

3xx-koder (omdirigering) inkluderer 301 Moved Permanently som er permanent omdirigering og overfører 90–99 prosent av lenke-verdi til ny URL – bruk ved permanent flytting. 302 Found er midlertidig omdirigering og overfører IKKE lenke-verdi – bruk kun ved ekte midlertidig flytting. 307 Temporary Redirect er HTTP/2-versjonen av 302. 308 Permanent Redirect er HTTP/2-versjonen av 301.

4xx-koder (klientfeil) inkluderer 404 Not Found som betyr at siden finnes ikke, lenke-verdi tapes over tid – fiks med 301 til relevant side. 410 Gone betyr permanent fjernet og forteller Google at siden aldri kommer tilbake – Google deindekserer raskere enn 404. 403 Forbidden betyr tilgang nektet og Google kan ikke crawle – sjekk at viktige sider ikke er blokkert.

5xx-koder (serverfeil) inkluderer 500 Internal Server Error som betyr at noe feilet på serveren og er midlertidig OK men vedvarende 500 = deindeksering. 503 Service Unavailable betyr midlertidig nede (vedlikehold) og forteller Google at den skal komme tilbake – bruk ved planlagt nedetid.

## Hvordan fungerer det i praksis

Statuskoder påvirker SEO direkte.

```
Scenario 1 – Side flyttet:
  /gammel-url → 301 → /ny-url
  → Google overfører lenke-verdi → Ny URL arver rangering ✅
  
  /gammel-url → 302 → /ny-url  
  → Google beholder gammel URL i indeksen → Verdi overføres IKKE ❌

Scenario 2 – Side slettet:
  /slettet-side → 404
  → Google re-crawler → Deindekserer gradvis (uker/måneder)
  → Lenke-verdi tapes

  /slettet-side → 410
  → Google deindekserer raskt (dager)

  /slettet-side → 301 → /relevant-side
  → Lenke-verdi overføres → Bruker ser relevant innhold ✅ (BEST)

Scenario 3 – Vedlikehold:
  Hele nettstedet → 503 + Retry-After header
  → Google vet: "Kom tilbake senere" → Beholder rangeringer
  
  Hele nettstedet → 404/500
  → Google tror: "Nettstedet er borte" → Mister rangeringer ❌
```

## Hvorfor er det viktig

Feil statuskoder er en av de vanligste tekniske SEO-feilene. Mange nettsteder har hundrevis av 404-er (tapte lenker), bruker 302 i stedet for 301 (tapt lenke-verdi), og har 500-feil på viktige sider (deindeksering). En SEO-audit med Screaming Frog avdekker alle statuskode-problemer.

## Vanlige spørsmål

### Skal jeg fikse alle 404-er?
Prioriter: 404-er med backlinks (lenke-verdi tapes) og med trafikk. 404-er på verdiløse sider er OK – det er normalt å ha noen.

### Når bruker jeg 410 vs 404?
410 for sider du ALDRI vil ha tilbake (permanent slettet innhold). 404 for alt annet. I praksis: Google behandler begge lignende, men 410 deindekserer raskere.

### Hva er soft 404?
En side returnerer 200 (OK) men innholdet sier «siden finnes ikke.» Google oppdager dette og behandler det som 404 – men det forvirrer crawling. Fiks: returnér ekte 404.

## Relaterte begreper

- [301-omdirigering](/seo/hva-er-301-omdirigering) – den viktigste omdirigeringen
- [Crawling og indeksering](/seo/hva-er-crawling-og-indeksering) – statuskoder styrer crawling
- [Teknisk SEO](/seo/hva-er-teknisk-seo) – bredere kontekst
- [SEO-audit](/seo/hva-er-seo-audit) – finner statuskode-feil
- [Redirect chains](/seo/hva-er-redirect-chains) – kjeder av omdirigeringer

## Se også

- [Hva er 301-omdirigering?](/seo/hva-er-301-omdirigering)
- [Hva er teknisk SEO?](/seo/hva-er-teknisk-seo)

## Oppsummering

HTTP-statuskoder forteller Google om sider fungerer (200), er flyttet (301), mangler (404/410) eller er nede (503). 301 overfører lenke-verdi. 302 gjør det IKKE. 404 taper verdi over tid. 410 deindekserer raskt. 503 for vedlikehold. Sjekk med Screaming Frog. Feil statuskoder er en av de vanligste – og enkleste å fikse – tekniske SEO-feilene.
