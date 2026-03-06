---
title: "Hva er meta-tags?"
slug: "hva-er-meta-tags"
category: "SEO"
subcategory: "Innhold"
description: "Meta-tags er HTML-elementer som gir søkemotorer informasjon om nettsidene dine. Lær om title tag, meta description, robots og Open Graph."
keywords: ["meta-tags", "title tag", "meta description", "robots meta", "Open Graph", "HTML meta"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "Meta-tags"
aliases: ["meta tags", "metatagger", "HTML meta-elementer", "meta-elementer"]
related: ["hva-er-on-page-seo", "hva-er-seo", "hva-er-teknisk-seo"]
seeAlso: ["hva-er-soekeord", "hva-er-strukturerte-data"]
tags: ["meta-tags", "title tag", "meta description", "on-page SEO"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er meta-tags?

Meta-tags er HTML-elementer som plasseres i `<head>`-seksjonen av en nettside for å gi informasjon om siden til søkemotorer og nettlesere. De er usynlige for besøkende som leser siden, men spiller en viktig rolle for hvordan siden vises i søkeresultatene og hvordan søkemotorer tolker innholdet.

> **Kort forklart**
> Meta-tags er kodefragmenter som forteller søkemotorer hva nettsiden din handler om, hvordan den skal vises i søkeresultatene, og hvordan den skal behandles av roboter og sosiale medier.

## Title tag (titteltaggen)

Title tag er den viktigste meta-taggen for SEO. Den definerer tittelen som vises som den klikkbare overskriften i søkeresultatene og i nettleserfanen. Titteltaggen skrives som `<title>Din tittel her</title>` i HTML-ens head-seksjon.

### Beste praksis for titler

En effektiv title tag bør holde seg under 60 tegn for å unngå at den kuttes i søkeresultatene. Hovedsøkeordet bør plasseres tidlig i tittelen, helst helt i starten. Hver side på nettstedet bør ha en unik tittel. Tittelen bør være skrevet for mennesker – den må lokke til klikk samtidig som den er nøyaktig.

Et godt mønster for title tags er «Hovedsøkeord – Beskrivende tillegg | Merkenavn». For eksempel: «Hva er SEO? Komplett guide til søkemotoroptimalisering | Kunnskapsbase.no». Google kan i noen tilfeller velge å overskrive tittelen din med sin egen versjon hvis den mener din tittel ikke er dekkende nok, men en godt skrevet title tag vil i de fleste tilfeller brukes som den er.

## Meta description

Meta description er en kort beskrivelse av sidens innhold som vises under tittelen i søkeresultatene. Den skrives som et meta-element med name-attributtet satt til «description» og innholdet i content-attributtet.

### Beste praksis for meta description

Hold beskrivelsen mellom 150 og 160 tegn. Inkluder hovedsøkeordet naturlig – Google fremhever søkeord i beskrivelsen med fet skrift. Skriv en overbevisende tekst som gir brukeren grunn til å klikke. Inkluder gjerne en call-to-action som «Lær mer», «Finn ut hvordan» eller «Les vår guide». Hver side bør ha en unik meta description.

Meta description er ikke en direkte rangeringsfaktor, men en god beskrivelse øker klikkraten, som indirekte kan påvirke rangeringen. Google velger noen ganger å generere sin egen beskrivelse fra sideinnholdet, spesielt hvis den eksisterende beskrivelsen ikke matcher søket godt nok.

## Robots meta tag

Robots meta-taggen forteller søkemotorer hvordan de skal behandle en side. Den mest brukte formen er et meta-element med name satt til «robots» og content med verdier som «index, follow», «noindex, nofollow» eller kombinasjoner av disse.

De viktigste verdiene er **index/noindex** som bestemmer om siden skal inkluderes i søkeindeksen, **follow/nofollow** som bestemmer om søkemotorer skal følge lenkene på siden, og **noarchive** som hindrer søkemotorer fra å lagre en cachet kopi av siden.

Bruk «noindex» på sider du ikke vil skal vises i søkeresultatene, som interne søkeresultatsider, takkesider etter skjemainnsending, eller dupliserte sider. Vær forsiktig med noindex – en feilplassert tag kan gjøre viktige sider usynlige i søkeresultatene.

## Canonical tag

Canonical-taggen løser problemet med duplisert innhold ved å fortelle søkemotorer hvilken versjon av en side som er den «offisielle». Den skrives som et link-element med rel satt til «canonical» og href som peker til den foretrukne URL-en.

Dette er spesielt nyttig når samme innhold er tilgjengelig via flere URL-er (for eksempel med og uten www, med ulike parametere, eller via HTTP og HTTPS). Uten canonical tag kan Google se disse som separate sider med duplisert innhold, noe som tynner ut rangeringskraften.

## Open Graph og sosiale meta-tags

Open Graph-tags kontrollerer hvordan nettsiden din vises når den deles på sosiale medier som Facebook, LinkedIn og Twitter. De viktigste er **og:title** som definerer tittelen ved deling, **og:description** som gir beskrivelsen ved deling, **og:image** som bestemmer bildet som vises, og **og:url** som angir den kanoniske URL-en.

For Twitter finnes det egne tags med prefikset «twitter:» som **twitter:card** (velger korttype, vanligvis «summary_large_image») og **twitter:site** (din Twitter-konto).

Gode Open Graph-tags er viktige fordi deling på sosiale medier kan generere trafikk og tilbakekoblinger, som igjen påvirker SEO positivt.

## Viewport meta tag

Viewport-taggen er essensiell for mobiloptimalisering. Den forteller nettleseren hvordan den skal skalere siden på ulike skjermstørrelser. Standard-implementeringen setter bredden til enhetsbredden og startskalering til 1.0.

Uten denne taggen vil mobilnettlesere vise desktop-versjonen av siden nedskalert, noe som gir en dårlig brukeropplevelse. Siden Google bruker mobile-first indexing, er viewport-taggen indirekte viktig for SEO.

## Hreflang

Hreflang-taggen brukes på flerspråklige nettsider for å fortelle søkemotorer hvilke språkversjoner som finnes av en side. For norske nettsider med innhold på både bokmål og engelsk kan dette se ut som link-elementer med rel satt til «alternate» og hreflang-attributter for de ulike språkene.

Dette hjelper Google med å vise riktig språkversjon til brukere basert på deres foretrukne språk og lokasjon.

## Meta-tags som ikke lenger er viktige

Noen meta-tags som en gang var viktige for SEO har mistet sin relevans. **Keywords meta tag** ble misbrukt for keyword stuffing og ignoreres nå av Google helt. **Revisit-after** som fortalte søkemotorer hvor ofte de skulle crawle, ignoreres av moderne søkemotorer. **Author meta tag** har ingen SEO-effekt – bruk heller strukturerte data for forfatterinformasjon.

## Sjekkliste for meta-tags

For hver viktig side på nettsiden din bør du sørge for at du har en unik og beskrivende title tag under 60 tegn, en overbevisende meta description på 150–160 tegn, riktig robots-tag (vanligvis index, follow), en canonical tag som peker til den foretrukne URL-en, Open Graph-tags for god visning ved deling, viewport-tag for mobiloptimalisering, og hreflang-tags hvis du har flerspråklig innhold.

## Ofte stilte spørsmål

### Er meta keywords fortsatt viktige?
Nei. Google har bekreftet at de ignorerer meta keywords-taggen helt. Den brukes ikke som rangeringssignal og trenger ikke å inkluderes.

### Kan Google overskrive mine meta-tags?
Ja. Google kan velge å generere sin egen tittel eller beskrivelse hvis den mener sine versjoner er mer relevante for søket. Du kan minimere dette ved å skrive presise og dekkende meta-tags.

### Hvor legger jeg meta-tags?
Alle meta-tags plasseres i `<head>`-seksjonen av HTML-dokumentet, mellom `<head>` og `</head>`. De fleste CMS-systemer har egne felter for å sette title tag og meta description uten å redigere koden direkte.

### Trenger alle sider meta description?
Ideelt sett ja, men det er viktigere for noen sider enn andre. Prioriter forsiden, kategori- og produktsider, og dine viktigste innholdssider. For sider med svært varierende innhold kan det noen ganger være bedre å la Google generere beskrivelsen.
