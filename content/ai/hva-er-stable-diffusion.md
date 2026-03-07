---
title: "Hva er Stable Diffusion?"
slug: "hva-er-stable-diffusion"
category: "AI"
subcategory: "maskinlaering"
description: "Stable Diffusion er den ledende åpen kildekode AI-bildemodellen. Lær om hvordan den fungerer, lokal kjøring, tilpasning med LoRA, og det enorme fellesskapet."
keywords: ["Stable Diffusion", "åpen kildekode bilder", "SD", "SDXL", "LoRA", "ComfyUI"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 7
draft: false
entityType: "Tool"
topic: "Stable Diffusion"
aliases: ["SD", "SDXL", "Stable Diffusion XL", "StableDiffusion"]
related: ["hva-er-ai-bildegenerering", "hva-er-midjourney", "hva-er-generativ-ai-dybde"]
seeAlso: ["hva-er-aapen-kildekode-ai", "hva-er-finjustering"]
tags: ["Stable Diffusion", "åpen kildekode", "bildegenerering", "diffusjonsmodell"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er Stable Diffusion?

Stable Diffusion er den mest brukte åpen kildekode AI-bildemodellen i verden. Utviklet av Stability AI i samarbeid med forskere fra LMU Munich og Runway, ble den lansert i august 2022 og demokratiserte bildegenerering over natten – plutselig kunne hvem som helst med en kraftig nok datamaskin generere AI-bilder uten begrensninger, abonnementer eller sensur.

> **Kort forklart**
> Stable Diffusion er en gratis AI-bildemodell du kan laste ned og kjøre på din egen datamaskin. Den gir full kontroll, ubegrenset generering og muligheten til å tilpasse modellen til dine eksakte behov – noe ingen lukket tjeneste kan matche.

## Hvordan Stable Diffusion fungerer

Stable Diffusion er en latent diffusjonsmodell. «Latent» betyr at den opererer i et komprimert rom i stedet for direkte på pikslene, noe som gjør den dramatisk raskere og mindre ressurskrevende.

Prosessen har fire hovedelementer. Tekstencoderen (CLIP) oversetter prompten din til en matematisk representasjon som modellen forstår. U-Net-nettverket er kjernen som gradvis fjerner støy fra et tilfeldig startbilde, styrt av tekstrepresentasjonen. VAE-decoderen konverterer det latente bildet tilbake til et synlig bilde med fulle piksler. Scheduleren styrer støyfjerningstempo og kvaliteten på den gradvise prosessen.

Ved generering starter modellen med tilfeldig støy i det latente rommet. Over typisk 20–50 steg fjernes støyen gradvis, styrt av prompten, til et klart bilde fremkommer.

## Versjoner

### Stable Diffusion 1.5

Den mest brukte versjonen med det største økosystemet av tilpasninger, LoRA-er og plugins. Genererer bilder i 512x512 oppløsning. Fortsatt populær på grunn av det enorme fellesskapets bidrag.

### Stable Diffusion XL (SDXL)

Vesentlig forbedret kvalitet med 1024x1024 oppløsning, bedre fotorealisme, sterkere tekstforståelse og mer detaljerte bilder. SDXL krever mer GPU-minne men gir dramatisk bedre resultater.

### Stable Diffusion 3 og nyere

Nyere versjoner introduserer forbedret arkitektur, bedre tekst-i-bilde-generering og høyere kvalitet. Utviklingen fortsetter med jevne lanseringer.

### FLUX

Selv om FLUX er en separat modell fra Black Forest Labs (grunnlagt av tidligere Stability AI-forskere), er den bygget på lignende prinsipper og har blitt et populært alternativ med sterk fotorealisme og god tekstgjengivelse.

## Kjøre Stable Diffusion lokalt

### Maskinvarekrav

For å kjøre Stable Diffusion trenger du en NVIDIA GPU med CUDA-støtte. For SD 1.5 er minimum 4 GB VRAM men 8 GB anbefales. For SDXL er minimum 8 GB VRAM men 12 GB anbefales. For SD 3 og nyere er 12+ GB VRAM anbefalt. AMD GPUer støttes med visse begrensninger. Apple Silicon M1/M2/M3 Macs kan kjøre Stable Diffusion med akseptabel ytelse.

### Grensesnitt

Automatic1111 (Stable Diffusion WebUI) er det mest brukte grensesnittet med en webbasert UI i nettleseren, enorm utvidelsesbibliotek, og støtte for alle SD-versjoner og tilpasninger. ComfyUI er et nodebasert grensesnitt for avanserte brukere med visuell arbeidsflytdesigner, full kontroll over genereringspipelinen, og spesielt populært for komplekse arbeidsflyter og video. Fooocus er et forenklet grensesnitt inspirert av Midjourney med minimalt oppsett og fokus på brukervennlighet.

### Skybaserte alternativer

For de som ikke har maskinvaren lokalt tilbyr RunPod GPU-leie for å kjøre SD i skyen. Replicate gir API-tilgang til SD uten egen infrastruktur. Google Colab gir gratis GPU-tilgang med noen begrensninger.

## Tilpasning – Stable Diffusions superkraft

Det som virkelig skiller Stable Diffusion er det enorme økosystemet av tilpasninger.

### LoRA (Low-Rank Adaptation)

LoRA-er er små tilleggsfiler som tilpasser modellens stil eller læreren den nye konsepter. Du kan laste ned LoRA-er for å generere bilder i en spesifikk kunstners stil, skape konsistente karakterer, produsere bilder av spesifikke objekter eller steder, og matche en bestemt fotografisk eller kunstnerisk stil. Tusenvis av LoRA-er er tilgjengelige gratis på Civitai og Hugging Face.

### Finetuned modeller

Fellesskapet har laget hundrevis av finjusterte varianter av Stable Diffusion optimalisert for spesifikke formål som fotorealisme, anime og illustrasjon, arkitektur og interiør, og kunststiler og epoker.

### ControlNet

ControlNet gir presis kontroll over bildegenering. Du kan styre posisjon og komposisjon via skisse, bruke dybdekart for 3D-kontroll, referere til eksisterende bilder for stil og komposisjon, og generere bilder som matcher en spesifikk kanttegning.

### Inpainting og outpainting

Stable Diffusion kan endre spesifikke deler av et bilde med inpainting og utvide bilder utover kantene med outpainting – kraftige redigeringsverktøy som gir Photoshop-aktig kontroll.

## Fordeler med Stable Diffusion

Gratisbruk med ingen abonnementskostnader eller per-bilde-prising. Full kontroll uten restriksjoner på innhold eller stil. Ubegrenset generering – kjør tusenvis av bilder uten ekstra kostnad. Tilpasning med LoRA-er, finjustering og ControlNet for eksakt kontroll. Personvern der data aldri forlater din maskin. Offline-bruk der ingen internettforbindelse er nødvendig etter nedlasting.

## Begrensninger

Maskinvarekrav der du trenger en kraftig GPU. Teknisk terskel der oppsett krever mer teknisk kunnskap enn skybaserte tjenester. Støtte der du er avhengig av fellesskap og dokumentasjon i stedet for profesjonell kundesupport. Modellkvalitet der de nyeste lukketmodellene fra Midjourney kan ha bedre estetisk kvalitet for visse stiler.

## Stable Diffusion for norske brukere

Norske designere, kunstnere og utviklere bruker Stable Diffusion aktivt. For norsk-spesifikt innhold kan du trene egne LoRA-er på norske landskap, arkitektur og kulturelle elementer. Stable Diffusion er spesielt verdifullt for norske bedrifter som vil ha full kontroll over bildegenerering uten å sende data til skytjenester – relevant for GDPR-sensitive brukstilfeller.

## Ofte stilte spørsmål

### Er Stable Diffusion virkelig gratis?
Ja. Modellen er åpen kildekode og gratis å laste ned og bruke. Du betaler bare for maskinvaren – enten din egen GPU eller skybasert GPU-leie.

### Trenger jeg en dyr GPU?
For grunnleggende bruk holder en NVIDIA GPU med 8 GB VRAM (som RTX 3070). For SDXL og nyere modeller er 12+ GB ideelt. Skybaserte alternativer finnes for de uten GPU.

### Er Stable Diffusion like bra som Midjourney?
For fotorealisme og teknisk kontroll kan SD matche eller overgå Midjourney. For ren estetisk kvalitet «ut av boksen» har Midjourney fortsatt en fordel for mange stiler. SD kompenserer med ubegrenset tilpasning.

### Kan jeg bruke Stable Diffusion-bilder kommersielt?
Ja. De åpne Stable Diffusion-modellene har lisenser som tillater kommersiell bruk. Sjekk alltid den spesifikke modellens lisens – noen finjusterte varianter kan ha begrensninger.
