---
title: "Bytte navnetjener"
slug: "bytte-navnetjener"
category: "DNS"
subcategory: "Konfigurasjon"
description: "Slik bytter du navnetjener for domenet til Cloudflare eller annen DNS-leverandør uten nedetid."
keywords: ["navnetjener", "nameserver", "Cloudflare", "DNS-bytte", "propagasjon"]
date: "2024-09-14"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Process"
topic: "Navnetjenere"
aliases: ["nameserver-bytte", "bytte DNS-leverandør", "NS-bytte"]
related: ["hva-er-dns", "dns-posttyper", "registrere-domene", "sette-opp-epost"]
seeAlso: ["hva-er-dns", "dns-posttyper"]
tags: ["navnetjener", "nameserver", "Cloudflare", "DNS-bytte", "propagasjon"]
updatedAt: "2025-03-05"
contentType: "knowledge-article"
difficulty: "beginner"
---

# Bytte navnetjener

Å bytte navnetjener betyr å flytte DNS-administrasjonen for domenet ditt til en ny leverandør, for eksempel Cloudflare.

> **Kort forklart**
> Du peker domenet til nye DNS-servere. Nettstedet og e-posten fortsetter å fungere under hele prosessen.

## Hva betyr begrepet

Navnetjenere (nameservers) er DNS-serverne som svarer på oppslag for domenet ditt. Bytte betyr å peke til nye servere som administrerer postene.

## Hvordan fungerer det

```
Registrar → Oppdater NS-poster → Nye navnetjenere → Propagasjon → Ferdig
```

1. Legg til domenet hos ny DNS-leverandør
2. Verifiser at alle poster er importert (MX, TXT, CNAME)
3. Kopier de nye navnetjenerne
4. Oppdater hos registraren
5. Vent 15 min – 48 timer

| Leverandør | Gratis | Særpreg |
|------------|--------|---------|
| Cloudflare | Ja | CDN, DDoS-beskyttelse |
| Route53 | Nei | Høy pålitelighet |
| Hetzner | Ja | Enkel |

## Hvorfor er det viktig

Riktig DNS-leverandør gir raskere oppslag, bedre sikkerhet og enklere administrasjon.

## Eksempler

- **Til Cloudflare** – for raskere DNS og gratis SSL
- **Til Route53** – for høy tilgjengelighet
- **Til Hetzner** – for gratis, enkel DNS

## Vanlige spørsmål

### Får jeg nedetid ved bytte?
Nei, så lenge du importerer alle poster korrekt først.

### Hvor lang tid tar propagasjon?
Vanligvis 15 minutter til noen timer. Maks 48 timer.

### Hva skjer med e-posten?
Ingenting, så lenge MX-postene er korrekt hos ny leverandør.

### Bør MX-poster proxyes gjennom Cloudflare?
Nei. MX-poster skal alltid være «DNS only» – aldri proxy.

### Koster det å bytte navnetjener?
Nei. Selve byttet er gratis.

## Relaterte begreper

- [DNS](/dns/hva-er-dns) – systemet navnetjenere tilhører
- [DNS-posttyper](/dns/dns-posttyper) – postene som må migreres
- [Domeneregistrering](/domener/registrere-domene) – der NS settes
- [E-postoppsett](/epost/sette-opp-epost) – MX-poster må sjekkes
- [SSL-sertifikat](/nettsider/ssl-sertifikat) – kan påvirkes av DNS-bytte

## Se også

- [Hva er DNS](/dns/hva-er-dns)
- [DNS-posttyper](/dns/dns-posttyper)

## Oppsummering

Å bytte navnetjener er å flytte DNS-administrasjonen til ny leverandør. Ingen nedetid så lenge poster importeres korrekt. Propagasjon tar vanligvis under noen timer.
