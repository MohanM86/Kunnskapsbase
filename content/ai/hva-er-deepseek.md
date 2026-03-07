---
title: "Hva er DeepSeek?"
slug: "hva-er-deepseek"
category: "ai"
subcategory: "spraakmodeller"
description: "DeepSeek er et kinesisk AI-selskap som sjokkerte verden med modeller som matcher GPT-4 til en brøkdel av prisen. Lær hva DeepSeek er og hvorfor det endret AI-kappløpet."
keywords: ["DeepSeek", "DeepSeek R1", "kinesisk AI", "billig AI", "reasoning"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "DeepSeek"
aliases: ["DeepSeek AI", "DeepSeek R1"]
related: ["hva-er-kunstig-intelligens", "hva-er-chatgpt", "hva-er-meta-ai-llama", "hva-er-claude", "hva-er-generativ-ai-dybde"]
seeAlso: ["hva-er-chatgpt", "hva-er-meta-ai-llama"]
tags: ["DeepSeek", "ai", "spraakmodeller"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er DeepSeek?

DeepSeek er et kinesisk AI-selskap som i januar 2025 sjokkerte verden med AI-modeller som matcher eller overgår GPT-4 – trent til en brøkdel av kostnadene, og utgitt som åpen kildekode.

> **Kort forklart**
> Alle trodde du trengte milliarder av dollar og tusenvis av toppmoderne NVIDIA-GPUer for å bygge AI på GPT-4-nivå. DeepSeek beviste det motsatte: de trente DeepSeek-V3 og R1 med begrenset maskinvare (pga USAs eksportrestriksjoner på avanserte GPU-er til Kina) og oppnådde resultater som matcher de beste. R1 er en reasoning-modell som tenker steg-for-steg og konkurrerer med OpenAIs o1. DeepSeek er åpen kildekode – modellene er fritt tilgjengelige. Det sendte sjokkbølger gjennom Silicon Valley og NVIDIA-aksjen falt 17 prosent på én dag.

## Hva betyr begrepet

DeepSeek ble grunnlagt i 2023 av Liang Wenfeng, som også driver det kinesiske kvantitative hedgefondet High-Flyer. Selskapet er basert i Hangzhou, Kina.

DeepSeek-modellene inkluderer DeepSeek-V3 som er en generell språkmodell med 671 milliarder parametere (MoE – Mixture of Experts), trent for anslagsvis 5–6 millioner dollar (GPT-4 kostet angivelig 100+ millioner), og som matcher GPT-4 Turbo på de fleste benchmarks. DeepSeek-R1 er en reasoning-modell som «tenker høyt» steg-for-steg, som konkurrerer med OpenAIs o1 på matematikk, koding og logikk, og som er helt åpen kildekode inkludert treningsmetodikken.

Nøkkelinnovasjonen er effektivitet. DeepSeek brukte Mixture of Experts (MoE) der kun en del av modellen aktiveres per forespørsel (spar compute), multi-head latent attention (reduserer minnebruk), og FP8-trening (lavere presisjon = raskere trening). Resultatet er at de oppnådde topp-resultater med en brøkdel av ressursene – noe som utfordrer narrativet om at AI krever ubegrenset kapital.

## Hvordan fungerer det

DeepSeek-R1 bruker «chain-of-thought reasoning» – den tenker seg gjennom problemet.

```
Spørsmål: "Hva er 27 × 43?"

Vanlig LLM: "1161" (direkte svar, kan feile)

DeepSeek-R1: 
<thinking>
La meg dele dette opp:
27 × 43 = 27 × 40 + 27 × 3
27 × 40 = 1080
27 × 3 = 81
1080 + 81 = 1161
</thinking>
Svaret er 1161.

→ Synlig tankeprosess → Færre feil → Bedre på komplekse oppgaver
```

## Hvorfor er det viktig

DeepSeek endret tre narrativer i AI-industrien. Kostnad: du trenger IKKE milliarder for topp-AI – effektiv trening kan oppnå det samme. Åpenhet: DeepSeek publiserte alt åpent, noe som akselererer global AI-utvikling. Geopolitikk: USAs eksportrestriksjoner på GPU-er til Kina stoppet ikke kinesisk AI – det tvang frem innovasjon i effektivitet.

For brukere betyr det billigere AI (DeepSeek API er 10–50× billigere enn OpenAI), åpne alternativer (du kan kjøre R1 lokalt), og konkurransepress (OpenAI, Google og Anthropic må innovere raskere).

## Eksempler

NVIDIA-sjokk: Da DeepSeek-R1 ble lansert, falt NVIDIAs markedsverdi med ~600 milliarder dollar på én dag – markedet fryktet at AI-etterspørselen etter dyre GPU-er ville falle.

Koding: DeepSeek-R1 scorer topp på kodingsoppgaver – mange utviklere byttet fra GPT-4 til DeepSeek for programmeringsoppgaver pga bedre resultater og lavere pris.

Åpen kildekode: Tusenvis av selskaper og utviklere bruker DeepSeek-modellene som grunnlag for egne produkter – uten lisenskostnader.

## Vanlige spørsmål

### Er DeepSeek trygt å bruke?
Modellene er åpen kildekode og kan kjøres lokalt. Men DeepSeek API-et er hostet i Kina – data kan potensielt være underlagt kinesisk lovgivning. For sensitiv data: kjør lokalt.

### Er DeepSeek bedre enn ChatGPT?
R1 matcher eller slår o1 på reasoning-oppgaver. For generell samtale og kreativ skriving er GPT-4/Claude fortsatt sterke. Avhenger av bruksområdet.

### Kan jeg kjøre DeepSeek lokalt?
Ja – modellene er åpne. DeepSeek-R1 finnes i destillerte versjoner (7B, 14B, 32B, 70B) som kan kjøres med Ollama på kraftige laptoper/desktoper.

### Hvorfor er DeepSeek så billig?
MoE-arkitektur (kun del av modellen aktiveres), effektiv treningsmetodikk, og lavere kostnader i Kina. API-prisene er 10–50× lavere enn OpenAI.

## Relaterte begreper

- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet
- [ChatGPT](/ai/hva-er-chatgpt) – den primære konkurrenten
- [Meta AI og Llama](/ai/hva-er-meta-ai-llama) – en annen åpen modell
- [Claude](/ai/hva-er-claude) – Anthropics alternativ
- [Generativ AI](/ai/hva-er-generativ-ai-dybde) – kategorien DeepSeek tilhører

## Se også

- [Hva er ChatGPT?](/ai/hva-er-chatgpt)
- [Hva er Meta AI og Llama?](/ai/hva-er-meta-ai-llama)

## Oppsummering

DeepSeek er et kinesisk AI-selskap som beviste at topp-AI kan bygges billig og åpent. DeepSeek-R1 matcher OpenAIs o1 på reasoning. Modellene er åpen kildekode. Det utfordret narrativet om at AI krever ubegrenset kapital og sendte sjokkbølger gjennom hele industrien. For brukere betyr det billigere, åpne AI-alternativer.
