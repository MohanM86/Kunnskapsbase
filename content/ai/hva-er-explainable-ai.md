---
title: "Hva er explainable AI (XAI)?"
slug: "hva-er-explainable-ai"
category: "ai"
subcategory: "samfunn"
description: "Explainable AI gjør AI-beslutninger forståelige for mennesker. Lær hva XAI er, hvorfor det kreves av EU AI Act, og teknikkene for å gjøre AI transparent."
keywords: ["explainable AI", "XAI", "forklarbar AI", "AI transparens", "tolkbar AI"]
date: "2026-03-07"
lastReviewed: "2026-03-07"
author: "Kunnskapsbase"
readingTime: 4
draft: false
entityType: "Concept"
topic: "Explainable AI"
aliases: ["XAI", "forklarbar AI", "tolkbar AI"]
related: ["hva-er-ai-etikk-dybde", "hva-er-bias-i-ai", "hva-er-ai-regulering", "hva-er-eu-ai-act", "hva-er-kunstig-intelligens"]
seeAlso: ["hva-er-ai-etikk-dybde", "hva-er-ai-regulering"]
tags: ["XAI", "ai", "samfunn", "transparens"]
updatedAt: "2026-03-07"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er explainable AI (XAI)?

Explainable AI (XAI) er AI-systemer som kan forklare HVORFOR de tok en bestemt beslutning – i motsetning til «black box»-modeller der selv utviklerne ikke forstår begrunnelsen.

> **Kort forklart**
> En AI avslår lånesøknaden din. Du spør: «Hvorfor?» Svaret «fordi modellen sa det» er uakseptabelt. Du har rett til en forklaring – og EU AI Act krever det for høyrisiko-systemer. XAI gjør AI-beslutninger forståelige: «Lånet ble avslått fordi inntekten er 15 prosent under terskel og betalingshistorikken har 2 forfalte regninger.» Det er forskjellen mellom en svart boks og et transparent system. For medisin, finans og rettsvesen er XAI ikke valgfritt – det er lovpålagt.

## Hva betyr begrepet

«Black box»-problemet er at moderne AI-modeller (spesielt dype nevrale nettverk) er ekstremt komplekse – milliarder av parametere som samhandler på uforståelige måter. Modellen kan gi riktig svar – men INGEN forstår nøyaktig hvorfor. Det er akseptabelt for bildefiltre, men uakseptabelt for medisinsk diagnose, lånesøknader og strafferett.

XAI-teknikker gjør beslutninger forståelige. LIME (Local Interpretable Model-agnostic Explanations) forklarer enkeltbeslutninger ved å teste nærliggende input. SHAP (SHapley Additive exPlanations) beregner hvor mye hvert input-feature bidrar til output. Attention visualization viser hvilke deler av input modellen fokuserte på. Counterfactual explanations forklarer «hva som måtte vært annerledes» – «hvis inntekten var 10 prosent høyere, ville lånet blitt godkjent.» Chain-of-thought for LLM-er der reasoning models viser steg-for-steg tenkning.

## Hvordan fungerer det

XAI gjør «svart boks» til «glassboks.»

```
Black box:
  Input: Lånesøknad → AI → Output: "Avslått"
  Forklaring: Ingen

XAI med SHAP:
  Input: Lånesøknad → AI → Output: "Avslått"
  Forklaring:
    Inntekt: -0,35 (sterk negativ påvirkning)
    Betalingshistorikk: -0,25 (negativ)
    Alder: +0,10 (svak positiv)
    Bosted: +0,05 (nøytral)
  → "Hovedårsak: inntekt under terskel + tidligere forfalte regninger"

XAI med counterfactual:
  "Hvis inntekten var 50 000 kr høyere OG ingen forfalte regninger,
   ville søknaden blitt godkjent."
```

## Hvorfor er det viktig

XAI er lovpålagt for høyrisiko-AI. GDPR artikkel 22 gir rett til forklaring ved automatiserte beslutninger. EU AI Act krever transparens og forklarlighet for høyrisiko-systemer. Norsk forvaltningslov krever begrunnelse for vedtak – inkludert AI-baserte.

Utover lov: XAI bygger tillit. Leger stoler mer på AI-diagnostikk de kan forstå. Kunder aksepterer AI-beslutninger de kan verifisere. Utviklere finner bugs gjennom forklaringer.

## Eksempler

Medisinsk: AI foreslår «mistanke om lungebetennelse.» XAI markerer områdene i røntgenbildet som utløste alarmen – legen kan verifisere visuelt.

Bank: AI avslår lån. XAI: «Hovedårsak: gjeld/inntekt-ratio over 40 prosent.» Kunden vet hva som må endres.

NAV: AI prioriterer saker. XAI: «Denne saken er prioritert fordi ventetid overstiger 90 dager og inntektstap er dokumentert.» Transparent for borgeren.

## Vanlige spørsmål

### Er alle AI-systemer forklarbare?
Nei – dype nevrale nettverk er iboende vanskelige å forklare. XAI-teknikker gir tilnærmede forklaringer – ikke perfekt innsikt.

### Krever loven XAI?
For høyrisiko-systemer (finans, helse, offentlig forvaltning): ja, i økende grad. GDPR og EU AI Act stiller krav.

### Er reasoning models (o1, R1) forklarbare?
Delvis – de viser tankeprosessen (chain-of-thought). Det er mer forklarbart enn vanlige LLM-er, men tankeprosessen er ikke nødvendigvis den «ekte» begrunnelsen.

## Relaterte begreper

- [AI-etikk](/ai/hva-er-ai-etikk-dybde) – det etiske grunnlaget for XAI
- [Bias i AI](/ai/hva-er-bias-i-ai) – XAI avslører bias
- [AI-regulering](/ai/hva-er-ai-regulering) – lovkrav om forklarlighet
- [EU AI Act](/ai/hva-er-eu-ai-act) – spesifikke XAI-krav
- [Kunstig intelligens](/ai/hva-er-kunstig-intelligens) – det overordnede feltet

## Se også

- [Hva er AI-etikk?](/ai/hva-er-ai-etikk-dybde)
- [Hva er AI-regulering?](/ai/hva-er-ai-regulering)

## Oppsummering

Explainable AI gjør AI-beslutninger forståelige – fra «avslått» til «avslått fordi inntekt er under terskel.» SHAP, LIME og counterfactuals er nøkkelteknikkene. Lovpålagt for høyrisiko-AI (GDPR, EU AI Act). Bygger tillit og avslører bias. For medisin, finans og offentlig forvaltning er XAI ikke valgfritt – det er en nødvendighet.
