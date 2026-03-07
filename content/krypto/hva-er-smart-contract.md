---
title: "Hva er smart contract?"
slug: "hva-er-smart-contract"
category: "krypto"
subcategory: "grunnleggende"
description: "Smart contracts er selvutførende programmer på blokkjeden som automatiserer avtaler uten mellomledd. Lær hva smart contracts er, hvordan de fungerer, og bruksområdene."
keywords: ["smart contract", "smart kontrakt", "Solidity", "selvutførende avtale", "desentralisert"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Smart contract"
aliases: ["smart kontrakt", "selvutførende kontrakt", "programmerbar avtale"]
related: ["hva-er-ethereum", "hva-er-blockchain", "hva-er-defi", "hva-er-token", "hva-er-gas-fees"]
seeAlso: ["hva-er-ethereum", "hva-er-defi"]
tags: ["smart contract", "krypto", "grunnleggende", "teknologi"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er smart contract?

En smart contract (smart kontrakt) er et selvutførende program lagret på en blokkjede som automatisk gjennomfører en avtale når forhåndsdefinerte betingelser oppfylles – uten behov for mellomledd.

> **Kort forklart**
> Tenk på en brusautomat: du putter inn penger, velger brus, og automaten gir deg brusen. Ingen butikkansatt nødvendig. Smart contracts er den digitale versjonen – «hvis X skjer, gjør Y» – automatisk, transparent og uforanderlig. De er grunnlaget for DeFi, NFT-er, DAO-er og hele det programmerbare Web3. Ethereum var den første blokkjeden med smart contracts, og de fleste skrives i programmeringsspråket Solidity.

## Hva betyr begrepet

Begrepet «smart contract» ble først foreslått av informatiker Nick Szabo i 1994 – lenge før Bitcoin. Han beskrev det som «et sett av løfter, spesifisert i digital form, inkludert protokoller der partene oppfyller disse løftene».

I praksis er en smart contract et program (kode) som deployes til en blokkjede og kjører automatisk når betingelsene i koden oppfylles. Koden er offentlig lesbar og verifiserbar, utførelsen er deterministisk (samme input gir alltid samme output), og resultatet er uforanderlig (når en transaksjon er utført, kan den ikke angres).

Smart contracts på Ethereum skrives primært i Solidity (det dominerende språket), Vyper (Python-lignende alternativ), eller Yul (lavnivå for optimalisering). Andre blokkjeder bruker andre språk: Rust for Solana, Move for Sui/Aptos, og Cairo for StarkNet.

Smarte kontrakter har ingen «off-knapp» – når de er deployet, kjører de så lenge blokkjeden eksisterer (med mindre de har innebygd oppgraderingslogikk). Det er en styrke (ingen kan stoppe dem) og en risiko (bugs kan ikke fikses etter deploy).

## Hvordan fungerer det

Smart contracts kjører som «hvis-da»-logikk på blokkjeden.

```
Utvikler skriver kode i Solidity → Deployer til Ethereum → Koden lagres på blokkjeden (permanent) → Bruker interagerer → Betingelser sjekkes → Koden utføres automatisk → Resultatet registreres on-chain

Eksempel (forenklet DeFi-utlån):
HVIS bruker deponerer 1 ETH som sikkerhet
OG ETH-prisen er over 2 000 USD
DA tillat lån opptil 1 500 USDC
HVIS ETH-prisen faller under 1 600 USD
DA likvider sikkerheten automatisk
```

Hver interaksjon med en smart contract koster gas – du betaler for datakraften nettverket bruker. Komplekse kontrakter (DeFi-swaps, NFT-minting) bruker mer gas enn enkle operasjoner.

Smart contracts kan kalle andre smart contracts – dette skaper «composability» (sammensettbarhet) der DeFi-protokoller bygger oppå hverandre som legoklosser. Du kan låne i Aave, swappe i Uniswap og stake i Lido – alt i én transaksjon.

## Hvorfor er det viktig

Smart contracts er den fundamentale innovasjonen som gjør blockchain til mer enn bare digital valuta. Uten smart contracts er en blokkjede bare en hovedbok. Med smart contracts er den en programmerbar verdenscomputer.

De muliggjør DeFi (utlån, handel, forsikring uten banker), NFT-er (digitalt eierskap og knapphet), DAO-er (desentraliserte organisasjoner styrt av kode), tokenisering (representere virkelige eiendeler digitalt), og automatisering (selvutførende avtaler uten mellomledd).

Risikoen er reell. Bugs i smart contracts har ført til tap av milliarder – The DAO-hacket i 2016 (60 millioner dollar tapt), Wormhole bridge-exploit i 2022 (320 millioner dollar), og utallige DeFi-exploits. Smart contract audit (sikkerhetsvurdering av koden) er kritisk men ikke tilstrekkelig – selv reviderte kontrakter kan ha bugs.

## Eksempler

DeFi-utlån: Du deponerer ETH i Aave. Smart contracten registrerer sikkerheten, beregner lånekapasiteten, og lar deg låne USDC – alt automatisk uten bankansatt.

NFT-salg: En kunstner deployer en smart contract som minter NFT-er. Hver gang noen minter, mottar kunstneren betaling automatisk. Ved videresalg mottar kunstneren 5 prosent royalty – håndhevet av koden.

Crowdfunding: En smart contract samler inn midler for et prosjekt. Hvis målet nås innen fristen, frigjøres midlene til prosjektet. Hvis ikke, refunderes alle automatisk. Ingen Kickstarter nødvendig.

The DAO-hacket: I 2016 utnyttet en angriper en bug i The DAOs smart contract og drenerte 60 millioner dollar i ETH. Det førte til Ethereums kontroversielle hard fork – Ethereum (ETH) vs Ethereum Classic (ETC).

## Vanlige spørsmål

### Er smart contracts virkelig «smarte»?
Nei – de er deterministiske programmer som gjør nøyaktig det koden sier. De kan ikke tenke eller tilpasse seg. «Smart» refererer til at de utfører avtaler automatisk, ikke at de har intelligens.

### Kan smart contracts endres etter deploy?
Standard smart contracts er uforanderlige. Men «upgradeable contracts» bruker en proxy-pattern der logikken kan oppdateres. Det gir fleksibilitet men introduserer sentraliseringsrisiko (hvem kontrollerer oppgraderingene?).

### Er smart contracts juridisk bindende?
Varierer mellom jurisdiksjoner. I de fleste land er de ikke juridisk anerkjent som kontrakter, men den faktiske utførelsen er uforanderlig. Det juridiske rammeverket er under utvikling.

### Hva er en smart contract audit?
En sikkerhetsvurdering der spesialiserte firmaer (Certik, Trail of Bits, OpenZeppelin) gjennomgår koden for bugs, sårbarheter og logiske feil. Det reduserer risiko men eliminerer den ikke.

### Kan hvem som helst lage en smart contract?
Teknisk ja – du trenger programmeringskunnskaper (Solidity) og ETH for deploy. Verktøy som Remix IDE og OpenZeppelin-biblioteker gjør det enklere. Men å lage sikre kontrakter krever dyp ekspertise.

## Relaterte begreper

- [Ethereum](/krypto/hva-er-ethereum) – den første smart contract-plattformen
- [Blockchain](/krypto/hva-er-blockchain) – infrastrukturen smart contracts kjører på
- [DeFi](/krypto/hva-er-defi) – bygget på smart contracts
- [Token](/krypto/hva-er-token) – opprettes med smart contracts
- [Gas fees](/krypto/hva-er-gas-fees) – kostnaden for å kjøre smart contracts

## Se også

- [Hva er Ethereum?](/krypto/hva-er-ethereum)
- [Hva er DeFi?](/krypto/hva-er-defi)

## Oppsummering

Smart contracts er selvutførende programmer på blokkjeden som automatiserer avtaler uten mellomledd. De er grunnlaget for DeFi, NFT-er, DAO-er og hele Web3. Koden er offentlig, utførelsen er deterministisk, og resultatet er uforanderlig. Risikoen er bugs – milliarder har gått tapt i exploits. Smart contract audit reduserer men eliminerer ikke risiko.
