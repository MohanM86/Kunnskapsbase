---
title: "Hva er temperatur i AI?"
slug: "hva-er-temperatur-i-ai"
category: "AI"
subcategory: "spraakmodeller"
description: "Temperatur er en innstilling som kontrollerer hvor kreativ eller forutsigbar en AI-modell er. Lær hvordan temperatur fungerer og når du bør justere den."
keywords: ["temperatur AI", "temperature", "kreativitet AI", "top-p", "sampling", "AI-innstillinger"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 5
draft: false
entityType: "Concept"
topic: "Temperatur"
aliases: ["temperature", "AI-temperatur", "modelltemperatur", "sampling temperature"]
related: ["hva-er-store-spraakmodeller", "hva-er-tokens", "hva-er-prompt-engineering-dybde"]
seeAlso: ["hva-er-generativ-ai", "hva-er-hallusinering-i-ai"]
tags: ["temperatur", "sampling", "LLM", "AI-innstillinger"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er temperatur i AI?

Temperatur er en parameter som kontrollerer graden av tilfeldighet i en AI-modells svar. Lav temperatur gjør modellen mer forutsigbar og konservativ – den velger de mest sannsynlige ordene. Høy temperatur gjør modellen mer kreativ og variert – den utforsker mindre sannsynlige men potensielt mer interessante ordvalg.

> **Kort forklart**
> Temperatur er en «kreativitetsbryter» for AI. Lav temperatur gir presise, konsistente svar. Høy temperatur gir mer kreative, varierte svar. Velg basert på om du trenger nøyaktighet eller originalitet.

## Hvordan temperatur fungerer teknisk

Når en språkmodell genererer tekst, beregner den en sannsynlighetsfordeling over alle mulige neste tokens. For setningen «Norges hovedstad er» kan de mest sannsynlige neste tokenene være «Oslo» med 95 % sannsynlighet, «byen» med 2 %, «en» med 1 % og resten med svært lav sannsynlighet.

Temperatur justerer denne sannsynlighetsfordelingen før modellen velger neste token. Lav temperatur (0,0–0,3) gjør fordelingen spissere, slik at det mest sannsynlige tokenet velges nesten alltid. «Oslo» ville blitt valgt med tilnærmet 100 % sannsynlighet. Middels temperatur (0,5–0,8) beholder en viss variasjon men favoriserer fortsatt sannsynlige tokens. «Oslo» ville blitt valgt i de aller fleste tilfeller, men noen ganger kunne alternative formuleringer oppstå. Høy temperatur (0,9–2,0) flater ut fordelingen slik at mindre sannsynlige tokens har reell sjanse for å bli valgt. Modellen kan produsere uventede og kreative formuleringer.

Ved temperatur 0 er modellen helt deterministisk – den velger alltid det mest sannsynlige tokenet og gir identiske svar for identisk input.

## Når bruke lav temperatur

Lav temperatur (0,0–0,3) er best for oppgaver som krever nøyaktighet og konsistens. Faktaspørsmål der du vil ha det korrekte svaret, ikke en kreativ variant. Koding der du vil ha fungerende kode, ikke eksperimentell syntaks. Klassifisering der konsistens er viktigere enn variasjon. Datautvinning der du vil ha presise, strukturerte svar. Oversettelse der nøyaktighet er viktigere enn stilistisk variasjon.

## Når bruke høy temperatur

Høy temperatur (0,7–1,2) er best for oppgaver som krever kreativitet og variasjon. Kreativ skriving der du vil ha originale formuleringer og uventede vinklinger. Brainstorming der du vil ha mange forskjellige idéer. Historiefortelling der uforutsigbarhet og overraskelser er ønskelig. Markedsføring der du vil ha fengende, unike tekster. Navnforslag der du vil ha bred variasjon i forslag.

## Top-p (nucleus sampling)

Top-p er en alternativ parameter som også kontrollerer tilfeldighet, men på en annen måte. I stedet for å justere sannsynlighetsfordelingen, begrenser top-p modellen til å velge blant de mest sannsynlige tokenene som til sammen utgjør en gitt sannsynlighet.

Med top-p satt til 0,9 velger modellen blant tokens som til sammen utgjør 90 % sannsynlighet. De minst sannsynlige 10 % av tokens ekskluderes helt. Dette forhindrer at modellen velger svært usannsynlige tokens selv ved høyere temperatur, noe som reduserer risikoen for absurde svar.

De fleste API-er lar deg justere både temperatur og top-p, men det anbefales typisk å justere én av dem og la den andre stå på standardverdi.

## Temperatur i ulike AI-tjenester

ChatGPT og Claude sitt webgrensesnitt lar ikke brukeren justere temperatur direkte – den er satt til en standardverdi som balanserer nøyaktighet og variasjon. Via API har utviklere full kontroll over temperaturinnstillingen.

De fleste API-er bruker en standardtemperatur på 0,7–1,0. Anthropics Claude API har en standard på 1,0. OpenAIs API har en standard på 1,0. Google Gemini API har en standard på en verdi som varierer per modell.

## Temperatur og hallusinering

Høy temperatur øker risikoen for hallusinering fordi modellen er mer villig til å velge usannsynlige tokens. For oppgaver der faktisk nøyaktighet er kritisk – som medisinsk informasjon, juridisk rådgivning eller teknisk dokumentasjon – bør du bruke lav temperatur.

Omvendt kan for lav temperatur gjøre modellen repetitiv og kjedelig. Den vil gjenta de samme formuleringene og unngå enhver variasjon. For kreative oppgaver kan dette gi livløse, generiske resultater.

## Praktiske anbefalinger

For de fleste brukstilfeller er disse temperaturverdiene et godt utgangspunkt. For faktabaserte svar bruk 0,0–0,2. For profesjonell skriving bruk 0,3–0,5. For generell samtale bruk 0,7–0,8. For kreativ skriving bruk 0,8–1,0. For brainstorming og idégenerering bruk 1,0–1,3.

Eksperimenter med verdiene for ditt spesifikke brukstilfelle – det finnes ingen universelt «riktig» temperatur.

## Andre samplingsparametere

Utover temperatur og top-p finnes andre parametere som påvirker generering. Frequency penalty reduserer sannsynligheten for å gjenta tokens som allerede er brukt, noe som gir mer variert tekst. Presence penalty øker sannsynligheten for å introdusere nye temaer, nyttig for å unngå repetisjon. Max tokens setter en grense for hvor langt svaret kan bli.

Disse parameterne kan kombineres med temperatur for å finjustere modellens oppførsel presist.

## Ofte stilte spørsmål

### Hva er standard temperatur?
De fleste modeller bruker 0,7–1,0 som standard. Denne verdien balanserer nøyaktighet og variasjon for generelle brukstilfeller.

### Kan temperatur 0 garantere korrekte svar?
Nei. Temperatur 0 garanterer deterministiske svar (samme input gir alltid samme output), men det betyr ikke at svaret er korrekt. Modellen velger det mest sannsynlige tokenet, som ikke nødvendigvis er det riktige.

### Bør jeg justere temperatur eller top-p?
Generelt anbefales det å justere én av dem og la den andre stå på standard. Temperatur er mer intuitiv for de fleste. Top-p gir mer kontroll over de ekstreme tilfellene.

### Kan jeg justere temperatur i ChatGPT?
Ikke i webgrensesnittet, men via OpenAIs API har du full kontroll over temperatur og andre samplingsparametre.
