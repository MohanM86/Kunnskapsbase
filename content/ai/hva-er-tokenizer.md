---
title: "Hva er tokenizer?"
slug: "hva-er-tokenizer"
category: "ai"
subcategory: "maskinlaering"
description: "En tokenizer er komponenten som oversetter tekst til tokens – tallene AI faktisk prosesserer. Lær hva det er, BPE, og hvorfor norsk bruker flere tokens enn engelsk."
keywords: ["tokenizer", "tokenisering", "BPE", "tokens", "tiktoken"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Tokenizer"
aliases: ["tokenisering", "teksttokenisering"]
related: ["hva-er-tokens-i-ai", "hva-er-context-window", "hva-er-kunstig-intelligens", "hva-er-parametere-og-vekter", "hva-er-inference"]
seeAlso: ["hva-er-tokens-i-ai", "hva-er-context-window"]
tags: ["tokenizer", "ai", "maskinlaering"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er tokenizer?

En tokenizer er komponenten som oversetter menneskelig tekst til tokens – de numeriske enhetene en AI-modell faktisk forstår og prosesserer. Det er AI-ens «lesebriller.»

> **Kort forklart**
> AI leser ikke bokstaver – den leser tall. En tokenizer deler tekst i «tokens» – biter som kan være hele ord, ordeler eller tegn. «Kunstig intelligens» kan bli to tokens: «Kunstig» + « intelligens». «Unhelpfulness» kan bli tre: «Un» + «helpful» + «ness». Ulike modeller bruker ulike tokenizere – det er derfor norsk tekst «koster» flere tokens enn engelsk (tokenizerne er primært trent på engelsk). Tokenizeren bestemmer hva modellen ser, og dermed hva den kan forstå.

## Hva betyr begrepet

En tokenizer har tre jobber: dele tekst i tokens (subord, ord eller tegn), konvertere tokens til tall-IDer (fra vokabularet), og rekonstruere tekst fra tall-IDer (detokenisering).

BPE (Byte Pair Encoding) er den mest brukte algoritmen. Den starter med individuelle tegn, finner de mest frekvente tegnparene og slår dem sammen, gjentar iterativt til ønsket vokabularstørrelse er nådd, og resultatet er et vokabular av vanlige ord, delord og sjeldne tegn.

Vanlige tokenizer-varianter er GPT-tokenizer (tiktoken) som bruker BPE med ~100 000 tokens i vokabularet, SentencePiece som brukes av Llama, Mistral og mange åpne modeller, og WordPiece som brukes av Google BERT.

Norsk og tokenisering: fordi tokenizerne er primært trent på engelsk tekst, representeres norske ord ofte med flere tokens enn engelske. «Kryptovaluta» kan bli 3–4 tokens mens «cryptocurrency» er 1–2. Det betyr at norsk tekst «koster» 30–50 prosent flere tokens – du bruker context window raskere og betaler mer per API-kall.

## Hvordan fungerer det

Tokenizeren deler tekst i prosesserbare biter.

```
Input: "Kunstig intelligens endrer verden"

GPT-4 tokenizer (tiktoken):
  "Kunst" + "ig" + " intelli" + "gens" + " end" + "rer" + " verd" + "en"
  = 8 tokens

Engelsk ekvivalent: "Artificial intelligence changes the world"
  "Artificial" + " intelligence" + " changes" + " the" + " world"
  = 5 tokens

→ Norsk bruker ~60 % flere tokens for samme mening
→ Det betyr: dyrere API, mindre plass i context window
```

Du kan teste tokenisering selv på platform.openai.com/tokenizer – lim inn tekst og se nøyaktig hvordan den deles.

## Hvorfor er det viktig

Tokenizeren er en usynlig men kritisk komponent som påvirker alt: kostnad (du betaler per token – flere tokens = dyrere), kontekstvindu (128K tokens = færre norske ord enn engelske), kvalitet (dårlig tokenisering av sjeldne språk = dårligere modellytelse), og hastighet (flere tokens = lenger inferenstid).

Flerspråklige tokenizere (Llama 3, Gemini) er bedre på norsk enn eldre modeller – de har større vokabular som inkluderer norske ord som hele tokens.

## Eksempler

API-kostnad: Du sender 1 000 ord norsk tekst til GPT-4 API. Det blir ~1 500 tokens. Samme mening på engelsk: ~1 000 tokens. Du betaler 50 prosent mer for norsk.

Emojis: «😀» er 1 token. «Hei! 😀» er 3 tokens. Emojis har egne tokens i vokabularet.

Kode: Programmeringskode er typisk tokeneffektiv – vanlige nøkkelord (function, return, if) er ofte 1 token hver.

## Vanlige spørsmål

### Hvorfor koster norsk tekst mer?
Tokenizerne er primært trent på engelsk – norske ord deles oftere i sub-tokens. «Kryptovaluta» = 3–4 tokens, «cryptocurrency» = 1–2.

### Kan jeg velge tokenizer?
Nei – den er bundet til modellen. Men du kan optimalisere: bruk kortere formuleringer, engelske fagtermer der det er naturlig, og vær bevisst på token-forbruk.

### Hva er vokabularstørrelse?
Antall unike tokens i tokenizeren. GPT-4: ~100 000. Llama 3: ~128 000. Større vokabular = bedre for flerspråklig men mer minne per token.

### Hva er en spesialtoken?
Tokens som ikke representerer tekst men kontrollsignaler: [BOS] (begynnelse), [EOS] (slutt), [PAD] (utfylling). De styrer modellens atferd.

## Relaterte begreper

- [Tokens i AI](/ai/hva-er-tokens-i-ai) – det tokenizeren produserer
- [Context window](/ai/hva-er-context-window) – begrenses av tokenantall
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [Parametere og vekter](/ai/hva-er-parametere-og-vekter) – prosesserer tokens
- [Inference](/ai/hva-er-inference) – genererer tokens

## Se også

- [Hva er tokens i AI?](/ai/hva-er-tokens-i-ai)
- [Hva er context window?](/ai/hva-er-context-window)

## Oppsummering

En tokenizer oversetter tekst til tokens – tallene AI faktisk prosesserer. BPE er den dominerende algoritmen. Norsk bruker ~30–50 prosent flere tokens enn engelsk – dyrere og bruker context window raskere. Større vokabular (Llama 3, Gemini) gir bedre flerspråklig tokenisering. Test på platform.openai.com/tokenizer. Tokenizeren er usynlig men påvirker kostnad, kvalitet og hastighet.
