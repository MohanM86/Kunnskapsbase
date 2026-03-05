---
title: SPF, DKIM og DMARC forklart
description: SPF, DKIM og DMARC er tre e-postsikkerhetsprotokoll som til sammen beskytter domenet ditt mot spoofing, phishing og sikrer at legitime e-poster når frem.
entityType: Protocol
category: E-post
subcategory: Sikkerhet
topic: E-postsikkerhet
aliases: ["e-postautentisering", "email authentication", "anti-spoofing", "DMARC-policy", "SPF-post"]
related: ["sette-opp-epost", "epost-levering-problemer", "dns-posttyper"]
seeAlso: ["hva-er-dns", "bytte-navnetjener"]
tags: [SPF, DKIM, DMARC, e-postsikkerhet, spam, phishing, TXT-post]
updatedAt: "2024-11-05"
featured: true
---

SPF, DKIM og DMARC beskytter domenet ditt mot e-postsvindel og sikrer leveringsevnen til legitime e-poster.

## SPF – Sender Policy Framework

SPF definerer hvilke servere som har lov til å sende e-post fra domenet ditt.

```
@ IN TXT "v=spf1 include:_spf.google.com ~all"
```

`~all` (softfail) anbefales å starte med. Bytt til `-all` etter verifisering.

## DKIM – DomainKeys Identified Mail

DKIM legger til en digital signatur i e-posthoder som mottakeren kan verifisere.

```
selektor._domainkey.dinbedrift.no.  IN  TXT  "v=DKIM1; k=rsa; p=MIIBIjAN..."
```

Generer nøkkel i e-postleverandørens admin-panel.

## DMARC – Domain-based Message Authentication

DMARC forteller mottakerservere hva de skal gjøre med e-poster som feiler SPF/DKIM.

```
_dmarc.dinbedrift.no.  IN  TXT  "v=DMARC1; p=quarantine; rua=mailto:dmarc@dinbedrift.no"
```

### Implementeringssteg

1. Start med `p=none` og analyser rapporter i 2–4 uker
2. Flytt til `p=quarantine`
3. Bytt til `p=reject` for maksimal beskyttelse

## Test med verktøy

```bash
dig TXT dinbedrift.no        # SPF
dig TXT _dmarc.dinbedrift.no # DMARC
```
