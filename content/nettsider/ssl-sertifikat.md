---
title: "SSL/TLS-sertifikater"
slug: "ssl-sertifikat"
category: "Nettsider"
subcategory: "Sikkerhet"
description: "SSL/TLS-sertifikater krypterer trafikken mellom server og nettleser og aktiverer HTTPS."
keywords: ["SSL", "TLS", "HTTPS", "Let's Encrypt", "sertifikat", "kryptering"]
date: "2024-11-12"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Technology"
topic: "SSL/TLS"
aliases: ["SSL-sertifikat", "TLS-sertifikat", "HTTPS-sertifikat"]
related: ["velge-webhotell", "hva-er-et-domene", "bytte-navnetjener", "ytelse-og-hastighet"]
seeAlso: ["velge-webhotell", "ytelse-og-hastighet"]
tags: ["SSL", "TLS", "HTTPS", "Let's Encrypt", "sikkerhet"]
updatedAt: "2025-03-05"
featured: true
contentType: "knowledge-article"
difficulty: "beginner"
---

# SSL/TLS-sertifikater

Et SSL/TLS-sertifikat krypterer trafikken mellom webserver og nettleser, aktiverer HTTPS og er obligatorisk for alle moderne nettsteder.

> **Kort forklart**
> SSL gir hengelåsen i nettleseren. Det beskytter data, forbedrer SEO og bygger tillit hos besøkende.

## Hva betyr begrepet

SSL (Secure Sockets Layer) og TLS (Transport Layer Security) er krypteringsprotokoller. Sertifikatet bekrefter at nettstedet er ekte.

## Hvordan fungerer det

```
Nettleser → Be om sertifikat → Kryptert forbindelse → Sikker dataoverføring
```

| Type | Verifisering | Passer for |
|------|-------------|-----------|
| DV | Kun domene, minutter | Blogger |
| OV | Domene + bedrift | Bedrifter |
| EV | Grundig | Banker |

## Hvorfor er det viktig

Google rangerer HTTPS høyere. Nettlesere viser advarsler uten SSL. Det beskytter brukernes data.

## Eksempler

- **Let's Encrypt** – Gratis, automatisk fornyelse hver 90. dag
- **Cloudflare SSL** – Gratis via proxy, enklest
- **Kommersielle** – For EV-validering

## Vanlige spørsmål

### Er SSL og TLS det samme?
TLS er etterfølgeren. «SSL» brukes som fellesbetegnelse.

### Koster det penger?
Nei. Let's Encrypt og Cloudflare er gratis.

### Hvor lenge varer et sertifikat?
Let's Encrypt: 90 dager (automatisk). Kommersielle: 1 år.

### Trenger jeg SSL for en blogg?
Ja. Alle nettsteder bør ha HTTPS.

### Hvordan tester jeg?
SSL Labs (ssllabs.com/ssltest) – sikt på A eller A+.

## Relaterte begreper

- [Webhotell](/nettsider/velge-webhotell) – mange inkluderer gratis SSL
- [DNS](/dns/hva-er-dns) – CAA-poster styrer utstedelse
- [Domenenavn](/domener/hva-er-et-domene) – det sertifikatet sikrer
- [Ytelse](/nettsider/ytelse-og-hastighet) – HTTPS kan påvirke hastighet
- Let's Encrypt – gratis sertifikatmyndighet

## Se også

- [Velge webhotell](/nettsider/velge-webhotell)
- [Ytelse og hastighet](/nettsider/ytelse-og-hastighet)

## Oppsummering

SSL/TLS krypterer nettrafikk og er obligatorisk for alle nettsteder. Let's Encrypt og Cloudflare tilbyr gratis sertifikater.
