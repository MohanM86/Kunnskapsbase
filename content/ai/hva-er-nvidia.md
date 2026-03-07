---
title: "Hva er NVIDIA og AI?"
slug: "hva-er-nvidia"
category: "ai"
subcategory: "maskinlaering"
description: "NVIDIA er selskapet bak AI-revolusjonen – deres GPU-er og CUDA-plattform driver all AI-trening og inference. Lær hvorfor NVIDIA ble verdens mest verdifulle selskap."
keywords: ["NVIDIA", "GPU", "CUDA", "H100", "Jensen Huang", "AI maskinvare"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "NVIDIA"
aliases: ["NVIDIA AI", "NVDA"]
related: ["hva-er-gpu-tpu", "hva-er-inference", "hva-er-treningsdata", "hva-er-kunstig-intelligens", "hva-er-edge-ai"]
seeAlso: ["hva-er-gpu-tpu", "hva-er-inference"]
tags: ["NVIDIA", "ai", "maskinvare"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er NVIDIA og AI?

NVIDIA er det amerikanske halvlederselskapet som produserer GPU-ene (grafikk-prosessorene) som driver nesten all AI i verden – fra trening av GPT-4 til inference i ChatGPT. AI-boomen har gjort NVIDIA til verdens mest verdifulle selskap.

> **Kort forklart**
> NVIDIA begynte med grafikkort for gaming. Så oppdaget forskere at GPU-er var perfekte for AI – tusenvis av parallelle beregninger, akkurat det nevrale nettverk trenger. I dag kjøres ~90 prosent av all AI-trening på NVIDIA GPU-er. H100-chippen (~300 000 kr per stk) er gullstandarden. Selskaper bruker milliarder på NVIDIA-hardware for å trene modeller. CEO Jensen Huang er teknologiens mektigste person. NVIDIA har passert 3 billioner dollar i markedsverdi.

## Hva betyr begrepet

NVIDIA ble grunnlagt i 1993 av Jensen Huang, Chris Malachowsky og Curtis Priem. Opprinnelig et grafikkort-selskap for gaming – men GPU-ens parallelle arkitektur viste seg perfekt for AI.

NVIDIAs AI-økosystem har tre lag. Maskinvare er GPU-chipene: A100 (2020, den første dedikerte AI-GPU), H100 (2023, gullstandarden – ~300 000 kr), H200 (2024, mer minne), B200/GB200 (2025, neste gen – 2,5× raskere). Programvare er CUDA, NVIDIAs programmeringsrammeverk – alle AI-verktøy (PyTorch, TensorFlow) er optimalisert for CUDA. Det er lock-in-effekten som gjør NVIDIA nesten umulig å utfordre. Plattformer er DGX (ferdigbygget AI-server), NeMo (LLM-treningsplattform), og Omniverse (digital tvilling/simulering).

NVIDIAs markedsdominans: ~80–90 prosent av AI-trenings-GPU-markedet. Konkurrenter (AMD MI300X, Google TPU, Intel Gaudi) tar markedsandeler men CUDA-økosystemet er en enorm moat.

## Hvordan fungerer det

NVIDIA leverer maskinvaren OG programvaren som driver AI.

```
AI-selskap vil trene modell:
1. Kjøper/leier tusenvis av NVIDIA H100 GPU-er
2. Installerer CUDA + PyTorch
3. Laster treningsdata → Kjører på GPU-klynge
4. GPU-ene utfører billioner av matrise-operasjoner parallelt
5. Etter uker/måneder: ferdig trent modell

Kostnader:
  xAI Colossus: 100 000 H100 = ~30 milliarder kr i hardware
  GPT-4 trening: ~25 000 A100 i ~3 måneder = ~600 millioner kr
  Din RTX 4090: ~20 000 kr – kan kjøre Llama 70B lokalt
```

## Hvorfor er det viktig

NVIDIA er det viktigste selskapet i AI-revolusjonen – de selger «hakker og spader i gullrushet.» Uansett hvem som vinner AI-kappløpet (OpenAI, Google, Meta, Anthropic) – de alle kjøper NVIDIA-hardware.

Geopolitisk er NVIDIA sentralt: USAs eksportrestriksjoner på H100/A100 til Kina er et forsøk på å bremse kinesisk AI. DeepSeeks gjennombrudd med eldre chips viste at restriksjoner har begrensninger.

For investorer: NVIDIAs aksjekurs har steget ~3 000 prosent fra 2020 til 2025 – den mest dramatiske verdiøkningen i teknologihistorien.

## Eksempler

GPT-4-trening: Estimert 25 000 NVIDIA A100 GPU-er i ~3 måneder. Kostnad: ~$100 millioner bare i compute. Uten NVIDIA: umulig.

Gaming til AI: RTX 4090 – opprinnelig for gaming – kjører Llama 70B lokalt. Gamere ble utilsiktet AI-pionerer.

Jensen Huang: NVIDIAs CEO ble kåret til en av verdens mektigste personer. Hans keynotes er AI-industriens «Super Bowl.»

## Vanlige spørsmål

### Hvorfor dominerer NVIDIA?
CUDA – programmeringsrammeverket alle AI-verktøy er bygget på. Å bytte fra NVIDIA krever å omskrive kode, verktøy og workflow. Lock-in er enorm.

### Kan AMD eller Google utfordre?
AMD MI300X er konkurransedyktig på hardware. Google TPU er raskere for noen oppgaver. Men CUDA-økosystemet er 15 år forsprang. Det tar tid å utfordre.

### Trenger jeg NVIDIA for AI?
For trening: ja (nesten alltid). For lokal inference: NVIDIA GPU er best, men Apple Silicon (M-serie) fungerer utmerket for Ollama/Llama.

### Er NVIDIA-aksjen overpriset?
Avhenger av om AI-investeringene vedvarer. Selskapet leverer reell verdiskaping – men forventningene er astronomiske. DYOR.

## Relaterte begreper

- [GPU og TPU](/ai/hva-er-gpu-tpu) – maskinvaren NVIDIA produserer
- [Inference](/ai/hva-er-inference) – det GPU-ene utfører
- [Treningsdata](/ai/hva-er-treningsdata) – prosesseres av GPU-er
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det NVIDIA muliggjør
- [Edge AI](/ai/hva-er-edge-ai) – NVIDIA Jetson for edge

## Se også

- [Hva er GPU og TPU?](/ai/hva-er-gpu-tpu)
- [Hva er inference?](/ai/hva-er-inference)

## Oppsummering

NVIDIA er selskapet bak AI-revolusjonen – ~90 prosent av AI-trening kjøres på deres GPU-er. H100 er gullstandarden (~300 000 kr). CUDA-økosystemet er en enorm lock-in. Passert 3 billioner dollar i markedsverdi. Geopolitisk sentralt (eksportrestriksjoner til Kina). For AI-industrien er NVIDIA like fundamentalt som elektrisitet er for moderne samfunn.
