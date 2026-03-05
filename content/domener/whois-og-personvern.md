---
title: "WHOIS og personvern"
slug: "whois-og-personvern"
category: "Domener"
subcategory: "Personvern"
description: "WHOIS er et register over domeneeiere. Med GDPR er personopplysninger for privatpersoner anonymisert."
keywords: ["WHOIS", "personvern", "GDPR", "domene", "registrant"]
date: "2024-09-22"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 3
draft: false
entityType: "Concept"
topic: "WHOIS"
aliases: ["WHOIS-oppslag", "domeneoppslag", "domain lookup"]
related: ["hva-er-et-domene", "registrere-domene", "overfoere-domene"]
seeAlso: ["hva-er-et-domene", "registrere-domene"]
tags: ["WHOIS", "personvern", "GDPR", "domene"]
updatedAt: "2025-03-05"
contentType: "knowledge-article"
difficulty: "beginner"
---

# WHOIS og personvern

WHOIS er et offentlig register som viser informasjon om hvem som eier et domene.

> **Kort forklart**
> WHOIS viser eier, registrar og kontaktinfo for domener. GDPR har anonymisert data for privatpersoner i Europa.

## Hva betyr begrepet

WHOIS er en protokoll for å slå opp eierinformasjon. Du kan bruke `whois domene.no` i terminalen eller tjenester som who.is.

## Hvordan fungerer det

```
WHOIS-forespørsel → Registrar → Eierinfo (anonymisert for privatpersoner)
```

| Domenetype | Synlighet | Personvern |
|------------|-----------|------------|
| .no (privat) | Anonymisert | Automatisk via Norid |
| .no (bedrift) | Org.navn synlig | Kontakt registrar |
| .com/.org | Varierer | Aktiver WHOIS Privacy |

## Hvorfor er det viktig

WHOIS gir innsyn i domeneeierskap for kontakt og verifisering, mens personvern beskytter mot spam og identitetstyveri.

## Eksempler

- **Sjekke domeneeier** – for kontakt eller tvisteløsning
- **Verifisere bedrift** – se hvem som står bak en nettside
- **Sjekke utløpsdato** – finne ut når domenet kan bli ledig

## Vanlige spørsmål

### Er WHOIS-info alltid synlig?
Nei. GDPR har anonymisert data for privatpersoner i Europa.

### Hva er WHOIS Privacy?
Registraren erstatter dine detaljer med sine. Gratis hos Cloudflare og Porkbun.

### Kan jeg skjule firmanavnet?
For .no eid av bedrifter er org.navnet alltid synlig.

### Hvordan sjekker jeg WHOIS?
`whois domene.no` i terminalen eller besøk who.is.

### Gjelder GDPR for alle domener?
For europeiske registranter. Reglene varierer for andre regioner.

## Relaterte begreper

- [Domenenavn](/domener/hva-er-et-domene) – det WHOIS gir info om
- [Registrere domene](/domener/registrere-domene) – der eierinfo settes
- [Overføre domene](/domener/overfoere-domene) – eierinfo sjekkes ved transfer
- [DNS](/dns/hva-er-dns) – navnetjenere vises i WHOIS
- GDPR – personvernforordningen

## Se også

- [Hva er et domenenavn](/domener/hva-er-et-domene)
- [Registrere domene](/domener/registrere-domene)

## Oppsummering

WHOIS er et register over domeneeiere. For privatpersoner er data anonymisert etter GDPR. Bedrifters org.navn er synlig for .no-domener.
