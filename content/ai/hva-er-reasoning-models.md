---
title: "Hva er reasoning models?"
slug: "hva-er-reasoning-models"
category: "ai"
subcategory: "spraakmodeller"
description: "Reasoning models er AI som tenker steg-for-steg før den svarer – o1, R1, Claude med extended thinking. Lær hva det er, chain-of-thought, og hvorfor det er AI-ens neste evolusjon."
keywords: ["reasoning models", "o1", "R1", "chain-of-thought", "tenkemodeller"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Reasoning models"
aliases: ["tenkemodeller", "resonnerende AI", "chain-of-thought models"]
related: ["hva-er-chatgpt", "hva-er-deepseek", "hva-er-claude", "hva-er-kunstig-intelligens", "hva-er-inference"]
seeAlso: ["hva-er-chatgpt", "hva-er-deepseek"]
tags: ["reasoning", "ai", "spraakmodeller", "trend"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er reasoning models?

Reasoning models er AI-modeller som «tenker» steg-for-steg internt før de gir et svar – i stedet for å generere output umiddelbart. De bruker mer beregning (compute) per svar for å oppnå bedre nøyaktighet på komplekse oppgaver.

> **Kort forklart**
> Vanlige LLM-er svarer umiddelbart – som å svare på et mattespørsmål instinktivt. Reasoning models tenker først – som å skrive ned mellomregningen før svaret. OpenAIs o1 og o3, DeepSeeks R1, og Claudes extended thinking bruker alle denne tilnærmingen. Resultatet: dramatisk bedre ytelse på matematikk, koding, vitenskap og logikk. o3 scorer nær menneskelig ekspert-nivå på vitenskapsbenchmarks. R1 er åpen kildekode. Det er AI-ens neste evolusjon: bruke mer tid på å tenke = bedre svar.

## Hva betyr begrepet

Chain-of-thought (CoT) er kjerneteknikken: modellen genererer en intern «tankeprosess» steg-for-steg før den gir det endelige svaret. Denne tankeprosessen kan være synlig (DeepSeek R1 viser tenkningen i thinking-tags) eller skjult (OpenAIs o1 viser bare svaret, ikke tenkningen).

De viktigste reasoning-modellene er OpenAI o1 (september 2024 – den første store reasoning-modellen, dramatisk bedre på matte/koding), OpenAI o3 (desember 2024 – neste generasjon, nær menneskelig ekspert på ARC-AGI), DeepSeek R1 (januar 2025 – åpen kildekode reasoning, matcher o1), Claude med extended thinking (Anthropic – Claude tenker lengre for bedre svar), og Gemini 2.0 Flash Thinking (Google – raskere reasoning).

Nøkkelkonseptet er «test-time compute scaling» – i stedet for bare å gjøre modellen større (trenings-compute), bruker du mer beregning per svar (inference-compute). Vanskeligere spørsmål = modellen tenker lenger = bruker flere tokens internt.

## Hvordan fungerer det

Reasoning models tenker steg-for-steg internt.

```
Vanlig LLM:
Spørsmål: "Hvis 3x + 7 = 22, hva er x?"
Svar: "x = 5" (umiddelbart, kan feile på komplekse problemer)

Reasoning model:
Spørsmål: "Hvis 3x + 7 = 22, hva er x?"
<thinking>
La meg løse dette steg for steg.
3x + 7 = 22
Trekk fra 7 på begge sider: 3x = 15
Del på 3: x = 5
La meg verifisere: 3(5) + 7 = 15 + 7 = 22 ✓
</thinking>
Svar: "x = 5"

→ Samme svar her, men for komplekse problemer gir steg-for-steg dramatisk bedre nøyaktighet
```

For enkle spørsmål er reasoning overkill (tregere, dyrere). For komplekse oppgaver – flerstegs matematikk, koding, logikk, vitenskapelig resonnement – er det en game-changer.

## Hvorfor er det viktig

Reasoning models representerer et paradigmeskifte i AI: i stedet for bare å gjøre modeller større, bruker du mer compute på inference. Det åpner en ny skaleringsakse – «tenketid» – som kan forbedre AI-ytelse uten å trene nye modeller.

o3 scorer 87,5 prosent på ARC-AGI (en test designet for å måle generell problemløsning) – opp fra 5 prosent for GPT-4. Det er et stort steg mot mer generell intelligens.

Kostnaden er at reasoning-svar er 3–50× dyrere (mer tokens genereres internt) og tregere (sekunder i stedet for millisekunder). Det er en avveining: raskere/billigere svar vs. mer nøyaktige svar.

## Eksempler

Koding: o1 løser kodingsoppgaver som GPT-4 feiler på – den planlegger arkitekturen, vurderer edge cases, og verifiserer løsningen steg-for-steg.

Matematikk: R1 løser olympiade-nivå matteoppgaver – noe som krever flerstegede logiske resonnementer som vanlige LLM-er sliter med.

Hverdagsbruk: Du ber Claude om å analysere en kompleks forretningsbeslutning. Extended thinking bruker 30 sekunder på å vurdere fordeler, ulemper, risiko og alternativer – og gir et gjennomtenkt svar.

## Vanlige spørsmål

### Er reasoning models bedre enn vanlige LLM-er?
For komplekse oppgaver: ja, dramatisk. For enkle spørsmål: overkill – tregere og dyrere uten merkbar fordel. Bruk reasoning for vanskelige problemer.

### Kan jeg se hva modellen tenker?
DeepSeek R1: ja, thinking-tags er synlige. OpenAI o1: nei, tenkningen er skjult. Claude extended thinking: delvis synlig.

### Er DeepSeek R1 like god som o1?
På mange benchmarks: ja. R1 er dessuten åpen kildekode – du kan kjøre den lokalt og se tankeprosessen.

### Hva er forskjellen på o1 og o3?
o3 er neste generasjon – bedre på de fleste oppgaver, spesielt ARC-AGI (generell problemløsning). o3 kan bruke variabel «tenketid» basert på oppgavens vanskelighetsgrad.

## Relaterte begreper

- [ChatGPT](/ai/hva-er-chatgpt) – o1/o3 er tilgjengelig via ChatGPT
- [DeepSeek](/ai/hva-er-deepseek) – R1 er åpen kildekode reasoning
- [Claude](/ai/hva-er-claude) – extended thinking
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [Inference](/ai/hva-er-inference) – reasoning bruker mer inference-compute

## Se også

- [Hva er ChatGPT?](/ai/hva-er-chatgpt)
- [Hva er DeepSeek?](/ai/hva-er-deepseek)

## Oppsummering

Reasoning models tenker steg-for-steg før de svarer – o1, o3, R1 og Claude extended thinking. De bruker mer compute per svar for dramatisk bedre ytelse på matematikk, koding og logikk. o3 scorer nær menneskelig ekspert-nivå. R1 er åpen kildekode. Det er AI-ens neste evolusjon: «tenketid» som ny skaleringsakse. Dyrere og tregere – men mye mer nøyaktig for vanskelige problemer.
