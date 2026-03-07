---
title: "Hva er Whisper?"
slug: "hva-er-whisper"
category: "ai"
subcategory: "maskinlaering"
description: "Whisper er OpenAIs åpne tale-til-tekst-modell som transkriberer og oversetter tale med nær-menneskelig nøyaktighet. Lær hva Whisper er og hvordan du bruker det."
keywords: ["Whisper", "tale-til-tekst", "transkribering", "OpenAI", "speech-to-text"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Whisper"
aliases: ["OpenAI Whisper", "Whisper AI"]
related: ["hva-er-ai-stemme-og-tale", "hva-er-kunstig-intelligens", "hva-er-chatgpt", "hva-er-transformer-arkitekturen", "hva-er-aapen-kildekode-ai"]
seeAlso: ["hva-er-ai-stemme-og-tale", "hva-er-chatgpt"]
tags: ["Whisper", "ai", "tale", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er Whisper?

Whisper er OpenAIs åpne kildekode-modell for tale-til-tekst (speech-to-text) som transkriberer tale med nær-menneskelig nøyaktighet på 100+ språk – inkludert norsk – og kan oversette fra ethvert språk til engelsk.

> **Kort forklart**
> Du har et møteopptak, en podcast eller et intervju på norsk. Whisper transkriberer det til tekst – automatisk, nøyaktig, og gratis. Den forstår aksenter, bakgrunnsstøy og fagterminologi bedre enn noen tidligere talegjenkjenning. Whisper er åpen kildekode – du kan kjøre den lokalt (ingen data sendes til sky), via OpenAIs API, eller gjennom titalls apper som bygger på den. Den støtter 100+ språk inkludert norsk, svensk og dansk.

## Hva betyr begrepet

Whisper ble lansert i september 2022 som åpen kildekode. Den er en transformer-basert encoder-decoder-modell trent på 680 000 timer med flerspråklig tale fra internett. Modellen håndterer transkribering (tale → tekst på samme språk), oversettelse (tale på ethvert språk → engelsk tekst), språkdeteksjon (identifiserer automatisk hvilket språk det snakkes), og tidsstempling (markerer når hvert ord/setning sies).

Whisper finnes i flere størrelser: tiny (39M parametere, raskest, lavest kvalitet), base (74M), small (244M), medium (769M), og large-v3 (1,5B parametere, best kvalitet, trenger GPU).

For norsk gir Whisper large-v3 utmerket kvalitet – den forstår bokmål og mange dialekter. Nynorsk og sterke dialekter kan gi noe lavere nøyaktighet.

## Hvordan fungerer det

Whisper konverterer tale til tekst via en transformer-modell.

```
Lydfil (møte, podcast, intervju)
↓
Whisper prosesserer: 
  Konverterer lyd → mel-spektrogram (visuell representasjon av lyd)
  Encoder: analyserer lyden
  Decoder: genererer tekst token for token
↓
Output: Transkribret tekst med tidsstempler

Eksempel:
  [00:00] "Velkommen til møtet. Vi skal diskutere budsjettet for neste kvartal."
  [00:05] "Først vil jeg gå gjennom salgsresultatene..."
```

Du kan kjøre Whisper lokalt med `pip install openai-whisper` og `whisper audio.mp3 --language Norwegian`, via OpenAI API ($0,006 per minutt), eller gjennom apper som MacWhisper, Buzz eller otter.ai.

## Hvorfor er det viktig

Whisper demokratiserte tale-til-tekst. Før Whisper var god transkribering dyr (profesjonelle tjenester) eller dårlig (Siri, Google). Whisper gir profesjonell kvalitet, gratis, i åpen kildekode, på 100+ språk.

Bruksområder er møtetranskribering (aldri skriv møtenotater manuelt igjen), podcastteksting (tilgjengelighet + SEO), intervjutranskribering (journalister, forskere), undertekster (video-tilgjengelighet), og tale-til-tekst i apper (bygge egne produkter).

## Eksempler

Møtenotat: Du tar opp et 60-minutters møte. Whisper transkriberer det på 5 minutter. Du sender transkripsjonen til Claude: «oppsummer hovedpunktene og aksjonspunktene.»

Podcast SEO: Du transkriberer alle podcast-episodene med Whisper og publiserer teksten – søkemotorer kan nå indeksere innholdet.

Lokal privat: Du kjører Whisper lokalt på konfidensielle samtaler – ingen data forlater maskinen.

## Vanlige spørsmål

### Er Whisper gratis?
Åpen kildekode-versjonen: ja, helt gratis. OpenAI API: $0,006 per minutt (~3,60 kr per time). Apper som bygger på Whisper: varierer.

### Hvor god er Whisper på norsk?
Large-v3 er utmerket på bokmål og de fleste dialekter. Sterk dialekt og nynorsk kan gi noe lavere nøyaktighet. Betydelig bedre enn Google/Apple talegjenkjenning.

### Kan jeg kjøre Whisper lokalt?
Ja – tiny/base/small kjører på laptop uten GPU. Medium/large trenger GPU eller Apple Silicon M-chip for rimelig hastighet.

### Hva er forskjellen på Whisper og Siri/Google?
Whisper er mye mer nøyaktig, støtter 100+ språk, er åpen kildekode, og kan kjøres lokalt. Siri/Google er sanntids (raskere for diktering) men mindre nøyaktige.

## Relaterte begreper

- [AI-stemme og tale](/ai/hva-er-ai-stemme-og-tale) – den bredere kategorien
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [ChatGPT](/ai/hva-er-chatgpt) – bruker Whisper for taleinnput
- [Transformer-arkitekturen](/ai/hva-er-transformer-arkitekturen) – Whispers arkitektur
- [Åpen kildekode AI](/ai/hva-er-aapen-kildekode-ai) – Whisper er åpen

## Se også

- [Hva er AI-stemme og tale?](/ai/hva-er-ai-stemme-og-tale)
- [Hva er ChatGPT?](/ai/hva-er-chatgpt)

## Oppsummering

Whisper er OpenAIs åpne tale-til-tekst-modell – transkriberer 100+ språk (inkludert norsk) med nær-menneskelig nøyaktighet. Åpen kildekode, kan kjøres lokalt. Revolusjonerte transkribering for møter, podcaster og intervjuer. Gratis lokalt, $0,006/min via API. Large-v3 gir best kvalitet. Det er standarden for AI-drevet talegjenkjenning.
