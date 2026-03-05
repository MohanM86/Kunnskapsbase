---
title: "Hva er finjustering av AI?"
slug: "hva-er-finjustering-av-ai"
category: "AI"
subcategory: "Teknikker"
description: "Finjustering av AI er prosessen med å trene en eksisterende modell videre på spesifikke data for å tilpasse den til bestemte oppgaver eller domener."
keywords: ["finjustering", "fine-tuning", "AI-tilpasning", "språkmodell", "maskinlæring"]
date: "2026-03-05"
lastReviewed: "2026-03-05"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Finjustering av AI"
aliases: ["fine-tuning", "finetuning", "AI fine-tuning"]
related: ["hva-er-transfer-learning", "hva-er-store-spraakmodeller", "hva-er-maskinlaering", "hva-er-rag", "hva-er-dyp-laering"]
seeAlso: ["hva-er-prompt-engineering", "hva-er-generativ-ai"]
tags: ["finjustering", "fine-tuning", "AI-tilpasning", "maskinlæring"]
updatedAt: "2026-03-05"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er finjustering av AI?

Finjustering er prosessen med å ta en allerede trent AI-modell og trene den videre på et mindre, spesialisert datasett for å tilpasse den til en bestemt oppgave, et domene eller en ønsket adferd.

> **Kort forklart**
> Finjustering er som å gi en allsidig medarbeider spesialopplæring. Modellen har allerede bred kunnskap fra grunntreningen – finjustering gir den ekspertise innen et bestemt område.

## Hva betyr begrepet

«Fin» indikerer at justeringene er små og presise, i motsetning til den store grunntreningen. «Justering» betyr at modellens parametere oppdateres forsiktig for å forbedre ytelsen på den nye oppgaven uten å ødelegge kunnskapen den allerede har.

Finjustering er en form for transfer learning og har blitt en av de viktigste teknikkene for å gjøre generelle AI-modeller nyttige i praksis. Alle store språkmodeller gjennomgår finjustering etter fortrening – det er dette steget som gjør dem til nyttige assistenter i stedet for bare tekstforutsigelsesmaskiner.

## Hvordan fungerer det

Finjustering bygger videre på en allerede trent modell ved å fortsette treningen med nye, spesialiserte data.

```
Fortrenet modell → Nytt datasett → Videre trening med lav læringsrate → Tilpasset modell → Evaluering → Ferdig
```

Det finnes flere tilnærminger til finjustering:

**Full finjustering** oppdaterer alle parameterne i modellen. Dette gir størst fleksibilitet, men krever mest datakraft og risikerer at modellen «glemmer» deler av sin generelle kunnskap.

**LoRA (Low-Rank Adaptation)** legger til et lite sett med nye parametere uten å endre de opprinnelige. Dette er mye billigere og raskere, og den originale modellen bevares intakt. LoRA har blitt den mest populære metoden for å finjustere store språkmodeller.

**RLHF (Reinforcement Learning from Human Feedback)** bruker menneskelig tilbakemelding for å finjustere modellen. Mennesker rangerer modellens svar, og modellen lærer å foretrekke svar som mennesker vurderer som gode. Dette er metoden som gjør språkmodeller hjelpsomme og trygge.

**Instruksjonsfinjustering** trener modellen på eksempler i formatet «instruksjon → ønsket svar». Dette lærer modellen å følge instruksjoner og svare hjelpsomt i stedet for bare å fortsette tekst.

## Hvorfor er det viktig

Finjustering er bindeleddet mellom en generell AI-modell og en modell som faktisk løser en spesifikk oppgave godt. Uten finjustering ville en grunnmodell bare kunne forutsi neste ord i en tekst – den ville ikke forstå å svare på spørsmål, følge instruksjoner eller oppføre seg som en assistent.

For bedrifter gjør finjustering det mulig å tilpasse en kraftig, generell modell til sine spesifikke behov. En juridisk modell kan finjusteres til å forstå kontraktsspråk. En medisinsk modell kan tilpasses til å tolke journalnotater. En kundeservicemodell kan trenes til å svare i selskapets tone og stil.

Finjustering er også langt billigere enn å trene en modell fra bunnen av. Å trene en stor språkmodell kan koste titalls millioner kroner, mens finjustering kan gjøres for noen tusen.

## Eksempler

**ChatGPT og Claude som assistenter:** Begge startet som rene tekstforutsigelsesmodeller. Gjennom instruksjonsfinjustering og RLHF lærte de å føre samtaler, følge instruksjoner og avslå upassende forespørsler.

**Medisinsk AI:** En generell språkmodell finjusteres på medisinske lærebøker, forskningsartikler og kliniske notater. Resultatet er en modell som forstår medisinsk terminologi og kan hjelpe leger med diagnostikk og oppsummering.

**Kodeassistenter:** Modeller som GitHub Copilot er basert på generelle språkmodeller som er finjustert på millioner av kodeeksempler, noe som gjør dem spesielt gode til å generere og forstå programmeringskode.

**Bedriftsspesifikk chatbot:** Et forsikringsselskap finjusterer en språkmodell på sine produktbeskrivelser, vilkår og kundehenvendelser. Resultatet er en assistent som svarer presist om selskapets egne produkter.

## Vanlige spørsmål

### Hva er forskjellen på finjustering og RAG?
Finjustering endrer selve modellen ved å trene den videre. RAG lar modellen være uendret, men gir den tilgang til ekstern informasjon. Finjustering er best for å endre stil, tone og domenekompetanse. RAG er best for faktabasert informasjon som oppdateres ofte.

### Hvor mye data trenger man for finjustering?
Det varierer. Med LoRA kan noen hundre eksempler gi gode resultater. Full finjustering krever gjerne tusenvis til titusener av eksempler. Kvaliteten på dataene er ofte viktigere enn mengden – noen hundre nøye kuraterte eksempler kan slå tusenvis av middelmådige.

### Kan finjustering gjøre modellen dårligere?
Ja. Dårlig eller skjevt treningsdata kan gjøre modellen dårligere på oppgaver den tidligere mestret. For aggressiv finjustering kan føre til «katastrofal glemsel» der modellen mister generell kunnskap. Derfor er forsiktig evaluering og testing viktig.

### Er finjustering det samme som trening fra bunnen av?
Nei. Trening fra bunnen av starter med tilfeldige parametere og krever enorme datamengder og datakraft. Finjustering starter med en ferdig trent modell og gjør mindre justeringer, noe som krever langt mindre ressurser.

### Kan hvem som helst finjustere en AI-modell?
I prinsippet ja, med riktig verktøy og noe teknisk kunnskap. Plattformer som Hugging Face, OpenAI og Google tilbyr finjusteringsverktøy som gjør prosessen mer tilgjengelig. For små modeller med LoRA er det mulig å finjustere på en vanlig gaming-PC.

## Relaterte begreper

- [Transfer learning](/ai/hva-er-transfer-learning) – det overordnede konseptet finjustering tilhører
- [Store språkmodeller](/ai/hva-er-store-spraakmodeller) – de vanligste modellene som finjusteres
- [Maskinlæring](/ai/hva-er-maskinlaering) – det bredere feltet som inkluderer finjustering
- [RAG](/ai/hva-er-rag) – en alternativ metode for å tilpasse AI-svar
- [Dyp læring](/ai/hva-er-dyp-laering) – teknologien som muliggjør finjustering av dype nettverk

## Se også

- [Hva er prompt engineering?](/ai/hva-er-prompt-engineering)
- [Hva er generativ AI?](/ai/hva-er-generativ-ai)

## Oppsummering

Finjustering er prosessen med å trene en eksisterende AI-modell videre på spesialiserte data for å tilpasse den til bestemte oppgaver. Det er teknologien som forvandler generelle modeller til nyttige assistenter, og kan gjøres langt billigere og raskere enn å trene en modell fra bunnen av.
