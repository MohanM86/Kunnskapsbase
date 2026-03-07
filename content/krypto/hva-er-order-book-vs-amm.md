---
title: "Hva er order book vs AMM?"
slug: "hva-er-order-book-vs-amm"
category: "krypto"
subcategory: "grunnleggende"
description: "Order book matcher kjøpere og selgere direkte, AMM bruker likviditetspooler og formler. Lær forskjellen mellom de to handelsmodellene og når du bør bruke hvilken."
keywords: ["order book", "AMM", "ordrebok", "automated market maker", "likviditetspool"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Order book vs AMM"
aliases: ["ordrebok vs AMM", "CLOB vs AMM"]
related: ["hva-er-uniswap", "hva-er-hyperliquid", "hva-er-liquidity", "hva-er-impermanent-loss", "hva-er-cex-og-dex"]
seeAlso: ["hva-er-uniswap", "hva-er-hyperliquid"]
tags: ["order book", "AMM", "krypto", "grunnleggende"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er order book vs AMM?

Order book og AMM (Automated Market Maker) er de to fundamentale modellene for å matche kjøpere og selgere i kryptohandel – order book fungerer som et tradisjonelt aksjemarked, AMM bruker matematiske formler og likviditetspooler.

> **Kort forklart**
> Order book: du legger inn «kjøp 1 ETH for 2 000 USDC» – systemet finner en selger med matchende pris. Binance og Hyperliquid bruker ordrebøker. AMM: det finnes ingen ordrebok – du handler mot en pool av tokens, og en matematisk formel (x × y = k) bestemmer prisen. Uniswap og PancakeSwap bruker AMM. Ordrebøker gir presise priser og lavere slippage for store handler. AMM-er er enklere, permissionless og fungerer uten aktive market makers.

## Hva betyr begrepet

Order book (ordrebok) er den tradisjonelle modellen. Kjøpere legger inn «bids» (kjøpsordre med pris). Selgere legger inn «asks» (salgsordre med pris). Systemet matcher når bid ≥ ask. Ordredybde viser alle ventende ordrer. Market makers (profesjonelle aktører) tilfører likviditet ved å legge inn ordrer på begge sider.

Brukes av alle sentraliserte børser (Binance, Coinbase, Kraken) og noen desentraliserte (Hyperliquid, dYdX). Fordeler er presise priser, lavere slippage for store handler, komplekse ordretyper (limit, stop-loss, OCO), og ingen impermanent loss. Ulemper er at det krever aktive market makers, er vanskelig å kjøre on-chain (dyrt i gas), og at nye tokens kan ha tom ordrebok (ingen likviditet).

AMM (Automated Market Maker) erstattet ordreboken med en formel. Likviditetstilbydere (LPer) deponerer tokenpar i pooler (f.eks. ETH + USDC). Prisen bestemmes av forholdet mellom tokens i poolen (x × y = k). Tradere handler mot poolen – ingen ordrematchning.

Brukes av Uniswap, PancakeSwap, Curve, SushiSwap. Fordeler er permissionless (hvem som helst kan opprette en pool og liste en token), alltid likvid (så lenge poolen har tokens), enkel for brukere (ingen ordretyper), og desentralisert (ingen market maker nødvendig). Ulemper er impermanent loss for LPer, høyere slippage for store handler, ineffektiv kapitalbruk (likviditet spredt over hele prisområdet – løst med Uniswap v3 konsentrert likviditet), og sårbar for sandwich attacks.

## Hvordan fungerer det

To fundamentalt ulike tilnærminger til prisoppdagelse.

```
Order book:
Kjøper: "Kjøp 1 ETH @ 2 000 USDC"
Selger: "Selg 1 ETH @ 2 000 USDC"
→ Match! → Handel utført → Pris: 2 000

AMM:
Pool: 100 ETH + 200 000 USDC (k = 20 000 000)
Du vil kjøpe 1 ETH
Pool etter: 99 ETH + ~202 020 USDC
Pris: ~2 020 USDC per ETH (litt dyrere pga prisimpakt)
```

Hybridmodeller vokser: Uniswap v3 (konsentrert likviditet – LPer velger prisområde, ligner ordrebok), Maverick Protocol (automatisk konsentrert likviditet), og DODO (proaktiv market maker – hybrid AMM/ordrebok).

## Hvorfor er det viktig

Valget mellom order book og AMM påvirker pris, slippage og risiko. For store handler: ordrebok gir bedre pris. For nye/eksotiske tokens: AMM er ofte eneste alternativet. For passiv likviditetstilby: AMM gir gebyrinntekter (med IL-risiko). For aktiv trading: ordrebok gir flere verktøy.

DeFi startet med AMM (Uniswap 2018) fordi ordrebøker var for dyre on-chain. Med L2 og nye kjeder blir on-chain ordrebøker mulige (Hyperliquid, dYdX). Trenden er konvergens – fremtidens DEX-er kombinerer begge modeller.

## Eksempler

Uniswap (AMM): Du swapper ETH → USDC. Ingen ordrebok – du handler mot poolen. Enkelt, raskt, men 0,5 prosent slippage på 50 000 kr handel.

Hyperliquid (ordrebok): Du legger en limitordre for å kjøpe ETH @ nøyaktig 1 950 USDC. Ordren venter i ordreboken til en selger matcher. Ingen slippage – du får nøyaktig din pris.

Curve (spesialisert AMM): Optimalisert for stablecoin-swaps (USDC ↔ USDT) med minimal slippage – AMM tilpasset par med nær-lik pris.

## Vanlige spørsmål

### Hvilken modell er best?
Avhenger av behov. Stor handel: ordrebok. Ny token uten ordrebok: AMM. Passiv inntekt: AMM (som LP). Aktiv trading med ordretyper: ordrebok.

### Kan AMM-er ha nullslippage?
Nei – slippage er innebygd i formelen. Men konsentrert likviditet (Uniswap v3) og store pooler minimerer det. For stablecoins (Curve) er slippage nær null.

### Hva er en market maker?
En profesjonell aktør som legger inn kjøps- og salgsordre for å gi likviditet i en ordrebok. De tjener på bid-ask spreaden. I AMM erstattes market makers av likviditetstilbydere.

## Relaterte begreper

- [Uniswap](/krypto/hva-er-uniswap) – den største AMM-baserte DEX
- [Hyperliquid](/krypto/hva-er-hyperliquid) – on-chain ordrebok DEX
- [Liquidity](/krypto/hva-er-liquidity) – begge modellers livblod
- [Impermanent loss](/krypto/hva-er-impermanent-loss) – AMM-spesifikk risiko
- [CEX og DEX](/krypto/hva-er-cex-og-dex) – CEX bruker ordrebok, DEX bruker oftest AMM

## Se også

- [Hva er Uniswap?](/krypto/hva-er-uniswap)
- [Hva er Hyperliquid?](/krypto/hva-er-hyperliquid)

## Oppsummering

Order book matcher kjøpere og selgere direkte (Binance, Hyperliquid) – presise priser, lavere slippage. AMM bruker likviditetspooler og formler (Uniswap, Curve) – enklere, permissionless, men med impermanent loss og slippage. Trenden er konvergens: hybridmodeller og konsentrert likviditet. Valget avhenger av handelsstørrelse, token-tilgjengelighet og om du er trader eller likviditetstilbyder.
