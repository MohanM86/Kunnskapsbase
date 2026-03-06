---
title: "Hva er HTTPS?"
slug: "hva-er-https"
category: "SEO"
subcategory: "Teknisk"
description: "HTTPS er den sikre versjonen av HTTP som krypterer dataoverføring mellom nettleser og server. Lær hvorfor HTTPS er viktig for SEO og hvordan du implementerer det."
keywords: ["HTTPS", "SSL", "TLS", "sikker nettside", "SSL-sertifikat", "kryptering"]
date: "2026-03-06"
lastReviewed: "2026-03-06"
author: "Kunnskapsbase"
readingTime: 6
draft: false
entityType: "Concept"
topic: "HTTPS og sikkerhet"
aliases: ["SSL", "TLS", "HTTPS-sikkerhet", "SSL-sertifikat"]
related: ["hva-er-teknisk-seo", "hva-er-seo", "hva-er-core-web-vitals"]
seeAlso: ["hva-er-301-omdirigering", "hva-er-seo-vennlige-urler"]
tags: ["HTTPS", "SSL", "sikkerhet", "teknisk SEO"]
updatedAt: "2026-03-06"
featured: false
contentType: "knowledge-article"
difficulty: "beginner"
---

# Hva er HTTPS?

HTTPS (HyperText Transfer Protocol Secure) er den sikre versjonen av HTTP – protokollen som brukes for å overføre data mellom nettleseren din og nettsiden du besøker. HTTPS bruker SSL/TLS-kryptering for å beskytte dataene som sendes, slik at tredjeparter ikke kan avlytte eller manipulere kommunikasjonen.

> **Kort forklart**
> HTTPS er hengelåsen du ser i nettleserens adresselinje. Det betyr at forbindelsen mellom deg og nettsiden er kryptert og sikker. Google har gjort HTTPS til en rangeringsfaktor, og nettlesere merker HTTP-sider som «Ikke sikker».

## Hvorfor er HTTPS viktig for SEO?

Google bekreftet allerede i 2014 at HTTPS er en rangeringsfaktor. Selv om signalet i seg selv er lite sammenlignet med innholdskvalitet og tilbakekoblinger, kan det utgjøre forskjellen mellom to ellers like sider. I tillegg merker Chrome og andre nettlesere HTTP-sider med en tydelig «Ikke sikker»-advarsel, noe som skremmer bort besøkende og øker fluktfrekvensen.

HTTPS er i dag en grunnleggende forventning – ikke et konkurransefortrinn. Nettsider uten HTTPS oppfattes som uprofesjonelle og utdaterte.

## SSL vs. TLS

Begrepene SSL og TLS brukes ofte om hverandre, men teknisk sett er de ulike. SSL (Secure Sockets Layer) er den eldre protokollen som ikke lenger anses som sikker. TLS (Transport Layer Security) er den moderne etterfølgeren som brukes i dag. Når folk snakker om «SSL-sertifikat» mener de i praksis et TLS-sertifikat.

Dagens standard er TLS 1.3, som gir raskere forbindelsesoppsett og sterkere kryptering enn tidligere versjoner.

## Slik fungerer HTTPS

Når du besøker en HTTPS-side skjer det en prosess kalt TLS-håndtrykk. Nettleseren kontakter serveren og ber om en sikker forbindelse. Serveren svarer med sitt SSL/TLS-sertifikat som inneholder den offentlige nøkkelen. Nettleseren verifiserer at sertifikatet er gyldig og utstedt av en betrodd sertifikatmyndighet. Nettleser og server blir enige om en krypteringsmetode og oppretter en kryptert forbindelse. All påfølgende kommunikasjon er kryptert og beskyttet.

Denne prosessen skjer på millisekunder og er usynlig for brukeren.

## Typer SSL/TLS-sertifikater

Det finnes tre nivåer av SSL-sertifikater. **DV (Domain Validation)** er det enkleste og vanligste. Det verifiserer bare at du kontrollerer domenet. Utstedelse tar minutter og er ofte gratis via Let's Encrypt. DV-sertifikater er tilstrekkelige for de aller fleste nettsider.

**OV (Organization Validation)** verifiserer i tillegg at organisasjonen bak domenet er reell. Utstedelse tar dager og krever dokumentasjon. OV gir litt mer tillit men vises likt i nettleseren som DV.

**EV (Extended Validation)** krever grundig verifisering av organisasjonen. Historisk viste nettlesere et grønt firmanavn i adresselinjen for EV, men de fleste nettlesere har fjernet denne visuelle forskjellen. EV gir ingen SEO-fordel over DV.

For de aller fleste nettsider er et gratis DV-sertifikat fra Let's Encrypt fullt ut tilstrekkelig for både sikkerhet og SEO.

## Implementering av HTTPS

### Skaff sertifikat

De fleste hostingleverandører tilbyr automatisk og gratis SSL via Let's Encrypt. For Vercel, Netlify og Cloudflare er HTTPS automatisk aktivert. For tradisjonell hosting kan du aktivere Let's Encrypt via kontrollpanelet, eller kjøpe et sertifikat fra en leverandør som Comodo eller DigiCert.

### Konfigurer serveren

Etter installering av sertifikatet må serveren konfigureres til å bruke HTTPS. De fleste moderne plattformer håndterer dette automatisk. For Apache og Nginx kreves manuell konfigurasjon av SSL-modulen med riktig sertifikat- og nøkkelfil.

### Omdiriger HTTP til HTTPS

Sett opp en 301-omdirigering fra alle HTTP-URL-er til HTTPS-versjonen. Dette sikrer at brukere og søkemotorer alltid lander på den sikre versjonen, og at rangeringskraft konsolideres på HTTPS-URL-ene.

### Oppdater interne referanser

Etter migrering til HTTPS bør du oppdatere alle interne lenker til å bruke HTTPS, oppdatere canonical-tags til HTTPS-versjoner, oppdatere sitemapen med HTTPS-URL-er, og sjekke at bilder, CSS og JavaScript lastes via HTTPS for å unngå «mixed content»-advarsler.

## Mixed content

Mixed content oppstår når en HTTPS-side laster ressurser (bilder, skript, stilark) via usikker HTTP. Nettlesere viser advarsler eller blokkerer disse ressursene, noe som kan ødelegge sidens utseende og funksjonalitet.

Etter migrering til HTTPS bør du gjennomgå alle sider for mixed content. Søk etter hardkodede HTTP-URL-er i HTML, CSS og JavaScript. Verktøy som Why No Padlock og Chrome DevTools-konsollen kan identifisere mixed content-problemer.

## HTTPS og ytelse

En vanlig bekymring er at HTTPS er tregere enn HTTP på grunn av krypteringsoverhead. Med TLS 1.3 og moderne servere er denne forskjellen neglisjerbar – typisk under 10 millisekunder. I tillegg krever HTTP/2 og HTTP/3 HTTPS, og disse nyere protokollene er betydelig raskere enn HTTP/1.1. I praksis kan HTTPS-sider derfor være raskere enn HTTP-sider.

## HTTPS-migrering og SEO

Migrering fra HTTP til HTTPS er en teknisk operasjon som kan påvirke rangeringer midlertidig. For å minimere risiko bør du implementere korrekte 301-omdirigeringer fra alle HTTP-URL-er, oppdatere Google Search Console med HTTPS-versjonen av nettstedet, sende inn ny sitemap med HTTPS-URL-er, overvåke indeksering og trafikk tett i ukene etter migrering, og oppdatere tilbakekoblinger der det er mulig.

De fleste nettsider opplever en kort periode med fluktasjon etter HTTPS-migrering, men rangeringene stabiliserer seg typisk innen noen uker.

## HTTPS for norske nettsider

I Norge er HTTPS spesielt viktig for nettsider som behandler persondata under GDPR, nettbutikker som håndterer betalingsinformasjon, offentlige tjenester som borgere forventer er sikre, og bedrifter som vil fremstå profesjonelle og troverdige.

De fleste norske hostingleverandører som Domene.shop, PRO ISP og One.com tilbyr gratis SSL-sertifikater. Det er i dag ingen god grunn for noen norsk nettside å ikke bruke HTTPS.

## Ofte stilte spørsmål

### Er HTTPS gratis?
Ja, med Let's Encrypt kan du få et fullverdig SSL/TLS-sertifikat helt gratis. De fleste hostingleverandører tilbyr automatisk oppsett.

### Trenger jeg HTTPS hvis jeg ikke samler inn data?
Ja. Google bruker HTTPS som rangeringsfaktor uavhengig av om du samler inn data. I tillegg merker nettlesere HTTP-sider som «Ikke sikker», noe som påvirker brukertillit.

### Hvor ofte må SSL-sertifikatet fornyes?
Let's Encrypt-sertifikater varer i 90 dager og fornyes vanligvis automatisk. Kommersielle sertifikater varer typisk 1–2 år.

### Kan HTTPS påvirke sidehastigheten negativt?
Med moderne TLS 1.3 er påvirkningen neglisjerbar. HTTPS er en forutsetning for HTTP/2 og HTTP/3 som faktisk gir raskere sidelasting. I praksis er HTTPS-sider ofte raskere enn HTTP.
