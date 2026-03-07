---
title: "Hva er RNN og LSTM?"
slug: "hva-er-rnn-lstm"
category: "ai"
subcategory: "maskinlaering"
description: "RNN og LSTM er nevralnettverk-arkitekturer for sekvensielle data som ble brukt før transformers. Lær hva de er, hvorfor de var viktige, og hvorfor transformers overtok."
keywords: ["RNN", "LSTM", "recurrent neural network", "sekvensiell", "hukommelse"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "RNN og LSTM"
aliases: ["Recurrent Neural Network", "Long Short-Term Memory"]
related: ["hva-er-transformer-arkitekturen", "hva-er-attention-mechanism", "hva-er-nevrale-nettverk", "hva-er-dyp-laering", "hva-er-maskinlaering"]
seeAlso: ["hva-er-transformer-arkitekturen", "hva-er-nevrale-nettverk"]
tags: ["RNN", "LSTM", "ai", "maskinlaering", "arkitektur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er RNN og LSTM?

RNN (Recurrent Neural Network) og LSTM (Long Short-Term Memory) er nevralnettverk-arkitekturer designet for sekvensielle data – tekst, tale, tidsserier – som var dominerende for språkoppgaver før transformer-arkitekturen overtok.

> **Kort forklart**
> Vanlige nevrale nettverk behandler hvert input uavhengig – de har ingen «hukommelse.» RNN løste dette: den sender output fra forrige steg tilbake som input til neste – en tilbakekoblingssløyfe som gir hukommelse. Problemet: RNN «glemmer» over lange sekvenser. LSTM løste det med en avansert hukommelsescelle. Men begge prosesserer ord sekvensielt (ett om gangen) – tregt. Transformers (2017) erstattet begge med parallell attention – dramatisk raskere og bedre. RNN/LSTM er nå historisk viktige men sjelden brukt for språk.

## Hva betyr begrepet

RNN (Recurrent Neural Network) har en tilbakekoblingssløyfe – output fra forrige tidssteg mates tilbake som input. Det gir en form for «hukommelse» – nettverket husker hva det nettopp har sett. Men hukommelsen er kortvarig – over lange sekvenser forsvinner informasjonen gradvis (vanishing gradient-problemet).

LSTM (Long Short-Term Memory, oppfunnet av Hochreiter & Schmidhuber, 1997) løste dette med en celletilstand (langtidshukommelse) og tre «porter» som styrer informasjonsflyten: forget gate (hva skal glemmes), input gate (hva ny info skal lagres), og output gate (hva skal brukes nå). LSTM kan huske informasjon over hundrevis av steg – dramatisk bedre enn vanlig RNN.

GRU (Gated Recurrent Unit) er en forenklet LSTM med færre parametere – raskere men noe svakere hukommelse.

## Hvordan fungerer det

RNN prosesserer ord sekvensielt med hukommelse.

```
RNN prosesserer "Katten satt på matten":
  Steg 1: "Katten" → output + skjult tilstand h1
  Steg 2: "satt" + h1 → output + h2
  Steg 3: "på" + h2 → output + h3
  Steg 4: "matten" + h3 → output + h4
  → Hvert steg «husker» litt fra forrige
  → Men informasjon fra steg 1 blekner ved steg 100

Transformer prosesserer ALLE ord parallelt med attention:
  "Katten satt på matten" → Attention mellom ALLE ordpar samtidig → Output
  → Raskere (parallelt) + bedre (direkte attention over hele sekvensen)
```

## Hvorfor er det viktig

RNN/LSTM var ryggraden i NLP fra ~2013 til 2018. Google Translate brukte LSTM. Siri og Alexa brukte LSTM for talegjenkjenning. Mange tidsseriemodeller brukte LSTM. «Attention Is All You Need» (2017) introduserte transformers og viste at attention alene (uten RNN) var overlegen – raskere, bedre for lange sekvenser, og parallelliserbar.

I dag brukes RNN/LSTM fortsatt for noen tidsserier (aksjeprediksjon, sensordata), sanntids talestrømming (lav-latens), og spesialiserte oppgaver der transformer er overkill. Men for språk er transformers den udiskutable standarden.

Det er en liten renessanse: nye arkitekturer som Mamba (State Space Models) kombinerer RNN-effektivitet med transformer-kvalitet – mulig neste evolusjon.

## Eksempler

Google Translate (2016): Byttet fra statistisk til LSTM-basert oversettelse – dramatisk kvalitetsforbedring. I 2020 byttet de til transformer.

Talegjenkjenning: Siri og Google Assistant brukte LSTM for tale-til-tekst. Nå bruker de transformer-baserte modeller (Whisper).

Mamba: En ny arkitektur (2023) som kombinerer RNN-hastighet med transformer-kvalitet – prosesserer sekvenser lineært (ikke kvadratisk). Potensielt neste gjennombrudd.

## Vanlige spørsmål

### Er RNN/LSTM fortsatt relevant?
For språk: nei – transformers har overtatt fullstendig. For tidsserier og spesialiserte oppgaver: ja, RNN/LSTM er fortsatt nyttige.

### Hva var problemet med RNN?
Vanishing gradient – informasjon forsvinner gradvis over lange sekvenser. LSTM løste dette delvis med porter og celletilstand.

### Hva er Mamba?
En State Space Model som kombinerer RNN-ens lineære skalering med transformer-kvalitet – prosesserer lange sekvenser effektivt. Potensielt neste store arkitektur.

## Relaterte begreper

- [Transformer-arkitekturen](/ai/hva-er-transformer-arkitekturen) – det som erstattet RNN/LSTM
- [Attention mechanism](/ai/hva-er-attention-mechanism) – nøkkelinnovasjonen
- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – den bredere kategorien
- [Dyp læring](/ai/hva-er-dyp-laering) – RNN/LSTM er dype arkitekturer
- [Maskinlæring](/ai/hva-er-maskinlaering) – det overordnede feltet

## Se også

- [Hva er transformer-arkitekturen?](/ai/hva-er-transformer-arkitekturen)
- [Hva er nevrale nettverk?](/ai/hva-er-nevrale-nettverk)

## Oppsummering

RNN/LSTM var ryggraden i NLP før transformers – sekvensielle nettverk med hukommelse. RNN glemmer over lange sekvenser, LSTM løste det med porter og celletilstand. Transformers (2017) erstattet begge med parallell attention – raskere og bedre. RNN/LSTM brukes fortsatt for tidsserier. Mamba (State Space Model) kan bli neste evolusjon.
