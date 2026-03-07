---
title: "Hva er flash loan?"
slug: "hva-er-flash-loan"
category: "krypto"
subcategory: "defi"
description: "Flash loan er et lån uten sikkerhet som må tilbakebetales i samme transaksjon. Lær hva flash loans er, Aaves innovasjon, og hvordan de brukes til arbitrasje og angrep."
keywords: ["flash loan", "lån uten sikkerhet", "atomisk transaksjon", "Aave", "arbitrasje"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Flash loan"
aliases: ["lynlån", "atomisk lån"]
related: ["hva-er-aave", "hva-er-defi", "hva-er-smart-contract", "hva-er-mev", "hva-er-liquidity"]
seeAlso: ["hva-er-aave", "hva-er-defi"]
tags: ["flash loan", "krypto", "defi", "avansert"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er flash loan?

Flash loan er et usikret lån i DeFi der du kan låne millioner av dollar uten sikkerhet – forutsatt at hele lånet tilbakebetales innenfor samme blokkjede-transaksjon.

> **Kort forklart**
> Flash loans er det mest uintuitive konseptet i DeFi. Du låner 10 millioner dollar, bruker pengene til arbitrasje eller likvidasjon, og tilbakebetaler – alt i én transaksjon som tar sekunder. Hvis tilbakebetalingen feiler, reverseres hele transaksjonen som om den aldri skjedde. Ingen risiko for utlåner, ubegrenset kapital for låntaker. Det er et konsept som ikke kan eksistere utenfor blokkjeden – og det har revolusjonert DeFi mens det også muliggjør angrep.

## Hva betyr begrepet

Flash loans utnytter en fundamental egenskap ved blokkjeder: atomisitet – en transaksjon utfører enten alle steg fullstendig, eller ingen. Hvis et steg feiler, reverseres alt.

Det betyr at du kan låne → bruke → tilbakebetale i én transaksjon. Hvis tilbakebetalingen feiler (du tjente ikke nok til å dekke lånet), reverseres hele transaksjonen – inkludert lånet. Utlåneren mister aldri midler.

Gebyret er typisk 0,05–0,09 prosent av lånebeløpet. Aave var den første til å tilby flash loans (2020), men dYdX, Uniswap og Balancer tilbyr også.

Bruksområder er arbitrasje (kjøp billig på én DEX, selg dyrt på en annen – flash loan gir kapitalen), sikkerhetsbytter (bytt sikkerhet i et DeFi-lån uten å lukke posisjonen), likvidasjoner (likvidér underkollateraliserte posisjoner og behold bonusen), og selvlikvidasjon (bruk flash loan til å tilbakebetale eget DeFi-lån og frigjøre sikkerheten).

Flash loan-angrep bruker flash loans til å manipulere priser og utnytte smart-kontrakt-sårbarheter. Over 1 milliard dollar er tapt til flash loan-angrep – de er et dobbeltkantet sverd.

## Hvordan fungerer det

Flash loans utfører låne-bruk-tilbakebetal i én atomisk transaksjon.

```
Steg 1: Lån 5 mill USDC fra Aave (flash loan)
Steg 2: Kjøp ETH billig på Uniswap
Steg 3: Selg ETH dyrt på SushiSwap
Steg 4: Tilbakebetal 5 mill + 0,05 % gebyr til Aave
Steg 5: Behold profitten

→ Alt skjer i ÉN transaksjon
→ Hvis steg 4 feiler (ikke nok profitt): ALT reverseres
→ Aave mister aldri penger
```

Du trenger programmering (Solidity) eller verktøy (Furucombo, DeFi Saver) for å utføre flash loans. Det er ikke noe du gjør fra MetaMask med et klikk.

## Hvorfor er det viktig

Flash loans er en DeFi-primitiv som ikke kan eksistere i tradisjonell finans – du kan ikke låne millioner uten sikkerhet og tilbakebetale innen sekunder i bankverdenen. Det demokratiserer tilgang til kapital for arbitrasje og effektivisering.

Baksiden er at de muliggjør sofistikerte angrep på DeFi-protokoller gjennom prismanipulasjon. Flash loan-angrep har avslørt sårbarheter i desentraliserte orakler og prismekanismer.

## Eksempler

Arbitrasje: ETH koster $2 000 på Uniswap og $2 020 på SushiSwap. Flash loan 1 000 ETH → kjøp på Uniswap → selg på SushiSwap → tilbakebetal → profitt $20 000 minus gebyrer.

Flash loan-angrep: Angriper låner millioner via flash loan, manipulerer prisen i en liten pool, utnytter en sårbar DeFi-protokoll som bruker den manipulerte prisen, og tilbakebetaler – profitt millioner.

Selvlikvidasjon: Du har ETH som sikkerhet i Aave med USDC-lån. Du vil ut. Flash loan USDC → tilbakebetal Aave-lånet → frigjør ETH → selg ETH → tilbakebetal flash loan → ferdig.

## Vanlige spørsmål

### Kan hvem som helst ta flash loan?
Teknisk ja, men det krever Solidity-programmering eller verktøy som Furucombo. Det er ikke en «klikk og lån»-funksjon.

### Er flash loans farlige?
For utlånere: nei – de kan aldri tape (atomisitet garanterer tilbakebetaling). For DeFi-protokoller: ja – de muliggjør prismanipulasjonsangrep.

### Hvor mye kan jeg låne?
Opptil hele likviditetspoolen – typisk hundrevis av millioner dollar. Gebyret er 0,05–0,09 prosent uavhengig av beløp.

### Kan flash loans brukes til noe ulovlig?
Flash loan-angrep utnytter kodesvakheter – det er en gråsone. Teknisk «stjeler» de ikke – de utnytter smart-kontrakter som fungerer som designet, bare ikke som tiltenkt.

## Relaterte begreper

- [Aave](/krypto/hva-er-aave) – den første flash loan-protokollen
- [DeFi](/krypto/hva-er-defi) – økosystemet flash loans opererer i
- [Smart contract](/krypto/hva-er-smart-contract) – muliggjør atomiske transaksjoner
- [MEV](/krypto/hva-er-mev) – flash loans brukes i MEV-strategier
- [Liquidity](/krypto/hva-er-liquidity) – flash loans bruker protokollens likviditet

## Se også

- [Hva er Aave?](/krypto/hva-er-aave)
- [Hva er DeFi?](/krypto/hva-er-defi)

## Oppsummering

Flash loans er usikrede lån som må tilbakebetales i samme transaksjon – umulig i tradisjonell finans, fundamentalt i DeFi. De brukes til arbitrasje, sikkerhetsbytter og likvidasjoner. Baksiden er flash loan-angrep som har kostet milliarder. Det er en kraftfull DeFi-primitiv som demokratiserer kapital – men også et våpen mot sårbare protokoller.
