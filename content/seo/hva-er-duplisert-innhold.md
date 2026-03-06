---
title: "Hva er duplisert innhold?"
slug: "hva-er-duplisert-innhold"
category: "SEO"
subcategory: "Innhold"
description: "Duplisert innhold oppstår når identisk eller svært likt innhold finnes på flere URL-er. Lær hvorfor det er et problem for SEO og hvordan du løser det."
keywords: ["duplisert innhold", "duplicate content", "canonical", "innholdskanibalisering", "thin content"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Duplisert innhold"
aliases: ["duplicate content", "duplikat innhold", "innholdsduplikering"]
related: ["hva-er-on-page-seo", "hva-er-teknisk-seo", "hva-er-crawling-og-indeksering"]
seeAlso: ["hva-er-meta-tags", "hva-er-intern-lenking"]
tags: ["duplisert innhold", "canonical", "teknisk SEO", "innhold"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er duplisert innhold?

Duplisert innhold refererer til innhold som er identisk eller vesentlig likt på flere forskjellige URL-er, enten innenfor samme nettsted eller på tvers av ulike nettsteder. For søkemotorer skaper dette et dilemma – hvilken versjon skal de indeksere og vise i søkeresultatene?

> **Kort forklart**
> Duplisert innhold forvirrer søkemotorer fordi de ikke vet hvilken versjon av innholdet som skal rangere. Det tynner ut rangeringskraften og kan føre til at ingen av versjonene rangerer godt.

## Hvorfor er duplisert innhold et problem?

Når Google finner identisk innhold på flere URL-er, må den velge hvilken versjon som skal indekseres. Dette kan føre til at feil versjon rangerer i stedet for den du foretrekker, at rangeringskraft fordeles mellom duplikatene i stedet for å konsentreres på én URL, at crawl-budsjett kastes bort på å crawle samme innhold flere ganger, og at tilbakekoblinger spres mellom flere versjoner i stedet for å styrke én side.

Det er viktig å forstå at Google sjelden straffer duplisert innhold med en manuell handling. I stedet filtrerer de bort duplikater og velger selv hvilken versjon som vises. Problemet er at de ikke nødvendigvis velger den versjonen du foretrekker.

## Vanlige årsaker til duplisert innhold

### Tekniske duplikater

De vanligste formene for duplisert innhold er tekniske og oppstår ofte uten at nettstedseieren er klar over det. URL-varianter er den hyppigste årsaken – samme side kan være tilgjengelig via HTTP og HTTPS, med og uten www, med og uten avsluttende skråstrek, og med ulike URL-parametere som sortering og filtrering.

For eksempel kan én side ha fire URL-varianter: http://eksempel.no/side, https://eksempel.no/side, https://www.eksempel.no/side og https://www.eksempel.no/side/. For Google er dette fire forskjellige URL-er med identisk innhold.

### Skrivertekst og produktbeskrivelser

Nettbutikker opplever ofte duplisert innhold når de bruker produsentens standardbeskrivelser som alle andre forhandlere også bruker, viser samme produkt i flere kategorier med separate URL-er, eller har filtrerings- og sorteringssider som skaper utallige URL-varianter.

### Syndikert innhold

Innhold som publiseres på flere nettsteder – for eksempel pressemeldinger, gjesteinnlegg eller syndikerte artikler – skaper duplikater på tvers av domener. Google vil velge én versjon å vise og kan velge en annen kilde enn den opprinnelige.

### Innholdskanibalisering

Innholdskanibalisering oppstår når flere sider på nettstedet ditt konkurrerer om de samme søkeordene. Selv om innholdet ikke er identisk, kan overlappende tema og søkeord forvirre Google om hvilken side som bør rangere. Resultatet er ofte at begge sidene rangerer dårligere enn én samlet, sterk side ville gjort.

## Løsninger for duplisert innhold

### Canonical tag

Canonical-taggen er den viktigste løsningen for duplisert innhold. Ved å legge til en canonical-tag som peker til den foretrukne URL-en forteller du Google hvilken versjon som er den offisielle. Alle andre versjoner bør peke til den kanoniske URL-en.

Canonical-taggen er et hint til Google, ikke et direktiv. Google følger vanligvis canonical-anvisningen, men kan velge å ignorere den hvis den er inkonsistent med andre signaler.

### 301-omdirigering

301-omdirigering er den sterkeste måten å løse duplisert innhold på. Den sender både brukere og søkemotorer permanent fra den gamle URL-en til den foretrukne. All rangeringskraft overføres til den nye URL-en. Bruk 301-omdirigeringer for å konsolidere URL-varianter, samle innhold fra flere svake sider til én sterk side, og håndtere endrede URL-er etter omstrukturering.

### Noindex

For sider som bør eksistere for brukere men ikke i søkeresultatene kan du bruke noindex meta-taggen. Dette er nyttig for interne søkeresultatsider, filtreringssider i nettbutikker, og utskriftsversjoner av artikler.

### Hreflang

For flerspråklige nettsider der lignende innhold finnes på forskjellige språk, bruker du hreflang-taggen for å fortelle Google at sidene er språkversjoner av hverandre – ikke duplikater.

## Slik oppdager du duplisert innhold

Google Search Console viser sider som Google har ekskludert på grunn av duplikat i indekseringsrapporten under «Sider». Se etter statusene «Duplikat uten valgt kanonisk» og «Duplikat, Google valgte annen kanonisk enn brukeren» – den sistnevnte betyr at Google ignorerer din canonical-tag.

Verktøy som Screaming Frog kan crawle nettstedet ditt og identifisere sider med identisk tittel, meta description eller innhold. Siteliner.com er et gratis verktøy som analyserer prosentandelen duplisert innhold på nettstedet ditt.

For å sjekke om innholdet ditt er duplisert eksternt kan du søke etter en unik setning fra teksten din i anførselstegn på Google og se om andre nettsider viser det samme innholdet.

## Beste praksis

Velg én URL-struktur og hold deg konsekvent til den – bestem om du bruker www eller ikke, med eller uten avsluttende skråstrek. Implementer canonical-tags på alle sider som peker til den foretrukne versjonen. Sett opp 301-omdirigeringer fra alle URL-varianter til den kanoniske. Skriv unike produktbeskrivelser i stedet for å kopiere fra produsenten. Konsolider overlappende innhold i stedet for å ha mange svake sider om samme tema. Bruk parameterhåndtering i Google Search Console for å fortelle Google hvordan URL-parametere skal behandles.

## Ofte stilte spørsmål

### Kan duplisert innhold gi straff fra Google?
I de aller fleste tilfeller nei. Google filtrerer simpelthen bort duplikater og velger én versjon. Manuell straff gis bare i tilfeller der duplisering brukes bevisst for å manipulere søkeresultatene.

### Er det duplisert innhold hvis jeg siterer andre kilder?
Nei, sitater og referanser med kildehenvisning er normalt bruk. Duplisert innhold handler om store mengder identisk tekst uten tilført verdi.

### Hva gjør jeg hvis noen kopierer innholdet mitt?
Sjekk om de har en canonical-tag som peker til din side. Hvis ikke, kontakt nettstedseieren og be om fjerning eller kreditering. I ytterste konsekvens kan du sende en DMCA-klage til Google.

### Er boilerplate-tekst i header og footer duplisert innhold?
Nei. Google forstår at navigasjon, footer og andre gjenbrukselementer er standard nettstedsstruktur. Duplisert innhold handler om hovedinnholdet på siden.
