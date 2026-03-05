---
title: SSL/TLS-sertifikater – alt du trenger å vite
description: Komplett guide til SSL-sertifikater. Forstå forskjellen på DV, OV og EV, hvordan du installerer Let's Encrypt gratis, og hva du gjør ved utløpt sertifikat.
category: Nettsider
tags: [SSL, TLS, HTTPS, Let's Encrypt, sertifikat, sikkerhet]
updatedAt: "2024-11-12"
featured: true
---

Et SSL/TLS-sertifikat er i dag **obligatorisk** for alle nettsteder. Det krypterer trafikken mellom server og besøkende, og er et krav for at Chrome og andre nettlesere ikke skal vise skremmende sikkerhetsadvarsler.

## Hva er et SSL-sertifikat?

SSL (Secure Sockets Layer) – i dag erstattet av TLS (Transport Layer Security) – er en protokoll som:

1. **Krypterer** trafikken mellom nettleser og server
2. **Autentiserer** at du virkelig snakker med riktig server
3. Aktiverer **HTTPS** og hengelåssymbolet i nettleseren

## Typer SSL-sertifikater

### Domain Validation (DV)

- Verifiserer kun at du eier domenet
- Utstedt automatisk på minutter
- Passer for: blogger, personlige nettsteder, småbedrifter

### Organization Validation (OV)

- Verifiserer domene + bedriftsinformasjon
- Tar 1–3 virkedager
- Viser bedriftsnavnet i sertifikatet

### Extended Validation (EV)

- Grundig verifisering av organisasjonen
- Historisk vist med grønn lås – nå samme visning som DV
- Passer for: banker, offentlige tjenester

## Let's Encrypt – gratis SSL for alle

[Let's Encrypt](https://letsencrypt.org) er en gratis, automatisert og åpen sertifikatutsteder. Det er det mest brukte valget for nettsteder i dag.

### Installere med Certbot (Ubuntu/Debian)

```bash
# Installer Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Hent sertifikat for Nginx
sudo certbot --nginx -d dittdomene.no -d www.dittdomene.no

# Automatisk fornyelse testes
sudo certbot renew --dry-run
```

### Automatisk fornyelse

Let's Encrypt-sertifikater varer i **90 dager**. Certbot oppretter automatisk en cron-jobb:

```bash
# Sjekk cron-jobben
sudo systemctl status certbot.timer
```

### Cloudflare SSL (anbefalt for de fleste)

Bruker du Cloudflare som DNS-proxy, gir de deg SSL gratis uten konfigurasjon:

1. Sett opp Cloudflare som proxy (oransje sky)
2. Gå til SSL/TLS-innstillinger → Velg "Full (strict)"
3. Aktiver "Always Use HTTPS" og "HSTS"

## Installere SSL på webhotell

De fleste norske webhotell inkluderer Let's Encrypt gratis:

| Leverandør | Automatisk SSL |
|------------|----------------|
| Domeneshop | Ja |
| One.com | Ja |
| Loopia | Ja |
| Hetzner | Via cPanel |

Se etter "SSL" eller "HTTPS" i kontrollpanelet ditt.

## Tvinge HTTPS med .htaccess

```apache
# .htaccess – omdirigere HTTP til HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Feilsøking

### "Certificate has expired"

Sertifikatet er ikke fornyet. Kjør:
```bash
sudo certbot renew --force-renewal
```

### Mixed content-advarsel

Nettsiden har HTTPS, men laster inn noen ressurser via HTTP. Finn og rett opp hardkodede `http://`-adresser i koden.

### Sertifikat ikke gyldig for domenet

Sertifikatet er utstedt for et annet domenenavn. Generer nytt sertifikat for riktig domene.

## Sjekke SSL-konfigurasjon

Test sertifikatet ditt på [SSL Labs](https://www.ssllabs.com/ssltest/) – du bør sikte på karakter A eller A+.
