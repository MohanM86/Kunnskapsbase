---
title: "Hva er Solidity?"
slug: "hva-er-solidity"
category: "krypto"
subcategory: "grunnleggende"
description: "Solidity er programmeringsspråket for smarte kontrakter på Ethereum og EVM-kjeder. Lær hva Solidity er, hvordan det brukes, og hvorfor det er kryptos mest etterspurte ferdighet."
keywords: ["Solidity", "smart contract språk", "Ethereum programmering", "EVM", "DeFi utvikling"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Solidity"
aliases: ["Solidity-språket", "smart contract-programmering"]
related: ["hva-er-evm", "hva-er-smart-contract", "hva-er-ethereum", "hva-er-smart-contract-audit", "hva-er-defi"]
seeAlso: ["hva-er-evm", "hva-er-smart-contract"]
tags: ["Solidity", "krypto", "grunnleggende", "utvikling"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er Solidity?

Solidity er det dominerende programmeringsspråket for å skrive smarte kontrakter på Ethereum og alle EVM-kompatible blokkjeder – det er kryptos mest etterspurte tekniske ferdighet.

> **Kort forklart**
> Solidity er for smarte kontrakter det JavaScript er for nettsider. Det er et høynivå, objektorientert språk inspirert av C++, Python og JavaScript – designet spesifikt for EVM. Uniswap, Aave, OpenSea og nesten alle DeFi-protokoller er skrevet i Solidity. Å lære Solidity er inngangsbilletten til kryptos mest lukrative utviklerjobber – Solidity-utviklere tjener gjennomsnittlig 150 000–400 000+ dollar årlig.

## Hva betyr begrepet

Solidity ble skapt av Gavin Wood (Ethereums medgrunnlegger) i 2014 og er det mest brukte smart-kontrakt-språket med massiv margin. Det kompileres til EVM-bytecode som kjøres på Ethereum og alle EVM-kompatible kjeder.

Nøkkelegenskaper er statisk typet (variabler deklareres med type), kontraktbasert (kode organiseres i «contracts» – lignende klasser i objektorientert programmering), innebygd støtte for kryptoprimitiver (adresser, ether-verdier, hash-funksjoner), og modifiers og events (sikkerhets- og loggemekanismer).

Verktøy for Solidity-utvikling er Remix IDE (nettleserbasert – perfekt for nybegynnere), Hardhat (det mest brukte utviklingsrammeverket), Foundry (Rust-basert, raskest, foretrukket av avanserte utviklere), og OpenZeppelin (standardbiblioteker for tokens, tilgangskontroll, sikkerhet).

Alternative smart-kontrakt-språk er Vyper (Python-lignende, enklere men mindre brukt), Rust (Solana, NEAR), Move (Sui, Aptos), og Cairo (StarkNet).

## Hvordan fungerer det

Solidity-kode kompileres og deployes til blokkjeden.

```
Utvikler skriver Solidity-kode → Kompilerer med solc → EVM bytecode + ABI → Deploy til Ethereum → Kontrakt lever permanent on-chain → Brukere interagerer via ABI → EVM utfører bytecode
```

Et enkelt Solidity-eksempel (konseptuelt): en kontrakt definerer en funksjon «transfer» som sjekker at avsenderen har nok tokens, trekker fra avsender, legger til mottaker, og logger hendelsen. Alt dette håndteres av EVM med gas-måling.

## Hvorfor er det viktig

Solidity er det mest etterspurte språket i kryptoindustrien. DeFi, NFT-er, DAO-er og hele EVM-økosystemet er bygget med Solidity. Etterspørselen etter Solidity-utviklere overstiger tilbudet betydelig.

Sikkerhetsrisikoen er reell – Solidity-bugs har kostet milliarder (reentrancy, integer overflow, access control). Derfor er smart contract audits, formell verifikasjon og sikkerhetspraksis (OpenZeppelin-standarder) kritisk.

## Eksempler

ERC-20 token: En utvikler lager en ny token med Solidity + OpenZeppelin på 20 linjer kode. Deployer til Ethereum for ~50 kr i gas. Tokenet fungerer med alle wallets og DEX-er.

DeFi-protokoll: Et team skriver en utlånsprotokoll i Solidity med Hardhat. Koden auditeres av Trail of Bits, deployes på Ethereum + Arbitrum. Milliarder i TVL.

Karriere: En JavaScript-utvikler lærer Solidity på 3 måneder via CryptoZombies og Alchemy University. Lander en jobb med 200 000+ dollar årslønn.

## Vanlige spørsmål

### Er Solidity vanskelig å lære?
For utviklere med erfaring i JavaScript, Python eller C++: moderat. Syntaksen er kjent, men sikkerhetsaspektene (reentrancy, gas-optimalisering) krever dedikert læring. For nybegynnere: start med JavaScript først.

### Hvor lærer jeg Solidity?
CryptoZombies (gratis, gamifisert), Alchemy University (gratis, grundig), Patrick Collins på YouTube (omfattende kurs), og Solidity by Example (referansebasert).

### Kan jeg tjene penger med Solidity?
Ja – Solidity-utviklere er blant de best betalte i teknologibransjen. Bug bounties (Immunefi) kan gi 1 000–10 millioner dollar for å finne bugs.

### Er Solidity det eneste alternativet?
Nei – Vyper (Python-lignende), Rust (Solana), Move (Sui). Men Solidity har det desidert største økosystemet og flest jobber.

## Relaterte begreper

- [EVM](/krypto/hva-er-evm) – kjøremiljøet Solidity kompilerer for
- [Smart contract](/krypto/hva-er-smart-contract) – det du bygger med Solidity
- [Ethereum](/krypto/hva-er-ethereum) – den primære Solidity-plattformen
- [Smart contract audit](/krypto/hva-er-smart-contract-audit) – sikkerhetskontroll av Solidity-kode
- [DeFi](/krypto/hva-er-defi) – bygget med Solidity

## Se også

- [Hva er EVM?](/krypto/hva-er-evm)
- [Hva er smart contract?](/krypto/hva-er-smart-contract)

## Oppsummering

Solidity er programmeringsspråket for smart contracts på Ethereum og alle EVM-kjeder – kryptos mest etterspurte tekniske ferdighet. Uniswap, Aave og hele DeFi er bygget med Solidity. Sikkerhetsrisiko er reell – bugs har kostet milliarder. Lær via CryptoZombies eller Alchemy University. Solidity-utviklere tjener 150 000–400 000+ dollar årlig.
