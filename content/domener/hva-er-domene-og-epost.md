---
title: "Hva er domene og e-post?"
slug: "hva-er-domene-og-epost"
category: "domener"
subcategory: "teknisk"
description: "En egn e-postadresse med ditt domene (post@bedrift.no) bygger profesjonalitet. Lær hvordan du kobler domene til e-post med Google Workspace, Microsoft 365 eller gratis alternativer."
keywords: ["domene e-post", "e-post eget domene", "Google Workspace", "Microsoft 365 e-post", "MX-post e-post"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Domene og e-post"
aliases: ["e-post med domene", "profesjonell e-post"]
related: ["hva-er-dns-oppslag", "hva-er-dns", "hva-er-et-domenenavn", "hva-er-ssl-sertifikat", "hva-er-domeneregistrarer"]
seeAlso: ["hva-er-dns-oppslag", "hva-er-dns"]
tags: ["e-post", "domener", "teknisk"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er domene og e-post?

Å koble domenet ditt til e-post gir deg profesjonelle e-postadresser som post@bedrift.no i stedet for bedrift123@gmail.com – det bygger tillit, merkevare og profesjonalitet.

> **Kort forklart**
> Hvilken e-post stoler du mer på: kontakt@bedrift.no eller bedrift.kontakt2024@gmail.com? E-post med eget domene er standarden for bedrifter. Oppsett: registrer domene, velg e-posttjeneste (Google Workspace ~70 kr/mnd eller Microsoft 365 ~100 kr/mnd), sett opp MX-poster i DNS, og du har profesjonell e-post. Domeneshop tilbyr gratis e-postvideresending som en enkel løsning.

## Hva betyr begrepet

E-post med eget domene betyr at du bruker ditt domenenavn i e-postadressen. Det krever et registrert domene, en e-posttjeneste (hosting for e-posten), og korrekt DNS-oppsett (MX-poster som peker til e-posttjenesten).

E-posttjenester å velge mellom er Google Workspace (fra ~70 kr/bruker/mnd) som gir Gmail med ditt domene, Google Drive, Calendar, Meet – det mest populære. Microsoft 365 (fra ~100 kr/bruker/mnd) gir Outlook med ditt domene, OneDrive, Teams, Office-apper. Domeneshop e-post (gratis med domene) gir enkel e-post og videresending – begrenset men gratis. Zoho Mail (gratis for 5 brukere) er et gratisalternativ med webmail.

DNS-oppsett krever MX-poster som forteller internett «send e-post for dette domenet til denne serveren.» I tillegg: SPF-post (TXT) som autoriserer hvem som kan sende e-post fra domenet ditt, DKIM-post (TXT) som er en digital signatur for å bevise at e-posten er ekte, og DMARC-post (TXT) som er en policy for å håndtere e-post som feiler SPF/DKIM. Disse tre (SPF + DKIM + DMARC) er nødvendige for å unngå at e-posten havner i spam.

## Hvordan sette opp

Koble domene til Google Workspace.

```
Steg 1: Kjøp Google Workspace (workspace.google.com)
Steg 2: Verifiser at du eier domenet (TXT-post i DNS)
Steg 3: Sett opp MX-poster:

  MX  @  aspmx.l.google.com         Prioritet 1
  MX  @  alt1.aspmx.l.google.com    Prioritet 5
  MX  @  alt2.aspmx.l.google.com    Prioritet 5
  MX  @  alt3.aspmx.l.google.com    Prioritet 10
  MX  @  alt4.aspmx.l.google.com    Prioritet 10

Steg 4: Sett opp SPF:
  TXT  @  "v=spf1 include:_spf.google.com ~all"

Steg 5: Sett opp DKIM (fra Google Admin):
  TXT  google._domainkey  "v=DKIM1; k=rsa; p=..."

Steg 6: Sett opp DMARC:
  TXT  _dmarc  "v=DMARC1; p=quarantine; rua=mailto:dmarc@domene.no"

→ E-post fungerer innen 1–24 timer
→ post@bedrift.no er klar
```

## Hvorfor er det viktig

E-post med eget domene er standarden for profesjonelle bedrifter. Det bygger tillit (kunder stoler mer på @bedrift.no enn @gmail.com), merkevare (hver e-post er merkevareeksponering), og kontroll (du eier adressen – Gmail kan ikke stenge den). Uten SPF, DKIM og DMARC havner e-posten ofte i spam hos mottakere – oppsett er kritisk.

## Vanlige spørsmål

### Hva er billigst?
Domeneshop e-post: gratis (inkludert med domene, begrenset). Zoho Mail: gratis (5 brukere). Google Workspace: ~70 kr/mnd. Microsoft 365: ~100 kr/mnd.

### Trenger jeg Google Workspace eller Microsoft 365?
For de fleste små bedrifter: Google Workspace (enklere, billigere). For bedrifter som allerede bruker Office: Microsoft 365. For privatpersoner: gratis Domeneshop-videresending.

### Hva er SPF, DKIM og DMARC?
Anti-spam-beskyttelse som beviser at e-posten er ekte og autorisert. Uten dem: e-posten din havner i mottakerens søppelpost. Sett dem opp – det er kritisk.

## Relaterte begreper

- [DNS-oppslag](/domener/hva-er-dns-oppslag) – MX og TXT-poster
- [DNS](/domener/hva-er-dns) – systemet som router e-post
- [Domenenavn](/domener/hva-er-et-domenenavn) – det du bruker i e-postadressen
- [SSL-sertifikat](/domener/hva-er-ssl-sertifikat) – kryptert e-post
- [Domeneregistrarer](/domener/hva-er-domeneregistrarer) – noen inkluderer e-post

## Se også

- [Hva er DNS-oppslag?](/domener/hva-er-dns-oppslag)
- [Hva er DNS?](/domener/hva-er-dns)

## Oppsummering

E-post med eget domene (post@bedrift.no) bygger tillit og profesjonalitet. Google Workspace (~70 kr/mnd) eller Microsoft 365 (~100 kr/mnd) er standardvalgene. Kobles via MX-poster i DNS. SPF + DKIM + DMARC er KRITISK for å unngå spam. Domeneshop tilbyr gratis e-post med domene for enkel bruk.
