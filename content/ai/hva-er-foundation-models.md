---
title: "Hva er foundation models?"
slug: "hva-er-foundation-models"
category: "ai"
subcategory: "maskinlaering"
description: "Foundation models er massive, generelle AI-modeller trent på enorme datamengder som kan tilpasses til tusenvis av oppgaver. Lær hva det er, hvorfor GPT-4 er en, og paradigmeskiftet."
keywords: ["foundation models", "grunnlagsmodell", "pre-trained model", "GPT", "generell AI"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Foundation models"
aliases: ["grunnlagsmodell", "pre-trained model", "base model"]
related: ["hva-er-kunstig-intelligens", "hva-er-finjustering-av-ai", "hva-er-scaling-laws", "hva-er-treningsdata", "hva-er-transfer-learning"]
seeAlso: ["hva-er-kunstig-intelligens", "hva-er-scaling-laws"]
tags: ["foundation models", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er foundation models?

Foundation models (grunnlagsmodeller) er massive AI-modeller trent på enorme, brede datamengder som kan tilpasses til et bredt spekter av oppgaver gjennom finjustering eller prompting – de er «fundamentet» som tusenvis av AI-produkter bygges på.

> **Kort forklart**
> Før foundation models trengte du en egen modell for hvert problem – én for oversettelse, én for sentimentanalyse, én for koding. GPT-4, Claude, Llama og Gemini er foundation models – de kan ALT: skrive, kode, analysere, oversette, resonnere. Du trener dem én gang (for milliarder av dollar) og tilpasser dem til tusenvis av oppgaver via prompting eller finjustering. Det er et paradigmeskifte – fra spesialiserte modeller til generelle fundamenter. Begrepet ble popularisert av Stanford HAI i 2021.

## Hva betyr begrepet

Stanford HAIs rapport «On the Opportunities and Risks of Foundation Models» (2021) definerte begrepet: en modell trent på brede data i stor skala som kan tilpasses til mange ulike oppgaver.

Egenskaper som definerer foundation models er massive (milliarder til billioner parametere), bredt trent (tekst, kode, bilder – ikke bare ett domene), generelle (kan løse mange ulike oppgaver), tilpasningsbare (finjustering, prompting, RAG for spesialisering), og emergente evner (viser evner de ikke eksplisitt ble trent for – resonering, humor, kreativitet).

De viktigste foundation models er GPT-4 / GPT-4o (OpenAI – tekst, bilde, kode), Claude 3.5 / Opus (Anthropic – tekst, kode, analyse), Gemini 1.5 / 2.0 (Google – multimodal, million-token kontekst), Llama 3.1 (Meta – åpen kildekode), og Stable Diffusion / DALL-E (visuell foundation model for bilder).

Foundation models vs spesialiserte modeller: en foundation model er som en bred universitetsutdanning (kan litt om alt, tilpasses videre). En spesialisert modell er som en fagutdanning (ekspert på én ting). Trenden: foundation models + finjustering/RAG erstatter de fleste spesialiserte modeller.

## Hvordan fungerer det

Foundation models trenes bredt og tilpasses smalt.

```
Fase 1 – Pre-training (foundation):
  Billioner tokens (internett, bøker, kode) → Tren i måneder på tusenvis av GPU-er
  → Generell modell som "forstår" språk, verden, logikk
  → Kostnad: $10M – $100M+

Fase 2 – Tilpasning (tusenvis av produkter):
  Chatbot: + RLHF/finjustering → ChatGPT
  Medisinsk: + medisinsk finjustering → Med-PaLM
  Juridisk: + RAG med lovdata → Harvey AI
  Koding: + kode-finjustering → Copilot
  Norsk: + norsk finjustering → NorGPT
  
  → Én foundation model → Tusenvis av produkter
```

## Hvorfor er det viktig

Foundation models er det viktigste paradigmeskiftet i AI. Før: bygg en ny modell for hvert problem (dyrt, tregt). Nå: tilpass en foundation model (billig, raskt). Det reduserer utviklingstid fra måneder til timer, krever mindre domene-spesifikk treningsdata, gir bedre resultater (foundation models har enormt mye «innebygd kunnskap»), og demokratiserer AI (små bedrifter kan bruke samme foundation som Google).

Risikoen er konsentrasjon – fem selskaper (OpenAI, Google, Anthropic, Meta, Mistral) kontrollerer de viktigste foundation models. Hele AI-økosystemet er avhengig av deres beslutninger, prising og policyer.

## Eksempler

Tusenvis av produkter: GPT-4 er foundation model for ChatGPT, Copilot, Khan Academy AI, Be My Eyes (blindehjelp), Duolingo Max, og tusenvis av andre.

Norsk finjustering: Du tar Llama 3.1 (foundation) og finjusterer på norsk juridisk tekst → spesialisert norsk juridisk AI som er bedre enn GPT-4 på norsk jus.

Multimodal: Gemini er en multimodal foundation model – tekst, bilde, video, lyd i én modell. Tilpasses til Google Search, Workspace, og tredjeparter.

## Vanlige spørsmål

### Er ChatGPT en foundation model?
Nei – GPT-4 er foundation model. ChatGPT er GPT-4 + RLHF + system prompt + plugins – et PRODUKT bygget PÅ foundation modelen.

### Kan jeg bygge min egen foundation model?
Teknisk: ja, med nok data og compute ($10M+). Praktisk: nei for de fleste – bruk eksisterende foundation models og tilpass via finjustering/RAG.

### Er foundation models farlige?
De konsentrerer makt (få selskaper kontrollerer fundamentet). De kan forsterke bias (trent på internett-data). Og de muliggjør misbruk (deepfakes, desinformasjon). Regulering (EU AI Act) adresserer dette.

### Hva er emergens i foundation models?
Evner som oppstår spontant ved skalering – modeller som er store nok viser evner de aldri eksplisitt ble trent for (resonering, humor, analogier). Det er uforklart og fascinerende.

## Relaterte begreper

- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [Finjustering](/ai/hva-er-finjustering-av-ai) – tilpasse foundation model
- [Scaling laws](/ai/hva-er-scaling-laws) – lovene som driver foundation models
- [Treningsdata](/ai/hva-er-treningsdata) – det foundation models trenes på
- [Transfer learning](/ai/hva-er-transfer-learning) – prinsippet bak tilpasning

## Se også

- [Hva er kunstig intelligens?](/ai/hva-er-kunstig-intelligens)
- [Hva er scaling laws?](/ai/hva-er-scaling-laws)

## Oppsummering

Foundation models er massive, generelle AI-modeller (GPT-4, Claude, Llama, Gemini) trent på brede datamengder – tilpasningsbare til tusenvis av oppgaver. Det er et paradigmeskifte fra spesialiserte modeller til generelle fundamenter. Én foundation model → tusenvis av produkter. Risikoen er konsentrasjon hos få selskaper. Emergens (uventede evner) er fascinerende og uforklart. Foundation models er AI-ens byggegrunn.
