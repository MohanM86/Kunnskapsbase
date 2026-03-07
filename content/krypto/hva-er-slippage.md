---
title: "Hva er slippage?"
slug: "hva-er-slippage"
category: "krypto"
subcategory: "grunnleggende"
description: "Slippage er forskjellen mellom forventet og faktisk pris ved en handel. Lær hva slippage er, hvorfor det skjer på DEX-er, og hvordan du minimerer det."
keywords: ["slippage", "prisforskjell", "slippage tolerance", "prisimpakt", "DEX"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Slippage"
aliases: ["prisglidning", "prisavvik"]
related: ["hva-er-liquidity-pool", "hva-er-uniswap", "hva-er-liquidity", "hva-er-sandwich-attack", "hva-er-mev"]
seeAlso: ["hva-er-liquidity-pool", "hva-er-liquidity"]
tags: ["slippage", "krypto", "grunnleggende", "handel"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er slippage?

Slippage er forskjellen mellom prisen du forventer å få og prisen du faktisk får når en handel utføres – forårsaket av endrede markedsforhold mellom du sender ordren og den utføres.

> **Kort forklart**
> Du ser at 1 ETH = 2 000 USDC på Uniswap og trykker «swap». Men i de sekundene mellom klikk og utførelse har prisen endret seg litt – du får 1 985 USDC. De 15 USDC er slippage (0,75 prosent). I likvide markeder (BTC/USDC på Binance) er slippage nesten null. I illikvide markeder (ny memecoin) kan slippage være 10–50 prosent. Slippage tolerance er maksimum du aksepterer – sett den lavt.

## Hva betyr begrepet

Slippage oppstår av to grunner. Prisimpakt er at din handel er stor nok til å bevege prisen i en AMM-pool (jo større handel relativt til pool, desto mer prisimpakt). Markedsbevegelse er at prisen endres mellom du sender transaksjonen og den utføres (spesielt i volatile markeder).

Slippage tolerance er innstillingen i DEX-grensesnittet som angir maksimalt akseptabelt avvik. 0,5 prosent betyr at du aksepterer opptil 0,5 prosent dårligere pris enn vist. Hvis faktisk slippage overstiger toleransen, reverseres transaksjonen (du betaler gas men mister ikke mer).

Viktig: sandwich-bots utnytter din slippage tolerance. Hvis du setter 5 prosent, kan en bot presse prisen 4,9 prosent mot deg og tjene differansen. Sett alltid slippage tolerance så lavt som mulig (0,1–1 prosent for likvide par, 3–5 prosent for illikvide).

## Hvordan fungerer det

Slippage er prisavviket mellom forventning og virkelighet.

```
Du vil swap 10 ETH → USDC
Vist pris: 2 000 USDC/ETH = 20 000 USDC
Slippage tolerance: 1 %
Minimumsutgang: 19 800 USDC

Scenario A (lavt slippage): Du mottar 19 940 USDC (0,3 % slippage) ✓
Scenario B (akseptabelt): Du mottar 19 810 USDC (0,95 % slippage) ✓
Scenario C (for mye): Beregnet utgang 19 700 USDC (1,5 % slippage) → Reversert ✗
```

Faktorer som påvirker slippage er poolstørrelse/likviditet (større pool = lavere slippage), handelsstørrelse relativt til pool (stor handel i liten pool = høy slippage), volatilitet (volatile markeder = mer prisbevegelse under utførelse), og nettverkshastighet (tregere kjeder = mer tid for prisbevegelse).

## Hvorfor er det viktig

Slippage er en skjult kostnad som spiser gevinst. En 2 prosent slippage på en 50 000 kr handel koster deg 1 000 kr – ofte uten at du merker det. For aktive DeFi-brukere kan slippage utgjøre tusenvis av kroner årlig.

Minimering: bruk DEX-aggregatorer (1inch, CowSwap) som finner beste rute, sett lavt slippage tolerance, del store handler i mindre (reduserer prisimpakt), handel i rolige markeder, og bruk limit-ordrer der mulig.

## Eksempler

Lav slippage: Du swapper 1 000 USDC til ETH i en pool med 100 millioner TVL. Prisimpakt: 0,001 prosent. Nesten ingen slippage.

Høy slippage: Du swapper 50 000 USDC til en ny memecoin i en pool med 200 000 TVL. Prisimpakt: 15 prosent. Du betaler drastisk overpris.

Sandwich: Du setter 5 prosent slippage tolerance. Bot sandwicher deg og tar 4 prosent. Du mister 2 000 kr uten å forstå det. Hadde du satt 0,5 prosent, ville boten ikke hatt nok plass.

## Vanlige spørsmål

### Hva bør slippage tolerance være?
0,1–0,5 prosent for store, likvide par (ETH/USDC). 1–3 prosent for middelstore tokens. 3–5 prosent for illikvide/nye tokens. Aldri over 5 prosent uten god grunn.

### Hva er forskjellen på slippage og prisimpakt?
Prisimpakt er din handels påvirkning på poolens pris (forutsigbar, beregnet). Slippage inkluderer prisimpakt + markedsbevegelse + MEV (totalt avvik).

### Kan slippage være positivt?
Ja – «positive slippage» betyr at du fikk bedre pris enn forventet. Det skjer når prisen beveger seg i din favør mellom sending og utførelse. Sjeldnere enn negativ.

### Har ordrebok-børser slippage?
Minimal – market orders kan ha noe slippage ved lav ordredybde. Limit orders har null slippage (du får nøyaktig din pris, eller ingen handel).

## Relaterte begreper

- [Liquidity pool](/krypto/hva-er-liquidity-pool) – der slippage oppstår
- [Uniswap](/krypto/hva-er-uniswap) – den mest brukte AMM med slippage
- [Liquidity](/krypto/hva-er-liquidity) – mer likviditet = mindre slippage
- [Sandwich attack](/krypto/hva-er-sandwich-attack) – utnytter slippage tolerance
- [MEV](/krypto/hva-er-mev) – slippage er en MEV-vektor

## Se også

- [Hva er liquidity pool?](/krypto/hva-er-liquidity-pool)
- [Hva er liquidity?](/krypto/hva-er-liquidity)

## Oppsummering

Slippage er forskjellen mellom forventet og faktisk handelspris – forårsaket av prisimpakt og markedsbevegelse. Høy i illikvide markeder, lav i likvide. Sett slippage tolerance lavt (0,1–1 prosent for likvide par) for å unngå MEV-utnyttelse. Bruk DEX-aggregatorer og del store handler. Slippage er en skjult kostnad som spiser gevinst.
