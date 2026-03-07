---
title: "Hva er hash og hashing?"
slug: "hva-er-hash"
category: "krypto"
subcategory: "grunnleggende"
description: "En hash er et unikt digitalt fingeravtrykk generert av en matematisk funksjon. Lær hva hashing er, SHA-256, og hvorfor det er grunnlaget for hele blockchain-teknologien."
keywords: ["hash", "hashing", "SHA-256", "kryptografisk hash", "digitalt fingeravtrykk"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Hash og hashing"
aliases: ["hashing", "kryptografisk hash", "hash-funksjon"]
related: ["hva-er-blockchain", "hva-er-proof-of-work", "hva-er-bitcoin", "hva-er-private-key", "hva-er-public-key"]
seeAlso: ["hva-er-blockchain", "hva-er-proof-of-work"]
tags: ["hash", "krypto", "grunnleggende", "kryptografi"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er hash og hashing?

En hash er et unikt «digitalt fingeravtrykk» med fast lengde, generert av en kryptografisk funksjon som konverterer data av vilkårlig størrelse til en unik, determinisisk streng – grunnlaget for blokkjedens integritet.

> **Kort forklart**
> Hashing er som en magisk kvern: du putter inn hva som helst (et ord, en bok, en fil) og får ut et unikt fingeravtrykk med fast lengde. Samme input gir alltid samme output. Selv den minste endring i input gir en helt annen hash. Og det er umulig å finne input fra output. Bitcoin bruker SHA-256 – det er det minerne løser. Blockchain bruker hashing for å lenke blokker, sikre transaksjoner og verifisere data.

## Hva betyr begrepet

En hash-funksjon har fire kritiske egenskaper. Deterministisk betyr at samme input gir alltid nøyaktig samme hash. Enveisfunksjon betyr at du kan ikke beregne input fra hash (irreversibel). Lavineffekt betyr at den minste endring i input gir en helt annen hash. Fast lengde betyr at uansett inputstørrelse er outputen alltid lik lengde.

SHA-256 (Secure Hash Algorithm 256-bit) er Bitcoins hash-funksjon. Den produserer en 256-bit (64 tegn heksadesimal) hash fra enhver input. Eksempel: «Hei» → 7d0a210b... (64 tegn). «hei» (liten h) → helt annen 64-tegns streng.

Hashing brukes i blockchain for blokklenking (hver blokk inneholder hashen av forrige blokk – endring bryter kjeden), mining (minere prøver milliarder av inputs for å finne en hash under target-verdi), transaksjonsverifisering (transaksjoner hashes til Merkle Tree), og adressegenerering (public key hashes for å lage wallet-adresser).

## Hvordan fungerer det

Hashing sikrer blockchain-integritet gjennom kjedet verifisering.

```
Blokk 1: data → hash: abc123
Blokk 2: data + "abc123" → hash: def456
Blokk 3: data + "def456" → hash: ghi789

Endre Blokk 1 → hash endres til xyz999 → Blokk 2 refererer til abc123, ikke xyz999 → UGYLDIG → Hele kjeden etter endringen brytes
```

For Bitcoin mining: minere prøver milliarder av nonce-verdier per sekund (hashrate) inntil de finner en hash som starter med tilstrekkelig mange nuller (difficulty target). Det er ren brute force – ingen snarvei.

## Hvorfor er det viktig

Hashing er det kryptografiske fundamentet som gjør blockchain uforanderlig, sikker og verifiserbar. Uten hashing finnes ingen blockchain. Det er grunnen til at kryptovaluta heter «krypto» – kryptografi (og spesielt hashing) er kjernen.

SHA-256 er ansett som ubrytelig med dagens teknologi. Det finnes 2^256 mulige hashverdier – mer enn atomer i det observerbare universet. Å finne to ulike inputs som gir samme hash (kollisjon) er praktisk umulig.

## Eksempler

Mining: En Bitcoin-miner prøver 100 billioner hash per sekund (100 TH/s). Målet: finne en hash under target. Når den finner en – ny blokk.

Filverifisering: Du laster ned en wallet-fil. Du sjekker SHA-256-hashen mot utviklerens publiserte hash. Identisk? Filen er umanipulert.

Merkle Tree: Tusenvis av transaksjoner i en blokk hashes parvis ned til én root hash (Merkle Root) – effektiv verifisering av hele blokken med ett tall.

## Vanlige spørsmål

### Kan en hash reverseres?
Nei – det er en enveisfunksjon. Du kan ikke finne input fra output. Det er designets sikkerhet.

### Hva er hashrate?
Antall hash-forsøk per sekund. Bitcoins globale hashrate er ~600 EH/s (600 millioner milliarder hash per sekund).

### Hva skjer hvis SHA-256 brytes?
Det ville true hele Bitcoins sikkerhet. Men det anses som ekstremt usannsynlig med dagens og forventet fremtidig teknologi. Kvantedatamaskiner er en langsiktig, men håndterbar trussel.

## Relaterte begreper

- [Blockchain](/krypto/hva-er-blockchain) – bygget på hashing
- [Proof of Work](/krypto/hva-er-proof-of-work) – mining er å finne gyldige hasher
- [Bitcoin](/krypto/hva-er-bitcoin) – bruker SHA-256
- [Private key](/krypto/hva-er-private-key) – relatert kryptografi
- [Public key](/krypto/hva-er-public-key) – utledet via hashing

## Se også

- [Hva er blockchain?](/krypto/hva-er-blockchain)
- [Hva er Proof of Work?](/krypto/hva-er-proof-of-work)

## Oppsummering

En hash er et unikt digitalt fingeravtrykk generert av en enveisfunksjon. SHA-256 er Bitcoins hash-algoritme. Hashing lenker blokker, driver mining, verifiserer transaksjoner og genererer adresser. Det er kryptografiens grunnstein – uten hashing ingen blockchain, ingen Bitcoin, ingen krypto.
