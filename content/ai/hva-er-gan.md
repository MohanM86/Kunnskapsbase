---
title: "Hva er GAN?"
slug: "hva-er-gan"
category: "ai"
subcategory: "maskinlaering"
description: "GAN er en AI-arkitektur der to nettverk konkurrerer – én genererer falsk innhold, én prøver å avsløre det. Lær hva GAN er, deepfakes, og hvorfor diffusion overtok."
keywords: ["GAN", "Generative Adversarial Network", "deepfake", "generator", "diskriminator"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "GAN"
aliases: ["Generative Adversarial Network", "generativt motstandernettverk"]
related: ["hva-er-diffusion-models", "hva-er-ai-bildegenerering", "hva-er-nevrale-nettverk", "hva-er-generativ-ai-dybde", "hva-er-deepfake"]
seeAlso: ["hva-er-diffusion-models", "hva-er-nevrale-nettverk"]
tags: ["GAN", "ai", "maskinlaering", "arkitektur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er GAN?

GAN (Generative Adversarial Network) er en AI-arkitektur der to nevrale nettverk konkurrerer mot hverandre – en generator som lager falsk innhold og en diskriminator som prøver å skille ekte fra falskt – og begge blir bedre gjennom konkurransen.

> **Kort forklart**
> Tenk på en falskmyntner (generator) og en politietterforsker (diskriminator). Falskmyntneren lager forfalskninger, etterforskeren prøver å avsløre dem. For hver gang etterforskeren avslører en forfalskning, blir falskmyntneren bedre. For hver bedre forfalskning, blir etterforskeren skarpere. Over tid blir forfalskningene så gode at selv etterforskeren ikke kan skille dem fra ekte. GAN-er revolusjonerte bildegenerering i 2014–2022 og muliggjorde deepfakes. Nå har diffusion models overtatt for det meste.

## Hva betyr begrepet

GAN ble oppfunnet av Ian Goodfellow i 2014 og var den dominerende generative AI-arkitekturen i nesten et tiår. To nettverk trenes samtidig. Generator tar inn tilfeldig støy og forsøker å generere realistisk innhold (bilder, tekst, lyd). Diskriminator mottar både ekte data og generatorens output og forsøker å klassifisere hva som er ekte og hva som er falskt.

Treningsdynamikken er et nullsumspill: generatoren prøver å lure diskriminatoren, og diskriminatoren prøver å ikke bli lurt. Nash-likevekt nås når generatoren produserer innhold som er umulig å skille fra ekte data.

Kjente GAN-varianter er StyleGAN (NVIDIA – genererte fotorealistiske ansikter, thispersondoesnotexist.com), CycleGAN (oversetter mellom bildedomener – hest→sebra, sommer→vinter), Pix2Pix (bilde-til-bilde oversettelse med paired data), og ProGAN (progressiv oppbygging av høyoppløselige bilder).

## Hvordan fungerer det

To nettverk konkurrerer og forbedrer hverandre.

```
Generator: Tilfeldig støy → Forsøk på realistisk bilde
Diskriminator: Mottar [ekte bilde] + [generert bilde] → Klassifiser: ekte/falskt

Runde 1: Generator lager dårlig bilde → Diskriminator avslører lett → Generator justerer
Runde 1000: Generator lager bedre bilder → Diskriminator sliter → Begge justerer
Runde 1000000: Generator lager fotorealistiske bilder → Diskriminator gjetter 50/50 → Nash-likevekt
```

## Hvorfor er det viktig

GAN-er var den første arkitekturen som kunne generere fotorealistisk innhold – de åpnet døren for generativ AI. Deepfakes (manipulerte videoer av ansikter) er GAN-teknologi. StyleGAN beviste at AI kan generere menneskeansikter som ikke eksisterer.

GAN-er hadde problemer: mode collapse (generatoren lager bare én type bilde), ustabil trening (vanskelig å balansere generator og diskriminator), og begrenset tekststyring. Diffusion models løste disse problemene og overtok som dominerende arkitektur fra 2022.

GAN-er brukes fortsatt for sanntids bildeprosessering (ansiktsfiltre i Snapchat), superoppløsning (forstørre bilder), og noen spesialiserte applikasjoner.

## Eksempler

thispersondoesnotexist.com: StyleGAN genererer fotorealistiske ansikter av mennesker som aldri har eksistert – hvert bilde er unikt og overbevisende.

Deepfakes: GAN-teknologi brukt til å sette én persons ansikt på en annens kropp i video – potensielt misbrukt for desinformasjon og svindel.

Snapchat-filtre: Sanntids ansiktsfiltre bruker GAN-lignende teknikker for å endre utseende i sanntid.

## Vanlige spørsmål

### Er GAN fortsatt relevant?
For bildegenerering: i stor grad erstattet av diffusion. For sanntids-applikasjoner, superoppløsning og spesialiserte oppgaver: fortsatt nyttig.

### Hva er forskjellen på GAN og diffusion?
GAN: to nettverk som konkurrerer (rask, ustabil). Diffusion: gradvis denoising (stabil, bedre kvalitet, tregere). Diffusion vant for de fleste bruksområder.

### Er alle deepfakes laget med GAN?
De fleste tidlige deepfakes var GAN-baserte. Nyere verktøy bruker også diffusion og andre teknikker. Deepfake er et bruksområde, ikke en spesifikk teknologi.

## Relaterte begreper

- [Diffusion models](/ai/hva-er-diffusion-models) – etterfølgeren som overtok
- [AI-bildegenerering](/ai/hva-er-ai-bildegenerering) – den bredere kategorien
- [Nevrale nettverk](/ai/hva-er-nevrale-nettverk) – byggesteinene i GAN
- [Generativ AI](/ai/hva-er-generativ-ai-dybde) – det overordnede konseptet

## Se også

- [Hva er diffusion models?](/ai/hva-er-diffusion-models)
- [Hva er nevrale nettverk?](/ai/hva-er-nevrale-nettverk)

## Oppsummering

GAN er en arkitektur der to nettverk konkurrerer – generator lager falskt innhold, diskriminator prøver å avsløre det. Revolusjonerte bildegenerering og muliggjorde deepfakes. StyleGAN genererte fotorealistiske ansikter. Diffusion models har nå overtatt for de fleste bruksområder, men GAN-er er fortsatt relevante for sanntidsapplikasjoner.
