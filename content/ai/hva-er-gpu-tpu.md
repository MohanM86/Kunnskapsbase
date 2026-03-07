---
title: "Hva er GPU og TPU?"
slug: "hva-er-gpu-tpu"
category: "ai"
subcategory: "maskinlaering"
description: "GPU og TPU er maskinvaren som driver all AI – fra trening til inference. Lær hva de er, NVIDIAs dominans, Google TPU, og hvorfor AI-chips er geopolitikk."
keywords: ["GPU", "TPU", "NVIDIA", "H100", "AI maskinvare", "AI chip"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "GPU og TPU"
aliases: ["AI-chip", "grafikkort for AI", "AI maskinvare"]
related: ["hva-er-inference", "hva-er-treningsdata", "hva-er-parametere-og-vekter", "hva-er-kunstig-intelligens", "hva-er-edge-ai"]
seeAlso: ["hva-er-inference", "hva-er-edge-ai"]
tags: ["GPU", "TPU", "ai", "maskinvare"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er GPU og TPU?

GPU (Graphics Processing Unit) og TPU (Tensor Processing Unit) er de spesialiserte prosessorene som driver all AI – fra trening av gigantiske modeller til inference når du bruker ChatGPT. NVIDIA dominerer markedet og har blitt verdens mest verdifulle selskap.

> **Kort forklart**
> En vanlig CPU (prosessor) gjør én ting om gangen, veldig raskt. En GPU gjør tusenvis av ting samtidig – perfekt for AI som krever milliarder av parallelle beregninger. NVIDIAs H100/H200/B200 er gullstandarden for AI-trening. Googles TPU er designet spesifikt for tensor-operasjoner (AI-matematikk). AI-kappløpet er i bunn og grunn et chip-kappløp – den som har flest GPU-er trener de beste modellene. USA har innført eksportrestriksjoner på AI-chips til Kina – det er geopolitikk.

## Hva betyr begrepet

CPU (Central Processing Unit) er din datamaskins generelle prosessor – ekstremt rask på sekvensielle oppgaver (1 ting om gangen). GPU (Graphics Processing Unit) ble opprinnelig designet for å rendere grafikk (tusenvis av piksler parallelt). AI-trening krever nøyaktig den samme typen parallell beregning – det er derfor GPU-er er perfekte for AI. TPU (Tensor Processing Unit) er Googles egendesignede chip, spesialbygd for tensor-operasjoner (matrisemultiplikasjon – kjernen i nevrale nettverk), og bare tilgjengelig via Google Cloud.

NVIDIAs AI-chips har utviklet seg fra A100 (2020, den første dedikerte AI-GPU-en) til H100 (2023, «gullstandarden» – ~300 000 kr per chip), H200 (2024, mer minne for store modeller), og B200/GB200 (2024–2025, neste generasjon – 2,5× raskere enn H100).

Alternativ maskinvare er Google TPU v5e/v6 (billigere enn NVIDIA for Google Cloud-brukere), AMD MI300X (NVIDIAs sterkeste konkurrent – brukt av Microsoft), Intel Gaudi (tredje alternativ, voksende), Groq LPU (spesialisert for inference – 800+ tokens/sek), og Apple Neural Engine (on-device AI i iPhone/Mac).

## Hvordan fungerer det

GPU-er gjør milliarder av parallelle beregninger – perfekt for AI.

```
CPU: 1 beregning om gangen, ekstremt raskt
  → Bra for: kontorprogramvare, nettlesing, spill-logikk

GPU: 10 000+ beregninger samtidig, litt tregere per beregning
  → Bra for: AI-trening (milliarder parallelle matriseoperasjoner)

AI-trening av GPT-4:
  ~25 000 NVIDIA A100 GPU-er × ~3 måneder
  Kostnad: ~$100 millioner bare i compute
  Resultat: 1,8 billioner parametere trent

AI-inference (ChatGPT-svar):
  1 GPU prosesserer din forespørsel
  ~50-100 tokens per sekund
  Kostnad: brøkdeler av et øre per svar
```

## Hvorfor er det viktig

AI-chips er den mest strategisk viktige teknologien i verden akkurat nå. NVIDIAs markedsverdi har passert 3 billioner dollar – verdens mest verdifulle selskap. AI-kappløpet er fundamentalt et chip-kappløp: den som har flest og raskest GPU-er trener de beste modellene.

Det er også geopolitikk: USA har innført eksportrestriksjoner på avanserte AI-chips (H100, A100) til Kina. Det tvang kinesiske selskaper (DeepSeek, Baidu) til å innovere med eldre, svakere chips – og DeepSeek beviste at effektivitet kan kompensere for maskinvare.

For vanlige brukere: en modern laptop med NVIDIA RTX 4060+ eller Apple M2+ kan kjøre lokale AI-modeller (Llama 8B). Dedikert GPU er nøkkelen til lokal AI.

## Eksempler

xAIs Colossus: 100 000 NVIDIA H100 GPU-er i én klynge – verdens største AI-treningsinfrastruktur. Kostet milliarder å bygge. Brukt til å trene Grok 3.

Lokal AI: Du har en laptop med NVIDIA RTX 4090 (24 GB VRAM). Du kjører Llama 70B kvantisert – lokal AI uten internett, uten API-kostnad.

DeepSeek-effektivitet: Trent med begrenset tilgang til toppchips pga eksportrestriksjoner. Oppnådde topp-resultater med MoE og smart treningsmetodikk – beviste at chips ikke er alt.

## Vanlige spørsmål

### Trenger jeg en GPU for å bruke AI?
For å BRUKE AI (ChatGPT, Claude): nei – det kjøres i skyen. For å kjøre AI LOKALT: ja – NVIDIA GPU med 8+ GB VRAM eller Apple Silicon M-chip.

### Hva koster en AI-GPU?
Forbruker: RTX 4060 ~5 000 kr, RTX 4090 ~20 000 kr. Profesjonell: H100 ~300 000 kr. Leie: ~$2-3/time for H100 i skyen.

### Hvorfor dominerer NVIDIA?
CUDA – NVIDIAs programmeringsrammeverk – er industristandarden for AI. Alle AI-verktøy er optimalisert for CUDA. Det er en enorm lock-in-effekt. AMD og Google forsøker å utfordre, men CUDA-økosystemet er vanskelig å slå.

### Hva er VRAM?
GPU-minne – bestemmer hvor stor modell du kan kjøre. 8 GB VRAM = Llama 8B. 24 GB = Llama 70B kvantisert. 80 GB (H100) = store modeller uten kvantisering.

## Relaterte begreper

- [Inference](/ai/hva-er-inference) – GPU/TPU brukes for å generere svar
- [Treningsdata](/ai/hva-er-treningsdata) – GPU-er prosesserer treningsdata
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – GPU-er beregner og lagrer dem
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det GPU-er muliggjør
- [Edge AI](/ai/hva-er-edge-ai) – AI på lokal maskinvare

## Se også

- [Hva er inference?](/ai/hva-er-inference)
- [Hva er Edge AI?](/ai/hva-er-edge-ai)

## Oppsummering

GPU og TPU er maskinvaren bak all AI. NVIDIA dominerer med H100/B200 og CUDA-økosystemet – verdens mest verdifulle selskap. AI-kappløpet er et chip-kappløp. Google TPU og AMD MI300X utfordrer. Eksportrestriksjoner gjør AI-chips til geopolitikk. For lokal AI: NVIDIA RTX 4060+ eller Apple M-chip. For trening: tusenvis av H100-er til milliarder av kroner.
