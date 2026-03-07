---
title: "Hva er EIP (Ethereum Improvement Proposal)?"
slug: "hva-er-eip"
category: "krypto"
subcategory: "grunnleggende"
description: "EIP er den formelle prosessen for å foreslå endringer og oppgraderinger til Ethereum. Lær hva EIP er, de viktigste forslagene, og hvordan Ethereum utvikles desentralisert."
keywords: ["EIP", "Ethereum Improvement Proposal", "EIP-1559", "EIP-4844", "Ethereum oppgradering"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "EIP"
aliases: ["Ethereum Improvement Proposal", "Ethereum-forslag"]
related: ["hva-er-ethereum", "hva-er-gas-fees", "hva-er-layer-2", "hva-er-account-abstraction", "hva-er-evm"]
seeAlso: ["hva-er-ethereum", "hva-er-gas-fees"]
tags: ["EIP", "krypto", "grunnleggende", "Ethereum"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er EIP (Ethereum Improvement Proposal)?

EIP er en formell designspesifikasjon for nye funksjoner, standarder eller prosessendringer for Ethereum – den desentraliserte prosessen som styrer hvordan Ethereum oppgraderes og utvikles.

> **Kort forklart**
> Ethereum har ingen CEO som bestemmer oppgraderinger. I stedet kan hvem som helst foreslå endringer gjennom en EIP – et strukturert dokument som beskriver problemet, løsningen og teknisk spesifikasjon. Forslaget diskuteres, vurderes og implementeres av kjerneutviklere. De mest berømte EIP-ene har transformert Ethereum: EIP-1559 (gebyrfornyelse), EIP-4844 (blobs for L2), og ERC-4337 (account abstraction).

## Hva betyr begrepet

EIP-prosessen er Ethereums governance-system for tekniske endringer. EIP-typer deles i Standards Track (endringer i Ethereum-protokollen – Core, Networking, Interface, ERC), Meta (prosessendringer), og Informational (retningslinjer og informasjon).

ERC (Ethereum Request for Comments) er en underkategori av EIP for applikasjonsnivå-standarder – de definerer ikke protokollendringer men standardgrensesnitt. ERC-20 (fungible tokens), ERC-721 (NFT-er), ERC-1155 (multi-tokens), og ERC-4337 (account abstraction) er alle ERC-er.

De viktigste EIP-ene i Ethereums historie er EIP-1559 (august 2021 – ny gebyrmodell med base fee som brennes, gjør ETH deflasjonært), EIP-3675 (The Merge, september 2022 – overgang fra PoW til PoS, 99,95 prosent energireduksjon), EIP-4844 (mars 2024 – blobs/Proto-Danksharding, reduserte L2-gebyrer 90+ prosent), og ERC-4337 (mars 2023 – account abstraction uten protokollendring).

## Hvordan fungerer det

EIP-prosessen fra ide til implementering.

```
Forfatter skriver EIP-draft → Publiseres på eips.ethereum.org → Diskusjon i Ethereum Magicians forum → Core devs vurderer (for protokollendringer) → Testing på devnets og testnets → Inkluderes i neste hard fork → Aktiveres på mainnet → Permanent del av Ethereum
```

Hard forks er planlagte oppgraderinger der flere EIP-er bundles sammen. Nylige hard forks: Shanghai (april 2023, staking-uttak), Cancun (mars 2024, EIP-4844 blobs), og Pectra (planlagt 2025, EIP-7702 + flere).

## Hvorfor er det viktig

EIP-prosessen er det som gjør Ethereum en levende, utviklende protokoll – ikke en statisk teknologi. Ethereums evne til å oppgradere (PoW→PoS, blobs, account abstraction) er dens største konkurransefordel.

Det er også desentralisert governance i praksis: ingen enkelt aktør kan tvinge gjennom endringer. Kjerneutviklere, community og nodoperatører må alle akseptere.

## Eksempler

EIP-1559: Endret Ethereums gebyrmodell – base fee brennes, ETH blir deflasjonært. Over 4 millioner ETH er brent siden implementering.

EIP-4844: Introduserte blobs – L2-gebyrer falt fra 10+ kr til under 0,10 kr. Den viktigste L2-oppgraderingen noensinne.

ERC-20: Uten denne standarden fra 2015 ville hvert token trengt sin egen wallet-integrasjon. ERC-20 standardiserte alt – og muliggjorde DeFi.

## Vanlige spørsmål

### Kan hvem som helst foreslå en EIP?
Ja – det er en åpen prosess. Men å få en EIP akseptert og implementert krever teknisk kvalitet, community-støtte og kjerneutvikler-godkjenning.

### Hva er forskjellen på EIP og ERC?
EIP er den overordnede kategorien. ERC er en underkategori for applikasjonsstandarder (token-grensesnitt). Alle ERC-er er EIP-er, men ikke alle EIP-er er ERC-er.

### Hva er en hard fork?
En planlagt nettverksoppgradering der nye regler aktiveres. Alle noder må oppgradere – de som ikke gjør det, blir på den «gamle» kjeden. Ethereums hard forks er koordinerte og ukontroversielle (i motsetning til Bitcoin Cash-forken).

## Relaterte begreper

- [Ethereum](/krypto/hva-er-ethereum) – protokollen EIP-er forbedrer
- [Gas fees](/krypto/hva-er-gas-fees) – transformert av EIP-1559
- [Layer 2](/krypto/hva-er-layer-2) – dramatisk forbedret av EIP-4844
- [Account abstraction](/krypto/hva-er-account-abstraction) – muliggjort av ERC-4337
- [EVM](/krypto/hva-er-evm) – kjøremiljøet EIP-er endrer

## Se også

- [Hva er Ethereum?](/krypto/hva-er-ethereum)
- [Hva er gas fees?](/krypto/hva-er-gas-fees)

## Oppsummering

EIP er den formelle prosessen for å oppgradere Ethereum – åpen, desentralisert og meritokratisk. De viktigste EIP-ene (1559, 4844, The Merge) har transformert Ethereum fra en treg PoW-kjede til en skalerbar PoS-plattform med deflasjonær tokenomics. ERC-er (20, 721, 4337) definerer standardene som hele økosystemet bygger på. EIP-prosessen er Ethereums superkraft.
