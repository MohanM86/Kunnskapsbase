---
title: "Hva er LoRA?"
slug: "hva-er-lora"
category: "ai"
subcategory: "maskinlaering"
description: "LoRA er en effektiv finjusteringsteknikk som tilpasser store AI-modeller med minimale ressurser. Lær hva det er, hvorfor det endret finjustering, og hvordan du bruker det."
keywords: ["LoRA", "Low-Rank Adaptation", "finjustering", "PEFT", "adapter"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "LoRA"
aliases: ["Low-Rank Adaptation", "LoRA finjustering"]
related: ["hva-er-finjustering-av-ai", "hva-er-parametere-og-vekter", "hva-er-kvantisering", "hva-er-stable-diffusion", "hva-er-treningsdata"]
seeAlso: ["hva-er-finjustering-av-ai", "hva-er-kvantisering"]
tags: ["LoRA", "ai", "maskinlaering", "finjustering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er LoRA?

LoRA (Low-Rank Adaptation) er en finjusteringsteknikk som tilpasser store AI-modeller ved å kun trene et lite sett med ekstra parametere – typisk 0,1–1 prosent av modellens totale størrelse – noe som reduserer ressurskravene dramatisk.

> **Kort forklart**
> Full finjustering av Llama 70B krever maskinvare for hundretusenvis av kroner. LoRA gjør det på én GPU for noen tusen. I stedet for å endre alle 70 milliarder parametere, legger LoRA til et lite «adapter-lag» (~100 millioner ekstra parametere) som fanger de domenespesifikke endringene. Resultatet er nesten like godt som full finjustering – til en brøkdel av kostnaden. LoRA er det som gjør finjustering tilgjengelig for alle. I Stable Diffusion-verdenen brukes LoRA for å lage stilmodeller – «tren modellen i min kunststil med 20 bilder.»

## Hva betyr begrepet

Full finjustering endrer alle parametere i modellen – dyrt, krever mye minne, og kan ødelegge generelle evner (catastrophic forgetting). LoRA fryser originale parametere (endres ikke), legger til små «adapter-matriser» (low-rank dekomposisjon) i hvert lag, og trener KUN adapterne – typisk 0,1–1 prosent av total størrelse. Resultatet er domenespesialisering med minimal ressursbruk.

Rank (r) er hyperparameteren: lavere rank = mindre adapter = raskere men mindre kapasitet. r=8 er vanlig startpunkt. r=64 gir mer kapasitet men krever mer minne.

QLoRA kombinerer kvantisering + LoRA – kjør modellen i 4-bit (kvantisert) og tren LoRA-adapterne i full presisjon. Det gjør finjustering av 70B-modeller mulig på én forbruker-GPU (24 GB VRAM).

PEFT (Parameter-Efficient Fine-Tuning) er den bredere kategorien teknikker – LoRA er den mest populære PEFT-metoden.

## Hvordan fungerer det

LoRA legger til små adapter-lag i stedet for å endre hele modellen.

```
Full finjustering av Llama 70B:
  Endre 70 milliarder parametere → Krever 4× H100 GPU (1,2 mill kr)
  Treningstid: dager
  Risiko: catastrophic forgetting

LoRA-finjustering av Llama 70B:
  Frys 70 milliarder originale parametere
  Legg til 100 millioner adapter-parametere (0,14 %)
  Tren kun adapterne → Krever 1× RTX 4090 (20 000 kr)
  Treningstid: timer
  → Nesten identisk kvalitet, 100× billigere

QLoRA:
  Kvantiser modell til 4-bit (35 GB) + LoRA i full presisjon
  → Finjuster 70B på én 24 GB GPU → Revolusjonerende
```

LoRA-adaptere er små filer (10–100 MB) som kan lastes inn og ut av basismodellen. Du kan ha titalls LoRA-adaptere for ulike domener – bytt mellom dem i sekunder.

## Hvorfor er det viktig

LoRA demokratiserte finjustering. Før LoRA krevde finjustering av store modeller serverparker og millioner. Med LoRA (og QLoRA) kan hvem som helst med én GPU finjustere en 70B-modell på noen timer.

I Stable Diffusion-økosystemet eksploderte LoRA: tusenvis av kunstnere trener LoRA-adaptere for spesifikke stiler, karakterer og konsepter. CivitAI har hundretusenvis av community-laget LoRA-er.

For bedrifter: LoRA gjør domenespesifikk AI tilgjengelig uten millionbudsjett.

## Eksempler

Norsk juridisk AI: Du tar Llama 70B, finjusterer med QLoRA på 10 000 norske lovtekster. Timer på én GPU. Resultatet: en juridisk AI som er bedre enn GPT-4 på norsk jus.

Stable Diffusion kunst: En kunstner trener en LoRA på 30 bilder av sin kunststil. Nå kan Stable Diffusion generere nye bilder i den stilen. LoRA-filen er 50 MB.

Kundeservice: Et selskap LoRA-finjusterer Mistral 7B på sine FAQ-er og support-historikk. Chatten svarer med bedriftens tone og kunnskap.

## Vanlige spørsmål

### Er LoRA like godt som full finjustering?
For de fleste bruksområder: 95–99 prosent like godt. For ekstremt spesialiserte domener kan full finjustering gi marginalt bedre resultater.

### Kan jeg kombinere flere LoRA-er?
Ja – du kan laste flere LoRA-adaptere samtidig eller merge dem. I Stable Diffusion er det vanlig å kombinere en stil-LoRA med en karakter-LoRA.

### Hva trenger jeg for å kjøre QLoRA?
Én GPU med 24 GB VRAM (RTX 4090) for å finjustere 70B-modeller. For 7B-modeller: 8 GB VRAM er nok.

### Hva er forskjellen på LoRA og RAG?
LoRA endrer modellen (finjustering). RAG gir modellen tilgang til dokumenter (uten endring). LoRA for stil/oppførsel, RAG for kunnskap. Kombinér for best resultat.

## Relaterte begreper

- [Finjustering](/ai/hva-er-finjustering-av-ai) – det LoRA gjør effektivt
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – det LoRA legger til
- [Kvantisering](/ai/hva-er-kvantisering) – kombineres med LoRA (QLoRA)
- [Stable Diffusion](/ai/hva-er-stable-diffusion) – største LoRA-økosystemet
- [Treningsdata](/ai/hva-er-treningsdata) – det LoRA trenes på

## Se også

- [Hva er finjustering?](/ai/hva-er-finjustering-av-ai)
- [Hva er kvantisering?](/ai/hva-er-kvantisering)

## Oppsummering

LoRA er en finjusteringsteknikk som tilpasser AI ved å trene kun 0,1–1 prosent ekstra parametere – dramatisk billigere enn full finjustering. QLoRA kombinerer med kvantisering for 70B-finjustering på én GPU. Demokratiserte finjustering for alle. Ekstremt populært i Stable Diffusion-økosystemet. For bedrifter: domenespesifikk AI uten millionbudsjett.
