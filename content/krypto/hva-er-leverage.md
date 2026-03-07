---
title: "Hva er leverage i krypto?"
slug: "hva-er-leverage"
category: "krypto"
subcategory: "grunnleggende"
description: "Leverage lar deg handle med mer kapital enn du har ved å låne resten. Lær hva leverage er, margin, liquidation, og hvorfor 90 prosent av leveragetraders taper."
keywords: ["leverage", "gearing", "margin", "liquidation", "margin call"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Leverage"
aliases: ["gearing", "belåning", "margin trading"]
related: ["hva-er-perpetuals", "hva-er-cex-og-dex", "hva-er-liquidity", "hva-er-bull-bear-market", "hva-er-hyperliquid"]
seeAlso: ["hva-er-perpetuals", "hva-er-cex-og-dex"]
tags: ["leverage", "krypto", "grunnleggende", "trading"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er leverage i krypto?

Leverage (gearing/belåning) lar deg kontrollere en større handelsposisjon enn din faktiske kapital ved å låne resten – 10× leverage betyr at 1 000 kr kontrollerer en 10 000 kr posisjon.

> **Kort forklart**
> Leverage er en forstørrelsesglass for gevinst OG tap. Med 10× leverage: 10 prosent prisoppgang = 100 prosent gevinst. Men 10 prosent prisnedgang = 100 prosent tap (liquidation – du mister alt). I krypto tilbys leverage opptil 100× eller mer. Det høres forlokkende ut, men studier viser at over 90 prosent av retail-leveragetraders taper penger. Leverage er et verktøy for profesjonelle – ikke for nybegynnere.

## Hva betyr begrepet

Leverage multipliserer din eksponering. Du setter inn margin (din faktiske kapital som sikkerhet), og børsen/protokollen låner deg resten. 1× leverage betyr ingen gearing (du handler med egne midler). 5× betyr at 1 000 kr kontrollerer 5 000 kr. 10× betyr at 1 000 kr kontrollerer 10 000 kr. 50× betyr at 1 000 kr kontrollerer 50 000 kr, og 100× betyr at 1 000 kr kontrollerer 100 000 kr.

Liquidation er tvangslukning av din posisjon når tapet nærmer seg din margin. Ved 10× leverage likvideres du ved ~10 prosent prisbevegelse mot deg. Ved 100× likvideres du ved ~1 prosent. Margin call er varselet om at du nærmer deg liquidation – legg inn mer margin eller bli likvidert.

Leverage i krypto tilbys via sentraliserte børser (Binance, Bybit – opptil 100×+), desentraliserte perps (Hyperliquid, dYdX – opptil 50×), og DeFi-utlån (Aave – indirekte leverage gjennom gjentatte lån/innskudd-sykluser).

## Hvordan fungerer det

Leverage multipliserer gevinst og tap proporsjonalt.

```
Uten leverage: Du kjøper 1 ETH for 20 000 kr
  ETH stiger 10 %: Du tjener 2 000 kr (10 %)
  ETH faller 10 %: Du taper 2 000 kr (10 %)

Med 10× leverage: Du setter inn 2 000 kr og kontrollerer 20 000 kr posisjon
  ETH stiger 10 %: Du tjener 2 000 kr (100 % av din margin)
  ETH faller 10 %: Du taper 2 000 kr (100 % – LIKVIDERT)
  ETH faller 5 %: Du taper 1 000 kr (50 % av margin)
```

I praksis kommer det også kostnader: funding rate (periodisk kostnad for å holde perp-posisjon), rente (lånerente for margin-lån), og gebyr (handelsgebyrer på åpning/lukking).

## Hvorfor er det viktig

Leverage er det farligste verktøyet i krypto – og det mest brukte av tapere. Kryptos høye volatilitet (5–20 prosent daglige bevegelser er vanlig) + leverage = rask likvidasjon.

Bitcoin faller gjennomsnittlig 30+ prosent minst én gang i hvert bull market. Med 5× leverage betyr 30 prosent fall = 150 prosent tap = total likvidasjon. Selv «moderat» leverage gir enorm risiko i volatile markeder.

Profesjonelle tradere bruker leverage forsiktig (2–5×), med streng risikostyring (stop-loss, posisjonsstørrelse). Nybegynnere bør unngå leverage helt.

## Eksempler

Lønnsom: Du bruker 3× leverage long på Bitcoin ved 60 000 dollar med stop-loss ved 55 000. BTC stiger til 70 000 (17 %). Du tjener 50 prosent. Disiplinert bruk.

Likvidasjon: Du bruker 25× leverage long på ETH. ETH faller 4 prosent over natten. Du sov – likvidert. Hele marginen borte.

Kaskade: Under et krasj likvideres mange leveragede posisjoner → tvangssalg presser prisen videre ned → flere likvidasjoner → «likvidasjonskaskade» → ekstrem prisfall.

## Vanlige spørsmål

### Bør nybegynnere bruke leverage?
Nei. Absolutt ikke. Start med spot-handel og lær markedet i minst ett år. Leverage forstørrer feil – og nybegynnere gjør mange feil.

### Hva er en trygg leverage?
Det finnes ingen «trygg» leverage i krypto. Profesjonelle bruker sjelden over 3–5×, alltid med stop-loss, og risikerer aldri mer enn 1–2 prosent av porteføljen per trade.

### Kan jeg tape mer enn jeg setter inn?
På de fleste kryptoplattformer: nei – du kan kun tape din margin (isolated margin). På noen: ja – med cross margin risikerer du hele kontoen.

### Hva er forskjellen på isolated og cross margin?
Isolated: kun marginen for den spesifikke handelen risikeres. Cross: hele kontosaldoen din brukes som margin – høyere risiko for total utslettelse.

## Relaterte begreper

- [Perpetuals](/krypto/hva-er-perpetuals) – det vanligste leverage-instrumentet
- [CEX og DEX](/krypto/hva-er-cex-og-dex) – der leverage-handel skjer
- [Liquidity](/krypto/hva-er-liquidity) – likvidasjonskaskader påvirker likviditet
- [Bull og bear market](/krypto/hva-er-bull-bear-market) – leverage er farligst i bear
- [Hyperliquid](/krypto/hva-er-hyperliquid) – desentralisert leverage-plattform

## Se også

- [Hva er perpetuals?](/krypto/hva-er-perpetuals)
- [Hva er CEX og DEX?](/krypto/hva-er-cex-og-dex)

## Oppsummering

Leverage lar deg handle med mer kapital enn du har – det forstørrer gevinst OG tap. 10× leverage = 10 prosent prisbevegelse liquiderer deg. Over 90 prosent av retail-leveragetraders taper. Kryptos volatilitet gjør leverage ekstremt risikabelt. Nybegynnere: hold deg til spot. Profesjonelle: maks 3–5× med streng risikostyring.
