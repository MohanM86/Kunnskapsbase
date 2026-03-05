---
title: SSL/TLS-sertifikater – alt du trenger å vite
description: SSL/TLS-sertifikater krypterer trafikken mellom server og nettleser og aktiverer HTTPS. Guide til Let's Encrypt, sertifikattyper og installasjon.
entityType: Technology
category: Nettsider
subcategory: Sikkerhet
topic: SSL/TLS
aliases: ["SSL-sertifikat", "TLS-sertifikat", "HTTPS-sertifikat", "Let's Encrypt", "TLS", "HTTPS"]
related: ["velge-webhotell", "hva-er-et-domene", "bytte-navnetjener"]
seeAlso: ["ytelse-og-hastighet", "wordpress-installasjon"]
tags: [SSL, TLS, HTTPS, Let's Encrypt, sertifikat, sikkerhet]
updatedAt: "2024-11-12"
featured: true
---

Et SSL/TLS-sertifikat er i dag **obligatorisk** for alle nettsteder. Det krypterer trafikken mellom server og besøkende.

## Typer SSL-sertifikater

| Type | Verifisering | Passer for |
|------|-------------|-----------|
| DV (Domain Validation) | Kun domene, minutter | Blogger, enkle nettsteder |
| OV (Organization Validation) | Domene + bedrift, 1–3 dager | Bedrifter |
| EV (Extended Validation) | Grundig, dager | Banker, offentlige tjenester |

## Let's Encrypt – gratis SSL

```bash
# Installer Certbot på Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx

# Hent sertifikat
sudo certbot --nginx -d dittdomene.no -d www.dittdomene.no

# Test automatisk fornyelse (sertifikater varer 90 dager)
sudo certbot renew --dry-run
```

## Cloudflare SSL (enklest)

Med Cloudflare proxy aktivert får du SSL gratis uten konfigurasjon. Sett modus til **Full (strict)**.

## Tving HTTPS med .htaccess

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Test SSL-konfigurasjonen

Bruk [SSL Labs](https://www.ssllabs.com/ssltest/) – sikt på karakter A eller A+.
