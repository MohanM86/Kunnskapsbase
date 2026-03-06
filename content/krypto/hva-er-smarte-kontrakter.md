---
title: "Hva er smarte kontrakter?"
slug: "hva-er-smarte-kontrakter"
category: "krypto"
subcategory: "grunnleggende"
description: "Smarte kontrakter er selvutførende programmer på blockchain. Lær hva smarte kontrakter er, hvordan de fungerer, og hva de brukes til."
keywords: ["smarte kontrakter", "smart contract", "selvutførende kontrakt", "Solidity", "EVM"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Smarte kontrakter"
aliases: ["smart contract", "smart contracts", "selvutførende kontrakt"]
related: ["hva-er-ethereum", "hva-er-blockchain", "hva-er-defi", "hva-er-web3", "hva-er-nft"]
seeAlso: ["hva-er-ethereum", "hva-er-defi"]
tags: ["smarte kontrakter", "krypto", "ethereum", "programmering"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er smarte kontrakter?

En smart kontrakt er et program lagret på en blockchain som kjører automatisk når forhåndsdefinerte betingelser er oppfylt.

> **Kort forklart**
> Tenk på en smart kontrakt som en digital automat: du legger inn noe (en transaksjon), maskinen sjekker betingelsene, og resultatet utføres automatisk – uten at noen kan gripe inn eller endre reglene underveis.

## Hva betyr begrepet

Begrepet «smart kontrakt» ble først brukt av informatikeren Nick Szabo i 1994, lenge før blockchain eksisterte. Han beskrev det som en digital avtale som håndhever seg selv automatisk.

I blockchain-sammenheng er en smart kontrakt et stykke programkode som er publisert på en blockchain, vanligvis Ethereum. Koden definerer regler og betingelser, og når disse er oppfylt, utføres handlingene automatisk. Ingen person eller organisasjon kan stoppe eller endre utførelsen etter at kontrakten er publisert.

Ordet «kontrakt» kan være misvisende – det er ikke en juridisk avtale, men et dataprogram som utfører forhåndsbestemte operasjoner.

## Hvordan fungerer det

En smart kontrakt følger en enkel logikk: «hvis X skjer, gjør Y».

```
Utvikler skriver kode → Publiserer til blockchain → Bruker sender transaksjon → Betingelser sjekkes → Handling utføres automatisk → Resultat lagres permanent
```

En utvikler skriver kontrakten i et programmeringsspråk som Solidity (for Ethereum). Koden kompileres og publiseres til blockchainen, der den får sin egen adresse – akkurat som en vanlig konto.

Når en bruker sender en transaksjon til kontraktens adresse, kjører Ethereum Virtual Machine (EVM) koden. Kontrakten sjekker om betingelsene er oppfylt, og utfører i så fall de programmerte handlingene. Alt skjer transparent og verifiserbart.

Smarte kontrakter kan holde kryptovaluta, sende verdier til andre adresser, kalle andre kontrakter og lagre data. De kan ikke hente data fra utenfor blockchainen på egen hånd – til det trengs orakler som Chainlink.

## Hvorfor er det viktig

Smarte kontrakter fjerner behovet for mellomledd i en rekke situasjoner. I stedet for å stole på en advokat, bank eller megler, stoler partene på at koden utfører avtalen korrekt.

Dette gir forutsigbarhet fordi reglene er transparente og uforanderlige. Det gir effektivitet fordi prosesser som normalt tar dager kan gjennomføres på sekunder. Og det gir tilgjengelighet fordi hvem som helst kan bruke en smart kontrakt uten godkjenning.

Smarte kontrakter er grunnlaget for nesten alt som bygges i krypto-økosystemet i dag: DeFi, NFT-er, DAO-er, spill og mye mer.

## Eksempler

En crowdfunding-kontrakt kan programmeres til å automatisk returnere midler til bidragsyterne hvis innsamlingsmålet ikke nås innen en frist, uten at noen manuelt må behandle refusjoner.

I DeFi bruker utlånsprotokoller smarte kontrakter til å automatisk beregne renter, ta imot sikkerhet og likvidere posisjoner hvis verdien av sikkerheten faller under et visst nivå.

NFT-kontrakter definerer reglene for digitale samleobjekter – hvem som eier dem, hvordan de kan overføres, og om den opprinnelige kunstneren skal få royalties ved videresalg.

Forsikringskontrakter kan automatisk utbetale erstatning basert på verifiserbare data, for eksempel en flyforsinkelsesforsikring som utbetales automatisk når flyet er forsinket.

## Vanlige spørsmål

### Kan en smart kontrakt endres etter publisering?
Som hovedregel nei. Når en kontrakt er publisert på blockchainen, er koden permanent. Noen kontrakter er designet med oppgraderingsmekanismer, men dette krever bevisst planlegging og introduserer et tillitselement.

### Hva skjer hvis det er en feil i koden?
Feil i smarte kontrakter kan ha alvorlige konsekvenser, inkludert tap av midler. Derfor er grundig testing og uavhengig sikkerhetsgransking (audit) viktig før publisering.

### Hvilke programmeringsspråk brukes?
Solidity er det mest brukte språket for Ethereum. Andre alternativer inkluderer Vyper (også for Ethereum), Rust (for Solana) og Move (for Aptos og Sui).

### Er smarte kontrakter juridisk bindende?
Smarte kontrakter er tekniske programmer, ikke juridiske dokumenter. De kan supplere juridiske avtaler, men erstatter dem ikke i rettslig forstand. Lovgivningen på dette området er fortsatt i utvikling.

### Hva er et orakel i krypto?
Et orakel er en tjeneste som leverer data fra utenfor blockchainen til smarte kontrakter. Chainlink er det mest kjente eksemplet og brukes til å hente priser, værdata, sportsresultater og annen informasjon.

## Relaterte begreper

- [Ethereum](/krypto/hva-er-ethereum) – den mest brukte plattformen for smarte kontrakter
- [DeFi](/krypto/hva-er-defi) – finansielle tjenester bygget med smarte kontrakter
- [Blockchain](/krypto/hva-er-blockchain) – teknologien kontrakter kjører på
- [NFT](/krypto/hva-er-nft) – digitale eiendeler styrt av smarte kontrakter
- [Web3](/krypto/hva-er-web3) – det desentraliserte internett drevet av smarte kontrakter

## Se også

- [Hva er Ethereum?](/krypto/hva-er-ethereum)
- [Hva er DeFi?](/krypto/hva-er-defi)
- [Hva er NFT?](/krypto/hva-er-nft)

## Oppsummering

Smarte kontrakter er selvutførende programmer på blockchain som automatisk utfører handlinger når betingelsene er oppfylt. De er grunnlaget for DeFi, NFT-er og det meste av krypto-økosystemet, og fjerner behovet for mellomledd i digitale avtaler.
