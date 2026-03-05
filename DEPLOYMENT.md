# Kunnskapsbase.no v2 – Deployment Guide

## Kom i gang lokalt

```bash
npm install
npm run dev
# → http://localhost:3000
```

## URL-struktur

```
/                               # Forside
/tema                           # Alle kategorier
/artikler                       # Alle artikler
/ordbok                         # Alfabetisk ordbok
/om                             # Om prosjektet

/[kategori]                     # Kategoriside
# Eksempel: /teknologi, /ai, /okonomi

/[kategori]/[underkategori]/[slug]   # Artikkel
# Eksempel: /teknologi/internett/hva-er-dns
#           /ai/sprakmodeller/hva-er-en-llm
#           /okonomi/aksjer/hva-er-aksjer
```

## Legg til ny artikkel

Opprett en ny `.md`-fil i riktig mappe:

```
content/[kategori]/[underkategori]/tittel-med-bindestrek.md
```

### Frontmatter-mal (kopier og fyll inn)

```yaml
---
title: Hva er X?
description: Kort beskrivelse (150-160 tegn) for SEO og oversikter.
definition: Én setning som definerer begrepet. Brukes av AI-søk (ChatGPT, Perplexity etc.).
category: Teknologi          # Norsk navn
categorySlug: teknologi      # lowercase, bindestreker
subcategory: Internett       # Norsk underkategori-navn
subcategorySlug: internett   # lowercase, bindestreker
tags: [tag1, tag2, tag3]
author: Redaksjonen
publishedAt: "2024-12-01"
updatedAt: "2024-12-01"
featured: false              # true = vises på forside
difficulty: beginner         # beginner | intermediate | advanced
faqs:
  - question: Spørsmål 1?
    answer: Svar på spørsmål 1.
  - question: Spørsmål 2?
    answer: Svar på spørsmål 2.
---

## Innled med en klar definisjon

[Definisjon i første avsnitt – avgjørende for AI-søk]

## Hva betyr X?
## Hvordan fungerer X?
## Hvorfor er X viktig?
## Eksempler
## Oppsummering
```

### Kategori- og underkategorioversikt

| Kategori | categorySlug | Underkategorier (subcategorySlug) |
|----------|-------------|----------------------------------|
| Teknologi | `teknologi` | `internett`, `programvare`, `datasikkerhet`, `hosting`, `hardware` |
| AI | `ai` | `maskinlaering`, `sprakmodeller`, `bildegjenkjenning`, `robotikk`, `etikk` |
| Økonomi | `okonomi` | `aksjer`, `investering`, `bank`, `skatt`, `krypto` |
| Helse | `helse` | `sovn`, `trening`, `ernaering`, `mental-helse`, `medisin` |
| Vitenskap | `vitenskap` | `fysikk`, `biologi`, `kjemi`, `romfart`, `klima` |
| Historie | `historie` | `verdenshistorie`, `norsk-historie`, `oldtiden`, `moderne-tid`, `krig-og-fred` |
| Reise | `reise` | `destinasjoner`, `reisetips`, `natur`, `kultur`, `visa-og-regler` |
| Mat | `mat` | `oppskrifter`, `matkultur`, `teknikker`, `drikke`, `kosthold` |
| Utdanning | `utdanning` | `studieteknikk`, `norsk-skole`, `karriere`, `sprak`, `online-laering` |
| Samfunn | `samfunn` | `politikk`, `juss`, `velferd`, `medier`, `miljo` |

## Deploy til Vercel

```bash
git init
git add .
git commit -m "Initial commit"

# Opprett repo på GitHub, deretter:
git remote add origin https://github.com/DITT_BRUKERNAVN/kunnskapsbase.git
git push -u origin main
```

Gå til [vercel.com/new](https://vercel.com/new):
1. Importer GitHub-repoet
2. Next.js oppdages automatisk
3. Klikk **Deploy**
4. Sett opp custom domain: `kunnskapsbase.no`

## Automatisk deploy ved nye artikler

Hver gang du pusher til `main`-branchen på GitHub, deployer Vercel automatisk. Ny artikkel på ca. 1–2 minutter.

## API-endepunkter

| Endepunkt | Funksjon |
|-----------|---------|
| `GET /api/search?q=dns` | Søk i alle artikler |
| `GET /api/rss` | RSS-feed (20 nyeste artikler) |
| `GET /sitemap.xml` | XML-sitemap (auto-generert) |
| `GET /robots.txt` | Robots.txt (auto-generert) |

## SEO og AI-søk

Alle artikler genererer automatisk:
- `<title>` og `<meta description>`
- Open Graph (Facebook/LinkedIn-previews)
- Twitter Card
- `Article` JSON-LD schema
- `FAQPage` JSON-LD schema (hvis faqs er definert)
- `BreadcrumbList` JSON-LD schema
- `Organization` og `WebSite` schema på alle sider

### Tips for AI-søk-optimalisering
1. **`definition`-feltet er kritisk** – dette er det ChatGPT og Perplexity henter som svar
2. **Start artikkelen med klare definisjoner**
3. **FAQs hjelper featured snippets** i Google
4. **Korte, klare overskrifter** (H2/H3) gjør strukturen maskinlesbar

## Skalering til tusenvis av artikler

Prosjektet er designet for skalering:

- **Content-layer:** Alle artikler er flat markdown i `/content/`. Legg til ubegrenset.
- **Taxonomy:** Legg til nye kategorier i `src/lib/taxonomy.ts`
- **Build:** Next.js genererer statiske sider (`generateStaticParams`) – ingen database nødvendig
- **Ytelse:** Statisk generering gir lynrask levering via Vercel Edge Network

For 10 000+ artikler: Vurder å bytte fra filsystemet til en headless CMS (Contentlayer, Sanity, Contentful).
