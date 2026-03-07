---
title: "Hva er DNS-oppslag (A, CNAME, MX, TXT)?"
slug: "hva-er-dns-oppslag"
category: "domener"
subcategory: "teknisk"
description: "DNS-poster (records) styrer hvor domenet peker – A for nettside, MX for e-post, CNAME for alias, TXT for verifisering. Lær alle typer og når du bruker dem."
keywords: ["DNS-oppslag", "DNS records", "A-post", "CNAME", "MX-post", "TXT-post"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "DNS-oppslag"
aliases: ["DNS records", "DNS-poster"]
related: ["hva-er-dns", "hva-er-nameservere", "hva-er-et-domenenavn", "hva-er-et-subdomene", "hva-er-en-url"]
seeAlso: ["hva-er-dns", "hva-er-nameservere"]
tags: ["DNS", "domener", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er DNS-oppslag (A, CNAME, MX, TXT)?

DNS-poster (DNS records) er instruksjoner i DNS-systemet som forteller internett hvor domenet ditt peker for ulike formål – nettsiden (A/AAAA), e-post (MX), alias (CNAME), og verifisering (TXT).

> **Kort forklart**
> Tenk på DNS-poster som viderekoblinger i en telefonsentral. A-post: «Nettside-trafikk → send til denne serveren.» MX-post: «E-post → send til Google Workspace.» CNAME: «blogg.domene.no → send til Vercel.» TXT: «Ja, jeg eier dette domenet (verifisering).» Du administrerer DNS-poster via din registrar (Domeneshop) eller DNS-leverandør (Cloudflare). Det er det første du gjør når du kobler domene til hosting.

## De viktigste DNS-postene

A-post (Address) peker domenet til en IPv4-adresse. Eksempel: `kunnskapsbase.no → 76.76.21.21`. Bruk: koble domene til webserver. Du kan ha flere A-poster for lastbalansering.

AAAA-post er som A-post men for IPv6-adresser. Eksempel: `kunnskapsbase.no → 2606:4700:3030::6815:1234`. Bruk: fremtidssikring – IPv6 blir standard.

CNAME (Canonical Name) peker domenet til et ANNET domene (alias). Eksempel: `www.kunnskapsbase.no → kunnskapsbase.no` eller `blogg.eksempel.no → cname.vercel-dns.com`. Bruk: subdomener, CDN-oppsett, cloud hosting. CNAME kan IKKE brukes på rot-domenet (eksempel.no) – kun subdomener.

MX (Mail Exchange) forteller hvor e-post skal leveres. Eksempel: `kunnskapsbase.no MX → aspmx.l.google.com (prioritet 1)`. Bruk: koble domene til e-posttjeneste (Google Workspace, Microsoft 365). Flere MX-poster med ulik prioritet for fallback.

TXT (Text) lagrer tekst-informasjon for ulike formål. SPF forteller hvem som har lov til å sende e-post fra domenet (anti-spam). DKIM er digital signatur for e-post. DMARC er policy for håndtering av e-post som feiler SPF/DKIM. Verifisering brukes når Google/Facebook ber deg «legg til denne TXT-posten for å bevise eierskap.»

NS (Name Server) definerer hvilke nameservere som er autoritative for domenet. Eksempel: `kunnskapsbase.no NS → ns1.vercel-dns.com`. Bruk: delegere DNS til annen leverandør (Cloudflare, Vercel).

## Hvordan sette opp DNS-poster

Praktisk oppsett for vanlige scenarier.

```
Scenario 1 – Ny nettside på Vercel:
  A-post: @ → 76.76.21.21
  CNAME: www → cname.vercel-dns.com
  → Domenet peker til Vercel

Scenario 2 – Google Workspace e-post:
  MX: @ → aspmx.l.google.com (pri 1)
  MX: @ → alt1.aspmx.l.google.com (pri 5)
  TXT: @ → "v=spf1 include:_spf.google.com ~all"
  → E-post håndteres av Google

Scenario 3 – Verifisere domene for Search Console:
  TXT: @ → "google-site-verification=abc123..."
  → Google bekrefter at du eier domenet

Scenario 4 – Subdomene til annen server:
  CNAME: blogg → server.hosting.com
  → blogg.domene.no peker til annen server
```

## Vanlige spørsmål

### Hvor endrer jeg DNS-poster?
Hos din registrar (Domeneshop → DNS-administrasjon) eller din DNS-leverandør (Cloudflare dashboard).

### Hvor lang tid tar det før endringer virker?
TTL-avhengig – typisk minutter til timer. Nye poster: ofte aktive innen 5–30 minutter. Full propagering: opptil 48 timer.

### Hva er forskjellen på A og CNAME?
A peker til en IP-adresse (tall). CNAME peker til et annet domenenavn (tekst). CNAME kan ikke brukes på rotdomenet.

### Hva skjer hvis DNS-poster er feil?
Nettside utilgjengelig (feil A-post), e-post leveres ikke (feil MX), eller verifisering feiler (manglende TXT). Dobbeltsjekk alltid.

## Relaterte begreper

- [DNS](/domener/hva-er-dns) – systemet som bruker postene
- [Nameservere](/domener/hva-er-nameservere) – der postene lagres
- [Domenenavn](/domener/hva-er-et-domenenavn) – det postene konfigurerer
- [Subdomene](/domener/hva-er-et-subdomene) – bruker CNAME-poster
- [URL](/domener/hva-er-en-url) – resultatet av DNS-oppslag

## Se også

- [Hva er DNS?](/domener/hva-er-dns)
- [Hva er nameservere?](/domener/hva-er-nameservere)

## Oppsummering

DNS-poster styrer hvor domenet peker: A for nettside (→ IP), CNAME for alias (→ annet domene), MX for e-post (→ e-postserver), TXT for verifisering og sikkerhet (SPF, DKIM, DMARC), NS for nameservere. Administreres via registrar eller DNS-leverandør. Endringer tar minutter til timer. Feil DNS = nettside/e-post utilgjengelig. Det er det første du setter opp når du kobler domene til hosting.
