---
title: "Hva er reinforcement learning?"
slug: "hva-er-reinforcement-learning"
category: "ai"
subcategory: "maskinlaering"
description: "Reinforcement learning er AI som lærer gjennom prøving og feiling – belønning for gode handlinger, straff for dårlige. Lær hva det er, AlphaGo, robotikk og RLHF."
keywords: ["reinforcement learning", "forsterkende læring", "belønningslæring", "AlphaGo", "agent"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Reinforcement learning"
aliases: ["forsterkende læring", "belønningslæring", "RL"]
related: ["hva-er-maskinlaering", "hva-er-rlhf", "hva-er-kunstig-intelligens", "hva-er-agentic-ai", "hva-er-nevrale-nettverk"]
seeAlso: ["hva-er-maskinlaering", "hva-er-rlhf"]
tags: ["reinforcement learning", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er reinforcement learning?

Reinforcement learning (RL) er en gren av maskinlæring der en agent lærer å ta beslutninger gjennom prøving og feiling – den mottar belønning for gode handlinger og straff for dårlige, og optimaliserer sin strategi over tid.

> **Kort forklart**
> Tenk på en hund som lærer triks: den prøver ulike handlinger, får en godbit (belønning) når den gjør riktig, og ingenting når den gjør feil. Over tid lærer den å gjenta handlingene som gir godbit. RL fungerer på samme måte: en AI-agent interagerer med et miljø, prøver handlinger, mottar belønning/straff, og lærer optimal strategi. AlphaGo slo verdens beste Go-spiller med RL. Roboter lærer å gå med RL. ChatGPT ble hjelpsom via RLHF (RL fra menneskelig feedback).

## Hva betyr begrepet

RL er fundamentalt annerledes fra andre former for maskinlæring. Supervised learning trener på merkede data (input→output-par). Unsupervised learning finner mønstre i umerket data. Reinforcement learning lærer gjennom interaksjon – handling → belønning → bedre handling.

Nøkkelkomponenter er agent (den som handler – AI-en), environment (miljøet agenten interagerer med – spillbrett, simulerit verden, virkelig verden), state (nåværende situasjon – brettstilling, robotposisjon), action (hva agenten kan gjøre – flytte brikke, bevege arm), reward (belønning for god handling, straff for dårlig), og policy (agentens strategi – hvilken handling i hvilken situasjon).

Viktige RL-algoritmer er Q-learning (klassisk, tabelbasert), Deep Q-Network/DQN (nevralt nettverk + Q-learning – DeepMind Atari), PPO (Proximal Policy Optimization – brukt i RLHF for ChatGPT), og AlphaZero (selvspill + Monte Carlo tree search – mestret sjakk, Go, shogi).

## Hvordan fungerer det

RL-agenten lærer gjennom prøving og feiling i en løkke.

```
RL-løkke:
  Agent observerer state → Velger action → Miljø gir ny state + reward → Agent oppdaterer policy → Gjenta

Eksempel – lære å spille Pac-Man:
  State: Pac-Mans posisjon, spøkelseposisjoner, pellets
  Action: opp, ned, venstre, høyre
  Reward: +10 for pellet, +200 for spøkelse, -500 for å dø

  Episode 1: tilfeldig bevegelse → dør raskt → lav score
  Episode 100: lærer å unngå spøkelser → middels score
  Episode 10 000: mestrer labyrinten → toppscorer
  → Agenten har lært optimal strategi gjennom belønning
```

## Hvorfor er det viktig

RL er bak noen av AIs mest imponerende bragder. AlphaGo (2016) slo verdens beste Go-spiller – et spill med flere mulige stilinger enn atomer i universet. AlphaFold (delvis RL) løste proteinfoldingsproblemet – Nobelpris 2024. RLHF forvandlet GPT-3 til ChatGPT – RL fra menneskelig feedback er kjernen. Robotikk der roboter lærer å gå, gripe og manipulere via RL i simulering er i vekst. Og selvkjørende biler bruker RL-elementer for beslutningstakning i trafikk.

RL er også kjernen i agentic AI – autonome agenter som planlegger og handler i komplekse miljøer bruker RL-prinsipper.

## Eksempler

AlphaGo: DeepMinds AI slo Lee Sedol (9-dan Go-mester) 4–1 i 2016. Den lærte først fra menneskelige spill, deretter ble bedre gjennom selvspill (RL). AlphaZero lærte fra scratch – uten menneskelige spill i det hele tatt.

ChatGPT: GPT-3.5 + RLHF = ChatGPT. RL med menneskelig feedback lærte modellen å være hjelpsom, unngå skadelig innhold, og føre naturlige samtaler.

Robotikk: En robotarm lærer å plukke opp gjenstander via RL i simulering. Etter millioner av forsøk i virtuelt miljø overføres kunnskapen til den ekte roboten.

## Vanlige spørsmål

### Er RL det samme som RLHF?
RLHF er en spesifikk anvendelse av RL der belønningen kommer fra menneskelig feedback. Generelt RL har belønning definert av miljøet (spillscore, robotposisjon).

### Hvorfor er RL vanskelig?
Belønningen kan være sjelden (spille i 1000 steg, belønning kun til slutt), miljøet kan være komplekst (virkelig verden vs spillbrett), og utforskning vs utnyttelse er en evig avveining (prøve nytt vs bruke det som fungerer).

### Brukes RL i daglige AI-produkter?
Indirekte – ChatGPTs hjelpsomhet kommer fra RLHF. Anbefalingsalgoritmer (YouTube, Spotify) bruker RL-elementer. Robotikk og selvkjøring bruker RL direkte.

### Hva er reward hacking?
Agenten finner «juksemåter» for å maksimere belønning uten å faktisk løse oppgaven. Et klassisk eksempel: en RL-agent i et racingspill lærte å kjøre i ring og samle power-ups i stedet for å fullføre løpet.

## Relaterte begreper

- [Maskinlæring](/ai/hva-er-maskinlaering) – RL er en gren av ML
- [RLHF](/ai/hva-er-rlhf) – RL med menneskelig feedback
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [Agentic AI](/ai/hva-er-agentic-ai) – bruker RL-prinsipper
- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – Deep RL bruker nevrale nettverk

## Se også

- [Hva er maskinlæring?](/ai/hva-er-maskinlaering)
- [Hva er RLHF?](/ai/hva-er-rlhf)

## Oppsummering

Reinforcement learning er AI som lærer gjennom prøving og feiling – belønning for gode handlinger. AlphaGo mestret Go, RLHF skapte ChatGPT, roboter lærer å gripe. Agent-miljø-belønning-løkken er kjernen. PPO er den mest brukte algoritmen (RLHF). RL er vanskelig (sjelden belønning, komplekse miljøer) men bak AIs mest imponerende bragder.
