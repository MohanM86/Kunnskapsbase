---
title: "Hva er gas fees på Ethereum?"
slug: "hva-er-gas-fees"
category: "krypto"
subcategory: "grunnleggende"
description: "Gas fees er transaksjonsgebyrer du betaler for å bruke Ethereum-nettverket. Lær hva gas er, hvorfor gebyrene varierer, og hvordan du sparer med Layer 2."
keywords: ["gas fees", "Ethereum gebyr", "gwei", "EIP-1559", "Layer 2"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Gas fees"
aliases: ["gasskostnader", "Ethereum-gebyrer", "transaksjonsgebyr"]
related: ["hva-er-ethereum", "hva-er-solana", "hva-er-kryptolommebok", "hva-er-defi", "hva-er-uniswap"]
seeAlso: ["hva-er-ethereum", "hva-er-solana"]
tags: ["gas fees", "krypto", "grunnleggende", "Ethereum"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er gas fees på Ethereum?

Gas fees er transaksjonsgebyrene du betaler i ETH for å utføre operasjoner på Ethereum-nettverket – de kompenserer validatorene som prosesserer og bekrefter transaksjonene dine.

> **Kort forklart**
> Tenk på gas som bensin for Ethereum. Hver operasjon – sende ETH, bytte tokens på Uniswap, minte en NFT – krever datakraft fra nettverket. Du betaler for denne datakraften i «gas» målt i gwei (en brøkdel av ETH). Gebyrene varierer med trafikken: rolige tider koster 1–5 kr, travle tider kan koste 50–500 kr per transaksjon. Layer 2-løsninger (Arbitrum, Base) reduserer gebyrene til brøkdeler.

## Hva betyr begrepet

Gas er måleenheten for databehandling på Ethereum. Enkle operasjoner (sende ETH) bruker lite gas. Komplekse operasjoner (smart-kontrakt-interaksjon, DeFi-swaps) bruker mer.

Gebyret beregnes som gas brukt × gaspris per enhet. Gas brukt avhenger av operasjonens kompleksitet (ETH-overføring: 21 000 gas, Uniswap-swap: 100 000–300 000 gas). Gaspris (gwei) avhenger av nettverkstrafikken – auksjonsbasert, du «byr» på plass i neste blokk.

EIP-1559 (innført august 2021) endret gebyrmodellen. Hvert gebyr består av base fee (grunngebyr bestemt av nettverket – brennes og fjernes fra sirkulasjon) og priority fee/tips (ekstragebyr til validator for raskere behandling). Base fee gjør at ETH er deflasjonært i travle perioder – mer ETH brennes enn det som utstedes.

Gwei er enheten for gaspris (1 gwei = 0,000000001 ETH). Ved base fee 30 gwei koster en enkel ETH-overføring omtrent 21 000 × 30 gwei = 0,00063 ETH ≈ 15 kr.

## Hvordan fungerer det

Gas fees fungerer som et auksjonsbasert markedssystem.

```
Du sender transaksjon → Angir maks gebyr du er villig til å betale → Transaksjonen legges i mempool → Validatorer velger transaksjoner med høyest gebyr først → Din transaksjon inkluderes → Gas betales → Base fee brennes, tips går til validator
```

Layer 2-løsninger (Arbitrum, Optimism, Base, zkSync) batcher hundrevis av transaksjoner og sender dem til Ethereum som én. Resultatet er 10–100× lavere gebyrer: en swap som koster 50 kr på Ethereum koster 0,50 kr på Arbitrum.

## Hvorfor er det viktig

Høye gas fees har vært Ethereums akilleshæl – de ekskluderer småinvestorer og gjør mange DeFi-operasjoner ulønnsomme. En Uniswap-swap til 200 kr i gas gir ikke mening for en 500 kr handel.

Layer 2-revolusjonen har endret dette. De fleste DeFi-aktiviteter flyttes til L2 der gebyrene er minimale. Ethereums roadmap («The Surge») fokuserer på å gjøre L2 enda billigere.

For brukere er det viktig å sjekke gaspris før transaksjoner (etherscan.io/gastracker), bruke L2 for daglige operasjoner, og time transaksjoner til rolige perioder (helger, netter i USA).

## Eksempler

Billig timing: Du vil sende ETH. Du sjekker gastracker – base fee er 8 gwei søndag morgen vs. 50 gwei onsdag ettermiddag. Du venter og sparer 80 prosent.

Layer 2-sparing: Du swapper tokens på Uniswap via Arbitrum. Gebyr: 1,50 kr. Samme swap på Ethereum mainnet: 75 kr.

NFT-mint: Under en populær NFT-lansering skyter gas til 500+ gwei. En mint som normalt koster 30 kr koster plutselig 3 000 kr. Gas-kriger er reelle.

Mislykket transaksjon: Du setter for lavt gas-limit. Transaksjonen feiler – men du betaler gebyret likevel. Alltid bruk standard gas-estimat.

## Vanlige spørsmål

### Hvorfor er gas fees så høye?
Ethereum har begrenset blokkplass (~15 millioner gas per blokk). Når mange vil bruke nettverket samtidig, byr prisen opp. Det er tilbud og etterspørsel.

### Kan jeg unngå gas fees?
Ikke helt – alle transaksjoner har gebyr. Men du kan minimere ved å bruke Layer 2 (Arbitrum, Base), time til rolige perioder, og batche operasjoner.

### Betaler jeg gas selv om transaksjonen feiler?
Ja – validatoren brukte ressurser på å prosessere den. Sett tilstrekkelig gas-limit for å unngå dette.

### Hva er gwei?
1 gwei = 0,000000001 ETH. Det er enheten for gaspris – som øre er til kroner. «30 gwei» betyr at du betaler 30 × 0,000000001 ETH per gas-enhet.

### Hva er Layer 2?
Blokkjeder bygget oppå Ethereum som batcher transaksjoner for lavere gebyrer mens de arver Ethereums sikkerhet. Arbitrum, Optimism, Base og zkSync er de mest populære.

## Relaterte begreper

- [Ethereum](/krypto/hva-er-ethereum) – nettverket gas fees betales på
- [Solana](/krypto/hva-er-solana) – alternativ med minimale gebyrer
- [Kryptolommebok](/krypto/hva-er-kryptolommebok) – der du ser og betaler gas
- [DeFi](/krypto/hva-er-defi) – der gas fees er mest merkbare
- [Uniswap](/krypto/hva-er-uniswap) – en gas-intensiv DeFi-operasjon

## Se også

- [Hva er Ethereum?](/krypto/hva-er-ethereum)
- [Hva er Solana?](/krypto/hva-er-solana)

## Oppsummering

Gas fees er transaksjonsgebyrer på Ethereum målt i gwei. De varierer med nettverkstrafikken – fra noen kroner til hundrevis. EIP-1559 brenner base fee og gjør ETH deflasjonært. Layer 2 (Arbitrum, Base) reduserer gebyrene 10–100×. Sjekk gastracker, bruk L2, og time transaksjoner til rolige perioder for å spare.
