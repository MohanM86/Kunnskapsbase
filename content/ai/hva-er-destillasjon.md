---
title: "Hva er destillasjon i AI?"
slug: "hva-er-destillasjon"
category: "ai"
subcategory: "maskinlaering"
description: "Destillasjon overfører kunnskap fra en stor AI-modell til en mindre – eleven lærer fra læreren. Lær hva det er, teacher-student, og hvorfor DeepSeek R1-destillater er så gode."
keywords: ["destillasjon", "distillation", "knowledge distillation", "teacher-student", "modellkomprimering"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Destillasjon"
aliases: ["distillation", "knowledge distillation", "kunnskapsoverføring"]
related: ["hva-er-finjustering-av-ai", "hva-er-small-language-models", "hva-er-treningsdata", "hva-er-syntetisk-data", "hva-er-kvantisering"]
seeAlso: ["hva-er-finjustering-av-ai", "hva-er-small-language-models"]
tags: ["destillasjon", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er destillasjon i AI?

Destillasjon (knowledge distillation) er teknikken der en stor, kraftig AI-modell («lærer») overfører sin kunnskap til en mindre modell («elev») – slik at den lille modellen presterer nesten like godt som den store, til en brøkdel av kostnaden.

> **Kort forklart**
> GPT-4 er briljant men dyr og treg. Hva om du kunne «destillere» GPT-4s kunnskap inn i en modell 100× mindre? Det er destillasjon. Den store modellen genererer svar på tusenvis av spørsmål. Den lille modellen trenes på disse svarene – den lærer fra læreren, ikke fra rå data. DeepSeek R1-destillatene (7B, 14B, 32B) er laget slik: R1 671B genererte reasoning-data, og de mindre modellene ble trent på den. Resultatet: Llama 8B med DeepSeek R1-destillasjon slår mange 70B-modeller.

## Hva betyr begrepet

Teacher-student-paradigmet fungerer slik: teacher (lærer) er en stor, kraftig modell (GPT-4, R1 671B), student (elev) er en liten modell (Llama 8B, Phi-3), og kunnskapen overføres ved at eleven trenes på lærerens output i stedet for rå data.

Destillasjon fungerer bedre enn å trene direkte fordi læreren produserer «soft targets» – sannsynlighetsfordelinger som inneholder mer informasjon enn hardt ja/nei. Læreren «vet» at «hund» er 90 prosent sannsynlig, «ulv» 5 prosent, «katt» 3 prosent – denne nyansen overføres til eleven.

Typer destillasjon er response-based (eleven trener på lærerens svar – enklest og vanligst), feature-based (eleven matcher lærerens interne representasjoner – dypere), og relation-based (eleven lærer forholdet mellom datapunkter fra læreren).

## Hvordan fungerer det

Destillasjon overfører kunnskap fra stor til liten modell.

```
Steg 1: Stor modell (R1 671B) genererer svar på 100 000 spørsmål
  → Inkluderer reasoning-steg, nyanser, usikkerhet

Steg 2: Liten modell (Llama 8B) trenes på disse svarene
  → Lærer HVORDAN den store modellen tenker
  → Ikke bare fakta, men resonneringsmønstre

Resultat: Llama 8B med R1-destillasjon
  → Scorer som Llama 70B på reasoning-oppgaver
  → Kjører på laptop
  → 10× billigere inference
```

## Hvorfor er det viktig

Destillasjon er broen mellom massive sky-modeller og brukbar lokal AI. De fleste SLM-er (Phi, Gemma) bruker destillasjon fra større modeller. DeepSeek R1-destillatene viste at reasoning kan destilleres – en 8B-modell som «tenker» like steg-for-steg som en 671B-modell.

Det er også kontroversielt: er det rettferdig å destillere fra GPT-4 for å lage konkurrenter? OpenAIs bruksvilkår forbyr det eksplisitt – men håndhevelse er vanskelig.

## Eksempler

DeepSeek R1-destillater: R1 671B genererte reasoning-data. Destillert til Llama 8B, 14B, 32B og 70B – alle med dramatisk bedre reasoning enn originale Llama-modeller.

Alpaca: Stanford destillerte GPT-4 til Llama 7B med 52 000 instruksjoner – resultatet konkurrerte med GPT-3.5 til null kostnad.

Phi-3: Microsoft brukte destillasjon + kuraterte data for å lage en 3,8B-modell som scorer nær GPT-3.5.

## Vanlige spørsmål

### Er destillasjon det samme som finjustering?
Relatert men ikke identisk. Finjustering trener på faktiske data. Destillasjon trener på en annen modells output. I praksis er destillasjon en type finjustering – med syntetisk data fra en lærer.

### Er det lovlig å destillere fra GPT-4?
OpenAIs vilkår forbyr bruk av output til å trene konkurrerende modeller. Men det er vanskelig å håndheve, og mange åpne prosjekter har gjort det.

### Hva er forskjellen på destillasjon og kvantisering?
Destillasjon lager en NY, mindre modell. Kvantisering komprimerer en EKSISTERENDE modell. Begge gjør modeller mindre – men på fundamentalt ulike måter.

## Relaterte begreper

- [Finjustering](/ai/hva-er-finjustering-av-ai) – relatert teknikk
- [Small Language Models](/ai/hva-er-small-language-models) – resultatet av destillasjon
- [Treningsdata](/ai/hva-er-treningsdata) – destillasjon bruker syntetisk data
- [Syntetisk data](/ai/hva-er-syntetisk-data) – lærerens output som treningsdata
- [Kvantisering](/ai/hva-er-kvantisering) – komplementær kompresjonsteknikk

## Se også

- [Hva er finjustering?](/ai/hva-er-finjustering-av-ai)
- [Hva er Small Language Models?](/ai/hva-er-small-language-models)

## Oppsummering

Destillasjon overfører kunnskap fra stor til liten AI – teacher-student-paradigmet. DeepSeek R1-destillater ga 8B-modeller reasoning-evner fra 671B. Phi-3 og Alpaca ble laget med destillasjon. Det muliggjør kraftig lokal AI. Kontroversielt juridisk (OpenAI forbyr det). Destillasjon + kvantisering er den doble nøkkelen til demokratisert AI.
