---
title: "Hva er federated learning?"
slug: "hva-er-federated-learning"
category: "ai"
subcategory: "maskinlaering"
description: "Federated learning lar AI trenes på distribuerte data uten at dataen forlater enheten – personvern by design. Lær hva det er, Googles bruk, og helsedata-muligheten."
keywords: ["federated learning", "føderert læring", "distribuert trening", "personvern AI", "on-device trening"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Federated learning"
aliases: ["føderert læring", "distribuert maskinlæring"]
related: ["hva-er-maskinlaering", "hva-er-ai-og-personvern", "hva-er-edge-ai", "hva-er-treningsdata", "hva-er-ai-i-helse"]
seeAlso: ["hva-er-maskinlaering", "hva-er-ai-og-personvern"]
tags: ["federated learning", "ai", "maskinlaering", "personvern"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er federated learning?

Federated learning er en maskinlæringsteknikk der en AI-modell trenes på data som forblir på brukernes enheter – modellen kommer til dataen i stedet for at dataen sendes til en sentral server.

> **Kort forklart**
> Vanlig AI-trening: samle all data på én server → tren modellen. Problem: du må sende sensitiv data (helsedata, bankdata, personlig info) til en sky. Federated learning snur det: modellen sendes til HVER enhet → trenes lokalt → kun modell-oppdateringene (ikke dataen) sendes tilbake → oppdateringene aggregeres til en bedre modell. Dataen forlater aldri enheten. Google bruker det for Gboard (tastaturforslag). Sykehus kan samtrene AI uten å dele pasientdata. Det er personvern by design.

## Hva betyr begrepet

I tradisjonell maskinlæring samles all treningsdata sentralt – det krever at brukere deler rå data, det er dyrt å lagre og prosessere sentralt, og det er et personvern-problem (GDPR, helsedata, bankdata).

Federated learning distribuerer treningen. Sentralserver sender modellen til alle deltakende enheter. Hver enhet trener modellen på sine lokale data. Enheten sender kun modell-oppdateringer (gradienter/vekter) tilbake – IKKE rå data. Serveren aggregerer alle oppdateringer til en forbedret global modell. Gjenta.

Typer federated learning er cross-device (millioner av telefoner – Google Gboard) og cross-silo (noen institusjoner – sykehus, banker).

Personvernforsterkninger inkluderer differential privacy (legge til støy i oppdateringene slik at individuelle datapunkter ikke kan rekonstrueres) og secure aggregation (kryptere oppdateringene slik at serveren ser kun aggregatet, ikke individuelle bidrag).

## Hvordan fungerer det

Modellen kommer til dataen, ikke omvendt.

```
Tradisjonell:
  Sykehus A, B, C → Send pasientdata til sky → Tren modell sentralt
  Problem: Pasientdata forlater sykehuset → GDPR-brudd?

Federated learning:
  Runde 1:
    Server sender modell v1 til sykehus A, B, C
    Sykehus A: trener på sine 10 000 pasienter → sender oppdatering ΔA
    Sykehus B: trener på sine 8 000 pasienter → sender oppdatering ΔB
    Sykehus C: trener på sine 12 000 pasienter → sender oppdatering ΔC
    Server: modell v2 = aggreger(ΔA, ΔB, ΔC)
  
  Runde 2: Gjenta med v2
  → Modellen lærte fra 30 000 pasienter uten at én pasientjournal forlot sykehuset
```

## Hvorfor er det viktig

Federated learning muliggjør AI-trening på sensitiv data – helsedata, bankdata, personlig informasjon – uten å bryte personvernet. Det er spesielt viktig for helsevesenet (sykehus kan samtrene AI uten å dele pasientdata – potensielt bedre kreftdiagnostikk globalt), finans (banker kan trene fraud-deteksjon sammen uten å dele kundedata), og GDPR-compliance (data forlater aldri enheten/institusjonen – compliance by design).

Google Gboard er det mest brukte eksempelet: tastaturforslag trenes på hva DU skriver, men teksten forlater aldri telefonen – kun modell-oppdateringer sendes.

## Eksempler

Gboard: Du skriver «Hei, skal vi møtes kl» → Gboard foreslår «18?» basert på dine vaner. Modellen er trent federert på millioner av telefoner – ingen leser hva du skriver.

Kreftdiagnostikk: 10 sykehus i Europa samtrener en AI for å oppdage lungekreft i CT-bilder – uten å dele én eneste pasientjournal. Modellen er like god som om all data var sentralisert.

Anti-hvitvasking: Banker samarbeider om fraud-deteksjon via federated learning – deler mønstre, ikke kundedata.

## Vanlige spørsmål

### Er federated learning perfekt for personvern?
Nesten – men modell-oppdateringer kan potensielt lekke informasjon. Differential privacy og secure aggregation reduserer dette til nær null.

### Hvorfor bruker ikke alle det?
Det er tregere og mer komplekst enn sentralisert trening. Kommunikasjon mellom enheter er flaskehalsen. For mange bruksområder er sentralisert trening med samtykke enklere.

### Fungerer det like godt som vanlig trening?
Nesten – men det kan være 2–5 prosent kvalitetsreduksjon sammenlignet med sentralisert trening med all data. For de fleste bruksområder er det akseptabelt.

## Relaterte begreper

- [Maskinlæring](/ai/hva-er-maskinlaering) – den overordnede prosessen
- [AI og personvern](/ai/hva-er-ai-og-personvern) – personvernkonteksten
- [Edge AI](/ai/hva-er-edge-ai) – lokal prosessering
- [Treningsdata](/ai/hva-er-treningsdata) – det som ikke deles
- [AI i helse](/ai/hva-er-ai-i-helse) – nøkkelbruksområde

## Se også

- [Hva er maskinlæring?](/ai/hva-er-maskinlaering)
- [Hva er AI og personvern?](/ai/hva-er-ai-og-personvern)

## Oppsummering

Federated learning trener AI-modeller uten å sentralisere data – modellen kommer til dataen. Enheter/institusjoner trener lokalt og deler kun modell-oppdateringer. Perfekt for helsedata, bankdata og GDPR-compliance. Google Gboard bruker det på milliarder av telefoner. Det muliggjør global AI-samtrening uten personvernkompromiss.
