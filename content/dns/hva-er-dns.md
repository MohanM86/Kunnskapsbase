---
title: Hva er DNS og hvordan fungerer det?
description: DNS (Domain Name System) er internettets telefonbok og oversetter domenenavn som kunnskapsbase.no til IP-adresser som datamaskiner bruker for å kommunisere.
entityType: Concept
category: DNS
subcategory: Grunnleggende
topic: DNS
aliases: ["Domain Name System", "navnetjeneste", "domeneoppslagssystem"]
related: ["dns-posttyper", "bytte-navnetjener", "hva-er-et-domene"]
seeAlso: ["ssl-sertifikat", "bytte-navnetjener"]
tags: [DNS, navnetjener, oppslag, IP-adresse, resolver, introduksjon]
updatedAt: "2024-11-01"
featured: true
---

**DNS** (Domain Name System) er internettets telefonbok. Det er systemet som oversetter lesbare domenenavn som `kunnskapsbase.no` til IP-adresser som `185.107.56.200`.

## DNS-oppslagets reise

```
Nettleser → Resolver → Root-navnetjener → TLD-navnetjener → Autoritativ navnetjener
```

1. Nettleseren sjekker lokal cache
2. Rekursiv resolver spørres (f.eks. `8.8.8.8`)
3. Root-navnetjener peker til TLD-navnetjener
4. Autoritativ navnetjener returnerer IP-adressen
5. Resultatet caches med TTL-verdien

## Populære DNS-resolvers

| Leverandør | IPv4 primær | IPv4 sekundær |
|------------|-------------|---------------|
| Google | `8.8.8.8` | `8.8.4.4` |
| Cloudflare | `1.1.1.1` | `1.0.0.1` |
| Quad9 | `9.9.9.9` | `149.112.112.112` |

## DNS-caching og TTL

TTL (Time To Live) angir hvor lenge et DNS-svar caches i sekunder. Lav TTL (300s) gir rask propagasjon. Høy TTL (86400s) gir raskere oppslag.

> **Tips:** Senk TTL til 300 sekunder 24–48 timer FØR store DNS-endringer.

## Slå opp DNS

```bash
dig kunnskapsbase.no
dig MX kunnskapsbase.no
dig @8.8.8.8 kunnskapsbase.no
```
