---
title: "Hva er system prompt?"
slug: "hva-er-system-prompt"
category: "ai"
subcategory: "spraakmodeller"
description: "System prompt er den skjulte instruksjonen som definerer AI-ens personlighet, regler og oppførsel. Lær hva det er, hvordan det brukes, og hvorfor det er AI-produktets DNA."
keywords: ["system prompt", "systemmelding", "AI-instruksjon", "AI-personlighet", "custom instructions"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "System prompt"
aliases: ["systemmelding", "systeminstruksjon", "custom instructions"]
related: ["hva-er-prompt-engineering-dybde", "hva-er-context-window", "hva-er-tokens-i-ai", "hva-er-chatgpt", "hva-er-ai-api"]
seeAlso: ["hva-er-prompt-engineering-dybde", "hva-er-context-window"]
tags: ["system prompt", "ai", "spraakmodeller"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er system prompt?

System prompt er den skjulte instruksjonen som settes FØR brukerens melding og definerer AI-ens personlighet, regler, begrensninger og oppførsel – det er «DNA-et» til AI-produktet.

> **Kort forklart**
> Når du bruker ChatGPT, ser du bare din melding og AI-ens svar. Men det finnes en usynlig «systeminstruksjon» som forteller AI-en hvem den er og hvordan den skal oppføre seg. ChatGPTs systemprompt sier noe som: «Du er ChatGPT, en hjelpsom assistent laget av OpenAI. Svar høflig og nøyaktig.» Et kundeservice-verktøy kan ha: «Du er en supportagent for Bedrift X. Svar kun om våre produkter. Ikke diskuter konkurrenter.» System prompt er det som gjør at samme underliggende modell kan bli tusenvis av ulike produkter.

## Hva betyr begrepet

System prompt (også kalt system message eller system instructions) er den første meldingen i en AI-samtale som settes av utvikleren – ikke brukeren. Den er usynlig for brukeren men styrer all etterfølgende oppførsel.

System prompt definerer typisk rolle og personlighet («Du er en norsk ernæringsrådgiver»), regler og begrensninger («Ikke gi medisinsk diagnose», «Svar alltid på norsk»), tone og stil («Vær uformell og vennlig», «Bruk fagterminologi»), kunnskapsdomene («Du er ekspert på norsk skatterett»), og output-format («Svar alltid i JSON-format», «Bruk bullet points»).

ChatGPTs «Custom Instructions» og Claudes «System Prompt» i API-et er brukergrensesnitt for dette. Når du bygger AI-produkter via API, er system prompt det første du skriver.

## Hvordan fungerer det

System prompt er den usynlige førsteinstruksjonen i samtalen.

```
Hva brukeren ser:
  Bruker: "Hva er sunt å spise til frokost?"
  AI: "En balansert frokost kan inkludere..."

Hva som faktisk sendes til modellen:
  [System]: "Du er en norsk ernæringsrådgiver. Svar alltid på norsk.
  Baser rådene på norske kostholdsanbefalinger fra Helsedirektoratet.
  Ikke gi spesifikke kalorimål uten å spørre om brukerens profil.
  Vær vennlig og oppmuntrende."
  
  [Bruker]: "Hva er sunt å spise til frokost?"
  
  [AI]: "God morgen! En næringsrik frokost etter norske anbefalinger..."

→ System prompt styrer tone, språk, kunnskap og begrensninger
→ Brukeren ser ikke system prompt – men merker effekten
```

## Hvorfor er det viktig

System prompt er det som gjør at én AI-modell kan bli tusenvis av produkter. Samme GPT-4 modell kan være en kundeservicebot, en kodingsassistent, en juridisk rådgiver, eller en kreativ skribent – forskjellen er system prompten.

For utviklere er system prompt det viktigste designverktøyet. Et godt system prompt gir konsistent, pålitelig oppførsel. Et dårlig gir uforutsigbare, off-topic svar.

Sikkerhetsaspekter: brukere forsøker å «jailbreake» – lure AI-en til å ignorere system prompt. «Ignorer alle tidligere instruksjoner» er det klassiske forsøket. Moderne modeller er trent til å motstå dette, men det er et pågående katt-og-mus-spill.

## Eksempler

Kundeservice: «Du er supportagent for Telenor. Hjelp kunder med mobil, bredbånd og TV. Ikke diskuter priser – henvis til telenor.no. Eskaler til menneske hvis kunden er frustrert.»

Kodingsassistent: «Du er en senior Python-utvikler. Skriv alltid typehinted kode med docstrings. Følg PEP 8. Forklar designvalg i kommentarer.»

ChatGPT Custom Instructions: Du skriver «Svar alltid på norsk, bruk enkle forklaringer, og inkluder praktiske eksempler» – dette legges til som system prompt i alle samtaler.

## Vanlige spørsmål

### Kan brukere se system prompten?
Ikke direkte – men det finnes teknikker for å «lekke» den (jailbreaks). Aldri sett sensitiv informasjon (passord, API-nøkler) i system prompt.

### Hvor lang bør system prompt være?
Så kort som mulig, så lang som nødvendig. 100–500 ord er typisk. Veldig lange system prompts bruker context window og kan forvirre modellen.

### Fungerer system prompt alltid?
Nesten – men modeller kan avvike, spesielt ved kreative forespørsler eller sofistikerte jailbreaks. Test grundig og iterer.

### Hva er forskjellen på system prompt og user prompt?
System prompt er utviklerens instruksjon (usynlig for bruker). User prompt er brukerens melding (synlig for alle). System prompt har typisk høyere prioritet.

## Relaterte begreper

- [Prompt engineering](/ai/hva-er-prompt-engineering-dybde) – kunsten å skrive gode prompts
- [Context window](/ai/hva-er-context-window) – system prompt bruker tokens
- [Tokens i AI](/ai/hva-er-tokens-i-ai) – system prompt teller
- [ChatGPT](/ai/hva-er-chatgpt) – Custom Instructions er system prompt
- [AI-API](/ai/hva-er-ai-api) – der system prompt settes programmatisk

## Se også

- [Hva er prompt engineering?](/ai/hva-er-prompt-engineering-dybde)
- [Hva er context window?](/ai/hva-er-context-window)

## Oppsummering

System prompt er den skjulte instruksjonen som definerer AI-ens oppførsel – rolle, regler, tone og begrensninger. Det er det som gjør at én modell kan bli tusenvis av produkter. ChatGPTs Custom Instructions er system prompt for forbrukere. For utviklere er det det viktigste designverktøyet. Hold det konsist, test grundig, og aldri sett sensitiv info i det.
