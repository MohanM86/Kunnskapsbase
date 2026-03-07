---
title: "Hva er loss function og gradient descent?"
slug: "hva-er-loss-function-gradient-descent"
category: "ai"
subcategory: "maskinlaering"
description: "Loss function måler AI-ens feil, gradient descent korrigerer den steg for steg. Lær de to grunnleggende konseptene bak all AI-trening."
keywords: ["loss function", "gradient descent", "backpropagation", "tapsfunksjon", "optimalisering"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Loss function og gradient descent"
aliases: ["tapsfunksjon", "gradientnedstigning", "backpropagation"]
related: ["hva-er-parametere-og-vekter", "hva-er-nevrale-nettverk", "hva-er-overfitting", "hva-er-treningsdata", "hva-er-maskinlaering"]
seeAlso: ["hva-er-parametere-og-vekter", "hva-er-maskinlaering"]
tags: ["loss function", "gradient descent", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er loss function og gradient descent?

Loss function (tapsfunksjon) måler hvor feil AI-modellen er, og gradient descent (gradientnedstigning) er metoden som korrigerer feilen steg for steg – sammen er de motoren bak all AI-trening.

> **Kort forklart**
> Tenk deg at du står på et fjell i tett tåke og vil ned til dalen (lavest mulig feil). Loss function er høydemåleren – den forteller deg hvor høyt du er (hvor stor feilen er). Gradient descent er kompasset – det forteller deg hvilken retning som går nedover (hvordan justere parameterne for å redusere feilen). Du tar et lite steg nedover, måler igjen, tar et nytt steg. Etter milliarder av steg er du i dalen – modellen er trent.

## Hva betyr begrepet

Loss function (tapsfunksjon) er en matematisk funksjon som gir et tall for hvor langt unna modellens svar er fra riktig svar. Lavere loss = bedre modell. For språkmodeller er cross-entropy loss den vanligste – den måler hvor langt unna modellens sannsynlighetsfordeling er fra riktig neste-token. For bildemodeller bruker man ofte mean squared error (MSE), pixel-for-pixel forskjell.

Gradient descent er optimeringsalgoritmen som justerer modellens milliarder av parametere for å minimere loss. Den beregner gradienten (retningen med størst stigning) av loss-funksjonen og tar et steg i motsatt retning (nedover). Steg for steg, milliarder av ganger, beveger modellen seg mot lavest mulig feil.

Backpropagation er mekanismen som effektivt beregner gradienter gjennom alle lag i nettverket – fra output tilbake til input. Uten backpropagation ville gradient descent vært umulig for dype nettverk.

Learning rate er «stegstørrelsen» – for stor og du hopper over dalen, for liten og treningen tar evigheter. Adaptiv learning rate (Adam optimizer) justerer automatisk.

## Hvordan fungerer det

Loss + gradient descent trener modellen iterativt.

```
Steg 1: Modell mottar input "Hovedstaden i Norge er ___"
Steg 2: Modell predikerer "Bergen" (feil)
Steg 3: Loss function: sammenlign "Bergen" med "Oslo" → Loss = 2,3 (høy feil)
Steg 4: Backpropagation: beregn gradienter for alle parametere
Steg 5: Gradient descent: juster parametere litt i retning som reduserer loss
Steg 6: Gjenta med neste datapunkt

Etter milliarder av steg:
Input: "Hovedstaden i Norge er ___"
Prediksjon: "Oslo" → Loss = 0,01 (nesten perfekt)
```

For GPT-4 med 1,8 billioner parametere: gradient descent justerer ALLE 1,8 billioner tall, for HVER batch med treningsdata, over flere måneder. Det krever tusenvis av GPU-er.

## Hvorfor er det viktig

Loss function og gradient descent er fundamentet for ALL maskinlæring – fra lineær regresjon til GPT-4. Uten dem er AI-trening umulig. Valget av loss function påvirker hva modellen optimaliserer for (nøyaktighet? kreativitet? sikkerhet?), og innstillingen av gradient descent (learning rate, optimizer) avgjør om treningen konvergerer eller feiler.

## Eksempler

Språkmodell: Loss function = «hvor sannsynlig var riktig neste ord?» Gradient descent justerer alle parametere for å øke sannsynligheten for riktige ord og senke den for feil.

Bildeklassifisering: Loss = «hvor sikker var modellen på riktig klasse?» Gradient descent justerer filtre for å bli bedre til å skille katter fra hunder.

Overfitting-signal: Trening-loss synker kontinuerlig, men validering-loss begynner å stige – modellen overfitter. Stop treningen.

## Vanlige spørsmål

### Trenger jeg å forstå dette for å bruke AI?
Nei – men det hjelper å forstå prinsippet. Det forklarer hvorfor trening er dyrt (milliarder av gradient descent-steg), hvorfor modeller kan ha bias (loss-funksjonen optimaliserer for treningsdata) og hvorfor finjustering fungerer.

### Hva er Adam optimizer?
Den mest brukte gradient descent-varianten – tilpasser learning rate automatisk for hvert parameter. Nesten alle moderne modeller bruker Adam eller varianter.

### Hva skjer hvis loss ikke synker?
Modellen lærer ikke – vanligvis pga for høy learning rate (hopper over minimum), for lite data, eller feil arkitektur. Diagnostisering er en kjernekompetanse.

## Relaterte begreper

- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – det gradient descent justerer
- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – arkitekturen loss propagerer gjennom
- [Overfitting](/ai/hva-er-overfitting) – når loss-kurven forteller en historie
- [Treningsdata](/ai/hva-er-treningsdata) – det loss beregnes fra
- [Maskinlæring](/ai/hva-er-maskinlaering) – den overordnede prosessen

## Se også

- [Hva er parametere og vekter?](/ai/hva-er-parametere-og-vekter)
- [Hva er maskinlæring?](/ai/hva-er-maskinlaering)

## Oppsummering

Loss function måler feil, gradient descent reduserer den – sammen driver de all AI-trening. Backpropagation beregner gradienter gjennom nettverket. Learning rate bestemmer stegstørrelse. Etter milliarder av steg konvergerer modellen mot lavest mulig feil. Det er fundamentet for ALL maskinlæring – fra enkleste regresjon til GPT-4 med 1,8 billioner parametere.
