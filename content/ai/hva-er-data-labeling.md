---
title: "Hva er data labeling?"
slug: "hva-er-data-labeling"
category: "ai"
subcategory: "maskinlaering"
description: "Data labeling er å merke treningsdata med korrekte svar slik at AI kan lære. Lær hva det er, Scale AI, RLHF-annotering, og den skjulte menneskelige arbeidskraften bak AI."
keywords: ["data labeling", "annotering", "merkede data", "Scale AI", "RLHF annotering"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Data labeling"
aliases: ["dataannotering", "datamerking", "labeling"]
related: ["hva-er-treningsdata", "hva-er-rlhf", "hva-er-maskinlaering", "hva-er-overfitting", "hva-er-bias-i-ai"]
seeAlso: ["hva-er-treningsdata", "hva-er-rlhf"]
tags: ["data labeling", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er data labeling?

Data labeling (dataannotering) er prosessen med å merke rå data med korrekte svar – «dette bildet er en katt», «denne e-posten er spam», «dette AI-svaret er bedre enn dette» – slik at AI-modeller kan lære fra merkede eksempler.

> **Kort forklart**
> AI lærer fra eksempler – men eksemplene må ha svar. Noen må se på 10 000 bilder og merke «katt», «hund», «bil». Noen må lese 100 000 AI-svar og vurdere «dette er hjelpsomt», «dette er skadelig.» Det er data labeling – den usynlige menneskelige arbeidskraften bak AI. Scale AI (verdi $14 mrd) er den største plattformen. RLHF-annotering (rangere AI-svar) er det som gjorde ChatGPT hjelpsom. Det er et enormt industri – og etisk kontroversielt (lav betaling, repetitivt, potensielt traumatisk arbeid).

## Hva betyr begrepet

Data labeling er nødvendig for supervised learning – AI som lærer fra merkede eksempler. Typer annotering inkluderer bildeklassifisering (merke bilder med kategori – katt, hund, bil), objektdeteksjon (tegne bounding boxes rundt objekter i bilder), tekstklassifisering (merke tekst med sentiment, tema, intensjon), named entity recognition (markere personnavn, steder, organisasjoner i tekst), og RLHF-annotering (rangere AI-svar fra best til dårligst – det som gjør ChatGPT god).

Hvem gjør arbeidet? Internasjonale annoteringsselskaper har ofte arbeidere i lavkostland (Kenya, India, Filippinene). Scale AI ($14 mrd verdsettelse) er den største plattformen for datamerking. Labelbox, Appen og Toloka er andre store aktører. Crowdsourcing (Amazon Mechanical Turk) brukes for enklere oppgaver. Ekspertannotering (leger for medisinsk data, jurister for juridisk) er dyrest men nødvendig for spesialiserte domener.

## Hvordan fungerer det

Mennesker merker data → AI lærer fra merkede eksempler.

```
Bilde-annotering:
  Menneske ser bilde → Tegner boks rundt katt → Merker "katt"
  × 100 000 bilder → Datasett klart → CNN trenes → Kattedetektor

RLHF-annotering (ChatGPT):
  AI genererer svar A og B på samme spørsmål
  Menneske leser begge → Velger: "B er bedre (mer hjelpsom, korrekt)"
  × 100 000 sammenligninger → Belønningsmodell trenes → ChatGPT forbedres

Kostnad:
  Enkel merking: $0,01–0,10 per datapunkt
  RLHF-rangering: $0,50–5 per sammenligning
  Ekspertannotering: $10–100 per datapunkt
```

## Hvorfor er det viktig

Data labeling er flaskehalsen for AI – modeller er bare så gode som dataen de trenes på, og dataen er bare så god som merkingen. «Garbage labels in, garbage model out.»

Etiske utfordringer: mange datamerkere betales under $2/time i lavkostland. RLHF-annotering for content moderation innebærer å lese voldelig, seksuelt og skadelig innhold – det er dokumentert at det forårsaker psykiske helseproblemer. Time Magazine avdekket at OpenAIs kenyanske RLHF-arbeidere ble betalt $1,32–2/time for traumatisk arbeid.

Auto-labeling med AI (bruke en sterk modell til å merke data for en svakere) reduserer behovet for menneskelig merking – men introduserer risiko for feil-forsterkring.

## Eksempler

Tesla Autopilot: Millioner av bilder fra Teslas kameraer merkes med «fotgjenger», «bil», «skilt» – noe automatisk, noe manuelt. Det er treningsdataen for selvkjørende.

ChatGPTs hjelpsomhet: Tusenvis av annoterere i Kenya og India rangerte AI-svar – «dette er hjelpsomt», «dette er skadelig.» Deres arbeid er grunnen til at ChatGPT er brukbar.

Medisinsk AI: Radiologer annoterer tusenvis av røntgenbilder – markerer kreft, brudd, betennelse. Ekspertannotering: $50–100 per bilde. Kritisk for kvalitet.

## Vanlige spørsmål

### Kan AI merke data selv?
Delvis – auto-labeling bruker sterke modeller for å merke. Men for kvalitetskritisk data og RLHF: menneskelig annotering er fortsatt nødvendig.

### Er det etisk problematisk?
Ja – lav betaling, repetitivt arbeid, eksponering for skadelig innhold. Industrien forbedres gradvis, men det er fortsatt et betydelig problem.

### Hva koster datamerking?
$0,01–0,10 per enkel merknad. $0,50–5 per RLHF-sammenligning. $10–100 per ekspertannotering. Store prosjekter: hundretusenvis til millioner.

## Relaterte begreper

- [Treningsdata](/ai/hva-er-treningsdata) – det som merkes
- [RLHF](/ai/hva-er-rlhf) – bruker menneskelig annotering
- [Maskinlæring](/ai/hva-er-maskinlaering) – supervised learning krever merket data
- [Overfitting](/ai/hva-er-overfitting) – dårlig merking kan forårsake det
- [Bias i AI](/ai/hva-er-bias-i-ai) – partisk merking gir partisk AI

## Se også

- [Hva er treningsdata?](/ai/hva-er-treningsdata)
- [Hva er RLHF?](/ai/hva-er-rlhf)

## Oppsummering

Data labeling er å merke treningsdata med korrekte svar – den usynlige menneskelige arbeidskraften bak AI. Scale AI er den største plattformen. RLHF-annotering gjør ChatGPT hjelpsom. Det er flaskehalsen for AI-kvalitet og etisk kontroversielt (lav betaling, traumatisk innhold). Auto-labeling reduserer behovet gradvis – men menneskelig merking er fortsatt essensielt for kvalitet.
