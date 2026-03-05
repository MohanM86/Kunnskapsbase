---
title: Installere WordPress – komplett guide
description: Slik installerer du WordPress via cPanel Softaculous, manuelt via FTP/SSH, eller med WP-CLI. Inkluderer krav, grunnleggende sikkerhetstips og anbefalt plugin-stack.
entityType: Guide
category: Nettsider
subcategory: WordPress
topic: WordPress
aliases: ["WordPress-installasjon", "sette opp WordPress", "WP-installasjon", "install WordPress"]
related: ["velge-webhotell", "ssl-sertifikat", "ytelse-og-hastighet"]
seeAlso: ["dns-posttyper", "bytte-navnetjener"]
tags: [WordPress, installasjon, cPanel, WP-CLI, CMS, webhotell]
updatedAt: "2024-10-15"
---

WordPress driver over 43% av alle nettsteder. Krav: PHP 8.1+, MySQL 8.0+, HTTPS, min 512 MB RAM.

## Metode 1: cPanel / Softaculous (enklest)

1. Logg inn på cPanel → Softaculous → WordPress → Install
2. Velg domene, fyll inn sitenavn, admin-brukernavn (ikke «admin»!), passord og e-post
3. Klikk Install

## Metode 2: WP-CLI (anbefalt for utviklere)

```bash
wp core download --locale=nb_NO
wp core config --dbname=wp_db --dbuser=wp_user --dbpass=passord
wp db create
wp core install \
  --url=https://dittdomene.no \
  --title="Min nettside" \
  --admin_user=mitt_brukernavn \
  --admin_password=sterkt_passord \
  --admin_email=din@epost.no
```

## Sikkerhetstiltak

```php
// wp-config.php
define('DISALLOW_FILE_EDIT', true);
```

```apache
# .htaccess – beskytt wp-config.php
<files wp-config.php>
  order allow,deny
  deny from all
</files>
```

## Anbefalt plugin-stack

| Funksjon | Plugin |
|---------|--------|
| SEO | Yoast SEO / Rank Math |
| Cache | WP Rocket / W3 Total Cache |
| Backup | UpdraftPlus |
| Sikkerhet | Wordfence |
| Bilder | ShortPixel |
