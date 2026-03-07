---
title: "Hva er et subdomene?"
slug: "hva-er-et-subdomene"
category: "domener"
subcategory: "grunnleggende"
description: "Et subdomene er en del av et domene som fungerer som en separat nettadresse – som blogg.eksempel.no. Lær hva det er, bruksområder, og SEO-effekten vs undermapper."
keywords: ["subdomene", "subdomain", "blogg.domene", "app.domene", "subdomene vs undermappe"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 3
draft: false
entityType: "Concept"
topic: "Subdomene"
aliases: ["subdomain", "underdomene"]
related: ["hva-er-et-domenenavn", "hva-er-dns", "hva-er-en-url", "hva-er-tld", "hva-er-dns-oppslag"]
seeAlso: ["hva-er-et-domenenavn", "hva-er-dns"]
tags: ["subdomene", "domener", "grunnleggende"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er et subdomene?

Et subdomene er en del foran hovedddomenet som fungerer som en separat nettadresse – for eksempel `blogg.eksempel.no` eller `app.eksempel.no` – og brukes for å organisere ulike deler av et nettsted.

> **Kort forklart**
> `eksempel.no` er hovedddomenet. `blogg.eksempel.no` er et subdomene – en «underadresse» som kan peke til en helt annen server eller tjeneste. Google behandler subdomener delvis som separate nettsteder – det betyr at SEO-autoritet IKKE deles automatisk mellom subdomene og hovedddomene. For de fleste er undermapper (`eksempel.no/blogg/`) bedre for SEO enn subdomener (`blogg.eksempel.no`).

## Hva betyr begrepet

I `blogg.eksempel.no` er `blogg` subdomenet, `eksempel` er hovedddomenet (second-level domain), og `.no` er TLD-en.

Vanlige bruksområder for subdomener er `www.eksempel.no` (det vanligste subdomenet – www er teknisk et subdomene), `blogg.eksempel.no` (blogg på separat plattform), `app.eksempel.no` (web-applikasjon), `shop.eksempel.no` (nettbutikk på annen plattform), `staging.eksempel.no` (testmiljø), og `mail.eksempel.no` (webmail).

Subdomene vs undermappe for SEO er et viktig valg. Subdomene (`blogg.eksempel.no`) behandles delvis som separat nettsted, deler IKKE automatisk domeneautoritet, og er best når tjenesten kjører på annen plattform. Undermappe (`eksempel.no/blogg/`) arver domeneautoriteten, deler SEO-verdi med hovedddomenet, og er best for innhold som bør styrke hovedddomenet.

For de fleste: bruk undermapper. Bruk subdomener kun når du MÅ (annen plattform/server).

## Hvordan sette opp

Et subdomene settes opp via DNS.

```
DNS-oppsett for blogg.eksempel.no:
  Type: CNAME
  Navn: blogg
  Verdi: hosting-server.com
  TTL: 3600

→ blogg.eksempel.no peker nå til hosting-server.com
→ Hovedddomenet eksempel.no påvirkes ikke
→ De kan kjøre helt ulike nettsteder
```

## Vanlige spørsmål

### Koster subdomener ekstra?
Nei – du kan opprette ubegrensede subdomener under ditt domene uten ekstra kostnad. Det er kun en DNS-konfigurasjon.

### Bør bloggen min være subdomene eller undermappe?
Undermappe (`/blogg/`) i nesten alle tilfeller – den arver SEO-autoritet fra hovedddomenet. Subdomene kun hvis bloggen kjører på helt annen plattform.

### Teller subdomener som separate nettsteder for Google?
Delvis – Google behandler dem som nært relaterte men ikke identiske. SEO-autoritet deles ikke automatisk. John Mueller (Google) har sagt at undermapper og subdomener behandles lignende, men i praksis ser vi at undermapper gir bedre SEO-resultat.

## Relaterte begreper

- [Domenenavn](/domener/hva-er-et-domenenavn) – hovedddomenet
- [DNS](/domener/hva-er-dns) – systemet som håndterer subdomener
- [URL](/domener/hva-er-en-url) – den fulle adressen
- [TLD](/domener/hva-er-tld) – toppnivådomenet
- [DNS-oppslag](/domener/hva-er-dns-oppslag) – CNAME for subdomener

## Se også

- [Hva er et domenenavn?](/domener/hva-er-et-domenenavn)
- [Hva er DNS?](/domener/hva-er-dns)

## Oppsummering

Et subdomene er en underadresse av hovedddomenet (blogg.eksempel.no). Det opprettes via DNS (CNAME) og er gratis. For SEO: undermapper (/blogg/) er nesten alltid bedre enn subdomener fordi de arver domeneautoritet. Bruk subdomener kun når tjenesten kjører på annen plattform.
