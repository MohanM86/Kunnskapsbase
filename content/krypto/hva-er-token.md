---
title: "Hva er en token?"
slug: "hva-er-token"
category: "krypto"
subcategory: "grunnleggende"
description: "En token er en digital eiendel bygget på en eksisterende blokkjede. Lær hva en token er, forskjellen fra coin, og de viktigste token-standardene som ERC-20."
keywords: ["token", "ERC-20", "kryptotoken", "utility token", "security token"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Token"
aliases: ["kryptotoken", "digital token"]
related: ["hva-er-coin", "hva-er-ethereum", "hva-er-nft", "hva-er-defi", "hva-er-kryptovaluta"]
seeAlso: ["hva-er-coin", "hva-er-ethereum"]
tags: ["token", "krypto", "grunnleggende", "begrep"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er en token?

En token er en digital eiendel som er opprettet og opererer på en eksisterende blokkjede – i motsetning til en coin som har sin egen blokkjede.

> **Kort forklart**
> Tokens er «gjestene» på en blokkjede – de bor der, men de eier ikke huset. USDT, LINK, UNI og PEPE er alle tokens som kjører på Ethereum. Ethereum (ETH) selv er en coin – den eier blokkjeden. Å lage en token er enkelt (noen minutter med en smart kontrakt), mens å lage en coin krever å bygge en hel blokkjede. Derfor finnes det hundretusenvis av tokens men bare hundrevis av coins.

## Hva betyr begrepet

En token opprettes gjennom en smart kontrakt på en eksisterende blokkjede. De vanligste token-standardene er ERC-20 (Ethereum, fungible tokens – den desidert vanligste standarden for kryptovalutaer), ERC-721 (Ethereum, NFT-er – unike tokens), SPL (Solana, tilsvarende ERC-20 for Solana-økosystemet), BEP-20 (BNB Chain, kompatibel med ERC-20), og TRC-20 (TRON, for tokens på TRON-nettverket).

Tokens deles i kategorier. Utility tokens gir tilgang til en tjeneste (LINK for Chainlink-orakel, FIL for Filecoin-lagring). Governance tokens gir stemmerett i en protokoll (UNI for Uniswap, AAVE for Aave). Security tokens representerer eierandeler i virkelige eiendeler (tokeniserte aksjer, eiendom). Stablecoins er tokens knyttet til fiat-valuta (USDT, USDC). Meme tokens er tokens uten bruksverdi drevet av fellesskap (PEPE, SHIB).

Å lage en ERC-20 token krever bare noen linjer kode og noen minutters arbeid. Det er derfor det finnes over 1 million tokens på Ethereum alene – og de fleste er verdiløse eller svindel.

## Hvordan fungerer det

Tokens opprettes og opereres gjennom smarte kontrakter.

```
Utvikler skriver smart kontrakt → Definerer tokenens regler (navn, tilbud, funksjonalitet) → Deployer til Ethereum → Token eksisterer som en post i kontraktens database → Overføringer registreres av kontrakten → Gas betales i ETH (den underliggende coinen)
```

Når du «eier» en token, betyr det at den smarte kontrakten har en post som sier «adresse X har Y tokens». Å overføre betyr at kontrakten oppdaterer denne posten – og du betaler gas i nettverkets coin (ETH for Ethereum-tokens).

## Hvorfor er det viktig

Tokens muliggjorde ICO-boomen (2017), DeFi-revolusjonen (2020), NFT-boomen (2021) og memecoin-bølgen (2023–2024). Ved å gjøre det enkelt å opprette nye digitale eiendeler, demokratiserte tokens finansiering og innovasjon – men åpnet også for massiv svindel.

Å forstå forskjellen mellom token og coin hjelper deg med å vurdere prosjekter, forstå gas-kostnader (du betaler i den underliggende coinen), og gjenkjenne svindel (tokens er enklere å lage og dermed enklere å bruke til rug pulls).

## Eksempler

USDT (token): Tether er en ERC-20 token på Ethereum. For å sende USDT betaler du gas i ETH.

ETH (coin): Ethereum har sin egen blokkjede. ETH er den native coinen som brukes for gas.

Ny memecoin: Hvem som helst kan lage en ERC-20 token på 5 minutter. 99 prosent av nye tokens er verdiløse – gjør alltid grundig research.

Multi-chain token: USDC finnes som ERC-20 (Ethereum), SPL (Solana), TRC-20 (TRON) – samme token på ulike blokkjeder.

## Vanlige spørsmål

### Hva er forskjellen på token og coin?
Coin har egen blokkjede (BTC, ETH, SOL). Token kjører på en annen blokkjede (USDT, LINK, UNI kjører på Ethereum). Gas betales i coin, ikke i token.

### Kan hvem som helst lage en token?
Ja – det krever bare grunnleggende programmeringskunnskaper og noen minutters arbeid. Det er derfor det finnes over 1 million tokens og de fleste er svindel.

### Er tokens trygt å eie?
Avhenger av tokenen. Etablerte tokens (USDT, LINK, UNI) er godt reviderte. Nye ukjente tokens er høyrisiko – sjekk alltid Token Sniffer og kontraktens kode.

### Hva er en token-standard?
Et sett regler (grensesnitt) alle tokens av den typen følger – det sikrer kompatibilitet. ERC-20 sikrer at alle fungible Ethereum-tokens fungerer med alle wallets og børser.

## Relaterte begreper

- [Coin](/krypto/hva-er-coin) – kryptovaluta med egen blokkjede
- [Ethereum](/krypto/hva-er-ethereum) – den mest populære plattformen for tokens
- [NFT](/krypto/hva-er-nft) – en type non-fungible token (ERC-721)
- [DeFi](/krypto/hva-er-defi) – bygget på tokens
- [Kryptovaluta](/krypto/hva-er-kryptovaluta) – den overordnede kategorien

## Se også

- [Hva er coin?](/krypto/hva-er-coin)
- [Hva er Ethereum?](/krypto/hva-er-ethereum)

## Oppsummering

En token er en digital eiendel som kjører på en eksisterende blokkjede via en smart kontrakt. ERC-20 er den vanligste standarden. Tokens muliggjør DeFi, NFT-er og stablecoins – men er også enkle å misbruke for svindel. Forstå forskjellen token vs. coin, sjekk alltid kontrakten, og husk at gas betales i den underliggende coinen.
