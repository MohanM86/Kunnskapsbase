---
title: "Hva er orakler i krypto?"
slug: "hva-er-orakler"
category: "krypto"
subcategory: "grunnleggende"
description: "Orakler leverer data fra den virkelige verden til smarte kontrakter på blockchain. Lær hva krypto-orakler er, hvordan de fungerer, og hvorfor de er viktige."
keywords: ["orakel", "oracle", "Chainlink", "data feed", "off-chain data"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Orakler"
aliases: ["oracle", "blockchain oracle", "krypto-orakel"]
related: ["hva-er-smarte-kontrakter", "hva-er-defi", "hva-er-ethereum", "hva-er-blockchain", "hva-er-depin"]
seeAlso: ["hva-er-smarte-kontrakter", "hva-er-defi"]
tags: ["orakler", "krypto", "Chainlink", "data"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er orakler i krypto?

Et orakel er en tjeneste som leverer data fra utenfor blockchainen til smarte kontrakter, slik at de kan reagere på hendelser og informasjon fra den virkelige verden.

> **Kort forklart**
> Blockchains kan ikke se utenfor seg selv. Et orakel er øynene og ørene – det henter data som aksjekurser, værforhold eller sportsresultater og leverer dem til smarte kontrakter som kan handle basert på informasjonen.

## Hva betyr begrepet

I gresk mytologi var orakelet en kilde til sannhet og kunnskap. I krypto har begrepet en lignende rolle: orakler er tjenester som leverer pålitelig informasjon fra den virkelige verden inn i blockchain-verdenen.

Problemet orakler løser kalles «oracle-problemet» eller «blockchain-broen». Smarte kontrakter kan kun lese data som allerede finnes på blockchainen. De kan ikke hente priser fra børser, sjekke værdata, eller verifisere om en pakke er levert. Orakler fyller dette gapet.

Uten orakler ville DeFi-protokoller ikke vite prisen på tokens, forsikringskontakter ikke vite om en hendelse har skjedd, og predikasjonsmarkeder ikke vite utfallet av en hendelse.

## Hvordan fungerer det

Orakler samler data fra utenfor blockchainen, verifiserer den, og leverer den til smarte kontrakter i et pålitelig format.

```
Smart kontrakt trenger data → Orakelnettverk aktiveres → Flere noder henter data uavhengig → Data aggregeres og verifiseres → Resultat leveres til smart kontrakt → Kontrakten utfører handling
```

De fleste moderne orakler bruker et desentralisert nettverk av noder som uavhengig henter data fra flere kilder. Dataene aggregeres (for eksempel ved å ta medianen) for å eliminere feil og manipulasjon. Nodene insentiveres med tokens for å levere korrekt data og straffes for feil.

Chainlink, det største orakelnettverket, bruker hundrevis av uavhengige nodeoperatører som henter data fra premium datakilder. Resultatene aggregeres og publiseres som «price feeds» som DeFi-protokoller kan lese.

Det finnes også push-orakler (som leverer data jevnlig) og pull-orakler (som leverer data på forespørsel), samt orakler spesialisert for bestemte datatyper som tilfeldige tall (VRF) eller automatisert utførelse (Keepers/Automation).

## Hvorfor er det viktig

Orakler er kritisk infrastruktur for hele DeFi-økosystemet. Uten pålitelige prisdata kan ikke utlånsprotokoller vurdere sikkerhetsverdier, desentraliserte børser kan ikke sette priser, og syntetiske eiendeler kan ikke speile virkelige verdier.

Sikkerheten til orakler påvirker direkte sikkerheten til alle protokoller som bruker dem. Hvis et orakel manipuleres til å rapportere feil pris, kan det utløse feilaktige likvidasjoner i utlånsprotokoller eller la angripere tømme likviditetspooler. Slike angrep har kostet hundrevis av millioner dollar.

Etter hvert som smarte kontrakter brukes til mer avanserte oppgaver – forsikring, forsyningskjeder, IoT – øker behovet for orakler som kan levere stadig flere typer data pålitelig.

## Eksempler

Chainlink er det desidert største orakelnettverket og sikrer hundrevis av milliarder dollar i DeFi. Det leverer prisdata, tilfeldige tall, automatisert utførelse og cross-chain kommunikasjon.

Pyth Network spesialiserer seg på høyhastighets finansielle data og leverer priser med under-sekund oppdateringsfrekvens. Det er populært på Solana og andre høyhastighets blockchains.

API3 tar en annen tilnærming der datakildene selv kjører orakelnoder, noe som eliminerer mellomledd og potensielt øker datakvaliteten.

UMA (Universal Market Access) bruker en optimistisk modell der data antas å være korrekt med mindre noen utfordrer den, noe som er spesielt egnet for sjeldne hendelser og predikasjonsmarkeder.

## Vanlige spørsmål

### Kan orakler manipuleres?
Desentraliserte orakler med mange uavhengige noder er svært vanskelige å manipulere. Svakere orakelløsninger med få datakilder eller sentraliserte punkter er mer sårbare. Orakelmanipulasjon er en kjent angrepsvektor i DeFi.

### Hva er forskjellen mellom Chainlink og Pyth?
Chainlink er det mest etablerte og bredeste orakelnettverket med fokus på sikkerhet og desentralisering. Pyth fokuserer på hastighet og leverer høyfrekvente finansielle data. Mange prosjekter bruker begge.

### Trenger alle smarte kontrakter orakler?
Nei. Smarte kontrakter som kun opererer med data som allerede finnes på blockchainen (som token-bytteavtaler) trenger ikke orakler. Orakler trengs når kontrakten må reagere på informasjon fra den virkelige verden.

### Hva er en flash loan-orakelattack?
En angriper bruker et flash loan (lån uten sikkerhet i én transaksjon) til å midlertidig manipulere prisen i en likviditetspool. Hvis et orakel leser prisen fra denne poolen, får den feil data, noe som angriperen utnytter. Gode orakler bruker derfor flere datakilder.

### Hvordan tjener orakelnoder penger?
Nodeoperatører belønnes med tokens (som LINK for Chainlink) for å levere korrekt data. De staker tokens som sikkerhet og kan miste dem hvis de leverer feil informasjon.

## Relaterte begreper

- [Smarte kontrakter](/krypto/hva-er-smarte-kontrakter) – programmene som orakler leverer data til
- [DeFi](/krypto/hva-er-defi) – økosystemet som er mest avhengig av orakler
- [Ethereum](/krypto/hva-er-ethereum) – plattformen med størst behov for orakeldata
- [Blockchain](/krypto/hva-er-blockchain) – teknologien orakler kobler til omverdenen
- [DePIN](/krypto/hva-er-depin) – desentralisert infrastruktur som orakler er en del av

## Se også

- [Hva er smarte kontrakter?](/krypto/hva-er-smarte-kontrakter)
- [Hva er DeFi?](/krypto/hva-er-defi)
- [Hva er Ethereum?](/krypto/hva-er-ethereum)

## Oppsummering

Orakler er tjenester som leverer data fra den virkelige verden til smarte kontrakter på blockchain. De er kritisk infrastruktur for DeFi og muliggjør alt fra prisfeeds til forsikringsutbetalinger. Påliteligheten til orakler påvirker direkte sikkerheten til milliarder av dollar i kryptoøkosystemet.
