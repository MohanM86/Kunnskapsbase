---
title: "Hva er liquidity pool?"
slug: "hva-er-liquidity-pool"
category: "krypto"
subcategory: "defi"
description: "Liquidity pool er en samling tokens låst i en smart kontrakt som muliggjør handel på DEX-er. Lær hva det er, LP tokens, og sammenhengen med AMM."
keywords: ["liquidity pool", "likviditetspool", "LP", "AMM", "Uniswap pool"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Liquidity pool"
aliases: ["likviditetspool", "LP pool", "token pool"]
related: ["hva-er-uniswap", "hva-er-impermanent-loss", "hva-er-yield-farming", "hva-er-order-book-vs-amm", "hva-er-liquidity"]
seeAlso: ["hva-er-uniswap", "hva-er-impermanent-loss"]
tags: ["liquidity pool", "krypto", "defi", "AMM"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er liquidity pool?

Liquidity pool (likviditetspool) er en samling av to eller flere tokens låst i en smart kontrakt som muliggjør desentralisert handel – kjernen i alle AMM-baserte DEX-er som Uniswap, Curve og PancakeSwap.

> **Kort forklart**
> I en ordrebok trenger du en kjøper OG en selger som er enige om pris. I en likviditetspool trenger du bare poolen. Du handler mot den – en pott med tokens som andre brukere har deponert. ETH/USDC-poolen på Uniswap inneholder milliarder i verdi. Du swapper ETH mot USDC i poolen, og en matematisk formel bestemmer prisen. De som deponerte tokens (likviditetstilbydere) tjener en andel av handelsgebyrene.

## Hva betyr begrepet

En liquidity pool er et tokenpar (f.eks. ETH + USDC) deponert i en smart kontrakt. Prisen bestemmes av forholdet mellom tokenene (constant product formula: x × y = k for Uniswap v2). Tradere handler mot poolen (ikke mot andre tradere). Likviditetstilbydere (LPer) deponerer tokens og tjener gebyrbelønning.

Nøkkelbegreper er LP token (kvitteringstoken du mottar når du deponerer – beviser din andel av poolen), pool ratio (forholdet mellom tokens bestemmer prisen), TVL (Total Value Locked – samlet verdi i poolen), og pool fee (typisk 0,01–1 prosent per swap, fordelt mellom LPer).

Uniswap v3 introduserte konsentrert likviditet – LPer velger et prisområde der de vil gi likviditet. Det gir høyere kapitaleffektivitet men økt impermanent loss-risiko og kompleksitet.

Curve spesialiserer seg på stablecoins – pooler designet for par med nær-lik pris (USDC/USDT) med minimal slippage.

## Hvordan fungerer det

Likviditetspooler erstatter ordreboken med en smart kontrakt og formel.

```
LP deponerer 10 ETH + 20 000 USDC → Mottar LP tokens → Poolen har nå likviditet

Trader swapper 1 ETH → USDC:
Pool før: 10 ETH + 20 000 USDC (k = 200 000)
Pool etter: 11 ETH + ~18 182 USDC
Trader mottar: ~1 818 USDC (minus 0,3 % gebyr)
Pris: ~1 818 USDC/ETH (litt dårligere enn «spotpris» pga prisimpakt)

LP gebyrinntekt: 0,3 % × 1 818 USDC = ~5,45 USDC
→ Fordeles proporsjonalt mellom alle LPer i poolen
```

Større pooler = lavere prisimpakt = lavere slippage for tradere. ETH/USDC-poolen på Uniswap har milliarder i TVL – selv store handler gir minimal slippage.

## Hvorfor er det viktig

Liquidity pools muliggjorde hele DeFi-revolusjonen. Uten dem ingen Uniswap, ingen AMM-er, ingen permissionless handel. Hvem som helst kan opprette en pool for ethvert tokenpar – det er det som gjør DEX-er tillatelsesløse.

For LPer er det en avkastningskilde – gebyrinntekter fra handel. Men impermanent loss er den store risikoen: når tokenpriser divergerer, taper du verdi sammenlignet med å bare holde. Over 50 prosent av Uniswap v3 LPer taper penger etter IL.

## Eksempler

Uniswap ETH/USDC: Du deponerer 5 ETH + 10 000 USDC. Du mottar LP tokens. Poolen genererer tusenvis av swaps daglig – du tjener din andel av gebyrene.

Curve 3pool: Du deponerer USDC, USDT og DAI i en stablecoin-pool. Minimal IL (alle er ~$1), stabil gebyrinntekt. Lavere avkastning men lavere risiko.

Ny token-pool: Et nytt prosjekt oppretter en ETH/TOKEN-pool på Uniswap med $50 000 i likviditet. Lav likviditet = høy slippage og potensielt rug pull-risiko.

## Vanlige spørsmål

### Hva er et LP token?
Kvitteringstokenet du mottar når du deponerer i en pool. Det representerer din eierandel. Du bruker det til å trekke ut dine tokens + akkumulerte gebyrer.

### Kan jeg tape penger som LP?
Ja – gjennom impermanent loss (prisdivergens) og smart-kontrakt-risiko. Gebyrinntektene kompenserer ofte, men ikke alltid.

### Hva er konsentrert likviditet?
I Uniswap v3 velger du et prisområde for din likviditet. Du tjener mer gebyrer innenfor området, men ingenting utenfor – og IL er høyere. Mer avansert.

### Hvordan beregnes prisen i en pool?
x × y = k (constant product). x = mengde token A, y = mengde token B, k = konstant. Når noen kjøper A, øker y og x synker – prisen endres proporsjonalt.

## Relaterte begreper

- [Uniswap](/krypto/hva-er-uniswap) – den største pool-baserte DEX
- [Impermanent loss](/krypto/hva-er-impermanent-loss) – LP-risikoen
- [Yield farming](/krypto/hva-er-yield-farming) – bruker pooler for avkastning
- [Order book vs AMM](/krypto/hva-er-order-book-vs-amm) – pooler er AMM-modellen
- [Liquidity](/krypto/hva-er-liquidity) – pooler ER likviditetskilden

## Se også

- [Hva er Uniswap?](/krypto/hva-er-uniswap)
- [Hva er impermanent loss?](/krypto/hva-er-impermanent-loss)

## Oppsummering

Liquidity pools er tokenpar i smart contracts som muliggjør desentralisert handel – kjernen i AMM-baserte DEX-er. LPer deponerer tokens og tjener gebyrer, men risikerer impermanent loss. Større pool = lavere slippage. LP tokens er kvitteringen for din andel. Pools muliggjorde DeFi-revolusjonen – men over halvparten av LPer taper etter IL.
