---
title: "Hva er product schema markup?"
slug: "hva-er-product-schema"
category: "seo"
subcategory: "teknisk"
description: "Product schema gir produktsider rich snippets i Google – stjerner, pris, tilgjengelighet. Lær hva det er, implementeringen, og hvorfor det øker CTR for nettbutikker."
keywords: ["product schema", "produktstrukturerte data", "rich snippets produkter", "schema nettbutikk", "Google Shopping"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Product schema"
aliases: ["produktstrukturerte data", "product markup"]
related: ["hva-er-schema-markup", "hva-er-strukturerte-data", "hva-er-seo-for-nettbutikk", "hva-er-featured-snippets", "hva-er-teknisk-seo"]
seeAlso: ["hva-er-schema-markup", "hva-er-seo-for-nettbutikk"]
tags: ["schema", "seo", "teknisk", "e-handel"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er product schema markup?

Product schema er strukturerte data (JSON-LD) som forteller Google detaljert informasjon om et produkt – navn, pris, tilgjengelighet, anmeldelser og merke – slik at Google kan vise rich snippets med stjerner, pris og lagerstatus direkte i søkeresultatene.

> **Kort forklart**
> Du søker «Sony WH-1000XM5.» Uten product schema: blå lenke med standard tekst. Med product schema: ★★★★☆ 4,7 (2 340 anmeldelser) · 3 499 kr · På lager. Hvilken klikker du på? Rich snippets øker CTR med 20–30 prosent. For nettbutikker er product schema den tekniske SEO-investeringen med høyest ROI.

## Hva betyr begrepet

Product schema bruker Schema.org/Product-vokabular i JSON-LD-format for å gi Google strukturert produktinformasjon. De viktigste egenskapene er name (produktnavn), description (produktbeskrivelse), image (produktbilde-URL), offers med price, priceCurrency og availability (pris og tilgjengelighet), aggregateRating med ratingValue og reviewCount (gjennomsnittlig vurdering), brand (merke), og sku/gtin/mpn (produktidentifikatorer).

Rich snippets som kan vises er stjerner/rating i søkeresultater, pris (med valuta), tilgjengelighet (på lager / utsolgt), og merchant listing (Google Shopping-integrasjon).

## Hvordan implementere

Product schema i JSON-LD.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sony WH-1000XM5",
  "description": "Trådløse hodetelefoner med aktiv støydemping",
  "image": "https://example.com/sony-xm5.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Sony"
  },
  "sku": "WH1000XM5",
  "offers": {
    "@type": "Offer",
    "price": "3499",
    "priceCurrency": "NOK",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/sony-xm5"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "2340"
  }
}
</script>
```

Test med Google Rich Results Test (search.google.com/test/rich-results) og valider i Search Console under Forbedringer.

## Hvorfor er det viktig

Product schema øker CTR med 20–30 prosent – stjerner og pris i søkeresultater skiller seg ut. For nettbutikker med tusenvis av produkter er det en massiv trafikkøkning. Det er også en forutsetning for Google Merchant Center og Google Shopping-annonser.

I norsk e-handel er product schema underimplementert – mange nettbutikker mangler det, noe som er en mulighet for de som implementerer.

## Vanlige spørsmål

### Viser Google alltid rich snippets?
Nei – Google bestemmer. Korrekt schema øker SJANSEN dramatisk men garanterer ikke visning.

### Støtter Shopify product schema?
Ja – de fleste Shopify-temaer inkluderer grunnleggende product schema. Men det er ofte ufullstendig – verifiser og utfyll manuelt eller med app.

### Trenger jeg ekte anmeldelser for aggregateRating?
Ja – falske anmeldelser i schema bryter Googles retningslinjer og kan gi straff. Bruk kun ekte, verifiserbare anmeldelser.

## Relaterte begreper

- [Schema markup](/seo/hva-er-schema-markup) – det overordnede konseptet
- [Strukturerte data](/seo/hva-er-strukturerte-data) – bredere kategori
- [SEO for nettbutikk](/seo/hva-er-seo-for-nettbutikk) – e-handel kontekst
- [Featured snippets](/seo/hva-er-featured-snippets) – annen SERP-feature
- [Teknisk SEO](/seo/hva-er-teknisk-seo) – teknisk implementering

## Se også

- [Hva er schema markup?](/seo/hva-er-schema-markup)
- [Hva er SEO for nettbutikk?](/seo/hva-er-seo-for-nettbutikk)

## Oppsummering

Product schema gir produktsider rich snippets i Google – stjerner, pris, tilgjengelighet. Øker CTR 20–30 prosent. Implementer med JSON-LD. Test med Rich Results Test. Essensielt for nettbutikker. Underimplementert i norsk e-handel = mulighet. Den tekniske SEO-investeringen med høyest ROI for e-handel.
