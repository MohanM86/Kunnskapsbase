---
title: "Hva er Polkadot?"
slug: "hva-er-polkadot"
category: "krypto"
subcategory: "kryptovalutaer"
description: "Polkadot er en blokkjede-plattform som kobler ulike blokkjeder sammen. Lær hva Polkadot er, parachain-konseptet, og visjonen om et interoperabelt Web3."
keywords: ["Polkadot", "DOT", "parachain", "interoperabilitet", "Gavin Wood"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Polkadot"
aliases: ["DOT", "Polkadot Network"]
related: ["hva-er-ethereum", "hva-er-avalanche", "hva-er-solana", "hva-er-chainlink", "hva-er-altcoins"]
seeAlso: ["hva-er-ethereum", "hva-er-avalanche"]
tags: ["Polkadot", "krypto", "kryptovalutaer", "interoperabilitet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er Polkadot?

Polkadot er en blokkjede-plattform designet for interoperabilitet – den kobler ulike blokkjeder sammen slik at de kan kommunisere og dele data, skapt av Ethereums medgrunnlegger Gavin Wood.

> **Kort forklart**
> Polkadot løser et av blokkjedens store problemer: blokkjeder snakker ikke med hverandre. Bitcoin kan ikke kommunisere med Ethereum, Solana vet ikke hva som skjer på Avalanche. Polkadot er en «blokkjedenes blokkjede» – en Relay Chain som kobler sammen spesialiserte blokkjeder (parachains) slik at de kan utveksle data og verdi trygt.

## Hva betyr begrepet

Polkadot ble lansert i 2020 av Gavin Wood, som også skapte Solidity (Ethereums programmeringsspråk) og var Ethereums første CTO. Visjonen er et heterogent multi-chain nettverk der spesialiserte blokkjeder samarbeider.

Arkitekturen har tre komponenter. Relay Chain er hjertet – gir sikkerhet og konsensus for hele nettverket. Parachains er selvstendige blokkjeder som kobles til Relay Chain og deler dens sikkerhet, men har egne regler og optimaliseringer. Bridges er forbindelser til eksterne nettverk som Ethereum og Bitcoin.

DOT er nettverkets native token, brukt for styring (stemmere over nettverksoppgraderinger), staking (sikrer nettverket), og parachain-auksjoner (prosjekter binder DOT for å sikre parachain-plasser).

Polkadot bruker Nominated Proof of Stake (NPoS) med opp til 1 000 validatorer – en av de mest desentraliserte PoS-mekanismene.

## Hvordan fungerer det

Polkadot lar spesialiserte blokkjeder samarbeide gjennom en felles sikkerhetsmodell.

```
Relay Chain (sikkerhet, konsensus) ← → Parachain A (DeFi) ← → Parachain B (Gaming) ← → Parachain C (Identitet) — alle deler sikkerhet og kan kommunisere via Cross-Chain Message Passing (XCMP)
```

Parachains er som spesialiserte avdelinger i et sykehus – kardiologi, ortopedi, radiologi har ulik ekspertise men deler bygningen, sikkerheten og kommuniserer med hverandre.

Polkadot 2.0 introduserer «agile coretime» – en fleksibel modell der prosjekter kjøper blokkplass etter behov i stedet for å låse opp millioner i DOT for en parachain-plass.

## Hvorfor er det viktig

Interoperabilitet er avgjørende for Web3-visjonen. I dag er de fleste blokkjeder isolerte øyer. Polkadot bygger broene mellom dem. Konkurrenter i dette rommet inkluderer Cosmos (IBC-protokollen) og Chainlink (CCIP).

Polkadot har et sterkt utviklermiljø (Substrate-rammeverket gjør det enkelt å bygge parachains) og aktiv governance – tokenholdere stemmer direkte over oppgraderinger.

## Eksempler

Astar Network: En parachain for smart-kontrakt utvikling som støtter både EVM og WASM – utviklere fra Ethereum og andre økosystemer kan bygge her.

Moonbeam: En EVM-kompatibel parachain som lar Ethereum-apper kjøre på Polkadot med cross-chain funksjonalitet.

Cross-chain DeFi: En bruker på én parachain kan låne tokens fra en DeFi-protokoll på en annen parachain – uten å forlate Polkadot-økosystemet.

## Vanlige spørsmål

### Hva er forskjellen på Polkadot og Ethereum?
Ethereum er én blokkjede (med Layer 2s for skalering). Polkadot er et nettverk av mange blokkjeder (parachains) som deler sikkerhet og kommuniserer. Polkadot prioriterer interoperabilitet, Ethereum prioriterer bredde i økosystemet.

### Hva er en parachain?
En selvstendig blokkjede koblet til Polkadots Relay Chain – den deler sikkerhet med nettverket men har egne regler, tokens og optimaliseringer.

### Hva er Substrate?
Et utviklingsrammeverk laget av Parity Technologies (Gavins selskap) som gjør det enkelt å bygge tilpassede blokkjeder – enten som Polkadot parachain eller frittstående.

### Konkurrerer Polkadot med Cosmos?
Begge fokuserer på interoperabilitet men med ulike tilnærminger. Polkadot gir delt sikkerhet (parachains arver sikkerhet). Cosmos gir suverenitet (hver kjede har egne validatorer).

## Relaterte begreper

- [Ethereum](/krypto/hva-er-ethereum) – Gavin Wood var medgrunnlegger
- [Avalanche](/krypto/hva-er-avalanche) – konkurrerende multi-chain arkitektur
- [Solana](/krypto/hva-er-solana) – konkurrent på Layer 1
- [Chainlink](/krypto/hva-er-chainlink) – orakel som også bygger cross-chain
- [Altcoins](/krypto/hva-er-altcoins) – DOT er en stor altcoin

## Se også

- [Hva er Ethereum?](/krypto/hva-er-ethereum)
- [Hva er Avalanche?](/krypto/hva-er-avalanche)

## Oppsummering

Polkadot er en interoperabilitets-plattform som kobler spesialiserte blokkjeder (parachains) gjennom en felles Relay Chain. Skapt av Ethereums medgrunnlegger Gavin Wood. Polkadot 2.0 med agile coretime gjør plattformen mer fleksibel. Interoperabilitet er nøkkelen til Web3-visjonen – og Polkadot er en av de ledende løsningene.
