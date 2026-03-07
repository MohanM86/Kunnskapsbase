---
title: "Hva er zero-shot og few-shot learning?"
slug: "hva-er-zero-shot-few-shot"
category: "ai"
subcategory: "maskinlaering"
description: "Zero-shot og few-shot learning lar AI løse oppgaver uten eller med svært få eksempler. Lær hva det er, in-context learning, og hvorfor det er LLM-enes superkraft."
keywords: ["zero-shot", "few-shot", "in-context learning", "prompt eksempler", "generalisering"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Zero-shot og few-shot learning"
aliases: ["zero-shot learning", "few-shot learning", "in-context learning"]
related: ["hva-er-prompt-engineering-dybde", "hva-er-kunstig-intelligens", "hva-er-finjustering-av-ai", "hva-er-transfer-learning", "hva-er-maskinlaering"]
seeAlso: ["hva-er-prompt-engineering-dybde", "hva-er-finjustering-av-ai"]
tags: ["zero-shot", "few-shot", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er zero-shot og few-shot learning?

Zero-shot learning er AI-ens evne til å løse en oppgave den aldri har sett eksempler på, og few-shot learning er å lære fra bare noen få eksempler – uten tradisjonell trening.

> **Kort forklart**
> Tradisjonell maskinlæring: tren modellen på 10 000 eksempler av spam-e-post, så gjenkjenner den spam. Zero-shot: «Er denne e-posten spam? Svar ja eller nei.» – GPT-4 svarer korrekt uten ett eneste treningseksempel. Few-shot: «Her er 3 eksempler på spam og 3 på ikke-spam. Klassifiser denne.» – enda bedre nøyaktighet med bare 6 eksempler. Det er LLM-enes superkraft: de forstår oppgaver fra naturlig språk-instruksjoner, uten å trenes spesifikt.

## Hva betyr begrepet

Zero-shot learning betyr at modellen løser en oppgave den aldri har sett eksempler på – kun basert på instruksjonen. Du sier «oversett til fransk» og den oversetter, uten eksplisitt treningsdata for oversettelse (den lærte det implisitt fra pre-training). Few-shot learning (in-context learning) betyr at du gir noen få eksempler i prompten – 2–10 eksempler – og modellen forstår mønsteret og anvender det. One-shot learning er spesialtilfellet med bare ett eksempel.

In-context learning er mekanismen – modellen «lærer» fra eksempler i prompten, uten at parameterne endres. Det er fundamentalt annerledes fra tradisjonell trening: ingen vekter justeres, ingen gradient descent, ingen backpropagation – modellen bruker konteksten direkte.

## Hvordan fungerer det

Tre nivåer av «læring» uten trening.

```
Zero-shot:
  Prompt: "Klassifiser følgende som positiv eller negativ: 'Maten var helt fantastisk'"
  Svar: "Positiv"
  → Ingen eksempler, kun instruksjon

Few-shot (3 eksempler):
  Prompt: "Klassifiser sentiment:
  'Elsker denne restauranten' → Positiv
  'Forferdelig service' → Negativ  
  'Maten var ok men dyrt' → Nøytral
  
  Klassifiser: 'Utmerket beliggenhet men rommene var skitne'"
  Svar: "Blandet/Nøytral"
  → 3 eksempler → Modellen forstår skalaen OG nyansene

Tradisjonell ML:
  Samle 10 000 merkede eksempler → Tren modell → Deploy
  → Uker med arbeid vs. sekunder med prompting
```

## Hvorfor er det viktig

Zero-shot og few-shot er grunnen til at LLM-er er så allsidige. I stedet for å trene en spesialisert modell for hver oppgave (sentimentanalyse, oversettelse, oppsummering, koding), bruker du én generell LLM med ulike instruksjoner. Det reduserer tid fra uker til sekunder, krever ingen treningsdata eller ML-kompetanse, og gjør AI tilgjengelig for ikke-teknikere.

Det er også kjernen i prompt engineering: å finne de rette instruksjonene og eksemplene som gir best resultat – uten å endre modellen.

## Eksempler

Sentimentanalyse: Et selskap vil analysere 10 000 kundeanmeldelser. Zero-shot: «Er denne anmeldelsen positiv, negativ eller nøytral?» Few-shot med 5 eksempler: bedre konsistens og nøyaktighet.

Dataekstraksjon: Du har 500 fakturaer. Few-shot med 3 eksempler av input→output-format. Modellen ekstraherer beløp, dato og leverandør fra alle 500.

Kodegenerering: Zero-shot: «Skriv en Python-funksjon som validerer e-postadresser.» Modellen skriver funksjonen uten eksempler – basert på sin generelle forståelse.

## Vanlige spørsmål

### Når bør jeg bruke zero-shot vs few-shot?
Start med zero-shot. Hvis kvaliteten er utilstrekkelig, legg til 3–5 eksempler (few-shot). Hvis det fortsatt ikke er nok, vurder finjustering.

### Er few-shot like bra som finjustering?
For mange oppgaver: ja, spesielt med sterke modeller (GPT-4, Claude). For spesialiserte domener med konsistent format: finjustering kan gi bedre og billigere resultater.

### Hva er chain-of-thought prompting?
En utvidelse av few-shot der eksemplene inkluderer steg-for-steg resonnering – «vis utregningen.» Dramatisk bedre for logikk og matematikk.

### Fungerer zero-shot for alle språk?
Bedre for engelsk enn andre språk (treningsdata-bias). For norsk: god men ikke perfekt. Few-shot med norske eksempler forbedrer betydelig.

## Relaterte begreper

- [Prompt engineering](/ai/hva-er-prompt-engineering-dybde) – kunsten å utforme instruksjoner
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [Finjustering](/ai/hva-er-finjustering-av-ai) – alternativet når few-shot ikke er nok
- [Transfer learning](/ai/hva-er-transfer-learning) – hvorfor zero-shot fungerer
- [Maskinlæring](/ai/hva-er-maskinlaering) – den bredere konteksten

## Se også

- [Hva er prompt engineering?](/ai/hva-er-prompt-engineering-dybde)
- [Hva er finjustering?](/ai/hva-er-finjustering-av-ai)

## Oppsummering

Zero-shot løser oppgaver uten eksempler, few-shot med 2–10 eksempler i prompten – uten å endre modellen. Det er LLM-enes superkraft og kjernen i prompt engineering. Start med zero-shot, legg til eksempler ved behov. For de fleste oppgaver er few-shot med en sterk modell tilstrekkelig – ingen finjustering nødvendig.
