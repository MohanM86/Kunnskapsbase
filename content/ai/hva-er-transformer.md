---
title: "Hva er transformer-arkitekturen?"
slug: "hva-er-transformer"
category: "AI"
subcategory: "Maskinlæring"
description: "Transformer er AI-arkitekturen bak ChatGPT, Claude og alle moderne språkmodeller. Lær om attention-mekanismen, self-attention og hvorfor transformer revolusjonerte AI."
keywords: ["transformer", "attention", "self-attention", "AI-arkitektur", "GPT", "BERT"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Concept"
topic: "Transformer"
aliases: ["transformer-modell", "attention-arkitektur", "transformer architecture"]
related: ["hva-er-nevrale-nettverk", "hva-er-store-spraakmodeller", "hva-er-maskinlaering"]
seeAlso: ["hva-er-tokens", "hva-er-generativ-ai"]
tags: ["transformer", "attention", "AI-arkitektur", "dyp læring"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "advanced"
---

# Hva er transformer-arkitekturen?

Transformer er en nevralt nettverk-arkitektur som ble introdusert i den banebrytende artikkelen «Attention Is All You Need» fra Google i 2017. Den revolusjonerte maskinlæring ved å løse fundamentale begrensninger i tidligere arkitekturer og er grunnlaget for alle moderne store språkmodeller – inkludert GPT-serien, Claude, Gemini og Llama.

> **Kort forklart**
> Transformer er den tekniske oppfinnelsen som gjorde ChatGPT og Claude mulig. Den lar AI-modeller forstå sammenhenger i tekst ved å «se på» alle ord samtidig, i stedet for å lese ett ord om gangen.

## Problemet transformer løste

Før transformere brukte språkmodeller primært rekurrente nettverk (RNN/LSTM) som prosesserte tekst sekvensielt – ett ord om gangen, fra venstre til høyre. Dette hadde tre store problemer. Sekvensiell prosessering gjorde at lange tekster tok lang tid å behandle fordi hvert ord måtte vente på det forrige. Hukommelsesproblemer førte til at informasjon fra tidlige ord gradvis ble «glemt» i lange tekster. Manglende parallelisering gjorde at trening ikke kunne utnytte moderne GPU-er som er designet for parallell beregning.

Transformer løste alle tre ved å introdusere attention-mekanismen – en måte å prosessere alle ord i en tekst samtidig, med evnen til å vurdere sammenhengene mellom ethvert par av ord.

## Attention-mekanismen

Attention er kjernen i transformer og kan beskrives intuitivt: for hvert ord i teksten vurderer modellen hvor relevant hvert annet ord er for å forstå konteksten.

Ta setningen «Katten som satt på matta var sulten». For å forstå «sulten» trenger modellen å koble det til «katten» – ikke til «matta». Attention-mekanismen beregner en «oppmerksomhetsscore» mellom alle ordpar, noe som lar modellen fokusere på de relevante sammenhengene uavhengig av avstand i teksten.

### Self-attention

Self-attention lar hvert ord «se på» alle andre ord i teksten for å bygge sin kontekstuelle forståelse. For hvert ord beregner modellen tre vektorer. Query representerer «hva leter dette ordet etter?». Key representerer «hva tilbyr dette ordet?». Value representerer «hva er informasjonen dette ordet bærer?».

Oppmerksomhetsscoren mellom to ord beregnes ved å matche Query fra det ene med Key fra det andre. Høy score betyr at ordene er relevante for hverandre. Resultatet er en vektet sum av alle Value-vektorer, der vektene er oppmerksomhetsscorene.

### Multi-head attention

I stedet for én attention-beregning bruker transformere «multi-head attention» – flere parallelle attention-beregninger med forskjellige vektmatriser. Hver «head» kan fokusere på ulike typer relasjoner: én head kan fange grammatiske relasjoner, en annen kan fange semantiske relasjoner, og en tredje kan fange langtidsavhengigheter.

Typiske modeller bruker 8–128 attention heads per lag.

## Transformer-arkitekturen i detalj

### Encoder og decoder

Den opprinnelige transformer-arkitekturen har to hoveddeler. Encoder-en leser og forstår input-teksten. Den prosesserer hele teksten simultant og bygger en rik representasjon av mening og kontekst. Decoder-en genererer output-tekst token for token, ved å se på både encoder-representasjonen og de tokenene den allerede har generert.

I praksis bruker mange moderne modeller bare én av delene. BERT bruker bare encoder – ideelt for å forstå tekst (klassifisering, spørsmålssvar). GPT bruker bare decoder – ideelt for å generere tekst. T5 og BART bruker begge (encoder-decoder) – ideelt for oversettelse og oppsummering.

### Posisjonskoding

Siden transformer prosesserer alle ord samtidig i stedet for sekvensielt, trenger den en måte å forstå ordrekkefølgen. Posisjonskoding (positional encoding) legger til informasjon om hvert ords posisjon i teksten. Uten dette ville «hunden bet mannen» og «mannen bet hunden» vært identiske for modellen.

Originale transformere brukte faste, matematiske posisjonskoder. Nyere modeller som RoPE (Rotary Position Embedding) bruker mer sofistikerte metoder som håndterer lange sekvenser bedre.

### Feed-forward-lag

Etter attention-beregningen prosesseres hvert ords representasjon gjennom et feed-forward nevralt nettverk. Dette laget transformerer representasjonene og legger til ikke-linearitet. Mange forskere mener at feed-forward-lagene fungerer som en form for «hukommelse» der modellen lagrer faktakunnskap.

### Normalisering og residualforbindelser

Transformere bruker lagenormalisering (layer normalization) for å stabilisere treningen og residualforbindelser (skip connections) som lar informasjon «hoppe over» lag. Disse teknikkene er avgjørende for å trene dype nettverk med hundrevis av lag.

## Skalering – nøkkelen til moderne AI

En av transformerens viktigste egenskaper er at den skalerer ekstremt godt. Å øke antall parametre (nevroner og vekter), treningsdata og datakraft gir konsistent bedre ytelse. Denne «skaleringsloven» er drivkraften bak utviklingen fra GPT-2 med 1,5 milliarder parametre til GPT-4 med anslagsvis over en billion.

Skalering har vist at evner kan dukke opp brått ved bestemte modellstørrelser – for eksempel evnen til å resonnere, kode og oversette. Disse «emergente evnene» var uventede og er fortsatt ikke fullt forstått.

## Transformer-varianter

### GPT (Generative Pre-trained Transformer)

GPT bruker kun decoder-delen og er trent til å predikere neste token. Denne enkle treningsoppgaven viser seg å gi modellen bred språkforståelse og generativ evne. GPT-serien fra OpenAI (GPT-2, GPT-3, GPT-4) demonstrerte at skalering av denne arkitekturen gir stadig mer imponerende resultater.

### BERT (Bidirectional Encoder Representations from Transformers)

BERT bruker kun encoder-delen og er trent til å fylle inn maskerte ord i tekst. Den prosesserer tekst bidireksjonalt – den ser på kontekst fra begge sider av hvert ord. BERT er spesielt sterk for klassifisering, spørsmålssvar og tekstforståelse.

### Vision Transformers (ViT)

Vision Transformers tilpasser transformer-arkitekturen til bilder ved å dele bildet inn i små biter (patches) som behandles som tokens. ViT har vist at transformere ikke bare er for tekst – de kan konkurrrere med og overgå CNN-er for bildegjenkjenning.

### Multimodale transformere

Moderne modeller som GPT-4o og Gemini bruker transformere som prosesserer tekst, bilder, lyd og video i en felles arkitektur. Ulike input-typer konverteres til tokens og prosesseres gjennom de samme transformer-lagene.

## Transformer og beregningskost

Transformerens attention-mekanisme har en kvadratisk kostnad – å doble sekvensslengden firedobler beregningsbehovet. For lange tekster blir dette en flaskehals. Løsninger inkluderer Flash Attention som er en minneeffektiv implementering som dramatisk reduserer GPU-minnebruk, sparse attention der modellen fokuserer på utvalgte deler av teksten i stedet for alt, og Mixture of Experts (MoE) der bare en del av modellens parametre aktiveres per token.

## Ofte stilte spørsmål

### Hvorfor heter det «transformer»?
Navnet kommer fra at arkitekturen «transformerer» input-representasjoner til output-representasjoner gjennom attention og feed-forward-lag.

### Er alle AI-modeller basert på transformer?
Ikke alle, men de fleste moderne store modeller er det. For spesifikke oppgaver som bildegjenkjenning brukes fortsatt CNN-er, og for noen sekvensoppgaver brukes fortsatt RNN-varianter. Men transformere dominerer.

### Kan transformer-arkitekturen forbedres?
Ja, og forskning pågår aktivt. State Space Models (SSM) som Mamba tilbyr lineær skalering med sekvenslengde. Mixture of Experts gir effektiv skalering. Nye attention-varianter reduserer beregningskostnad. Transformer er sannsynligvis ikke det endelige svaret – men det er det beste vi har i dag.

### Trenger jeg å forstå transformere for å bruke AI?
Nei. Du kan bruke ChatGPT, Claude og andre verktøy uten å forstå den tekniske arkitekturen. Men en grunnleggende forståelse hjelper deg å bruke verktøyene mer effektivt og forstå deres begrensninger.
