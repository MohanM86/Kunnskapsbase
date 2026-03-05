---
title: Sette opp profesjonell e-post med eget domene
description: Slik setter du opp e-post med ditt eget domenenavn via Google Workspace, Microsoft 365 eller norsk leverandør – med komplett DNS-konfigurasjon.
entityType: Guide
category: E-post
subcategory: Oppsett
topic: E-postoppsett
aliases: ["e-post med eget domene", "bedriftse-post", "profesjonell e-post", "custom email"]
related: ["spf-dkim-dmarc", "dns-posttyper", "epost-levering-problemer"]
seeAlso: ["hva-er-dns", "bytte-navnetjener"]
tags: [e-post, MX, Google Workspace, Microsoft 365, oppsett, domene]
updatedAt: "2024-11-10"
featured: true
---

En profesjonell e-postadresse som `hei@dinbedrift.no` gir et langt bedre inntrykk enn `dinbedrift@gmail.com`.

## Velg e-postleverandør

| Leverandør | Pris fra | Inkluderer |
|------------|----------|-----------|
| Google Workspace | 84 kr/bruker/mnd | Gmail, Drive, Meet, Calendar |
| Microsoft 365 | 65 kr/bruker/mnd | Outlook, Teams, OneDrive |
| Runbox (norsk) | 49 kr/mnd | GDPR-fokus, norsk support |
| One.com | Inkludert i hosting | Enkel e-post |

## DNS-konfigurasjon

### MX-poster (Google Workspace)

```
@ IN MX 1  ASPMX.L.GOOGLE.COM.
@ IN MX 5  ALT1.ASPMX.L.GOOGLE.COM.
@ IN MX 5  ALT2.ASPMX.L.GOOGLE.COM.
```

### SPF-post

```
@ IN TXT "v=spf1 include:_spf.google.com ~all"
```

### DKIM

Generer DKIM-nøkkel i leverandørens admin-panel og legg til som TXT-post.

### DMARC

```
_dmarc IN TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@dinbedrift.no"
```

## Test oppsettet

- [mxtoolbox.com](https://mxtoolbox.com) – sjekk MX, SPF, DKIM, DMARC
- [mail-tester.com](https://mail-tester.com) – send testmail og få score
