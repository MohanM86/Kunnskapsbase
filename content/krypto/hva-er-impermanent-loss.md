---
title: "Hva er impermanent loss?"
slug: "hva-er-impermanent-loss"
category: "krypto"
subcategory: "defi"
description: "Impermanent loss er verditapet likviditetstilbydere opplever når tokenpriser endrer seg i en DEX-pool. Lær hva det er, hvordan det beregnes, og hvordan du minimerer det."
keywords: ["impermanent loss", "IL", "LP risiko", "likviditetspool", "AMM"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Impermanent loss"
aliases: ["IL", "midlertidig tap", "LP-tap"]
related: ["hva-er-yield-farming", "hva-er-uniswap", "hva-er-liquidity", "hva-er-defi", "hva-er-staking"]
seeAlso: ["hva-er-yield-farming", "hva-er-uniswap"]
tags: ["impermanent loss", "krypto", "defi", "risiko"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er impermanent loss?

Impermanent loss (IL) er verditapet en likviditetstilbyder opplever sammenlignet med å bare holde tokenene – forårsaket av prisendringer i tokenene i en likviditetspool.

> **Kort forklart**
> Du deponerer ETH og USDC i en Uniswap-pool for å tjene handelsgebyrer. ETH dobler i pris. Du tenker «bra!» – men når du sjekker, har du tjent mindre enn om du bare hadde holdt ETH og USDC i lommeboken. Det er impermanent loss – poolen har automatisk solgt noe av din ETH (som steg) og kjøpt mer USDC (som sto stille). Gebyrinntektene kan kompensere, men ikke alltid.

## Hva betyr begrepet

Impermanent loss oppstår på grunn av hvordan AMM-er (Automated Market Makers) som Uniswap fungerer. Poolen opprettholder et konstant forhold mellom tokenene (x × y = k). Når prisen på ett token endrer seg, rebalanserer poolen automatisk – den selger det som stiger og kjøper det som faller.

Resultatet er at du ender opp med mindre av tokenet som steg i verdi og mer av det som falt (eller sto stille), sammenlignet med å bare holde. Tapet kalles «impermanent» fordi det reverseres hvis prisene returnerer til utgangspunktet – men det er «permanent» hvis du trekker ut likviditeten mens prisene er endret.

Talleksempel: du deponerer 1 ETH (2 000 kr) + 2 000 USDC. Totalt 4 000 kr. ETH dobler til 4 000 kr. Uten pool ville du hatt 1 ETH (4 000 kr) + 2 000 USDC = 6 000 kr. Med pool har du ~0,7 ETH (2 800 kr) + 2 828 USDC = 5 628 kr. Impermanent loss = 372 kr (6,2 prosent). Gebyrinntektene må utgjøre mer enn 372 kr for at det var lønnsomt å være LP.

IL øker med prisforskjellen: 1,25× prisendring gir 0,6 prosent IL, 1,5× gir 2,0 prosent, 2× gir 5,7 prosent, 3× gir 13,4 prosent, og 5× gir 25,5 prosent.

## Hvordan fungerer det

AMM rebalanserer automatisk – og det koster deg verdi sammenlignet med å bare holde.

```
Du deponerer ETH + USDC → ETH-prisen stiger → Arbitragører kjøper billig ETH fra poolen → Poolen har nå mindre ETH, mer USDC → Du eier en annen sammensetning enn du startet med → Verdien er lavere enn bare-hold → Det er impermanent loss
```

Kompensasjonen er handelsgebyrer (0,3 prosent per swap i Uniswap v2) og eventuelle token-belønninger (incentivprogrammer). Hvis gebyrer + belønninger > IL, er du i pluss.

Strategier for å minimere IL: bruk stablecoin-par (USDC/USDT – minimal prisforskjell = minimal IL), bruk konsentrerte likviditetsposisjoner (Uniswap v3 – høyere gebyrer men høyere IL-risiko), og velg par med høyt handelsvolum relativt til TVL (mer gebyrer per LP-dollar).

## Hvorfor er det viktig

Impermanent loss er den mest misforståtte risikoen i DeFi. Mange ser «30 prosent APY» og ignorerer at IL kan spise opp hele gevinsten – eller mer. Å forstå IL er nødvendig for å vurdere om likviditetstilby faktisk er lønnsomt.

Studier viser at over 50 prosent av Uniswap v3 likviditetstilbydere taper penger når IL tas med – de ville vært bedre tjent med å bare holde tokenene.

## Eksempler

Lønnsom LP: Du er LP i USDC/USDT-pool med 0,01 prosent gebyr. Prisforskjellen er minimal (begge ~$1), IL er tilnærmet null, og gebyrinntektene er ren profitt.

Ulønnsom LP: Du er LP i ETH/USDC. ETH tredobler seg i en bull market. IL er 13,4 prosent – gebyrinntektene var bare 8 prosent. Du tapte 5,4 prosent sammenlignet med å bare holde.

IL-kalkulator: Verktøy som impermanentloss.org lar deg beregne IL for ulike prisscenarier før du deponerer.

## Vanlige spørsmål

### Kan impermanent loss bli permanent?
Ja – hvis du trekker ut likviditeten mens prisene er endret. Tapet «låses inn». Hvis du holder og prisene returnerer til utgangspunktet, forsvinner IL.

### Er IL den eneste risikoen for LPer?
Nei. Smart-kontrakt-risiko, rug pulls (for ukjente tokens), og token-verdifall er også reelle risikoer.

### Hvordan unngår jeg IL?
Bruk stablecoin-par (minimal IL), velg høyvolum-pooler (mer gebyrer), eller bruk IL-beskyttede protokoller (Bancor har forsøkt dette, med varierende suksess).

### Gjelder IL for alle DEX-er?
Ja – alle AMM-baserte DEX-er (Uniswap, PancakeSwap, Curve) har IL. Ordrebok-DEX-er (Hyperliquid) har ikke IL fordi de ikke bruker likviditetspooler.

## Relaterte begreper

- [Yield farming](/krypto/hva-er-yield-farming) – der IL er en sentral risiko
- [Uniswap](/krypto/hva-er-uniswap) – den største AMM-baserte DEX
- [Liquidity](/krypto/hva-er-liquidity) – det du tilfører som LP
- [DeFi](/krypto/hva-er-defi) – økosystemet IL forekommer i
- [Staking](/krypto/hva-er-staking) – enklere avkastning uten IL

## Se også

- [Hva er yield farming?](/krypto/hva-er-yield-farming)
- [Hva er Uniswap?](/krypto/hva-er-uniswap)

## Oppsummering

Impermanent loss er verditapet LPer opplever når tokenpriser endrer seg i en AMM-pool. Jo større prisforskjell, desto større IL. Gebyrer og belønninger kan kompensere – men studier viser at over halvparten av LPer taper. Bruk stablecoin-par for minimal IL, og beregn alltid IL før du deponerer.
