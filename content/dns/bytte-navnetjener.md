---
title: Bytte navnetjener (DNS-server)
description: Slik bytter du navnetjener for domenet til Cloudflare, Route53 eller annen DNS-leverandør. Inkluderer propagasjonstid og komplett sjekkliste.
entityType: Process
category: DNS
subcategory: Konfigurasjon
topic: Navnetjenere
aliases: ["nameserver-bytte", "bytte DNS-leverandør", "endre nameserver", "NS-bytte"]
related: ["hva-er-dns", "dns-posttyper", "registrere-domene"]
seeAlso: ["ssl-sertifikat", "sette-opp-epost"]
tags: [navnetjener, nameserver, Cloudflare, DNS-bytte, propagasjon]
updatedAt: "2024-09-14"
---

Å bytte navnetjener er nødvendig når du vil flytte DNS-administrasjonen til en ny leverandør.

## Populære DNS-leverandører

| Leverandør | Gratis plan | Særpreg |
|------------|-------------|---------|
| Cloudflare | Ja | Rask, proxy-funksjon, DDoS-beskyttelse |
| Route53 (AWS) | Nei | Høy pålitelighet, skalerbar |
| Bunny DNS | Delvis | Billig anycast |
| Hetzner | Ja | Gratis, enkel |

## Bytte til Cloudflare – steg for steg

1. Legg til domenet i [cloudflare.com](https://cloudflare.com) og velg gratis plan
2. Cloudflare skanner eksisterende DNS-poster automatisk
3. **Verifiser nøye** at alle poster er korrekt importert (MX, TXT, CNAME)
4. Kopier Cloudflares navnetjenere (f.eks. `ahmed.ns.cloudflare.com`)
5. Oppdater navnetjenere hos registraren
6. Vent 15 min – 48 timer på propagasjon

## Sjekke propagasjon

```bash
dig NS kunnskapsbase.no @8.8.8.8
```

Sjekk status globalt på [whatsmydns.net](https://whatsmydns.net).

## Viktig om e-post

MX- og DKIM/SPF-poster skal alltid være satt til **DNS only** (grå sky i Cloudflare) – aldri proxy.
