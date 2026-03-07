---
title: "Hva er forskjellen på hot wallet og cold wallet?"
slug: "hva-er-hot-wallet-vs-cold-wallet"
category: "krypto"
subcategory: "grunnleggende"
description: "Hot wallets er tilkoblet internett, cold wallets er frakoblet. Lær forskjellene, fordelene, ulempene, og hvilken du bør velge for sikker oppbevaring av krypto."
keywords: ["hot wallet", "cold wallet", "hardware wallet", "Ledger", "MetaMask"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Hot wallet vs cold wallet"
aliases: ["varm lommebok", "kald lommebok", "hardware vs software wallet"]
related: ["hva-er-kryptolommebok", "hva-er-seed-phrase", "hva-er-rug-pull", "hva-er-staking", "hva-er-bitcoin"]
seeAlso: ["hva-er-kryptolommebok", "hva-er-seed-phrase"]
tags: ["wallet", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er forskjellen på hot wallet og cold wallet?

En hot wallet er koblet til internett og gir rask tilgang til kryptoen din, mens en cold wallet er frakoblet og gir maksimal sikkerhet – valget handler om balansen mellom brukervennlighet og beskyttelse.

> **Kort forklart**
> Hot wallet = lommeboka i bukselomma (praktisk, men kan stjeles). Cold wallet = bankboksen (trygg, men du må dra dit for å bruke den). For daglig DeFi og handel bruker du hot wallet. For langtidsoppbevaring av store beløp bruker du cold wallet. De fleste bør ha begge.

## Hva betyr begrepet

Hot wallets er programvare som kjører på internett-tilkoblede enheter. De inkluderer nettleserutvidelser (MetaMask, Rabby), mobilapper (Trust Wallet, Phantom), og desktop-programmer (Exodus). Fordelen er umiddelbar tilgang, enkel DeFi-interaksjon og gratis. Risikoen er sårbar for phishing, malware og ondsinnede smart-kontrakter.

Cold wallets lagrer private nøkler på enheter som aldri kobles direkte til internett. De inkluderer hardware wallets (Ledger Nano X/S Plus, Trezor Model T/Safe 3), papir-wallets (privat nøkkel skrevet på papir – utdatert), og air-gapped enheter (dedikerte enheter uten nettverkstilkobling). Fordelen er at private nøkler aldri eksponeres for internett. Ulempen er at de koster penger og er mindre praktisk for hyppig bruk.

Sikkerhetsnivåene oppsummert: børs-wallet (lavest – du eier ikke nøklene), hot wallet (middels – du eier nøklene men eksponert for nett), cold wallet (høyest – nøklene er frakoblet internett).

## Hvordan fungerer det

Forskjellen ligger i hvor den private nøkkelen lagres og signerer transaksjoner.

```
Hot wallet: Nøkkel lagret på telefon/PC → Signering skjer på internett-tilkoblet enhet → Rask men eksponert

Cold wallet: Nøkkel lagret på dedikert maskinvare → Transaksjon sendes til enheten → Signering skjer offline → Signert transaksjon sendes tilbake → Nøkkelen forlater aldri enheten
```

Med en Ledger: du kobler den til PC via USB, bekrefter transaksjonen på Ledgers skjerm, og signerer med knappene. Den private nøkkelen forblir på Ledger-chipen hele tiden – den sendes aldri til datamaskinen.

## Hvorfor er det viktig

Over 3 milliarder dollar i krypto ble stjålet i 2023 gjennom hacks, phishing og svindel. De fleste angrep retter seg mot hot wallets – ondsinnede lenker, falske DeFi-sider, og malware som leser private nøkler.

En cold wallet eliminerer nesten all digital tyveririsiko. Selv om datamaskinen din er full av virus, kan de ikke stjele nøklene fra en Ledger – fordi nøklene aldri forlater enheten.

## Eksempler

Phishing-angrep: Du klikker på en falsk Uniswap-lenke og godkjenner en ondsinnet kontrakt i MetaMask. Hot wallet tømmes. Med Ledger hadde du sett den mistenkelige transaksjonen på skjermen og avvist den.

Langtidsspar: Du kjøper 2 BTC og overfører til Ledger. Enheten legges i en safe. Selv om alt annet kompromitteres – BTC er trygg.

DeFi-bruker: Du har 10 000 kr i MetaMask for daglig DeFi-handel og 200 000 kr på Ledger for langtidsoppbevaring. Balansert tilnærming.

## Vanlige spørsmål

### Trenger jeg cold wallet hvis jeg har lite krypto?
Tommelregel: hvis du har mer krypto enn du er villig til å tape, kjøp en cold wallet. Ledger Nano S Plus koster ~700 kr – billig forsikring for verdiene dine.

### Kan en Ledger bli hacket?
Den fysiske enheten er tilnærmet uhackbar – nøklene er lagret i en sikkerhetschip (Secure Element). Men Ledger ble utsatt for et databrudd i 2020 der kundedata (navn, adresser, e-post) ble lekket – ikke private nøkler.

### Hva er best: Ledger eller Trezor?
Begge er utmerkede. Ledger bruker Secure Element-chip (banknivå sikkerhet) og lukket kildekode. Trezor bruker åpen kildekode men standard mikrokontroller. De fleste velger Ledger for sikkerhetschip, Trezor for åpenhet.

### Kan jeg bruke cold wallet med DeFi?
Ja. Du kobler Ledger til MetaMask – MetaMask fungerer som grensesnitt, men signeringen skjer på Ledger. Du får DeFi-funksjonalitet med cold wallet-sikkerhet.

### Hva skjer hvis cold wallet-enheten går i stykker?
Ingenting. Kryptoen er på blokkjeden – ikke på enheten. Du gjenoppretter med seed phrase på en ny Ledger eller Trezor.

## Relaterte begreper

- [Kryptolommebok](/krypto/hva-er-kryptolommebok) – oversiktsartikkelen om wallets
- [Seed phrase](/krypto/hva-er-seed-phrase) – backupen som gjenoppretter alt
- [Rug pull](/krypto/hva-er-rug-pull) – svindel som hot wallets er sårbare for
- [Staking](/krypto/hva-er-staking) – kan gjøres fra begge wallet-typer
- [Bitcoin](/krypto/hva-er-bitcoin) – den vanligste kryptoen å oppbevare sikkert

## Se også

- [Hva er kryptolommebok?](/krypto/hva-er-kryptolommebok)
- [Hva er seed phrase?](/krypto/hva-er-seed-phrase)

## Oppsummering

Hot wallets (MetaMask, Trust Wallet) er tilkoblet internett – praktisk for daglig bruk men sårbar for angrep. Cold wallets (Ledger, Trezor) er frakoblet – private nøkler forlater aldri enheten. For optimal sikkerhet: hot wallet for DeFi-bruk (små beløp), cold wallet for oppbevaring (store beløp). Ledger Nano S Plus til ~700 kr er den billigste forsikringen du kan kjøpe.
