---
title: "Hva er RAG?"
slug: "hva-er-rag"
category: "AI"
subcategory: "spraakmodeller"
description: "RAG (Retrieval-Augmented Generation) kombinerer søk med AI-generering for å gi presise svar basert på oppdatert data. Lær hvordan RAG fungerer og løser hallusinering."
keywords: ["RAG", "Retrieval-Augmented Generation", "vektordatabase", "embeddings", "kunnskapsbase AI"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "RAG"
aliases: ["Retrieval-Augmented Generation", "retrieval augmented generation", "søkeforsterket generering"]
related: ["hva-er-store-spraakmodeller", "hva-er-hallusinering-i-ai", "hva-er-kunstig-intelligens"]
seeAlso: ["hva-er-ai-agenter-dybde", "hva-er-prompt-engineering-dybde"]
tags: ["RAG", "vektordatabase", "embeddings", "LLM"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er RAG?

RAG (Retrieval-Augmented Generation) er en teknikk som kombinerer informasjonssøk med AI-tekstgenerering. I stedet for å stole utelukkende på kunnskapen som er bakt inn i en språkmodell under trening, henter RAG først relevant informasjon fra en ekstern datakilde og gir denne til modellen som kontekst – slik at svaret er basert på faktisk, oppdatert data.

> **Kort forklart**
> RAG lar AI-modeller «slå opp» informasjon i dokumenter og databaser før de svarer, i stedet for å gjette basert på treningsdata. Resultatet er mer presise og troverdige svar med sporbare kilder.

## Problemet RAG løser

Store språkmodeller har to fundamentale begrensninger. For det første er kunnskapen frosset ved treningsdatoen – de vet ikke hva som skjedde etter de ble trent. For det andre kan de hallusinere – generere plausible men feilaktige svar fordi de predikerer sannsynlige ord, ikke verifiserte fakta.

RAG løser begge problemene. Ved å gi modellen tilgang til oppdaterte, verifiserbare kilder blir svarene basert på faktisk data i stedet for memorisert statistikk. Modellen kan sitere kildene, og brukeren kan verifisere informasjonen.

## Hvordan RAG fungerer

RAG-prosessen har tre hovedsteg. I søkesteget mottar systemet brukerens spørsmål og søker i en kunnskapsbase etter relevante dokumenter eller tekstbiter. I augmenteringssteget legges de hentede dokumentene til som kontekst i prompten til språkmodellen, sammen med brukerens spørsmål. I genereringssteget genererer språkmodellen et svar basert på den tilførte konteksten, med mulighet for å sitere kildene.

## Vektordatabaser og embeddings

Kjernen i RAG-søk er vektordatabaser og embeddings – teknologier som gjør det mulig å søke basert på mening i stedet for bare nøyaktige ord.

### Embeddings

En embedding er en matematisk representasjon av tekst som en vektor – en liste med tall som fanger meningeen til teksten. Tekster med lignende mening har lignende vektorer, selv om de bruker helt forskjellige ord. «Hunden spiste maten» og «Bikkja åt middagen» har lignende embeddings fordi de betyr omtrent det samme.

Embedding-modeller som OpenAI Ada, Cohere Embed og åpne alternativer konverterer tekst til vektorer som kan sammenlignes matematisk.

### Vektordatabaser

Vektordatabaser er spesialbygde databaser optimalisert for å lagre og søke i embeddings. Når du stiller et spørsmål, konverteres spørsmålet til en vektor og sammenlignes med alle lagrede dokumentvektorer for å finne de mest semantisk relevante treffene.

Populære vektordatabaser er Pinecone som er en fullt administrert skytjeneste, Weaviate som er åpen kildekode med rik funksjonalitet, ChromaDB som er lett og enkel for prototyping, Qdrant som gir høy ytelse med Rust-basert arkitektur, og pgvector som er en PostgreSQL-utvidelse for de som allerede bruker PostgreSQL.

## RAG-arkitekturer

### Enkel RAG

Den enkleste RAG-arkitekturen er en rett pipeline der spørsmålet embeddes, de K mest relevante dokumentene hentes, dokumentene legges til prompten, og LLM-en genererer svar basert på konteksten.

### Avansert RAG

Mer sofistikerte tilnærminger forbedrer hvert steg. Spørsmålsomformulering der spørsmålet skrives om for å gi bedre søkeresultater. Hybrid søk som kombinerer vektorsøk med tradisjonelt nøkkelordsøk. Re-ranking der søkeresultatene sorteres på nytt med en spesialisert modell. Chunking-strategier der dokumenter deles opp i optimale biter for embedding.

### Multi-hop RAG

For komplekse spørsmål som krever informasjon fra flere kilder kan multi-hop RAG gjøre flere søkerunder, der resultater fra første runde informerer søkene i neste runde.

## RAG i praksis

### Bedriftens kunnskapsbase

Den vanligste RAG-applikasjonen er å la AI-modeller svare på spørsmål basert på bedriftens dokumenter – policyer, prosedyrer, produktdokumentasjon og interne guider. I stedet for at ansatte må lete gjennom hundrevis av dokumenter, kan de stille spørsmål og få presise svar med kildehenvisning.

### Kundeservice

RAG-drevne chatboter kan svare på kundespørsmål basert på produktdokumentasjon, FAQ-er og støtteartikler. Svarene er presise og oppdaterte fordi de hentes fra den faktiske kunnskapsbasen, ikke fra modellens treningsdata.

### Juridisk og medisinsk

For bransjer der nøyaktighet er kritisk, gir RAG en tryggere tilnærming til AI-assistanse. Advokater kan søke i lovverk og rettspraksis, og leger kan søke i medisinsk litteratur – med AI som syntetiserer og presenterer informasjonen.

### Analyse og rapportering

RAG kan koble AI til bedriftens data for å besvare analytiske spørsmål som «hva var vår beste måned for salg i fjor?» ved å hente data fra databaser og la AI-en formulere svaret.

## Chunking – dele opp dokumenter

Hvordan du deler opp dokumenter i biter (chunks) har stor innvirkning på RAG-kvaliteten. For små chunks på 100–200 tokens er presisjonen høy men konteksten kan gå tapt. For store chunks på 1000+ tokens bevares kontekst men irrelevant informasjon kan inkluderes. Overlappende chunks der biter overlapper med 10–20 % sikrer at informasjon på grensene ikke mistes.

Semantisk chunking som deler på naturlige grenser som avsnitt og seksjoner gir typisk bedre resultater enn fast størrelse.

## Evaluering av RAG

Evaluering av RAG-systemer krever måling av flere dimensjoner. Retrieval-kvalitet vurderer om de riktige dokumentene hentes. Svarkvalitet vurderer om svaret er korrekt og nyttig. Troverdighet vurderer om svaret er støttet av de hentede dokumentene. Dekning vurderer om alle relevante dokumenter ble funnet.

Verktøy som Ragas og LlamaIndex tilbyr automatiserte evalueringsrammeverk for RAG.

## RAG og norske data

For norskspråklige RAG-systemer er det noen spesielle hensyn. Embedding-modeller bør støtte norsk godt – multilingual modeller som Cohere Multilingual og OpenAIs modeller fungerer generelt bra. Chunking bør respektere norsk setningsstruktur og avsnittsinndeling. Norske spesialtegn som æ, ø og å må håndteres korrekt i hele pipeline-en. For fagspesifikke domener som jus kan norsk juridisk terminologi kreve tilpassede søkestrategier.

## RAG vs. finetuning

RAG og finetuning er to forskjellige tilnærminger til å gi AI-modeller spesifikk kunnskap. RAG henter informasjon ved bruk og trenger ingen modellendring. Det er fleksibelt fordi datakilden kan oppdateres uten å trene modellen på nytt. Finetuning baker kunnskap inn i modellens parametre gjennom ekstra trening. Det er bedre for å endre modellens oppførsel og stil.

For de fleste bedriftsbrukstilfeller er RAG foretrukket fordi det er enklere å implementere, dataene alltid er oppdaterte, og kildene er sporbare.

## Ofte stilte spørsmål

### Eliminerer RAG hallusinering?
RAG reduserer hallusinering dramatisk, men eliminerer det ikke helt. Modellen kan fortsatt feiltolke eller ignorere konteksten. God RAG-design med kildehenvisning og menneskelig oversikt er viktig.

### Kan RAG brukes med alle LLM-er?
Ja. RAG er en arkitekturteknikk som fungerer med enhver LLM – Claude, GPT-4, Gemini, Llama og andre. Kvaliteten avhenger av både modellen og RAG-implementeringen.

### Hvor mye data trenger et RAG-system?
Det finnes ingen minimumsmengde. RAG fungerer med alt fra et enkelt dokument til millioner av sider. Verdien øker med datamengden fordi modellen kan svare på flere spørsmål.

### Er RAG vanskelig å implementere?
Grunnleggende RAG kan settes opp på noen timer med rammeverk som LangChain eller LlamaIndex. Produksjonskvalitets RAG med god chunking, hybrid søk og evaluering krever mer arbeid.
