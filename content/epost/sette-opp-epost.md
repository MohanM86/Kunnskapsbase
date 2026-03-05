---
title: "Sette opp profesjonell e-post"
slug: "sette-opp-epost"
category: "E-post"
subcategory: "Oppsett"
description: "Slik setter du opp e-post med eget domene via Google Workspace, Microsoft 365 eller norsk leverandør."
keywords: ["e-post", "eget domene", "Google Workspace", "Microsoft 365", "MX-poster"]
date: "2024-11-10"
lastReviewed: "2025-03-05"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Guide"
topic: "E-postoppsett"
aliases: ["e-post med eget domene", "bedriftse-post", "profesjonell e-post"]
related: ["spf-dkim-dmarc", "dns-posttyper", "epost-levering-problemer", "hva-er-dns"]
seeAlso: ["spf-dkim-dmarc", "dns-posttyper"]
tags: ["e-post", "MX", "Google Workspace", "Microsoft 365"]
updatedAt: "2025-03-05"
featured: true
contentType: "knowledge-article"
difficulty: "beginner"
---

# Sette opp profesjonell e-post

Profesjonell e-post med eget domene betyr å bruke en adresse som `hei@dinbedrift.no` i stedet for `dinbedrift@gmail.com`.

> **Kort forklart**
> Du velger en e-postleverandør, legger til MX-poster i DNS, og konfigurerer SPF/DKIM/DMARC for sikkerhet.

## Hva betyr begrepet

E-post med eget domene krever en leverandør og riktig DNS-konfigurasjon. MX-poster peker til leverandørens servere.

## Hvordan fungerer det

```
Velg leverandør → Legg til MX-poster i DNS → Konfigurer SPF/DKIM/DMARC → Test
```

| Leverandør | Pris fra | Inkluderer |
|------------|----------|-----------|
| Google Workspace | 84 kr/bruker/mnd | Gmail, Drive, Meet |
| Microsoft 365 | 65 kr/bruker/mnd | Outlook, Teams |
| Runbox (norsk) | 49 kr/mnd | GDPR-fokus |

## Hvorfor er det viktig

Profesjonell e-post bygger troverdighet og gir bedre kontroll over sikkerhet og merkevareprofil.

## Eksempler

- **Google Workspace** – Gmail-grensesnitt med eget domene
- **Microsoft 365** – Outlook med Teams-integrasjon
- **Runbox** – Norsk med GDPR-fokus

## Vanlige spørsmål

### Kan jeg bruke Gmail gratis med eget domene?
Nei. Det krever Google Workspace.

### Hvilke DNS-poster trenger jeg?
MX for levering, pluss SPF, DKIM og DMARC for sikkerhet.

### Kan jeg ha flere e-postadresser?
Ja, med aliaser og grupper.

### Hva skjer med eksisterende e-post ved bytte?
Du kan migrere til ny leverandør.

### Hvor tester jeg oppsettet?
mxtoolbox.com og mail-tester.com.

## Relaterte begreper

- [SPF, DKIM og DMARC](/epost/spf-dkim-dmarc) – sikkerhet for e-post
- [E-postlevering](/epost/epost-levering-problemer) – feilsøking
- [DNS-posttyper](/dns/dns-posttyper) – MX og TXT-poster
- [DNS](/dns/hva-er-dns) – systemet som styrer e-postruting
- [Domenenavn](/domener/hva-er-et-domene) – domenet e-posten bruker

## Se også

- [SPF, DKIM og DMARC](/epost/spf-dkim-dmarc)
- [E-poster havner i spam](/epost/epost-levering-problemer)

## Oppsummering

Profesjonell e-post krever en leverandør og riktig DNS-konfigurasjon med MX-poster, SPF, DKIM og DMARC.
