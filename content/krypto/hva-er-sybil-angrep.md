---
title: "Hva er Sybil-angrep?"
slug: "hva-er-sybil-angrep"
category: "krypto"
subcategory: "grunnleggende"
description: "Et Sybil-angrep er når én aktør oppretter mange falske identiteter for å manipulere et nettverk. Lær hva det er, sammenhengen med airdrops, og hvordan blokkjeder forsvarer seg."
keywords: ["Sybil attack", "Sybil-angrep", "falsk identitet", "airdrop farming", "Sybil-deteksjon"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Sybil-angrep"
aliases: ["Sybil attack", "identitetsangrep"]
related: ["hva-er-airdrop", "hva-er-proof-of-work", "hva-er-proof-of-stake", "hva-er-byzantine-fault-tolerance", "hva-er-node"]
seeAlso: ["hva-er-airdrop", "hva-er-proof-of-work"]
tags: ["Sybil", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er Sybil-angrep?

Et Sybil-angrep er når én aktør oppretter mange falske identiteter (wallets, noder, kontoer) for å få uforholdsmessig innflytelse over et nettverk eller system – oppkalt etter en bok om en kvinne med multippel personlighetsforstyrrelse.

> **Kort forklart**
> I et system der «1 person = 1 stemme», lager en Sybil-angriper 1 000 identiteter og får 1 000 stemmer. I krypto er det mest vanlig i airdrops (én person med 500 wallets henter 500 airdrops), governance (én person med mange wallets dominerer avstemninger), og nettverk (én aktør med mange noder manipulerer konsensus). Proof of Work og Proof of Stake forsvarer seg med økonomisk kostnad – å jukse er dyrt.

## Hva betyr begrepet

Sybil-angrep utnytter at det er gratis og enkelt å opprette nye identiteter på blokkjeder. Hvem som helst kan lage ubegrenset mange wallets på sekunder. Uten mekanismer som gjør det dyrt å opprette identiteter, kan én aktør dominere systemer designet for distribusjon.

I blokkjedekonsensus forsvarer PoW mot Sybil gjennom energikostnad – du trenger maskinvare og strøm for å mine, ikke bare mange identiteter. PoS forsvarer gjennom kapitalkostnad – du trenger staket verdi, som er dyr uavhengig av antall identiteter.

I airdrops er Sybil-farming den største utfordringen: «farmere» oppretter hundrevis av wallets, utfører minimale transaksjoner på hver, og claimer airdrops på alle. Det utvanner belønningen for ekte brukere. Prosjekter bruker stadig mer sofistikert Sybil-deteksjon: transaksjonsanalyse (wallets som handler med hverandre), gas-kilde-analyse (alle wallets finansiert fra samme kilde), atferdsmønstre (identisk handlingsmønster på tvers av wallets), og identitetsattestasjon (Gitcoin Passport, Worldcoin).

## Hvordan fungerer det

Sybil-angrep utnytter lav kostnad for identitetsopprettelse.

```
Sybil-angrep på airdrop:
1. Opprett 500 wallets
2. Finansier alle fra én kilde (f.eks. via mixer)
3. Utfør minimale kvalifiseringshandlinger på hver
4. Claim airdrop × 500
5. Selg alle tokens

Forsvar:
Prosjektet analyserer → Wallet-klynge identifisert → Finansieringskilde → Tranaksjonsmønster → Sybil-flagget → Diskvalifisert fra airdrop
```

## Hvorfor er det viktig

Sybil-angrep truer rettferdigheten i desentraliserte systemer. Uten forsvar kan én aktør kapre governance-avstemninger, monopolisere airdrops, og manipulere nettverkskonsensus.

Det er et fundamentalt problem i åpne, tillatelsesløse systemer – du kan ikke kreve ID-verifisering uten å bryte desentraliseringsprinsippene. Proof of Personhood-prosjekter (Worldcoin, Gitcoin Passport) forsøker å løse dette uten tradisjonell KYC.

## Eksempler

Airdrop-farming: En Sybil-farmer opprettet 2 000 wallets for Arbitrum-airdropen. Arbitrum Foundation identifiserte og ekskluderte de fleste, men noen slapp gjennom.

Governance: En aktør kjøper governance tokens med 100 wallets for å se «desentralisert» ut – men kontrollerer alle stemmene. Whale Alert-verktøy kan avsløre dette.

## Vanlige spørsmål

### Er Sybil-farming ulovlig?
Juridisk gråsone – det bryter typisk prosjektets vilkår men er sjelden strafferettslig. Det er uetisk og undergraver fellesskapet.

### Hvordan vet prosjekter at det er Sybil?
Klyngeanalyse: wallets finansiert fra samme kilde, identiske tranaksjonsmønstre, timing-korrelasjon. Det er et våpenkappløp mellom farmere og detektorer.

### Hva er Proof of Personhood?
Systemer som bekrefter at du er en unik, ekte person uten tradisjonell KYC – Worldcoin (iris-skanning), Gitcoin Passport (sosial attestasjon).

## Relaterte begreper

- [Airdrop](/krypto/hva-er-airdrop) – mest utsatt for Sybil
- [Proof of Work](/krypto/hva-er-proof-of-work) – forsvarer med energikostnad
- [Proof of Stake](/krypto/hva-er-proof-of-stake) – forsvarer med kapitalkostnad
- [Byzantine Fault Tolerance](/krypto/hva-er-byzantine-fault-tolerance) – BFT forutsetter Sybil-forsvar
- [Node](/krypto/hva-er-node) – Sybil-noder kan manipulere konsensus

## Se også

- [Hva er airdrop?](/krypto/hva-er-airdrop)
- [Hva er Proof of Work?](/krypto/hva-er-proof-of-work)

## Oppsummering

Sybil-angrep er å opprette mange falske identiteter for å manipulere et system – vanligst i airdrops og governance. PoW/PoS forsvarer med økonomisk kostnad. Prosjekter bruker klyngeanalyse for å oppdage Sybil-farmere. Proof of Personhood er et fremvoksende forsvar. Det er et fundamentalt problem i tillatelsesløse systemer.
