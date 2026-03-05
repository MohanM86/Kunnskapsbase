---
title: DNS-posttyper forklart
description: Komplett oversikt over DNS-posttyper – A, AAAA, CNAME, MX, TXT, NS, SOA, SRV og CAA. Med eksempler og bruksområder for alle typer.
entityType: Standard
category: DNS
subcategory: Konfigurasjon
topic: DNS Records
aliases: ["DNS records", "DNS-poster", "A-post", "MX-post", "CNAME", "TXT-post", "nameserver records"]
related: ["hva-er-dns", "bytte-navnetjener", "spf-dkim-dmarc"]
seeAlso: ["sette-opp-epost", "ssl-sertifikat"]
tags: [DNS, A-post, CNAME, MX, TXT, NS, posttyper, records]
updatedAt: "2024-10-25"
featured: true
---

DNS bruker ulike **posttyper** (records) for å peke til ulike tjenester.

## A-post – IPv4-adresse

Peker domenenavn til en IPv4-adresse.

```
kunnskapsbase.no.  3600  IN  A  185.107.56.200
```

## AAAA-post – IPv6-adresse

```
kunnskapsbase.no.  3600  IN  AAAA  2001:db8::1
```

## CNAME-post – Alias

Peker til et annet domenenavn. Kan ikke brukes på rotdomenet.

```
www.kunnskapsbase.no.  3600  IN  CNAME  kunnskapsbase.no.
```

## MX-post – E-postserver

```
kunnskapsbase.no.  3600  IN  MX  10  mail.kunnskapsbase.no.
```

Lavest prioritetstall velges først. Ha alltid to MX-poster.

## TXT-post – Tekst og verifisering

```
kunnskapsbase.no.  IN  TXT  "v=spf1 include:_spf.google.com ~all"
_dmarc.kunnskapsbase.no.  IN  TXT  "v=DMARC1; p=quarantine"
```

## NS-post – Navnetjenere

```
kunnskapsbase.no.  86400  IN  NS  ns1.domenehotell.no.
```

## CAA-post – SSL-autorisasjon

```
kunnskapsbase.no.  3600  IN  CAA  0 issue "letsencrypt.org"
```

## Oversikt

| Type | Bruk |
|------|------|
| A | IPv4-adresse |
| AAAA | IPv6-adresse |
| CNAME | Alias til domene |
| MX | E-postserver |
| TXT | Verifisering/SPF/DKIM |
| NS | Navnetjener |
| CAA | SSL-autorisasjon |
| SRV | Tjenestelokasjon |
| PTR | Omvendt oppslag |
