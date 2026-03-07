---
title: "Hva er blockchain?"
slug: "hva-er-blockchain"
category: "krypto"
subcategory: "grunnleggende"
description: "Blockchain er en desentralisert, uforanderlig digital hovedbok som registrerer transaksjoner. Lær hva blockchain er, hvordan det fungerer, og hvorfor det endrer alt."
keywords: ["blockchain", "blokkjede", "distribuert hovedbok", "desentralisert", "blokker"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Blockchain"
aliases: ["blokkjede", "blokkjedeteknologi", "distribuert hovedbok"]
related: ["hva-er-bitcoin", "hva-er-ethereum", "hva-er-kryptovaluta", "hva-er-defi", "hva-er-staking"]
seeAlso: ["hva-er-bitcoin", "hva-er-ethereum"]
tags: ["blockchain", "krypto", "grunnleggende", "teknologi"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er blockchain?

Blockchain (blokkjede) er en desentralisert, distribuert digital hovedbok der transaksjoner registreres i kronologiske blokker som kjedes sammen kryptografisk – noe som gjør dataen tilnærmet umulig å endre i ettertid.

> **Kort forklart**
> Tenk deg en regnskapsbok som tusenvis av mennesker har en identisk kopi av. Hver gang en ny transaksjon skjer, verifiserer alle kopiene at den er gyldig, og den skrives inn permanent. Ingen enkeltperson kan endre det som allerede er skrevet – fordi alle andre har sin kopi. Det er blockchain: en felles, uforanderlig sannhetskilde uten behov for en betrodd tredjepart som en bank.

## Hva betyr begrepet

Blockchain består av to ord: «block» (blokk – en samling transaksjoner) og «chain» (kjede – blokkene lenkes kryptografisk sammen). Hver blokk inneholder en liste med transaksjoner, en tidsstempling, en referanse (hash) til forrige blokk, og en egen unik hash (digitalt fingeravtrykk).

Hashen til forrige blokk er det som skaper kjeden. Hvis noen prøver å endre en gammel transaksjon, endres hashen – og alle etterfølgende blokker blir ugyldige. Å endre én blokk krever å endre alle etterfølgende blokker raskere enn resten av nettverket – i praksis umulig for store blokkjeder.

Nøkkelegenskaper er desentralisert (ingen sentral myndighet kontrollerer den – tusenvis av noder har identiske kopier), transparent (alle transaksjoner er offentlig synlige – hvem som helst kan verifisere), uforanderlig (data som er skrevet kan ikke endres eller slettes), og tillitsløs (du trenger ikke stole på noen – matematikken garanterer integriteten).

Bitcoin-blokkjeden (lansert 2009) var den første. Ethereum (2015) utvidet konseptet med smarte kontrakter – programmerbar logikk på blokkjeden. I dag finnes hundrevis av blokkjeder med ulike egenskaper og bruksområder.

## Hvordan fungerer det

Blockchain registrerer transaksjoner i blokker som kjedes sammen kronologisk.

```
Transaksjon sendes → Nettverket verifiserer → Transaksjonen samles i en blokk med andre → Konsensusmekanisme godkjenner blokken → Blokken legges til kjeden → Alle noder oppdaterer sin kopi → Permanent og uforanderlig
```

Konsensusmekanismen er metoden nettverket bruker for å bli enige om hvilke transaksjoner som er gyldige. Proof of Work (Bitcoin) bruker enorm datakraft – minere konkurrerer om å løse et matematisk puslespill. Proof of Stake (Ethereum) bruker staking – validatorer stiller krypto som sikkerhet for ærlig oppførsel.

Noder er datamaskiner som kjører blokkjedens programvare og oppbevarer en fullstendig kopi. Bitcoin har ~18 000 noder globalt. Jo flere noder, desto mer desentralisert og robust er nettverket.

## Hvorfor er det viktig

Blockchain løser «tillitsproblemet» – behovet for en betrodd tredjepart (bank, notar, myndighet) for å verifisere transaksjoner. Med blockchain kan to fremmede overføre verdi direkte – matematikken erstatter tilliten.

Bruksområder utover krypto er supply chain (spore varer fra fabrikk til butikk), eiendomsregistre (uforanderlige eiendomsskjøter), stemmegivning (verifiserbare, manipulasjonssikre valg), digital identitet (selvkontrollerte digitale ID-er), og tokenisering av eiendeler (aksjer, eiendom, kunst som tokens).

Begrensninger er skalerbarhet (blokkjeder er tregere enn tradisjonelle databaser), energibruk (Proof of Work er energikrevende – PoS er mye bedre), og kompleksitet (brukeropplevelsen er fortsatt krevende for vanlige folk).

## Eksempler

Bitcoin-transaksjon: Du sender 0,1 BTC. Transaksjonen kringkastes til nettverket, verifiseres av noder, inkluderes i en blokk av en miner, og legges til kjeden. Uforanderlig og verifiserbar av alle – for alltid.

Smart kontrakt: En forsikringsavtale på Ethereum utbetaler automatisk ved flyforsinkelse – sensoren bekrefter forsinkelsen, smart-kontrakten utbetaler. Ingen saksbehandler nødvendig.

Supply chain: Walmart sporer mango fra gård til butikkhylle på blockchain. Ved matforgiftning kan de identifisere kilden på sekunder i stedet for dager.

## Vanlige spørsmål

### Er blockchain det samme som Bitcoin?
Nei. Bitcoin er én kryptovaluta som bruker blockchain-teknologi. Blockchain er den underliggende teknologien – som internett er til e-post. Det finnes hundrevis av blokkjeder.

### Kan blockchain hackes?
En blokkjede kan teoretisk angripes med et «51 prosent-angrep» (kontrollere flertallet av nettverkets datakraft/stake). For Bitcoin og Ethereum er dette i praksis umulig – det ville koste milliarder.

### Er alle blokkjeder offentlige?
Nei. Offentlige blokkjeder (Bitcoin, Ethereum) er åpne for alle. Private/permissioned blokkjeder (Hyperledger, Corda) brukes av bedrifter med begrenset tilgang.

### Bruker blockchain mye energi?
Proof of Work (Bitcoin) bruker mye energi. Proof of Stake (Ethereum etter The Merge 2022) bruker 99,95 prosent mindre. De fleste nye blokkjeder bruker PoS.

### Hva er en smart kontrakt?
Et program som kjører automatisk på blokkjeden når forhåndsdefinerte betingelser oppfylles – «hvis X skjer, gjør Y». Grunnlaget for DeFi, NFT-er og hele det programmerbare web3.

## Relaterte begreper

- [Bitcoin](/krypto/hva-er-bitcoin) – den første blokkjeden
- [Ethereum](/krypto/hva-er-ethereum) – blokkjeden med smarte kontrakter
- [Kryptovaluta](/krypto/hva-er-kryptovaluta) – digitale verdier på blokkjeden
- [DeFi](/krypto/hva-er-defi) – desentralisert finans bygget på blockchain
- [Staking](/krypto/hva-er-staking) – Proof of Stake sikrer blokkjeden

## Se også

- [Hva er Bitcoin?](/krypto/hva-er-bitcoin)
- [Hva er Ethereum?](/krypto/hva-er-ethereum)

## Oppsummering

Blockchain er en desentralisert, uforanderlig digital hovedbok der transaksjoner registreres i kryptografisk lenkte blokker. Den fjerner behovet for betrodde tredjeparter – matematikken garanterer integriteten. Bitcoin var den første, Ethereum la til smarte kontrakter. Blockchain brukes i krypto, supply chain, identitet og mye mer. Det er teknologien bak Web3-revolusjonen.
