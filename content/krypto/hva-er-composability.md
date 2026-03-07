---
title: "Hva er composability i DeFi?"
slug: "hva-er-composability"
category: "krypto"
subcategory: "defi"
description: "Composability betyr at DeFi-protokoller kan kombineres som legoklosser. Lær hva det er, money legos, og hvorfor det gjør DeFi fundamentalt annerledes enn tradisjonell finans."
keywords: ["composability", "money legos", "DeFi legoklosser", "sammensettbarhet", "interoperabel DeFi"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Composability"
aliases: ["sammensettbarhet", "money legos", "DeFi-legoklosser"]
related: ["hva-er-defi", "hva-er-smart-contract", "hva-er-flash-loan", "hva-er-yield-farming", "hva-er-ethereum"]
seeAlso: ["hva-er-defi", "hva-er-smart-contract"]
tags: ["composability", "krypto", "defi", "arkitektur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er composability i DeFi?

Composability (sammensettbarhet) er DeFi-protokollers evne til å bygge oppå, integrere med og kombinere hverandre – som legoklosser som passer sammen – fordi alle kjører på den samme åpne, tillatelsesløse blokkjeden.

> **Kort forklart**
> I tradisjonell finans er bankens sparekonto, lånetjeneste og børshandel separate systemer som ikke snakker sammen. I DeFi kan du stake ETH i Lido (stETH), bruke stETH som sikkerhet i Aave, låne USDC, sette USDC i en Curve-pool, og bygge alt oppå hverandre – i én transaksjon. Det kalles «money legos» – hvert DeFi-prosjekt er en legokloss som passer med alle andre. Det er DeFis superkraft – og dens systemiske risiko.

## Hva betyr begrepet

Composability er mulig fordi alle DeFi-protokoller kjører på samme blokkjede (f.eks. Ethereum), smart contracts er åpne og tillatelsesløse (hvem som helst kan interagere), og standardiserte token-grensesnitt (ERC-20) sikrer kompatibilitet.

Tre typer composability er morfologisk (kombinere protokoller – Lido + Aave + Curve), atomisk (flere protokoll-interaksjoner i én transaksjon – flash loans), og oppover-kompatibel (nye protokoller bygger oppå eksisterende – Pendle bygger oppå stETH).

Tradisjonell finans kan ikke gjøre dette fordi systemene er lukkede (proprietære API-er, lisenser), regulerte (silo-baserte lisenser for ulike tjenester), og tillatelsesbaserte (du trenger avtale med hver motpart).

## Hvordan fungerer det

DeFi-legoklosser stables oppå hverandre for å skape nye finansielle produkter.

```
ETH → Lido (stETH, 3,5 %) → Aave (lån USDC, -2 %) → Curve (USDC-pool, 5 %) → Convex (boost Curve-belønning, +2 %) → Total: ~8,5 % netto avkastning

Alt dette er mulig fordi hvert lag er: åpent, standardisert, tillatelsesløst, og programmerbart
```

Flash loans er det reneste uttrykket for composability: lån fra Aave → kjøp på Uniswap → selg på SushiSwap → tilbakebetal Aave – alt i én atomisk transaksjon.

## Hvorfor er det viktig

Composability er grunnen til at DeFi innoverer 100× raskere enn tradisjonell finans. Nye protokoller trenger ikke bygge alt fra bunnen – de bruker eksisterende legoklosser. Pendle bygget yield-tokenisering oppå stETH. EtherFi bygget liquid restaking oppå EigenLayer oppå Lido.

Systemisk risiko er baksiden. Når protokollene er tett sammenvevd, kan en svikt i ett lag kaskadere oppover. Hvis stETH depegger, påvirkes Aave-lån med stETH-sikkerhet, som påvirkes Curve-pooler med stETH, som påvirker hele DeFi.

## Eksempler

Avkastning-stabling: Du bygger en 5-lags avkastningsstrategi med Lido → Aave → Curve → Convex → Yearn. Hvert lag legger til avkastning – og risiko.

Flash loan arbitrasje: Lån fra Aave, swap på Uniswap, swap tilbake på SushiSwap, tilbakebetal – tre protokoller i én transaksjon. Kun mulig med composability.

Kaskadeeffekt: stETH depegger 5 prosent → Aave likviderer stETH-sikkerhet → Likvidasjonssalg presser stETH videre ned → Curve-pool rebalanserer → Flere likvidasjoner. Composability-risiko i praksis.

## Vanlige spørsmål

### Er composability bare positivt?
Nei – det er DeFis superkraft OG akilleshæl. Innovasjon akselererer, men systemisk risiko øker. Én svikt kan kaskadere gjennom hele økosystemet.

### Fungerer composability mellom kjeder?
Begrenset. Composability fungerer best innenfor én kjede (Ethereum). Cross-chain composability (via bridges/CCIP) er i tidlig fase og mer risikabelt.

### Hva er money legos?
Et populært begrep for DeFi-composability – hvert DeFi-prosjekt er en legokloss som kan kombineres med alle andre for å bygge nye finansielle produkter.

## Relaterte begreper

- [DeFi](/krypto/hva-er-defi) – økosystemet bygget på composability
- [Smart contract](/krypto/hva-er-smart-contract) – muliggjør composability
- [Flash loan](/krypto/hva-er-flash-loan) – composability i sin reneste form
- [Yield farming](/krypto/hva-er-yield-farming) – utnytter composability
- [Ethereum](/krypto/hva-er-ethereum) – der composability fungerer best

## Se også

- [Hva er DeFi?](/krypto/hva-er-defi)
- [Hva er smart contract?](/krypto/hva-er-smart-contract)

## Oppsummering

Composability er DeFis evne til å kombinere protokoller som legoklosser – «money legos». Det akselererer innovasjon 100× men skaper systemisk risiko gjennom tett sammenveving. Composability fungerer fordi alt er åpent, standardisert og tillatelsesløst. Det er DeFis fundamentale fordel over tradisjonell finans – og dens potensielle svakhet.
