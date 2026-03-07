---
title: "Hva er ERC-721 og ERC-1155?"
slug: "hva-er-erc-721-erc-1155"
category: "krypto"
subcategory: "grunnleggende"
description: "ERC-721 og ERC-1155 er Ethereum-standarder for NFT-er. Lær forskjellen, hva de muliggjør, og hvorfor standarder er viktige for interoperabilitet."
keywords: ["ERC-721", "ERC-1155", "NFT standard", "non-fungible token", "multi-token"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "ERC-721 og ERC-1155"
aliases: ["NFT-standard", "ERC721", "ERC1155"]
related: ["hva-er-nft", "hva-er-token", "hva-er-ethereum", "hva-er-smart-contract", "hva-er-evm"]
seeAlso: ["hva-er-nft", "hva-er-token"]
tags: ["ERC-721", "ERC-1155", "krypto", "grunnleggende"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er ERC-721 og ERC-1155?

ERC-721 og ERC-1155 er Ethereum-standarder (token-grensesnitt) for NFT-er – ERC-721 for unike 1-av-1 tokens og ERC-1155 for multi-tokens som kan være både fungible og non-fungible i samme kontrakt.

> **Kort forklart**
> ERC-20 er standarden for vanlige tokens (alle like – 1 USDT = 1 USDT). ERC-721 er standarden for NFT-er (alle unike – CryptoPunk #3100 ≠ CryptoPunk #7804). ERC-1155 er den fleksible multi-standarden som kan håndtere begge i én kontrakt – perfekt for spill (både unike våpen OG fungible gullmynter). Standardisering er nøkkelen – det sikrer at alle NFT-er fungerer med alle wallets og markedsplasser.

## Hva betyr begrepet

ERC-721 (Ethereum Request for Comments 721) ble foreslått i 2018 og er den opprinnelige NFT-standarden. Hvert token har en unik tokenID, bare ett eksemplar av hvert token eksisterer, hvert token kan ha unik metadata (bilde, egenskaper), og det er standarden for de fleste NFT-samlinger (Bored Ape, CryptoPunks, Art Blocks).

ERC-1155 ble foreslått av Enjin i 2019 og er en multi-token-standard. Én kontrakt kan håndtere både fungible OG non-fungible tokens, batch-overføringer (send mange tokens i én transaksjon – sparer gas), og den er ideell for spillgjenstander (1 000 identiske sverd + 1 unikt legendarisk sverd i samme kontrakt).

Sammenlignet: ERC-721 er én kontrakt per samling, hvert token er unikt, og det kreves separate transaksjoner per overføring. ERC-1155 er én kontrakt for alle token-typer, tokens kan ha variabel mengde (1 for unik, 1 000 for fungibel), og batch-operasjoner sparer gas.

## Hvordan fungerer det

Begge standarder definerer et grensesnitt som alle wallets og markedsplasser forstår.

```
ERC-721: Kontrakten holder en mapping: tokenID → eieradresse
  Token #1 → 0xAlice
  Token #2 → 0xBob
  Token #3 → 0xAlice
  Hvert token er unikt, overføres individuelt

ERC-1155: Kontrakten holder en mapping: (tokenID, eier) → mengde
  Token #1 (sverd), Alice → 3 stk
  Token #2 (gull), Alice → 10 000 stk
  Token #3 (legendarisk), Bob → 1 stk
  Batch-overføring: send sverd + gull i én transaksjon
```

## Hvorfor er det viktig

Standardisering er det som gjør NFT-økosystemet mulig. Fordi alle NFT-er følger ERC-721 eller ERC-1155, fungerer de automatisk med MetaMask (viser NFT-ene dine), OpenSea/Blur (kan liste og handle), Aave (kan brukes som sikkerhet i noen tilfeller), og alle andre dapps.

Uten standarder ville hvert prosjekt trenge sin egen wallet-integrasjon, markedsplass og verktøy – et fragmentert, ubrukbart økosystem.

## Eksempler

Bored Ape (ERC-721): Samlingen har 10 000 unike NFT-er. Hvert ape har unikt tokenID, unike egenskaper (bakgrunn, klær, uttrykk), og unik verdi.

Spillgjenstander (ERC-1155): Et spill bruker ERC-1155 for 5 000 identiske helsepotions (fungibel), 100 sjeldne sverd (semi-fungibel), og 1 legendarisk rustning (unik NFT) – alt i én kontrakt.

Gas-besparelse: Du sender 10 ulike spillgjenstander til en venn. Med ERC-721: 10 transaksjoner × gas. Med ERC-1155: 1 batch-transaksjon = ~80 prosent gasbesparelse.

## Vanlige spørsmål

### Hvilken standard bør jeg bruke?
ERC-721 for unike samlinger (kunst, PFP). ERC-1155 for spill, mixed-collections, eller der gas-effektivitet er viktig.

### Kan markedsplasser håndtere begge?
Ja – OpenSea, Blur og de fleste markedsplasser støtter begge standarder.

### Hva er ERC-6551 (Token Bound Accounts)?
En nyere standard som lar NFT-er eie andre tokens og NFT-er – din Bored Ape kan ha sin egen wallet. Spennende for gaming og sammensatte NFT-er.

## Relaterte begreper

- [NFT](/krypto/hva-er-nft) – det standardene definerer
- [Token](/krypto/hva-er-token) – ERC-20 er standarden for fungible tokens
- [Ethereum](/krypto/hva-er-ethereum) – blokkjeden standardene lever på
- [Smart contract](/krypto/hva-er-smart-contract) – standardene implementeres som smart contracts
- [EVM](/krypto/hva-er-evm) – kjøremiljøet som utfører tokenlogikken

## Se også

- [Hva er NFT?](/krypto/hva-er-nft)
- [Hva er token?](/krypto/hva-er-token)

## Oppsummering

ERC-721 er standarden for unike NFT-er (1-av-1). ERC-1155 er multi-token-standarden for fungible og non-fungible i samme kontrakt, med batch-operasjoner. Standardisering sikrer at alle NFT-er fungerer med alle wallets og markedsplasser. ERC-721 for kunst/samlinger, ERC-1155 for spill og mixed-use.
