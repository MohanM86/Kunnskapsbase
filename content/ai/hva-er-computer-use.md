---
title: "Hva er computer use i AI?"
slug: "hva-er-computer-use"
category: "ai"
subcategory: "automatisering"
description: "Computer use lar AI styre datamaskinen din – klikke, skrive, navigere som et menneske. Lær hva det er, Claudes computer use, og hvorfor det er agentisk AIs gjennombrudd."
keywords: ["computer use", "AI skjermbruk", "Claude computer use", "skjerminteraksjon", "GUI-agent"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Computer use"
aliases: ["skjermbruk", "GUI-agent", "AI desktop"]
related: ["hva-er-agentic-ai", "hva-er-claude", "hva-er-function-calling", "hva-er-ai-agenter", "hva-er-ai-automatisering"]
seeAlso: ["hva-er-agentic-ai", "hva-er-claude"]
tags: ["computer use", "ai", "automatisering", "agent"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er computer use i AI?

Computer use er evnen til at AI ser på skjermen din, forstår hva som vises, og styrer datamaskinen – klikker, skriver, navigerer og utfører oppgaver som et menneske ville gjort.

> **Kort forklart**
> I stedet for at AI bare genererer tekst, kan den nå BRUKE datamaskinen din. «Fyll ut dette skjemaet med info fra denne PDF-en» → AI-en leser PDF-en, åpner nettleseren, navigerer til skjemaet, og fyller ut felt for felt. «Bestill den billigste flybilletten til Bergen» → AI-en søker, sammenligner, og bestiller. Anthropic lanserte Claude computer use i oktober 2024 – den første store AI-en med denne evnen. Det er agentisk AIs gjennombrudd: AI som handler i den virkelige digitale verden.

## Hva betyr begrepet

Computer use (også kalt GUI-agent eller desktop agent) lar AI-en ta skjermbilder av skjermen din, forstå hva som vises (knapper, tekst, bilder, skjemaer), bestemme hvilken handling som skal utføres (klikke, skrive, scrolle), og utføre handlingen via mus og tastatur.

Det er fundamentalt annerledes enn function calling/API-er. Function calling krever at hvert verktøy har et programmert grensesnitt. Computer use fungerer med ALLE programmer – det trenger bare å «se» skjermen, akkurat som et menneske.

Claudes computer use (Anthropic, oktober 2024) var det første store kommersielle tilbudet. OpenAIs Operator og Googles Project Mariner er konkurrenter.

Bruksområder er skjemautfylling (les data fra ett sted, fyll ut i et annet), web-navigasjon (søk, sammenlign, bestill), testing av software (AI klikker seg gjennom apper og rapporterer feil), datamigrering (flytte data mellom systemer uten API), og alle oppgaver som krever interaksjon med GUI-programmer uten API.

## Hvordan fungerer det

AI ser skjermen og handler som et menneske.

```
Oppgave: "Finn den billigste flybilletten Oslo→Bergen 15. april"

AI computer use:
  1. Tar screenshot av skjermen
  2. Forstår: dette er skrivebordet, jeg trenger en nettleser
  3. Klikker på Chrome-ikonet
  4. Skriver "norwegian.no" i adressefeltet
  5. Tar nytt screenshot → Forstår: dette er booking-siden
  6. Klikker "Fra" → Skriver "Oslo"
  7. Klikker "Til" → Skriver "Bergen"
  8. Velger dato 15. april
  9. Klikker "Søk"
  10. Tar screenshot → Leser priser → Finner billigste
  11. Rapporterer: "Billigste er 499 kr med Norwegian kl 07:30"

→ AI-en gjorde nøyaktig det du ville gjort – bare raskere
→ Ingen API, ingen programmering – bare skjerminteraksjon
```

## Hvorfor er det viktig

Computer use er den siste brikken for fullverdig agentisk AI. Function calling krever at hvert verktøy har et API. De fleste bedriftsprogrammer (SAP, Oracle, interne systemer) har dårlige eller ingen API-er. Computer use omgår dette – AI-en interagerer med programmet via GUI, akkurat som en ansatt.

Det er også potensielt risikabelt: en AI med tilgang til skjermen din kan gjøre alt DU kan gjøre – inkludert destruktive handlinger. Sikkerhetsdesign (sandboxing, bekreftelsesteg, logging) er kritisk.

## Eksempler

Skjemautfylling: HR-avdelingen har 500 ansatt-skjemaer som skal overføres fra et gammelt system til et nytt. Ingen API mellom systemene. AI computer use: leser fra det ene, fyller ut i det andre.

QA-testing: En utvikler ber AI-en «test innloggingsflyten – prøv feil passord, tomt felt, og riktig innlogging.» AI-en klikker seg gjennom og rapporterer resultater.

Personlig assistent: «Bestill bord for 4 på en italiensk restaurant i Oslo sentrum lørdag kl 19.» AI-en åpner restaurantsider, søker, finner ledige tider, og bestiller.

## Vanlige spørsmål

### Er computer use trygt?
Potensielt risikabelt – AI med skjermtilgang kan gjøre alt du kan. Bruk i sandboxet miljø. Ha bekreftelsesteg for viktige handlinger. Logg alt.

### Kan min AI se passordene mine?
Ja – hvis den har skjermtilgang. Bruk passordhåndterer som auto-fyller, og begrens AI-ens tilgang til spesifikke oppgaver.

### Hvem tilbyr computer use?
Anthropic Claude (mest modent), OpenAI Operator, Google Mariner. Alle er i tidlig fase.

### Erstatter computer use API-er?
Supplerer – API er raskere og mer pålitelig. Computer use er for programmer UTEN API. Ideelt: bruk API der det finnes, computer use der det ikke gjør.

## Relaterte begreper

- [Agentic AI](/ai/hva-er-agentic-ai) – computer use muliggjør det
- [Claude](/ai/hva-er-claude) – først med computer use
- [Function calling](/ai/hva-er-function-calling) – API-basert alternativ
- [AI-agenter](/ai/hva-er-ai-agenter) – bruker computer use
- [AI-automatisering](/ai/hva-er-ai-automatisering) – det bredere feltet

## Se også

- [Hva er agentic AI?](/ai/hva-er-agentic-ai)
- [Hva er Claude?](/ai/hva-er-claude)

## Oppsummering

Computer use lar AI styre datamaskinen – se skjermen, klikke, skrive, navigere. Det muliggjør agentisk AI for programmer uten API. Claude computer use var først. Potensielt risikabelt (AI kan gjøre alt du kan). Det er den siste brikken for fullverdig AI-automatisering – og det mest transformative for bedrifter med eldre systemer.
