---
title: "Hva er Mixture of Experts (MoE)?"
slug: "hva-er-moe"
category: "ai"
subcategory: "maskinlaering"
description: "Mixture of Experts er en AI-arkitektur der kun deler av modellen aktiveres per forespørsel – det som gjør GPT-4 og DeepSeek effektive. Lær hva MoE er og hvorfor det endrer AI."
keywords: ["MoE", "Mixture of Experts", "sparse modell", "routing", "ekspertnettverk"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Mixture of Experts"
aliases: ["MoE", "ekspertblanding"]
related: ["hva-er-deepseek", "hva-er-mistral", "hva-er-parametere-og-vekter", "hva-er-inference", "hva-er-transformer-arkitekturen"]
seeAlso: ["hva-er-deepseek", "hva-er-parametere-og-vekter"]
tags: ["MoE", "ai", "maskinlaering", "arkitektur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er Mixture of Experts (MoE)?

Mixture of Experts (MoE) er en AI-arkitektur der modellen består av mange spesialiserte «eksperter» (sub-nettverk), men kun et fåtall aktiveres for hver input – det gir ytelsen til en gigantisk modell med inference-kostnaden til en liten.

> **Kort forklart**
> En vanlig modell med 70 milliarder parametere bruker ALLE 70 milliarder for hvert svar. En MoE-modell med 600 milliarder parametere kan ha 16 eksperter men aktivere kun 2 per token – effektivt bruker den bare 75 milliarder parametere per svar. Resultatet: kvaliteten til 600B, hastigheten til 75B. GPT-4 bruker sannsynligvis MoE (~1,8 billioner totalt, ~280 milliarder aktive). DeepSeek-V3 bruker MoE (671 milliarder totalt, 37 milliarder aktive). Mixtral var den første populære åpne MoE-modellen.

## Hva betyr begrepet

I en MoE-modell erstattes noen lag i transformer-arkitekturen med et sett av «eksperter» – identiske sub-nettverk med ulike lærte vekter. En routing-mekanisme (gating network) bestemmer hvilke eksperter som aktiveres for hvert token.

Nøkkelkomponenter er eksperter (identiske sub-nettverk, typisk 8–64 stk, hvert spesialisert på visse typer input), router/gate (et lite nettverk som velger hvilke eksperter som skal aktiveres per token), top-k routing (typisk top-2: de to mest relevante ekspertene aktiveres), og load balancing (sikre at alle eksperter brukes jevnt – unngå at alle tokens sendes til samme ekspert).

Typiske MoE-konfigurasjoner er GPT-4 (antatt ~16 eksperter, top-2), DeepSeek-V3 (256 eksperter, top-8, men totalt 671B/37B aktive), og Mixtral 8x7B (8 eksperter à 7B, top-2, totalt 46,7B, aktive ~12,9B).

## Hvordan fungerer det

MoE aktiverer kun relevante eksperter per token.

```
Input token: "fotosyntese"
Router: "Dette er biologi" → Aktiverer Ekspert 3 (naturfag) + Ekspert 7 (kjemi)
De 6 andre ekspertene: inaktive (0 beregning)

Input token: "JavaScript"
Router: "Dette er koding" → Aktiverer Ekspert 1 (programmering) + Ekspert 5 (tech)

→ Totalt: 8 × 7B = 56B parametere i modellen
→ Per token: 2 × 7B = 14B aktive parametere
→ Kvalitet nær 56B, hastighet som 14B
```

## Hvorfor er det viktig

MoE er løsningen på AI-ens skaleringsdilemma: større modeller er bedre, men dyrere å kjøre. MoE gir deg størrelse (kunnskap, kapasitet) uten proporsjonalt mer compute per svar.

Det er grunnen til at GPT-4 kan ha 1,8 billioner parametere og fortsatt svare på sekunder – kun ~280 milliarder er aktive per token. Og det er grunnen til at DeepSeek-V3 er så billig – 37 milliarder aktive av 671 milliarder totalt.

Utfordringene er trening (alle eksperter må trenes, selv om bare noen brukes per token – trening er dyrere), load balancing (noen eksperter kan bli overbelastet, andre underbrukt), og minne (alle eksperter må lastes i minne selv om bare noen er aktive).

## Eksempler

DeepSeek-V3: 671 milliarder totalt, 37 milliarder aktive. Koster 10–50× mindre enn GPT-4 per token – MoE er nøkkelen.

Mixtral 8x7B: Den første populære åpne MoE – 8 eksperter, totalt 46,7B, ytelse som Llama 70B (hele 70B aktive). MoE for massene.

GPT-4: Antatt MoE med ~1,8 billioner totalt. Uten MoE ville inference-kostnadene vært umulige i skala.

## Vanlige spørsmål

### Er MoE alltid bedre enn dense modeller?
For store modeller: ja – MoE gir bedre ytelse/kostnad. For små modeller (<7B): dense er enklere og like bra.

### Kan jeg kjøre MoE lokalt?
Mixtral 8x7B krever ~26 GB RAM (kvantisert). DeepSeek-V3 er for stor for lokalt. MoE-modeller krever mer minne enn aktive parametere antyder.

### Hvordan «vet» routeren hvilken ekspert som skal brukes?
Routeren er et lite nevralt nettverk trent sammen med ekspertene – den lærer å sende tokens til riktige eksperter basert på innhold.

## Relaterte begreper

- [DeepSeek](/ai/hva-er-deepseek) – den mest kjente MoE-modellen
- [Mistral](/ai/hva-er-mistral) – skapte Mixtral
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – totalt vs aktive
- [Inference](/ai/hva-er-inference) – MoE reduserer inference-kostnad
- [Transformer-arkitekturen](/ai/hva-er-transformer-arkitekturen) – MoE bygger på den

## Se også

- [Hva er DeepSeek?](/ai/hva-er-deepseek)
- [Hva er parametere og vekter?](/ai/hva-er-parametere-og-vekter)

## Oppsummering

MoE aktiverer kun deler av modellen per token – ytelse som gigantisk modell, kostnad som liten. GPT-4 (~1,8T/280B), DeepSeek-V3 (671B/37B) og Mixtral (46,7B/12,9B) bruker alle MoE. Det er nøkkelen til skalerbar, kostnadseffektiv AI. MoE er sannsynligvis arkitekturen for alle fremtidige store modeller.
