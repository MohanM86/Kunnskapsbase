---
title: "Hva er SSL-sertifikat for domener?"
slug: "hva-er-ssl-sertifikat"
category: "domener"
subcategory: "teknisk"
description: "SSL-sertifikat krypterer trafikken mellom nettleseren og serveren – det som gir HTTPS og hengelåsen. Lær hva det er, gratis vs betalt, og hvorfor Google krever det."
keywords: ["SSL-sertifikat", "HTTPS", "Let's Encrypt", "hengelås", "SSL domene"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "SSL-sertifikat"
aliases: ["TLS-sertifikat", "HTTPS-sertifikat"]
related: ["hva-er-et-domenenavn", "hva-er-dns", "hva-er-en-url", "hva-er-domeneregistrarer", "hva-er-nameservere"]
seeAlso: ["hva-er-et-domenenavn", "hva-er-dns"]
tags: ["SSL", "domener", "teknisk", "sikkerhet"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er SSL-sertifikat for domener?

Et SSL-sertifikat (Secure Sockets Layer, nå teknisk TLS) krypterer all trafikk mellom brukerens nettleser og nettstedets server – det er det som gir HTTPS i URL-en og hengelåsikonet i nettleseren.

> **Kort forklart**
> Uten SSL: data sendes i klartekst – passord, kredittkort og personlig info kan fanges opp. Med SSL: alt krypteres – ingen kan lese trafikken underveis. Google krever HTTPS som rangeringsfaktor. Nettlesere viser «Ikke sikkert» for HTTP-sider. Let's Encrypt gir gratis SSL-sertifikater – det er ingen grunn til å ikke ha HTTPS i 2026. De fleste hostingleverandører (Vercel, Netlify, Cloudflare) inkluderer SSL automatisk.

## Hva betyr begrepet

SSL/TLS krypterer forbindelsen mellom nettleseren og serveren. Når du besøker `https://kunnskapsbase.no`, oppretter nettleseren en kryptert forbindelse med serveren, all data som sendes er kryptert (passord, skjemaer, sideinnhold), og ingen mellompart (ISP, hackere på WiFi) kan lese trafikken.

Tre typer SSL-sertifikater finnes. Domain Validation (DV) verifiserer bare at du eier domenet, er gratis (Let's Encrypt) eller billig, og er nok for de fleste. Organization Validation (OV) verifiserer bedriften bak domenet, koster 500–2 000 kr/år, og viser bedriftsinfo i sertifikatet. Extended Validation (EV) strengeste verifisering med bedriftsnavn i sertifikatet, koster 2 000–10 000 kr/år, og brukes av banker og store selskaper (men gir ikke lenger grønn adresselinje).

Gratis SSL via Let's Encrypt er standarden – automatisk utstedelse og fornyelse. Inkludert i Vercel, Netlify, Cloudflare, og de fleste moderne hosting-plattformer.

## Hvorfor er det viktig

Google bruker HTTPS som rangeringsfaktor – HTTP-sider nedprioriteres. Nettlesere viser «Ikke sikkert» for HTTP – brukere stoler ikke på det. GDPR krever kryptering av persondata i transit. Og brukerne forventer hengelåsen – det er standard i 2026.

For domener betyr det at du MÅ ha SSL for hvert domene og subdomene. De fleste plattformer håndterer dette automatisk.

## Vanlige spørsmål

### Trenger jeg å kjøpe SSL?
Nei – Let's Encrypt er gratis og tilstrekkelig for 99 prosent av nettsteder. Kjøp OV/EV kun for banker, finanstjenester eller krav fra regulator.

### Fungerer SSL automatisk på Vercel/Netlify?
Ja – SSL provisjoneres automatisk via Let's Encrypt når du kobler et domene. Ingen oppsett nødvendig.

### Hva om SSL utløper?
Nettleseren viser skremmende «Ikke sikkert»-advarsel. Brukere kan ikke besøke siden. Let's Encrypt fornyer automatisk hvert 90. dag.

### Trenger subdomener eget SSL?
Ja – hvert subdomene trenger sitt eget sertifikat, eller du kan bruke et wildcard-sertifikat (*.domene.no) som dekker alle.

## Relaterte begreper

- [Domenenavn](/domener/hva-er-et-domenenavn) – det SSL beskytter
- [DNS](/domener/hva-er-dns) – domenet SSL kobles til
- [URL](/domener/hva-er-en-url) – HTTPS i URL-en
- [Domeneregistrarer](/domener/hva-er-domeneregistrarer) – noen inkluderer SSL
- [Nameservere](/domener/hva-er-nameservere) – Cloudflare inkluderer SSL

## Se også

- [Hva er et domenenavn?](/domener/hva-er-et-domenenavn)
- [Hva er DNS?](/domener/hva-er-dns)

## Oppsummering

SSL-sertifikat krypterer trafikken og gir HTTPS + hengelås. Gratis via Let's Encrypt – inkludert i Vercel, Netlify, Cloudflare. Google krever HTTPS for rangering. Nettlesere viser «Ikke sikkert» uten SSL. DV (gratis) er nok for de fleste. Ingen grunn til HTTP i 2026.
