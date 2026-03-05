---
title: WHOIS og personvern for domeneeiere
description: Hva er WHOIS, hva vises i WHOIS-registeret for .no-domener, og hvordan beskytter du personopplysningene dine som domeneeier.
category: Domener
tags: [WHOIS, personvern, GDPR, domene, registrant, Norid]
updatedAt: "2024-09-22"
---

WHOIS er et offentlig register som viser informasjon om hvem som eier et domene. For domeneeiere er det viktig å forstå hva som er synlig – og hva som er beskyttet.

## Hva er WHOIS?

WHOIS er en spørretjeneste som gir informasjon om:

- **Registrant** (eier av domenet)
- **Registrar** (selskapet domenet er registrert gjennom)
- **Navnetjenere** (DNS-servere)
- **Registreringsdato** og **utløpsdato**
- **Kontaktinformasjon** for teknisk og administrativ kontakt

## Slik sjekker du WHOIS

```bash
# Kommandolinje
whois kunnskapsbase.no

# Web-baserte tjenester
# https://www.norid.no/no/domenenavnsok/
# https://who.is
# https://lookup.icann.org
```

## WHOIS for .no-domener

Norid (det norske domeneregimet) har egne regler:

### Hva vises alltid:

- Domenenavn
- Registreringsdato
- Registrar
- Navnetjenere
- Status (aktiv/inaktiv)

### Hva skjules som standard (GDPR):

For **privatpersoner** er følgende anonymisert:
- Fullt navn
- Adresse
- E-postadresse
- Telefonnummer

For **bedrifter** er organisasjonsnavnet synlig, men kontaktpersonens detaljer kan anonymiseres.

## WHOIS-personvern for internasjonale domener

For `.com`, `.org`, `.net` og andre ICANN-domener er situasjonen annerledes:

### Etter GDPR (2018)

ICANN påla alle registrarer å skjule personopplysninger for EU/EØS-registranter som standard. De fleste registrarer gjør nå dette automatisk.

### WHOIS-skjerming (Privacy Protection)

Mange registrarer tilbyr **WHOIS Privacy**:
- Erstatter dine kontaktdetaljer med registrarens informasjon
- Videresender henvendelser via anonyme e-postadresser
- Noen tilbyr dette gratis (Cloudflare Registrar, Porkbun), andre tar 30–100 kr/år ekstra

## Slik aktiverer du WHOIS-personvern

### Hos Namecheap

1. Logg inn → Domain List → Klikk på domenet
2. "WhoisGuard" → Slå på "Enabled"

### Hos GoDaddy

1. "My Products" → Klikk domenet → "Manage DNS"
2. "Privacy" → Aktiver "Privacy Protection"

### Hos Cloudflare Registrar

Cloudflare aktiverer WHOIS-skjerming automatisk og gratis for alle domener.

## Konsekvenser av synlig WHOIS

Synlig WHOIS-informasjon kan føre til:

- **Spam** til kontakt-e-postadressen
- **Telefonselgere** som ringer om domenefornyelse eller SEO-tjenester
- **Phishing-forsøk** rettet mot domeneeieren

## Lovlige årsaker til å ha synlig WHOIS

I noen tilfeller er det fordelaktig med synlig kontaktinfo:
- Nettbutikker og bedrifter som vil fremstå som pålitelige
- Journalister og offentlige tjenester som krever åpenhet
- Domener der du aktivt vil bli kontaktet

## Oppsummering

| Domenetype | Standard synlighet | Personvern-alternativ |
|------------|-------------------|----------------------|
| .no (privat) | Anonymisert av Norid | Ingen ekstra tiltak nødvendig |
| .no (bedrift) | Org.navn synlig | Kontakt Norid-registrar |
| .com/.org etc. | Varierer | Aktiver WHOIS Privacy hos registrar |
