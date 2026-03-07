---
title: "Hva er inference i AI?"
slug: "hva-er-inference"
category: "ai"
subcategory: "maskinlaering"
description: "Inference er når en trent AI-modell brukes til å generere svar, bilder eller prediksjoner. Lær hva inference er, forskjellen fra trening, og hvorfor det er flaskehalsen."
keywords: ["inference", "AI-inferens", "modellkjøring", "latency", "GPU inference"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Inference"
aliases: ["AI-inferens", "modellkjøring", "prediksjon"]
related: ["hva-er-treningsdata", "hva-er-parametere-og-vekter", "hva-er-kunstig-intelligens", "hva-er-tokens-i-ai", "hva-er-maskinlaering"]
seeAlso: ["hva-er-treningsdata", "hva-er-parametere-og-vekter"]
tags: ["inference", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er inference i AI?

Inference (inferens) er øyeblikket en trent AI-modell bruker det den har lært til å generere et svar, lage et bilde, eller gjøre en prediksjon – det er «bruksfasen» etter trening.

> **Kort forklart**
> AI har to faser: trening (lær alt om verden fra billioner av tokens – tar uker/måneder, koster millioner) og inference (bruk det du lærte til å svare – tar sekunder, koster brøkdeler). Når du spør ChatGPT et spørsmål, kjøres inference – modellen bruker sine lærte parametere til å generere svaret token for token. Trening skjer én gang. Inference skjer millioner av ganger daglig. Inference-kostnaden er det som avgjør om AI er økonomisk gjennomførbart i skala.

## Hva betyr begrepet

Trening vs. inference er den fundamentale delingen i AI. Trening betyr å lære – modellen justerer milliarder av parametere basert på treningsdata. Det er dyrt (millioner av dollar), tar lang tid (uker–måneder) og krever enorm regnekraft (tusenvis av GPUer). Inference betyr å bruke – modellen tar en input og genererer output basert på det den lærte. Det er billigere (brøkdeler av øre per forespørsel), tar kort tid (millisekunder–sekunder) og kan kjøres på mindre maskinvare.

Inference-metrikker som er viktige er latency (tid fra input til output – kritisk for brukeropplevelse), throughput (antall forespørsler per sekund), tokens per sekund (hvor raskt modellen genererer tekst), og kostnad per token (det som bestemmer prising av AI-API-er).

Inference-optimalisering er et enormt felt. Kvantisering reduserer tallpresisjon (FP32→INT8) for raskere kjøring med lite kvalitetstap. Batching grupperer flere forespørsler for effektiv GPU-utnyttelse. KV-caching gjenbruker beregninger mellom tokens. Speculative decoding bruker en liten modell til å foreslå tokens som den store modellen verifiserer. Og spesialisert maskinvare (Groq LPU, Google TPU, Apple Neural Engine) er bygget for rask inference.

## Hvordan fungerer det

Inference genererer output token for token.

```
Trening (én gang):
Milliarder datapunkter → Juster milliarder parametere → Uker på tusenvis av GPUer → Modell klar

Inference (hver gang du spør):
"Hva er hovedstaden i Norge?" → Modellen prosesserer input → Genererer token for token: "Hoved" → "staden" → "i" → "Norge" → "er" → "Oslo" → "." → Ferdig

Tid: ~0,5 sekunder
Kostnad: ~$0,001
```

## Hvorfor er det viktig

Inference-kostnaden avgjør AI-ens økonomi. Trening er en engangskostnad – inference er den løpende kostnaden som skalerer med antall brukere. ChatGPT med 200+ millioner brukere kjører milliarder av inference-operasjoner daglig – Microsofts Azure-regning er enorm.

Inference-effektivitet er grunnen til at DeepSeeks MoE-modeller (som kun aktiverer en del av parameterne per inference) er så viktige – dramatisk lavere kostnad per svar. Groqs LPU (Language Processing Unit) leverer 800+ tokens per sekund – 10× raskere enn GPU-inference.

Edge inference (kjøre modellen på din telefon/laptop i stedet for i skyen) er neste store trend – Apples Neural Engine, Qualcomm NPU og lokale modeller (Llama via Ollama) muliggjør AI uten internett og uten å sende data.

## Eksempler

ChatGPT: Du sender et spørsmål → OpenAIs servere kjører inference på GPT-4 → Svaret genereres token for token → Du mottar det som streaming tekst.

On-device: Du bruker Siri med Apple Intelligence – inference kjøres lokalt på iPhone-ens Neural Engine. Ingen data forlater telefonen.

Groq: Du sender samme spørsmål til Groq API – svaret kommer 10× raskere enn fra OpenAI fordi Groqs spesialiserte chip er optimalisert for inference.

## Vanlige spørsmål

### Hva koster inference?
GPT-4 Turbo: ~$10 per million input-tokens, ~$30 per million output-tokens. DeepSeek: ~$0,27/$1,10. Lokalt (Ollama): gratis men krever maskinvare.

### Kan jeg kjøre inference lokalt?
Ja – med Ollama, llama.cpp eller vLLM kan du kjøre Llama 8B på en laptop. Større modeller krever GPU. Lokalt = gratis + privat.

### Hva er tokens per sekund?
Hastigheten modellen genererer tekst. GPT-4: ~50–80 tok/s. Groq: ~800 tok/s. Lokal Llama 8B: ~30–50 tok/s. Raskere = bedre brukeropplevelse.

### Hvorfor er inference dyrere enn å søke på Google?
Fordi hver forespørsel krever beregning gjennom milliarder av parametere – mye mer regnekraft enn et databaseoppslag. Det er AI-ens fundamentale kostnadsutfordring.

## Relaterte begreper

- [Treningsdata](/ai/hva-er-treningsdata) – det som muliggjør inference
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – det modellen bruker under inference
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [Tokens i AI](/ai/hva-er-tokens-i-ai) – det inference genererer
- [Maskinlæring](/ai/hva-er-maskinlaering) – prosessen som skaper inference-klare modeller

## Se også

- [Hva er treningsdata?](/ai/hva-er-treningsdata)
- [Hva er parametere og vekter?](/ai/hva-er-parametere-og-vekter)

## Oppsummering

Inference er når en trent AI-modell genererer svar – «bruksfasen» etter trening. Trening skjer én gang, inference skjer millioner av ganger daglig. Inference-kostnad avgjør AI-ens økonomi. Optimalisering (kvantisering, MoE, spesialisert hardware) reduserer kostnad. Edge inference (lokal kjøring) er neste trend. Raskere og billigere inference = AI tilgjengelig for alle.
