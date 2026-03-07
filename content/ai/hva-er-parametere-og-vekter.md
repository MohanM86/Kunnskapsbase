---
title: "Hva er parametere og vekter i AI?"
slug: "hva-er-parametere-og-vekter"
category: "ai"
subcategory: "maskinlaering"
description: "Parametere og vekter er tallene som utgjør en AI-modells 'hjerne' – det den lærte under trening. Lær hva det er, hvorfor GPT-4 har billioner, og hva det betyr for ytelse."
keywords: ["parametere", "vekter", "weights", "parameters", "modellstørrelse"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Parametere og vekter"
aliases: ["weights", "parameters", "modellparametere"]
related: ["hva-er-nevrale-nettverk", "hva-er-treningsdata", "hva-er-inference", "hva-er-overfitting", "hva-er-maskinlaering"]
seeAlso: ["hva-er-nevrale-nettverk", "hva-er-treningsdata"]
tags: ["parametere", "vekter", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er parametere og vekter i AI?

Parametere (parameters) er alle de justerbare tallene i en AI-modell – inkludert vekter (weights) og bias-verdier – som til sammen utgjør modellens «kunnskap». Jo flere parametere, desto mer kan modellen lære og huske.

> **Kort forklart**
> Når noen sier «GPT-4 har 1,8 billioner parametere» – hva betyr det? Det betyr at modellen består av 1,8 billioner tall som ble justert under treningen for å fange mønstre i språket. Hvert tall er en liten bit «forståelse» – sammen utgjør de modellens evne til å skrive, resonnere og svare. Llama 3.1 har 405 milliarder parametere. DeepSeek-V3 har 671 milliarder (men bruker MoE – kun 37 milliarder er aktive per forespørsel). Flere parametere gir generelt bedre ytelse – men krever mer regnekraft.

## Hva betyr begrepet

Vekter (weights) er tallene som forbinder noder i et nevralt nettverk – de bestemmer hvor sterkt et signal overføres. Bias er tilleggstall som justerer tersklene for aktivering. Parametere er samlebetegnelsen for alle vekter + bias i modellen.

Under trening justeres alle parametere gradvis for å minimere feil (loss). Prosessen er å ta inn treningsdata, generere output, sammenligne med riktig svar, beregne feil (loss), justere parametere litt (gradient descent), og gjenta milliarder av ganger.

Modellstørrelse måles i parametere. GPT-3 har 175 milliarder. GPT-4 anslås til 1,8 billioner (MoE). Llama 3.1 har 8B, 70B og 405B varianter. Claude og Gemini har ikke publisert tallene. DeepSeek-V3 har 671B totalt, 37B aktive per forespørsel (MoE).

Scaling laws (Chinchilla-loven) viser at optimal modellstørrelse avhenger av datamengde. Doble parameterne = modellen trenger dobbelt så mye data for optimal trening. Bare å øke parametere uten nok data gir avtakende utbytte.

## Hvordan fungerer det

Parametere er tallene som utgjør modellens «hjerne».

```
Enkelt nevralt nettverk:
Input [x1, x2] → Vekt w1 × x1 + Vekt w2 × x2 + Bias b → Aktivering → Output

w1, w2 og b er parametere. Under trening justeres de:
Runde 1: w1=0,5, w2=0,3, b=0,1 → Feil: 0,4
Runde 2: w1=0,6, w2=0,2, b=0,15 → Feil: 0,25
...
Runde 1000000: w1=0,73, w2=0,18, b=0,09 → Feil: 0,001

GPT-4: Denne prosessen × 1,8 billioner parametere × billioner av datapunkter
```

Lagring: hvert parameter er typisk et 16- eller 32-bit tall. Llama 70B i FP16 = ~140 GB. Med kvantisering (INT4) = ~35 GB – kjørbar på en kraftig laptop.

## Hvorfor er det viktig

Parameterantall er den mest siterte metrikken for AI-modeller – men den er misvisende alene. DeepSeek-V3 med 671B parametere bruker MoE og aktiverer bare 37B per forespørsel – raskere og billigere enn en 70B-modell som aktiverer alt. Llama 3.1 8B er utmerket til mange oppgaver – du trenger ikke alltid billioner av parametere.

Trenden er todelt: større modeller for maksimal ytelse (GPT-5, Gemini Ultra) og mindre, effektive modeller for lokal kjøring (Phi-3, Llama 8B, Gemma 2B). «Riktig størrelse for oppgaven» er viktigere enn «størst mulig.»

## Eksempler

Llama 8B vs 70B: Llama 8B (5 GB) kjører på laptop, scorer 65 på MMLU. Llama 70B (40 GB) krever GPU, scorer 82. Llama 405B scorer 88 – men krever server-infrastruktur. Velg størrelsen etter behov.

Kvantisering: Llama 70B i FP16 = 140 GB (trenger dyr GPU). Kvantisert til INT4 = 35 GB (kjørbar på Mac med 64 GB RAM). Minimalt kvalitetstap – dramatisk lavere krav.

MoE: DeepSeek-V3 har 671B parametere men aktiverer 37B per token. Du får ytelsen til en stor modell med inference-kostnaden til en liten.

## Vanlige spørsmål

### Betyr flere parametere alltid bedre AI?
Generelt ja – men med avtakende utbytte. Kvaliteten på treningsdata, arkitektur og finjustering er like viktige. En godt trent 8B-modell kan slå en dårlig trent 70B.

### Hva er forskjellen på parametere og treningsdata?
Parametere er modellens «hjerne» (tallene den lærte). Treningsdata er «pensumet» den lærte fra. Mer data og flere parametere gir bedre resultater – men begge må balanseres.

### Hva betyr «7B», «70B», «405B»?
Antall parametere i milliarder (B = billion). 7B = 7 milliarder. 70B = 70 milliarder. 405B = 405 milliarder.

### Hva er kvantisering?
Å redusere presisjonen på parameterne (f.eks. FP16→INT4) for å gjøre modellen mindre og raskere – med minimalt kvalitetstap. Det er nøkkelen til å kjøre store modeller lokalt.

## Relaterte begreper

- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – arkitekturen parameterne lever i
- [Treningsdata](/ai/hva-er-treningsdata) – det som former parameterne
- [Inference](/ai/hva-er-inference) – når parameterne brukes til å svare
- [Overfitting](/ai/hva-er-overfitting) – for mange parametere + for lite data
- [Maskinlæring](/ai/hva-er-maskinlaering) – prosessen som justerer parameterne

## Se også

- [Hva er nevrale nettverk?](/ai/hva-er-nevrale-nettverk)
- [Hva er treningsdata?](/ai/hva-er-treningsdata)

## Oppsummering

Parametere er alle justerbare tall i en AI-modell – vekter og bias som utgjør modellens kunnskap. GPT-4 har ~1,8 billioner, Llama 405B har 405 milliarder. Flere parametere gir generelt bedre ytelse men krever mer ressurser. MoE aktiverer bare deler av modellen per forespørsel. Kvantisering gjør store modeller kjørbare lokalt. Parameterantall er viktig men ikke alt – datakvalitet og arkitektur er like avgjørende.
