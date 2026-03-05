---
title: "DNS-posttyper forklart"
slug: "dns-posttyper"
category: "DNS"
subcategory: "Konfigurasjon"
description: "Oversikt over DNS-posttyper som A, AAAA, CNAME, MX, TXT, NS og CAA med eksempler og bruksområder."
keywords: ["DNS-poster", "A-post", "CNAME", "MX-post", "TXT-post", "NS"]
date: "2024-10-25"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Standard"
topic: "DNS Records"
aliases: ["DNS records", "DNS-poster", "A-post", "MX-post", "CNAME"]
related: ["hva-er-dns", "bytte-navnetjener", "spf-dkim-dmarc", "sette-opp-epost"]
seeAlso: ["hva-er-dns", "spf-dkim-dmarc"]
tags: ["DNS", "A-post", "CNAME", "MX", "TXT", "NS"]
updatedAt: "2025-03-05"
featured: true
contentType: "knowledge-article"
difficulty: "beginner"
---

# DNS-posttyper forklart

DNS-posttyper er ulike oppføringer i DNS-systemet som peker domenenavn til servere, e-post, verifisering og andre tjenester.

> **Kort forklart**
> Hver posttype har et spesifikt formål – A peker til webservere, MX til e-postservere, og TXT brukes for sikkerhet og verifisering.

## Hva betyr begrepet

DNS bruker ulike posttyper (records) for å koble domenenavn til tjenester. Riktig konfigurasjon er avgjørende for at nettsider og e-post fungerer.

## Hvordan fungerer det

```
Domene → DNS-oppslag → Posttype (A/MX/CNAME/TXT) → Riktig server
```

- **A-post** – Peker til IPv4-adresse: `kunnskapsbase.no → 185.107.56.200`
- **AAAA-post** – Peker til IPv6-adresse
- **CNAME** – Alias til et annet domene: `www → kunnskapsbase.no`
- **MX-post** – Styrer e-postlevering. Lavest tall = høyest prioritet
- **TXT-post** – Brukes for SPF, DKIM, DMARC og verifisering
- **NS-post** – Angir autoritative navnetjenere
- **CAA-post** – Bestemmer hvem som kan utstede SSL-sertifikater

## Hvorfor er det viktig

Feil i DNS-poster er en av de vanligste årsakene til at nettsider ikke lastes eller e-post ikke leveres.

## Eksempler

| Type | Bruk |
|------|------|
| A | IPv4-adresse |
| AAAA | IPv6-adresse |
| CNAME | Alias til domene |
| MX | E-postserver |
| TXT | Verifisering/SPF/DKIM |
| NS | Navnetjener |
| CAA | SSL-autorisasjon |

## Vanlige spørsmål

### Kan jeg ha flere A-poster?
Ja. Det brukes for lastbalansering mellom flere servere.

### Hva er forskjellen på A og CNAME?
A peker til en IP-adresse. CNAME peker til et annet domenenavn.

### Kan jeg bruke CNAME på rotdomenet?
Nei, teknisk sett ikke. Noen leverandører tilbyr CNAME-flattening.

### Hvor mange MX-poster trenger jeg?
Minst én, men to anbefales for redundans.

### Hva betyr TTL i DNS-poster?
Time To Live – hvor lenge oppføringen caches før ny sjekk.

## Relaterte begreper

- [DNS](/dns/hva-er-dns) – systemet som bruker postene
- [Bytte navnetjener](/dns/bytte-navnetjener) – flytte DNS-administrasjon
- [SPF, DKIM og DMARC](/epost/spf-dkim-dmarc) – e-postsikkerhet via TXT
- [E-postoppsett](/epost/sette-opp-epost) – MX-poster for e-post
- [SSL-sertifikat](/nettsider/ssl-sertifikat) – CAA-poster for HTTPS

## Se også

- [Hva er DNS](/dns/hva-er-dns)
- [SPF, DKIM og DMARC](/epost/spf-dkim-dmarc)

## Oppsummering

DNS-posttyper styrer hvordan domenet kobles til webservere, e-post og sikkerhet. De viktigste er A, CNAME, MX og TXT.
