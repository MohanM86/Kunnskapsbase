---
title: DNS-posttyper forklart
description: Komplett oversikt over alle DNS-posttyper – A, AAAA, CNAME, MX, TXT, NS, SOA, SRV og mer. Med eksempler og bruksområder for hver type.
category: DNS
tags: [DNS, A-post, CNAME, MX, TXT, NS, posttyper, records]
updatedAt: "2024-10-25"
featured: true
---

DNS bruker ulike **posttyper** (records) for å peke til ulike tjenester. Her er en komplett oversikt over de viktigste.

## A-post (Address Record)

Peker et domenenavn til en **IPv4-adresse**.

```
kunnskapsbase.no.  3600  IN  A  185.107.56.200
www.kunnskapsbase.no.  3600  IN  A  185.107.56.200
```

- **Bruk:** Peke domene til webserver
- **TTL:** 3600 (1 time) er vanlig for stabile servere

## AAAA-post (IPv6 Address Record)

Som A-posten, men for **IPv6-adresser**.

```
kunnskapsbase.no.  3600  IN  AAAA  2001:db8::1
```

## CNAME-post (Canonical Name)

Et **alias** som peker til et annet domenenavn (ikke IP-adresse direkte).

```
www.kunnskapsbase.no.  3600  IN  CNAME  kunnskapsbase.no.
blog.kunnskapsbase.no.  3600  IN  CNAME  minblogg.wordpress.com.
```

**Viktig:**
- CNAME kan **ikke** brukes på rotdomenet (`@` / `kunnskapsbase.no`)
- Bruk ALIAS/ANAME for rotdomenet hos noen registrarer

## MX-post (Mail Exchange)

Definerer hvilken server som mottar e-post for domenet.

```
kunnskapsbase.no.  3600  IN  MX  10  mail.kunnskapsbase.no.
kunnskapsbase.no.  3600  IN  MX  20  mail2.kunnskapsbase.no.
```

- Tallverdien er **prioritet** – lavest prioritet velges først
- Alltid angi to MX-poster for redundans

## TXT-post (Text Record)

Inneholder fritekst. Brukes mye til verifisering og e-postsikkerhet.

```
# SPF-post
kunnskapsbase.no.  3600  IN  TXT  "v=spf1 include:_spf.google.com ~all"

# DMARC
_dmarc.kunnskapsbase.no.  3600  IN  TXT  "v=DMARC1; p=quarantine; rua=mailto:dmarc@kunnskapsbase.no"

# Google Search Console verifisering
kunnskapsbase.no.  3600  IN  TXT  "google-site-verification=abc123"
```

## NS-post (Name Server)

Definerer **autoritative navnetjenere** for domenet.

```
kunnskapsbase.no.  86400  IN  NS  ns1.domenehotell.no.
kunnskapsbase.no.  86400  IN  NS  ns2.domenehotell.no.
```

- Alltid **minst to NS-poster** for redundans
- NS-poster endres hos registraren, ikke i DNS-sonen

## SOA-post (Start of Authority)

Inneholder administrativ informasjon om DNS-sonen.

```
kunnskapsbase.no.  3600  IN  SOA  ns1.domenehotell.no. admin.kunnskapsbase.no. (
    2024110101  ; Serial
    3600        ; Refresh
    900         ; Retry
    604800      ; Expire
    300 )       ; Minimum TTL
```

Du redigerer sjelden SOA direkte – DNS-leverandøren håndterer dette.

## SRV-post (Service Record)

Spesifiserer plassering av tjenester (brukes av bl.a. VoIP, Teams, Zoom).

```
_autodiscover._tcp.kunnskapsbase.no.  3600  IN  SRV  10 10 443 autodiscover.outlook.com.
```

Format: `prioritet vekt port target`

## CAA-post (Certification Authority Authorization)

Definerer hvilke sertifikatutstedere som har lov til å utstede SSL-sertifikater for domenet.

```
kunnskapsbase.no.  3600  IN  CAA  0 issue "letsencrypt.org"
kunnskapsbase.no.  3600  IN  CAA  0 issuewild "letsencrypt.org"
```

## PTR-post (Pointer Record)

Brukes for **omvendt DNS-oppslag** – fra IP til domenenavn. Settes av ISP/datasenteret.

## Oversiktstabell

| Type | Bruk | Eksempel |
|------|------|----------|
| A | IPv4-adresse | `185.107.56.200` |
| AAAA | IPv6-adresse | `2001:db8::1` |
| CNAME | Alias til annet domene | `→ annet.domene.no.` |
| MX | E-postserver | `10 mail.server.no.` |
| TXT | Tekst/verifisering | `"v=spf1 ..."` |
| NS | Navnetjener | `ns1.leverandor.no.` |
| SOA | Soneinformasjon | Se over |
| SRV | Tjenestelokasjon | `10 10 443 server.no.` |
| CAA | SSL-autorisasjon | `"letsencrypt.org"` |
| PTR | Omvendt oppslag | `→ hostname` |
