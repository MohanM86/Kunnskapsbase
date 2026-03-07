---
title: "Hva er depeg?"
slug: "hva-er-depeg"
category: "krypto"
subcategory: "grunnleggende"
description: "Depeg er når en stablecoin mister sin faste kobling til fiat-valutaen. Lær hva depeg er, de verste tilfellene (UST, USDC), og hva som utløser det."
keywords: ["depeg", "stablecoin kollaps", "UST", "Terra Luna", "pegging"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Depeg"
aliases: ["depegging", "pegtap", "stablecoin-kollaps"]
related: ["hva-er-stablecoins", "hva-er-tether", "hva-er-usdc", "hva-er-ethena", "hva-er-liquidity"]
seeAlso: ["hva-er-stablecoins", "hva-er-tether"]
tags: ["depeg", "krypto", "grunnleggende", "risiko"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er depeg?

Depeg er når en stablecoin mister sin faste kobling (peg) til den underliggende verdien – typisk $1 for dollar-stablecoins – og handles til en lavere (eller sjeldnere høyere) pris.

> **Kort forklart**
> En stablecoin skal alltid være verdt $1. Når den faller til $0,95, $0,80 eller $0 – det er depeg. Det kan utløses av tillitskrise (alle vil ut samtidig), reserveproblemer (utstederen har ikke nok dollar), eller algoritmisk svikt (mekanismen som holder peggen feiler). Terra UST-kollapsen i mai 2022 var historiens verste depeg – $40 milliarder ble til null på en uke. USDC depegget kortvarig til $0,87 da Silicon Valley Bank kollapset.

## Hva betyr begrepet

«Peg» betyr at stablecoinen er koblet til en fast verdi (vanligvis $1). «Depeg» betyr at koblingen brytes. Ulike stablecoins har ulike mekanismer for å opprettholde peggen, og dermed ulike depegging-risikoer.

Fiat-collateralized (USDT, USDC) opprettholder peg gjennom dollarreserver i bank. Depegging-risiko: bankens solvens (SVB-krisen for USDC), tillitskrise (alle innløser samtidig), eller reservemanipulasjon.

Overcollateralized (DAI) opprettholder peg gjennom krypto-sikkerhet som er mer verdt enn DAI utstedt. Depegging-risiko: ekstrem prisfall i sikkerhetene (krypto-krasj).

Algoritmisk (Terra UST) opprettholdt peg gjennom en algoritme med LUNA-token. Depegging-risiko: «dødsspiral» – når peggen brytes, kollapser mekanismen.

Syntetisk (Ethena USDe) opprettholder peg gjennom delta-nøytral sikring. Depegging-risiko: vedvarende negativ funding rate, motpartsrisiko.

## Hvordan fungerer det

Depeg oppstår når tilliten til innløsningsmekanismen svikter.

```
Normal: 1 stablecoin = $1 (alle tror de kan innløse)
↓
Krise: Tvil om reserver/mekanisme → Noen selger → Prisen faller under $1 → Mer tvil → Flere selger → Bankrun → Prisen kollapser

Terra UST: $1 → $0,90 → panikk → $0,50 → LUNA kollapser → $0,10 → $0,01 → ~$0
USDC (SVB): $1 → $0,87 → Fed garanterer → $1 (gjenopprettet mandag)
```

## Hvorfor er det viktig

Depeg er den eksistensielle risikoen for stablecoins – og stablecoins er fundamentet for hele DeFi. Hvis USDT depegget permanent, ville det utløse en systemisk krise som ville gjøre FTX-kollapsen til en fotnote.

Terra UST-kollapsen (mai 2022) slettet over $40 milliarder i verdi på en uke – den største enkelthendelsen i kryptohistorien. Den ledet direkte til Three Arrows Capital-kollapsen og kryptovinteren 2022–2023.

## Eksempler

Terra UST (mai 2022): Algoritmisk stablecoin. En stor selger utløste depeg → LUNA-kompensasjonsmekanismen feilet → dødsspiral → $40 milliarder til null. Tusenvis mistet alt.

USDC (mars 2023): Circle hadde $3,3 milliarder hos SVB. Banken kollapset fredag. USDC depegget til $0,87 over helgen. Fed garanterte innskuddene søndag kveld. Mandag morgen: tilbake til $1.

USDT (mai 2022): Under Terra-panikken falt USDT kort til $0,95. Gjenopprettet raskt. Men det viste at selv den største stablecoinen er sårbar i ekstreme markeder.

## Vanlige spørsmål

### Kan USDT depegg?
Teoretisk ja – ved en alvorlig tillitskrise eller reserveproblem. Men USDT har overlevd alle kriser til nå. Risikoen er reell men historisk lav.

### Hva gjør jeg ved depeg?
Ikke panikksalg ved kort depeg (USDC-typen – gjenopprettes). Ved algoritmisk depeg (UST-typen) – selg tidlig, mekanismen kan kollapse. Forskjellen er kritisk.

### Hvilken stablecoin er tryggest?
USDC har best transparens, DAI har ingen sentralisert utstelder, USDT har mest likviditet. Ingen er 100 prosent trygg. Diversifiser.

### Hva er en «dødsspiral»?
En selvforsterkende kollaps der depeg → mekanisme-reaksjon → mer depeg → verre reaksjon → total kollaps. UST/LUNA er lærebokeksempelet.

## Relaterte begreper

- [Stablecoins](/krypto/hva-er-stablecoins) – det depeg rammer
- [Tether](/krypto/hva-er-tether) – den største stablecoinen
- [USDC](/krypto/hva-er-usdc) – depegget under SVB-krisen
- [Ethena](/krypto/hva-er-ethena) – syntetisk dollar med depeg-risiko
- [Liquidity](/krypto/hva-er-liquidity) – forsvinner under depeg

## Se også

- [Hva er stablecoins?](/krypto/hva-er-stablecoins)
- [Hva er Tether?](/krypto/hva-er-tether)

## Oppsummering

Depeg er når en stablecoin mister sin $1-kobling. Terra UST-kollapsen ($40 milliarder tapt) og USDC SVB-krisen ($0,87) er de mest kjente tilfellene. Fiat-backed coins depegger ved reserveproblemer, algoritmiske ved mekanismesvikt. Depeg er stablecoins' eksistensielle risiko og DeFis største systemiske trussel. Diversifiser mellom stablecoins.
