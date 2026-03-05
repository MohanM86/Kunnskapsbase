---
title: Overføre domene til ny registrar
description: Slik overfører du et domene fra en registrar til en annen uten nedetid. Guide for .no-domener og internasjonale domener med EPP-kode.
category: Domener
tags: [overføring, registrar, EPP-kode, transfer, .no]
updatedAt: "2024-10-08"
---

Å overføre et domene betyr å flytte administrasjonen fra én registrar til en annen. DNS og nettstedet fortsetter å fungere under hele prosessen.

## Når bør du overføre domenet?

- Nåværende registrar er dyr eller har dårlig støtte
- Du vil samle alle domener på ett sted
- Du bytter webhotell og vil forenkle administrasjonen

## Overføre .no-domener

For `.no`-domener er prosessen litt annerledes enn for internasjonale domener:

### 1. Sjekk at domenet ikke er låst

Logg inn på nåværende registrar og sørg for at domenet **ikke er sperret** (transfer lock). For `.no`-domener kan du sjekke status via Norids WHOIS.

### 2. Be om overføring hos ny registrar

Logg inn hos den nye registraren og velg "Overfør domene". Skriv inn domenenavnet og klikk start.

### 3. Godkjenn overføringen

Norid sender en e-post til registrantens e-postadresse. Du **må svare** på denne innen 5 dager for å godkjenne overføringen.

### 4. Overføringen fullføres

Etter godkjenning tar overføringen typisk **1–3 virkedager**.

## Overføre internasjonale domener (.com, .org, .net)

Internasjonale domener bruker en **EPP-kode** (også kalt auth-code eller transfer secret).

### 1. Hent EPP-koden

Logg inn hos nåværende registrar → Domeninnstillinger → Overfør ut / EPP-kode. Koden sendes til registrantens e-post.

### 2. Lås opp domenet

Fjern transfer lock (overføringslås) hos nåværende registrar.

### 3. Start overføring hos ny registrar

Skriv inn domene + EPP-kode hos ny registrar. Betal for det neste registreringsåret (dette er separat fra hva du allerede har betalt).

### 4. Godkjenn via e-post

Du mottar en bekreftelsesmail. Godkjenn innen fristen (vanligvis 5 dager).

### 5. Vent på fullføring

ICANN-prosessen tar opptil **7 dager**, men tar oftest 1–3 dager.

## Viktig: 60-dagersregelen

ICANN forbyr overføring av domener som:
- Ble registrert for **under 60 dager** siden
- Ble overført for **under 60 dager** siden

Planlegg overføringen deretter.

## DNS under overføring

DNS-innstillingene **påvirkes ikke** av en registraroverføring. Nettstedet ditt vil fortsette å fungere normalt. Hvis du ønsker å endre DNS-leverandør samtidig, gjør det *etter* at overføringen er fullført.

## Sjekkliste for overføring

- [ ] Hent EPP-kode fra nåværende registrar
- [ ] Fjern transfer lock
- [ ] Kontroller at registrantens e-postadresse er oppdatert
- [ ] Start overføring hos ny registrar
- [ ] Sjekk innboks og godkjenn overføringen
- [ ] Bekreft at domenet vises hos ny registrar
- [ ] Aktiver automatisk fornyelse
