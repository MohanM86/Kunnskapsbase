---
title: "Hva er scaling laws i AI?"
slug: "hva-er-scaling-laws"
category: "ai"
subcategory: "maskinlaering"
description: "Scaling laws er de empiriske lovene som viser at AI-modeller forbedres forutsigbart med mer data, flere parametere og mer compute. Lær hva det er og hva det betyr for AI-fremtiden."
keywords: ["scaling laws", "skaleringsregler", "Chinchilla", "compute-optimal", "skaleringsgrenser"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Scaling laws"
aliases: ["skaleringsregler", "Chinchilla scaling", "compute-optimal"]
related: ["hva-er-parametere-og-vekter", "hva-er-treningsdata", "hva-er-gpu-tpu", "hva-er-kunstig-intelligens", "hva-er-inference"]
seeAlso: ["hva-er-parametere-og-vekter", "hva-er-treningsdata"]
tags: ["scaling laws", "ai", "maskinlaering", "forskning"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er scaling laws i AI?

Scaling laws er de empiriske lovene som viser at AI-modellers ytelse forbedres forutsigbart og jevnt når du øker tre faktorer: datamengde, parametere (modellstørrelse) og trenings-compute – og at forholdet mellom disse kan optimaliseres.

> **Kort forklart**
> AI har en «oppskrift» for forbedring: doble datamengden = modellen blir litt bedre. Doble parameterne = litt bedre igjen. Doble compute = enda litt bedre. Og dette er FORUTSIGBART – du kan beregne hvor god en modell vil bli FØR du trener den, basert på budsjettet. OpenAI oppdaget dette i 2020. DeepMinds Chinchilla (2022) viste at de fleste modeller var undertrent – de trengte mer data, ikke flere parametere. Scaling laws er grunnen til at AI-selskaper investerer milliarder – de VET at mer compute gir bedre modeller.

## Hva betyr begrepet

OpenAIs scaling laws paper (Kaplan et al., 2020) viste at modellens loss (feil) synker som en power law med antall parametere (N), datamengde (D), og trenings-compute (C). Forholdet er forutsigbart: log(Loss) ≈ a·log(N) + b – en rett linje på log-log-skala. Det betyr at 10× mer compute gir en konsistent, forutsigbar forbedring.

Chinchilla (Hoffmann et al., DeepMind, 2022) utfordret status quo. De viste at de fleste store modeller (GPT-3, PaLM) var for store for datamengden – de hadde for mange parametere og for lite treningsdata. Chinchilla-optimal betyr at parametere og data bør skalere proporsjonalt: doble modellstørrelsen = doble treningsdataen.

Chinchilla 70B (70 milliarder parametere, 1,4 billioner tokens) slo Gopher 280B (280 milliarder, 300 milliarder tokens) – fordi Chinchilla hadde 4× mer data per parameter. Leksjonen: data er like viktig som modellstørrelse.

Llama, Mistral og DeepSeek fulgte Chinchilla-prinsippet – de trente kompakte modeller på mye mer data enn «nødvendig» etter gammel tenkning, og oppnådde toppresultater.

## Hvordan fungerer det

Scaling laws lar deg forutsi AI-ytelse fra budsjettet.

```
OpenAIs scaling law:
  Loss ∝ N^(-0.076) × D^(-0.095) × C^(-0.050)
  → Forutsigbar forbedring med mer N (parametere), D (data), C (compute)

Chinchilla-optimal trening:
  Budsjett: 10^24 FLOPS
  Gammel tenkning: 500B parametere, 200B tokens → Loss: 2,1
  Chinchilla-optimal: 70B parametere, 1,4T tokens → Loss: 1,94
  → Halvparten av parameterne, 7× mer data = BEDRE modell

Praktisk:
  Har du $10M budsjett → Scaling laws forteller deg nøyaktig:
  Optimal modellstørrelse: ~30B parametere
  Optimal datamengde: ~600B tokens
  Forventet ytelse: forutsigbar
```

## Hvorfor er det viktig

Scaling laws er grunnen til at AI-selskaper investerer milliarder med SIKKERHET – ikke håp. De VET at 10× mer compute gir bedre modeller. Det er ikke gambling – det er en empirisk lov.

Det store spørsmålet er om scaling laws vil fortsette. Optimistene (Dario Amodei, Sam Altman) sier ja – vi er langt fra grensen. Skeptikerne sier at vi nærmer oss «peak data» (mesteparten av internett er brukt), at avtagende utbytte gjør det stadig dyrere per forbedring, og at nye paradigmer (reasoning, agentic) kan være viktigere enn ren skalering.

Test-time compute scaling (reasoning models) er en ny dimensjon: i stedet for bare mer trenings-compute, bruk mer inference-compute per svar. o1/o3 og R1 viser at dette gir dramatisk forbedring.

## Eksempler

GPT-serien: GPT-2 (1,5B) → GPT-3 (175B) → GPT-4 (~1,8T). Hvert steg: mer parametere + mer data + mer compute = bedre. Forutsigbart.

DeepSeek-effektivitet: DeepSeek brukte MoE + effektiv trening for å oppnå toppresultater med MINDRE compute enn scaling laws tilsier – arkitekturinnovasjon kan «jukse» kurven.

Llama 3: Meta trente Llama 3 8B på 15 billioner tokens – 100× mer data per parameter enn Chinchilla-optimal. Resultatet: den beste 8B-modellen noensinne. Over-trening på data kompenserer for færre parametere.

## Vanlige spørsmål

### Vil AI fortsette å forbedres?
Sannsynligvis ja, men kanskje ikke bare via skalering. Nye paradigmer (reasoning, agenter, syntetisk data) kan gi større forbedringer per dollar enn ren skalering.

### Hva er «peak data»?
Ideen om at vi nærmer oss grensen for tilgjengelig kvalitets-treningsdata. Internett har ~10–15 billioner tokens kvalitetstekst. Løsninger: syntetisk data, multimodal data, privat data.

### Hva betyr Chinchilla-optimal?
At du trener med like mye data (i tokens) som parametere – ~20 tokens per parameter. Llama 3 og DeepSeek viste at enda mer data per parameter kan gi enda bedre resultater.

### Er scaling laws en «lov» som tyngdekraften?
Nei – det er empiriske observasjoner. De kan brytes av nye arkitekturer, bedre data, eller ukjente barrierer. Men de har holdt i 5+ år.

## Relaterte begreper

- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – den ene skaleringsakse
- [Treningsdata](/ai/hva-er-treningsdata) – den andre aksen
- [GPU og TPU](/ai/hva-er-gpu-tpu) – compute-aksen
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [Inference](/ai/hva-er-inference) – test-time compute er ny skaleringsakse

## Se også

- [Hva er parametere og vekter?](/ai/hva-er-parametere-og-vekter)
- [Hva er treningsdata?](/ai/hva-er-treningsdata)

## Oppsummering

Scaling laws viser at AI forbedres forutsigbart med mer data, parametere og compute. Chinchilla viste at data er like viktig som modellstørrelse. AI-selskaper investerer milliarder fordi de VET at skalering fungerer. Test-time compute (reasoning) er den nye fjerde aksen. Spørsmålet er om scaling laws vil holde – eller om nye paradigmer tar over.
