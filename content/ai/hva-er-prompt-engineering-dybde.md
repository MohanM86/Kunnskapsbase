---
title: "Hva er prompt engineering?"
slug: "hva-er-prompt-engineering-dybde"
category: "AI"
subcategory: "Språkmodeller"
description: "Prompt engineering er kunsten å formulere instruksjoner til AI-modeller for å få best mulige resultater. Lær teknikker, mønstre og beste praksis."
keywords: ["prompt engineering", "prompting", "AI-instruksjoner", "systemprompt", "few-shot", "chain-of-thought"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 8
draft: false
entityType: "Concept"
topic: "Prompt engineering"
aliases: ["prompting", "prompt-teknikk", "AI-prompting", "prompt design"]
related: ["hva-er-store-spraakmodeller", "hva-er-generativ-ai", "hva-er-kunstig-intelligens"]
seeAlso: ["hva-er-ai-agenter-dybde", "hva-er-hallusinering-i-ai"]
tags: ["prompt engineering", "prompting", "LLM", "teknikker"]
updatedAt: "2026-03-06"
featured: true
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er prompt engineering?

Prompt engineering er disiplinen som handler om å formulere instruksjoner og kontekst til AI-språkmodeller for å få presise, nyttige og pålitelige svar. Det er broen mellom hva du ønsker og hva AI-en faktisk leverer – og kvaliteten på prompten avgjør ofte forskjellen mellom et ubrukelig svar og et eksepsjonelt resultat.

> **Kort forklart**
> Prompt engineering handler om å snakke med AI på en måte den forstår best. Riktig formulerte instruksjoner kan transformere en middelmådig AI-respons til et ekspertresultat.

## Hvorfor prompt engineering er viktig

Store språkmodeller som Claude, GPT-4 og Gemini er ekstremt kapable, men de trenger tydelige instruksjoner for å utnytte potensialet. En vag prompt som «skriv noe om SEO» gir et generisk resultat. En presis prompt som spesifiserer målgruppe, format, lengde, tone og innholdsstruktur gir et målrettet og nyttig resultat.

Forskjellen i kvalitet mellom en dårlig og en god prompt kan være dramatisk – uten at du endrer modellen eller betaler mer. Prompt engineering er derfor en av de mest kostnadseffektive ferdighetene du kan lære i AI-alderen.

## Grunnleggende prinsipper

### Vær spesifikk

Jo mer spesifikk instruksjonen er, jo bedre blir resultatet. I stedet for «skriv en artikkel om trening» bør du si «skriv en 800 ords artikkel om styrketrening for nybegynnere over 40 år, med fokus på de 5 viktigste øvelsene, skrevet i en vennlig og motiverende tone på norsk bokmål».

### Gi kontekst

AI-modeller har ingen implisitt forståelse av din situasjon. Fortell hvem du er, hvem målgruppen er, hva formålet er og hvilken kontekst svaret skal brukes i. «Du er en erfaren SEO-rådgiver som skriver for norske små- og mellomstore bedrifter» gir bedre resultater enn å bare stille et spørsmål.

### Definer ønsket format

Spesifiser eksplisitt hvilket format du vil ha – avsnitt, punktliste, tabell, JSON, kode, e-post eller annet. Angi ønsket lengde, struktur og eventuelle elementer som skal inkluderes eller utelates.

### Iterer og forbedre

Sjelden er den første prompten perfekt. Behandle prompting som en iterativ prosess – start med en grunnversjon, evaluer resultatet, og juster prompten basert på hva som manglet eller var feil.

## Avanserte teknikker

### Few-shot prompting

Few-shot prompting gir modellen eksempler på ønsket input og output før den faktiske oppgaven. Ved å vise 2–3 eksempler på hva du forventer, forstår modellen mønsteret og leverer konsistente resultater i riktig format og stil.

Denne teknikken er spesielt nyttig for klassifiseringsoppgaver, formatering av data, og oppgaver der stilen eller strukturen er viktig.

### Chain-of-thought (CoT)

Chain-of-thought ber modellen om å tenke steg for steg gjennom et problem i stedet for å hoppe direkte til svaret. For komplekse spørsmål gir dette dramatisk bedre resultater fordi modellen kan bygge logisk fra premissene til konklusjonen.

Du aktiverer CoT ved å legge til «tenk steg for steg» eller «forklar resonnementet ditt» i prompten. For matematikk, logikk og analytiske oppgaver er dette nesten alltid en forbedring.

### System-prompt

Systemprompt er en spesiell instruksjon som settes i starten av samtalen og definerer AI-ens rolle, oppførsel og begrensninger. Den er adskilt fra brukermeldingen og gir vedvarende kontekst gjennom hele samtalen.

En god systemprompt definerer AI-ens rolle og ekspertise, spesifiserer tone, språk og stil, setter begrensninger for hva AI-en skal og ikke skal gjøre, og beskriver ønsket outputformat.

### Self-consistency

Self-consistency genererer flere svar på samme spørsmål og velger det mest konsistente. Ved å be modellen om å løse et problem på tre forskjellige måter og deretter sammenligne svarene, kan du identifisere det mest pålitelige resultatet.

### Tree-of-thought

Tree-of-thought er en utvidelse av chain-of-thought der modellen utforsker flere resonneringsgrener parallelt, evaluerer dem, og velger den mest lovende. Det er spesielt nyttig for kreative oppgaver og problemløsning med flere mulige tilnærminger.

### Persona-prompting

Ved å gi AI-en en spesifikk persona – «du er en erfaren norsk advokat» eller «du er en senior utvikler med 15 års erfaring» – aktiverer du relevant kunnskap og tilpasser svarstilen til konteksten.

## Prompt-mønstre for vanlige oppgaver

### Skriving og innhold

For innholdsproduksjon bør prompten spesifisere emne og vinkling, målgruppe med alder, kunnskapsnivå og behov, tone og stil, lengde og format, søkeord som skal inkluderes for SEO, og eksempler på lignende innhold du liker.

### Analyse og vurdering

For analytiske oppgaver bør du gi dataene eller konteksten modellen skal analysere, spesifisere hvilke aspekter du vil fokusere på, be om strukturert output med konklusjoner og anbefalinger, og be modellen om å vurdere styrker, svakheter og usikkerheter.

### Koding

For programmeringsoppgaver bør du spesifisere programmeringsspråk og rammeverk, beskrive ønsket funksjonalitet konkret, gi kontekst om eksisterende kodebase, be om kommentarer og feilhåndtering, og spesifisere kodestil og konvensjoner.

### Oversettelse og lokalisering

For oversettelse bør du spesifisere kilde- og målspråk, tone og register, fagterminologi som skal brukes, og kontekst for teksten.

## Vanlige feil

De vanligste prompt engineering-feilene er for vage instruksjoner der generelle prompts gir generelle svar, manglende kontekst der AI-en ikke vet hvem du er eller hva formålet er, for komplekse prompts der én massiv prompt med ti oppgaver gir dårligere resultater enn å dele opp, manglende formatspesifikasjon der du får et format du ikke ønsket, og å ikke iterere der den første prompten sjelden er den beste.

## Prompt engineering for norsk

For norskspråklige oppgaver bør du eksplisitt be om norsk bokmål eller nynorsk, gi eksempler på ønsket norsk tone og stil, være oppmerksom på at AI-modeller kan blande norsk med andre skandinaviske språk, og spesifisere norsk kontekst for lovverk, kultur og skikker.

## Prompt engineering som ferdighet

Prompt engineering er ikke bare en teknisk ferdighet – det krever klar tenkning om hva du faktisk trenger, evne til å kommunisere presist, kreativitet i å finne de rette formuleringene, og analytisk evne til å evaluere og forbedre resultater.

Som med all kommunikasjon blir man bedre med praksis. Eksperimenter med ulike teknikker, bygg en samling av effektive prompts, og del erfaringer med kolleger.

## Ofte stilte spørsmål

### Fungerer de samme promptene på tvers av AI-modeller?
Grunnprinsippene er like, men modeller responderer ulikt på spesifikke formuleringer. Claude, GPT-4 og Gemini har forskjellige styrker og preferanser. Test og tilpass for hver modell.

### Hvor lang bør en prompt være?
Så lang som den trenger å være for å gi tilstrekkelig kontekst og instruksjoner. For enkle oppgaver holder noen setninger. For komplekse oppgaver kan en prompt på flere avsnitt gi bedre resultater.

### Vil prompt engineering bli overflødig etter hvert som AI-modeller blir bedre?
Delvis. Modellene blir stadig bedre til å forstå vage instruksjoner, men presis kommunikasjon vil alltid gi bedre resultater. Prompt engineering vil utvikle seg, men ikke forsvinne.

### Finnes det prompt engineering-kurs?
Ja. Anthropic, OpenAI og DeepLearning.AI tilbyr offisielle guider og kurs. Mange universiteter og kursplattformer har også tatt inn prompt engineering i sine programmer.
