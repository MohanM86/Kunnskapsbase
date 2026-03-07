---
title: "Hva er slashing?"
slug: "hva-er-slashing"
category: "krypto"
subcategory: "grunnleggende"
description: "Slashing er straffen en validator mottar for uærlig oppførsel på en Proof of Stake-blokkjede. Lær hva slashing er, hva som trigger det, og hvordan du unngår det."
keywords: ["slashing", "validator straff", "Proof of Stake", "dobbelsignering", "nedetid"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Slashing"
aliases: ["validator-straff", "kuttstraff"]
related: ["hva-er-proof-of-stake", "hva-er-staking", "hva-er-ethereum", "hva-er-restaking", "hva-er-liquid-staking"]
seeAlso: ["hva-er-proof-of-stake", "hva-er-staking"]
tags: ["slashing", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er slashing?

Slashing er straffemekanismen i Proof of Stake der en validator mister en del av sine stakede midler for uærlig eller feilaktig oppførsel – det sikrer at validatorer har «skin in the game».

> **Kort forklart**
> Staking er en avtale: du stiller krypto som pant, validerer ærlig, og tjener belønning. Bryter du avtalen – ved å dobbelsignere blokker, forsøke censur, eller ha for mye nedetid – mister du en del av pantet. Det er blokkjedens versjon av bøter. Alvorlig juks (dobbelsignering) kan koste hele 32 ETH. Mild nedetid gir kun et lite fratrekk.

## Hva betyr begrepet

Slashing fungerer som et insentiv-system: belønningen for ærlig validering er staking-avkastning, og straffen for uærlig oppførsel er tap av stake. Det gjør juks økonomisk irrasjonelt.

Det finnes to alvorlighetsgrader. Inactivity leak (mild) oppstår ved langvarig nedetid – validatoren mister gradvis en liten del av stake til den er tilbake online. Det er ikke teknisk «slashing» men en penalitet. Slashing (alvorlig) trigges av dobbelsignering (signere to motstridende blokker – forsøk på å lage en fork), surround-voting (attestere for motstridende blokker), og i restaking: brudd på AVS-regler.

Ethereum-spesifikt: slashing for dobbelsignering koster minimum 1/32 av stake (~1 ETH), pluss en korrelasjonsstraff – hvis mange validatorer slashes samtidig (koordinert angrep), øker straffen dramatisk, opptil hele 32 ETH. Validatoren tvangsutmeldes og kan ikke validere igjen.

## Hvordan fungerer det

Slashing oppdages og utføres automatisk av nettverket.

```
Validator dobbelsignerer → Andre validatorer oppdager → Bevis sendes on-chain → Slashing utføres automatisk → Validator mister stake → Validator tvangsutmeldes → Rapportør mottar belønning
```

For vanlige stakere som delegerer (via Lido, Rocket Pool): du eksponeres for slashing-risiko via operatørene som kjører nodene. Lido har et forsikringsfond for å dekke slashing-tap. Rocket Pool krever at node-operatører staker egne ETH som buffer.

## Hvorfor er det viktig

Slashing er det som gjør Proof of Stake sikkert. Uten straff for juks kunne validatorer fritt forsøke å manipulere blokkjeden. Slashing-mekanismen gjør at ærlig oppførsel alltid er mer lønnsomt enn juks.

I praksis er slashing sjelden – det har skjedd under 400 ganger på Ethereum med over 1 million validatorer. De fleste skyldes tekniske feil (kjøre to noder med samme nøkkel), ikke bevisst juks.

## Eksempler

Teknisk feil: En validator kjører backup-noden for tidlig – begge signerer for samme slot. Dobbelsignering oppdages. Validator mister ~1 ETH og tvangsutmeldes.

Korrelasjonsstraff: 100 validatorer fra samme hosting-leverandør slashes samtidig (leverandøren hadde bug). Korrelasjonsstraffen øker – hver mister 3–5 ETH.

Delegert staking: Du staker 10 ETH via Lido. En Lido-operatør blir slashet. Lidos forsikringsfond dekker tapet – du påvirkes minimalt.

## Vanlige spørsmål

### Kan jeg bli slashet som vanlig staker?
Ikke direkte – du slashes som validator (solo staker). Delegerer du via Lido/Rocket Pool, bærer operatøren risikoen, men det kan påvirke din avkastning.

### Hvor mye mister man ved slashing?
Minimum 1/32 av stake (~1 ETH) for isolert hendelse. Opptil hele 32 ETH ved koordinert angrep (korrelasjonsstraff).

### Hva er forskjellen på slashing og inactivity leak?
Slashing er straff for aktiv uærlig oppførsel (dobbelsignering). Inactivity leak er gradvis tap for langvarig nedetid. Slashing er mye alvorligere.

## Relaterte begreper

- [Proof of Stake](/krypto/hva-er-proof-of-stake) – konsensusmekanismen slashing sikrer
- [Staking](/krypto/hva-er-staking) – det du risikerer å miste
- [Ethereum](/krypto/hva-er-ethereum) – der slashing er mest relevant
- [Restaking](/krypto/hva-er-restaking) – dobbel slashing-risiko
- [Liquid staking](/krypto/hva-er-liquid-staking) – delegert slashing-risiko

## Se også

- [Hva er Proof of Stake?](/krypto/hva-er-proof-of-stake)
- [Hva er staking?](/krypto/hva-er-staking)

## Oppsummering

Slashing er straffen for uærlig validator-oppførsel i Proof of Stake – du mister en del av stakede midler. Dobbelsignering er den alvorligste forseelsen. Korrelasjonsstraff øker ved koordinerte brudd. I praksis er slashing sjelden (<400 tilfeller på Ethereum). Det er sikkerhetsmekanismen som gjør PoS tillitsverdig.
