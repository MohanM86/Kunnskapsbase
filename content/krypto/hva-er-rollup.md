---
title: "Hva er rollup?"
slug: "hva-er-rollup"
category: "krypto"
subcategory: "grunnleggende"
description: "Rollup er en skaleringsløsning som batcher transaksjoner og poster bevis til Ethereum. Lær hva rollups er, optimistic vs ZK, og de viktigste prosjektene."
keywords: ["rollup", "optimistic rollup", "ZK rollup", "Arbitrum", "zkSync"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Rollup"
aliases: ["rollups", "layer 2 rollup"]
related: ["hva-er-layer-2", "hva-er-ethereum", "hva-er-gas-fees", "hva-er-eip", "hva-er-blockchain-trilemma"]
seeAlso: ["hva-er-layer-2", "hva-er-ethereum"]
tags: ["rollup", "krypto", "grunnleggende", "skalering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er rollup?

En rollup er en Layer 2-skaleringsløsning som utfører transaksjoner utenfor Ethereum mainnet, «ruller dem opp» i komprimerte batches, og poster bevis tilbake til Ethereum – og arver dermed Ethereums sikkerhet med dramatisk lavere gebyrer.

> **Kort forklart**
> Tenk på en rollup som en buss: i stedet for at 100 biler (transaksjoner) kjører individuelt på motorveien (Ethereum), pakkes alle passasjerene i én buss som tar én plass. Resultatet er 100× mer kapasitet. De to typene buss er optimistic rollups (antar alle er ærlige, lar utfordrere bevise svindel) og ZK rollups (beviser matematisk at alt er korrekt). Arbitrum og Base (optimistic) og zkSync (ZK) er de største.

## Hva betyr begrepet

Rollups løser Ethereums skaleringsprobrlem uten å ofre sikkerhet. Alle transaksjoner utføres off-chain (på rollup-kjeden), men transaksjonsdataen postes til Ethereum. Det betyr at hvem som helst kan rekonstruere rollup-staten fra Ethereum-data – det er det som gir sikkerhet.

Optimistic rollups (Arbitrum, Optimism, Base) antar at alle transaksjoner er gyldige. Hvis noen mistenker svindel, kan de levere et «fraud proof» innen en utfordringsperiode (typisk 7 dager). Fordeler: enklere teknologi, full EVM-kompatibilitet. Ulemper: 7 dagers uttaksperiode for å gå tilbake til L1.

ZK rollups (zkSync, StarkNet, Scroll, Polygon zkEVM) genererer et matematisk bevis (zero-knowledge proof) for at alle transaksjoner er korrekte. Fordeler: øyeblikkelig finalitet (beviset er verifiserbart umiddelbart), potensielt mer skalerbart. Ulemper: kompleksere teknologi, dyrere å produsere bevis, og full EVM-kompatibilitet er vanskeligere.

Begge typer poster data til Ethereum som «calldata» eller «blobs» (etter EIP-4844). Blobs er billigere – det er grunnen til at L2-gebyrer falt 90+ prosent i mars 2024.

## Hvordan fungerer det

Rollups batcher, komprimerer og poster transaksjoner til Ethereum.

```
Optimistic Rollup:
Bruker sender tx → Rollup-sekvenser utfører → Batch postes til Ethereum (calldata/blob) → 7-dagers utfordringsperiode → Ingen utfordring? → Finalisert → Utfordring? → Fraud proof → Ugyldig batch reverseres

ZK Rollup:
Bruker sender tx → Rollup utfører → ZK-bevis genereres (matematisk korrekthet) → Bevis + batch postes til Ethereum → Ethereum verifiserer beviset → Umiddelbart finalisert
```

I praksis for brukeren er opplevelsen nesten identisk: du bruker MetaMask, Uniswap og Aave – bare på en annen kjede med lavere gebyrer.

## Hvorfor er det viktig

Rollups er Ethereums skaleringssstrategi – Vitalik Buterin har uttalt at Ethereums fremtid er «rollup-sentrisk». I stedet for å gjøre Ethereum raskere (vanskelig uten å ofre desentralisering), flyttes aktiviteten til rollups som arver sikkerheten.

Markedet vokser eksplosivt. Arbitrum: 10+ milliarder TVL. Base: raskest voksende L2 (Coinbase-tilknytning). zkSync: ledende ZK rollup. OP Stack: rammeverk for å bygge egne rollups (brukt av Base, Worldcoin, Zora). Arbitrum Orbit: tilsvarende for Arbitrum-baserte rollups.

Langvarig spørsmål: vil optimistic eller ZK vinne? Mange eksperter tror ZK er den endelige løsningen (matematisk bevis > fraud proof), men optimistic rollups har forsprang i adopsjon og EVM-kompatibilitet.

## Eksempler

Arbitrum swap: Du swapper tokens på Uniswap via Arbitrum. Gebyr: 0,50 kr. Samme swap på Ethereum mainnet: 50 kr. Identisk brukeropplevelse.

Base sosial: Friend.tech og andre sosiale apper lanserte på Base – millioner av transaksjoner per dag med minimale gebyrer.

OP Stack: Base (Coinbase), Worldcoin, Zora – alle bygget egne rollups med OP Stack-rammeverket. Superchain-visjonen: alle OP-rollups deler likviditet.

## Vanlige spørsmål

### Hva er tryggest – optimistic eller ZK?
Begge arver Ethereum-sikkerhet. Optimistic har enklere, mer testet kode. ZK har matematisk bevis men mer kompleks teknologi. Begge anses som trygge for etablerte implementasjoner.

### Hva er 7-dagers uttaksperioden?
For optimistic rollups: å trekke midler tilbake til Ethereum tar 7 dager (utfordringsperioden). Du kan bruke bridges (Across, Stargate) for raskere uttak med en liten avgift.

### Vil rollups erstatte Ethereum?
Nei – de bygger oppå Ethereum. Ethereum er sikkerhetslaget, rollups er utførelseslaget. De trenger hverandre.

### Kan jeg bygge min egen rollup?
Ja – OP Stack og Arbitrum Orbit gjør det relativt enkelt. Mange prosjekter lanserer «app-chains» (dedikerte rollups for én applikasjon).

## Relaterte begreper

- [Layer 2](/krypto/hva-er-layer-2) – rollups er den viktigste L2-typen
- [Ethereum](/krypto/hva-er-ethereum) – sikkerhetslaget rollups bygger på
- [Gas fees](/krypto/hva-er-gas-fees) – dramatisk redusert av rollups
- [EIP](/krypto/hva-er-eip) – EIP-4844 forbedret rollups
- [Blockchain trilemma](/krypto/hva-er-blockchain-trilemma) – rollups forsøker å løse det

## Se også

- [Hva er Layer 2?](/krypto/hva-er-layer-2)
- [Hva er Ethereum?](/krypto/hva-er-ethereum)

## Oppsummering

Rollups er L2-skaleringsløsninger som batcher transaksjoner og poster bevis til Ethereum. Optimistic rollups (Arbitrum, Base) bruker fraud proofs med 7-dagers utfordring. ZK rollups (zkSync, StarkNet) bruker matematiske bevis med umiddelbar finalitet. Begge gir 10–100× lavere gebyrer. Rollups er Ethereums skaleringssstrategi og den raskest voksende infrastrukturen i krypto.
