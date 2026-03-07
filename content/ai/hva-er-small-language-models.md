---
title: "Hva er Small Language Models (SLM)?"
slug: "hva-er-small-language-models"
category: "ai"
subcategory: "spraakmodeller"
description: "Small Language Models er kompakte AI-modeller som kjører på telefoner og laptoper. Lær hva SLM er, Phi, Gemma, og hvorfor større ikke alltid er bedre."
keywords: ["SLM", "Small Language Models", "Phi", "Gemma", "kompakt AI"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Small Language Models"
aliases: ["SLM", "små språkmodeller", "kompakte modeller"]
related: ["hva-er-edge-ai", "hva-er-meta-ai-llama", "hva-er-parametere-og-vekter", "hva-er-inference", "hva-er-kunstig-intelligens"]
seeAlso: ["hva-er-edge-ai", "hva-er-meta-ai-llama"]
tags: ["SLM", "ai", "spraakmodeller", "trend"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er Small Language Models (SLM)?

Small Language Models (SLM) er kompakte AI-modeller med typisk 1–8 milliarder parametere – designet for å kjøre raskt, billig og lokalt på telefoner, laptoper og edge-enheter, i stedet for å kreve dyre sky-GPU-er.

> **Kort forklart**
> GPT-4 har ~1,8 billioner parametere og krever massive servere. Phi-3 Mini har 3,8 milliarder og kjører på din telefon. Overraskende nok presterer Phi-3 nesten like godt som GPT-3.5 på mange oppgaver. Trenden er klar: i stedet for å alltid gjøre modeller større, gjør vi dem smartere OG mindre. Microsofts Phi, Googles Gemma, Metas Llama 3.2 (1B/3B) og Apples on-device modeller er alle SLM-er. De muliggjør AI overalt – uten sky, uten kostnad, uten å dele data.

## Hva betyr begrepet

SLM er typisk modeller med 1–8 milliarder parametere – i motsetning til Large Language Models (LLM) med 70–1 800 milliarder. De oppnår overraskende god ytelse gjennom bedre treningsdata (kvalitet over kvantitet – kuraterte datasett), effektiv arkitektur (MoE, gruppert attention), destillasjon (lære fra en stor modell – «student-teacher»), og kvantisering (redusert presisjon for raskere kjøring).

De viktigste SLM-ene er Microsoft Phi-3/Phi-4 (3,8B – scorer nær GPT-3.5, kjører på telefon), Google Gemma 2 (2B/9B – åpen kildekode, effektiv), Meta Llama 3.2 (1B/3B – designet for edge), Apple on-device models (integrert i Apple Intelligence), Mistral 7B (den opprinnelige «overraskelses-SLM»), og Qwen 2.5 (Alibaba – sterke kinesiske SLM-er).

## Hvordan fungerer det

SLM-er oppnår mer med mindre gjennom smarte teknikker.

```
LLM-tilnærming: 70 milliarder parametere × 15 billioner tokens = massiv modell = sky-GPU
SLM-tilnærming: 3,8 milliarder parametere × 3,3 billioner KURATERTE tokens = kompakt modell = din telefon

Phi-3 Mini (3,8B):
  Treningsdata: nøye kuratert (lærebok-kvalitet, ikke internett-søppel)
  Resultat: scorer 69 % på MMLU (GPT-3.5: 70 %)
  Kjører på: iPhone, Android, laptop uten GPU
  Kostnad: gratis, lokalt
```

## Hvorfor er det viktig

SLM-er demokratiserer AI. GPT-4 krever $20/mnd abonnement og sender data til OpenAI. En SLM kjører gratis på din laptop med full personvern. For 80 prosent av daglige AI-oppgaver (oppsummering, enkel koding, spørsmål-svar, skriving) er en god SLM mer enn nok.

Trenden er «riktig størrelse for oppgaven»: bruk SLM for daglige oppgaver (raskt, billig, privat), bruk LLM for komplekse oppgaver (resonering, lange analyser), og bruk reasoning models for de vanskeligste (matematikk, koding).

## Eksempler

Phi-3 på telefon: Du kjører Phi-3 Mini på din Android-telefon via en lokal app. Spør den om hva som helst – svaret kommer på 1–2 sekunder. Ingen internett. Gratis.

Bedrift: Et norsk selskap vil ha AI-chatbot for kundeservice men kan ikke sende kundadata til OpenAI (GDPR). De kjører Mistral 7B lokalt – full kontroll, ingen datadeling.

Apple Intelligence: Siri på iPhone bruker on-device SLM for de fleste oppgaver. Kun komplekse forespørsler eskaleres til sky-modeller.

## Vanlige spørsmål

### Er SLM like bra som ChatGPT?
For enkle oppgaver: nesten. For komplekse resonnementer og lange analyser: nei – der vinner store modeller. SLM er «god nok» for 80 prosent av brukstilfeller.

### Kan jeg kjøre SLM på min maskin?
Ja – Ollama gjør det med én kommando. Phi-3 og Llama 3.2 3B kjører på de fleste moderne laptoper uten GPU.

### Hva er forskjellen på SLM og finjustert LLM?
SLM er designet for å være liten fra starten. En finjustert LLM er en stor modell spesialisert for et domene. Begge kan være effektive – men SLM er mye billigere å kjøre.

## Relaterte begreper

- [Edge AI](/ai/hva-er-edge-ai) – der SLM-er kjøres
- [Meta AI og Llama](/ai/hva-er-meta-ai-llama) – Llama 3.2 1B/3B er SLM-er
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – SLM = færre parametere
- [Inference](/ai/hva-er-inference) – SLM-er gir billig inference
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet

## Se også

- [Hva er Edge AI?](/ai/hva-er-edge-ai)
- [Hva er Meta AI og Llama?](/ai/hva-er-meta-ai-llama)

## Oppsummering

SLM-er er kompakte AI-modeller (1–8B parametere) som kjører på telefoner og laptoper. Phi-3, Gemma, Llama 3.2 scorer nær GPT-3.5 med en brøkdel av ressursene. De muliggjør AI uten sky, uten kostnad, uten datadeling. For 80 prosent av daglige oppgaver er SLM-er mer enn nok. Trenden er «riktig størrelse for oppgaven» – ikke alltid størst mulig.
