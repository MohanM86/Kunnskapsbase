---
title: "Hva er Proof of Work og mining?"
slug: "hva-er-proof-of-work"
category: "krypto"
subcategory: "grunnleggende"
description: "Proof of Work er konsensusmekanismen der minere konkurrerer om å løse matematiske puslespill for å validere transaksjoner. Lær hva PoW og kryptomining er."
keywords: ["Proof of Work", "mining", "kryptomining", "hashrate", "PoW"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Proof of Work"
aliases: ["PoW", "kryptomining", "mining", "bevis på arbeid"]
related: ["hva-er-proof-of-stake", "hva-er-bitcoin", "hva-er-blockchain", "hva-er-halving", "hva-er-ethereum"]
seeAlso: ["hva-er-proof-of-stake", "hva-er-bitcoin"]
tags: ["Proof of Work", "krypto", "grunnleggende", "konsensus"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er Proof of Work og mining?

Proof of Work (PoW) er en konsensusmekanisme der minere konkurrerer om å løse kryptografiske puslespill med datakraft for å validere transaksjoner og legge nye blokker til blokkjeden – og belønnes med nyopprettet kryptovaluta.

> **Kort forklart**
> Mining er kryptos versjon av gullgraving – du bruker datakraft i stedet for spader. Minere konkurrerer om å løse et matematisk puslespill. Den første som finner løsningen får lov å legge neste blokk til blokkjeden og mottar en belønning (6,25 BTC for Bitcoin, ~400 000 kr). Det sikrer nettverket fordi å jukse krever mer datakraft enn hele det ærlige nettverket. Bitcoin bruker PoW – Ethereum byttet til Proof of Stake i 2022.

## Hva betyr begrepet

Proof of Work betyr «bevis på arbeid» – du beviser at du har utført et betydelig beregningsarbeid. Det er som å delta i et lotteri der du må knuse tall for å finne det vinnende nummeret – og jo mer datakraft du bruker, desto flere lodd har du.

Mining-prosessen fungerer slik: transaksjoner samles i en blokk, minere konkurrerer om å finne en hash (digitalt fingeravtrykk) som oppfyller nettverkets vanskelighetskrav, den første som finner en gyldig hash kringkaster blokken, nettverket verifiserer og aksepterer blokken, og vinneren mottar blokkbelønning (nye coins) pluss transaksjonsgebyrer.

Nøkkelbegreper er hashrate (antall beregninger per sekund – målt i TH/s for Bitcoin), difficulty (vanskelighetsgraden justeres automatisk slik at nye blokker kommer ca. hvert 10. minutt for Bitcoin), block reward (belønningen for å finne en blokk – halveres hvert 4. år ved halving), mining pool (grupper av minere som samarbeider og deler belønningen), og ASIC (Application-Specific Integrated Circuit – spesialisert maskinvare designet kun for mining).

Bitcoin mining har utviklet seg fra CPU (2009, vanlig PC) til GPU (2010, grafikkort) til FPGA (2011) til ASIC (2013+, dedikert maskinvare). I dag er Bitcoin mining dominert av massive ASIC-farmer – å mine på vanlig PC er umulig.

## Hvordan fungerer det

PoW sikrer nettverket gjennom økonomisk kostnad – å jukse er dyrere enn å spille etter reglene.

```
Transaksjoner samles → Minere konkurrerer om å finne gyldig hash → Milliarder av forsøk per sekund → Vinner finner hash → Blokk kringkastes → Nettverket verifiserer (billig) → Blokk godkjent → Belønning utbetalt → Neste runde starter
```

51 prosent-angrep: for å manipulere Bitcoin-blokkjeden trenger du mer hashrate enn resten av nettverket til sammen. Bitcoins hashrate er ~600 EH/s (exahash per sekund) – å anskaffe den mengden maskinvare og strøm ville koste titalls milliarder dollar. I praksis umulig.

Energiforbruk er PoWs største kontrovers. Bitcoin bruker omtrent 150 TWh per år – sammenlignbart med et middels stort land. Tilhengere argumenterer med at det sikrer et billionverdis nettverk, at mye er fornybar energi (50–60 prosent), og at det bruker energi som ellers ville gått til spille. Kritikere peker på klimaavtrykket og at Proof of Stake gir samme sikkerhet med 99,95 prosent mindre energi.

## Hvorfor er det viktig

PoW var blokkjederevolusjons grunnstein – Satoshi Nakamoto løste «Byzantine Generals' Problem» (hvordan oppnå enighet uten tillit) gjennom å kreve beviselig arbeid. Uten PoW hadde vi ikke hatt Bitcoin.

Ethereum byttet fra PoW til PoS i «The Merge» (september 2022) og reduserte energiforbruket med 99,95 prosent. De fleste nye blokkjeder bruker PoS. Bitcoin er den viktigste gjenværende PoW-kjeden, og det er ingen planer om å endre det – Bitcoins sikkerhet og desentralisering anses som avhengig av PoW.

## Eksempler

Bitcoin-mining: Et mining-selskap i Nord-Norge bruker billig vannkraft til å drive ASIC-maskiner. De tjener 6,25 BTC per blokk de finner – men konkurrerer med global hashrate.

Mining pool: Du har én ASIC-maskin. Alene finner du en blokk kanskje hvert 5. år. Du slutter deg til en pool (som F2Pool) og deler belønningen proporsjonalt med din hashrate – jevnere inntekt.

Halving: I april 2024 halverte Bitcoin blokkbelønningen fra 6,25 til 3,125 BTC. Minere med høye strømkostnader ble ulønnsomme – bare de mest effektive overlevde.

Energidebatt: El Salvador miner Bitcoin med geotermisk energi fra vulkaner. Island bruker overskuddskraft fra geotermiske kilder. Kritikere peker på kullkraft i Kazakhstan og Texas.

## Vanlige spørsmål

### Kan jeg mine Bitcoin hjemme?
Ikke lønnsomt – du trenger ASIC-maskinvare (50 000–200 000 kr) og billig strøm. Strømkostnaden i Norge (typisk 1–2 kr/kWh) gjør det marginalt. Du kan mine andre PoW-coins (Monero) med vanlig PC.

### Hva skjer når alle Bitcoin er minet?
Siste Bitcoin mines rundt år 2140. Da lever minere kun av transaksjonsgebyrer. Halvinger gjør at belønningen gradvis nærmer seg null lenge før det.

### Hvorfor bruker Bitcoin så mye energi?
Energien er sikkerhetsmekanismen – den gjør det astronomisk dyrt å angripe nettverket. Jo mer energi, desto tryggere. Det er et bevisst designvalg.

### Hva er forskjellen på PoW og PoS?
PoW bruker datakraft (strøm) som sikkerhet. PoS bruker staket krypto (kapital) som sikkerhet. Begge skaper økonomisk insentiv for ærlig oppførsel. PoS er mer energieffektivt.

### Hva er en mining pool?
En gruppe minere som kombinerer hashrate og deler belønningen proporsjonalt. Det gir jevnere inntekt enn solo mining der du enten finner en blokk (stor gevinst) eller ikke (ingenting).

## Relaterte begreper

- [Proof of Stake](/krypto/hva-er-proof-of-stake) – det energieffektive alternativet
- [Bitcoin](/krypto/hva-er-bitcoin) – den største PoW-blokkjeden
- [Blockchain](/krypto/hva-er-blockchain) – det PoW sikrer
- [Halving](/krypto/hva-er-halving) – halverer mining-belønningen
- [Ethereum](/krypto/hva-er-ethereum) – byttet fra PoW til PoS i 2022

## Se også

- [Hva er Proof of Stake?](/krypto/hva-er-proof-of-stake)
- [Hva er Bitcoin?](/krypto/hva-er-bitcoin)

## Oppsummering

Proof of Work er konsensusmekanismen der minere bruker datakraft for å validere transaksjoner og sikre blokkjeden. Bitcoin er den dominerende PoW-kjeden med en hashrate som gjør angrep praktisk umulig. Mining krever spesialisert ASIC-maskinvare og billig strøm. Energiforbruket er kontroversielt – men det er designets sikkerhetsmekanisme. De fleste nye blokkjeder bruker Proof of Stake i stedet.
