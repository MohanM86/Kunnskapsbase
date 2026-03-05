---
title: Installere WordPress – komplett guide
description: Slik installerer du WordPress på webhotell med cPanel, med manuell installasjon via FTP/SSH, eller med WP-CLI. Inkluderer grunnleggende sikkerhetstips.
category: Nettsider
subcategory: WordPress
tags: [WordPress, installasjon, cPanel, WP-CLI, CMS, webhotell]
updatedAt: "2024-10-15"
---

WordPress driver over 43% av alle nettsteder på internett. Her er en komplett guide til installasjon.

## Krav

- PHP 8.1 eller nyere
- MySQL 8.0+ eller MariaDB 10.6+
- HTTPS/SSL-sertifikat
- Minimum 512 MB RAM (anbefalt: 1 GB)

## Metode 1: Installere via cPanel (enklest)

De fleste norske webhostere tilbyr **Softaculous** i cPanel for enklinstallasjon.

1. Logg inn på cPanel
2. Finn "Softaculous Apps Installer" → WordPress
3. Klikk "Install Now"
4. Fyll inn:
   - Protokoll: `https://`
   - Domene: Velg ditt domene
   - Mappe: La stå tom for installasjon i rot
   - Sitenavn og beskrivelse
   - Admin-brukernavn (IKKE bruk "admin"!)
   - Sterkt passord
   - E-postadresse
5. Klikk "Install" og vent 2–3 minutter

## Metode 2: Manuell installasjon via FTP/SSH

```bash
# 1. Last ned WordPress
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz

# 2. Opprett database i cPanel (eller MySQL)
# Databasenavn: wp_minside
# Bruker: wp_user
# Passord: sterkt_passord

# 3. Konfigurer wp-config.php
cp wordpress/wp-config-sample.php wordpress/wp-config.php
nano wordpress/wp-config.php
```

Fyll inn i `wp-config.php`:
```php
define( 'DB_NAME', 'wp_minside' );
define( 'DB_USER', 'wp_user' );
define( 'DB_PASSWORD', 'sterkt_passord' );
define( 'DB_HOST', 'localhost' );
```

## Metode 3: WP-CLI (for utviklere)

```bash
# Installer WP-CLI
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# Installer WordPress
wp core download --locale=nb_NO
wp core config --dbname=wp_minside --dbuser=wp_user --dbpass=sterkt_passord
wp db create
wp core install \
  --url=https://dittdomene.no \
  --title="Min nettside" \
  --admin_user=admin_brukernavn \
  --admin_password=sterkt_passord \
  --admin_email=din@epost.no

# Sett norsk språk
wp language core activate nb_NO
```

## Viktige innstillinger etter installasjon

### 1. Permalinks

Innstillinger → Permalenker → Velg "Innleggsnavn" (`/%postname%/`) → Lagre.

### 2. Fjern standard innhold

```bash
# Via WP-CLI
wp post delete 1 --force  # Slett eksempel-innlegg
wp post delete 2 --force  # Slett eksempel-side
wp comment delete 1 --force  # Slett eksempel-kommentar
```

### 3. Oppdater alt med én gang

Dashboard → Oppdateringer → Oppdater alt (temaer, plugins, WordPress).

## Grunnleggende sikkerhet

### Beskytt wp-config.php

Legg til i `.htaccess`:
```apache
<files wp-config.php>
order allow,deny
deny from all
</files>
```

### Installer sikkerhetsplugins

- **Wordfence** – Brannmur og malware-skanning
- **WP Activity Log** – Logger alle endringer

### Deaktiver fil-redigering

I `wp-config.php`:
```php
define('DISALLOW_FILE_EDIT', true);
```

### Begrens påloggingsforsøk

Bruk Wordfence eller **Limit Login Attempts Reloaded**.

## Anbefalt plugin-stack

| Funksjon | Plugin |
|---------|--------|
| SEO | Yoast SEO eller Rank Math |
| Cache | WP Rocket eller W3 Total Cache |
| Sikkerhetskopiering | UpdraftPlus |
| Kontaktskjema | Contact Form 7 eller WPForms |
| Sikkerhet | Wordfence |
| Bilder | ShortPixel (komprimering) |
