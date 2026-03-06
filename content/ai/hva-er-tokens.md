---
title: "Hva er tokens i AI?"
slug: "hva-er-tokens"
category: "AI"
subcategory: "Språkmodeller"
description: "Tokens er grunnenheten AI-modeller bruker for å forstå og generere tekst. Lær hva tokens er, hvordan tokenisering fungerer, og hvorfor det påvirker pris og ytelse."
keywords: ["tokens", "tokenisering", "kontekstvindu", "BPE", "token-grense", "AI-prising"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Tokens"
aliases: ["AI-tokens", "tokenisering", "token limit", "kontekstlengde"]
related: ["hva-er-store-spraakmodeller", "hva-er-generativ-ai", "hva-er-kunstig-intelligens"]
seeAlso: ["hva-er-chatgpt", "hva-er-claude", "hva-er-prompt-engineering-dybde"]
tags: ["tokens", "tokenisering", "LLM", "kontekstvindu"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er tokens i AI?

Tokens er de grunnleggende enhetene som store språkmodeller bruker for å lese og generere tekst. En token er ikke nødvendigvis et helt ord – det kan være et ord, en del av et ord, et tegn eller et mellomrom. Å forstå tokens er viktig fordi de påvirker hvor mye tekst en modell kan behandle, hvor mye det koster å bruke AI-tjenester, og hvorfor modeller noen ganger oppfører seg uventet.

> **Kort forklart**
> Tokens er bitene AI deler tekst inn i for å forstå den. Omtrent 1 token = 0,75 ord på engelsk. Antall tokens bestemmer hvor mye en AI-modell kan lese og svare, og hva det koster å bruke den.

## Hvordan tokenisering fungerer

Språkmodeller leser ikke tekst slik mennesker gjør – ord for ord. I stedet deler de teksten inn i tokens ved hjelp av en tokeniseringsalgoritme. Den vanligste metoden er BPE (Byte Pair Encoding).

BPE starter med individuelle tegn og slår gradvis sammen de mest frekvente tegnparene til større enheter. Vanlige ord som «the» og «and» blir gjerne ett token. Sjeldne ord deles opp i flere tokens. Svært sjeldne ord eller navn kan deles ned til enkeltbokstaver.

For eksempel kan ordet «søkemotoroptimalisering» bli delt i tokenene «søke», «motor», «optimal», «iser» og «ing» – fem tokens for ett ord. Mens «AI» typisk er ett token fordi det er så vanlig.

## Tokens og språk

Tokenisering er ikke lik for alle språk. De fleste tokeniserere er trent primært på engelsk, noe som betyr at engelske ord er effektivt representert med færre tokens. Norsk tekst krever typisk 15–30 % flere tokens enn tilsvarende engelsk tekst fordi norsk har lengre sammensatte ord som «søkemotoroptimalisering», spesialtegn som æ, ø og å som kan kreve ekstra tokens, og sjeldnere ord som ikke finnes i tokenisereren like effektivt.

Dette betyr at norskspråklig AI-bruk er noe dyrere per ord enn engelskspråklig, og at kontekstvinduet rommer færre norske ord enn engelske.

## Kontekstvinduet

Kontekstvinduet er det totale antallet tokens en modell kan behandle i én interaksjon – inkludert både input (det du sender) og output (det modellen svarer). Typiske kontekstvinduer er 8 000 tokens for eldre modeller som GPT-3.5, 128 000 tokens for GPT-4o og nyere modeller, og 200 000 tokens for Claude som har bransjens lengste kontekstvindu.

Et kontekstvindu på 200 000 tokens tilsvarer omtrent 150 000 ord eller 300–400 sider tekst. Det betyr at Claude kan lese en hel bok og svare på spørsmål om den i en enkelt samtale.

### Hva skjer når kontekstvinduet er fullt?

Når samtalen overstiger kontekstvinduet, mister modellen tilgang til den eldste delen av samtalen. I ChatGPT og Claude håndteres dette ved at eldre meldinger gradvis faller ut av konteksten. Modellen «glemmer» ikke plutselig – den mister bare tilgang til tekst som er utenfor vinduet.

For lange samtaler eller komplekse oppgaver er det viktig å være bevisst på kontekstvinduets begrensninger og eventuelt oppsummere viktig informasjon for modellen.

## Tokens og prising

AI-tjenester prises nesten alltid per token. Typisk skilles det mellom input-tokens som er teksten du sender til modellen, og output-tokens som er teksten modellen genererer. Output-tokens er vanligvis 2–4 ganger dyrere enn input-tokens fordi generering krever mer beregning.

Priseksempler per million tokens varierer mellom modeller og leverandører. Rimelige modeller som Claude Haiku og GPT-4o mini koster noen få kroner per million input-tokens. Mellommodeller som Claude Sonnet og GPT-4o koster rundt 25–30 kr per million input-tokens. Toppmodeller som Claude Opus koster rundt 150 kr per million input-tokens.

For å estimere kostnaden for et prosjekt må du beregne totalt antall tokens – både input og output – og multiplisere med prisen per token.

## Telle tokens

Det finnes flere måter å telle tokens på. OpenAIs Tokenizer-verktøy (platform.openai.com/tokenizer) visualiserer hvordan tekst deles inn i tokens. Anthropics token-teller viser antall tokens for en gitt tekst. Programmatisk kan du bruke biblioteker som tiktoken for Python for å telle tokens i kode.

Som tommelregel er 1 token omtrent 4 tegn eller 0,75 ord på engelsk, og noe mindre effektivt for norsk.

## Tokens og modellytelse

Antall tokens påvirker modellytelsen på flere måter. Latens øker med flere tokens fordi lengre input krever mer prosesseringstid, og lengre output tar mer tid å generere. Kostnad skalerer lineært med antall tokens. Kvalitet kan påvirkes fordi modeller med svært lange kontekster kan bli mindre presise for informasjon i midten av inputen – et fenomen kjent som «lost in the middle».

For å optimalisere token-bruk bør du være konsis i instruksjoner uten å miste klarhet, fjerne unødvendig kontekst og duplikat informasjon, bruke oppsummeringer i stedet for å inkludere hele dokumenter der det er mulig, og velge riktig modell – bruk rimeligere modeller for enkle oppgaver.

## Spesielle tokens

Språkmodeller bruker spesielle tokens for intern struktur. Start-of-sequence og end-of-sequence markerer begynnelsen og slutten av tekst. Separator-tokens skiller mellom brukerens melding og modellens svar. System-tokens markerer systemprompt som definerer modellens oppførsel. Disse spesielle tokens er usynlige for brukeren men bruker plass i kontekstvinduet.

## Tokens og multimodal AI

For multimodale modeller som kan behandle bilder og video, konverteres også disse til tokens. Et bilde konverteres typisk til noen hundre til noen tusen tokens, avhengig av oppløsning og detalj. Video krever enda flere tokens. Dette betyr at multimodal input raskt bruker opp kontekstvinduet og øker kostnadene.

## Ofte stilte spørsmål

### Hvor mange tokens er 1000 ord?
Omtrent 1300–1500 tokens på engelsk, og 1500–1900 tokens på norsk. Norsk er noe mindre effektivt fordi tokeniserere er optimalisert for engelsk.

### Hvorfor er output-tokens dyrere?
Generering krever mer beregning per token enn lesing. Modellen må beregne sannsynligheter for hvert mulig neste token og velge det beste – en prosess som skjer sekvensielt, token for token.

### Kan jeg redusere token-bruk?
Ja. Vær konsis i prompts, bruk oppsummeringer i stedet for fulle dokumenter, velg riktig modellstørrelse for oppgaven, og unngå unødvendig lange samtaler.

### Hva er forskjellen mellom kontekstvindu og output-grense?
Kontekstvinduet er total kapasitet for input pluss output. Output-grensen er maks antall tokens modellen kan generere i ett svar. For eksempel kan en modell ha 128 000 tokens kontekstvindu men maksimalt generere 4 096 tokens per svar.
