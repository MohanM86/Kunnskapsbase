---
title: "Hva er en bridge?"
slug: "hva-er-en-bridge"
category: "krypto"
subcategory: "grunnleggende"
description: "En bridge lar deg flytte kryptovaluta mellom ulike blockchains. Lær hva en krypto-bridge er, hvordan den fungerer, og hvilke risikoer som finnes."
keywords: ["bridge", "krypto-bro", "cross-chain", "interoperabilitet", "wrapped tokens"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Bridge"
aliases: ["krypto-bro", "blockchain bridge", "cross-chain bridge"]
related: ["hva-er-blockchain", "hva-er-layer-2", "hva-er-ethereum", "hva-er-solana", "hva-er-en-kryptolommebok"]
seeAlso: ["hva-er-layer-2", "hva-er-blockchain"]
tags: ["bridge", "krypto", "cross-chain", "interoperabilitet"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er en bridge?

En bridge (bro) er et verktøy som lar deg flytte kryptovaluta og data mellom ulike blockchains som ellers ikke kan kommunisere direkte med hverandre.

> **Kort forklart**
> Blockchains er som separate øyer som ikke snakker sammen. En bridge er ferjen mellom dem – den lar deg flytte ETH fra Ethereum til Arbitrum, eller tokens fra Ethereum til Solana.

## Hva betyr begrepet

I krypto refererer «bridge» til protokoller som kobler to eller flere blockchains og muliggjør overføring av verdier og informasjon mellom dem. Uten bridges ville hver blockchain vært et isolert økosystem.

Behovet for bridges oppsto fordi ulike blockchains har forskjellig arkitektur og kan ikke lese hverandres data direkte. Ethereum kan ikke verifisere en Solana-transaksjon, og Bitcoin kan ikke kjøre en Ethereum-smart kontrakt. Bridges løser dette kommunikasjonsproblemet.

## Hvordan fungerer det

De fleste bridges fungerer ved å låse tokens på én kjede og utstede tilsvarende tokens på en annen.

```
Bruker sender tokens til bridge på Kjede A → Tokens låses i smart kontrakt → Bridge verifiserer → Tilsvarende tokens utstedes på Kjede B → Bruker mottar tokens
```

Den vanligste mekanismen er «lock and mint». Du sender tokens til en smart kontrakt på kildekjeden, der de låses. Bridgen verifiserer transaksjonen og preger tilsvarende «wrapped» tokens på målkjeden. Når du vil tilbake, brennes de wrapped tokenene og originaltokenene frigis.

For bridges mellom Layer 1 og Layer 2 (som Ethereum til Arbitrum) er prosessen tettere integrert. Layer 2-kjeden arver sikkerheten fra Layer 1, noe som gjør disse broene mer tillitsfulle.

Cross-chain bridges mellom helt ulike blockchains (som Ethereum til Solana) er mer komplekse og krever uavhengige valideringsmekanismer, noe som introduserer ekstra risiko.

## Hvorfor er det viktig

Bridges er limet som kobler et fragmentert blockchain-økosystem sammen. Uten dem ville likviditet, brukere og applikasjoner vært innlåst i separate siloer.

For brukere gjør bridges det mulig å utnytte fordelene ved ulike kjeder: billigere transaksjoner på Layer 2, raskere handel på Solana, eller spesifikke DeFi-muligheter som bare finnes på én kjede.

For økosystemet som helhet øker bridges kapitaleffektiviteten. I stedet for at likviditet er fragmentert over titalls kjeder, kan den flyte dit den trengs mest.

Samtidig er bridges et av de mest sårbare punktene i kryptoøkosystemet. Flere av de største hackene i kryptohistorien har rammet bridges, noe som gjør valg av bridge til en viktig sikkerhetsbeslutning.

## Eksempler

Ethereum-bridges til Layer 2 som Arbitrum Bridge og Optimism Bridge lar deg flytte ETH og tokens til Layer 2-nettverk for billigere transaksjoner. Disse er blant de tryggeste fordi de arver Ethereums sikkerhet.

Wormhole er en av de mest brukte cross-chain bridgene som kobler Ethereum, Solana, Avalanche og andre kjeder. Den ble utsatt for et hack på 320 millioner dollar i 2022, noe som illustrerer risikoen.

LayerZero er en nyere interoperabilitetsprotokoll som lar applikasjoner kommunisere direkte på tvers av kjeder uten tradisjonell lock-and-mint-mekanisme.

Across Protocol er en bridge fokusert på hastighet og lave kostnader for overføringer mellom Ethereum og dets Layer 2-nettverk.

## Vanlige spørsmål

### Er bridges trygge?
Bridges er et av de mest risikable elementene i krypto. Over 2,5 milliarder dollar har blitt stjålet fra bridge-hacks. Bruk etablerte bridges med lang historikk og uavhengige sikkerhetsrevisjoner. Layer 2-bridges er generelt tryggere enn cross-chain bridges.

### Hvor lang tid tar en bridge-overføring?
Det varierer fra sekunder (noen Layer 2-bridges) til opptil 7 dager (Optimistic rollup-uttrekk til Layer 1). Cross-chain bridges tar typisk noen minutter til en time.

### Hva er en wrapped token?
En wrapped token er en representasjon av en token fra en annen kjede. WBTC (Wrapped Bitcoin) er for eksempel Bitcoin representert som en ERC-20-token på Ethereum. Den originale bitcoinen er låst i en smart kontrakt.

### Koster det mye å bruke en bridge?
Kostnadene inkluderer transaksjonsgebyrer på begge kjedene pluss eventuelle bridge-gebyrer. For Layer 2-bridges er kostnadene lave. Cross-chain bridges kan være dyrere, spesielt fra Ethereum Layer 1.

### Hva skjer hvis en bridge hackes?
Hvis en bridge hackes, kan angriperne stjele de låste midlene. De wrapped tokenene på den andre kjeden mister da sin backing og kan bli verdiløse. Noen bridges har forsikringsordninger, men det er ikke garantert.

## Relaterte begreper

- [Blockchain](/krypto/hva-er-blockchain) – nettverkene bridges kobler sammen
- [Layer 2](/krypto/hva-er-layer-2) – skaleringsnettverk som ofte bruker bridges
- [Ethereum](/krypto/hva-er-ethereum) – den mest tilkoblede blockchainen via bridges
- [Solana](/krypto/hva-er-solana) – en av kjedene cross-chain bridges kobler til
- [Kryptolommebok](/krypto/hva-er-en-kryptolommebok) – verktøyet du bruker til å interagere med bridges

## Se også

- [Hva er Layer 2?](/krypto/hva-er-layer-2)
- [Hva er blockchain?](/krypto/hva-er-blockchain)
- [Hva er Ethereum?](/krypto/hva-er-ethereum)

## Oppsummering

En bridge er en protokoll som lar deg flytte kryptovaluta mellom ulike blockchains. De er essensielle for å koble et fragmentert økosystem, men representerer også et av de mest sårbare punktene i krypto – velg etablerte bridges med god sikkerhetshistorikk.
