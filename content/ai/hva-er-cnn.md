---
title: "Hva er CNN (Convolutional Neural Network)?"
slug: "hva-er-cnn"
category: "ai"
subcategory: "maskinlaering"
description: "CNN er nevralnettverk-arkitekturen designet for bildegjenkjenning og datasyn. Lær hva CNN er, konvolusjoner, og hvorfor det er grunnlaget for all visuell AI."
keywords: ["CNN", "Convolutional Neural Network", "datasyn", "bildegjenkjenning", "konvolusjon"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "CNN"
aliases: ["Convolutional Neural Network", "konvolusjonelt nevralt nettverk"]
related: ["hva-er-nevrale-nettverk", "hva-er-datasyn-computer-vision", "hva-er-dyp-laering", "hva-er-transformer-arkitekturen", "hva-er-ai-ansiktsgjenkjenning"]
seeAlso: ["hva-er-nevrale-nettverk", "hva-er-datasyn-computer-vision"]
tags: ["CNN", "ai", "maskinlaering", "arkitektur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er CNN (Convolutional Neural Network)?

CNN (Convolutional Neural Network) er en nevralnettverk-arkitektur spesialdesignet for å analysere visuell data – bilder og video – gjennom filtre som gjenkjenner mønstre fra kanter og farger til komplekse objekter.

> **Kort forklart**
> CNN-er «ser» bilder på samme måte som hjernen: først gjenkjenner de enkle kanter og farger, deretter kombinerer de disse til former, og til slutt gjenkjenner de objekter – «det er en katt.» Filtre (konvolusjoner) glir over bildet og fanger opp mønstre på hvert nivå. CNN-er driver all visuell AI: ansiktsgjenkjenning, selvkjørende biler, medisinsk bildeanalyse og innholdsmoderasjon. Det er grunnlaget for datasyn.

## Hva betyr begrepet

CNN skiller seg fra vanlige nevrale nettverk ved å bruke konvolusjonslag – filtre som glir over input-bildet og fanger lokale mønstre. Et bilde på 224×224 piksler har over 150 000 datapunkter – et vanlig nevralt nettverk ville trenge milliarder av parametere. CNN deler parametere via filtre – dramatisk mer effektivt.

Arkitekturen har tre typer lag. Konvolusjonslag (filtre som oppdager mønstre – kanter, teksturer, former) er kjernen. Pooling-lag (reduserer bildestørrelse, beholder viktig info) forenkler. Fullt tilkoblede lag (klassifiserer basert på lærte features) avslutter.

Hierarkiet er elegant: lag 1 fanger kanter og farger, lag 2 kombinerer kanter til former (sirkler, rektangler), lag 3–5 gjenkjenner deler (øyne, hjul, blader), og topplagene gjenkjenner objekter (katt, bil, tre).

Kjente CNN-arkitekturer er AlexNet (2012 – startet deep learning-revolusjonen), ResNet (2015 – 152 lag med residual connections), EfficientNet (2019 – optimal balanse mellom størrelse og ytelse), og Vision Transformer/ViT (2020 – transformers som utfordrer CNN for datasyn).

## Hvordan fungerer det

CNN-filtre glir over bildet og oppdager mønstre.

```
Input: Bilde av katt (224×224 piksler)
↓
Konvolusjon 1: 32 filtre → Oppdager kanter, farger
Pooling 1: Reduserer til 112×112
↓
Konvolusjon 2: 64 filtre → Oppdager former, teksturer
Pooling 2: Reduserer til 56×56
↓
Konvolusjon 3-5: 128-512 filtre → Oppdager øyne, ører, pels
↓
Fullt tilkoblet: → "Katt" (97 % sannsynlighet)
```

## Hvorfor er det viktig

CNN er grunnlaget for all visuell AI – fra Facebooks ansiktsgjenkjenning til Teslas autopilot til kreftdeteksjon i røntgenbilder. Det var CNN-gjennombruddet (AlexNet, 2012) som startet den moderne AI-revolusjonen.

Vision Transformers (ViT) utfordrer nå CNN-er for noen oppgaver, men CNN-er er fortsatt dominerende for sanntids bildeanalyse, mobil-AI (effektiv på liten maskinvare), og medisinsk bildeanalyse.

## Eksempler

Ansiktsgjenkjenning: Du låser opp iPhone med Face ID – et CNN analyserer ansiktet ditt og sammenligner med den lagrede modellen. Millisekunder.

Selvkjørende bil: Tesla Autopilot bruker CNN-er for å identifisere veiskilt, fotgjengere, biler og veimerking fra kameraene – i sanntid.

Kreftdeteksjon: CNN trent på mammografibilder oppdager brystkreft med nøyaktighet som matcher eller overgår radiologer.

## Vanlige spørsmål

### Brukes CNN bare for bilder?
Primært, men CNN brukes også for lydanalyse (spektrogrammer), tekst (1D-konvolusjoner), og tidsseriedata.

### Hva er forskjellen på CNN og Vision Transformer?
CNN bruker lokale filtre (konvolusjoner). ViT deler bildet i patches og bruker attention. ViT er bedre med mye data, CNN er mer effektivt med lite data.

### Trenger jeg å forstå CNN for å bruke AI?
Nei – men det hjelper å forstå prinsippet. CNN er «under panseret» i nesten all visuell AI du bruker.

## Relaterte begreper

- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – CNN er en type nevralt nettverk
- [Datasyn](/ai/hva-er-datasyn-computer-vision) – feltet CNN er designet for
- [Dyp læring](/ai/hva-er-dyp-laering) – CNN er en dyp læringsarkitektur
- [Transformer-arkitekturen](/ai/hva-er-transformer-arkitekturen) – alternativ/etterfølger
- [AI-ansiktsgjenkjenning](/ai/hva-er-ai-ansiktsgjenkjenning) – bygget på CNN

## Se også

- [Hva er nevrale nettverk?](/ai/hva-er-nevrale-nettverk)
- [Hva er datasyn?](/ai/hva-er-datasyn-computer-vision)

## Oppsummering

CNN er nevralnettverk-arkitekturen for visuell AI – filtre som gjenkjenner mønstre fra kanter til objekter. Det driver ansiktsgjenkjenning, selvkjørende biler og medisinsk AI. AlexNet (2012) startet deep learning-revolusjonen. Vision Transformers utfordrer nå, men CNN er fortsatt dominant for sanntids og mobil bildeanalyse.
