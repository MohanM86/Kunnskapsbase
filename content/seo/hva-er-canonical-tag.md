---
title: "Hva er canonical tag?"
slug: "hva-er-canonical-tag"
category: "SEO"
subcategory: "Teknisk"
description: "Canonical tag forteller søkemotorer hvilken versjon av en side som er den foretrukne. Lær hvordan du bruker canonical for å løse duplisert innhold og konsolidere rangeringskraft."
keywords: ["canonical tag", "rel canonical", "kanonisk URL", "duplisert innhold", "canonical-attributt"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Canonical tag"
aliases: ["rel canonical", "kanonisk tag", "canonical URL", "kanonisk lenke"]
related: ["hva-er-duplisert-innhold", "hva-er-teknisk-seo", "hva-er-301-omdirigering"]
seeAlso: ["hva-er-hreflang", "hva-er-meta-tags"]
tags: ["canonical tag", "duplisert innhold", "teknisk SEO", "URL"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er canonical tag?

Canonical tag er et HTML-element som forteller søkemotorer hvilken URL som er den «offisielle» eller foretrukne versjonen av en side. Når samme eller svært likt innhold er tilgjengelig via flere URL-er, peker canonical-taggen til den ene versjonen som bør indekseres og motta all rangeringskraft.

> **Kort forklart**
> Canonical tag er din måte å si til Google: «Denne siden finnes på flere adresser, men dette er den versjonen du bør bruke i søkeresultatene.» Det løser duplisert innhold uten å fjerne sider.

## Hvorfor trenger du canonical tags?

Duplisert innhold oppstår oftere enn de fleste tror. Samme side kan være tilgjengelig via HTTP og HTTPS, med og uten www, med og uten trailing slash, med ulike URL-parametere for sortering og filtrering, og via utskriftsversjoner eller mobilversjoner.

Uten canonical tags må Google selv velge hvilken versjon som er den foretrukne – og den velger ikke alltid riktig. Rangeringskraft spres mellom duplikatene, og feil versjon kan ende opp i søkeresultatene.

Canonical tags løser dette elegant. Du beholder alle URL-variantene for brukerne, men forteller Google hvilken som er den kanoniske – altså den som bør indekseres og rangere.

## Implementering

Canonical-taggen plasseres i head-seksjonen av HTML-dokumentet som et link-element med rel satt til «canonical» og href som peker til den foretrukne URL-en. Taggen bør bruke den fulle, absolutte URL-en med riktig protokoll.

Hver side bør ha en canonical tag, inkludert en selvhenvisende canonical som peker til sidens egen URL. Selvhenvisende canonicals er en beste praksis fordi de eksplisitt bekrefter at denne URL-en er den foretrukne – selv om det ikke finnes andre versjoner.

## Canonical tag vs. 301-omdirigering

Både canonical tags og 301-omdirigeringer løser duplisert innhold, men de fungerer forskjellig. En 301-omdirigering sender brukere og søkemotorer til den nye URL-en. Den opprinnelige URL-en er ikke lenger tilgjengelig. Canonical tag beholder begge URL-er tilgjengelige for brukere, men forteller søkemotorer at bare den kanoniske skal indekseres.

Bruk 301 når den gamle URL-en ikke lenger trengs og brukere bør sendes videre. Bruk canonical når begge URL-er har en funksjon for brukere, men bare én bør indekseres. Typiske eksempler er filtrerings-URL-er i nettbutikker der brukere trenger filteret men Google bare bør indeksere hovedsiden.

## Canonical tag vs. noindex

Noindex fjerner en side fra indeksen helt – den vises aldri i søkeresultatene. Canonical overfører rangeringskraft til den kanoniske URL-en og lar den representere duplikatene. Bruk noindex for sider som aldri bør vises i søk, som takkesider og interne søkeresultater. Bruk canonical for sider som er varianter av annet innhold, som parameterversjoner og utskriftsversjoner.

## Viktige regler

### Pek alltid til indekserbare sider

Canonical-taggen bør peke til en side som er tilgjengelig, returnerer 200-statuskode, ikke har noindex-tag, og ikke er blokkert i robots.txt. Å peke canonical til en side som ikke kan indekseres skaper forvirring og gjør at Google ignorerer taggen.

### Vær konsistent med andre signaler

Canonical-taggen bør samsvare med andre signaler. Sitemapen bør bare inkludere kanoniske URL-er. Interne lenker bør peke til kanoniske URL-er. Hreflang-tagger bør referere til kanoniske URL-er. Inkonsistens mellom disse signalene kan føre til at Google ignorerer canonical-taggen.

### Én canonical per side

Hver side bør ha nøyaktig én canonical tag. Flere canonical tags på samme side forvirrer Google, og resultatet kan bli at alle ignoreres.

### Canonical er et hint

Det er viktig å forstå at canonical er et hint, ikke et direktiv. Google følger vanligvis canonical-anvisningen, men kan velge å ignorere den hvis den er inkonsistent med andre signaler, peker til en side med vesentlig annerledes innhold, er implementert feil, eller hvis Google mener en annen URL er mer passende.

## Vanlige bruksområder

### URL-parametere

Nettbutikker og dynamiske nettsider genererer ofte mange URL-varianter via parametere for sortering, filtrering, paginering og sporingsparametere. Alle disse bør ha canonical som peker tilbake til grunn-URL-en uten parametere.

### Paginering

For paginert innhold som artikellister og produktkategorier med side 1, 2, 3 osv., er riktig canonical-håndtering viktig. Hver pagineringsside bør ha en selvhenvisende canonical. Ikke pek alle pagineringssider til side 1 – det forteller Google at bare innholdet på side 1 skal indekseres.

### Cross-domain canonical

Canonical kan også brukes på tvers av domener. Hvis du publiserer en gjestepost på en annen nettside, kan den nettsiden legge til en canonical som peker til originalartikkelen på din side. Dette forteller Google at din side er originalen og bør få rangeringskraften.

### Syndikert innhold

Hvis innholdet ditt syndikeres til andre plattformer, bør de syndikerte versjonene ha en cross-domain canonical som peker til originalen på din nettside.

## Sjekke canonical-implementering

Du kan sjekke canonical tags på flere måter. I nettleseren kan du høyreklikke og velge «Vis sidekilde» og søke etter «canonical» i koden. Google Search Console viser den Google-valgte kanoniske URL-en i URL-inspeksjonsverktøyet – dette avslører om Google faktisk følger din canonical-anvisning. Screaming Frog kan crawle hele nettstedet og rapportere canonical tags for alle sider, inkludert manglende, feile og inkonsistente canonicals.

## Vanlige feil

De vanligste canonical-feilene er manglende canonical der sider ikke har noen canonical tag, noe som overlater valget helt til Google. Feil canonical der taggen peker til feil URL eller en ikke-eksisterende side er også vanlig. Relativ URL der man bruker relativ sti i stedet for absolutt URL kan skape tvetydighet. Inkonsistens der canonical sier én ting mens sitemap, interne lenker eller hreflang sier noe annet skaper problemer. Canonical til omdirigert URL der taggen peker til en URL som omdirigerer videre skaper forvirring.

## Ofte stilte spørsmål

### Trenger hver side en canonical tag?
Ja, det anbefales. Selv sider uten duplikater bør ha en selvhenvisende canonical som eksplisitt bekrefter den foretrukne URL-en.

### Kan Google ignorere min canonical tag?
Ja. Canonical er et hint, og Google kan velge å ignorere det hvis andre signaler peker i en annen retning. Konsistens mellom canonical, sitemap, interne lenker og hreflang styrker signalet.

### Overfører canonical rangeringskraft?
Ja. Canonical konsoliderer rangeringskraft fra alle duplikatene til den kanoniske URL-en, lignende en 301-omdirigering men uten å fjerne de andre URL-ene.

### Hva skjer hvis to sider peker canonical til hverandre?
Google vil velge den de anser som mest passende og ignorere den andre canonical-taggen. Unngå sirkulære canonicals – hver side bør enten peke til seg selv eller til en tydelig foretrukket versjon.
