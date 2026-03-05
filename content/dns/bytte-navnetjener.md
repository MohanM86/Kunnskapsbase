---
title: Bytte navnetjener (DNS-server)
description: Slik bytter du navnetjener for domenet ditt – fra registrar til Cloudflare, Route53 eller annen DNS-leverandør. Med propagasjonstid og sjekkliste.
category: DNS
subcategory: Konfigurasjon
tags: [navnetjener, nameserver, Cloudflare, DNS-bytte, propagasjon]
updatedAt: "2024-09-14"
---

Å bytte navnetjener er nødvendig når du vil flytte DNS-administrasjonen til en ny leverandør, f.eks. fra registraren til Cloudflare for bedre ytelse og sikkerhet.

## Hvorfor bytte navnetjener?

- **Cloudflare, Route53 eller Bunny DNS** tilbyr raskere DNS enn de fleste registrarer
- Avanserte funksjoner som GeoDNS, DDoS-beskyttelse, og Analytics
- Sentralisert DNS-administrasjon for mange domener

## Populære DNS-leverandører

| Leverandør | Gratis plan | Særpreg |
|------------|-------------|---------|
| Cloudflare | Ja | Rask, proxy-funksjon |
| Route53 (AWS) | Nei | Høy pålitelighet |
| Bunny DNS | Delvis | Billig anycast |
| Porkbun | Ja | Enkel å bruke |
| Hetzner | Ja | Gratis, enkel |

## Steg-for-steg: Bytte til Cloudflare

### 1. Legg til domenet i Cloudflare

1. Gå til [cloudflare.com](https://cloudflare.com) og opprett konto
2. Klikk "Add a Site" og skriv inn domenet ditt
3. Velg gratis plan

### 2. La Cloudflare importere DNS

Cloudflare skanner automatisk eksisterende DNS-poster. **Sjekk nøye** at alle poster er korrekt importert:
- A-poster for domene og www
- MX-poster for e-post
- TXT-poster (SPF, DKIM, DMARC)
- CNAME-poster for subdomener

> **Viktig:** Hvis noen poster mangler, legg dem til manuelt NÅ – før du bytter navnetjener.

### 3. Merk hvilke poster som skal proxies

I Cloudflare kan du velge om trafikk skal gå via Cloudflare (oransje sky) eller ikke (grå sky):
- **Oransje sky:** Cloudflare skjuler din ekte IP og tilbyr CDN/DDoS-beskyttelse
- **Grå sky:** DNS-only, ingen proxy

E-post (MX) og DKIM/SPF skal alltid være **grå sky**.

### 4. Kopier Cloudflares navnetjenere

Du finner de nye navnetjenerne i Cloudflare-dashbordet:
```
ahmed.ns.cloudflare.com
viola.ns.cloudflare.com
```
(Dine vil ha andre navn)

### 5. Oppdater navnetjenere hos registraren

Logg inn hos registraren → Domeneinnstillinger → Navnetjenere (Nameservers) → Bytt ut de gamle med Cloudflares.

### 6. Vent på propagasjon

Etter at registraren har oppdatert, tar det:
- **15 min – 48 timer** for full global propagasjon
- Typisk **1–4 timer** for de fleste brukere

Sjekk status på [whatsmydns.net](https://whatsmydns.net).

## Sjekk propagasjon

```bash
# Se hvilke navnetjenere som brukes
dig NS kunnskapsbase.no @8.8.8.8

# Sjekk om Cloudflare svarer
dig kunnskapsbase.no @ahmed.ns.cloudflare.com
```

## Sjekkliste

- [ ] Alle DNS-poster er importert og verifisert i ny leverandør
- [ ] MX-poster er korrekte og e-post fungerer
- [ ] Navnetjenere er oppdatert hos registrar
- [ ] Propagasjon bekreftet med whatsmydns.net
- [ ] SSL-sertifikat fungerer etter byttet
