---
title: "Hva er intents?"
slug: "hva-er-intents"
category: "krypto"
subcategory: "grunnleggende"
description: "Intents er en ny transaksjonsmodell der du uttrykker HVA du vil oppnå, og et nettverk av løsere finner den beste måten. Lær hva intents er og hvorfor det endrer DeFi."
keywords: ["intents", "intent-basert", "solver", "CowSwap", "transaksjonsintensjon"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Intents"
aliases: ["transaksjonsintensjon", "intent-basert arkitektur"]
related: ["hva-er-mev", "hva-er-account-abstraction", "hva-er-uniswap", "hva-er-sandwich-attack", "hva-er-defi"]
seeAlso: ["hva-er-mev", "hva-er-account-abstraction"]
tags: ["intents", "krypto", "grunnleggende", "avansert"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er intents?

Intents er en ny transaksjonsmodell i krypto der du uttrykker hva du vil oppnå («swap 1 ETH til maks USDC») i stedet for å spesifisere nøyaktig hvordan – og et nettverk av spesialiserte «solvers» (løsere) konkurrerer om å utføre intensjonen din best mulig.

> **Kort forklart**
> I dag sender du en spesifikk transaksjon: «swap 1 ETH til USDC via Uniswap V3 ETH/USDC-pool med 0,5 prosent slippage.» Med intents sier du bare: «Jeg vil ha maks USDC for 1 ETH.» Solvers konkurrerer om å finne den beste ruten – kanskje via Uniswap + Curve + en privat market maker. Du får bedre pris, MEV-beskyttelse og enklere UX. CowSwap, UniswapX og Across bruker intents allerede. Det er neste evolusjon av DeFi-handel.

## Hva betyr begrepet

Tradisjonelt sender du transaksjoner – eksakte instruksjoner som utføres steg for steg on-chain. Du bestemmer hvilken DEX, hvilken pool, og hvilken rute. Med intents uttrykker du en intensjon – et ønsket utfall uten å spesifisere implementasjonen.

Nøkkelroller i intent-arkitekturen er bruker (uttrykker intensjon – «swap X til Y, maks slippage Z»), solver (spesialisert aktør som finner beste utførelsesvei), auksjon (solvers konkurrerer om å gi brukeren best pris), og settlement (den vinnende solveren utfører on-chain).

Intent-baserte protokoller er CowSwap (pioner – Coincidence of Wants + solver-auksjon, MEV-beskyttet), UniswapX (Uniswaps intent-lag – solvers konkurrerer om å fylle dine swaps), Across (intent-basert bridging – raskere og billigere enn tradisjonelle bridges), og 1inch Fusion (solver-basert swap-utførelse).

## Hvordan fungerer det

Intents separerer «hva du vil» fra «hvordan det gjøres».

```
Tradisjonelt:
Du → Spesifiserer eksakt transaksjon → Sender til mempool → MEV-bot sandwicher → Du får dårligere pris

Intent-basert:
Du → Signerer intensjon ("swap 1 ETH → maks USDC") → Solvers mottar → Solver A: 2 010 USDC (via Uniswap) → Solver B: 2 025 USDC (via privat likviditet) → Solver C: 2 018 USDC (via Curve) → Auksjon: Solver B vinner → Du får 2 025 USDC → Bedre pris, ingen sandwich
```

CowSwaps «Coincidence of Wants» (CoW) er spesielt elegant: hvis bruker A vil bytte ETH→USDC og bruker B vil bytte USDC→ETH, matcher solveren dem direkte – ingen AMM-pool, null slippage, null MEV.

## Hvorfor er det viktig

Intents løser tre store DeFi-problemer samtidig. MEV-beskyttelse gjør at din transaksjon aldri er i offentlig mempool – solvers utfører privat, sandwich-bots kan ikke se den. Prisoptimering gjør at solvers konkurrerer – du får bedre pris enn du selv kunne finne manuelt. UX-forenkling gjør at du trenger ikke vite hvilken DEX, pool eller rute som er best – systemet finner det.

Intent-basert arkitektur er også nøkkelen til cross-chain UX: «Jeg vil ha USDC på Arbitrum fra min ETH på Ethereum» – solveren håndterer bridging, swap og alt imellom.

Det er tidlig – solvers er ennå relativt få og sentraliserte. Men retningen er tydelig: intents er DeFi-handelens fremtid.

## Eksempler

CowSwap: Du swapper 5 000 USDC til ETH via CowSwap. Solvers konkurrerer – du får 0,3 prosent bedre pris enn direkte Uniswap-swap, uten sandwich-risiko.

UniswapX: Du handler via Uniswap-grensesnittet, men i bakgrunnen fylles ordren av solvers via UniswapX – du merker det knapt, men får bedre pris.

Cross-chain intent: Du vil flytte midler fra Ethereum til Arbitrum. Across-solveren utfører bridging + swap i én operasjon – raskere og billigere enn manuell bridging.

## Vanlige spørsmål

### Er intents bedre enn vanlige swaps?
Generelt ja – bedre pris og MEV-beskyttelse. Men systemet er avhengig av aktive solvers. For veldig store handler kan solvers ha begrensninger.

### Er intents desentralisert?
Delvis – solver-settet er foreløpig begrenset (10–50 aktive solvers). Det er mer sentralisert enn en offentlig AMM. Desentralisering av solver-nettverket er en pågående utvikling.

### Kan jeg bruke intents nå?
Ja – CowSwap og UniswapX er live. Du bruker dem via vanlige swap-grensesnitt. For CowSwap: swap.cow.fi. For UniswapX: det er innebygd i Uniswap-appen.

### Hva er en solver?
En spesialisert aktør (ofte en bot/firma) som finner optimal utførelsesvei for din intensjon og konkurrerer med andre solvers om å gi deg best pris.

## Relaterte begreper

- [MEV](/krypto/hva-er-mev) – det intents beskytter mot
- [Account abstraction](/krypto/hva-er-account-abstraction) – komplementær UX-forbedring
- [Uniswap](/krypto/hva-er-uniswap) – UniswapX bruker intents
- [Sandwich attack](/krypto/hva-er-sandwich-attack) – eliminert av intents
- [DeFi](/krypto/hva-er-defi) – der intents endrer handelmodellen

## Se også

- [Hva er MEV?](/krypto/hva-er-mev)
- [Hva er account abstraction?](/krypto/hva-er-account-abstraction)

## Oppsummering

Intents er en ny modell der du uttrykker hva du vil oppnå, og solvers konkurrerer om å utføre det best mulig – bedre pris, MEV-beskyttelse og enklere UX. CowSwap og UniswapX er live. Det løser MEV-problemet, forbedrer priser og forenkler cross-chain operasjoner. Det er DeFi-handelens neste evolusjon – tidlig, men retningen er klar.
