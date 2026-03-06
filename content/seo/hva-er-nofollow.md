---
title: "Hva er nofollow?"
slug: "hva-er-nofollow"
category: "SEO"
subcategory: "Off-page"
description: "Nofollow er et lenkeattributt som forteller søkemotorer at du ikke ønsker å gi rangeringskraft via en lenke. Lær om nofollow, sponsored, UGC og når du bør bruke dem."
keywords: ["nofollow", "rel nofollow", "dofollow", "sponsored", "UGC", "lenkeattributt"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Nofollow"
aliases: ["rel nofollow", "nofollow-lenke", "nofollow-attributt", "nofollow link"]
related: ["hva-er-lenkebygging", "hva-er-ankertekst", "hva-er-backlink-analyse"]
seeAlso: ["hva-er-intern-lenking", "hva-er-domeneautoritet"]
tags: ["nofollow", "dofollow", "lenkeattributt", "off-page SEO"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er nofollow?

Nofollow er et HTML-attributt som legges til lenker for å fortelle søkemotorer at du ikke ønsker å «stemme for» den lenkede siden. Opprinnelig betydde nofollow at søkemotorer verken skulle følge lenken eller overføre rangeringskraft. Siden 2019 behandler Google nofollow som et hint – de kan velge å følge og gi verdi til nofollow-lenker, men gir dem typisk mindre vekt enn vanlige (dofollow) lenker.

> **Kort forklart**
> Nofollow er en måte å lenke til en side uten å gi den full SEO-verdi. Bruk det for betalte lenker, brukergenert innhold og lenker du ikke kan gå god for.

## Historien bak nofollow

Nofollow ble introdusert i 2005 av Google, Yahoo og Microsoft som et svar på kommentarspam. Spammere la inn lenker i bloggkommentarer for å bygge tilbakekoblinger, og nofollow ga nettstedeiere mulighet til å si «denne lenken er ikke en anbefaling fra oss».

I 2019 oppdaterte Google nofollow-behandlingen fundamentalt. I stedet for å ignorere nofollow-lenker helt, behandler Google dem nå som et hint. Det betyr at Google kan velge å crawle og tildele noe verdi til nofollow-lenker hvis de vurderer det som nyttig.

## Lenkeattributtene

### rel="nofollow"

Det opprinnelige attributtet som signaliserer at du ikke ønsker å overføre rangeringskraft. Bruk det som en generell indikasjon på at lenken ikke er en redaksjonell anbefaling.

### rel="sponsored"

Introdusert i 2019 for å merke betalte lenker – lenker som er del av en annonse, sponsoravtale eller annet betalt samarbeid. Google anbefaler å bruke sponsored i stedet for nofollow for betalte lenker, da det gir et mer spesifikt signal.

### rel="ugc"

UGC (User Generated Content) er for lenker i brukergenerert innhold som kommentarer, foruminnlegg og brukerprofiler. Det forteller Google at lenken er plassert av en bruker, ikke av nettstedets redaksjon.

### Dofollow

Dofollow er ikke et faktisk HTML-attributt – det er bare fraværet av nofollow, sponsored eller UGC. En vanlig lenke uten noen av disse attributtene er en dofollow-lenke som overfører full rangeringskraft.

## Når bør du bruke nofollow?

### Betalte og sponsede lenker

Google krever at betalte lenker merkes med rel="sponsored" eller rel="nofollow". Dette inkluderer annonselenker, sponsede blogginnlegg, affiliate-lenker og lenker i byttehandler. Å ikke merke betalte lenker bryter Googles retningslinjer og kan føre til manuell straff for begge parter.

### Brukergenerert innhold

Lenker i kommentarer, foruminnlegg og brukerprofiler bør merkes med rel="ugc" fordi du ikke kontrollerer kvaliteten. Spammere kan ellers utnytte åpne kommentarfelt for å bygge dofollow-lenker.

### Uverifisert innhold

Lenk med nofollow til sider du ikke kan gå god for – for eksempel kontroversielle kilder, brukerforeslåtte lenker eller innhold du refererer til uten å anbefale.

### Innloggingssider og irrelevante interne sider

Noen bruker nofollow på interne lenker til innloggingssider, handlekurver og andre sider uten SEO-verdi for å «spare» lenke-juice. Denne praksisen er omdiskutert – Google har antydet at de foretrekker andre metoder som noindex for slike sider.

## Nofollow og SEO-verdi

Selv om nofollow-lenker gir mindre direkte SEO-verdi enn dofollow, er de ikke verdiløse. Nofollow-lenker driver referansetrafikk som kan føre til konverteringer og engasjement. De bidrar til en naturlig lenkeprofil, fordi enhver nettside har en blanding av dofollow og nofollow. De kan gi indirekte SEO-effekt gjennom økt synlighet som fører til naturlige dofollow-lenker. Google kan velge å gi noe rangeringskraft til nofollow-lenker de anser som verdifulle.

En lenke fra Wikipedia, selv om den er nofollow, driver trafikk og signaliserer relevans. En nofollow-lenke fra en stor nettavis kan generere oppmerksomhet som fører til dofollow-lenker fra andre kilder.

## Sjekke nofollow-status

Du kan sjekke om en lenke er nofollow på flere måter. I nettleseren kan du høyreklikke på lenken og velge «Inspiser element» for å se HTML-koden og eventuelt rel-attributtet. Nettleserutvidelser som NoFollow, MozBar og Ahrefs SEO Toolbar markerer visuelt nofollow-lenker på sider du besøker. SEO-verktøy som Ahrefs og SEMrush viser nofollow/dofollow-status i sine lenkeanalyserapporter.

## Nofollow i praksis

### Sosiale medier

Nesten alle lenker fra sosiale medier som Facebook, Twitter, LinkedIn og Instagram er nofollow. Sosiale lenker gir derfor ingen direkte SEO-verdi, men de driver trafikk og kan indirekte føre til dofollow-lenker fra andre kilder.

### Wikipedia

Alle eksterne lenker fra Wikipedia er nofollow. Likevel er Wikipedia-lenker verdifulle for trafikk, troverdighet og indirekte lenkebygging.

### Pressemeldinger

Lenker i pressemeldinger bør være nofollow. Google har uttalt at de ikke gir SEO-verdi til lenker i distribuerte pressemeldinger, og forsøk på å bygge dofollow-lenker via pressemeldinger kan oppfattes som manipulativt.

### Gjesteposter

Lenker i gjesteposter befinner seg i en gråsone. Google ønsker at gjesteposter primært handler om å dele ekspertise, ikke om lenkebygging. Overdreven bruk av dofollow-lenker i gjesteposter – spesielt med eksakt match-ankertekst – kan trigge Googles spamfiltre.

## Naturlig nofollow/dofollow-distribusjon

En sunn lenkeprofil har en naturlig blanding av dofollow og nofollow-lenker. Typisk er 60–80 % dofollow og 20–40 % nofollow normalt. En lenkeprofil med 100 % dofollow kan se unaturlig ut og indikere manipulativ lenkebygging.

Ikke forsøk å manipulere forholdet aktivt. Fokuser på å bygge kvalitetslenker, og fordelingen vil naturlig bli sunn.

## Ofte stilte spørsmål

### Er nofollow-lenker verdiløse?
Nei. De gir mindre direkte SEO-verdi enn dofollow, men de driver trafikk, bygger merkevaresynlighet og bidrar til en naturlig lenkeprofil. Google kan også velge å gi noe rangeringskraft til nofollow-lenker.

### Bør jeg be om dofollow-lenker i gjesteposter?
Vær forsiktig. Én naturlig lenke i gjesteposter er akseptabelt, men å insistere på dofollow med eksakt match-ankertekst kan se manipulativt ut. La lenken passe naturlig i innholdet.

### Hva skjer hvis jeg ikke merker betalte lenker?
Du risikerer en manuell straff fra Google, som kan påvirke rangeringen for hele nettstedet. Merk alltid betalte lenker med rel="sponsored" eller rel="nofollow".

### Gir rel="sponsored" og rel="ugc" noen SEO-verdi?
De behandles lignende som nofollow – Google bruker dem som hint og kan velge å gi noe verdi. Hovedforskjellen er at de gir Google mer spesifikk informasjon om lenkens natur.
