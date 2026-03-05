---
title: Hva er en stor språkmodell (LLM)?
description: Store språkmodeller (LLM) er AI-systemer trent på enorme mengder tekst til å forstå og generere menneskelig språk. De driver ChatGPT, Claude og Gemini.
definition: En stor språkmodell (LLM) er et kunstig intelligenssystem trent på enorme tekstmengder som kan forstå, generere og resonnere med menneskelig språk.
category: AI
categorySlug: ai
subcategory: Språkmodeller
subcategorySlug: sprakmodeller
tags: [LLM, AI, ChatGPT, Claude, Gemini, maskinlæring, nevrale nettverk, transformers]
author: Redaksjonen
publishedAt: "2024-11-18"
updatedAt: "2024-11-18"
featured: true
difficulty: beginner
faqs:
  - question: Hva er forskjellen mellom en LLM og vanlig AI?
    answer: Tradisjonell AI er trent for spesifikke oppgaver (f.eks. å spille sjakk eller gjenkjenne bilder). LLM-er er generelle modeller som kan utføre et bredt spekter av språkoppgaver – fra skriving og oversettelse til koding og analyse – uten å bli omprogrammert.
  - question: Hvordan er ChatGPT, Claude og Gemini forskjellige?
    answer: Alle tre er LLM-er, men fra ulike selskaper med ulike treningsdata og arkitekturvalg. ChatGPT er fra OpenAI, Claude fra Anthropic, og Gemini fra Google. De har ulike styrker innen sikkerhet, nøyaktighet, kreativitet og oppdatert kunnskap.
  - question: Kan LLM-er tenke?
    answer: LLM-er kan ikke "tenke" i menneskelig forstand. De er statistiske mønstertrekkere som forutsier det mest sannsynlige neste ord basert på kontekst. De kan imidlertid simulere resonnering på en måte som løser komplekse problemer.
  - question: Hva er "hallusinasjon" i LLM-sammenheng?
    answer: Hallusinasjon er når en LLM genererer informasjon som høres overbevisende ut men er feil. Modellen "finner opp" fakta fordi den optimaliserer for sannsynligheten av ord, ikke for faktisk sannhet.
---

## Hva betyr LLM?

**LLM** står for *Large Language Model* – stor språkmodell på norsk. Det er en type kunstig intelligens som er trent på massive mengder tekst – alt fra bøker og Wikipedia til kode og nettsider – til å forstå og produsere menneskelig språk.

De driver produktene du kjenner: ChatGPT, Claude, Gemini, Copilot og Llama.

## Hvordan fungerer en LLM?

### Treningsfasen

En LLM lærer ved å lese enorme tekstkorpus – typisk hundrevis av milliarder ord. Under trening forsøker modellen gang på gang å forutsi neste ord i en setning og justerer sine interne vekter basert på hvor riktig den var.

Etter nok iterasjoner begynner modellen å "forstå" grammatikk, fakta, kontekst og til og med nyanser i menneskelig kommunikasjon.

### Arkitektur: Transformer

Moderne LLM-er bruker **Transformer**-arkitekturen, introdusert av Google i 2017. Kjernen er en mekanisme kalt *attention* som lar modellen veie hvilke deler av input-teksten som er viktigst for å forstå kontekst.

```
Input → Tokenisering → Embedding → Transformer-lag × N → Output
```

### Inferens (bruk)

Når du stiller et spørsmål, brytes teksten ned i **tokens** (ordstykker), sendes gjennom modellens lag, og produserer sannsynlighetsfordelinger over mulige neste tokens. Modellen velger token etter token til svaret er ferdig.

## Skalaen er nøkkelen

Det som gjør LLM-er unike er *skala*. GPT-4 anslås å ha over 1 billion (10¹²) parametere. Med nok data og parametere oppstår det **emergente egenskaper** – evner modellen ikke eksplisitt ble trent for, som matematisk resonnering og kodeforståelse.

| Modell | Selskap | Lansert |
|--------|---------|---------|
| GPT-4o | OpenAI | 2024 |
| Claude 3.5 | Anthropic | 2024 |
| Gemini 1.5 | Google | 2024 |
| Llama 3 | Meta | 2024 |
| Mistral | Mistral AI | 2024 |

## Hvorfor er LLM-er viktige?

LLM-er representerer et paradigmeskifte i programvare. For første gang kan programmer kommunisere naturlig med mennesker, automatisere intellektuelt arbeid og assistere eksperter i komplekse felt.

**Produktivitet:** Kodingshjelp, dokumentskriving, analyse – oppgaver som tok timer kan gjøres på minutter.

**Tilgjengelighet:** Ekspertkunnskaper (juss, medisin, programmering) blir tilgjengelig for alle, ikke bare de med råd til konsulenter.

**Forskning:** LLM-er akselererer vitenskapelig forskning innen alt fra proteinfolding til medikamentutvikling.

## Begrensninger

LLM-er er kraftige, men ikke ufeilbarlige:

- **Hallusinasjon** – genererer overbevisende men feil informasjon
- **Kunnskapsavskjæring** – vet ikke om hendelser etter treningsdatoen
- **Manglende verdensforståelse** – forstår ikke fysikk, kausalitet eller tid på menneskelig vis
- **Bias** – reproduserer skjevheter fra treningsdataene

## Oppsummering

Store språkmodeller er den mest transformative teknologien siden internett. De er ikke intelligente i menneskelig forstand, men de er ekstremt kraftige verktøy for å prosessere og generere språk. Forståelse av hva de er – og hva de ikke er – er avgjørende for å bruke dem ansvarlig og effektivt.
