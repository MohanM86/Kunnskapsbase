---
title: "Hva er kvantisering i AI?"
slug: "hva-er-kvantisering"
category: "ai"
subcategory: "maskinlaering"
description: "Kvantisering gjør store AI-modeller kjørbare på vanlige maskiner ved å redusere tallpresisjonen. Lær hva det er, GGUF, og hvorfor det muliggjør lokal AI."
keywords: ["kvantisering", "quantization", "GGUF", "INT4", "lokal AI"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Kvantisering"
aliases: ["quantization", "modellkomprimering"]
related: ["hva-er-parametere-og-vekter", "hva-er-ollama", "hva-er-inference", "hva-er-edge-ai", "hva-er-small-language-models"]
seeAlso: ["hva-er-parametere-og-vekter", "hva-er-ollama"]
tags: ["kvantisering", "ai", "maskinlaering", "optimalisering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er kvantisering i AI?

Kvantisering (quantization) er teknikken med å redusere tallpresisjonen i en AI-modells parametere – fra 32-bit til 8-bit eller 4-bit – noe som gjør modellen dramatisk mindre og raskere med minimalt kvalitetstap.

> **Kort forklart**
> Llama 70B i full presisjon (FP16) krever ~140 GB minne – ingen vanlig maskin kan kjøre det. Kvantisert til 4-bit (INT4/Q4) krever den bare ~35 GB – kjørbar på en Mac med 64 GB RAM. Kvalitetstapet? Knapt merkbart – kanskje 1–3 prosent lavere benchmark-score. Kvantisering er det som muliggjør lokal AI for vanlige mennesker. Uten det ville Ollama og lokal LLM-kjøring vært umulig for de fleste.

## Hva betyr begrepet

AI-modellers parametere lagres som desimaltall (floating point). Full presisjon (FP32) bruker 32 bit per tall. Halvpresisjon (FP16/BF16) bruker 16 bit – standard for trening. INT8 bruker 8 bit – god balanse, ~2× mindre. INT4/Q4 bruker 4 bit – 4× mindre enn FP16, kjørbar på laptop. GPTQ, AWQ og GGUF er populære kvantiseringsformater.

Effekten er dramatisk for Llama 70B. FP16 gir 140 GB og krever 2× H100 GPU. INT8 gir 70 GB og krever 1× H100 GPU. Q4 (GGUF) gir 35 GB og kjører på Mac Studio/PC med 64 GB RAM. Q2 gir 18 GB og kjører på de fleste maskiner – men merkbar kvalitetsreduksjon.

GGUF er det mest brukte formatet for lokal kjøring – optimalisert for llama.cpp og Ollama. Når du kjører `ollama run llama3.1`, laster den en GGUF-kvantisert versjon.

## Hvordan fungerer det

Kvantisering mapper høypresisjon-tall til lavpresisjon.

```
Original (FP16): 0.847291946411133
Kvantisert (INT4): 13 (av 16 mulige verdier)

FP16: 65 536 mulige verdier per parameter → Nøyaktig
INT8: 256 mulige verdier → Nesten like bra
INT4: 16 mulige verdier → Grovere men overraskende god
INT2: 4 mulige verdier → Merkbar kvalitetsreduksjon

Modellstørrelse: antall parametere × bit per parameter / 8 = bytes
Llama 70B i FP16: 70B × 16 / 8 = 140 GB
Llama 70B i Q4: 70B × 4 / 8 = ~35 GB (pluss overhead)
```

Post-training quantization (PTQ) kvantiserer en ferdig trent modell – enklest. Quantization-Aware Training (QAT) trener med kvantisering innbygd – bedre kvalitet men dyrere.

## Hvorfor er det viktig

Kvantisering er nøkkelen til demokratisert AI. Uten det ville LLM-er kun vært tilgjengelig via dyre sky-API-er. Med kvantisering kan en Mac med 16 GB RAM kjøre Llama 8B, en PC med 32 GB RAM kjøre Mistral 22B, og en Mac Studio med 192 GB RAM kjøre Llama 405B. Det er det som gjør Ollama, lokal AI og edge AI mulig.

## Eksempler

Ollama: Når du kjører `ollama run llama3.1`, laster Ollama en Q4-kvantisert GGUF-fil (~5 GB for 8B-modellen). Du merker ingen kvalitetsforskjell fra FP16.

TheBloke: Brukeren «TheBloke» på Hugging Face kvantiserer hundrevis av modeller i ulike formater – den mest populære kilden for lokale modeller.

Kvalitetstest: Llama 70B FP16 scorer 82 på MMLU. Q4-kvantisert scorer 80. 2 prosentpoeng = knapt merkbart for brukere.

## Vanlige spørsmål

### Merker jeg forskjell på kvantisert modell?
For Q4/Q5: nesten ikke. For Q3: litt merkbart i komplekse oppgaver. For Q2: tydelig kvalitetsreduksjon. Tommregel: Q4 er sweet spot.

### Hva er GGUF?
Et filformat for kvantiserte modeller optimalisert for CPU-inference (llama.cpp, Ollama). Det er standarden for lokal LLM-kjøring.

### Kan jeg kvantisere selv?
Ja – verktøy som llama.cpp, AutoGPTQ og bitsandbytes gjør det enkelt. Men for de fleste er det enklest å laste ned ferdig kvantiserte modeller.

### Hva er AWQ vs GPTQ vs GGUF?
GGUF: best for CPU-inference (Ollama). GPTQ: best for GPU-inference. AWQ: nyere, ofte bedre kvalitet enn GPTQ. For lokalt bruk: GGUF via Ollama.

## Relaterte begreper

- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – det som kvantiseres
- [Ollama](/ai/hva-er-ollama) – kjører kvantiserte modeller lokalt
- [Inference](/ai/hva-er-inference) – kvantisering akselererer det
- [Edge AI](/ai/hva-er-edge-ai) – muliggjort av kvantisering
- [Small Language Models](/ai/hva-er-small-language-models) – allerede kompakte

## Se også

- [Hva er parametere og vekter?](/ai/hva-er-parametere-og-vekter)
- [Hva er Ollama?](/ai/hva-er-ollama)

## Oppsummering

Kvantisering reduserer AI-modellers tallpresisjon (FP16→INT4) – gjør dem 4× mindre med minimalt kvalitetstap. Llama 70B går fra 140 GB til 35 GB. Det muliggjør lokal AI via Ollama. GGUF er standardformatet. Q4 er sweet spot mellom kvalitet og størrelse. Kvantisering er nøkkelen til demokratisert, lokal, privat AI.
