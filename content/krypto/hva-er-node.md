---
title: "Hva er en node?"
slug: "hva-er-node"
category: "krypto"
subcategory: "grunnleggende"
description: "En node er en datamaskin som kjører blokkjedens programvare og oppbevarer en kopi av hele transaksjonshistorikken. Lær hva en node er, typene, og hvorfor de er viktige."
keywords: ["node", "full node", "validator node", "desentralisering", "blokkjede-node"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Node"
aliases: ["blokkjede-node", "full node", "nettverksnode"]
related: ["hva-er-blockchain", "hva-er-proof-of-work", "hva-er-proof-of-stake", "hva-er-bitcoin", "hva-er-ethereum"]
seeAlso: ["hva-er-blockchain", "hva-er-proof-of-stake"]
tags: ["node", "krypto", "grunnleggende", "infrastruktur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er en node?

En node er en datamaskin som kjører blokkjedens programvare, oppbevarer en kopi av transaksjonshistorikken, og bidrar til å verifisere og videresende transaksjoner – ryggraden i et desentralisert nettverk.

> **Kort forklart**
> Noder er blokkjedens immunforsvar. Hver node har en komplett kopi av blokkjeden og verifiserer uavhengig at alle regler følges. Jo flere noder, desto mer desentralisert og robust er nettverket. Bitcoin har ~18 000 noder globalt – for å angripe nettverket måtte du kompromittere tusenvis av uavhengige datamaskiner samtidig. Du kan kjøre en Bitcoin fullnode på en Raspberry Pi.

## Hva betyr begrepet

Nodetyper varierer etter funksjon. Full node laster ned og verifiserer hele blokkjeden – den ultimate sannhetskilden. Stoler ikke på noen – verifiserer alt selv. Validator node (PoS) er en full node som også deltar i blokkproduksjon og konsensus (krever stake). Mining node (PoW) er en full node som også miner nye blokker (krever maskinvare). Light node laster ned kun blokkheadere – raskere, men stoler på fullnoder for data. Archive node lagrer hele historisk state – brukt av block explorers og analytikk.

Bitcoin har ~18 000 fullnoder, Ethereum har ~8 000 fullnoder pluss ~1 million validatorer. Jo lavere krav for å kjøre node, desto flere noder, desto mer desentralisert.

Det er derfor blokkstørrelse er kontroversielt – større blokker krever mer lagring og båndbredde, noe som gjør det dyrere å kjøre node, noe som reduserer antall noder, noe som reduserer desentralisering.

## Hvordan fungerer det

Noder verifiserer og videresender transaksjoner uavhengig.

```
Transaksjon sendes → Node mottar → Verifiserer at den følger reglene → Videresender til andre noder → Alle noder har konsistent state → Ny blokk produseres → Noder verifiserer blokken → Legger til sin kopi → Nettverket er enig
```

Å kjøre en Bitcoin fullnode krever en vanlig PC (4 GB RAM, 1 TB lagring), stabil internettforbindelse, og noen dagers synkronisering (laste ned ~500 GB blokkjede). Ethereum fullnode krever mer (2 TB SSD, 16 GB RAM). Solana krever robust maskinvare (256 GB RAM, enterprise SSD).

## Hvorfor er det viktig

Noder er det som gjør blokkjeden desentralisert. Uten noder er det bare en database. Flere uavhengige noder = vanskeligere å angripe, sensurere eller manipulere. Ved å kjøre din egen node verifiserer du alt selv – du trenger ikke stole på noen tredjepart.

«Don't trust, verify» – kryptos mantra. Å kjøre en fullnode er den ultimate formen for verifisering.

## Eksempler

Bitcoin fullnode: Du kjører Bitcoin Core på en gammel PC. Den laster ned hele blokkjeden (500 GB) og verifiserer uavhengig at alle transaksjoner er gyldige. Du stoler ikke på Coinbase eller noen annen – du verifiserer selv.

Ethereum validator: Du kjører en Ethereum-node med 32 ETH staket. Du validerer blokker, tjener ~3,5 prosent årlig, og bidrar til nettverkssikkerheten.

Sentraliseringsrisiko: Solana krever kraftig maskinvare for noder (~$5 000+). Færre kan kjøre noder → færre noder → mer sentralisert enn Bitcoin/Ethereum.

## Vanlige spørsmål

### Trenger jeg å kjøre en node?
Ikke nødvendig for vanlige brukere. Men det gir deg uavhengig verifisering, bedre personvern, og bidrar til desentralisering. Bitcoin-noder er billige å kjøre.

### Koster det penger å kjøre node?
Maskinvare (PC/Raspberry Pi) + lagring (SSD) + strøm + internett. For Bitcoin: minimal kostnad. For Ethereum: middels. For Solana: betydelig.

### Hva er forskjellen på node og validator?
Alle validatorer er noder, men ikke alle noder er validatorer. En fullnode verifiserer. En validator verifiserer OG produserer blokker (krever stake i PoS).

## Relaterte begreper

- [Blockchain](/krypto/hva-er-blockchain) – det noder kjører
- [Proof of Work](/krypto/hva-er-proof-of-work) – mining-noder
- [Proof of Stake](/krypto/hva-er-proof-of-stake) – validator-noder
- [Bitcoin](/krypto/hva-er-bitcoin) – ~18 000 fullnoder
- [Ethereum](/krypto/hva-er-ethereum) – ~8 000 fullnoder + 1 million validatorer

## Se også

- [Hva er blockchain?](/krypto/hva-er-blockchain)
- [Hva er Proof of Stake?](/krypto/hva-er-proof-of-stake)

## Oppsummering

En node er en datamaskin som kjører blokkjedens programvare og verifiserer alle transaksjoner uavhengig. Flere noder = mer desentralisering = mer sikkerhet. Bitcoin har ~18 000, Ethereum ~8 000+ fullnoder. Lavere maskinvarekrav = flere noder = bedre desentralisering. «Don't trust, verify» – kjør din egen node for ultimate uavhengighet.
