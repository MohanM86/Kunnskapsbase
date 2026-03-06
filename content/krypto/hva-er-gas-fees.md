---
title: "Hva er gas fees?"
slug: "hva-er-gas-fees"
category: "krypto"
subcategory: "grunnleggende"
description: "Gas fees er transaksjonsgebyrer på blockchain som betaler for beregningskraft. Lær hva gas fees er, hvorfor de varierer, og hvordan du kan spare."
keywords: ["gas fees", "transaksjonsgebyr", "gas", "gwei", "Ethereum-gebyr"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Gas fees"
aliases: ["gas-avgift", "transaksjonsgebyr", "nettverksgebyr"]
related: ["hva-er-ethereum", "hva-er-blockchain", "hva-er-layer-2", "hva-er-smarte-kontrakter", "hva-er-en-kryptolommebok"]
seeAlso: ["hva-er-ethereum", "hva-er-layer-2"]
tags: ["gas fees", "krypto", "ethereum", "transaksjoner"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er gas fees?

Gas fees er gebyrer du betaler for å utføre transaksjoner eller kjøre smarte kontrakter på en blockchain, som kompensasjon for beregningskraften som kreves.

> **Kort forklart**
> Gas fees er prisen du betaler for å bruke blockchainen. Jo mer kompleks operasjonen er, desto mer gas kreves – akkurat som en bil bruker mer bensin på en lang tur enn en kort.

## Hva betyr begrepet

«Gas» er en måleenhet for beregningsarbeid på Ethereum og lignende blockchains. Hver operasjon – fra en enkel overføring til en kompleks smart kontrakt-interaksjon – krever en bestemt mengde gas.

Gas fees er det du betaler i kryptovaluta (ETH på Ethereum) for denne beregningskraften. Gebyret bestemmes av to faktorer: mengden gas operasjonen krever, og prisen per enhet gas som nettverket krever akkurat nå.

Begrepet er en metafor: gas er drivstoffet som får blockchain-maskinen til å kjøre. Uten gas stopper ingenting.

## Hvordan fungerer det

Gas fees beregnes basert på tilbud og etterspørsel etter blokkplass.

```
Bruker sender transaksjon → Angir gas-grense og prioritetsgebyr → Validatorer prioriterer høyest betalende → Transaksjon inkluderes i blokk → Gebyr trekkes fra saldo
```

Etter Ethereums EIP-1559-oppgradering består gas fees av to deler. Base fee er et minimumsgebyr som settes automatisk av nettverket basert på etterspørsel. Denne delen brennes – altså fjernes permanent fra sirkulasjon. Priority fee (tips) er et valgfritt tillegg du betaler direkte til validatoren for å prioritere din transaksjon.

Gas måles i enheten «gwei» (en milliardtedel av én ETH). En enkel ETH-overføring bruker 21 000 gas. En swap på Uniswap kan bruke 150 000–300 000 gas. Å prege en NFT kan bruke enda mer.

Total kostnad beregnes slik: gas brukt × (base fee + priority fee). Hvis base fee er 20 gwei og du legger til 2 gwei i tips, betaler du 22 gwei per gasenhet.

## Hvorfor er det viktig

Gas fees er mekanismen som forhindrer spam og misbruk av blockchainen. Uten gebyrer kunne hvem som helst oversvømme nettverket med uendelige transaksjoner og gjøre det ubrukelig.

Gebyrene kompenserer også validatorene som holder nettverket sikkert. De motiveres til å behandle transaksjoner fordi de tjener på det.

For brukere er gas fees en av de største praktiske utfordringene med blockchain. I perioder med høy etterspørsel kan en enkel transaksjon koste hundrevis av kroner på Ethereum Layer 1. Dette har vært en hoveddriver bak utviklingen av Layer 2-løsninger som tilbyr gebyrer under én krone.

Forståelse av gas fees hjelper deg å spare penger ved å time transaksjoner til perioder med lav etterspørsel og velge riktig nettverk for oppgaven.

## Eksempler

En enkel ETH-overføring bruker alltid 21 000 gas. Med en base fee på 10 gwei koster dette omtrent 0,00021 ETH – noen få kroner.

En token-swap på Uniswap bruker typisk 150 000–300 000 gas. På Layer 1 kan dette koste fra 50 til flere hundre kroner i travle perioder. Samme swap på Arbitrum koster under én krone.

Å prege en NFT-samling med tusenvis av tokens krever store mengder gas. Mange prosjekter lanserer derfor på Layer 2 eller bruker «lazy minting» der tokenet først preges når det kjøpes.

Batch-transaksjoner i DeFi, der du for eksempel både godkjenner en token og gjennomfører en swap, krever flere gas-operasjoner som legges sammen.

## Vanlige spørsmål

### Hvorfor varierer gas fees så mye?
Gas fees følger tilbud og etterspørsel. Når mange bruker nettverket samtidig (for eksempel under en populær NFT-lansering), stiger prisene dramatisk. I rolige perioder er gebyrene lave.

### Når er gas fees lavest?
Gebyrer er typisk lavest i helger og om natten (norsk tid), fordi færre brukere er aktive. Verktøy som Etherscan Gas Tracker viser sanntidspriser og historikk.

### Hva skjer hvis jeg setter for lav gas?
Transaksjonen din kan bli sittende i ventekø lenge eller til slutt avvises. Du mister ikke midlene, men kan miste gas-gebyret for mislykkede transaksjoner.

### Har alle blockchains gas fees?
De fleste blockchains har transaksjonsgebyrer, men de kan kalles forskjellige ting og variere enormt i størrelse. Solana, Polygon og andre har gebyrer på brøkdeler av en krone, mens Bitcoin og Ethereum Layer 1 kan koste betydelig mer.

### Hvordan kan jeg spare på gas fees?
Bruk Layer 2-nettverk for daglige transaksjoner. Time handler til perioder med lav trafikk. Unngå å sende mange små transaksjoner – samle dem heller. Og sjekk alltid estimert gebyr i lommeboken før du bekrefter.

## Relaterte begreper

- [Ethereum](/krypto/hva-er-ethereum) – blockchainen der gas-konseptet er mest sentralt
- [Layer 2](/krypto/hva-er-layer-2) – skaleringsløsninger med lavere gas fees
- [Blockchain](/krypto/hva-er-blockchain) – teknologien gas fees sikrer
- [Smarte kontrakter](/krypto/hva-er-smarte-kontrakter) – programmene som bruker gas
- [Kryptolommebok](/krypto/hva-er-en-kryptolommebok) – der du ser og godkjenner gas fees

## Se også

- [Hva er Ethereum?](/krypto/hva-er-ethereum)
- [Hva er Layer 2?](/krypto/hva-er-layer-2)
- [Hva er smarte kontrakter?](/krypto/hva-er-smarte-kontrakter)

## Oppsummering

Gas fees er transaksjonsgebyrer på blockchain som betaler for beregningskraft og sikrer nettverket mot misbruk. De varierer med etterspørselen og er en viktig faktor i valg av nettverk, timing og strategi for kryptobrukere.
