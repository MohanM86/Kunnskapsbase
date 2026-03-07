---
title: "Hva er rug pull?"
slug: "hva-er-rug-pull"
category: "krypto"
subcategory: "grunnleggende"
description: "Rug pull er en kryptosvindel der utviklere trekker likviditeten og stikker av med pengene. Lær hva det er, røde flagg, og hvordan du beskytter deg."
keywords: ["rug pull", "kryptosvindel", "scam", "likviditetstrekking", "exit scam"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Rug pull"
aliases: ["teppetrekking", "exit scam", "kryptosvindel"]
related: ["hva-er-seed-phrase", "hva-er-liquidity", "hva-er-uniswap", "hva-er-memecoins", "hva-er-defi"]
seeAlso: ["hva-er-liquidity", "hva-er-seed-phrase"]
tags: ["rug pull", "krypto", "grunnleggende", "svindel"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er rug pull?

Rug pull («teppetrekk») er en type kryptosvindel der utviklerne av et prosjekt bevisst trekker likviditeten fra en handelspool eller forsvinner med investorenes midler – og lar kjøperne sitte igjen med verdiløse tokens.

> **Kort forklart**
> Rug pull er kryptos versjon av å dra teppet under føttene dine. En utvikler lager en ny token, hyper den opp på sosiale medier, lokker investorer inn, og når nok penger er samlet – trekker de all likviditet og forsvinner. Tokenet krasjer til null. Milliarder er tapt til rug pulls. Røde flagg inkluderer anonyme team, låst likviditet som ikke er låst, og urealistiske løfter.

## Hva betyr begrepet

Rug pulls fungerer i tre faser. Oppbygging der utvikleren oppretter en token, lager en likviditetspool (f.eks. på Uniswap), hyper prosjektet på Twitter/Telegram, kjøper bots og influencere for å skape FOMO. Prisøkning der tidlige kjøpere driver prisen opp og markedsverdi vokser – det ser ut som en suksess. Trekking der utvikleren fjerner all likviditet fra poolen, dumper sine egne tokens, eller aktiverer en skjult funksjon i smart-kontrakten – prisen kollapser til null.

De tre vanligste typene er likviditetstrekking (utvikleren fjerner ETH/USDC-siden av handelspoolen – uten likviditet kan ingen selge), honeypot (smart-kontrakten lar deg kjøpe men ikke selge – en felle), og team-dump (teamet holder en enorm andel tokens og selger alt på toppen).

Omfanget er stort – Chainalysis estimerer at rug pulls sto for over 2,8 milliarder dollar i tap bare i 2021.

## Hvordan fungerer det

En typisk rug pull utnytter desentraliserte børsers åpenhet – hvem som helst kan opprette en token og en pool.

```
Utvikler oppretter token → Oppretter likviditetspool på Uniswap → Markedsfører aggressivt → Investorer kjøper → Prisen stiger → Utvikler fjerner likviditet → Tokenet krasjer → Investorer kan ikke selge → Pengene er borte
```

Røde flagg å se etter er anonymt team (ingen verifiserbar identitet), ingen låst likviditet (sjekk om LP-tokens er låst via mudra.wtf eller team.finance), mintbar token (utvikleren kan lage ubegrenset nye tokens), honeypot-kode (smart-kontrakten har sell-blokkering), overkonsentrert eierskap (én wallet holder 50+ prosent av tokens), og urealistiske løfter (1000× garantert, gratis penger).

Verktøy for å sjekke er Token Sniffer (tokensniffer.com – automatisk kontraktanalyse), RugDoc (audit-sjekk for DeFi), GoPlus / De.Fi (sikkerhetsscanning), og Etherscan/Solscan (sjekk token-distribusjon og kontraktkode).

## Hvorfor er det viktig

Rug pulls er den vanligste svindelformen i krypto og rammer primært nybegynnere som lokkes av FOMO og løfter om rask rikdom. I et uregulert marked uten investorbeskyttelse er kunnskapen din eneste forsvar.

Grunregel: hvis det høres for godt ut til å være sant, er det det. Ingen seriøst prosjekt lover 100× garantert avkastning.

## Eksempler

Squid Game Token: En token basert på TV-serien steg 75 000 prosent – men var en honeypot. Ingen kunne selge. Utviklerne tok ut 3,4 millioner dollar og forsvant.

AnubisDAO: Samlet inn 60 millioner dollar i en «lanseringsevent». En enkelt wallet tømte hele likviditeten timer etter lansering.

Beskyttelse: Du finner en ny memecoin. Før du kjøper, sjekker du Token Sniffer (audit OK), verifiserer at likviditeten er låst (mudra.wtf bekrefter 1 års lås), og sjekker at ingen wallet eier mer enn 5 prosent. Alle sjekker er grønne – du investerer et lite beløp.

## Vanlige spørsmål

### Kan jeg få pengene tilbake etter en rug pull?
Nesten aldri. Transaksjonene er irreversible på blokkjeden. Noen få tilfeller har ført til arrestasjoner, men midlene returneres sjelden.

### Er alle nye tokens svindel?
Nei, men en enorm andel er det. Studier viser at over 50 prosent av nye tokens på desentraliserte børser er rug pulls eller svindel. Grundig research er avgjørende.

### Hvordan sjekker jeg om likviditeten er låst?
Bruk mudra.wtf, team.finance eller DexScreener. Søk opp token-kontraktadressen – de viser om LP-tokens er låst og for hvor lenge.

### Er regulerte børser (Binance, Firi) trygge for rug pulls?
Langt tryggere – børsene vetterer tokens før listing. Rug pulls skjer primært på desentraliserte børser der hvem som helst kan liste en token.

### Hva er en honeypot?
En token der smart-kontrakten lar deg kjøpe men blokkerer salg. Du sitter fast med tokens du ikke kan selge. Token Sniffer og honeypot-checkere kan oppdage de fleste.

## Relaterte begreper

- [Seed phrase](/krypto/hva-er-seed-phrase) – beskytt nøklene dine mot svindel
- [Liquidity](/krypto/hva-er-liquidity) – likviditeten som trekkes i en rug pull
- [Uniswap](/krypto/hva-er-uniswap) – der mange rug pulls oppstår
- [Memecoins](/krypto/hva-er-memecoins) – høyrisikoområde for rug pulls
- [DeFi](/krypto/hva-er-defi) – økosystemet der rug pulls forekommer

## Se også

- [Hva er liquidity?](/krypto/hva-er-liquidity)
- [Hva er seed phrase?](/krypto/hva-er-seed-phrase)

## Oppsummering

Rug pull er kryptosvindel der utviklere trekker likviditeten og stikker av med pengene. Røde flagg: anonymt team, ulåst likviditet, honeypot-kode, overkonsentrert eierskap og urealistiske løfter. Bruk Token Sniffer og DexScreener til å verifisere tokens. Invester aldri mer enn du tåler å tape – og husk at hvis det høres for godt ut til å være sant, er det svindel.
