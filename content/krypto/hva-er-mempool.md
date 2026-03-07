---
title: "Hva er mempool?"
slug: "hva-er-mempool"
category: "krypto"
subcategory: "grunnleggende"
description: "Mempool er ventekøen der transaksjoner venter på å bli inkludert i en blokk. Lær hva mempool er, hvorfor den påvirker gas fees, og sammenhengen med MEV."
keywords: ["mempool", "transaksjonsventekø", "pending transaksjoner", "gas prioritering", "MEV"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Mempool"
aliases: ["memory pool", "transaksjonspool", "ventekø"]
related: ["hva-er-gas-fees", "hva-er-mev", "hva-er-blockchain", "hva-er-proof-of-work", "hva-er-ethereum"]
seeAlso: ["hva-er-gas-fees", "hva-er-mev"]
tags: ["mempool", "krypto", "grunnleggende", "infrastruktur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er mempool?

Mempool (memory pool) er ventekøen der ubekreftede transaksjoner venter på å bli plukket opp av en validator/miner og inkludert i neste blokk på blokkjeden.

> **Kort forklart**
> Når du sender en transaksjon, går den ikke rett inn i blokkjeden – den havner først i mempoolen, en «ventekø» som alle noder deler. Validatorer/minere velger transaksjoner fra mempoolen basert på gebyr – høyere gebyr = raskere behandling. I travle perioder fylles mempoolen opp, gebyrene stiger, og transaksjoner kan vente i timer. MEV-bots overvåker mempoolen for å utnytte ventende transaksjoner.

## Hva betyr begrepet

Mempool er ikke én sentral kø – hver node har sin egen versjon basert på transaksjoner den har mottatt. Når en transaksjon kringkastes, spres den gjennom nettverket og havner i nodenes mempooler. Validatorer/minere velger transaksjoner med høyest gebyr for neste blokk.

Mempoolen er offentlig synlig – alle kan se ventende transaksjoner. Det er grunnlaget for MEV: bots scanner mempoolen for profitable muligheter (sandwich-angrep, frontrunning) og plasserer egne transaksjoner strategisk.

Mempool-status kan sjekkes på mempool.space (Bitcoin – det beste visualiseringsverktøyet) og etherscan.io/txsPending (Ethereum – ventende transaksjoner).

Når mempoolen er full (mange ventende transaksjoner), stiger gebyrene fordi brukere byr opp for å komme foran i køen. Når den er tom, er gebyret lavt.

## Hvordan fungerer det

Mempool er bindeleddet mellom transaksjonssending og blokkinkludering.

```
Du sender transaksjon → Kringkastes til nettverket → Havner i noder mempooler → Validator velger transaksjoner (prioritert etter gebyr) → Inkluderes i neste blokk → Fjernes fra mempool → Bekreftet on-chain
```

For Bitcoin med 10-minutters blokker kan mempoolen vokse enormt i travle perioder – transaksjoner med lavt gebyr kan vente i timer eller dager. For Ethereum med 12-sekunders blokker er ventetiden kortere, men i travle perioder stiger base fee dramatisk.

## Hvorfor er det viktig

Mempool er nøkkelen til å forstå gas fees og MEV. Høy mempoolaktivitet = høye gebyrer. Offentlig mempool = MEV-muligheter for bots. Private transaksjonskanaler (Flashbots Protect) sender transaksjoner direkte til validatorer og hopper over den offentlige mempoolen – beskytter mot sandwich-angrep.

## Eksempler

Bitcoin rush: Under Ordinals-boomen i 2023 hadde Bitcoin-mempoolen over 400 000 ventende transaksjoner. Gebyret for neste-blokk-inkludering nådde 500+ kr.

MEV i mempool: Du sender en stor swap på Uniswap. En MEV-bot ser transaksjonen i mempoolen, frontrunner deg, og du betaler dårligere pris.

Flashbots Protect: Du bruker Flashbots som RPC – transaksjonen din sendes privat til validatorer, usynlig i mempoolen. Sandwich-bots kan ikke se den.

## Vanlige spørsmål

### Kan transaksjonen min sitte fast i mempool?
Ja – med for lavt gebyr kan den vente i timer/dager. Du kan «speed up» ved å sende samme transaksjon med høyere gebyr (replace-by-fee).

### Hva er replace-by-fee (RBF)?
En funksjon som lar deg resende en ventende transaksjon med høyere gebyr – den nye erstatter den gamle i mempoolen.

### Hvorfor er mempool viktig for MEV?
Mempool er offentlig – MEV-bots scanner den kontinuerlig for profitable muligheter. Uten offentlig mempool ville MEV være mye vanskeligere.

## Relaterte begreper

- [Gas fees](/krypto/hva-er-gas-fees) – driven av mempoolaktivitet
- [MEV](/krypto/hva-er-mev) – utnytter offentlig mempool
- [Blockchain](/krypto/hva-er-blockchain) – der transaksjoner fra mempool lagres permanent
- [Proof of Work](/krypto/hva-er-proof-of-work) – minere velger fra mempool
- [Ethereum](/krypto/hva-er-ethereum) – der mempool er mest relevant for DeFi

## Se også

- [Hva er gas fees?](/krypto/hva-er-gas-fees)
- [Hva er MEV?](/krypto/hva-er-mev)

## Oppsummering

Mempool er ventekøen for ubekreftede transaksjoner – offentlig synlig og prioritert etter gebyr. Full mempool = høye gebyrer. Offentlig mempool = MEV-muligheter for bots. Flashbots Protect lar deg hoppe over offentlig mempool for beskyttelse. Sjekk mempool.space (Bitcoin) eller etherscan.io (Ethereum) for sanntidsstatus.
