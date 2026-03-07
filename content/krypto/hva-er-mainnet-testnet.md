---
title: "Hva er mainnet og testnet?"
slug: "hva-er-mainnet-testnet"
category: "krypto"
subcategory: "grunnleggende"
description: "Mainnet er blokkjedens produksjonsmiljø med ekte verdi, testnet er sandkassen for testing uten risiko. Lær forskjellen og hvorfor testnets er viktige for utvikling."
keywords: ["mainnet", "testnet", "produksjon", "testing", "testnet ETH"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 3
draft: false
entityType: "Concept"
topic: "Mainnet og testnet"
aliases: ["hovednett", "testnett", "mainchain"]
related: ["hva-er-blockchain", "hva-er-ethereum", "hva-er-smart-contract", "hva-er-solidity", "hva-er-node"]
seeAlso: ["hva-er-blockchain", "hva-er-smart-contract"]
tags: ["mainnet", "testnet", "krypto", "grunnleggende"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er mainnet og testnet?

Mainnet er en blokkjedes produksjonsmiljø der ekte kryptovaluta med reell verdi overføres, mens testnet er en sandkasse-kopi for utvikling og testing uten økonomisk risiko.

> **Kort forklart**
> Mainnet = den ekte motorveien. Testnet = treningsbanen. Når du sender BTC eller ETH – det er mainnet. Når en utvikler tester en smart contract med «falske» tokens – det er testnet. Du vil aldri deploye en uferdig smart contract til mainnet (det kan koste millioner i bugs). Testnets lar deg eksperimentere fritt med testnet-ETH som er gratis og verdiløs. Ethereums testnets er Sepolia og Holesky.

## Hva betyr begrepet

Mainnet er den «ekte» blokkjeden der transaksjoner har reell økonomisk verdi, smart contracts håndterer ekte midler, validatorer/minere sikrer nettverket med ekte innsats, og alt er permanent og uforanderlig. Når noen sier «vi har deployet til mainnet» betyr det at produktet er live og opererer med ekte verdi.

Testnet er en kopi av mainnet for testing. Tokens er verdiløse (testnet ETH, testnet BTC), smart contracts kan deployes og testes uten risiko, bugs kan oppdages uten konsekvenser, og testnets kan resettes eller restartes. Du får testnet-tokens gratis fra «faucets» – nettsider som deler ut test-ETH.

Ethereums testnets er Sepolia (primær for utviklertesting, stabil, langsiktig), Holesky (for staking og infrastrukturtesting), og Goerli (utgått/avviklet, erstattet av Sepolia).

Devnets er enda mer eksperimentelle – midlertidige nettverk for å teste spesifikke oppgraderinger før de når testnet.

## Hvordan fungerer det

Mainnet og testnet er separate nettverk med identisk programvare men ulik verdi.

```
Utvikler skriver smart contract → Tester lokalt (Hardhat/Foundry) → Deployer til testnet (Sepolia) → Tester med testnet-ETH → Finner og fikser bugs → Audit → Deployer til mainnet → Live med ekte verdi
```

Utviklingsflyt er alltid: lokal → testnet → mainnet. Aldri direkte til mainnet – risikoen er for stor.

## Hvorfor er det viktig

Testnets forhindrer katastrofale tap. En smart contract med en bug deployet direkte til mainnet kan koste millioner. Testing på testnet koster ingenting. Alle seriøse prosjekter gjennomgår grundig testnet-testing og audit før mainnet-launch.

For brukere: når et prosjekt annonserer «mainnet launch» betyr det at de er ferdige med testing og klar for ekte bruk. Prosjekter som forblir på testnet lenge kan indikere utvikling men også forsinkelser.

## Eksempler

Utviklertesting: Du bygger en DeFi-protokoll. Du deployer til Sepolia, tester med 100 testnet-ETH, finner en reentrancy-bug, fikser den – null kostnad, null risiko.

Mainnet launch: Etter måneder med testnet-testing og audit, deployer protokollen til Ethereum mainnet. Den er nå live og håndterer ekte midler.

Testnet faucet: Du trenger testnet-ETH for å teste. Du besøker sepoliafaucet.com, skriver inn din adresse, og mottar gratis test-ETH.

## Vanlige spørsmål

### Kan testnet-tokens selges?
Nei – de har ingen verdi. De eksisterer kun for testing. Forsøk på å selge testnet-tokens er svindel.

### Trenger vanlige brukere å vite om testnets?
Ikke nødvendigvis, men å forstå konseptet hjelper deg å vurdere prosjektmodenhet («er de på testnet eller mainnet?»). Noen airdrops belønner testnet-deltakelse.

### Hva er en mainnet launch?
Når et prosjekt deployer til produksjonsblokkjeden for første gang – fra testing til ekte bruk med reell verdi.

## Relaterte begreper

- [Blockchain](/krypto/hva-er-blockchain) – mainnet ER blokkjeden
- [Ethereum](/krypto/hva-er-ethereum) – har Sepolia og Holesky testnets
- [Smart contract](/krypto/hva-er-smart-contract) – testes på testnet før mainnet
- [Solidity](/krypto/hva-er-solidity) – kode testes på testnet
- [Node](/krypto/hva-er-node) – testnets kjøres også av noder

## Se også

- [Hva er blockchain?](/krypto/hva-er-blockchain)
- [Hva er smart contract?](/krypto/hva-er-smart-contract)

## Oppsummering

Mainnet er blokkjedens produksjonsmiljø med ekte verdi. Testnet er sandkassen for risikofri testing. All seriøs utvikling følger lokalt → testnet → mainnet. Testnets forhindrer milliarddollars bugs. Ethereums testnets er Sepolia og Holesky. Testnet-tokens er gratis og verdiløse – aldri kjøp dem.
