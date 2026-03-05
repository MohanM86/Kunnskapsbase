---
title: "SPF, DKIM og DMARC forklart"
slug: "spf-dkim-dmarc"
category: "E-post"
subcategory: "Sikkerhet"
description: "SPF, DKIM og DMARC er tre protokoller som beskytter domenet ditt mot e-postsvindel og phishing."
keywords: ["SPF", "DKIM", "DMARC", "e-postsikkerhet", "phishing", "spoofing"]
date: "2024-11-05"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Protocol"
topic: "E-postsikkerhet"
aliases: ["e-postautentisering", "email authentication", "anti-spoofing"]
related: ["sette-opp-epost", "epost-levering-problemer", "dns-posttyper", "hva-er-dns"]
seeAlso: ["sette-opp-epost", "epost-levering-problemer"]
tags: ["SPF", "DKIM", "DMARC", "e-postsikkerhet", "phishing"]
updatedAt: "2025-03-05"
featured: true
contentType: "knowledge-article"
difficulty: "beginner"
---

# SPF, DKIM og DMARC forklart

SPF, DKIM og DMARC er tre e-postsikkerhetsprotokoller som sammen beskytter domenet ditt mot spoofing, phishing og sikrer at legitime e-poster når frem.

> **Kort forklart**
> SPF sjekker avsenderserver, DKIM verifiserer digital signatur, og DMARC bestemmer hva som skjer med e-post som feiler.

## Hva betyr begrepet

Disse tre protokollene jobber sammen via DNS TXT-poster for å verifisere at e-post faktisk kommer fra den den utgir seg for å komme fra.

## Hvordan fungerer det

### Autentiseringsprosess

```
Avsender → SPF sjekker server → DKIM sjekker signatur → DMARC bestemmer handling
```

- **SPF** – Definerer hvilke servere som kan sende fra domenet
- **DKIM** – Legger til en digital signatur i e-posthoder
- **DMARC** – Forteller mottakere hva de skal gjøre med e-post som feiler

### Implementeringssteg
1. Start med DMARC `p=none` – analyser i 2–4 uker
2. Flytt til `p=quarantine`
3. Bytt til `p=reject` for maksimal beskyttelse

## Hvorfor er det viktig

Uten disse kan hvem som helst sende e-post som ser ut som den kommer fra ditt domene. Det beskytter mot phishing og forbedrer leveringsraten.

## Eksempler

- **SPF**: `v=spf1 include:_spf.google.com ~all`
- **DKIM**: Digital signatur fra leverandørens admin-panel
- **DMARC**: `v=DMARC1; p=quarantine; rua=mailto:dmarc@dinbedrift.no`

## Vanlige spørsmål

### Trenger jeg alle tre?
Ja. De utfyller hverandre og gir best beskyttelse sammen.

### Hva betyr ~all vs -all i SPF?
`~all` er mildere (softfail). `-all` avviser alt som ikke matcher (hardfail).

### Hvordan sjekker jeg om det fungerer?
`dig TXT domene.no` eller mxtoolbox.com.

### Hva er en DMARC-rapport?
Automatisk rapport som viser hvem som sender e-post fra domenet ditt.

### Kan feil oppsett blokkere min egen e-post?
Ja. Start derfor alltid med `p=none`.

## Relaterte begreper

- [E-postoppsett](/epost/sette-opp-epost) – der protokollene konfigureres
- [E-postlevering](/epost/epost-levering-problemer) – feilsøking
- [DNS-posttyper](/dns/dns-posttyper) – TXT-poster brukes for alle tre
- [DNS](/dns/hva-er-dns) – systemet postene lagres i
- Phishing – svindel via falske e-poster

## Se også

- [Sette opp e-post](/epost/sette-opp-epost)
- [E-poster havner i spam](/epost/epost-levering-problemer)

## Oppsummering

SPF, DKIM og DMARC er tre DNS-baserte protokoller som beskytter e-postdomenet mot svindel. Start med DMARC `p=none` og stram gradvis inn.
