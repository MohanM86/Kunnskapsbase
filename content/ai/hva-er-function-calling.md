---
title: "Hva er function calling og tool use?"
slug: "hva-er-function-calling"
category: "ai"
subcategory: "spraakmodeller"
description: "Function calling lar AI-modeller bruke verktøy – søke web, kjøre kode, lese databaser og styre apper. Lær hva det er, MCP, og hvorfor det er nøkkelen til nyttig AI."
keywords: ["function calling", "tool use", "verktøybruk", "MCP", "AI-integrasjon"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Function calling og tool use"
aliases: ["tool use", "verktøybruk", "tool calling"]
related: ["hva-er-mcp", "hva-er-agentic-ai", "hva-er-ai-agenter", "hva-er-chatgpt", "hva-er-ai-api"]
seeAlso: ["hva-er-mcp", "hva-er-agentic-ai"]
tags: ["function calling", "ai", "spraakmodeller", "integrasjon"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er function calling og tool use?

Function calling (tool use) er evnen til at AI-modeller kan bruke eksterne verktøy – søke web, kjøre kode, lese databaser, sende e-post og styre apper – i stedet for å bare generere tekst.

> **Kort forklart**
> En ren chatbot kan bare svare med tekst basert på det den vet. Med function calling kan den HANDLE: «Hva er været i Oslo?» → AI kaller en vær-API → Får sanntidsdata → Svarer med nøyaktig temperatur. «Send en e-post til Per med møtenotater» → AI kaller e-post-API → E-posten sendes. Det er det som forvandler AI fra en samtalepartner til en assistent som faktisk GJØR ting. Alle moderne chatboter (ChatGPT, Claude, Gemini) støtter function calling.

## Hva betyr begrepet

Uten function calling er AI-modeller begrenset til det de lærte under trening – de kan ikke hente fersk informasjon, utføre beregninger nøyaktig, eller interagere med systemer. Med function calling definerer utvikleren tilgjengelige verktøy (funksjoner), modellen bestemmer NÅR og HVILKET verktøy som skal brukes, modellen genererer parameterne til funksjonskallet, systemet utfører funksjonen og returnerer resultatet, og modellen bruker resultatet til å generere svar.

Eksempler på verktøy er websøk (hent fersk informasjon), kodekjøring (beregn, analyser, visualiser), fillesing (les PDF, regneark, dokumenter), API-kall (vær, aksjer, kalender, e-post), og databasespørring (søk i bedriftsdata).

[MCP (Model Context Protocol)](/ai/hva-er-mcp) er Anthropics åpne protokoll som standardiserer verktøytilkobling – slik at AI kan koble til tusenvis av tjenester via en felles standard.

## Hvordan fungerer det

AI-modellen bestemmer selv når den trenger et verktøy.

```
Bruker: "Hva er Microsoft-aksjen nå?"

Uten function calling:
  AI: "Jeg vet ikke sanntidspriser. Per min siste oppdatering..."

Med function calling:
  AI bestemmer: "Trenger sanntidspris → kall stock_price(ticker='MSFT')"
  System: utfører API-kall → returnerer $425,30
  AI: "Microsoft (MSFT) handles nå til $425,30, opp 1,2 % i dag."

Bruker: "Hva er 15 % av 847,50 kr?"

Uten function calling:
  AI: "127,13 kr" (kanskje feil – LLM-er er dårlige på matte)

Med function calling:
  AI: kaller calculator(expression="847.50 * 0.15") → 127,125
  AI: "15 % av 847,50 kr er 127,13 kr." (garantert riktig)
```

## Hvorfor er det viktig

Function calling er det som gjør AI NYTTIG – ikke bare interessant. Uten det er AI en smart samtalepartner. Med det er AI en assistent som kan handle i den virkelige verden. ChatGPTs plugins, Claudes computer use, og Geminis Google-integrasjon er alle bygget på function calling.

For utviklere er det nøkkelen til å bygge AI-drevne produkter: koble modellen til din database, ditt API, dine systemer – og la AI-en bruke dem intelligent.

## Eksempler

ChatGPT code interpreter: Du laster opp et regneark → ChatGPT kaller Python-kode → Analyserer, visualiserer, og returnerer grafer. Function calling i aksjon.

Claude med MCP: Du kobler Claude til Google Calendar via MCP → «Hva har jeg i morgen?» → Claude kaller kalender-API → Svarer med avtaler.

AI-agent: En kundeservice-agent mottar klage → kaller ordresystem (sjekk status) → kaller refusjonssystem (initier refusjon) → kaller e-post (send bekreftelse). Alt via function calling.

## Vanlige spørsmål

### Hvilke modeller støtter function calling?
Alle store: GPT-4, Claude, Gemini, Llama 3.1+, Mistral. Det er nå standard for alle seriøse LLM-er.

### Hva er forskjellen på function calling og MCP?
Function calling er den generelle evnen. MCP er en standardisert PROTOKOLL for å koble verktøy – som USB er for enheter. MCP gjør function calling plug-and-play.

### Kan AI gjøre farlige ting med function calling?
Potensielt – en agent med tilgang til e-post, betalinger og filer kan gjøre skade. Sikkerhetsdesign (godkjenningssteg, sandboxing, logging) er avgjørende.

### Er function calling det samme som AI-agenter?
Function calling er EVNEN til å bruke verktøy. AI-agenter BRUKER function calling som del av autonom planlegging og handling. Function calling er byggestenen, agenter er arkitekturen.

## Relaterte begreper

- [MCP](/ai/hva-er-mcp) – standard for verktøytilkobling
- [Agentic AI](/ai/hva-er-agentic-ai) – bygger på function calling
- [AI-agenter](/ai/hva-er-ai-agenter) – bruker function calling
- [ChatGPT](/ai/hva-er-chatgpt) – plugins og code interpreter
- [AI-API](/ai/hva-er-ai-api) – der function calling defineres

## Se også

- [Hva er MCP?](/ai/hva-er-mcp)
- [Hva er agentic AI?](/ai/hva-er-agentic-ai)

## Oppsummering

Function calling lar AI bruke verktøy – søke web, kjøre kode, lese databaser, sende e-post. Det forvandler AI fra samtalepartner til assistent som handler. Alle store modeller støtter det. MCP standardiserer tilkoblingen. Function calling er grunnlaget for AI-agenter. Det er nøkkelen til nyttig, handlende AI.
