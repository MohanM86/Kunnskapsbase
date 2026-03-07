---
title: "Hva er forskjellen på domene og hosting?"
slug: "hva-er-domene-vs-hosting"
category: "domener"
subcategory: "grunnleggende"
description: "Domene er adressen, hosting er plassen. Lær forskjellen, om du trenger dem fra samme selskap, og de beste kombinasjonene for norske nettsider."
keywords: ["domene vs hosting", "forskjell domene hosting", "webhosting", "hosting Norge", "Vercel hosting"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Domene vs hosting"
aliases: ["domene og hosting", "webhosting"]
related: ["hva-er-et-domenenavn", "hva-er-dns", "hva-er-domeneregistrarer", "hva-er-nameservere", "hva-er-ssl-sertifikat"]
seeAlso: ["hva-er-et-domenenavn", "hva-er-dns"]
tags: ["hosting", "domener", "grunnleggende"]
updatedAt: "2026-03-07"
featured: true
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er forskjellen på domene og hosting?

Domene er nettstedets adresse (kunnskapsbase.no). Hosting er plassen der nettstedets filer faktisk lagres og serveres. Du trenger begge – men de trenger IKKE komme fra samme selskap.

> **Kort forklart**
> Tenk på det som en butikk: domenet er adressen (Storgata 15), hosting er selve bygningen der varene lagres. Adressen forteller folk hvor butikken er. Bygningen er der alt fysisk befinner seg. Du kan ha adresse (domene) hos Domeneshop og bygning (hosting) hos Vercel – DNS kobler dem sammen. Det er faktisk anbefalt å separere dem: best registrar for domene, best hosting for nettside.

## Hva betyr begrepet

Domene er nettstedets menneskelesbare adresse (kunnskapsbase.no), registreres hos en registrar (Domeneshop, Namecheap), koster ~99–150 kr/år, og administreres via DNS-innstillinger.

Hosting er serveren der nettstedets filer, bilder og databaser lagres, leveres av en hosting-leverandør (Vercel, Netlify, One.com), koster fra gratis (Vercel hobby) til tusenvis per måned, og er der nettsidens kode faktisk kjøres.

DNS kobler dem sammen. A-post i domenet peker til hosting-serverens IP-adresse. Når noen skriver domenet, finner DNS hosting-serveren, og serveren leverer nettsiden.

Populære hosting-alternativer for norske nettsider er Vercel (best for Next.js/React – gratis hobby-tier, brukt av kunnskapsbase.no), Netlify (lignende Vercel – gratis tier, sterk på Jamstack), One.com (norsk, alt-i-ett med domene – enkel for nybegynnere), Domeneshop (norsk, enkel hosting + domene), og DigitalOcean/Hetzner (VPS for avanserte – full kontroll). For WordPress er WP Engine (~$20/mnd – administrert WordPress) og Kinsta (~$30/mnd – premium WordPress-hosting) populære.

## Bør domene og hosting være hos samme selskap?

For de fleste er separasjon best. Domene hos Domeneshop (billig, norsk, pålitelig DNS) og hosting hos Vercel/Netlify (raskest, gratis, optimalisert for moderne rammeverk). One.com er bra for nybegynnere som vil ha alt på ett sted.

Fordeler med separasjon er at du kan bytte hosting uten å flytte domene, at du kan bruke best-i-klassen for begge, og at du unngår vendor lock-in.

Fordeler med alt-i-ett er at oppsett er enklere (én innlogging), at support er samlet, og at det er bra for ikke-tekniske brukere.

## Vanlige spørsmål

### Trenger jeg hosting for en enkel nettside?
Ja – men det kan være gratis. Vercel og Netlify har gratis tiers som er mer enn nok for de fleste nettsider.

### Kan jeg ha domene hos Domeneshop og hosting hos Vercel?
Ja – det er den anbefalte kombinasjonen for norske Next.js-prosjekter. DNS i Domeneshop peker til Vercel.

### Hva koster hosting?
Fra gratis (Vercel hobby, Netlify free) til 50–500 kr/mnd (One.com, Domeneshop) til tusenvis (enterprise hosting). For de fleste: gratis Vercel er mer enn nok.

### Hva er forskjellen på hosting og sky?
Tradisjonell hosting er en fysisk server. Sky-hosting (AWS, Azure, Google Cloud) er virtuelle servere i skyen. Vercel og Netlify er sky-baserte – du trenger ikke tenke på servere.

## Relaterte begreper

- [Domenenavn](/domener/hva-er-et-domenenavn) – adressen
- [DNS](/domener/hva-er-dns) – koblingen mellom domene og hosting
- [Domeneregistrarer](/domener/hva-er-domeneregistrarer) – der du kjøper domene
- [Nameservere](/domener/hva-er-nameservere) – peker domene til hosting
- [SSL-sertifikat](/domener/hva-er-ssl-sertifikat) – sikkerhet for hosting

## Se også

- [Hva er et domenenavn?](/domener/hva-er-et-domenenavn)
- [Hva er DNS?](/domener/hva-er-dns)

## Oppsummering

Domene = adressen (kunnskapsbase.no). Hosting = serveren der filene lagres (Vercel). DNS kobler dem. Trenger IKKE være fra samme selskap – separasjon anbefales (best registrar + best hosting). Domeneshop for .no-domene + Vercel for hosting er den optimale norske kombinasjonen. One.com for alt-i-ett nybegynner-løsning.
