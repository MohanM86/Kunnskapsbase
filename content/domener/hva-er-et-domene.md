---
title: Hva er et domenenavn?
description: Et domenenavn er den lesbare adressen til et nettsted, som oversetter til en IP-adresse via DNS. Eksempel – kunnskapsbase.no eller google.com.
entityType: Concept
category: Domener
subcategory: Grunnleggende
topic: Domenenavn
aliases: ["domene", "domenenavn", "nettadresse", "URL-domene"]
related: ["registrere-domene", "hva-er-dns", "whois-og-personvern"]
seeAlso: ["hva-er-dns", "ssl-sertifikat"]
tags: [domene, domenenavn, DNS, internett, introduksjon]
updatedAt: "2024-11-15"
featured: true
---

Et **domenenavn** er den lesbare adressen som brukere skriver inn i nettleseren for å nå nettstedet ditt – for eksempel `kunnskapsbase.no` eller `google.com`. Det er i praksis et alias for en IP-adresse, siden datamaskiner kommuniserer med tall, ikke ord.

## Hvordan fungerer et domenenavn?

Når du skriver et domenenavn i nettleseren, skjer dette i bakgrunnen:

1. Nettleseren spør en **DNS-løser** (ofte levert av din internettleverandør) om IP-adressen til domenet
2. DNS-løseren slår opp i DNS-systemet og finner riktig IP-adresse
3. Nettleseren kobler seg til webserveren på den IP-adressen
4. Nettstedet lastes inn

Hele prosessen tar typisk under 50 millisekunder.

## Oppbygning av et domenenavn

Et domenenavn er delt opp i **nivåer**, adskilt av punktum:

```
www.kunnskapsbase.no
│   │             │
│   │             └─ Toppnivådomene (TLD): .no
│   └─────────────── Andrenivådomene: kunnskapsbase
└─────────────────── Subdomene: www
```

### Toppnivådomener (TLD)

- **Landsspesifikke TLD-er**: `.no`, `.se`, `.dk`, `.de` – tildeles av nasjonale registre
- **Generiske TLD-er**: `.com`, `.org`, `.net` – globalt tilgjengelig
- **Nye TLD-er**: `.app`, `.blog`, `.tech` – introdusert etter 2014

## Registrering av domener

For å ta i bruk et domenenavn må du **registrere det** gjennom en akkreditert registrar. I Norge er Norid ansvarlig for `.no`-domener, mens internasjonale domener administreres via ICANN.

### Hva koster et domene?

| Domene | Pris per år |
|--------|-------------|
| `.no` | 99–199 kr |
| `.com` | 80–200 kr |
| `.org` | 100–200 kr |
| `.io` | 400–800 kr |

## Eierskap og WHOIS

Alle registrerte domener har eierinformasjon tilgjengelig via **WHOIS**-tjenesten. Du kan søke på `who.is` eller bruke kommandolinjen:

```bash
whois kunnskapsbase.no
```

> **Merk:** Med GDPR-regelverket er mye av eierinformasjonen nå anonymisert for privatpersoner.

## Vanlige feil å unngå

- **Stave domenet feil** – sjekk at du registrerer riktig navn
- **Glemme å fornye** – sett opp automatisk fornyelse
- **Velge for lang eller komplisert navn** – kort og memorerbart er best
- **Ikke registrere varianter** – vurder å sikre deg `.no` og `.com`
