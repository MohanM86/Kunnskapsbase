---
title: "Hva er DNS"
slug: "hva-er-dns"
category: "DNS"
subcategory: "Grunnleggende"
description: "DNS er internettets telefonbok som oversetter domenenavn til IP-adresser slik at datamaskiner kan kommunisere."
keywords: ["DNS", "Domain Name System", "navnetjener", "IP-adresse", "resolver"]
date: "2024-11-01"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "DNS"
aliases: ["Domain Name System", "navnetjeneste", "domeneoppslagssystem"]
related: ["dns-posttyper", "bytte-navnetjener", "hva-er-et-domene", "spf-dkim-dmarc"]
seeAlso: ["dns-posttyper", "bytte-navnetjener"]
tags: ["DNS", "navnetjener", "oppslag", "IP-adresse", "resolver"]
updatedAt: "2025-03-05"
featured: true
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er DNS

DNS (Domain Name System) er internettets telefonbok – systemet som oversetter domenenavn som `kunnskapsbase.no` til IP-adresser som `185.107.56.200`.

> **Kort forklart**
> DNS gjør at du kan skrive `google.com` i stedet for å huske `142.250.74.14`. Det oversetter navn til tall.

## Hva betyr begrepet

Datamaskiner kommuniserer med tall (IP-adresser), men mennesker foretrekker navn. DNS er broen mellom disse to verdenene.

## Hvordan fungerer det

### DNS-oppslag

```
Nettleser → Resolver → Root-server → TLD-server → Autoritativ server → IP-adresse
```

1. Nettleseren sjekker lokal cache
2. Rekursiv resolver spørres (f.eks. `8.8.8.8`)
3. Root-navnetjener peker til TLD-navnetjener
4. Autoritativ navnetjener returnerer IP-adressen
5. Resultatet caches med TTL-verdien

| Leverandør | Primær | Sekundær |
|------------|--------|----------|
| Google | `8.8.8.8` | `8.8.4.4` |
| Cloudflare | `1.1.1.1` | `1.0.0.1` |
| Quad9 | `9.9.9.9` | `149.112.112.112` |

## Hvorfor er det viktig

DNS er fundamentet for alt på internett. Uten DNS fungerer ikke nettsider, e-post eller noen annen internettjeneste.

> **Tips:** Senk TTL til 300 sekunder 24–48 timer FØR store DNS-endringer.

## Eksempler

- **Nettlesing** – `google.com` oversettes til Googles IP-adresse
- **E-post** – MX-poster i DNS styrer e-postlevering
- **CDN** – DNS dirigerer trafikk til nærmeste server

## Vanlige spørsmål

### Hva skjer hvis DNS er nede?
Nettsteder blir utilgjengelige fordi nettleseren ikke kan finne IP-adressen.

### Hvor lang tid tar DNS-propagasjon?
Fra sekunder til 48 timer, avhengig av TTL-verdien.

### Kan jeg bytte DNS-resolver?
Ja. Cloudflare (1.1.1.1) og Google (8.8.8.8) er populære alternativer.

### Hva er TTL?
Time To Live – angir i sekunder hvor lenge et DNS-svar caches.

### Hvordan sjekker jeg DNS?
Bruk `dig domene.no` i terminalen eller MXToolbox.

## Relaterte begreper

- [DNS-posttyper](/dns/dns-posttyper) – A, CNAME, MX, TXT og andre poster
- [Bytte navnetjener](/dns/bytte-navnetjener) – flytte DNS til ny leverandør
- [Domenenavn](/domener/hva-er-et-domene) – adressen DNS oversetter
- [SPF, DKIM og DMARC](/epost/spf-dkim-dmarc) – e-postsikkerhet via DNS
- [SSL-sertifikat](/nettsider/ssl-sertifikat) – HTTPS-kryptering

## Se også

- [DNS-posttyper forklart](/dns/dns-posttyper)
- [Bytte navnetjener](/dns/bytte-navnetjener)

## Oppsummering

DNS er internettets telefonbok som oversetter domenenavn til IP-adresser. Det er usynlig infrastruktur som gjør at alt fra nettsider til e-post fungerer.
