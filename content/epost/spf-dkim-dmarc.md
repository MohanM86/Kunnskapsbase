---
title: SPF, DKIM og DMARC forklart
description: Forstå de tre e-postsikkerhetsprotokollene SPF, DKIM og DMARC – hva de gjør, hvorfor du trenger dem, og hvordan du setter dem opp riktig.
category: E-post
subcategory: Sikkerhet
tags: [SPF, DKIM, DMARC, e-postsikkerhet, spam, phishing, TXT-post]
updatedAt: "2024-11-05"
featured: true
---

SPF, DKIM og DMARC er tre protokoller som til sammen beskytter domenet ditt mot e-postsvindel og sørger for at legitime e-poster når frem til mottakerne.

## Hvorfor er dette viktig?

Uten disse protokollene kan hvem som helst sende e-post som ser ut til å komme fra `ditt-domene.no`. Dette åpner for:

- **Phishing-angrep** mot kunder og partnere
- **E-poster havner i spam** fordi de ikke kan verifiseres
- **Svekket omdømme** for domenet ditt

## SPF – Sender Policy Framework

### Hva gjør SPF?

SPF definerer en liste over IP-adresser og servere som har lov til å sende e-post på vegne av domenet ditt.

### Slik fungerer det:

1. Du publiserer en SPF-post (TXT-post) i DNS
2. Mottakerserveren sjekker om avsenders IP er på listen
3. Resultatet er `pass`, `softfail` eller `fail`

### Eksempel på SPF-poster:

```
# Bare Google kan sende
v=spf1 include:_spf.google.com ~all

# Google + Microsoft 365
v=spf1 include:_spf.google.com include:spf.protection.outlook.com ~all

# Spesifikk IP + tjeneste
v=spf1 ip4:185.107.56.200 include:sendgrid.net ~all
```

### Forklaring av ~all vs -all:

- `~all` (softfail): E-poster fra ukjente servere merkes som mistenkelige, men leveres
- `-all` (hardfail): E-poster fra ukjente servere avvises

> Start med `~all`, og bytt til `-all` etter at du har bekreftet at SPF-posten er korrekt.

## DKIM – DomainKeys Identified Mail

### Hva gjør DKIM?

DKIM legger til en **digital signatur** i e-posthoder. Mottakerserveren kan verifisere signaturen via en offentlig nøkkel i DNS.

### Slik fungerer det:

1. E-postserveren signerer utgående e-poster med en privat nøkkel
2. Den offentlige nøkkelen publiseres i DNS som TXT-post
3. Mottakerserveren verifiserer signaturen

### DNS-posten:

```
selektor._domainkey.dinbedrift.no.  IN  TXT  "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0B..."
```

**Selektor** er et navn du velger (f.eks. `google`, `mail`, `default`). Brukes for å kunne ha flere DKIM-nøkler.

### Sette opp DKIM:

DKIM-nøkkelen genereres i e-postleverandørens admin-panel:
- Google Workspace: Admin Console → Apps → Gmail → Authenticate email
- Microsoft 365: Microsoft 365 Defender → Email & Collaboration → Policies → DKIM

## DMARC – Domain-based Message Authentication, Reporting & Conformance

### Hva gjør DMARC?

DMARC forteller mottakende e-postservere hva de skal gjøre med e-poster som **feiler** SPF eller DKIM. I tillegg gir det deg rapporter om hvem som sender e-post med domenet ditt.

### DMARC-policyer:

- `p=none` – Overvåk kun, gjør ingenting (start her!)
- `p=quarantine` – Send suspekte e-poster til søppelpost
- `p=reject` – Avvis suspekte e-poster fullstendig

### DNS-posten:

```
_dmarc.dinbedrift.no.  IN  TXT  "v=DMARC1; p=quarantine; rua=mailto:dmarc@dinbedrift.no; pct=100"
```

### Steg-for-steg DMARC-implementering:

1. **Start med `p=none`** og `rua=` rapport-e-post
2. **Analyser rapportene** i 2–4 uker (bruk verktøy som DMARC Analyzer)
3. **Flytt til `p=quarantine`** når du er sikker på at all legitim e-post passerer
4. **Bytt til `p=reject`** for maksimal beskyttelse

## Teste oppsettet

```bash
# Sjekk SPF
dig TXT dinbedrift.no | grep spf

# Sjekk DMARC
dig TXT _dmarc.dinbedrift.no

# Sjekk DKIM (erstatt selector med ditt selektor-navn)
dig TXT google._domainkey.dinbedrift.no
```

Online verktøy:
- [mxtoolbox.com/SuperTool](https://mxtoolbox.com/SuperTool.aspx)
- [dmarcian.com/dmarc-inspector](https://dmarcian.com/dmarc-inspector/)
- [mail-tester.com](https://mail-tester.com)

## Anbefalt minimumskonfigurasjon

| Post | Verdi |
|------|-------|
| SPF | `"v=spf1 [dine tjenester] ~all"` |
| DKIM | Sett opp via e-postleverandørens panel |
| DMARC | `"v=DMARC1; p=none; rua=mailto:dmarc@ditt-domene.no"` |
