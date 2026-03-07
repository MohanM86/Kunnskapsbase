---
title: "Hva er context window?"
slug: "hva-er-context-window"
category: "ai"
subcategory: "spraakmodeller"
description: "Context window er hvor mye tekst en AI-modell kan 'huske' i en samtale. Lær hva det er, hvorfor det er viktig, og forskjellene mellom GPT-4, Claude og Gemini."
keywords: ["context window", "kontekstvindu", "token limit", "128K", "1M tokens"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Context window"
aliases: ["kontekstvindu", "kontekstlengde", "token limit"]
related: ["hva-er-tokens-i-ai", "hva-er-chatgpt", "hva-er-claude", "hva-er-attention-mechanism", "hva-er-rag"]
seeAlso: ["hva-er-tokens-i-ai", "hva-er-rag"]
tags: ["context window", "ai", "spraakmodeller"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er context window?

Context window (kontekstvindu) er den maksimale mengden tekst en AI-modell kan prosessere i én forespørsel – alt den kan «se» og «huske» i en samtale, målt i tokens.

> **Kort forklart**
> Tenk på context window som AI-ens arbeidsminne. GPT-4 Turbo har 128 000 tokens (~300 sider tekst). Claude har 200 000 tokens (~500 sider). Gemini 1.5 Pro har 1 million tokens (~2 500 sider). Alt innenfor vinduet huskes. Alt utenfor er glemt. Hvis du limer inn en hel bok og stiller spørsmål om side 3, kan modellen svare – fordi hele boken er i context window. Men modeller med for langt vindu kan miste fokus midt i («lost in the middle»-problemet).

## Hva betyr begrepet

Context window inkluderer ALT modellen prosesserer: din systemprompt, hele samtalehistorikken (alle dine meldinger + alle AI-svar), dokumenter du har limt inn, og det neste svaret modellen genererer. Når vinduet er fullt, kan modellen ikke ta inn mer – eldre meldinger «faller ut» av konteksten.

Modellers context window har vokst eksplosivt. GPT-3 (2020) hadde 4K tokens (~6 sider). GPT-4 (2023) har 8K/32K tokens. GPT-4 Turbo (2023) har 128K tokens (~300 sider). Claude 3.5 (2024) har 200K tokens (~500 sider). Gemini 1.5 Pro (2024) har 1M tokens (~2 500 sider). Gemini 2.0 (2025) har 2M tokens (~5 000 sider).

Et token er ~0,75 ord på engelsk, ~0,5 ord på norsk (norsk bruker flere tokens per ord). 128K tokens ≈ 96 000 engelske ord ≈ 300 sider.

## Hvordan fungerer det

Context window er AI-ens totale «syn» under en samtale.

```
Context window: 128K tokens

Brukt:
  Systemprompt: 500 tokens
  Din melding 1: 200 tokens
  AI-svar 1: 800 tokens
  Din melding 2 + dokument: 50 000 tokens
  = 51 500 tokens brukt

Tilgjengelig for neste svar: 76 500 tokens

Grense nådd? Eldre samtalehistorikk komprimeres eller fjernes
```

«Lost in the middle»-problemet: modeller er best på å huske starten og slutten av context window, men kan miste informasjon midt i. Et dokument på 100 000 tokens prosesseres – men detaljer på side 150 kan overses. Nyere modeller (Claude, Gemini) er bedre på dette.

## Hvorfor er det viktig

Context window avgjør hva du kan gjøre med AI. Stort vindu muliggjør å analysere hele bøker, rapporter og kodebaser i én forespørsel, lange samtaler uten at modellen «glemmer», og multi-dokument-sammenligning. For lite vindu betyr at du må dele opp oppgaver, miste kontekst underveis, og bruke RAG i stedet for direkte input.

For utviklere: context window × tokenpris = kostnad. 200K tokens kontekst er kraftig men dyrt.

## Eksempler

Bokanalyse: Du limer inn en hel roman (80 000 tokens) i Claude og spør «oppsummer alle referanser til havet.» Hele boken er i konteksten – modellen finner alt.

Kodebase: Du gir GPT-4 Turbo en hel kodebase (50 filer, 100K tokens) og ber den finne en bug. Den kan se alle filer samtidig og finne sammenhenger.

Samtale: Etter 50 meldinger i en ChatGPT-samtale begynner modellen å «glemme» tidlige meldinger – de faller ut av context window.

## Vanlige spørsmål

### Betyr større context window alltid bedre?
Ikke nødvendigvis – «lost in the middle»-problemet betyr at kvaliteten kan synke i midten av veldig lange kontekster. Og det er dyrere.

### Hva er RAG som alternativ?
RAG (Retrieval-Augmented Generation) henter bare relevant informasjon inn i konteksten i stedet for å putte alt inn. Billigere og fokusert – men mister helhetsoversikt.

### Hvorfor koster lang kontekst mer?
Attention-mekanismen skalerer kvadratisk – dobbelt kontekst = 4× beregning. Flash Attention og andre optimaliseringer reduserer dette.

### Hva er forskjellen på context window og hukommelse?
Context window er korttidsminne (én samtale). Hukommelse (memory) er langtidsminne mellom samtaler. De fleste modeller har kun context window.

## Relaterte begreper

- [Tokens i AI](/ai/hva-er-tokens-i-ai) – enheten context window måles i
- [ChatGPT](/ai/hva-er-chatgpt) – 128K tokens
- [Claude](/ai/hva-er-claude) – 200K tokens
- [Attention mechanism](/ai/hva-er-attention-mechanism) – det som prosesserer konteksten
- [RAG](/ai/hva-er-rag) – alternativ til stor kontekst

## Se også

- [Hva er tokens i AI?](/ai/hva-er-tokens-i-ai)
- [Hva er RAG?](/ai/hva-er-rag)

## Oppsummering

Context window er AI-ens arbeidsminne – alt den kan se i én samtale. Claude: 200K tokens, Gemini: 1–2M tokens, GPT-4: 128K. Større vindu = kan prosessere bøker og kodebaser. Begrensninger: «lost in the middle» og høyere kostnad. RAG er et billigere alternativ for å hente spesifikk info. Context window-størrelsen avgjør hva slags oppgaver AI kan håndtere.
