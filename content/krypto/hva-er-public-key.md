---
title: "Hva er public key?"
slug: "hva-er-public-key"
category: "krypto"
subcategory: "grunnleggende"
description: "Public key er den offentlige adressen du deler for å motta krypto. Lær hva en public key er, hvordan den henger sammen med private key, og hvorfor den er trygg å dele."
keywords: ["public key", "offentlig nøkkel", "kryptoadresse", "wallet-adresse", "kryptering"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Public key"
aliases: ["offentlig nøkkel", "wallet-adresse", "kryptoadresse"]
related: ["hva-er-private-key", "hva-er-seed-phrase", "hva-er-kryptolommebok", "hva-er-blockchain", "hva-er-bitcoin"]
seeAlso: ["hva-er-private-key", "hva-er-kryptolommebok"]
tags: ["public key", "krypto", "grunnleggende", "kryptografi"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er public key?

Public key (offentlig nøkkel) er en kryptografisk kode som fungerer som din «kryptoadresse» – den du deler med andre for å motta kryptovaluta, uten å avsløre din private nøkkel.

> **Kort forklart**
> Public key er som kontonummeret ditt i banken – du kan dele det med hvem som helst for å motta penger, og ingen kan stjele noe med bare kontonummeret. Den er matematisk utledet fra din private key, men det er umulig å beregne private key tilbake fra public key. Del public key fritt. Del aldri private key.

## Hva betyr begrepet

Public key og private key er et nøkkelpar basert på asymmetrisk kryptografi (også kalt public-key kryptografi). Private key er en tilfeldig, hemmelig kode (256-bits tall). Public key utledes matematisk fra private key (enveisfunksjon – kan ikke reverseres). Adressen utledes fra public key (ofte en forkortet, hashket versjon).

I praksis bruker du adressen (som er utledet fra public key) for å motta krypto. Eksempel på en Ethereum-adresse: 0x742d35Cc6634C0532925a3b844Bc9e7595f2bD08. Eksempel på en Bitcoin-adresse: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh.

Du kan ha ubegrenset mange public keys/adresser fra én seed phrase – det anbefales å bruke nye adresser for bedre personvern.

## Hvordan fungerer det

Public key muliggjør mottak av krypto og verifisering av signaturer.

```
Seed phrase → Private key (hemmelig) → Public key (utledes matematisk) → Adresse (forkortet public key) → Del adressen → Motta krypto
```

Når du sender krypto, signerer du transaksjonen med din private key. Nettverket verifiserer signaturen med din public key – uten å kjenne din private key. Det er som å verifisere en underskrift uten å kunne forfalske den.

## Hvorfor er det viktig

Public key er det eneste du skal dele med andre i krypto. Det er matematisk umulig å utlede private key fra public key – med dagens og forutsett fremtidig datakraft.

Vanlige misforståelser: å dele public key/adresse er ikke farlig (alle Bitcoin-transaksjoner er offentlig synlige med adresser uansett), men det gir innsyn i balansen din. For personvern: bruk nye adresser for ulike formål.

## Eksempler

Motta betaling: Du gir en venn din Ethereum-adresse (public key). Han sender 0,5 ETH. Det dukker opp i din wallet – trygt.

Verifisering: Du signerer en melding med din private key for å bevise at du eier en adresse. Hvem som helst kan verifisere signaturen med din public key.

Blokkjede-transparens: Alle kan søke opp en Bitcoin-adresse på blockchain.info og se alle transaksjoner og balanse – det er nettverkets åpenhet.

## Vanlige spørsmål

### Er det trygt å dele public key?
Ja. Public key/adresse er designet for å deles. Ingen kan stjele krypto med kun din adresse. Men de kan se balansen din – noe som kan være en personvernbekymring.

### Hva er forskjellen på public key og adresse?
Adressen er en forkortet, hashket versjon av public key. I daglig bruk brukes de om hverandre – men teknisk er de ulike. Du deler adressen, ikke den fulle public key.

### Kan noen hacke meg med public key?
Nei. Det er matematisk umulig å beregne private key fra public key med eksisterende teknologi. Kvantedatamaskiner er en teoretisk fremtidig trussel, men post-kvantum kryptografi utvikles.

### Har jeg én eller flere public keys?
Du kan ha ubegrenset mange. De fleste wallets genererer nye adresser automatisk. For Bitcoin anbefales ny adresse per transaksjon for personvern.

## Relaterte begreper

- [Private key](/krypto/hva-er-private-key) – den hemmelige nøkkelen som aldri deles
- [Seed phrase](/krypto/hva-er-seed-phrase) – genererer alle dine nøkler
- [Kryptolommebok](/krypto/hva-er-kryptolommebok) – håndterer nøklene dine
- [Blockchain](/krypto/hva-er-blockchain) – der transaksjonene registreres
- [Bitcoin](/krypto/hva-er-bitcoin) – bruker public key-kryptografi

## Se også

- [Hva er private key?](/krypto/hva-er-private-key)
- [Hva er kryptolommebok?](/krypto/hva-er-kryptolommebok)

## Oppsummering

Public key er din kryptoadresse – del den fritt for å motta krypto. Den utledes matematisk fra private key men kan ikke reverseres. Det er trygt å dele – ingen kan stjele midler med kun din adresse. For personvern: bruk ulike adresser for ulike formål.
