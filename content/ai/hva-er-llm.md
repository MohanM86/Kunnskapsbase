---
title: "Hva er LLM?"
slug: "hva-er-llm"
category: "AI"
subcategory: "Språkmodeller"
description: "LLM (Large Language Model) er store språkmodeller som GPT-4, Claude og Gemini. Lær hvordan de fungerer, trenes og brukes – fra tekstgenerering til resonnering."
keywords: ["LLM", "Large Language Model", "stor språkmodell", "språkmodell", "GPT", "foundation model"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 8
draft: false
entityType: "Concept"
topic: "LLM"
aliases: ["Large Language Model", "stor språkmodell", "store språkmodeller", "foundation model"]
related: ["hva-er-transformer", "hva-er-generativ-ai-dybde", "hva-er-nevrale-nettverk"]
seeAlso: ["hva-er-chatgpt", "hva-er-claude", "hva-er-gemini", "hva-er-tokens"]
tags: ["LLM", "språkmodell", "GPT", "transformer"]
updatedAt: "2026-03-06"
featured: true
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er LLM?

LLM (Large Language Model), eller stor språkmodell, er en type AI-modell trent på enorme mengder tekst for å forstå og generere menneskelikt språk. ChatGPT, Claude, Gemini og Llama er alle LLM-er. De kan skrive tekst, besvare spørsmål, oversette, kode, resonnere og utføre hundrevis av andre språkbaserte oppgaver – alt basert på mønstre de har lært fra treningsdata.

> **Kort forklart**
> LLM er de kraftige AI-modellene bak ChatGPT og Claude. De er trent på milliarder av tekster og kan forstå og generere menneskelikt språk for nesten enhver oppgave.

## Hvordan LLM-er fungerer

### Treningsprosessen

En LLM trenes i flere faser. Fortrening (pre-training) er hovedfasen der modellen lærer fra enorme mengder tekst – bøker, nettsider, kode, artikler og mer. Modellen lærer å predikere neste ord i en sekvens. Gjennom milliarder av slike prediksjoner internaliserer den grammatikk, fakta, resonnering og kreativitet.

Finjustering (fine-tuning) tilpasser den generelle modellen for spesifikke oppgaver. Instruction tuning lærer modellen å følge instruksjoner. RLHF (Reinforcement Learning from Human Feedback) bruker menneskelig vurdering for å gjøre modellen mer hjelpsom, ærlig og trygg.

### Neste-token-prediksjon

Kjerneoppgaven til en LLM er enkel: gitt en sekvens av tokens, prediksere det mest sannsynlige neste tokenet. Men denne enkle oppgaven, utført i enorm skala, gir oppsiktsvekkende kapasiteter. Ved å lære å predikere tekst lærer modellen implisitt grammatikk og språkstruktur, fakta og kunnskap om verden, logikk og resonnering, kreativitet og stil, og sosiale normer og kommunikasjonsmønstre.

### Emergente evner

Et fascinerende aspekt ved LLM-er er emergente evner – kapasiteter som oppstår spontant ved bestemte skaleringspunkter uten å ha blitt eksplisitt trent. Koding, matematikk, flerspråklighet og resonnering er alle evner som dukket opp da modellene ble store nok. Ingen programmerte disse evnene – de oppsto fra mønstergjenkjenning i skala.

## Parametere og skala

LLM-er måles ofte i antall parametere – vektene i det nevrale nettverket. Flere parametere betyr generelt mer kapasitet. Små modeller med 1–7 milliarder parametere kan kjøres på forbrukermaskinvare og er gode for spesifikke oppgaver. Mellomstore modeller med 13–70 milliarder parametere gir god allround-ytelse og konkurrerer med eldre store modeller. Store modeller med 100–400+ milliarder parametere er de mest kapable og brukes i ChatGPT, Claude og Gemini. Mixture of Experts-modeller har potensielt billioner av parametere men aktiverer bare en brøkdel per forespørsel.

Skaleringslover viser at ytelsen forbedres forutsigbart med flere parametere, mer treningsdata og mer datakraft – noe som driver investeringene i stadig større modeller.

## De viktigste LLM-ene

### GPT-serien (OpenAI)

GPT (Generative Pre-trained Transformer) er modellfamilien bak ChatGPT. GPT-4 og GPT-4o er blant de mest kapable kommersielle modellene. OpenAI tilbyr også o1 og o3 som er reasoning-modeller optimalisert for komplekse problemer.

### Claude-serien (Anthropic)

Claude er kjent for langt kontekstvindu på 200 000 tokens, sterk resonnering og analyse, fokus på sikkerhet og ærlighet, og god norskstøtte.

### Gemini-serien (Google)

Gemini er nativt multimodal med dyp Google-integrasjon og sanntidsinformasjon via Google Søk.

### Llama-serien (Meta)

Llama er den mest innflytelsesrike åpne modellfamilien, med modeller fra 8 til 405 milliarder parametere som kan kjøres lokalt.

### Mistral

Franske Mistral AI leverer effektive, kompakte modeller med god europeisk og flerspråklig ytelse.

## Kontekstvindu

Kontekstvinduet er mengden tekst en LLM kan prosessere i én interaksjon. Det inkluderer både input og output. Eldre modeller hadde kontekstvinduer på 4 000–8 000 tokens. Moderne modeller har 128 000–200 000 tokens – tilsvarende en hel bok.

Stort kontekstvindu er viktig for å analysere lange dokumenter, opprettholde kontekst i lange samtaler, prosessere store kodebaser, og sammenligne mange kilder samtidig.

## Hva LLM-er kan og ikke kan

### Styrker

LLM-er er ekstremt gode på tekstgenerering i alle formater og stiler, språkforståelse og oversettelse, kodegenerering og debugging, oppsummering og analyse, kreativ skriving og idégenerering, og instruksjonsfølging og oppgaveløsning.

### Begrensninger

LLM-er har viktige begrensninger. Hallusinering der de kan generere plausible men feilaktige fakta. Kunnskapskutoff der treningsdata har en grensedato og modellen vet ikke hva som skjedde etter. Matematikk der de kan gjøre feil på komplekse beregninger. Resonnering der de er sterke men ikke feilfrie på logikk og deduktiv resonnering. Oppdatering der kunnskapen ikke oppdateres uten ny trening.

## LLM-er og norsk

LLM-er er primært trent på engelsk men håndterer norsk bokmål godt. Kvaliteten for norsk er noe lavere enn for engelsk, spesielt for nynorsk og spesialisert fagterminologi. Claude og GPT-4 gir de beste norske resultatene blant kommersielle modeller. Norske forskningsmiljøer arbeider med norskspesifikke modeller for å forbedre kvaliteten ytterligere.

## LLM som plattform

LLM-er har utviklet seg fra chatboter til plattformer. Med verktøybruk kan de koble seg til eksterne systemer. Med RAG kan de basere svar på oppdaterte kilder. Med agentfunksjonalitet kan de planlegge og utføre komplekse oppgaver. Med multimodalitet kan de prosessere bilder, lyd og video.

Denne utviklingen gjør LLM-er til en generell infrastruktur for AI-applikasjoner – ikke bare et samtaleverktøy.

## Ofte stilte spørsmål

### Hva er forskjellen mellom LLM og AI?
LLM er en spesifikk type AI. AI er det overordnede feltet. LLM-er er de mest prominente AI-modellene i dag, men AI inkluderer også bildemodeller, robotikk, ekspertsystemer og mye mer.

### Hvorfor heter det «stor» språkmodell?
Fordi modellene har milliarder av parametere og er trent på milliarder av tekstdokumenter. «Stor» refererer til både modellens størrelse og mengden treningsdata.

### Forstår LLM-er virkelig språk?
Det er debattert. LLM-er demonstrerer imponerende språkforståelse, men det er uklart om de «forstår» i menneskelig forstand eller bare gjenkjenner og reproduserer mønstre ekstremt godt. De fleste forskere mener sannheten ligger et sted midt imellom.

### Kan jeg trene min egen LLM?
Å trene fra bunnen av krever enorm datakraft og koster millioner. Men du kan finjustere eksisterende modeller med dine egne data – noe som er realistisk for de fleste bedrifter.
