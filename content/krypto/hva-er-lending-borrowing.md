---
title: "Hva er lending og borrowing i DeFi?"
slug: "hva-er-lending-borrowing"
category: "krypto"
subcategory: "defi"
description: "Lending og borrowing i DeFi lar deg låne ut og låne krypto uten bank. Lær hva det er, oversikkerhet, likvidasjon, og protokoller som Aave og Compound."
keywords: ["lending", "borrowing", "DeFi utlån", "oversikkerhet", "Aave"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Lending og borrowing"
aliases: ["DeFi-utlån", "kryptoutlån", "DeFi lending"]
related: ["hva-er-aave", "hva-er-defi", "hva-er-stablecoins", "hva-er-liquidity", "hva-er-smart-contract"]
seeAlso: ["hva-er-aave", "hva-er-defi"]
tags: ["lending", "borrowing", "krypto", "defi"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er lending og borrowing i DeFi?

Lending og borrowing i DeFi er desentralisert utlån og innlån av kryptovaluta via smarte kontrakter – uten bank, søknad eller kredittvurdering.

> **Kort forklart**
> DeFi snur bankmodellen på hodet. Du setter inn USDC og tjener rente – uten sparekonto. Du deponerer ETH som sikkerhet og låner USDC – uten lånesøknad. Alt skjer automatisk via smart contracts. Ingen saksbehandler, ingen kredittsjekk, ingen ventetid. Aave og Compound er de største – med titalls milliarder i utlån. Haken: du må alltid stille mer sikkerhet enn du låner (overcollateralized).

## Hva betyr begrepet

Lending (utlån) betyr at du deponerer krypto i en protokoll og tjener rente fra låntakere. Renten er variabel, basert på tilbud og etterspørsel. Typisk 3–10 prosent for stablecoins, 1–5 prosent for ETH.

Borrowing (innlån) betyr at du stiller krypto som sikkerhet (collateral) og låner andre tokens. Alltid overcollateralized – du deponerer mer verdi enn du låner. Typisk LTV (Loan-to-Value): 50–80 prosent. Eksempel: du deponerer ETH verdt 10 000 kr, kan låne opptil 7 500 kr i USDC (75 prosent LTV).

Collateral (sikkerhet) er kryptoen du setter inn som pant for lånet. Liquidation (likvidasjon) skjer når verdien av sikkerheten faller under en terskel (liquidation threshold) – smart contracten selger automatisk sikkerheten for å dekke lånet.

Hvorfor låner noen mot sikkerhet de allerede har? For å unngå å selge (du tror ETH vil stige, men trenger USDC nå), for leverage (låne USDC → kjøpe mer ETH → økt eksponering), for skatteoptimalisering (lån er ikke skattepliktig hendelse i mange jurisdiksjoner), og for å frigjøre likviditet uten å realisere.

## Hvordan fungerer det

DeFi-utlån kobler innskytere og låntakere via smart contracts.

```
Innskyter: Deponerer 10 000 USDC → Tjener 5 % rente → Kan ta ut når som helst

Låntaker: Deponerer 15 000 kr i ETH → Låner 10 000 USDC (67 % LTV) → Betaler 3 % rente → Hvis ETH faller 25 %: likvidasjonsterskel nås → ETH selges automatisk → Lån dekket

Smart contract håndterer: renteberegning, sikkerhetsvurdering, likvidasjon, og utbetaling – alt automatisk
```

## Hvorfor er det viktig

DeFi-utlån gjør banktjenester tilgjengelig for alle med en kryptolommebok – uavhengig av land, inntekt eller kreditthistorikk. Det er 24/7, permissionless og transparent. Renten er markedsbestemt, ikke bankbestemt.

Risikoen er smart-kontrakt-bugs (protokollen kan ha feil), likvidasjonsrisiko (hvis sikkerheten faller raskt), og oracle-risiko (feil prisdata kan utløse uberettigede likvidasjoner).

## Eksempler

Stabil rente: Du setter inn 50 000 USDC i Aave. Renten er 5 prosent. Etter ett år: 52 500 USDC. Ingen binding, uttak når som helst.

ETH-leverage: Du tror ETH vil stige. Du deponerer 10 ETH, låner 15 000 USDC, og kjøper 7,5 ETH til. Nå har du 17,5 ETH eksponering. ETH stiger 20 %: du tjener 20 % på 17,5 ETH i stedet for 10.

Likvidasjon: Du deponerte ETH ved 2 000 dollar og lånte 1 200 USDC. ETH faller til 1 500. Likvidasjonsterskel nås – Aave selger ETH-en din automatisk og tilbakebetaler lånet. Du mister en del av sikkerheten.

## Vanlige spørsmål

### Kan jeg tape alt ved likvidasjon?
Du taper sikkerheten som ble solgt + en likvidasjonstraff (typisk 5–10 prosent). Ikke hele depositumet – bare nok til å dekke lånet. Men i raskt fallende markeder kan tapet bli betydelig.

### Hva er forskjellen på Aave og banken?
Aave: ingen søknad, ingen KYC, 24/7, global, overcollateralized, høyere renter. Banken: søknad, kredittvurdering, begrenset åpningstid, undercollateralized mulig, lavere renter, innskuddsgaranti.

### Er DeFi-utlånsrenter stabile?
Nei – de er variable og endres konstant basert på tilbud og etterspørsel. Noen protokoller tilbyr faste renter via derivater (Pendle, Notional).

### Hvordan unngår jeg likvidasjon?
Hold LTV godt under likvidasjonsterskel (f.eks. 50 prosent når terskelen er 80 prosent). Legg inn mer sikkerhet ved prisfall. Sett opp varsler via DeFi Saver.

## Relaterte begreper

- [Aave](/krypto/hva-er-aave) – den største utlånsprotokollen
- [DeFi](/krypto/hva-er-defi) – økosystemet utlån er del av
- [Stablecoins](/krypto/hva-er-stablecoins) – det mest populære å låne ut og låne
- [Liquidity](/krypto/hva-er-liquidity) – påvirker utlånsrenter
- [Smart contract](/krypto/hva-er-smart-contract) – kjører utlånslogikken

## Se også

- [Hva er Aave?](/krypto/hva-er-aave)
- [Hva er DeFi?](/krypto/hva-er-defi)

## Oppsummering

DeFi lending/borrowing er desentralisert utlån uten bank – du tjener rente på innskudd og låner mot kryptosikkerhet. Alltid overcollateralized. Aave og Compound er de største. Risikoen er likvidasjon ved prisfall og smart-kontrakt-bugs. DeFi-utlån er tilgjengelig for alle, 24/7, uten søknad – men du bærer all risiko selv.
