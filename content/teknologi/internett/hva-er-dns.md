---
title: Hva er DNS?
description: DNS (Domain Name System) er internettets adressebok. Det oversetter domenenavn til IP-adresser slik at nettlesere kan finne riktig server på internett.
definition: DNS er et system som oversetter domenenavn som "google.com" til IP-adresser som "142.250.74.14", slik at datamaskiner kan kommunisere over internett.
category: Teknologi
categorySlug: teknologi
subcategory: Internett
subcategorySlug: internett
tags: [DNS, internett, IP-adresse, domene, navnetjener, protokoll]
author: Redaksjonen
publishedAt: "2024-11-20"
updatedAt: "2024-11-20"
featured: true
difficulty: beginner
relatedArticles:
  - teknologi/internett/hva-er-ip-adresse
  - teknologi/internett/hva-er-domener
faqs:
  - question: Hva står DNS for?
    answer: DNS står for Domain Name System – domenenenavnsystemet på norsk. Det er et hierarkisk, distribuert system som oversetter domenenavn til IP-adresser.
  - question: Hvor lang tid tar et DNS-oppslag?
    answer: Et DNS-oppslag tar typisk 20–120 millisekunder. Med caching kan det gå ned til noen få millisekunder, da svaret lagres lokalt i nettleseren eller operativsystemet.
  - question: Kan jeg bytte DNS-server?
    answer: Ja. Du kan bruke alternative DNS-servere som Cloudflare (1.1.1.1) eller Google (8.8.8.8) i stedet for din internettleverandørs standard. Dette kan gi raskere oppslag og økt personvern.
  - question: Hva er forskjellen på DNS og domene?
    answer: Et domene er selve navnet, for eksempel "kunnskapsbase.no". DNS er systemet som oversetter dette navnet til en IP-adresse. Domenet er adressen, DNS er adresseregisteret.
  - question: Hva skjer hvis DNS slutter å fungere?
    answer: Hvis DNS-serveren din ikke svarer, kan du ikke nå nettsider via domenenavn – selv om internettforbindelsen er aktiv. Det er derfor vi sier at "internett er nede" selv om det teknisk sett bare er DNS-problemet.
---

## Hva betyr DNS?

DNS – **Domain Name System** – er internettets oversettelsestjeneste. Det konverterer menneskevennlige domenenavn til maskinlesbare IP-adresser.

Tenk på det slik: Telefonboken din inneholder navn og tilhørende telefonnumre. DNS gjør det samme for internett – den holder styr på hvilke IP-adresser som tilhører hvilke domenenavn.

Uten DNS måtte du huske at Google befinner seg på `142.250.74.14`, og at Wikipedia er på `208.80.154.224`. DNS gjør at du bare skriver `google.com`.

## Hvordan fungerer DNS?

Når du skriver et domenenavn i nettleseren, starter en kjede av oppslag:

### 1. Sjekk lokal cache
Nettleseren sjekker om den allerede husker IP-adressen fra et tidligere besøk. Finner den den? Ferdig!

### 2. Spør operativsystemet
Neste stopp er operativsystemets DNS-cache og `/etc/hosts`-filen.

### 3. Spør rekursiv DNS-løser
Vanligvis din internettleverandørs DNS-server. Den gjør jobben på dine vegne.

### 4. Hierarkisk oppslag

```
Nettleser → Rekursiv løser → Root-navnetjener → TLD-navnetjener → Autoritativ navnetjener
```

**Root-navnetjenere** er 13 grupper med servere som vet hvilke navnetjenere som har ansvar for `.no`, `.com`, `.org` og andre toppnivådomener.

**TLD-navnetjenere** vet hvilken navnetjener som er autoritativ for ditt spesifikke domene.

**Autoritativ navnetjener** er serveren som inneholder de faktiske DNS-postene for domenet ditt.

### 5. Svar returneres og caches

IP-adressen returneres gjennom kjeden og lagres (caches) underveis med en TTL-verdi (Time To Live) som angir hvor lenge svaret er gyldig.

## Typer DNS-poster

DNS inneholder ulike typer poster for ulike formål:

| Posttype | Formål | Eksempel |
|----------|--------|---------|
| **A** | IPv4-adresse | `kunnskapsbase.no → 185.107.56.200` |
| **AAAA** | IPv6-adresse | `kunnskapsbase.no → 2001:db8::1` |
| **CNAME** | Alias til annet domene | `www → kunnskapsbase.no` |
| **MX** | E-postserver | `mail.google.com` |
| **TXT** | Tekstinformasjon | SPF, DKIM, verifisering |
| **NS** | Navnetjener | `ns1.cloudflare.com` |

## Hvorfor er DNS viktig?

DNS er fundamentet internett er bygget på. Uten det ville internett vært ubrukelig for vanlige mennesker.

For **bedrifter** er DNS kritisk infrastruktur. Et DNS-avbrudd betyr at nettsiden, e-posten og alle nettbaserte tjenester slutter å fungere – selv om selve serverne er operative.

For **sikkerhet** er DNS sentral. DNS-kapring, DNS-spoofing og DDoS-angrep mot DNS-infrastruktur er vanlige angrepsmetoder.

For **ytelse** spiller DNS en rolle. Raskere DNS-oppslag gir raskere sidelasting. Tjenester som Cloudflare DNS (`1.1.1.1`) hevder å være verdens raskeste DNS-løser.

## Eksempler på DNS i praksis

### Endre DNS-server på Mac

```bash
# Vis nåværende DNS
scutil --dns

# Test et oppslag
dig kunnskapsbase.no

# Bruk spesifikk DNS-server
dig @1.1.1.1 kunnskapsbase.no
```

### Feilsøk DNS-problemer

```bash
# Windows
nslookup kunnskapsbase.no

# Mac/Linux
host kunnskapsbase.no
dig +trace kunnskapsbase.no
```

## Oppsummering

DNS er internettets stille infrastruktur – det arbeidet du aldri legger merke til når det fungerer, men øyeblikkelig merker når det ikke gjør det. Hvert sekund utføres milliarder av DNS-oppslag globalt. Systemets distribuerte arkitektur gjør det ekstremt robust, men det er likevel et kritisk angrepspunkt og ytelsesmål for alle som driver nettsteder.
