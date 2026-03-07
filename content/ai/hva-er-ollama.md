---
title: "Hva er Ollama?"
slug: "hva-er-ollama"
category: "ai"
subcategory: "maskinlaering"
description: "Ollama lar deg kjøre AI-modeller lokalt på din maskin med én kommando – gratis, privat, uten internett. Lær hva Ollama er og hvordan du kommer i gang."
keywords: ["Ollama", "lokal AI", "kjør AI lokalt", "Llama lokalt", "privat AI"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Ollama"
aliases: ["ollama.ai", "lokal LLM"]
related: ["hva-er-meta-ai-llama", "hva-er-edge-ai", "hva-er-inference", "hva-er-small-language-models", "hva-er-aapen-kildekode-ai"]
seeAlso: ["hva-er-meta-ai-llama", "hva-er-edge-ai"]
tags: ["Ollama", "ai", "maskinlaering", "verktøy"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er Ollama?

Ollama er et verktøy som lar deg laste ned og kjøre AI-modeller lokalt på din maskin med én enkelt kommando – helt gratis, helt privat, uten å sende data til noen sky.

> **Kort forklart**
> Installer Ollama, åpne terminalen, skriv «ollama run llama3.1» – og du har en ChatGPT-lignende AI som kjører 100 prosent lokalt. Ingen API-nøkkel, ingen abonnement, ingen data som sendes til OpenAI eller noen andre. Det fungerer på Mac, Windows og Linux. Du kan kjøre Llama, Mistral, DeepSeek, Phi, Gemma og hundrevis av andre åpne modeller. For personvern, offline-bruk og eksperimentering er Ollama det enkleste startpunktet.

## Hva betyr begrepet

Ollama (navnet er en lek med «llama» – Metas modellserie) gjør lokal AI enkel. Uten Ollama krever lokal AI manuell nedlasting av modellvekter, konfigurering av inferensmotorer (llama.cpp, vLLM), og teknisk oppsett av API-er og grensesnitt. Med Ollama er alt pakket i én kommando.

Ollama håndterer modellnedlasting (laster ned kvantiserte modeller automatisk), inferens (kjører modellen optimalisert for din maskinvare), API (lokal API på port 11434 – kompatibel med OpenAI-format), og modellbibliotek (hundrevis av modeller tilgjengelig via ollama.com/library).

Populære modeller å kjøre med Ollama er llama3.1 (Metas flaggskip – 8B kjører på de fleste maskiner), mistral (Europas beste – rask og effektiv), deepseek-r1 (reasoning-modell med synlig tenkning), phi3 (Microsofts kompakte modell – kjører på alt), gemma2 (Googles åpne modell), og codellama (spesialisert for koding).

## Hvordan fungerer det

Tre steg fra null til lokal AI.

```
Steg 1: Installer
  Mac: brew install ollama
  Windows/Linux: last ned fra ollama.com

Steg 2: Kjør en modell
  ollama run llama3.1
  → Modellen lastes ned (~5 GB for 8B) → Klar

Steg 3: Chat
  >>> Hva er hovedstaden i Norge?
  Hovedstaden i Norge er Oslo.
  
  >>> Skriv et Python-script som sorterer en liste
  [genererer komplett kode]

Alt skjer lokalt – ingen data forlater maskinen din.
```

For utviklere eksponerer Ollama en lokal API som er kompatibel med OpenAI-formatet – du kan bytte ut OpenAI API med Ollama i eksisterende kode ved å endre base URL.

Maskinvarekrav: Llama 8B krever ~5 GB RAM (kjører på de fleste moderne maskiner). Llama 70B krever ~40 GB RAM (kraftig maskin eller GPU). Mistral 7B og Phi-3 krever ~4 GB (kjører på nesten alt).

## Hvorfor er det viktig

Ollama demokratiserer AI – du trenger verken API-nøkkel, abonnement eller teknisk ekspertise. Det er spesielt viktig for personvern (sensitive data forlater aldri maskinen), kostnadsbesparelse (gratis vs $20/mnd for ChatGPT Plus), offline-bruk (fungerer uten internett), utvikling (test og prototyp med lokal AI), og eksperimentering (prøv hundrevis av modeller).

## Eksempler

Privat assistent: Du kjører Llama 3.1 via Ollama og bruker den til å analysere sensitive forretningsdokumenter – ingen data sendes til sky.

Koding offline: Du sitter på flyet uten internett. Ollama + CodeLlama gir deg en AI-kodingsassistent som fungerer helt offline.

Open WebUI: Du installerer Open WebUI (et ChatGPT-lignende grensesnitt) som kobler til Ollama – vakker lokal AI-chatbot i nettleseren.

## Vanlige spørsmål

### Er Ollama gratis?
Ja – helt gratis. Åpen kildekode. Ingen abonnement, ingen API-kostnad, ingen begrensninger.

### Trenger jeg en kraftig maskin?
For små modeller (Phi-3, Mistral 7B): nei – de fleste moderne laptoper duger. For store modeller (Llama 70B): ja – 40+ GB RAM eller NVIDIA GPU.

### Er lokale modeller like gode som ChatGPT?
Llama 8B ≈ GPT-3.5 kvalitet. Llama 70B ≈ nær GPT-4 på mange oppgaver. For daglige oppgaver er lokale modeller mer enn gode nok.

### Kan jeg bruke Ollama i apper?
Ja – Ollama eksponerer en lokal API. Mange apper (Open WebUI, Continue, Enchanted) kobler direkte til Ollama.

## Relaterte begreper

- [Meta AI og Llama](/ai/hva-er-meta-ai-llama) – modellene du kjører i Ollama
- [Edge AI](/ai/hva-er-edge-ai) – Ollama er edge AI i praksis
- [Inference](/ai/hva-er-inference) – det Ollama utfører lokalt
- [Small Language Models](/ai/hva-er-small-language-models) – perfekte for Ollama
- [Åpen kildekode AI](/ai/hva-er-aapen-kildekode-ai) – økosystemet

## Se også

- [Hva er Meta AI og Llama?](/ai/hva-er-meta-ai-llama)
- [Hva er Edge AI?](/ai/hva-er-edge-ai)

## Oppsummering

Ollama lar deg kjøre AI lokalt med én kommando – gratis, privat, offline. Installer, skriv «ollama run llama3.1», og chat. Ingen API, ingen abonnement, ingen data sendt ut. Perfekt for personvern, eksperimentering og utvikling. Støtter Llama, Mistral, DeepSeek, Phi og hundrevis av modeller. Det er den enkleste veien til lokal AI.
