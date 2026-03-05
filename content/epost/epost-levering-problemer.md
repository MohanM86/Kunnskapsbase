---
title: E-poster havner i søppelpost – slik løser du det
description: Feilsøkingsguide for e-poster som havner i spam.
entityType: Guide
category: E-post
subcategory: Feilsøking
topic: E-postlevering
aliases: ["e-post i spam", "leveringsproblemer e-post", "email deliverability"]
related: ["spf-dkim-dmarc", "sette-opp-epost", "dns-posttyper"]
seeAlso: ["hva-er-dns"]
tags: [spam, søppelpost, levering, SPF, DKIM, IP-omdømme, feilsøking]
updatedAt: "2024-10-30"
---

## Diagnoseverktøy

1. [mail-tester.com](https://mail-tester.com) – send testmail og få detaljert score
2. [MXToolbox](https://mxtoolbox.com) – sjekk DNS-poster og svartelister

## Vanlige årsaker og løsninger

### Mangler SPF/DKIM/DMARC
Sett opp alle tre protokollene.

### IP-adresse på svarteliste
Sjekk på [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx).

### Innholdet utløser spamfiltre
Unngå STORE BOKSTAVER, for mange lenker, og ord som «gratis» og «klikk her».

## Feilkoder

| Kode | Betyr |
|------|-------|
| 421 | Midlertidig feil |
| 550 | Avsender avvist (blacklist/SPF) |
| 553 | Ugyldig adresse |
