---
title: "Hva er EVM (Ethereum Virtual Machine)?"
slug: "hva-er-evm"
category: "krypto"
subcategory: "grunnleggende"
description: "EVM er Ethereums kjøremiljø for smarte kontrakter – en desentralisert verdenscomputer. Lær hva EVM er, EVM-kompatibilitet, og hvorfor det er kryptos viktigste standard."
keywords: ["EVM", "Ethereum Virtual Machine", "EVM-kompatibel", "bytecode", "smart contract runtime"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "EVM"
aliases: ["Ethereum Virtual Machine", "EVM-kompatibel"]
related: ["hva-er-ethereum", "hva-er-smart-contract", "hva-er-solidity", "hva-er-layer-2", "hva-er-gas-fees"]
seeAlso: ["hva-er-ethereum", "hva-er-smart-contract"]
tags: ["EVM", "krypto", "grunnleggende", "Ethereum"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er EVM (Ethereum Virtual Machine)?

EVM (Ethereum Virtual Machine) er det virtuelle kjøremiljøet som utfører smarte kontrakter på Ethereum – en desentralisert «verdenscomputer» der tusenvis av noder kjører nøyaktig den samme koden og oppnår identisk resultat.

> **Kort forklart**
> EVM er Ethereums motor. Når du interagerer med en smart kontrakt (swap på Uniswap, lån i Aave), er det EVM som kjører koden. Den er deterministisk – samme input gir alltid samme output på alle noder. Det som gjør EVM ekstra viktig er at den er blitt standarden: BNB Chain, Avalanche, Polygon, Arbitrum, Base – alle er «EVM-kompatible». Det betyr at smart contracts skrevet for Ethereum fungerer på alle disse kjedene uten endring. EVM er kryptos Windows.

## Hva betyr begrepet

EVM er en sandboxet, Turing-komplett virtuell maskin som kjører bytecode (kompilert kode) fra smarte kontrakter. Hver node i Ethereum-nettverket kjører sin egen EVM-instans og utfører alle transaksjoner uavhengig – og oppnår identisk state.

Nøkkelegenskaper er deterministisk (alle noder får nøyaktig samme resultat), sandboxet (smart contracts kan ikke påvirke resten av systemet), gasbegrenset (hver operasjon har en gaskostnad som forhindrer uendelige loops), og Turing-komplett (kan utføre enhver beregning, begrenset av gas).

EVM-kompatibilitet betyr at en blokkjede kan kjøre Ethereum-smart-contracts uten endring. Det er kryptos viktigste nettverkseffekt – utviklere som kan Solidity kan deploye på alle EVM-kjeder. Disse kjedene er EVM-kompatible: BNB Chain, Avalanche C-Chain, Polygon, Arbitrum, Optimism, Base, zkSync, Fantom, Cronos, og mange flere.

Ikke-EVM kjeder bruker andre kjøremiljøer: Solana (SVM – Sealevel Virtual Machine, Rust), Sui/Aptos (Move VM), NEAR (WASM), og Cosmos-kjeder (CosmWasm).

## Hvordan fungerer det

EVM prosesserer smart-kontrakt-kode steg for steg med gasmåling.

```
Solidity-kode → Kompileres til EVM bytecode → Deployes til Ethereum → Bruker sender transaksjon → EVM laster bytecode → Utfører instruksjon for instruksjon → Måler gas per operasjon → Oppdaterer state → Alle noder gjør det samme → Konsistent state
```

Hver EVM-instruksjon (opcode) har en definert gaskostnad: ADD (addisjon): 3 gas, SSTORE (lagre data): 20 000 gas, CREATE (ny kontrakt): 32 000 gas. Totalt gas brukt × gaspris = transaksjonsgebyr.

## Hvorfor er det viktig

EVM er den dominerende standarden for smarte kontrakter – og det er en massiv nettverkseffekt. Utviklere som lærer Solidity kan jobbe på 20+ blokkjeder. DeFi-protokoller kan deploye på nye kjeder på dager. Verktøy (Hardhat, Foundry, MetaMask) fungerer overalt.

Denne lock-in-effekten gjør at Ethereum og EVM-kjeder har det bredeste utviklerøkosystemet. Ikke-EVM kjeder (Solana, Sui) har tekniske fordeler men må bygge hele verktøy- og utviklerøkosystemet fra bunnen.

## Eksempler

Multi-chain DeFi: Aave er deployet på Ethereum, Polygon, Arbitrum, Optimism og Avalanche – nøyaktig samme Solidity-kode. EVM-kompatibilitet gjør det mulig.

Utvikler-portabilitet: En Solidity-utvikler bygger på Ethereum. Teamet vil også deploye på Base. Minimale kodeendringer – EVM garanterer kompatibilitet.

MetaMask overalt: MetaMask fungerer med Ethereum og alle EVM-kjeder. Du legger til et nytt nettverk med ett klikk – fordi alle snakker EVM.

## Vanlige spørsmål

### Er EVM det samme som Ethereum?
Nei. EVM er kjøremiljøet (motoren). Ethereum er blokkjeden (bilen). Andre blokkjeder bruker EVM uten å være Ethereum.

### Hva er forskjellen på EVM og SVM (Solana)?
EVM utfører transaksjoner sekvensielt og bruker Solidity. SVM (Sealevel) utfører uavhengige transaksjoner parallelt og bruker Rust. SVM er raskere for parallelle operasjoner, EVM har mye bredere økosystem.

### Kan jeg lage en EVM-kompatibel kjede?
Ja – verktøy som OP Stack, Polygon CDK og Arbitrum Orbit gjør det relativt enkelt å lansere en EVM-kompatibel L2 eller kjede.

### Hva er bytecode?
Lavnivå maskinspråk som EVM utfører. Solidity kompileres til bytecode – som er det som faktisk lagres og kjøres on-chain.

## Relaterte begreper

- [Ethereum](/krypto/hva-er-ethereum) – den opprinnelige EVM-kjeden
- [Smart contract](/krypto/hva-er-smart-contract) – det EVM kjører
- [Solidity](/krypto/hva-er-solidity) – programmeringsspråket for EVM
- [Layer 2](/krypto/hva-er-layer-2) – de fleste L2-er er EVM-kompatible
- [Gas fees](/krypto/hva-er-gas-fees) – EVM måler gas per operasjon

## Se også

- [Hva er Ethereum?](/krypto/hva-er-ethereum)
- [Hva er smart contract?](/krypto/hva-er-smart-contract)

## Oppsummering

EVM er Ethereums virtuelle maskin for smart contracts – kjøremiljøet der all DeFi, NFT og DAO-logikk utføres. EVM-kompatibilitet er kryptos viktigste standard – 20+ blokkjeder kjører EVM. Det gir enorm nettverkseffekt for utviklere, verktøy og protokoller. EVM er kryptos Windows – den dominerende plattformen alle bygger for.
