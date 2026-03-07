---
title: "Hva er domenevideresending?"
slug: "hva-er-domenevideresending"
category: "domener"
subcategory: "teknisk"
description: "Domenevideresending sender besøkende fra ett domene til et annet – nyttig for merkevare-beskyttelse, domenebytte og kampanjer. Lær typene og SEO-effekten."
keywords: ["domenevideresending", "domain forwarding", "domene redirect", "videresende domene", "301 domene"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 3
draft: false
entityType: "Concept"
topic: "Domenevideresending"
aliases: ["domain forwarding", "domene-redirect"]
related: ["hva-er-et-domenenavn", "hva-er-dns", "hva-er-dns-oppslag", "hva-er-tld", "hva-er-domeneutvidelser"]
seeAlso: ["hva-er-et-domenenavn", "hva-er-dns"]
tags: ["videresending", "domener", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er domenevideresending?

Domenevideresending (domain forwarding) er å automatisk sende besøkende fra ett domene til et annet – slik at alle som skriver inn det ene domenet, havner på det andre.

> **Kort forklart**
> Du har kunnskapsbase.no som hovedddomene. Du eier også kunnskapsbase.com. Med domenevideresending sender du alle som skriver kunnskapsbase.com automatisk til kunnskapsbase.no. Brukeren merker det knapt – de ender opp riktig. Det brukes for merkevare-beskyttelse (eie alle varianter), domenebytte (gammelt domene → nytt), og kampanjedomener (kampanje.no → hovedside/kampanjeside).

## Hva betyr begrepet

To typer videresending finnes. Permanent videresending (301) forteller nettlesere og Google at domenet er permanent flyttet. All SEO-verdi overføres til måldomenet. Bruk for: domenebytte, konsolidering. Midlertidig videresending (302) forteller at det er midlertidig. SEO-verdi overføres IKKE. Bruk for: midlertidige kampanjer.

For de fleste formål er 301 riktig valg – den overfører SEO-verdi og er permanent.

Oppsett skjer typisk hos registraren under «videresending» eller «forwarding», via DNS (A-post + serverside redirect), eller via hosting (Vercel, Netlify har innebygd redirect-støtte).

## Vanlige bruksområder

Merkevare-beskyttelse: du eier eksempel.no, eksempel.com og eksempel.se – alle videresender til hovedddomenet. Domenebytte: du bytter fra gammeltdomene.no til nyttdomene.no – 301-redirect overfører SEO. Kampanje: kampanjedomene.no → hovedside.no/kampanje for enkel markedsføring. www til non-www: www.eksempel.no → eksempel.no (eller omvendt) for konsistens.

## Vanlige spørsmål

### Overfører videresending SEO-verdi?
301 (permanent): ja – ~90–99 prosent av lenke-verdi overføres. 302 (midlertidig): nei.

### Kan jeg videresende til en spesifikk side?
Ja – eksempel.com → eksempel.no/bestemt-side. De fleste registrarer støtter dette.

### Koster domenevideresending ekstra?
Nei hos de fleste registrarer – det er en gratis DNS-funksjon. Du betaler kun for selve domeneregistreringen.

## Relaterte begreper

- [Domenenavn](/domener/hva-er-et-domenenavn) – det du videresender
- [DNS](/domener/hva-er-dns) – systemet bak
- [DNS-oppslag](/domener/hva-er-dns-oppslag) – teknisk oppsett
- [TLD](/domener/hva-er-tld) – videresende mellom TLD-er
- [Domeneutvidelser](/domener/hva-er-domeneutvidelser) – beskytte flere

## Se også

- [Hva er et domenenavn?](/domener/hva-er-et-domenenavn)
- [Hva er DNS?](/domener/hva-er-dns)

## Oppsummering

Domenevideresending sender besøkende fra ett domene til et annet. 301 (permanent) overfører SEO-verdi. 302 (midlertidig) gjør det ikke. Bruk for merkevare-beskyttelse, domenebytte og kampanjer. Gratis hos de fleste registrarer. Alltid bruk 301 for permanente endringer.
