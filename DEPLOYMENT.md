# Kunnskapsbase.no – Deployment & Oppsett

## Forutsetninger

- Node.js 18+ installert
- Git installert
- GitHub-konto
- Vercel-konto (gratis på vercel.com)

---

## Del 1: Lokal utvikling

### 1. Installer avhengigheter

```bash
npm install
```

### 2. Start utviklingsserver

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000)

---

## Del 2: GitHub-oppsett

### 1. Opprett GitHub-repo

```bash
# Initialiser git i prosjektmappen
git init
git add .
git commit -m "Initial commit: Kunnskapsbase wiki"

# Opprett repo på GitHub (github.com → New repository)
# Gi det navn: kunnskapsbase
# Sett til Public (nødvendig for gratis Decap CMS OAuth)

# Koble til GitHub
git remote add origin https://github.com/DITT_BRUKERNAVN/kunnskapsbase.git
git branch -M main
git push -u origin main
```

---

## Del 3: Deploy til Vercel

### 1. Koble repo til Vercel

1. Gå til [vercel.com/new](https://vercel.com/new)
2. Klikk "Import Git Repository"
3. Velg GitHub og autoriser Vercel
4. Velg `kunnskapsbase`-repoet
5. Vercel oppdager Next.js automatisk – klikk **Deploy**

### 2. Sett opp custom domene

1. Gå til prosjektet i Vercel-dashbordet
2. **Settings → Domains → Add**
3. Skriv inn `kunnskapsbase.no`
4. Vercel viser deg DNS-poster som skal legges til

### 3. Oppdater DNS for domenet

Legg til disse postene hos registraren din:

```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

Etter propagasjon (1–24 timer) vil `kunnskapsbase.no` peke til Vercel.

---

## Del 4: GitHub OAuth for Decap CMS

Decap CMS bruker GitHub som backend. For å logge inn må du opprette en GitHub OAuth App.

### 1. Opprett GitHub OAuth App

1. Gå til: [github.com/settings/applications/new](https://github.com/settings/applications/new)
2. Fyll inn:
   - **Application name:** `Kunnskapsbase CMS`
   - **Homepage URL:** `https://kunnskapsbase.no`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
     *(Vi bruker Netlify's OAuth proxy selv om vi er på Vercel – det er den enkleste løsningen)*
3. Klikk **Register application**
4. Klikk **Generate a new client secret**
5. Kopier **Client ID** og **Client Secret** – du trenger dem i neste steg

### 2. Opprett Netlify-site kun for OAuth-proxy

Decap CMS trenger en OAuth-proxy. Den enkleste løsningen er å opprette et tomt Netlify-prosjekt:

1. Gå til [app.netlify.com](https://app.netlify.com) og opprett gratis konto
2. Klikk **Add new site → Import an existing project** – velg det samme GitHub-repoet
3. Etter deployment, gå til **Site settings → Access control → OAuth**
4. Under **Authentication Providers**, klikk **Install provider → GitHub**
5. Lim inn **Client ID** og **Client Secret** fra steget over
6. Klikk **Install**

> **Merk:** Netlify-siden brukes kun som OAuth-proxy. Det faktiske nettstedet kjører på Vercel.

### 3. Oppdater Decap CMS-konfigurasjon

Rediger `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: DITT_GITHUB_BRUKERNAVN/kunnskapsbase  # ← Endre dette!
  branch: main
  base_url: https://DIN-NETLIFY-URL.netlify.app  # ← Netlify-URL-en din
```

**Finn Netlify-URL:** I Netlify-dashbordet vises din side under f.eks. `https://amazing-fox-123.netlify.app`

### 4. Test admin-tilgang

1. Gå til `https://kunnskapsbase.no/admin/`
2. Klikk **Login with GitHub**
3. Autoriser appen
4. Du er inne i CMS-et!

---

## Del 5: Publish workflow i Decap CMS

### Direkte publisering (standard)

Nye artikler commites direkte til `main`-branchen → Vercel deployer automatisk (1–2 min).

### Editorial workflow (utkast → review → publisering)

For å aktivere utkast-funksjonalitet, sørg for at `public/admin/config.yml` har:

```yaml
publish_mode: editorial_workflow
```

Med dette aktivert:
- Nye artikler opprettes som **Draft** på en ny branch
- Godkjen → flyttes til **In Review**
- Publisér → merger til `main` → Vercel deployer

---

## Del 6: Etter deployment

### Oppdater metadata

Rediger `src/app/layout.tsx` og endre:
- `metadataBase` til `https://kunnskapsbase.no` (allerede satt)
- Twitter-handle under `twitter.site`

### Oppdater schema.ts

Rediger `src/lib/schema.ts`:
```typescript
const SITE_NAME = 'Kunnskapsbase';
const SITE_URL = 'https://kunnskapsbase.no';  // ← Allerede korrekt
```

### Verifiser i Google Search Console

1. Gå til [search.google.com/search-console](https://search.google.com/search-console)
2. Legg til domenet `kunnskapsbase.no`
3. Verifiser via DNS TXT-post
4. Send inn sitemapet: `https://kunnskapsbase.no/sitemap.xml`

---

## Fil- og mappestruktur

```
kunnskapsbase/
├── content/                    # Alle artikler som Markdown
│   ├── domener/
│   │   ├── hva-er-et-domene.md
│   │   ├── registrere-domene.md
│   │   ├── overfoere-domene.md
│   │   └── whois-og-personvern.md
│   ├── dns/
│   │   ├── hva-er-dns.md
│   │   ├── dns-posttyper.md
│   │   └── bytte-navnetjener.md
│   ├── epost/
│   │   ├── sette-opp-epost.md
│   │   ├── spf-dkim-dmarc.md
│   │   └── epost-levering-problemer.md
│   └── nettsider/
│       ├── ssl-sertifikat.md
│       ├── velge-webhotell.md
│       ├── wordpress-installasjon.md
│       └── ytelse-og-hastighet.md
├── public/
│   ├── admin/
│   │   ├── index.html          # Decap CMS entry
│   │   └── config.yml          # CMS-konfigurasjon
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/
│       └── og-default.png
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── page.tsx            # Forside
│   │   ├── globals.css         # Alle stiler
│   │   ├── robots.ts           # robots.txt
│   │   ├── sitemap.ts          # sitemap.xml
│   │   ├── admin/page.tsx      # Admin redirect
│   │   ├── api/search/route.ts # Søke-API
│   │   └── wiki/[...slug]/
│   │       └── page.tsx        # Artikkel- og kategorisider
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── wiki/
│   │   │   ├── Sidebar.tsx     # Venstremeny med innholdstre
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── SearchBox.tsx   # Søkefelt med Fuse.js
│   │   │   ├── RelatedArticles.tsx
│   │   │   ├── ArticleCard.tsx
│   │   │   └── FAQSection.tsx  # FAQ med FAQPage schema
│   │   └── seo/
│   │       └── JsonLd.tsx      # JSON-LD schema injeksjon
│   └── lib/
│       ├── types.ts            # TypeScript-typer
│       ├── articles.ts         # Markdown-lesing og parsing
│       ├── breadcrumbs.ts      # Brødsmule-builder
│       └── schema.ts           # JSON-LD schema-byggere
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Legge til nye artikler

### Via CMS (anbefalt)

1. Gå til `https://kunnskapsbase.no/admin/`
2. Velg kategori i venstremenyen
3. Klikk "New [kategori]-artikkel"
4. Fyll inn tittel, beskrivelse, tags og innhold
5. Klikk **Publish** → commites til GitHub → Vercel deployer

### Manuelt (markdown-fil)

Opprett en `.md`-fil i riktig mappe under `content/`:

```markdown
---
title: Tittel på artikkelen
description: Kort beskrivelse for SEO og oversikter.
category: Domener
subcategory: Registrering  # Valgfritt
tags: [domene, registrering, .no]
updatedAt: "2024-11-20"
featured: false  # true = vises på forsiden
---

## Innhold starter her

Skriv artikkelen din i Markdown...
```

---

## FAQ-komponent med schema

Legg til FAQ på en side ved å importere komponenten:

```tsx
import FAQSection from '@/components/wiki/FAQSection';
import JsonLd from '@/components/seo/JsonLd';
import { buildFAQSchema } from '@/lib/schema';

const faqs = [
  { question: "Hva er et domenenavn?", answer: "Et domenenavn er..." },
  { question: "Hva koster et .no-domene?", answer: "Typisk 100–200 kr per år..." },
];

// I JSX:
<JsonLd schema={buildFAQSchema(faqs)} />
<FAQSection items={faqs} />
```

---

## Vanlige feil

### "Cannot find module 'gray-matter'"
```bash
npm install
```

### Siden er blank etter deploy
Sjekk Vercel build logs for TypeScript-feil. Kjør `npm run build` lokalt for å se feil.

### Søk fungerer ikke
Search API bruker `getAllArticlesForSearch()` som leser fra filsystemet. Dette fungerer på Vercel siden content er i repoet.

### Decap CMS-innlogging feiler
- Kontroller at `base_url` i `config.yml` peker til riktig Netlify-URL
- Verifiser at GitHub OAuth App har korrekt callback-URL
