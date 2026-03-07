---
title: "Hva er multi-sig wallet?"
slug: "hva-er-multi-sig"
category: "krypto"
subcategory: "grunnleggende"
description: "Multi-sig wallet krever flere signaturer for å godkjenne en transaksjon – som to underskrifter på en bankkonto. Lær hva det er, Safe wallet, og bruksområder."
keywords: ["multi-sig", "multisignatur", "Safe wallet", "Gnosis Safe", "flerparts-signering"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Multi-sig wallet"
aliases: ["multisignatur", "flerparts-wallet", "multi-signature wallet"]
related: ["hva-er-kryptolommebok", "hva-er-dao", "hva-er-seed-phrase", "hva-er-hot-wallet-vs-cold-wallet", "hva-er-smart-contract"]
seeAlso: ["hva-er-kryptolommebok", "hva-er-dao"]
tags: ["multi-sig", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er multi-sig wallet?

En multi-sig (multisignatur) wallet krever godkjenning fra flere parter (f.eks. 2 av 3, 3 av 5) for å utføre en transaksjon – det eliminerer single-point-of-failure og er standarden for å sikre store kryptoverdier.

> **Kort forklart**
> Vanlig wallet: én nøkkel styrer alt – mister du den, mister du alt. Multi-sig: flere nøkler kreves. En 2-av-3 multi-sig betyr at tre personer har nøkler, men to må godkjenne for å sende krypto. Én person kan ikke tømme kontoen, og å miste én nøkkel er ikke katastrofalt. Safe (tidligere Gnosis Safe) er den dominerende multi-sig løsningen og sikrer over 100 milliarder dollar.

## Hva betyr begrepet

Multi-sig defineres som «M-av-N» der N er totalt antall signerere og M er antall signaturer som kreves. 2-av-3 er den vanligste konfigurasjonen – tre nøkkelholdere, to må godkjenne. 3-av-5 brukes for større verdier og organisasjoner. 1-av-2 gir bekvemmelighet (begge kan handle alene) med backup.

Safe (gnosis-safe.io) er den markedsledende multi-sig plattformen – en smart kontrakt-basert wallet som sikrer over 100 milliarder dollar i kryptoeiendeler. De fleste DAO-treasuries, protokollers midler og institusjonelle kryptoporteføljer bruker Safe.

Bruksområder er DAO-treasury (flere styremedlemmer må godkjenne utbetalinger), bedriftskrypto (CFO + CEO + styremedlem, 2-av-3), personlig sikkerhet (du + partner + advokat, 2-av-3 – beskytter mot tap av én nøkkel), og protokollens admin-nøkler (smart-kontrakt oppgraderinger krever flere godkjenninger).

## Hvordan fungerer det

Multi-sig bruker en smart kontrakt som krever M-av-N signaturer.

```
Signerer A foreslår transaksjon → Signerer B godkjenner → Terskel nådd (2 av 3) → Smart contract utfører transaksjonen → Signerer C trengte ikke godkjenne denne gangen

Hvis signerer A er kompromittert:
A foreslår ondsinnet transaksjon → B og C avviser → Transaksjon blokkert → Midlene er trygge
```

## Hvorfor er det viktig

Multi-sig eliminerer den største svakheten i krypto: enkeltpunkts-svikt. Mister du din personlige nøkkel, er kryptoen borte. Med multi-sig trenger angriperen flere nøkler – eksponentielt vanskeligere.

For organisasjoner er multi-sig obligatorisk. Ingen seriøs DAO eller protokoll ville la én person kontrollere milliarder. Ethereum Foundation, Uniswap treasury og de fleste store DeFi-protokoller bruker Safe multi-sig.

## Eksempler

DAO-treasury: Uniswap treasury på 3+ milliarder dollar styres av en multi-sig der flere community-valgte signerere må godkjenne utbetalinger.

Personlig: Du oppretter en 2-av-3 Safe med én Ledger hjemme, én Ledger i bankboks, og én hos en betrodd familiemedlem. Du trenger to for å sende – mister du én, kan de to andre gjenopprette.

Protokoll-admin: En DeFi-protokolls smart contract kan oppgraderes med 3-av-5 multi-sig – ingen enkeltutikler kan deploye ondsinnet kode.

## Vanlige spørsmål

### Er multi-sig trygt?
Mye tryggere enn singel-nøkkel wallet. Risikoen er smart-kontrakt-bug i multi-sig-kontrakten (Safe er ekstremt godt revidert), eller at nok signerere samarbeider om svindel.

### Koster det noe?
Safe er gratis å opprette. Hver multi-sig transaksjon krever on-chain signering – det koster gas.

### Kan jeg bruke multi-sig som privatperson?
Ja – Safe støtter det. Det er noe mer krevende enn vanlig wallet, men gir dramatisk bedre sikkerhet for store verdier.

## Relaterte begreper

- [Kryptolommebok](/krypto/hva-er-kryptolommebok) – multi-sig er en type wallet
- [DAO](/krypto/hva-er-dao) – bruker multi-sig for treasury
- [Seed phrase](/krypto/hva-er-seed-phrase) – multi-sig er et alternativ til å stole på én seed
- [Hot wallet vs cold wallet](/krypto/hva-er-hot-wallet-vs-cold-wallet) – multi-sig kan kombineres med begge
- [Smart contract](/krypto/hva-er-smart-contract) – multi-sig er en smart kontrakt

## Se også

- [Hva er kryptolommebok?](/krypto/hva-er-kryptolommebok)
- [Hva er DAO?](/krypto/hva-er-dao)

## Oppsummering

Multi-sig wallet krever M-av-N signaturer for å godkjenne transaksjoner – eliminerer enkeltpunkts-svikt. Safe er markedsleder med 100+ milliarder sikret. Brukes av DAO-treasuries, protokoller og sikkerhetbevisste individer. 2-av-3 er den vanligste konfigurasjonen. Det er standarden for å sikre store kryptoverdier.
