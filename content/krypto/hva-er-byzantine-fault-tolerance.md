---
title: "Hva er Byzantine Fault Tolerance?"
slug: "hva-er-byzantine-fault-tolerance"
category: "krypto"
subcategory: "grunnleggende"
description: "Byzantine Fault Tolerance er et systems evne til å fungere selv når noen deltakere er uærlige. Lær hva BFT er, Byzantine Generals' Problem, og sammenhengen med blockchain."
keywords: ["Byzantine Fault Tolerance", "BFT", "Byzantine Generals Problem", "konsensus", "feiltoleranse"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Byzantine Fault Tolerance"
aliases: ["BFT", "bysantinsk feiltoleranse"]
related: ["hva-er-proof-of-work", "hva-er-proof-of-stake", "hva-er-blockchain", "hva-er-node", "hva-er-bitcoin"]
seeAlso: ["hva-er-proof-of-work", "hva-er-blockchain"]
tags: ["BFT", "krypto", "grunnleggende", "konsensus"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er Byzantine Fault Tolerance?

Byzantine Fault Tolerance (BFT) er et distribuert systems evne til å oppnå korrekt konsensus selv når noen deltakere er uærlige, defekte eller forsøker å sabotere – det fundamentale problemet blockchain løser.

> **Kort forklart**
> Forestill deg generaler i det bysantinske riket som omringer en fiendtlig by. De må koordinere angrep – alle angriper eller alle trekker seg tilbake. Men noen generaler kan være forrædere som sender motstridende meldinger. Hvordan oppnår de enighet uten tillit? Det er «Byzantine Generals' Problem». Satoshi Nakamoto løste det med Proof of Work – og skapte Bitcoin. Blockchain er i essens en BFT-løsning: et system som fungerer korrekt selv om noen deltakere jukser.

## Hva betyr begrepet

Byzantine Generals' Problem ble formalisert av Leslie Lamport, Robert Shostak og Marshall Pease i 1982. Det beskriver utfordringen med å oppnå konsensus i et distribuert system der noen deltakere (noder) kan være ondsinnede, defekte, sende motstridende meldinger, eller unnlate å svare.

Et system er Byzantine Fault Tolerant hvis det fungerer korrekt så lenge færre enn 1/3 av deltakerne er ondsinnede. Det betyr at med 100 noder kan systemet tåle opptil 33 ondsinnede noder og fortsatt oppnå korrekt konsensus.

Blockchain-løsningene på BFT er Proof of Work (Bitcoin) der angrep krever 51 prosent av datakraften – astronomisk dyrt. Proof of Stake (Ethereum) der angrep krever 33 prosent av staket verdi – milliarder av dollar. Practical BFT (Tendermint/Cosmos) er en direkte implementering av BFT-konsensus for blokkjeder. Federated BFT (Stellar) bruker betrodde noder for raskere konsensus.

## Hvordan fungerer det

BFT sikrer konsensus til tross for uærlige deltakere.

```
Byzantine Generals' Problem:
General A: "Angrip!" → Sender til B, C, D
General B (forræder): "Angrip!" til C, "Trekk tilbake!" til D
General C: Mottar "Angrip" fra A og B → Angriper
General D: Mottar "Angrip" fra A, "Trekk tilbake" fra B → Forvirret

BFT-løsning: Flertallsavgjørelse med ≥2/3 ærlige deltakere → Korrekt konsensus oppnås
```

Bitcoin løste det elegant: i stedet for avstemning bruker den beviselig arbeid (energi). Å jukse krever mer energi enn hele det ærlige nettverket – praktisk umulig.

## Hvorfor er det viktig

BFT er det teoretiske grunnlaget for ALL blokkjedeteknologi. Uten BFT er desentralisert konsensus umulig. Satoshis gjennombrudd var ikke å oppfinne BFT – det var å finne en praktisk, skalerbar løsning (PoW) som gjør det økonomisk umulig å bryte BFT-terskelen.

Ulike konsensusmekanismer har ulike BFT-egenskaper: PoW tolererer opptil 50 prosent ondsinnede (51 prosent-angrep). PoS tolererer opptil 33 prosent ondsinnede. Klassisk BFT tolererer opptil 33 prosent. Lavere terskel = raskere konsensus men færre tolererte forrædere.

## Eksempler

Bitcoin: En gruppe minere med 30 prosent av hashrate forsøker å lage en alternativ kjede. De mislykkes – den ærlige majoriteten (70 prosent) produserer blokker raskere. BFT fungerer.

Ethereum-angrep: For å bryte Ethereums BFT trenger en angriper 33 prosent av staket ETH – over 30 milliarder dollar. Økonomisk irrasjonelt.

Tendermint: Cosmos-kjeder bruker Tendermint BFT – rask konsensus med 2/3 flertall. Men hvis 1/3+ validatorer er ondsinnede, stopper kjeden.

## Vanlige spørsmål

### Hva er et 51 prosent-angrep?
Å kontrollere flertallet av nettverkets datakraft (PoW) eller stake (PoS) – nok til å bryte BFT og produsere falske blokker. Praktisk umulig for store nettverk.

### Kan BFT brytes?
Teoretisk ja – med nok ressurser. Praktisk nei for Bitcoin og Ethereum – kostnadene er astronomiske og profitten usikker (angrepet ville ødelegge verdien av det du stjeler).

### Hva er forskjellen på BFT og Crash Fault Tolerance?
CFT tåler noder som krasjer (slutter å svare). BFT tåler noder som aktivt jukser (sender falske meldinger). BFT er strengere og vanskeligere.

## Relaterte begreper

- [Proof of Work](/krypto/hva-er-proof-of-work) – Bitcoins BFT-løsning
- [Proof of Stake](/krypto/hva-er-proof-of-stake) – Ethereums BFT-løsning
- [Blockchain](/krypto/hva-er-blockchain) – et BFT-system
- [Node](/krypto/hva-er-node) – deltakerne i BFT-konsensus
- [Bitcoin](/krypto/hva-er-bitcoin) – den første praktiske BFT-løsningen

## Se også

- [Hva er Proof of Work?](/krypto/hva-er-proof-of-work)
- [Hva er blockchain?](/krypto/hva-er-blockchain)

## Oppsummering

Byzantine Fault Tolerance er et systems evne til å fungere korrekt selv med uærlige deltakere. Det er det fundamentale problemet blockchain løser. Bitcoin bruker PoW (51 prosent-terskel), Ethereum PoS (33 prosent-terskel). Satoshis gjennombrudd var å gjøre BFT praktisk og skalerbar – og dermed muliggjøre desentralisert konsensus uten tillit.
