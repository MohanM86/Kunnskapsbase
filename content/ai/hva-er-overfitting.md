---
title: "Hva er overfitting og underfitting?"
slug: "hva-er-overfitting"
category: "ai"
subcategory: "maskinlaering"
description: "Overfitting er når en AI-modell pugger treningsdata i stedet for å lære generelle mønstre. Lær hva det er, underfitting, og hvordan du balanserer."
keywords: ["overfitting", "underfitting", "generalisering", "regularisering", "AI-trening"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Overfitting"
aliases: ["overtilpasning", "underfitting"]
related: ["hva-er-treningsdata", "hva-er-maskinlaering", "hva-er-nevrale-nettverk", "hva-er-finjustering-av-ai", "hva-er-parametere-og-vekter"]
seeAlso: ["hva-er-treningsdata", "hva-er-maskinlaering"]
tags: ["overfitting", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er overfitting og underfitting?

Overfitting er når en AI-modell har «pugget» treningsdataen i stedet for å lære generelle mønstre – den presterer perfekt på treningsdata men feiler på nye data. Underfitting er det motsatte: modellen har lært for lite.

> **Kort forklart**
> Tenk deg en student som pugger eksamensoppgavene ord for ord. På nøyaktig de samme oppgavene scorer hun 100 prosent. Men gi henne en ny oppgave med litt annen formulering – hun er fortapt. Det er overfitting. En annen student som knapt åpner boken scorer dårlig på alt – det er underfitting. Målet er en student som forstår prinsippene og kan løse nye oppgaver – det er god generalisering.

## Hva betyr begrepet

Overfitting betyr at modellen er for kompleks for datamengden. Den «husker» treningsdataen i stedet for å lære mønstre. Resultatet er høy nøyaktighet på treningsdata, lav nøyaktighet på nye data, og modellen fanger opp støy og tilfeldigheter som om de var mønstre.

Underfitting betyr at modellen er for enkel. Den klarer ikke å fange mønstrene i dataen. Resultatet er lav nøyaktighet på både treningsdata og nye data.

God generalisering er balansen – modellen lærer de reelle mønstrene og presterer godt på data den aldri har sett.

Teknikker mot overfitting er regularisering (straffer for kompleksitet – L1, L2, dropout), mer treningsdata (større datasett gir bedre generalisering), tidlig stopp (slutt treningen før modellen begynner å «pugge»), kryssvalidering (test på ulike deler av datasettet), og data-augmentering (kunstig utvide datasettet med varianter).

## Hvordan fungerer det

Overfitting og underfitting illustrert med et enkelt eksempel.

```
Data: Temperaturer i Oslo gjennom året (12 datapunkter)

Underfitting (for enkel): Rett linje → Fanger ikke sesongvariasjonen
God modell: Sinuskurve → Fanger sesongmønsteret perfekt
Overfitting (for kompleks): Kurve gjennom hvert punkt → Fanger støy → Spår urealistiske temperaturer mellom punktene

Tren → Valider → Test:
Overfittet modell: 99 % på trening, 60 % på test
God modell: 92 % på trening, 90 % på test
Underfittet modell: 70 % på trening, 68 % på test
```

## Hvorfor er det viktig

Overfitting er det vanligste problemet i maskinlæring – og det mest lumske fordi modellen SER bra ut på treningsdata. Du tror den fungerer perfekt, men den feiler i produksjon. Å oppdage og forhindre overfitting er en kjernekompetanse for AI-utviklere.

For store språkmodeller (LLM) er overfitting mindre problematisk fordi de trenes på enorme datamengder. Men ved finjustering på små datasett er overfitting en reell risiko.

## Eksempler

Medisinsk AI: En modell trent på røntgenbilder fra ett sykehus. Den «lærer» at bilder fra dette sykehuset (med spesifikk maskinvare-signatur) er positive. På bilder fra andre sykehus feiler den – den lærte maskinvare-signaturen, ikke sykdommen. Klassisk overfitting.

Finjustering: Du finjusterer en LLM på 100 kundeservice-samtaler. Modellen pugger svarene. Ny samtale som er litt annerledes – modellen svarer feil. Løsning: mer data, regularisering.

## Vanlige spørsmål

### Hvordan vet jeg om modellen min overfitter?
Sammenlign nøyaktighet på treningsdata vs. valideringsdata. Stort gap = overfitting. Bruk alltid et testdatasett modellen aldri har sett.

### Kan store modeller (GPT-4) overfittes?
Mindre sannsynlig pga enorme datamengder. Men ved finjustering på små datasett: absolutt mulig.

### Hva er dropout?
En regulariseringsteknikk der tilfeldige noder «slås av» under trening – tvinger modellen til å lære robuste mønstre i stedet for å stole på enkeltforbindelser.

## Relaterte begreper

- [Treningsdata](/ai/hva-er-treningsdata) – kvaliteten påvirker overfitting
- [Maskinlæring](/ai/hva-er-maskinlaering) – prosessen der overfitting skjer
- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – arkitekturen som kan overfittes
- [Finjustering](/ai/hva-er-finjustering-av-ai) – spesialisert trening med overfitting-risiko
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – det modellen justerer under trening

## Se også

- [Hva er treningsdata?](/ai/hva-er-treningsdata)
- [Hva er maskinlæring?](/ai/hva-er-maskinlaering)

## Oppsummering

Overfitting er når AI pugger treningsdata i stedet for å lære mønstre – perfekt på trening, dårlig på nye data. Underfitting er for enkel modell. Balansen er god generalisering. Regularisering, mer data og tidlig stopp forhindrer overfitting. Alltid test på data modellen aldri har sett. Det er maskinlæringens viktigste kvalitetskontroll.
