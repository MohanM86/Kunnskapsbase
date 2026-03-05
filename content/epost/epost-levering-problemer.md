---
title: E-poster havner i søppelpost – slik løser du det
description: Feilsøkingsguide for e-poster som havner i spam. Systematisk gjennomgang av SPF, DKIM, DMARC, IP-omdømme, reverse DNS og innholdsfiltre med konkrete løsninger.
entityType: Guide
category: E-post
subcategory: Feilsøking
topic: E-postlevering
aliases: ["e-post i spam", "leveringsproblemer e-post", "email deliverability", "bounce rate"]
related: ["spf-dkim-dmarc", "sette-opp-epost", "dns-posttyper"]
seeAlso: ["hva-er-dns"]
tags: [spam, søppelpost, levering, SPF, DKIM, IP-omdømme, feilsøking]
updatedAt: "2024-10-30"
---

## Diagnoseverktøy

1. [mail-tester.com](https://mail-tester.com) – send testmail og få detaljert score
2. [MXToolbox](https://mxtoolbox.com) – sjekk DNS-poster og svartelister
3. [Google Postmaster Tools](https://postmaster.google.com) – for domener som sender til Gmail

## Vanlige årsaker og løsninger

### Mangler SPF/DKIM/DMARC

Sett opp alle tre protokollene. Se [SPF, DKIM og DMARC guide](/wiki/epost/spf-dkim-dmarc).

### IP-adresse på svarteliste

Sjekk på [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx) og kontakt operatøren for fjerning.

### Innholdet utløser spamfiltre

Unngå STORE BOKSTAVER, for mange lenker, og ord som «gratis» og «klikk her». Test på mail-tester.com.

### Reverse DNS mangler

```bash
dig -x DIN_SERVER_IP
```

Kontakt datasenteret og be om PTR-post.

### Dårlig avsenderomdømme

Ryd i e-postlisten, send kun til aktive mottakere, legg til avmeldingslenke.

## Feilkoder

| Kode | Betyr |
|------|-------|
| 421 | Midlertidig feil |
| 550 | Avsender avvist (blacklist/SPF) |
| 553 | Ugyldig adresse |
