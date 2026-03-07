---
title: "Hva er Proof of Reserves?"
slug: "hva-er-proof-of-reserves"
category: "krypto"
subcategory: "grunnleggende"
description: "Proof of Reserves beviser at en kryptobørs har nok eiendeler til å dekke kundemidler. Lær hva det er, Merkle Tree-metoden, og begrensningene etter FTX."
keywords: ["Proof of Reserves", "PoR", "børssolvens", "Merkle Tree", "FTX"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Proof of Reserves"
aliases: ["PoR", "reservebevis"]
related: ["hva-er-cex-og-dex", "hva-er-merkle-tree", "hva-er-custodial-vs-non-custodial", "hva-er-tether", "hva-er-stablecoins"]
seeAlso: ["hva-er-cex-og-dex", "hva-er-merkle-tree"]
tags: ["Proof of Reserves", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er Proof of Reserves?

Proof of Reserves (PoR) er en metode der kryptobørser og custodians kryptografisk beviser at de har nok eiendeler til å dekke alle kundemidler – et tillitsbevis som ble kritisk viktig etter FTX-kollapsen.

> **Kort forklart**
> FTX hadde 8 milliarder dollar i kundemidler – men hadde brukt dem til spekulasjon. Ingen visste det fordi det ikke fantes noen verifisering. Proof of Reserves løser dette: børsen beviser kryptografisk (via Merkle Tree) at eiendeler ≥ forpliktelser. Du kan verifisere at DINE midler er inkludert uten å se andres. Men PoR er ikke perfekt – det viser et snapshot i tid, ikke skjulte gjeld. Det er bedre enn ingenting, men ikke en fullstendig garanti.

## Hva betyr begrepet

Proof of Reserves kombinerer to bevis. Proof of Assets beviser at børsen kontrollerer krypto-eiendeler (wallets med verifiserbare balansene on-chain). Proof of Liabilities beviser at børsen skylder X til kundene (via Merkle Tree der hver bruker kan verifisere sin balanse er inkludert).

Merkle Tree-metoden fungerer slik: alle kundebalansene organiseres i et Merkle Tree, hvert blad er en hashed kundebalanse, Merkle Root representerer summen av alle forpliktelser, og du kan verifisere at din balanse er inkludert uten å se andres (privat, kryptografisk).

Børser som publiserer PoR inkluderer Binance (Merkle Tree + on-chain wallets), Kraken (Proof of Reserves via revisor), OKX (månedlig PoR), og Bitget, Bybit og flere.

Begrensningene er at det er et snapshot (viser reserver på ett tidspunkt – børsen kan låne for snapshot og returnere etter), at det ikke viser gjeld (PoR beviser eiendeler ≥ kundebalansene, men skjuler annen gjeld), at det ikke er en revisjon (PoR er ikke det samme som en fullstendig Big Four-revisjon), og at det kan manipuleres (midler kan flyttes mellom børser for snapshot).

## Hvordan fungerer det

PoR lar deg verifisere at børsen har dine midler.

```
Børsen → Publiserer on-chain wallet-adresser (verifiserbare eiendeler) → Bygger Merkle Tree av alle kundebalansene → Publiserer Merkle Root → Du bruker din bruker-ID for å verifisere at din balanse er i treet → Eiendeler ≥ Forpliktelser? → Solvent
```

## Hvorfor er det viktig

Etter FTX er PoR blitt en minimumforventning for sentraliserte børser. Det er ikke perfekt – men det er mye bedre enn blind tillit. Full solvensbevis krever Proof of Assets + Proof of Liabilities + uavhengig revisjon – det er dit bransjen beveger seg.

For brukere: sjekk om din børs publiserer PoR. Verifiser at din balanse er inkludert. Men husk at PoR ikke eliminerer all risiko – det er ett av flere sikkerhetsverktøy.

## Eksempler

Binance PoR: Publiserer månedlig Merkle Tree-basert PoR for BTC, ETH, USDT og flere. Du kan verifisere din balanse via Binance-appen.

FTX-mangel: FTX publiserte ALDRI Proof of Reserves. Hadde de gjort det (ærlig), ville svindelen vært avslørt.

Tether attestasjon: Tether publiserer kvartalsvise reserve-attestasjoner – ikke PoR i Merkle Tree-forstand, men en revisors bekreftelse av reservesammensetning.

## Vanlige spørsmål

### Er PoR en garanti for at børsen er trygg?
Nei – det er et tillitsbevis men ikke en fullstendig garanti. Det viser et snapshot, ikke skjult gjeld. Kombiner PoR med regulatorisk status og omdømme.

### Kan jeg verifisere selv?
Ja – de fleste børser med PoR lar deg verifisere din balanse via en hash av din bruker-ID. Binance og OKX har dette innebygd i appen.

### Hva er bedre enn PoR?
Full solvensbevis: PoR + uavhengig revisjon + Proof of Liabilities (inkludert all gjeld). Noen børser beveger seg mot dette.

## Relaterte begreper

- [CEX og DEX](/krypto/hva-er-cex-og-dex) – PoR gjelder CEX-er
- [Merkle Tree](/krypto/hva-er-merkle-tree) – den kryptografiske strukturen brukt i PoR
- [Custodial vs non-custodial](/krypto/hva-er-custodial-vs-non-custodial) – PoR er relevant for custodial
- [Tether](/krypto/hva-er-tether) – reserve-transparens er sentralt
- [Stablecoins](/krypto/hva-er-stablecoins) – Proof of Reserves for stablecoin-utstedere

## Se også

- [Hva er CEX og DEX?](/krypto/hva-er-cex-og-dex)
- [Hva er Merkle Tree?](/krypto/hva-er-merkle-tree)

## Oppsummering

Proof of Reserves er kryptografisk bevis for at en børs har nok eiendeler til å dekke kundemidler – basert på Merkle Trees og on-chain verifisering. Det ble standarden etter FTX-kollapsen. Begrensninger: snapshot i tid, viser ikke skjult gjeld, er ikke en fullstendig revisjon. Sjekk alltid om din børs publiserer PoR – men stol ikke blindt på det.
