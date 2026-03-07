---
title: "Hva er GPT?"
slug: "hva-er-gpt"
category: "AI"
subcategory: "spraakmodeller"
description: "GPT (Generative Pre-trained Transformer) er modellfamilien bak ChatGPT. Lær om GPT-arkitekturen, utviklingen fra GPT-1 til GPT-4o, og hvordan GPT endret AI-landskapet."
keywords: ["GPT", "Generative Pre-trained Transformer", "GPT-4", "GPT-4o", "OpenAI GPT"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "GPT"
aliases: ["Generative Pre-trained Transformer", "GPT-modell", "GPT-arkitektur"]
related: ["hva-er-chatgpt", "hva-er-llm", "hva-er-transformer"]
seeAlso: ["hva-er-openai", "hva-er-claude", "hva-er-tokens"]
tags: ["GPT", "OpenAI", "transformer", "språkmodell"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er GPT?

GPT (Generative Pre-trained Transformer) er en familie av store språkmodeller utviklet av OpenAI som har definert den moderne AI-æraen. Navnet beskriver kjerneegenskapene: «Generative» fordi den genererer tekst, «Pre-trained» fordi den er forhåndstrent på enorme datamengder, og «Transformer» fordi den bruker transformer-arkitekturen. GPT er modellen bak ChatGPT – verdens mest brukte AI-assistent.

> **Kort forklart**
> GPT er AI-modellen bak ChatGPT. Utviklet av OpenAI, er det en familie av stadig kraftigere språkmodeller som har revolusjonert hvordan vi bruker kunstig intelligens – fra enkel tekstgenerering til avansert resonnering og multimodal forståelse.

## GPT-utviklingen

### GPT-1 (2018)

Den første GPT-modellen med 117 millioner parametere demonstrerte at forhåndstrening på store tekstmengder etterfulgt av finjustering ga overraskende gode resultater på mange oppgaver. GPT-1 var en forskningsdemo – imponerende for sin tid, men begrenset i praktisk bruk.

### GPT-2 (2019)

Med 1,5 milliarder parametere viste GPT-2 at skalering ga kvalitative sprang. Den kunne generere sammenhengende tekst som var vanskelig å skille fra menneskeskrevet. OpenAI valgte opprinnelig å ikke publisere den fulle modellen av frykt for misbruk – en beslutning som skapte stor debatt.

### GPT-3 (2020)

GPT-3 med 175 milliarder parametere var et vendepunkt. Den demonstrerte «few-shot learning» – evnen til å utføre nye oppgaver basert på bare noen få eksempler i prompten, uten finjustering. GPT-3 viste at en tilstrekkelig stor språkmodell er en generell problemløser.

### GPT-3.5 og ChatGPT (2022)

GPT-3.5, finjustert med RLHF for å følge instruksjoner og føre samtaler, ble grunnlaget for ChatGPT – lansert 30. november 2022. ChatGPT ble en global sensasjon og den raskest voksende appen i historien.

### GPT-4 (2023)

GPT-4 representerte et nytt sprang i kapasitet med dramatisk bedre resonnering og nøyaktighet, multimodal kapasitet der modellen forstår bilder i tillegg til tekst, lengre kontekstvindu, og ytelse som overgikk mennesker på mange standardtester.

### GPT-4o (2024)

GPT-4o (omni) er den nyeste hovedmodellen med native multimodalitet der tekst, bilder og lyd prosesseres i én modell, raskere responstid, bedre flerspråklig ytelse, og naturlig stemmesamtale i sanntid.

### o1 og o3

OpenAIs reasoning-modeller bruker ekstra «tenkeTid» for å løse komplekse problemer. De er spesielt sterke på matematikk, logikk og koding, men tregere enn standard GPT-modeller.

## Hvordan GPT er bygget

GPT bruker en decoder-only transformer-arkitektur. Det betyr at den er designet for generering – den prosesserer tekst fra venstre til høyre og predikerer neste token basert på alt som kom før.

Treningsprosessen har tre hovedfaser. Fortrening der modellen trenes på billioner av tokens fra nettet – bøker, artikler, kode og nettsider – med oppgaven å predikere neste token. Supervised fine-tuning der modellen trenes på eksempler av gode instruksjon-svar-par for å bli bedre til å følge instruksjoner. RLHF der menneskelige vurderere rangerer modellens svar, og en belønningsmodell trenes for å gjøre modellen mer hjelpsom, ærlig og trygg.

## GPT vs. andre modeller

GPT konkurrer med flere sterke modeller. Claude fra Anthropic er sterkere på lange dokumenter og resonnering med fokus på sikkerhet. Gemini fra Google har native multimodalitet og Google-integrasjon. Llama fra Meta er den ledende åpne modellen som kan kjøres lokalt. Mistral leverer effektive, kompakte modeller.

GPT-serien har fordelen av det bredeste økosystemet med ChatGPT, API, plugins og GPTs – men konkurrentene lukker gapet raskt.

## GPT API

OpenAIs API gir utviklere tilgang til GPT-modellene for å bygge AI-applikasjoner. Chat Completions API er det mest brukte endepunktet for samtalebasert interaksjon. Assistants API tilbyr stateful agenter med verktøy, filer og tråder. Function calling lar modellen kalle funksjoner du definerer. Batch API gir rabattert prising for asynkrone oppgaver.

GPT API-et er det mest brukte AI-API-et med millioner av utviklere og hundretusener av applikasjoner bygget på det.

## GPT og norsk

GPT-4 og GPT-4o håndterer norsk bokmål godt. Kvaliteten er noe lavere enn for engelsk men tilstrekkelig for de fleste profesjonelle brukstilfeller. For nynorsk er kvaliteten merkbart svakere. GPT-4o har forbedret flerspråklig ytelse sammenlignet med GPT-4.

## Ofte stilte spørsmål

### Hva er forskjellen mellom GPT og ChatGPT?
GPT er AI-modellen. ChatGPT er produktet – brukergrensesnittet som lar deg chatte med GPT-modellen. ChatGPT bruker GPT-modeller, men du kan også bruke GPT direkte via API.

### Er GPT den beste AI-modellen?
GPT-serien er blant de beste, men Claude, Gemini og andre konkurrerer tett. Hvilken som er «best» avhenger av oppgaven. For generell bruk er forskjellene små.

### Hva betyr tallene (GPT-3, GPT-4)?
Tallene indikerer generasjoner. Høyere tall betyr nyere og mer kapabel modell. Innen generasjoner finnes varianter som GPT-4o (omni) og GPT-4 Turbo.

### Kan jeg bruke GPT gratis?
ChatGPT har en gratisversjon med begrenset GPT-4o-tilgang. For full tilgang og API-bruk kreves betaling.
