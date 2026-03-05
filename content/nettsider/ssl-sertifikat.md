---
title: SSL/TLS-sertifikater – alt du trenger å vite
description: SSL/TLS-sertifikater krypterer trafikken mellom server og nettleser og aktiverer HTTPS.
entityType: Technology
category: Nettsider
subcategory: Sikkerhet
topic: SSL/TLS
aliases: ["SSL-sertifikat", "TLS-sertifikat", "HTTPS-sertifikat", "Let's Encrypt"]
related: ["velge-webhotell", "hva-er-et-domene", "bytte-navnetjener"]
seeAlso: ["ytelse-og-hastighet", "wordpress-installasjon"]
tags: [SSL, TLS, HTTPS, Let's Encrypt, sertifikat, sikkerhet]
updatedAt: "2024-11-12"
featured: true
---

Et SSL/TLS-sertifikat er i dag **obligatorisk** for alle nettsteder.

## Typer SSL-sertifikater

| Type | Verifisering | Passer for |
|------|-------------|-----------|
| DV | Kun domene, minutter | Blogger, enkle nettsteder |
| OV | Domene + bedrift, 1–3 dager | Bedrifter |
| EV | Grundig, dager | Banker, offentlige tjenester |

## Let's Encrypt – gratis SSL
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d dittdomene.no -d www.dittdomene.no
```

## Cloudflare SSL (enklest)
Med Cloudflare proxy aktivert får du SSL gratis uten konfigurasjon. Sett modus til **Full (strict)**.
