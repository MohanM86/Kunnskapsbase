---
title: "Hva er DNS?"
slug: "hva-er-dns"
category: "domener"
subcategory: "grunnleggende"
description: "DNS er internettets telefonkatalog – det oversetter domenenavn til IP-adresser slik at nettleseren finner riktig server. Lær hva DNS er og hvordan det fungerer."
keywords: ["DNS", "Domain Name System", "navneserver", "DNS-oppslag", "IP-adresse"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "DNS"
aliases: ["Domain Name System", "domenenavnsystem"]
related: ["hva-er-et-domenenavn", "hva-er-nameservere", "hva-er-dns-oppslag", "hva-er-en-url", "hva-er-et-subdomene"]
seeAlso: ["hva-er-et-domenenavn", "hva-er-nameservere"]
tags: ["DNS", "domener", "grunnleggende", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er DNS?

DNS (Domain Name System) er internettets telefonkatalog – det oversetter menneskelesbare domenenavn (som kunnskapsbase.no) til maskinlesbare IP-adresser (som 76.76.21.21) slik at nettleseren din kan finne riktig server.

> **Kort forklart**
> Du skriver «kunnskapsbase.no» i nettleseren. Men datamaskiner forstår ikke ord – de trenger tall (IP-adresser). DNS oversetter: «kunnskapsbase.no» → «76.76.21.21» → nettleseren kobler til serveren → du ser nettsiden. Alt skjer på millisekunder. Uten DNS måtte du huske IP-adressen til hvert nettsted du besøker – som å ringe folk uten telefonkatalog.

## Hva betyr begrepet

DNS er et distribuert, hierarkisk system som oversetter domenenavn til IP-adresser. Det består av flere lag.

DNS-resolvere (recursive resolvers) er din internettleverandørs (ISP) DNS-server, eller en tredjepart som Cloudflare (1.1.1.1) eller Google (8.8.8.8). Den mottar forespørselen din og finner svaret.

Root-servere (13 grupper globalt) er toppen av DNS-hierarkiet. De vet hvilke servere som håndterer .no, .com, .org etc.

TLD-servere håndterer toppnivådomener – Norid håndterer .no, Verisign håndterer .com.

Autoritative nameservere er den endelige kilden – serveren som vet nøyaktig hvilken IP-adresse domenet peker til.

DNS-poster (records) er instruksjonene som forteller DNS-systemet hva som skal skje. De viktigste er A-post som peker domenet til en IPv4-adresse, AAAA-post som peker til IPv6-adresse, CNAME som peker domenet til et annet domene (alias), MX som forteller hvor e-post skal leveres, TXT som tekstdata for verifisering, SPF, DKIM, og NS som definerer nameserverne for domenet.

## Hvordan fungerer det

Et DNS-oppslag skjer i millisekunder.

```
Du skriver: kunnskapsbase.no

1. Nettleser sjekker lokal cache → Ikke funnet
2. Spør DNS-resolver (ISP/Cloudflare) → Ikke i cache
3. Resolver spør root-server → "Hvem håndterer .no?"
4. Root: "Spør Norid sine servere"
5. Resolver spør Norid (.no TLD) → "Hvem håndterer kunnskapsbase.no?"
6. Norid: "Spør ns1.vercel-dns.com"
7. Resolver spør Vercels nameserver → "Hva er IP-en?"
8. Vercel: "76.76.21.21"
9. Resolver cacher svaret → Sender til nettleseren
10. Nettleseren kobler til 76.76.21.21 → Nettsiden lastes

Total tid: 20–100 millisekunder
Neste gang: cachet → under 5 ms
```

## Hvorfor er det viktig

DNS er fundamentet for alt på internett – uten det fungerer ingenting. For nettstedeiere er DNS-oppsett det som kobler domenenavnet til hostingen. Feil DNS-konfigurasjon = nettsiden er utilgjengelig.

DNS-ytelse påvirker hastighet: trege DNS-oppslag gir tregere sidelasting. Cloudflare DNS (1.1.1.1) og Google DNS (8.8.8.8) er raskere enn de fleste ISP-er.

DNS-sikkerhet er kritisk: DNS-kapring (noen endrer dine DNS-poster) kan omdirigere trafikken din til falske sider. DNSSEC (DNS Security Extensions) beskytter mot dette.

## Eksempler

Ny nettside: Du registrerer domene hos Domeneshop og hoster på Vercel. Du endrer DNS-poster: A-post peker til Vercels IP. Etter 1–48 timer (DNS-propagering) fungerer domenet.

E-post: Du setter opp MX-poster for Google Workspace. DNS forteller internett: «E-post til @dittdomene.no skal til Googles e-postservere.»

CDN: Du bruker Cloudflare. DNS peker til Cloudflare i stedet for direkte til serveren. Cloudflare cacher og akselererer.

## Vanlige spørsmål

### Hva er DNS-propagering?
Når du endrer DNS-poster, tar det 1–48 timer før endringen spres til alle DNS-servere globalt. Nye poster er typisk aktive på minutter, men full propagering tar tid.

### Bør jeg bytte DNS fra ISP-en?
Ofte ja – Cloudflare (1.1.1.1) og Google (8.8.8.8) er raskere og mer pålitelige enn de fleste ISP-DNS-servere. Gratis å bytte.

### Hva er TTL?
Time To Live – hvor lenge DNS-svaret caches. Lav TTL (300 sek) = raskere oppdateringer. Høy TTL (86400 sek) = mindre DNS-trafikk.

### Hva skjer hvis DNS feiler?
Nettsiden er utilgjengelig – nettleseren finner ikke serveren. Derfor er redundante nameservere (minst 2) standard.

## Relaterte begreper

- [Domenenavn](/domener/hva-er-et-domenenavn) – det DNS oversetter
- [Nameservere](/domener/hva-er-nameservere) – serverne i DNS-systemet
- [DNS-oppslag](/domener/hva-er-dns-oppslag) – de ulike post-typene
- [URL](/domener/hva-er-en-url) – den fulle adressen
- [Subdomene](/domener/hva-er-et-subdomene) – del av domenet

## Se også

- [Hva er et domenenavn?](/domener/hva-er-et-domenenavn)
- [Hva er nameservere?](/domener/hva-er-nameservere)

## Oppsummering

DNS er internettets telefonkatalog – oversetter domenenavn til IP-adresser. Det er et hierarkisk system med resolvere, root-servere, TLD-servere og autoritative nameservere. DNS-poster (A, CNAME, MX, TXT) styrer hvor domenet peker. Oppslag tar millisekunder. Uten DNS fungerer ingenting på internett. Bruk Cloudflare eller Google DNS for raskere oppslag.
