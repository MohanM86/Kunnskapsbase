---
title: "Hva er smart contract audit?"
slug: "hva-er-smart-contract-audit"
category: "krypto"
subcategory: "grunnleggende"
description: "Smart contract audit er en profesjonell sikkerhetsgjennomgang av kode for å finne bugs og sårbarheter. Lær hva det er, de viktigste audit-firmaene, og begrensningene."
keywords: ["smart contract audit", "sikkerhetsrevisjon", "Certik", "Trail of Bits", "bug bounty"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Smart contract audit"
aliases: ["kodeaudit", "sikkerhetsaudit", "DeFi audit"]
related: ["hva-er-smart-contract", "hva-er-defi", "hva-er-rug-pull", "hva-er-ethereum", "hva-er-phishing-krypto"]
seeAlso: ["hva-er-smart-contract", "hva-er-rug-pull"]
tags: ["audit", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er smart contract audit?

Smart contract audit er en profesjonell sikkerhetsgjennomgang av en smart contracts kildekode for å identifisere bugs, sårbarheter og logiske feil før den deployes – kryptos versjon av kvalitetskontroll.

> **Kort forklart**
> En smart contract kan ikke endres etter deploy – en bug betyr potensielt milliarder i tap. Audit er en tredjeparts gjennomgang der sikkerhetseksperter leser koden linje for linje, tester angrepsvektorer, og rapporterer funn. De beste audit-firmaene (Trail of Bits, OpenZeppelin, Spearbit) koster 100 000–500 000+ dollar per audit. Men selv reviderte kontrakter kan ha bugs – audit reduserer risiko, den eliminerer den ikke.

## Hva betyr begrepet

En audit innebærer typisk manuell kodegjennomgang (eksperter leser og analyserer koden), automatisert analyse (verktøy scanner for kjente sårbarhetsmønstre), testdekning (verifiserer at edge-cases er dekket), og rapport (funn kategorisert etter alvorlighetsgrad: kritisk, høy, medium, lav, informativ).

De mest respekterte audit-firmaene er Trail of Bits (teknisk dypest, brukt av store DeFi-protokoller), OpenZeppelin (skaperne av industristandardbiblioteker), Spearbit (community av elite-auditører), Certik (størst i volum, men variabel kvalitet), og Sigma Prime (spesialisert på Ethereum-klienter).

Bug bounty-programmer supplerer audits – protokoller tilbyr belønning (ofte millioner) til hvem som helst som finner bugs etter deploy. Immunefi er den største plattformen med over 150 millioner dollar i tilgjengelige bug bounties.

## Hvordan fungerer det

Audit-prosessen fra start til ferdig rapport.

```
Prosjekt kontakter audit-firma → Scope defineres (hvilke kontrakter?) → Auditører gjennomgår kode (2–8 uker) → Funn rapporteres → Prosjektet fikser funn → Re-audit av fiks → Endelig rapport publiseres → Deploy
```

Audit-rapporten er offentlig – du kan (og bør) lese den. Den lister alle funn med alvorlighetsgrad og om de ble fikset. Protokoller uten audit er rødt flagg. Protokoller med audit fra respekterte firmaer gir mer tillit – men er ikke garanti.

## Hvorfor er det viktig

Milliarder av dollar har gått tapt til smart-kontrakt-bugs – mange i kontrakter som IKKE var revidert. Men selv reviderte kontrakter er ikke immune: Wormhole (revidert, 320 millioner tapt), Ronin Bridge (revidert, 625 millioner tapt), og Euler Finance (revidert, 197 millioner tapt – men gjenvunnet).

Audit reduserer risiko betydelig – men det er ikke en garanti. Nye angrepsvektorer oppdages kontinuerlig, kontrakter som interagerer med andre kontrakter kan ha uforutsette interaksjoner, og auditører er mennesker som kan overse ting.

For brukere: sjekk alltid om en DeFi-protokoll er auditert, hvem som auditerte, og les sammendraget av funn. DeFi Safety (defisafety.com) scorer protokoller basert på sikkerhetspraksis.

## Eksempler

Aave: Revidert av Trail of Bits, OpenZeppelin og flere. Aldri hacket for brukerinnskudd. Gullstandard for audit-praksis.

Urevidert token: Du finner en ny DeFi-protokoll med 500 prosent APY og ingen audit-rapport. Rødt flagg – sannsynligvis rug pull eller buggy kode.

Bug bounty: En hvithat-hacker finner en kritisk bug i Polygon – rapporterer via Immunefi og mottar 2 millioner dollar i belønning. Buggen fikses uten tap.

## Vanlige spørsmål

### Betyr audit at protokollen er trygg?
Nei – det betyr at eksperter har gjennomgått koden og ikke funnet kritiske bugs. Nye bugs kan oppdages senere, og audit dekker bare scope som ble definert.

### Hvor finner jeg audit-rapporter?
På prosjektets GitHub, nettside (vanligvis under «Security»), eller via audit-firmaets nettside. Hvis rapporten ikke er offentlig, er det et rødt flagg.

### Hva koster en audit?
50 000–500 000+ dollar avhengig av omfang og firma. Større, komplekse protokoller koster mest. Mindre prosjekter kan bruke billigere alternativer (Code4rena crowdsourced audits).

### Hva er en bug bounty?
Belønning for å finne og rapportere bugs – typisk 1 000–10 millioner dollar avhengig av alvorlighetsgrad. Immunefi.com er den største plattformen.

## Relaterte begreper

- [Smart contract](/krypto/hva-er-smart-contract) – det som auditeres
- [DeFi](/krypto/hva-er-defi) – der audit er mest kritisk
- [Rug pull](/krypto/hva-er-rug-pull) – ureviderte kontrakter er høyrisikofor svindel
- [Ethereum](/krypto/hva-er-ethereum) – der de fleste smart contracts deployes
- [Phishing](/krypto/hva-er-phishing-krypto) – audit beskytter ikke mot phishing

## Se også

- [Hva er smart contract?](/krypto/hva-er-smart-contract)
- [Hva er rug pull?](/krypto/hva-er-rug-pull)

## Oppsummering

Smart contract audit er en profesjonell sikkerhetsgjennomgang som identifiserer bugs før deploy. Trail of Bits, OpenZeppelin og Spearbit er de mest respekterte. Audit reduserer risiko betydelig men er ingen garanti – selv reviderte kontrakter har tapt milliarder. Sjekk alltid audit-status, bug bounty-program, og DeFi Safety-score. Ureviderte protokoller er rødt flagg.
