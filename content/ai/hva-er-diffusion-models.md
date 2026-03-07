---
title: "Hva er diffusion models?"
slug: "hva-er-diffusion-models"
category: "ai"
subcategory: "maskinlaering"
description: "Diffusion models er AI-arkitekturen bak DALL-E, Stable Diffusion og Sora – de genererer bilder og video ved å gradvis fjerne støy. Lær hvordan de fungerer."
keywords: ["diffusion models", "diffusjonsmodell", "bildegenerering", "denoising", "latent diffusion"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Diffusion models"
aliases: ["diffusjonsmodell", "denoising diffusion"]
related: ["hva-er-dall-e-sora", "hva-er-stable-diffusion", "hva-er-midjourney", "hva-er-ai-bildegenerering", "hva-er-generativ-ai-dybde"]
seeAlso: ["hva-er-dall-e-sora", "hva-er-stable-diffusion"]
tags: ["diffusion", "ai", "maskinlaering", "arkitektur"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er diffusion models?

Diffusion models er AI-arkitekturen som driver nesten all moderne bilde- og videogenerering – de lager bilder ved å starte med tilfeldig støy og gradvis fjerne den til et ferdig bilde fremkommer, styrt av en tekstbeskrivelse.

> **Kort forklart**
> Tenk deg at du heller blekk i et glass vann – det sprer seg (diffunderer) til alt er grått. Diffusion models lærer å reversere denne prosessen: start med grått kaos (støy) og fjern støyen steg for steg til et skarpt bilde av en katt, et landskap eller hva enn du beskrev. DALL-E 3, Stable Diffusion, Midjourney og Sora bruker alle diffusion. Det er den mest revolusjonerende AI-arkitekturen for visuelt innhold siden GAN-er.

## Hva betyr begrepet

Diffusion models fungerer i to faser. Forward process (trening) tar et ekte bilde og legger gradvis til støy over mange steg til bildet er ren støy – modellen lærer hvordan støy ser ut på hvert steg. Reverse process (generering) starter med ren støy og fjerner den steg for steg – modellen bruker det den lærte til å «denoise» tilbake til et bilde, styrt av en tekstprompt.

Latent Diffusion (brukt i Stable Diffusion) utfører prosessen i et komprimert latent rom i stedet for piksel-for-piksel – dramatisk raskere og billigere. Et bilde på 512×512 piksler komprimeres til et 64×64 latent representasjon, diffusion skjer i latent rom, og resultatet dekodes tilbake til fullt bilde.

Classifier-Free Guidance (CFG) lar deg styre hvor tett bildet følger prompten – høy CFG gir nøyaktig men noen ganger stivt resultat, lav CFG gir mer kreativt men mindre nøyaktig.

## Hvordan fungerer det

Diffusion starter med støy og fjerner den gradvis til et bilde.

```
Generering (50 steg):
Steg 0:  Ren støy (tilfeldige piksler)
Steg 10: Vage former begynner å fremkomme
Steg 25: Tydelige konturer, farger, komposisjon
Steg 40: Detaljert bilde med tekstur
Steg 50: Ferdig bilde – skarpt, detaljert, promptstyrt

Prompt: "En katt som sitter på en regnbuebro" → Styrer denoising-retningen → Bildet konvergerer mot beskrivelsen
```

Nøkkelkomponenter er U-Net (nevralnettverk som predikerer støyen som skal fjernes), tekstkoder (CLIP eller T5 som forstår prompten), VAE (komprimerer/dekomprimerer mellom pikselrom og latent rom), og scheduler (bestemmer støyfjerningstakt – DDPM, DDIM, Euler).

## Hvorfor er det viktig

Diffusion models erstattet GAN-er som den dominerende arkitekturen for bildegenerering – de er mer stabile å trene, gir høyere kvalitet, og håndterer tekststyring mye bedre. Hele den visuelle AI-revolusjonen (DALL-E, Midjourney, Stable Diffusion, Sora) bygger på diffusion.

Sora utvidet konseptet til video – diffusion i rom OG tid – noe som krever enormt med regnekraft men gir imponerende resultater.

## Eksempler

Stable Diffusion: Åpen kildekode latent diffusion – du kan kjøre det lokalt og generere bilder uten API-kostnad. Tusenvis av finjusterte varianter finnes.

DALL-E 3: Bruker diffusion styrt av ChatGPTs tekstforståelse – du beskriver i naturlig språk, ChatGPT forbedrer prompten, diffusion genererer bildet.

Sora: Diffusion utvidet til video – modellen denoiser 3D-patches (rom + tid) for å generere sammenhengende videoklipp.

## Vanlige spørsmål

### Hva er forskjellen på diffusion og GAN?
GAN bruker to nettverk som konkurrerer (generator vs diskriminator). Diffusion bruker gradvis denoising. Diffusion gir bedre kvalitet og stabilitet – GAN er raskere men vanskeligere å trene.

### Kan jeg kjøre diffusion lokalt?
Ja – Stable Diffusion kjører på en GPU med 8 GB VRAM. ComfyUI og AUTOMATIC1111 er populære grensesnitt. Tusenvis av finjusterte modeller på CivitAI.

### Hvorfor tar bildegenerering tid?
Fordi diffusion kjører 20–50 steg med denoising – hvert steg er en full gjennomkjøring av nettverket. Raskere schedulers (LCM, Turbo) reduserer til 4–8 steg.

### Hva er ControlNet?
En utvidelse som lar deg styre diffusion med ekstra input – skisser, dybdekart, poser. Du tegner en grov skisse → diffusion genererer et detaljert bilde basert på skissen.

## Relaterte begreper

- [DALL-E og Sora](/ai/hva-er-dall-e-sora) – OpenAIs diffusion-produkter
- [Stable Diffusion](/ai/hva-er-stable-diffusion) – åpen kildekode diffusion
- [Midjourney](/ai/hva-er-midjourney) – estetisk diffusion
- [AI-bildegenerering](/ai/hva-er-ai-bildegenerering) – den bredere kategorien
- [Generativ AI](/ai/hva-er-generativ-ai-dybde) – det overordnede konseptet

## Se også

- [Hva er DALL-E og Sora?](/ai/hva-er-dall-e-sora)
- [Hva er Stable Diffusion?](/ai/hva-er-stable-diffusion)

## Oppsummering

Diffusion models genererer bilder ved å starte med støy og gradvis fjerne den til et ferdig bilde – styrt av tekstprompt. De driver DALL-E, Stable Diffusion, Midjourney og Sora. Latent diffusion gjør det raskt nok for praktisk bruk. Det er den dominerende arkitekturen for visuell AI – og har erstattet GAN-er for de fleste bruksområder.
