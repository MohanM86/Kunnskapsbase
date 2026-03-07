---
title: "Hva er AlphaFold?"
slug: "hva-er-alphafold"
category: "ai"
subcategory: "samfunn"
description: "AlphaFold er DeepMinds AI som løste proteinfolding – et 50 år gammelt biologisk problem. Nobelpris i kjemi 2024. Lær hva det er og hvorfor det endrer medisin."
keywords: ["AlphaFold", "proteinfolding", "DeepMind", "Nobelpris", "AI biologi"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "AlphaFold"
aliases: ["AlphaFold 2", "AlphaFold 3"]
related: ["hva-er-kunstig-intelligens", "hva-er-ai-i-helse", "hva-er-ai-legemiddelutvikling", "hva-er-nevrale-nettverk", "hva-er-reinforcement-learning"]
seeAlso: ["hva-er-ai-i-helse", "hva-er-kunstig-intelligens"]
tags: ["AlphaFold", "ai", "vitenskap", "helse"]
updatedAt: "2026-03-07"
featured: true
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er AlphaFold?

AlphaFold er DeepMinds AI-system som løste proteinfolding – evnen til å forutsi et proteins 3D-struktur fra dets aminosyresekvens – et problem biologer hadde slitt med i over 50 år. Det vant Nobelprisen i kjemi 2024.

> **Kort forklart**
> Proteiner er livets maskiner – de utfører nesten alle funksjoner i kroppen. Et proteins funksjon avhenger av dets 3D-form. Men å bestemme formen eksperimentelt tar måneder til år og koster millioner. AlphaFold gjør det på minutter – gratis. I 2020 løste AlphaFold 2 problemet med over 90 prosent nøyaktighet. I 2022 publiserte DeepMind 3D-strukturene til nesten ALLE kjente proteiner (200 millioner). Det akselererer legemiddelutvikling, sykdomsforståelse og bioteknologi dramatisk.

## Hva betyr begrepet

Proteinfolding-problemet er fundamentalt: et protein er en kjede av aminosyrer som folder seg til en spesifikk 3D-form. Formen bestemmer funksjonen. En feilfoldning kan forårsake sykdom (Alzheimers, Parkinsons, kreft). Å forutsi 3D-formen fra aminosyresekvensen var «biologiens grand challenge» – Christians Anfinsens teorem (1972) sa det var mulig, men ingen klarte det praktisk.

AlphaFold-versjoner har utviklet seg. AlphaFold 1 (2018) vant CASP13-konkurransen med betydelig margin. AlphaFold 2 (2020) løste problemet med 92,4 prosent nøyaktighet (GDT-score) – eksperimentell nøyaktighet. AlphaFold 3 (2024) forutsier ikke bare proteiner men også DNA, RNA, legemidler og andre molekyler i samspill.

Demis Hassabis (DeepMind CEO) og John Jumper (AlphaFold leder) delte Nobelprisen i kjemi 2024 med David Baker (proteindesign).

## Hvordan fungerer det

AlphaFold forutsier 3D-strukturer fra aminosyresekvenser.

```
Input: Aminosyresekvens (f.eks. MKFLILLFNILCLFP...)
↓
AlphaFold:
  1. Finner lignende sekvenser i databaser (MSA – multiple sequence alignment)
  2. Analyserer evolusjonære mønstre (hvilke aminosyrer endres sammen?)
  3. Transformer-basert nevralt nettverk prosesserer
  4. Evoformer-arkitektur (spesialisert for proteinstruktur)
  5. Predikerer avstand mellom alle aminosyrepar
  6. Bygger 3D-struktur iterativt
↓
Output: 3D proteinstruktur med konfidenssscore per aminosyre
Tid: minutter (vs måneder/år eksperimentelt)
```

AlphaFold DB (database) inneholder forutsagte strukturer for over 200 millioner proteiner – nesten alle kjente. Gratis tilgjengelig på alphafold.ebi.ac.uk.

## Hvorfor er det viktig

AlphaFold er den mest konkrete demonstrasjonen av AIs transformative potensial for vitenskap. Det akselererer legemiddelutvikling (forstå sykdomsproteiner → designe medisiner raskere), sykdomsforståelse (feilfoldede proteiner → Alzheimers, kreft), bioteknologi (designe nye enzymer for industri, landbruk, miljø), og grunnforskning (forstå livets fundamentale mekanikker).

AlphaFold 3 utvider til protein-legemiddel-interaksjoner – forutsi hvordan et potensielt legemiddel binder til et protein. Det kan kutte legemiddelutviklingstiden fra 10+ år til få år.

## Eksempler

Malaria: Forskere brukte AlphaFold til å forstå strukturen til et malaria-protein – og identifisere potensielle legemiddelmål. Tidligere umulig uten års eksperimentelt arbeid.

Plastnedbrytning: Enzymdesign med AlphaFold for å skape enzymer som bryter ned plast – miljøteknologi akselerert av AI.

Nobelpris 2024: Demis Hassabis og John Jumper (DeepMind) delte Nobelprisen i kjemi med David Baker – AIs første Nobelpris.

## Vanlige spørsmål

### Er AlphaFold gratis?
Ja – AlphaFold-koden er åpen kildekode, og databasen med 200 millioner strukturer er fritt tilgjengelig.

### Erstatter AlphaFold eksperimentelle metoder?
Supplerer – ikke erstatter. AlphaFold gir en veldig god prediksjon, men eksperimentell verifisering er fortsatt nødvendig for kritiske strukturer.

### Hva betyr dette for legemiddelutvikling?
Dramatisk akselerasjon – forstå sykdomsproteiner raskere, identifisere legemiddelmål raskere. AlphaFold 3 forutsier protein-legemiddel-interaksjoner direkte.

### Kan jeg bruke AlphaFold?
Ja – via ColabFold (Google Colab, gratis), AlphaFold DB (slå opp kjente strukturer), eller AlphaFold Server (kjør egne prediksjoner).

## Relaterte begreper

- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [AI i helse](/ai/hva-er-ai-i-helse) – medisinsk AI
- [AI-legemiddelutvikling](/ai/hva-er-ai-legemiddelutvikling) – akselerert av AlphaFold
- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – AlphaFolds arkitektur
- [Reinforcement learning](/ai/hva-er-reinforcement-learning) – DeepMinds kjernekompetanse

## Se også

- [Hva er AI i helse?](/ai/hva-er-ai-i-helse)
- [Hva er kunstig intelligens?](/ai/hva-er-kunstig-intelligens)

## Oppsummering

AlphaFold løste proteinfolding – 50 års biologisk grand challenge – med over 90 prosent nøyaktighet. Nobelpris i kjemi 2024. 200 millioner proteinstrukturer publisert gratis. Akselererer legemiddelutvikling, sykdomsforståelse og bioteknologi. AlphaFold 3 utvider til protein-legemiddel-interaksjoner. Det er AIs mest konkrete, vitenskapelige gjennombrudd – og bare begynnelsen.
