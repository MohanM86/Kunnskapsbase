---
title: Hva er DNS og hvordan fungerer det?
description: En komplett forklaring på DNS – Domain Name System. Lær hvordan DNS løser domenenavn til IP-adresser og hvilke komponenter som er involvert.
category: DNS
tags: [DNS, navnetjener, oppslag, IP-adresse, resolver, introduksjon]
updatedAt: "2024-11-01"
featured: true
---

**DNS** (Domain Name System) er internettets telefonbok. Det er systemet som oversetter lesbare domenenavn som `kunnskapsbase.no` til IP-adresser som `185.107.56.200` – som datamaskiner bruker for å kommunisere.

## Hvorfor trenger vi DNS?

Datamaskiner kommuniserer via IP-adresser (f.eks. `192.168.1.1`), men mennesker husker navn mye bedre enn tall. DNS lar oss bruke `google.com` istedenfor `142.250.74.14`.

## DNS-oppslagets reise

Når du besøker et nettsted skjer dette:

```
Nettleser → Resolver → Root-navnetjener → TLD-navnetjener → Autoritativ navnetjener
```

### Steg for steg:

1. **Nettleseren** sjekker sin lokale cache. Finner den adressen? Klar!
2. **OS-cache og /etc/hosts** sjekkes neste
3. **Rekursiv resolver** (f.eks. `8.8.8.8` hos Google) spørres
4. **Root-navnetjener** vet hvem som har `.no`-soner
5. **TLD-navnetjener** for `.no` vet hvem som har autoriteten for `kunnskapsbase.no`
6. **Autoritativ navnetjener** returnerer IP-adressen
7. Resultatet **caches** (lagres midlertidig) med TTL-verdien

## Komponenter i DNS

### Root-navnetjenere

Det finnes 13 grupper av root-navnetjenere (A–M) distribuert over hundrevis av lokasjoner verden over. De er starten på alle DNS-oppslag.

### TLD-navnetjenere

Disse håndterer toppnivådomener. Eksempler:
- Norid håndterer `.no`
- Verisign håndterer `.com` og `.net`
- PIR håndterer `.org`

### Autoritative navnetjenere

Dette er navnetjenerne du setter opp for ditt eget domene. De inneholder de faktiske DNS-postene (A, MX, CNAME etc.) for domenet ditt.

### Rekursiv resolver

Din internettleverandør leverer en resolver, men du kan også bruke:

| Leverandør | IPv4 primær | IPv4 sekundær |
|------------|-------------|---------------|
| Google | `8.8.8.8` | `8.8.4.4` |
| Cloudflare | `1.1.1.1` | `1.0.0.1` |
| Quad9 | `9.9.9.9` | `149.112.112.112` |

## DNS-caching og TTL

Hvert DNS-svar inneholder en **TTL** (Time To Live) – en verdi i sekunder som sier hvor lenge svaret kan caches.

- **Lav TTL** (300 sek = 5 min): Endringer propagerer raskt, men mer last på navnetjenere
- **Høy TTL** (86400 sek = 24 t): Raskere oppslag for brukere, men endringer tar tid å spre seg

> **Tips:** Senk TTL til 300 sekunder 24–48 timer FØR du gjør store DNS-endringer. Da får endringene raskere effekt.

## Sjekke DNS-oppslag

```bash
# Slå opp A-post
nslookup kunnskapsbase.no

# Mer detaljert med dig
dig kunnskapsbase.no

# Se spesifikk posttype
dig MX kunnskapsbase.no
dig TXT kunnskapsbase.no

# Bruk spesifikk navnetjener
dig @8.8.8.8 kunnskapsbase.no
```

## Oppsummering

DNS er fundamentet for hele internett. Uten det ville du måttet huske IP-adresser til hvert nettsted du besøker. Forståelse av DNS er essensiell for alle som driver med domener, nettsider eller e-post.
