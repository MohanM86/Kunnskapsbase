---
title: "Hva er sandwich attack?"
slug: "hva-er-sandwich-attack"
category: "krypto"
subcategory: "grunnleggende"
description: "Sandwich attack er en MEV-strategi der en bot plasserer handler før og etter din transaksjon for å tjene på prisforskjellen. Lær hva det er og hvordan du beskytter deg."
keywords: ["sandwich attack", "sandwichangrep", "frontrunning", "MEV", "slippage"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Sandwich attack"
aliases: ["sandwichangrep", "sandwich MEV"]
related: ["hva-er-mev", "hva-er-uniswap", "hva-er-gas-fees", "hva-er-mempool", "hva-er-defi"]
seeAlso: ["hva-er-mev", "hva-er-uniswap"]
tags: ["sandwich attack", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er sandwich attack?

Sandwich attack er en MEV-strategi der en bot plasserer en kjøpsordre foran din transaksjon og en salgsordre bak – og «sandwicher» deg for å tjene på prisforskjellen du ufrivillig skaper.

> **Kort forklart**
> Du swapper ETH til en token på Uniswap. En bot ser transaksjonen din i mempoolen og gjør tre ting lynraskt: kjøper tokenet rett FØR deg (presser prisen opp), din transaksjon utføres til den høyere prisen (du betaler mer), og boten selger rett ETTER deg (selger til deg til overpris). Alt i samme blokk, på millisekunder. Du fikk tokenet – men betalte 0,5–3 prosent mer enn nødvendig. Boten stakk av med differansen.

## Hva betyr begrepet

Sandwich attack utnytter tre ting: offentlig mempool (boten ser din ventende transaksjon), slippage-toleranse (du godkjenner en prismargin i DEX-swappen), og prisinpakt (store handler beveger prisen i AMM-pooler).

Angrepet fungerer fordi AMM-er (som Uniswap) priser tokens basert på forholdet i poolen. Når boten kjøper først, endres forholdet – prisen stiger. Din transaksjon kjøper til den nye, høyere prisen. Boten selger umiddelbart etter – og poolen «normaliserer».

Hvem tjener og hvem taper? Boten tjener differansen (typisk 0,1–3 prosent av din handelsverdi). Du betaler mer enn du skulle. Validatoren tjener gas-tips fra boten. Likviditetstilbyderne påvirkes minimalt.

## Hvordan fungerer det

Sandwich attack skjer i tre steg innenfor én blokk.

```
1. Du sender swap: 10 ETH → Token X (slippage 2 %)
2. Bot ser transaksjonen i mempool
3. Bot plasserer: Kjøp Token X (pris stiger 1,5 %)
4. Din transaksjon: Kjøp Token X (du betaler 1,5 % mer)
5. Bot plasserer: Selg Token X (tjener 1,5 % minus gas)

Tid: alt i samme blokk (~12 sek)
Din kostnad: ~1,5 % ekstra (skjult i slippage)
Botens profitt: ~1,5 % minus gas
```

## Hvorfor er det viktig

Sandwich attacks koster DeFi-brukere hundrevis av millioner dollar årlig – det er en usynlig skatt. De fleste ofre vet ikke at de ble sandwichet – de ser bare litt dårligere pris enn forventet.

Beskyttelsestiltak: sett lavest mulig slippage-toleranse (0,5–1 prosent – boten trenger plass innenfor din toleranse), bruk Flashbots Protect som RPC (sender transaksjoner privat), bruk MEV-beskyttede DEX-er (CowSwap, 1inch Fusion), bruk private mempools på Solana (Jito), og handle på L2 (mindre MEV enn Ethereum mainnet).

## Eksempler

Typisk sandwich: Du swapper 5 000 kr i ETH til PEPE. Boten sandwicher deg og du betaler 75 kr ekstra (1,5 prosent). Du merker det ikke – fordi prisen «bare var litt høyere enn forventet».

Beskyttet swap: Du bruker CowSwap – transaksjonen matches off-chain med andre brukere (Coincidence of Wants) og sendes som batchhandel. Sandwich-bots kan ikke se individuelle ordre.

Stor sandwich: En whale swapper 1 million dollar på Uniswap. Bot sandwicher og tjener 15 000 dollar. Whalen tapte uten å merke det.

## Vanlige spørsmål

### Hvordan vet jeg om jeg ble sandwichet?
Sjekk transaksjonen din på Eigenphi.io eller mevblocker.io – de viser om din transaksjon var mål for sandwich. Du kan også se om det er «suspekte» transaksjoner rett før og etter din.

### Er sandwich attacks ulovlige?
Ikke i dag – de utnytter åpne, tillatelsesløse systemer. Det er etisk omdiskutert men ikke regulert. Noen argumenterer for at det er sofistikert markedsmanipulasjon.

### Kan Flashbots Protect stoppe alle sandwich attacks?
De fleste, men ikke alle. Flashbots sender transaksjoner privat – usynlig for sandwich-bots. Men noen validatorer kan fortsatt sandwiche privat. CowSwap gir enda bedre beskyttelse.

### Gjelder sandwich attacks bare Ethereum?
Nei – de forekommer på alle kjeder med offentlig mempool og AMM-baserte DEX-er. Solana, BNB Chain og Avalanche har alle sandwich-bots.

## Relaterte begreper

- [MEV](/krypto/hva-er-mev) – sandwich attack er den vanligste MEV-formen
- [Uniswap](/krypto/hva-er-uniswap) – der de fleste sandwich attacks skjer
- [Gas fees](/krypto/hva-er-gas-fees) – bots betaler høy gas for prioritering
- [Mempool](/krypto/hva-er-mempool) – der bots oppdager dine transaksjoner
- [DeFi](/krypto/hva-er-defi) – økosystemet sandwich attacks rammer

## Se også

- [Hva er MEV?](/krypto/hva-er-mev)
- [Hva er Uniswap?](/krypto/hva-er-uniswap)

## Oppsummering

Sandwich attack er en MEV-strategi der bots kjøper før og selger etter din DEX-transaksjon – du betaler 0,5–3 prosent mer uten å merke det. Beskytt deg med Flashbots Protect, CowSwap, lav slippage-toleranse, og L2-handel. Det koster DeFi-brukere hundrevis av millioner årlig. Sjekk Eigenphi.io for å se om du ble sandwichet.
