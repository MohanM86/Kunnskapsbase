---
title: "Hva er UTXO?"
slug: "hva-er-utxo"
category: "krypto"
subcategory: "grunnleggende"
description: "UTXO er Bitcoins transaksjonsmodell der mynter spores som ubrukte transaksjonsutganger. Lær hva UTXO er, forskjellen fra kontomodellen, og hvorfor det gir bedre personvern."
keywords: ["UTXO", "Unspent Transaction Output", "Bitcoin transaksjon", "kontomodell", "vekslepenger"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "UTXO"
aliases: ["Unspent Transaction Output", "ubrukt transaksjonsutgang"]
related: ["hva-er-bitcoin", "hva-er-blockchain", "hva-er-double-spending", "hva-er-lightning-network", "hva-er-ethereum"]
seeAlso: ["hva-er-bitcoin", "hva-er-blockchain"]
tags: ["UTXO", "krypto", "grunnleggende", "Bitcoin"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er UTXO?

UTXO (Unspent Transaction Output) er Bitcoins transaksjonsmodell der krypto spores som «ubrukte mynter» i stedet for kontobalansene – som å betale med kontanter og få vekslepenger tilbake.

> **Kort forklart**
> Bitcoin fungerer ikke som en bankkonto med én saldo. I stedet eier du en samling «mynter» (UTXOer) – som å ha en lommebok full av sedler i ulike valører. Når du betaler, bruker du en eller flere sedler og får vekslepenger tilbake. Du har kanskje en 0,5 BTC UTXO, en 0,3 BTC UTXO og en 0,1 BTC UTXO – til sammen 0,9 BTC. For å sende 0,6 BTC bruker du 0,5 + 0,3 UTXO (0,8 BTC) og får 0,2 BTC tilbake som en ny UTXO (minus gebyr). Ethereum bruker en kontomodell i stedet – som en bankkonto med én saldo.

## Hva betyr begrepet

I UTXO-modellen finnes det ingen «kontobalanse» – bare en samling ubrukte transaksjonsutganger. Hver UTXO er en «mynt» med en bestemt verdi som er låst til en bestemt adresse (via et script) og som kun kan brukes i sin helhet (du kan ikke bruke «halve» en UTXO).

Når du sender Bitcoin skjer dette: du velger UTXOer som input (nok til å dekke beløpet), transaksjonen oppretter nye UTXOer som output (en til mottaker, en som vekslepenger til deg), de brukte UTXOene markeres som brukt (de eksisterer ikke lenger), og de nye UTXOene er nå ubrukte (klare til bruk).

Eksempel: du har tre UTXOer på 0,3 + 0,5 + 0,2 BTC. Du vil sende 0,6 BTC. Inputs: 0,3 + 0,5 UTXO = 0,8 BTC. Output 1: 0,6 BTC til mottaker (ny UTXO). Output 2: 0,199 BTC tilbake til deg som vekslepenger (ny UTXO). Gebyr: 0,001 BTC (differansen mellom inputs og outputs). Du har nå to UTXOer: 0,2 (ubrukt fra før) + 0,199 (vekslepenger) = 0,399 BTC.

Forskjellen fra kontomodellen (Ethereum) er at Ethereum har én balanse per adresse – som bankkonto. Du sender 0,6 ETH, saldoen reduseres med 0,6. Enklere mentalt, men UTXO har fordeler for personvern og parallell prosessering.

## Hvordan fungerer det

UTXO sporer mynter gjennom en kjede av transaksjoner.

```
Alice miner blokk → Mottar 6,25 BTC (coinbase UTXO)
  ↓
Alice sender 2 BTC til Bob:
  Input: 6,25 BTC UTXO (brukes opp)
  Output 1: 2 BTC → Bob (ny UTXO)
  Output 2: 4,249 BTC → Alice (vekslepenger, ny UTXO)
  Gebyr: 0,001 BTC
  ↓
Bob sender 1,5 BTC til Carol:
  Input: 2 BTC UTXO (brukes opp)
  Output 1: 1,5 BTC → Carol (ny UTXO)
  Output 2: 0,499 BTC → Bob (vekslepenger, ny UTXO)
```

UTXO-settet er samlingen av alle ubrukte transaksjonsutganger på hele Bitcoin-nettverket til enhver tid. Det er den «levende» tilstanden til Bitcoin – rundt 80–90 millioner UTXOer.

## Hvorfor er det viktig

UTXO-modellen har flere fordeler over kontomodellen. Personvern er bedre fordi du kan bruke ny adresse for hvert vekslepenger-output – vanskeligere å spore. Parallell prosessering fungerer bedre fordi uavhengige UTXOer kan prosesseres parallelt (relevant for skalering). Dobbeltbruk-beskyttelse er enklere fordi UTXO enten er brukt eller ubrukt – binært, ingen race conditions. Og det er lettere å verifisere fordi du trenger bare sjekke UTXO-settet, ikke hele kontohistorikken.

Ulemper er at det er mer komplekst for brukere og utviklere (smart contracts er enklere med kontomodell), at UTXO-støv (mange små UTXOer) øker transaksjonskostnader, og at det er mindre intuitivt enn «kontobalanse».

UTXO-konsolidering er viktig: mange små UTXOer gjør transaksjoner dyre (mange inputs = mer data = mer gebyr). I perioder med lave gebyrer bør du konsolidere ved å sende alle UTXOer til deg selv i én transaksjon.

## Eksempler

Vekslepenger: Du har 1 BTC UTXO og vil sende 0,01 BTC. Hele 1 BTC UTXO brukes som input. 0,01 BTC til mottaker, 0,989 BTC tilbake som vekslepenger. Gebyret beregnes fra datastørrelsen, ikke beløpet.

UTXO-støv: Du har 200 små UTXOer på 0,0001 BTC hver (fra mange små mottak). For å sende dem alle trengs 200 inputs – transaksjonen er stor og dyr. Konsolider i rolige perioder.

Personvern: Din wallet genererer ny adresse for hvert vekslepenger-output. En utenforstående ser mange adresser – vanskeligere å knytte dem til én person enn i kontomodellen der alt skjer fra én adresse.

## Vanlige spørsmål

### Trenger jeg å forstå UTXO for å bruke Bitcoin?
Nei – wallets håndterer alt automatisk. Men å forstå det hjelper deg med gebyroptimalisering (konsolidering) og personvern (coin control).

### Hva er UTXO-støv?
Veldig små UTXOer som koster mer å bruke enn de er verdt (gebyret overstiger verdien). De «sitter fast» i lommeboken.

### Bruker Ethereum UTXO?
Nei – Ethereum bruker kontomodellen (én balanse per adresse). Cardano og Ergo bruker utvidede UTXO-modeller (eUTXO) med smart contract-støtte.

### Hva er coin control?
En wallet-funksjon der du manuelt velger hvilke UTXOer som brukes i en transaksjon – viktig for personvern og gebyroptimalisering.

## Relaterte begreper

- [Bitcoin](/krypto/hva-er-bitcoin) – bruker UTXO-modellen
- [Blockchain](/krypto/hva-er-blockchain) – der UTXOer spores
- [Double spending](/krypto/hva-er-double-spending) – UTXO forhindrer det
- [Lightning Network](/krypto/hva-er-lightning-network) – bygget oppå UTXO
- [Ethereum](/krypto/hva-er-ethereum) – bruker kontomodellen (alternativet)

## Se også

- [Hva er Bitcoin?](/krypto/hva-er-bitcoin)
- [Hva er blockchain?](/krypto/hva-er-blockchain)

## Oppsummering

UTXO er Bitcoins transaksjonsmodell der mynter spores som ubrukte «sedler» – ikke som kontosaldo. Du bruker UTXOer som input og mottar vekslepenger som ny UTXO. Det gir bedre personvern og dobbeltbruk-beskyttelse enn kontomodellen. Wallets håndterer det automatisk, men å forstå UTXO hjelper med gebyroptimalisering og coin control.
