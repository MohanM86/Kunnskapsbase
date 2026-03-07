---
title: "Hva er fine-tuning vs RAG?"
slug: "hva-er-fine-tuning-vs-rag"
category: "ai"
subcategory: "maskinlaering"
description: "Fine-tuning og RAG er to tilnærminger til å spesialisere AI. Lær forskjellen, når du bør bruke hvilken, og hvorfor RAG ofte er bedre for bedrifter."
keywords: ["fine-tuning vs RAG", "finjustering", "RAG", "spesialisering", "bedrifts-AI"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Fine-tuning vs RAG"
aliases: ["finjustering vs RAG", "tilpasning av AI"]
related: ["hva-er-finjustering-av-ai", "hva-er-rag", "hva-er-treningsdata", "hva-er-context-window", "hva-er-embeddings"]
seeAlso: ["hva-er-finjustering-av-ai", "hva-er-rag"]
tags: ["fine-tuning", "RAG", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er fine-tuning vs RAG?

Fine-tuning og RAG (Retrieval-Augmented Generation) er to fundamentalt ulike tilnærminger til å spesialisere en AI-modell for et bestemt domene – fine-tuning endrer modellen, RAG gir den tilgang til oppdatert informasjon.

> **Kort forklart**
> Fine-tuning er som å sende AI-en på kurs – den lærer nytt permanent og endrer sin «personlighet.» RAG er som å gi AI-en en oppslagsbok – den slår opp svar i dokumentene dine i sanntid. For de fleste bedrifter er RAG bedre: billigere, raskere, oppdaterbart, og ingen risiko for å ødelegge modellens generelle evner. Fine-tuning er best når du trenger en helt annen «stil» eller atferd – ikke bare ny kunnskap.

## Hva betyr begrepet

Fine-tuning betyr å trene videre på en eksisterende modell med domene-spesifikk data. Modellen endres permanent – vektene justeres. Det er bra for å endre stil, tone eller format, lære spesialisert vokabular eller oppførsel, og når du trenger konsistent spesifikt output. Ulempene er at det er dyrt (GPU-tid, data-kurarering), risiko for catastrophic forgetting (mister generelle evner), data blir utdatert (må fine-tune igjen), og krever ML-kompetanse.

RAG betyr å koble modellen til en ekstern kunnskapsbase som den søker i under generering. Modellen endres IKKE – den får tilgang til informasjon i sanntid. Det er bra for å gi modellen tilgang til bedriftsdokumenter, holde kunnskapen oppdatert (oppdater dokumentene, ikke modellen), sitere kilder (RAG kan referere til kildedokumenter), og det er billigere og raskere å implementere. Ulempene er at det er avhengig av god søk/retrieval, kontekstvindu begrenser hvor mye som kan hentes, og at det ikke endrer modellens atferd eller stil.

## Hvordan fungerer det

To ulike veier til spesialisert AI.

```
Fine-tuning:
Base model → Tren videre på 10 000 domene-eksempler → Ny modell med permanent kunnskap → Deploy

RAG:
Base model → Koble til vektordatabase med dokumenter → Bruker søker → Relevante dokumenter hentes → Modellen svarer basert på hentet info → Oppdater dokumenter når som helst

Eksempel – medisinsk AI:
Fine-tuning: Tren Llama på 50 000 medisinske artikler → Modellen «vet» medisin
RAG: Koble GPT-4 til medisinsk database → Modellen slår opp → Svarer med kildehenvisning
```

## Hvorfor er det viktig

For bedrifter som vil bruke AI med egne data er dette det viktigste valget. Feil valg kan bety måneder med bortkastet arbeid.

Tommelregel: bruk RAG som standard (80 prosent av tilfeller). Legg til fine-tuning kun hvis du trenger spesifikk stil/format. Kombiner begge for best resultat (fine-tune for stil + RAG for kunnskap).

## Eksempler

RAG for kundeservice: Et selskap kobler GPT-4 til sine FAQ-er, produktmanualer og support-historikk via vektordatabase. Kunder spør – AI slår opp og svarer med kildehenvisning. Dokumenter oppdateres ukentlig – ingen re-trening.

Fine-tuning for tone: En bank fine-tuner Llama til å svare i formell, regulatorisk tone med juridisk presise formuleringer. RAG alene ville ikke endret tonen tilstrekkelig.

Kombinasjon: Et advokatfirma fine-tuner for juridisk språk OG bruker RAG for å hente relevante lovtekster og dommer. Best of both worlds.

## Vanlige spørsmål

### Når bør jeg bruke fine-tuning?
Når du trenger å endre modellens stil, tone, format eller atferd. Ikke for å «gi den kunnskap» – RAG er bedre for det.

### Er RAG dyrt?
Billigere enn fine-tuning. Kostnader: vektordatabase-hosting (~$50–500/mnd), embedding-generering (engangskost), og litt ekstra tokens per forespørsel (hentet kontekst).

### Kan jeg kombinere begge?
Ja – og det er ofte det beste. Fine-tune for domene-spesifikk atferd, RAG for oppdatert kunnskap. Anthropic, OpenAI og andre anbefaler denne tilnærmingen.

### Hva er en vektordatabase?
En database som lagrer tekst som tall-vektorer (embeddings) og finner semantisk lignende dokumenter raskt. Pinecone, Weaviate og ChromaDB er populære.

## Relaterte begreper

- [Finjustering av AI](/ai/hva-er-finjustering-av-ai) – fine-tuning i detalj
- [RAG](/ai/hva-er-rag) – retrieval-augmented generation i detalj
- [Treningsdata](/ai/hva-er-treningsdata) – det fine-tuning bruker
- [Context window](/ai/hva-er-context-window) – begrenser RAG-innhenting
- [Embeddings](/ai/hva-er-embeddings) – vektorer RAG søker i

## Se også

- [Hva er finjustering av AI?](/ai/hva-er-finjustering-av-ai)
- [Hva er RAG?](/ai/hva-er-rag)

## Oppsummering

Fine-tuning endrer modellen permanent (stil, atferd). RAG gir modellen tilgang til oppdatert kunnskap (dokumenter). For de fleste bedrifter: start med RAG (billigere, raskere, oppdaterbart). Legg til fine-tuning for spesifikk tone. Kombiner for best resultat. RAG er standarden for bedrifts-AI i 2025–2026.
