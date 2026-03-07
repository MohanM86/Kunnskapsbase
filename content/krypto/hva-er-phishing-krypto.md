---
title: "Hva er phishing i krypto?"
slug: "hva-er-phishing-krypto"
category: "krypto"
subcategory: "grunnleggende"
description: "Phishing er svindelforsøk som lurer deg til å gi fra deg nøkler eller godkjenne ondsinnede transaksjoner. Lær hva kryptophishing er, vanligste metodene, og hvordan du beskytter deg."
keywords: ["phishing", "kryptosvindel", "wallet drain", "approval scam", "falsk nettside"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Phishing i krypto"
aliases: ["kryptophishing", "nettfisking krypto", "approval scam"]
related: ["hva-er-seed-phrase", "hva-er-rug-pull", "hva-er-kryptolommebok", "hva-er-hot-wallet-vs-cold-wallet", "hva-er-private-key"]
seeAlso: ["hva-er-seed-phrase", "hva-er-rug-pull"]
tags: ["phishing", "krypto", "grunnleggende", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er phishing i krypto?

Phishing i krypto er svindelteknikker der angripere lurer deg til å avsløre seed phrase, signere ondsinnede transaksjoner, eller godkjenne token-tilgang som tømmer lommeboken din.

> **Kort forklart**
> Phishing er den vanligste årsaken til tap av krypto – ikke avanserte hacks, men sosial manipulering. Du mottar en DM på Discord: «MetaMask support, skriv inn seed phrase for å fikse problemet.» Du klikker en lenke til «Uniswap» som er en perfekt kopi – men URL-en er uniswap-app.com i stedet for app.uniswap.org. Du godkjenner en «airdrop-claiming» som gir svindleren ubegrenset tilgang til dine tokens. Milliarder tapes til phishing hvert år.

## Hva betyr begrepet

Kryptophishing har flere former. Seed phrase-svindel er falsk support som ber om seed phrase – den vanligste og enkleste. Ingen legitim tjeneste vil noen gang be om dette. Falske nettsider er perfekte kopier av Uniswap, MetaMask, Aave med minimal URL-endring. Du kobler wallet og signerer – svindleren tømmer alt. Approval scam er du godkjenner en ondsinnet smart-kontrakt som gir den ubegrenset tilgang til dine tokens – den kan tømme alt over tid. Permit signature er en ny variant der du signerer en «gasløs» melding som i virkeligheten gir svindleren rett til å overføre dine tokens. Wallet drainer er ondsinnede smart-kontrakter designet for å tømme lommeboken i én transaksjon.

De vanligste kanalene for phishing er Discord DM-er (falsk support, falske moderatorer), Twitter/X (falske kontoer som etterligner prosjekter), Telegram-grupper (falske admin-meldinger), Google-annonser (falske sider øverst i søkeresultater), og e-post (falske Ledger/MetaMask-varsler).

## Hvordan fungerer det

Phishing utnytter tillit og hastverk for å få deg til å handle uten å tenke.

```
Svindler → Lager falsk nettside/DM → Skaper hastverk ("kontoen din er kompromittert!") → Du klikker/kobler wallet → Signerer ondsinnet transaksjon → Tokens overføres til svindler → Irreversibelt

Approval scam spesifikt:
Du godkjenner "unlimited approval" for en token → Svindlerens kontrakt har nå rett til å flytte ALLE dine tokens av den typen → Timer/dager senere tømmes alt
```

## Hvorfor er det viktig

Phishing er den #1 årsaken til kryptotap for privatpersoner. Chainalysis estimerer milliarder i tap årlig. Det rammer nybegynnere og erfarne – sofistikerte phishing-sider er nesten umulige å skille fra ekte.

Beskyttelsestiltak: aldri del seed phrase med noen (absolutt regel), bokmerke de ekte URL-ene til DeFi-protokoller (ikke Google dem), bruk hardware wallet (Ledger) – den viser transaksjonsdetaljer på sin skjerm, sjekk token-approvals regelmessig via revoke.cash, ignorer alle DM-er fra «support» på Discord/Telegram, og bruk anti-phishing verktøy (Pocket Universe, Rabby wallet har innebygd simulering).

## Eksempler

Seed phrase-DM: «Hei, vi er fra MetaMask support. Vi ser en feil på kontoen din. Vennligst skriv inn dine 12 ord for å verifisere.» Du gjør det. Wallet tømmes på sekunder. Det var svindel.

Falsk Uniswap: Du Googler «Uniswap» og klikker den første lenken (en annonse). Siden ser identisk ut, men URL-en er «uniswap-app.com». Du kobler MetaMask og godkjenner en swap – det var en drainer.

Approval-sjekk: Du bruker revoke.cash og ser at en ukjent kontrakt har «unlimited approval» for din USDC. Du revokerer umiddelbart – potensiell katastrofe unngått.

## Vanlige spørsmål

### Hvordan gjenkjenner jeg phishing?
Sjekk URL nøye (bokstav for bokstav), ignorer all «support» via DM, og vær skeptisk til hastverk. Ekte support ber ALDRI om seed phrase eller private keys.

### Hva gjør jeg hvis jeg ble phishet?
Overfør gjenværende midler til en NY wallet umiddelbart (ny seed phrase). Revokér alle approvals via revoke.cash. Betrakt den kompromitterte walleten som tapt.

### Kan hardware wallet beskytte mot phishing?
Delvis – Ledger viser transaksjonsdetaljer på sin skjerm, så du kan se hva du faktisk godkjenner. Men hvis du godkjenner en ondsinnet transaksjon på Ledger-skjermen, hjelper det ikke.

### Hva er revoke.cash?
Et verktøy der du kan se og tilbakekalle token-approvals du har gitt til smart-kontrakter. Sjekk regelmessig – det kan redde deg.

## Relaterte begreper

- [Seed phrase](/krypto/hva-er-seed-phrase) – det phishing oftest er ute etter
- [Rug pull](/krypto/hva-er-rug-pull) – en annen svindeltype
- [Kryptolommebok](/krypto/hva-er-kryptolommebok) – det som kompromitteres
- [Hot wallet vs cold wallet](/krypto/hva-er-hot-wallet-vs-cold-wallet) – cold wallet gir bedre beskyttelse
- [Private key](/krypto/hva-er-private-key) – det du aldri skal dele

## Se også

- [Hva er seed phrase?](/krypto/hva-er-seed-phrase)
- [Hva er rug pull?](/krypto/hva-er-rug-pull)

## Oppsummering

Phishing er kryptos vanligste svindelform – falske nettsider, DM-er og approval scams som lurer deg til å gi fra deg nøkler eller godkjenne ondsinnede transaksjoner. Aldri del seed phrase, bokmerke ekte URL-er, bruk hardware wallet, og sjekk approvals via revoke.cash. Phishing utnytter tillit og hastverk – stopp opp og tenk før du signerer.
