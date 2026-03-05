---
title: Sette opp profesjonell e-post med eget domene
description: Slik setter du opp e-post med ditt eget domenenavn – enten med Google Workspace, Microsoft 365 eller en norsk e-postleverandør. Inkluderer DNS-konfigurasjon.
category: E-post
tags: [e-post, MX, Google Workspace, Microsoft 365, oppsett, domene]
updatedAt: "2024-11-10"
featured: true
---

En profesjonell e-postadresse som `hei@dinbedrift.no` gir et langt bedre inntrykk enn `dinbedrift@gmail.com`. Her viser vi deg hvordan du setter det opp.

## Velg e-postleverandør

### Google Workspace

Pris fra ca. 84 kr/bruker/mnd. Inkluderer Gmail, Google Drive, Meet og Calendar.

**Fordeler:** Kjent grensesnitt, utmerket spam-filtrering, pålitelig

### Microsoft 365 Business Basic

Pris fra ca. 65 kr/bruker/mnd. Inkluderer Outlook, Teams, OneDrive og SharePoint.

**Fordeler:** Integrert med Windows-miljø, Teams, Office-apper

### Norske alternativer

- **Runbox** (Norsk, GDPR-fokus) – fra 49 kr/mnd
- **Loopia Mail** – fra 29 kr/bruker/mnd
- **One.com** – inkludert i mange webhotell-pakker

## Steg 1: Registrer deg hos valgt leverandør

For **Google Workspace:**
1. Gå til workspace.google.com
2. Velg "Start free trial"
3. Skriv inn domenenavnet ditt
4. Opprett første konto (din admin-konto)

## Steg 2: Konfigurer DNS

### MX-poster (obligatorisk)

MX-postene bestemmer hvilken server som mottar e-post. Eksempel for Google Workspace:

```
@ IN MX 1  ASPMX.L.GOOGLE.COM.
@ IN MX 5  ALT1.ASPMX.L.GOOGLE.COM.
@ IN MX 5  ALT2.ASPMX.L.GOOGLE.COM.
@ IN MX 10 ALT3.ASPMX.L.GOOGLE.COM.
@ IN MX 10 ALT4.ASPMX.L.GOOGLE.COM.
```

For Microsoft 365 vil postene ligne:
```
@ IN MX 0 dinbedrift-no.mail.protection.outlook.com.
```

### SPF-post (sterkt anbefalt)

SPF definerer hvilke servere som har lov til å sende e-post på vegne av domenet.

```
@ IN TXT "v=spf1 include:_spf.google.com ~all"
```

For Microsoft 365:
```
@ IN TXT "v=spf1 include:spf.protection.outlook.com ~all"
```

### DKIM (anbefalt)

DKIM signerer e-poster digitalt. Generer DKIM-nøkkel i leverandørens admin-panel og legg til som TXT-post.

Eksempel fra Google:
```
google._domainkey IN TXT "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0B..."
```

### DMARC (anbefalt)

DMARC forteller mottakende servere hva de skal gjøre med e-poster som feiler SPF/DKIM-sjekk.

```
_dmarc IN TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@dinbedrift.no; pct=100"
```

## Steg 3: Verifiser domenet

Leverandøren krever at du verifiserer eierskap av domenet via en TXT-post eller CNAME. Følg instruksjonene i onboarding-flyten.

## Steg 4: Konfigurer e-postklienter

### IMAP-innstillinger (generelt)

```
Innkommende server: imap.gmail.com  (eller tilsvarende)
Port: 993
SSL: Ja

Utgående server: smtp.gmail.com
Port: 587
STARTTLS: Ja
```

## Test e-postoppsettet

Bruk disse verktøyene for å verifisere konfigurasjonen:

- **MXToolbox** – [mxtoolbox.com](https://mxtoolbox.com) – sjekk MX, SPF, DKIM, DMARC
- **Mail Tester** – [mail-tester.com](https://mail-tester.com) – send testmail og få score
- **DMARC Analyzer** – [dmarcanalyzer.com](https://dmarcanalyzer.com)

## Vanlige feil

| Feil | Årsak | Løsning |
|------|-------|---------|
| E-post havner i søppelpost | Mangler SPF/DKIM | Sett opp SPF og DKIM |
| Kan ikke motta e-post | Feil MX-poster | Sjekk MX-poster med dig |
| Autentiseringsfeil | Feil passord/app-passord | Aktiver 2FA + app-passord |
| Domenet ikke verifisert | TXT-post mangler | Vent 24t og sjekk igjen |
