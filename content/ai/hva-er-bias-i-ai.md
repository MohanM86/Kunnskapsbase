---
title: "Hva er bias i AI?"
slug: "hva-er-bias-i-ai"
category: "ai"
subcategory: "samfunn"
description: "Bias i AI er systematiske skjevheter som gjør at AI-systemer diskriminerer eller gir urettferdige resultater. Lær hva det er, hvorfor det skjer, og hvordan det motvirkes."
keywords: ["bias", "AI-skjevhet", "diskriminering", "rettferdighet", "AI-etikk"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Bias i AI"
aliases: ["AI-skjevhet", "algoritmisk bias", "maskinlæringsbias"]
related: ["hva-er-ai-etikk-dybde", "hva-er-treningsdata", "hva-er-kunstig-intelligens", "hva-er-ai-regulering", "hva-er-eu-ai-act"]
seeAlso: ["hva-er-ai-etikk-dybde", "hva-er-treningsdata"]
tags: ["bias", "ai", "samfunn", "etikk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er bias i AI?

Bias i AI er systematiske skjevheter i AI-systemer som fører til urettferdige, diskriminerende eller unøyaktige resultater for visse grupper – ofte forårsaket av skjeve treningsdata, designvalg eller manglende mangfold i utviklingsteam.

> **Kort forklart**
> Amazons AI-rekrutteringsverktøy diskriminerte systematisk kvinner fordi det var trent på historiske CV-er der menn dominerte. Ansiktsgjenkjenning feiler oftere for mørkhudet personer fordi treningsdataen overrepresenterer lyshudede. Språkmodeller assosierer «lege» med menn og «sykepleier» med kvinner fordi teksten de er trent på reflekterer samfunnets historiske skjevheter. AI forsterker og skalerer menneskelig bias – men vi kan motvirke det.

## Hva betyr begrepet

Bias i AI har flere kilder. Databias er den vanligste – treningsdataen reflekterer historiske skjevheter i samfunnet. Hvis dataen overrepresenterer én gruppe, vil modellen prestere best for den gruppen. Seleksjonsbias oppstår når treningsdataen ikke representerer den virkelige verden – for eksempel medisinsk AI trent primært på data fra vestlige pasienter. Algoritmisk bias kan oppstå selv med balansert data – algoritmen kan utilsiktet vekte visse egenskaper som korrelerer med beskyttede kategorier (kjønn, etnisitet). Bekreftelsesbias er at utviklere ubevisst designer systemer som bekrefter deres egne antagelser. Og evalueringsbias er at benchmarks og testdatasett er selv biased.

Konsekvensene er alvorlige. I ansettelse kan AI systematisk diskriminere mot kvinner, minoriteter eller eldre. I strafferett (COMPAS) ble svarte feilaktig merket som høyrisiko for gjentatt kriminalitet dobbelt så ofte som hvite. I helse presterer medisinsk AI dårligere for underrepresenterte grupper. I finans kan låne-AI systematisk avslå søknader fra visse postnummer.

## Hvordan fungerer det

Bias forsterkes gjennom en skadelig syklus.

```
Historisk skjevhet i samfunnet → Reflektert i data → AI trenes på skjeve data → AI reproduserer skjevheten → AI-avgjørelser forsterker skjevheten → Mer skjeve data → Verre bias

Eksempel:
Historisk: Menn dominerte tech-jobber → CV-er i treningsdata: 80 % menn → AI lærer: mannlige CV-er = «gode» → AI diskriminerer kvinner → Færre kvinner ansettes → Mer skjeve data
```

## Hvorfor er det viktig

AI-systemer skalerer bias til millioner av beslutninger. Én partisk ansettelsessjef påvirker titalls ansettelser. Én partisk AI-algoritme påvirker millioner. Og AI-beslutninger oppfattes som «objektive» – folk stoler på algoritmen fordi den «er bare matematikk», uten å forstå at matematikken reflekterer menneskelig bias.

EU AI Act klassifiserer mange bias-sensitive AI-bruksområder som «høyrisiko» – med krav om rettferdighetsanalyse, transparens og menneskellig tilsyn.

## Eksempler

Amazon rekruttering (2018): AI-verktøy trent på 10 år med CV-er – primært menn. Modellen straffet CV-er med «women's» (f.eks. «women's chess club»). Amazon skrapte prosjektet.

Ansiktsgjenkjenning: MIT-studie (Joy Buolamwini, 2018) viste at kommersielle ansiktsgjenkjenningssystemer hadde 0,8 prosent feilrate for lyshudede menn og 34,7 prosent for mørkhudet kvinner.

ChatGPT: Språkmodeller assosierer yrker med kjønn basert på treningsdata – «lege» med «han», «sykepleier» med «hun». OpenAI og Anthropic jobber aktivt med å redusere dette.

## Vanlige spørsmål

### Kan bias elimineres helt?
Sannsynligvis ikke – all data reflekterer noe bias. Men det kan reduseres dramatisk gjennom diversifisert data, rettferdighetsmetrikker, menneskelig tilsyn og mangfoldig utviklingsteam.

### Er AI mer biased enn mennesker?
Ikke nødvendigvis – mennesker er også biased. Forskjellen er at AI skalerer bias til millioner av beslutninger og oppfattes som «objektiv.»

### Hvem er ansvarlig for AI-bias?
Utviklerne, organisasjonen som deployer AI-en, og regulatorene. EU AI Act plasserer ansvaret på «deployers» av høyrisiko-AI.

### Hva er «fairness metrics»?
Kvantitative mål på om en AI behandler ulike grupper rettferdig – f.eks. equal opportunity (lik sannsynlighet for riktig positiv), demographic parity (lik utfallsrate), equalized odds.

## Relaterte begreper

- [AI-etikk](/ai/hva-er-ai-etikk-dybde) – det bredere etiske rammeverket
- [Treningsdata](/ai/hva-er-treningsdata) – kilden til de fleste bias
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – teknologien som skalerer bias
- [AI-regulering](/ai/hva-er-ai-regulering) – juridiske krav mot bias
- [EU AI Act](/ai/hva-er-eu-ai-act) – rettferdighskrav for høyrisiko-AI

## Se også

- [Hva er AI-etikk?](/ai/hva-er-ai-etikk-dybde)
- [Hva er treningsdata?](/ai/hva-er-treningsdata)

## Oppsummering

Bias i AI er systematiske skjevheter som fører til diskriminering – forårsaket av skjeve treningsdata, designvalg og manglende mangfold. AI skalerer bias til millioner av beslutninger. Ansiktsgjenkjenning, ansettelse og strafferett er dokumenterte problemområder. Motvirkes gjennom diversifisert data, rettferdighetsmetrikker og menneskelig tilsyn. EU AI Act stiller krav. Bias kan ikke elimineres helt – men det kan reduseres dramatisk.
