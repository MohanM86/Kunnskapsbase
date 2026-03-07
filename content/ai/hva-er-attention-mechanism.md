---
title: "Hva er attention mechanism?"
slug: "hva-er-attention-mechanism"
category: "ai"
subcategory: "maskinlaering"
description: "Attention mechanism lar AI fokusere på de viktigste delene av input – det er det som gjør transformers og ChatGPT mulig. Lær hva det er og hvorfor 'Attention Is All You Need'."
keywords: ["attention mechanism", "self-attention", "transformers", "Attention Is All You Need", "query key value"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Attention mechanism"
aliases: ["oppmerksomhetsmekanisme", "self-attention"]
related: ["hva-er-transformer-arkitekturen", "hva-er-nevrale-nettverk", "hva-er-parametere-og-vekter", "hva-er-kunstig-intelligens", "hva-er-gpt"]
seeAlso: ["hva-er-transformer-arkitekturen", "hva-er-nevrale-nettverk"]
tags: ["attention", "ai", "maskinlaering", "arkitektur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er attention mechanism?

Attention mechanism er den matematiske mekanismen som lar AI-modeller fokusere på de mest relevante delene av input – det er kjernen i transformer-arkitekturen og dermed grunnlaget for ChatGPT, Claude, Gemini og alle moderne språkmodeller.

> **Kort forklart**
> Når du leser setningen «Katten satt på matten fordi DEN var myk», forstår du at «den» refererer til «matten», ikke «katten». Du «fokuserer» ubevisst på de relevante ordene. Attention gjør det samme for AI – den beregner hvilke deler av inputen som er viktigst for å forstå hvert ord. Googles paper «Attention Is All You Need» (2017) introduserte denne mekanismen og startet transformer-revolusjonen – alt fra ChatGPT til DALL-E bygger på den.

## Hva betyr begrepet

Attention lar modellen vekte ulike deler av input ulikt. I stedet for å behandle alle ord likt, beregner attention en «relevans-score» mellom hvert ord-par. Self-attention (brukt i transformers) betyr at hvert ord i setningen kan «se på» alle andre ord og bestemme hvilke som er viktigst for å forstå sin egen mening.

Mekanismen bruker tre vektorer per token. Query (Q) er «hva leter jeg etter?». Key (K) er «hva inneholder jeg?». Value (V) er «hva er min informasjon?». Attention-scoren beregnes som Q × K (relevans mellom tokens) → softmax (normaliser til sannsynligheter) → × V (vektet sum av verdier).

Multi-Head Attention kjører attention parallelt med ulike lærte vektinger – hvert «hode» fanger ulike relasjoner. Hode 1 kan fange subjekt-verb-relasjoner, hode 2 kan fange adjektiv-substantiv, hode 3 kan fange referanser (den→matten). GPT-4 bruker mange titalls attention-hoder per lag.

## Hvordan fungerer det

Attention beregner relasjoner mellom alle tokens i input.

```
Input: "Katten satt på matten fordi den var myk"

Self-attention for "den":
  Katten: 0,15 (noe relevant – et subjekt)
  satt:   0,02 (lite relevant)
  på:     0,01 (irrelevant)
  matten: 0,65 (HØYST relevant – "den" refererer hit)
  fordi:  0,02 (irrelevant)
  den:    0,05 (selv)
  var:    0,03 (lite relevant)
  myk:    0,07 (noe relevant – beskriver "den"/matten)

→ Modellen forstår: "den" = "matten" (høyest attention-score)
```

## Hvorfor er det viktig

Attention løste et fundamentalt problem i AI: hvordan behandle lange sekvenser. Tidligere arkitekturer (RNN, LSTM) prosesserte ord sekvensielt – de «glemte» begynnelsen når de nådde slutten av lange tekster. Attention lar hvert ord «se» alle andre ord direkte – uavhengig av avstand.

«Attention Is All You Need» (Vaswani et al., Google, 2017) er det mest innflytelsesrike AI-paperet i historien. Det foreslo at attention alene (uten RNN/CNN) er nok for sekvensmodellering – transformer-arkitekturen. Alt som fulgte – BERT, GPT, LLaMA, DALL-E – bygger direkte på dette.

Begrensningen er at standard attention skalerer kvadratisk med sekvenslengde (N² beregninger) – 10× lengre tekst = 100× mer beregning. Flash Attention, ring attention og andre optimaliseringer adresserer dette.

## Eksempler

Oversettelse: «The cat sat on the mat» → Norsk. Attention kobler «the cat» til «katten», «sat on» til «satt på» – direkte ordkobling mellom språk.

Kode: Copilot genererer en funksjon. Attention kobler variabelnavn, funksjonsdefinisjoner og kommentarer gjennom hele filen for å forstå konteksten.

Bilde: Vision Transformer (ViT) bruker attention mellom bildepatches – «denne patchen (øye) er relevant for denne patchen (ansikt)».

## Vanlige spørsmål

### Trenger jeg å forstå attention for å bruke AI?
Nei – men å forstå prinsippet hjelper deg forstå hvorfor LLM-er er gode på noen oppgaver (kontekstuell forståelse) og dårlige på andre (veldig lange tekster).

### Hva er «kontekstvindu»?
Antall tokens modellen kan ha attention over samtidig. GPT-4 Turbo: 128K tokens. Claude: 200K tokens. Lenger kontekstvindu = kan prosessere lengre dokumenter.

### Hva er Flash Attention?
En optimalisering som gjør attention raskere og mer minneeffektiv uten å endre resultatet. Utviklet av Tri Dao (Stanford) – nå standard i de fleste LLM-er.

## Relaterte begreper

- [Transformer-arkitekturen](/ai/hva-er-transformer-arkitekturen) – bygget på attention
- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – den bredere kategorien
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – attention-matriser er parametere
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [GPT](/ai/hva-er-gpt) – bygget på attention

## Se også

- [Hva er transformer-arkitekturen?](/ai/hva-er-transformer-arkitekturen)
- [Hva er nevrale nettverk?](/ai/hva-er-nevrale-nettverk)

## Oppsummering

Attention mechanism lar AI fokusere på de viktigste delene av input – kjernen i transformer-arkitekturen. «Attention Is All You Need» (2017) er det mest innflytelsesrike AI-paperet. Self-attention beregner relasjoner mellom alle tokens via Query-Key-Value. Det er grunnlaget for ChatGPT, Claude, Gemini og all moderne AI. Begrensningen er kvadratisk skalering – Flash Attention og lignende løser dette.
