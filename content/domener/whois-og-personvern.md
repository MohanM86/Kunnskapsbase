---
title: WHOIS og personvern for domeneeiere
description: WHOIS er et offentlig register som viser informasjon om domenenavn og eiere. Med GDPR er personopplysninger for privatpersoner nå anonymisert som standard.
entityType: Concept
category: Domener
subcategory: Personvern
topic: WHOIS
aliases: ["WHOIS-oppslag", "domeneoppslag", "domain lookup", "registrantinformasjon"]
related: ["hva-er-et-domene", "registrere-domene"]
seeAlso: ["hva-er-dns"]
tags: [WHOIS, personvern, GDPR, domene, registrant, Norid]
updatedAt: "2024-09-22"
---

WHOIS er et offentlig register som viser informasjon om hvem som eier et domene. For domeneeiere er det viktig å forstå hva som er synlig – og hva som er beskyttet.

## Hva er WHOIS?

WHOIS gir informasjon om registrant (eier), registrar, navnetjenere, og registreringsdatoer.

```bash
whois kunnskapsbase.no
```

## WHOIS for .no-domener

Norid anonymiserer kontaktinformasjon for privatpersoner som standard etter GDPR. Organisasjonsnavn er alltid synlig for bedrifter.

## WHOIS-personvern for internasjonale domener

De fleste registrarer tilbyr **WHOIS Privacy** – erstatter dine detaljer med registrarens info. Tjenesten er gratis hos Cloudflare Registrar og Porkbun.

| Domenetype | Standard synlighet | Personvern |
|------------|-------------------|------------|
| .no (privat) | Anonymisert av Norid | Ingen tiltak nødvendig |
| .no (bedrift) | Org.navn synlig | Kontakt Norid-registrar |
| .com/.org etc. | Varierer | Aktiver WHOIS Privacy |
