---
title: "Hva er embeddings?"
slug: "hva-er-embeddings"
category: "AI"
subcategory: "maskinlaering"
description: "Embeddings er matematiske representasjoner av tekst, bilder eller andre data som fanger mening. Lær hvordan de fungerer og brukes i søk, anbefalinger og RAG."
keywords: ["embeddings", "vektorer", "semantisk søk", "embedding-modeller", "vektorrom"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "Embeddings"
aliases: ["embedding", "vektorer", "semantiske vektorer", "tekst-embeddings"]
related: ["hva-er-rag", "hva-er-maskinlaering", "hva-er-store-spraakmodeller"]
seeAlso: ["hva-er-finjustering", "hva-er-kunstig-intelligens"]
tags: ["embeddings", "vektorer", "semantisk søk", "maskinlæring"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er embeddings?

Embeddings er matematiske representasjoner av data – typisk tekst, men også bilder, lyd eller andre datatyper – i form av tallvektorer. Disse vektorene fanger den semantiske meningen til dataen: tekster med lignende betydning får lignende vektorer, selv om de bruker helt forskjellige ord. Embeddings er grunnlaget for mange moderne AI-applikasjoner.

> **Kort forklart**
> Embeddings oversetter menneskelig mening til tall som datamaskiner kan jobbe med. To setninger som betyr omtrent det samme får lignende tallverdier – noe som gjør det mulig for AI å forstå betydning, ikke bare ord.

## Hvorfor embeddings er viktige

Tradisjonelt søk matcher eksakte ord – hvis du søker etter «bil», finner du bare dokumenter som inneholder ordet «bil», ikke «kjøretøy», «automobil» eller «Tesla Model 3». Embeddings løser dette ved å representere mening i stedet for ord.

Med embeddings kan et søk etter «billig transport i Oslo» finne dokumenter om «rimelige busstilbud i hovedstaden» – fordi embeddingene til de to setningene er matematisk nær hverandre, selv om de ikke deler et eneste ord.

## Hvordan embeddings fungerer

### Vektorrom

En embedding er en liste med tall – en vektor – typisk med 256 til 3072 dimensjoner. Hver dimensjon fanger et aspekt av meningen. Det er umulig å visualisere tusenvis av dimensjoner, men prinsippet kan illustreres i to dimensjoner.

Tenk deg et koordinatsystem der x-aksen representerer «formelt vs. uformelt» og y-aksen representerer «positivt vs. negativt». Setningen «utmerket profesjonell prestasjon» ville plasseres øverst til høyre (formelt og positivt), mens «dårlig arbeids» ville plasseres nederst til høyre (formelt og negativt).

I virkeligheten har embeddings hundrevis eller tusenvis av dimensjoner som fanger nyanser i mening, tone, emne, stil og kontekst.

### Embedding-modeller

Embedding-modeller er spesialtrent for å konvertere tekst til vektorer. De er forskjellige fra generative modeller som ChatGPT – de genererer ikke tekst, men tall. Populære embedding-modeller er OpenAI text-embedding-3-small og text-embedding-3-large som er blant de mest brukte, Cohere Embed som er sterk multilingual modell med god norskstøtte, BGE og E5 som er åpne modeller som kan kjøres lokalt, og Voyage AI som er spesialisert for spesifikke domener som kode og jus.

### Kosinuslikhet

For å sammenligne to embeddings brukes typisk kosinuslikhet – et mål på vinkelen mellom to vektorer. Kosinuslikhet på 1,0 betyr identisk mening, nær 0 betyr ingen relasjon, og -1,0 betyr motsatt mening. I praksis har semantisk like tekster kosinuslikhet mellom 0,7 og 0,95.

## Bruksområder

### Semantisk søk

Den mest utbredte bruken av embeddings er semantisk søk – søk basert på mening i stedet for nøyaktige ord. Brukere kan søke med naturlige spørsmål og finne relevante resultater selv om dokumentene bruker andre formuleringer. Semantisk søk er kjernen i RAG-systemer og moderne søkemotorer.

### Anbefalingssystemer

Embeddings brukes i anbefalingssystemer for å finne lignende produkter, artikler eller innhold. Netflix anbefaler filmer basert på embedding-likhet med filmer du har likt. Spotify anbefaler musikk basert på embeddings av sangene du hører på.

### Klassifisering

Tekst kan klassifiseres ved å beregne embeddings og sammenligne med embeddings for kjente kategorier. E-poster kan klassifiseres som «kundehenvendelse», «klage» eller «spam» basert på embedding-likhet med eksempler fra hver kategori.

### Duplikatdeteksjon

Embeddings kan identifisere semantisk duplisert innhold selv når teksten er forskjellig formulert – nyttig for å finne kopiert innhold, lignende supporthenvendelser eller relaterte nyhetsartikler.

### Klyngeanalyse

Ved å gruppere dokumenter basert på embedding-likhet kan du oppdage temaer og mønstre i store tekstsamlinger. Kundetilbakemeldinger kan automatisk grupperes etter tema, og nyhetsartikler kan organiseres etter sak.

## Vektordatabaser

Embeddings lagres og søkes i spesialiserte vektordatabaser som er optimalisert for rask likhetssøk i høydimensjonale rom. Pinecone er en fullt administrert skytjeneste med enkel API. Weaviate er åpen kildekode med rik funksjonalitet og hybridssøk. ChromaDB er lett og enkelt for prototyping og mindre prosjekter. Qdrant er høyytelse med Rust-basert arkitektur. Pgvector er en PostgreSQL-utvidelse for de som vil ha vektorsøk i eksisterende database.

For små til mellomstore datasett kan vektorsøk også gjøres direkte i minnet uten en dedikert database.

## Chunking for embeddings

Når du embedder lange dokumenter, må du dele dem opp i mindre biter (chunks) fordi embedding-modeller har en begrenset kontekstlengde. Chunking-strategien påvirker søkekvaliteten betydelig.

Fast størrelse deler teksten i biter av lik tokenlengde, noe som er enkelt men kan bryte midt i setninger. Setningsbasert deling skjer på setningsgrenser og bevarer grammatisk sammenheng. Avsnittbasert deling skjer på avsnittgrenser og bevarer tematisk sammenheng. Semantisk chunking bruker AI for å identifisere naturlige tematiske grenser.

For de fleste brukstilfeller er avsnittbasert chunking med 200–500 tokens og 10–20 % overlapping et godt utgangspunkt.

## Embeddings for norsk tekst

For norskspråklige embeddings er multilingual modeller det beste valget. Cohere Embed Multilingual har god norskstøtte. OpenAIs text-embedding-3 håndterer norsk godt. Åpne multilingual modeller som multilingual-e5-large fungerer for norsk.

Vær oppmerksom på at norske sammensatte ord kan representeres annerledes enn engelske flerordsforbindelser, at norske spesialtegn (æ, ø, å) bør håndteres korrekt, og at kvaliteten for norsk typisk er noe lavere enn for engelsk, men stadig bedrer seg.

## Embeddings vs. tradisjonelt søk

Embeddings og tradisjonelt nøkkelordsøk har ulike styrker. Embeddings finner semantisk like dokumenter uavhengig av ordvalg, mens nøkkelordsøk finner eksakte treff pålitelig. Den beste tilnærmingen er ofte hybridsøk som kombinerer begge – bruk embedding-søk for semantisk relevans og nøkkelordsøk for eksakte termer, og kombiner resultatene.

## Ofte stilte spørsmål

### Hvor store er embeddings?
Typisk 256 til 3072 tall (dimensjoner). OpenAIs text-embedding-3-small produserer 1536-dimensjonale vektorer. Hver vektor krever noen kilobytes lagring.

### Kan embeddings brukes for andre ting enn tekst?
Ja. Det finnes embedding-modeller for bilder (CLIP), lyd (CLAP), kode (CodeBERT) og multimodale data. Prinsippet er det samme – konvertere data til vektorer som fanger mening.

### Er embeddings det samme som søkeord?
Nei. Søkeord er eksakte ord du matcher mot. Embeddings fanger mening – de forstår at «hund» og «bikkje» er relatert selv om ordene er forskjellige.

### Trenger jeg en vektordatabase?
For produksjonsbruk med mer enn noen tusen dokumenter er en vektordatabase sterkt anbefalt. For prototyping og små datasett kan enklere løsninger som in-memory søk fungere.
