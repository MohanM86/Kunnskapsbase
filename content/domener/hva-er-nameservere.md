---
title: "Hva er nameservere?"
slug: "hva-er-nameservere"
category: "domener"
subcategory: "teknisk"
description: "Nameservere er DNS-serverne som lagrer domenet ditt sine DNS-poster og svarer på oppslag. Lær hva de er, hvordan du endrer dem, og populære alternativer."
keywords: ["nameservere", "name server", "NS-post", "DNS-server", "Cloudflare nameserver"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 3
draft: false
entityType: "Concept"
topic: "Nameservere"
aliases: ["name servers", "NS", "DNS-servere"]
related: ["hva-er-dns", "hva-er-dns-oppslag", "hva-er-et-domenenavn", "hva-er-domeneregistrarer", "hva-er-et-subdomene"]
seeAlso: ["hva-er-dns", "hva-er-dns-oppslag"]
tags: ["nameservere", "domener", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er nameservere?

Nameservere (name servers) er de autoritative DNS-serverne som lagrer og svarer på DNS-forespørsler for ditt domene – de er «adresseboken» som forteller internett hvor domenet ditt peker.

> **Kort forklart**
> Når noen skriver domenet ditt i nettleseren, ender forespørselen hos dine nameservere. De svarer: «A-post er 76.76.21.21, MX er Google, TXT er dette.» Nameservere settes hos din registrar og peker typisk til registraren (Domeneshop), hostingleverandøren (Vercel), eller en dedikert DNS-tjeneste (Cloudflare). Å bytte nameservere er det første du gjør når du flytter domenet til ny hosting eller DNS-leverandør.

## Hva betyr begrepet

Hvert domene har minst 2 nameservere (for redundans). Typiske nameservere er registrar-nameservere som `ns1.domeneshop.no` / `ns2.domeneshop.no` (standard fra Domeneshop), hosting-nameservere som `ns1.vercel-dns.com` / `ns2.vercel-dns.com` (Vercel), og dedikert DNS som `ada.ns.cloudflare.com` / `bob.ns.cloudflare.com` (Cloudflare).

Nameservere endres hos registraren. Du logger inn på Domeneshop, går til domeneinnstillinger, og bytter nameservere fra Domeneshops til f.eks. Cloudflares. Etter 1–48 timer (propagering) bruker hele internett de nye nameserverne.

Når du endrer nameservere, flytter du HELE DNS-administrasjonen til den nye leverandøren. Alle DNS-poster (A, CNAME, MX, TXT) må settes opp på nytt hos den nye leverandøren.

## Vanlige spørsmål

### Når bør jeg bytte nameservere?
Når du vil bruke Cloudflare (CDN + DNS), når hosting-leverandøren krever sine nameservere, eller for bedre DNS-ytelse.

### Er det risikabelt å bytte?
Minimal risiko hvis du setter opp alle DNS-poster hos ny leverandør FØR du bytter. Uten: nettsiden kan bli utilgjengelig under overgangen.

### Hva er forskjellen på nameservere og DNS-poster?
Nameservere er SERVERNE som lagrer DNS-postene. DNS-poster er INSTRUKSJONENE som lagres der. Nameservere = boken, DNS-poster = innholdet.

## Relaterte begreper

- [DNS](/domener/hva-er-dns) – systemet nameservere er del av
- [DNS-oppslag](/domener/hva-er-dns-oppslag) – postene nameservere lagrer
- [Domenenavn](/domener/hva-er-et-domenenavn) – det nameservere håndterer
- [Domeneregistrarer](/domener/hva-er-domeneregistrarer) – der du endrer nameservere
- [Subdomene](/domener/hva-er-et-subdomene) – håndteres av nameservere

## Se også

- [Hva er DNS?](/domener/hva-er-dns)
- [Hva er DNS-oppslag?](/domener/hva-er-dns-oppslag)

## Oppsummering

Nameservere er DNS-serverne som lagrer domenet ditt sine poster og svarer på oppslag. Minst 2 per domene for redundans. Endres hos registraren. Bytt til Cloudflare for raskere DNS og CDN. Sett opp alle DNS-poster hos ny leverandør FØR du bytter nameservere for å unngå nedetid.
