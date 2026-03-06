---
title: "Hva er robots.txt?"
slug: "hva-er-robots-txt"
category: "SEO"
subcategory: "Teknisk"
description: "Robots.txt er en fil som forteller søkemotorers roboter hvilke deler av nettsiden de kan og ikke kan crawle. Lær syntaksen og vanlige feil."
keywords: ["robots.txt", "crawling", "Googlebot", "disallow", "sitemap", "crawl-kontroll"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "Robots.txt"
aliases: ["robots-fil", "robot exclusion protocol", "robots exclusion"]
related: ["hva-er-crawling-og-indeksering", "hva-er-teknisk-seo", "hva-er-google-search-console"]
seeAlso: ["hva-er-meta-tags", "hva-er-seo-vennlige-urler"]
tags: ["robots.txt", "crawling", "teknisk SEO", "Googlebot"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "intermediate"
---

# Hva er robots.txt?

Robots.txt er en enkel tekstfil som plasseres i roten av nettstedet ditt for å gi instruksjoner til søkemotorers crawlere (roboter). Filen følger Robot Exclusion Protocol og forteller roboter som Googlebot, Bingbot og andre hvilke deler av nettstedet de har lov til å besøke og hvilke de skal holde seg unna.

> **Kort forklart**
> Robots.txt er en «trafikkdirigent» for søkemotorroboter. Den forteller dem hvilke sider de kan crawle og hvilke de bør ignorere – men den er et høflig forslag, ikke et sikkerhetsverktøy.

## Hvordan robots.txt fungerer

Når en søkemotorcrawler besøker nettstedet ditt, sjekker den først filen `dittnettsted.no/robots.txt`. Basert på instruksjonene der bestemmer crawleren hvilke sider den kan crawle. Filen må ligge nøyaktig i rotmappen og hete eksakt «robots.txt» med små bokstaver.

Det er viktig å forstå at robots.txt er en anbefaling, ikke et påbud. Seriøse søkemotorer som Google og Bing respekterer robots.txt, men ondsinnede crawlere og scraper-bots kan ignorere den. Robots.txt er altså ikke et sikkerhets- eller personvernverktøy.

## Syntaks og regler

Robots.txt bruker en enkel syntaks med fire hoveddirektiver. **User-agent** spesifiserer hvilken robot regelen gjelder for. Stjernetegnet betyr alle roboter, mens «Googlebot» gjelder bare Google. **Disallow** blokkerer tilgang til en spesifikk sti eller mappe. **Allow** gir eksplisitt tillatelse, nyttig for å tillate undersider i en ellers blokkert mappe. **Sitemap** peker til nettstedets XML-sitemap.

En grunnleggende robots.txt som tillater alt ser ut som en User-agent-linje med stjerne og en tom Disallow-linje. En fil som blokkerer en spesifikk mappe har User-agent med stjerne og Disallow etterfulgt av mappestien.

Reglene leses ovenfra og ned, og den mest spesifikke regelen vinner. Hvis du blokkerer en hel mappe men tillater en spesifikk fil inne i mappen, vil Allow-regelen gjelde for den filen.

## Hva bør du blokkere?

Typiske sider som bør blokkeres i robots.txt er admin-paneler og innloggingssider som ikke har SEO-verdi, interne søkeresultatsider som kan skape enorme mengder tynne duplikatsider, handlevognssider og utsjekking som ikke bør indekseres, testmiljøer og staging-sider, og skrivertilhørende sider som takkesider og bekreftelser.

## Hva bør du IKKE blokkere?

Blokker aldri CSS- og JavaScript-filer som trengs for å rendere sidene dine. Google trenger tilgang til disse for å forstå hvordan sidene ser ut og fungerer. Å blokkere renderingsressurser kan føre til at Google ikke kan vurdere mobilbrukbarhet og sideinnhold korrekt.

Blokker heller ikke bilder med mindre du har en spesifikk grunn. Bildesøk kan drive trafikk, og Google trenger tilgang til bilder for å forstå sideinnholdet fullt ut.

## Robots.txt og indeksering

En vanlig misforståelse er at robots.txt hindrer indeksering. Det gjør den ikke. Robots.txt hindrer crawling – altså at roboten besøker og leser siden. Men hvis andre nettsider lenker til en side du har blokkert i robots.txt, kan Google likevel indeksere URL-en – bare uten å ha lest innholdet. Resultatet er en indeksert side med manglende tittel og beskrivelse.

For å forhindre indeksering bør du bruke noindex meta-taggen i stedet for eller i tillegg til robots.txt. Men vær oppmerksom på at Google må kunne crawle siden for å se noindex-taggen. Å blokkere en side i robots.txt og samtidig bruke noindex fungerer altså ikke – Google ser aldri taggen.

## Testing og validering

Google Search Console har et innebygd verktøy for å teste robots.txt. Under «Innstillinger» kan du se den aktuelle filen og teste om spesifikke URL-er er blokkert. Bruk dette for å verifisere at viktige sider er tilgjengelige og at blokkering fungerer som tiltenkt.

Du kan også teste robots.txt lokalt ved å besøke `dittnettsted.no/robots.txt` i nettleseren. Filen bør være lesbar og vise instruksjonene du har konfigurert.

## Vanlige feil

De vanligste robots.txt-feilene er å blokkere hele nettstedet utilsiktet med Disallow på rotmappen. En enkelt skråstrek etter Disallow blokkerer alt – dette gjøres noen ganger under utvikling og glemmes ved lansering, med katastrofale konsekvenser for synligheten.

Andre vanlige feil er å blokkere CSS og JavaScript som hindrer Google fra å rendere sidene korrekt, inkonsistens mellom robots.txt og noindex der du blokkerer en side i robots.txt men også bruker noindex som Google aldri ser, manglende sitemap-referanse der du glemmer å peke til sitemapen i robots.txt, og feil filplassering der filen ikke ligger i rotmappen eller har feil navn.

## Crawl budget og robots.txt

For store nettsider med hundretusenvis av sider kan robots.txt brukes strategisk for å styre crawl-budsjett. Ved å blokkere irrelevante sider som filtrerings-URL-er, internt søk og dupliserte arkivsider kan du sørge for at Googlebot bruker tiden sin på de viktigste sidene.

For små og mellomstore nettsider er crawl budget sjelden et problem, og robots.txt trenger ikke å brukes for dette formålet.

## Robots.txt for norske nettsider

For de fleste norske nettsider er en enkel robots.txt tilstrekkelig. Den bør tillate all crawling av innholdssider, blokkere admin- og testområder, inkludere en referanse til XML-sitemapen, og eventuelt blokkere interne søkeresultatsider.

Mange norske CMS-systemer som WordPress genererer robots.txt automatisk. Sjekk at den automatisk genererte filen ikke blokkerer noe viktig, og tilpass den ved behov.

## Ofte stilte spørsmål

### Trenger alle nettsider en robots.txt?
Teknisk sett nei – uten robots.txt vil crawlere anta at hele nettstedet kan crawles. Men det anbefales å ha en, om ikke annet for å peke til sitemapen.

### Kan robots.txt beskytte sensitive data?
Nei. Robots.txt er offentlig lesbar og gir bare en anbefaling til roboter. Bruk autentisering og tilgangskontroll for å beskytte sensitive sider.

### Hva skjer hvis robots.txt har syntaksfeil?
Crawlere kan tolke feil ulikt. Noen ignorerer linjer med feil, andre kan ignorere hele filen. Valider alltid med Google Search Console.

### Hvor ofte sjekker Google robots.txt?
Google cacher robots.txt og sjekker den på nytt med jevne mellomrom, typisk daglig. Etter endringer kan det ta opptil 24 timer før Google oppdager den nye versjonen.
