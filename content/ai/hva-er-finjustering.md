---
title: "Hva er finjustering av AI?"
slug: "hva-er-finjustering"
category: "AI"
subcategory: "Maskinlæring"
description: "Finjustering (fine-tuning) er prosessen med å tilpasse en forhåndstrent AI-modell til spesifikke oppgaver eller domener. Lær når og hvordan du bør finjustere."
keywords: ["finjustering", "fine-tuning", "LoRA", "transfer learning", "modelltilpasning"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "Finjustering"
aliases: ["fine-tuning", "fine tuning", "modelltilpasning", "transfer learning"]
related: ["hva-er-maskinlaering", "hva-er-store-spraakmodeller", "hva-er-rag"]
seeAlso: ["hva-er-kunstig-intelligens", "hva-er-prompt-engineering-dybde"]
tags: ["finjustering", "fine-tuning", "LoRA", "maskinlæring"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er finjustering av AI?

Finjustering (fine-tuning) er prosessen med å ta en forhåndstrent AI-modell og videretrene den på et spesifikt datasett for å tilpasse den til en bestemt oppgave, et domene eller en ønsket oppførsel. I stedet for å trene en modell fra bunnen av – noe som krever enorme mengder data og datakraft – starter du med en modell som allerede forstår språk og tilpasser den til dine behov.

> **Kort forklart**
> Finjustering er som å ta en allrounder og spesialisere den. En stor språkmodell som allerede forstår språk generelt kan finjusteres til å bli ekspert på medisin, jus, koding eller din bedrifts kommunikasjonsstil.

## Hvorfor finjustere?

Store språkmodeller som Claude, GPT-4 og Llama er imponerende generalister, men de er ikke optimalisert for dine spesifikke behov. Finjustering lar deg tilpasse modellens oppførsel og tone til din merkevare, lære domerspesifikk terminologi og kunnskap, forbedre ytelsen for spesifikke oppgaver som klassifisering eller uttrekk, redusere latens og kostnader ved å bruke en mindre, spesialisert modell, og sikre konsistente svar i et bestemt format.

## Finjustering vs. prompt engineering vs. RAG

Det finnes tre hovedtilnærminger for å tilpasse AI-modeller, og de løser forskjellige problemer.

**Prompt engineering** er å gi modellen bedre instruksjoner uten å endre den. Det er enklest å implementere, krever ingen trening og fungerer umiddelbart. Begrensningen er at komplekse oppgaver kan kreve svært lange prompts, og modellen endrer ikke sin underliggende oppførsel.

**RAG** gir modellen tilgang til ekstern data ved bruk. Det løser problemet med oppdatert informasjon og domeinekunnskap uten å endre modellen. Ideelt for kunnskapsbaser og spørsmål-svar-systemer.

**Finjustering** endrer modellens parametre for å tilpasse oppførsel, tone og spesialistkunnskap. Det gir den dypeste tilpasningen men krever treningsdata, datakraft og teknisk kompetanse.

I praksis brukes ofte en kombinasjon – finjustering for oppførsel og tone, RAG for oppdatert kunnskap, og prompt engineering for oppgavespesifikke instruksjoner.

## Typer finjustering

### Full finjustering

Ved full finjustering oppdateres alle modellens parametre. Dette gir den dypeste tilpasningen men krever mest datakraft og risikerer «catastrophic forgetting» – at modellen glemmer sin generelle kunnskap mens den lærer det nye.

### LoRA (Low-Rank Adaptation)

LoRA er den mest populære teknikken for effektiv finjustering. I stedet for å oppdatere alle parametre, legger LoRA til et lite sett med nye parametre som tilpasses. Fordelene er dramatisk redusert datakraftbehov – typisk 10–100 ganger mindre enn full finjustering, minimal risiko for å tape generell kunnskap, mulighet for flere LoRA-tilpasninger på samme basemodell, og enkelt å bytte mellom spesialiseringer.

### QLoRA

QLoRA kombinerer LoRA med kvantisering – en teknikk som reduserer modellens presisjon for å spare minne. Dette gjør finjustering mulig på forbruker-GPUer med bare 24 GB VRAM, noe som demokratiserer tilgangen til modelltilpasning.

### Instruction tuning

Instruction tuning er finjustering spesifikt for å gjøre modellen bedre til å følge instruksjoner. Treningsdataen består av instruksjon-svar-par der modellen lærer å forstå og utføre ulike oppgaver basert på naturlig språk-instruksjoner.

### RLHF (Reinforcement Learning from Human Feedback)

RLHF bruker menneskelig tilbakemelding for å finjustere modellens oppførsel. Mennesker rangerer modellens svar, og denne rangeringen brukes til å trene en belønningsmodell som deretter brukes til å forbedre modellen. RLHF er teknikken som gjør ChatGPT og Claude til nyttige, trygge assistenter i stedet for bare tekstprediksjonsmaskiner.

## Finjustering i praksis

### Forberede treningsdata

Kvaliteten på treningsdataen er den viktigste faktoren for vellykket finjustering. Dataen bør inneholde representative eksempler på ønsket oppførsel, være nøyaktig og konsistent uten motstridende eksempler, ha tilstrekkelig volum typisk fra hundre til tusenvis av eksempler, og dekke variasjonen i oppgaver modellen skal håndtere.

For tekstmodeller består treningsdataen typisk av prompt-respons-par i JSON-format der hvert eksempel viser en brukermelding og det ønskede svaret.

### Velge modell

Valget av basemodell avhenger av brukstilfellet. For kommersielle løsninger tilbyr OpenAI, Anthropic og Google finjustering av sine modeller via API. For full kontroll er åpne modeller som Llama, Mistral og Qwen populære valg som kan finjusteres og kjøres lokalt.

Mindre modeller som er finjustert for en spesifikk oppgave kan ofte utkonkurrere større, generelle modeller for den oppgaven – til en brøkdel av kostnaden.

### Treningsprosessen

Finjustering kjøres typisk over noen epoker – hele gjennomganger av treningsdataen. For LoRA-basert finjustering med noen tusen eksempler tar prosessen fra minutter til noen timer, avhengig av modellstørrelse og maskinvare.

Viktige hyperparametre å justere er læringsrate som bestemmer hvor mye modellen endres per treningssteg, antall epoker som bestemmer hvor mange ganger modellen ser treningsdataen, batch-størrelse som bestemmer hvor mange eksempler som prosesseres samtidig, og LoRA rank som bestemmer kapasiteten til tilpasningslagene.

### Evaluering

Evaluer den finjusterte modellen grundig. Test med eksempler den ikke har sett under trening. Sjekk at den generelle ytelsen ikke har forringet seg. Sammenlign med basemodellen for å verifisere forbedring. Test for edge cases og uventede inputs.

## Verktøy for finjustering

**OpenAI Fine-tuning API** lar deg finjustere GPT-modeller via en enkel API. Du laster opp treningsdata og OpenAI håndterer infrastrukturen. Ideelt for de som ikke vil administrere GPU-infrastruktur.

**Hugging Face** tilbyr et komplett økosystem for finjustering med Transformers-biblioteket, tusenvis av basemodeller, og Trainer API for enkel treningsoppsett.

**Unsloth** er et nyere verktøy som gjør LoRA-finjustering dramatisk raskere og mer minneeffektiv. Det er populært for lokal finjustering på forbrukermaskinvare.

**Axolotl** er en brukervennlig wrapper for finjustering som forenkler konfigurajon og støtter mange ulike modeller og teknikker.

## Når bør du finjustere – og når ikke?

Finjustering er riktig når du trenger konsistent oppførsel, tone eller format som er vanskelig å oppnå med prompts, modellen trenger domespesifikk kunnskap som ikke er offentlig tilgjengelig, du vil bruke en mindre og billigere modell for en spesifikk oppgave, og latens er kritisk og du trenger raskere respons enn det en stor modell med lang prompt gir.

Finjustering er sannsynligvis ikke nødvendig når prompt engineering gir godt nok resultat, dataen du trenger er tilgjengelig via RAG, du trenger oppdatert informasjon som endres ofte, eller du har svært lite treningsdata.

## Finjustering for norsk

For norskspråklige modeller er finjustering spesielt verdifullt fordi de fleste store modeller er primært trent på engelsk. Finjustering med norske data kan forbedre norsk språkkvalitet og idiomatiske uttrykk, lære norsk fagterminologi innen spesifikke domener, tilpasse til norske kulturelle referanser og kontekst, og forbedre forståelse av norsk regelverk og samfunnsforhold.

NorwAI og andre norske forskingsmiljøer arbeider med norskspråklige modeller og datasett som kan brukes som utgangspunkt for finjustering.

## Ofte stilte spørsmål

### Hvor mye data trenger jeg for finjustering?
Det avhenger av oppgaven. For enkle tilpasninger kan 50–100 eksempler være tilstrekkelig. For komplekse domener kan det kreves tusenvis. Kvalitet er viktigere enn kvantitet – 100 gode eksempler slår 10 000 dårlige.

### Hvor mye koster finjustering?
Via OpenAI er kostnadene moderate – noen hundre kroner for en liten finjustering. Lokal finjustering med LoRA krever en GPU med minst 24 GB VRAM. Skytjenester som AWS, GCP og Lambda tilbyr GPU-er fra ca. 10–50 kr per time.

### Kan finjustering ødelegge modellen?
Ja, dårlig finjustering kan forringe modellens generelle evner (catastrophic forgetting). LoRA reduserer denne risikoen. Test alltid grundig at generell ytelse er bevart.

### Er finjustering bedre enn RAG?
De løser forskjellige problemer. Finjustering tilpasser oppførsel og stil. RAG gir tilgang til spesifikk kunnskap. For de fleste brukstilfeller er kombinasjonen av begge ideell.
