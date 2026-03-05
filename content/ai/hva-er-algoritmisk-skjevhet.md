---
title: Hva er algoritmisk skjevhet
slug: hva-er-algoritmisk-skjevhet
category: ai
description: Algoritmisk skjevhet er systematiske feil i AI-systemer som fører til urettferdige resultater, ofte som følge av skjeve treningsdata eller designvalg.
keywords: algoritmisk skjevhet, AI-bias, diskriminering, rettferdig AI, maskinlæring, treningsdata, AI-etikk
readingTime: 5 min
updatedAt: "2025-01-15"
---

# Hva er algoritmisk skjevhet

Algoritmisk skjevhet er systematiske og urettferdige feil i AI-systemer som fører til at noen grupper av mennesker behandles dårligere enn andre, ofte som følge av skjeve treningsdata eller bevisste og ubevisste designvalg.

## Hva betyr begrepet

Algoritmisk skjevhet, også kalt AI-bias fra det engelske begrepet, oppstår når et AI-system gir systematisk dårligere resultater for bestemte grupper. Dette kan for eksempel bety at en algoritme er dårligere til å gjenkjenne mørk hud, at et ansettelsessystem nedprioriterer kvinner, eller at et kredittgivningssystem diskriminerer mot innvandrere.

Skjevheten er «algoritmisk» fordi den er bakt inn i selve systemet – ikke nødvendigvis fordi noen ønsket det, men fordi AI-systemer lærer fra data, og data reflekterer historiske og sosiale ulikheter.

Det finnes flere typer skjevhet:

**Dataskjevhet** – Treningsdataene gjenspeiler ikke virkeligheten rettferdig. Hvis ansiktsgjenkjenning trenes nesten utelukkende på hvite ansikter, vil den prestere dårlig på mørkere hud.

**Representasjonsskjevhet** – Noen grupper er underrepresentert i dataene, noe som fører til at modellen ikke lærer å håndtere dem godt.

**Historisk skjevhet** – Dataene er basert på historiske beslutninger som i seg selv var diskriminerende, og modellen viderefører dermed den diskrimineringen.

## Hvordan fungerer det

Problemet starter med treningsdataene. Når en modell trenes på historiske data, lærer den historiske mønstre – inkludert historiske fordommer. Et eksempel: Dersom en bank historisk sett har innvilget færre lån til bestemte grupper, vil en AI trent på denne historikken lære å gjøre det samme.

Skjevhet kan også oppstå i:
- **Valg av treningsdata** – hvem og hva som er inkludert
- **Etiketter på data** – hvem som merket dataene og med hvilke kriterier
- **Modelldesign** – hvilke variabler man velger å inkludere eller utelate
- **Evaluering** – om man tester systemet jevnt på ulike grupper

Selv velmenende designere kan introdusere skjevhet uten å være klar over det.

## Hvorfor er det viktig

Algoritmisk skjevhet kan ha alvorlige konsekvenser når AI-systemer brukes i viktige beslutninger. Det dreier seg om menneskenes liv: om de får lån, jobb, medisinsk behandling eller tilgang til sosiale tjenester.

Et kjent eksempel er COMPAS-systemet i USA, som ble brukt til å forutsi tilbakefall til kriminalitet. En undersøkelse fant at systemet feilaktig merket svarte fanger som høyrisiko nesten dobbelt så ofte som hvite fanger. Slike feil er ikke abstrakte – de påvirker hvem som slipper ut av fengsel.

Etter hvert som AI brukes mer i helsevesen, kredittgivning, politi og offentlig forvaltning, øker behovet for å forstå og korrigere algoritmisk skjevhet.

## Eksempler

- **Ansiktsgjenkjenning** – Studier viser at kommersielle ansiktsgjenkjenningssystemer er langt dårligere på mørke ansikter, særlig mørke kvinneansikter.
- **Ansettelsesalgoritmer** – Amazon testet et AI-rekrutteringssystem som diskriminerte mot kvinner fordi det var trent på historiske ansettelsesdata dominert av menn.
- **Helsealgoritmer** – Et mye brukt system i USA undervurderte helsebehovet til svarte pasienter fordi det brukte kostnader som mål på behov.
- **Boliglån** – Algoritmebasert kredittvurdering kan videreføre historisk diskriminering i boligmarkedet.

## Vanlige spørsmål

**Er algoritmisk skjevhet alltid bevisst?**
Nei, den er oftest ubevisst. Den oppstår gjerne fordi utviklere ikke har vært oppmerksomme på skjevheter i dataene eller ikke har testet systemet grundig nok på ulike grupper.

**Kan algoritmisk skjevhet fikses?**
Delvis. Man kan bruke mer representative data, teste modeller på rettferdighet og designe algoritmer som aktivt tar hensyn til likeverd. Men det er ingen enkel teknisk løsning.

**Finnes det lover mot algoritmisk diskriminering?**
EU har strenge regler gjennom AI-forordningen, og GDPR gir rettigheter knyttet til automatiserte beslutninger. I Norge gjelder diskrimineringsloven, men håndhevingen på AI-feltet er fortsatt under utvikling.

**Hva er «rettferdig AI»?**
Det er et forskningsfelt som søker å designe AI-systemer som behandler alle grupper rettferdig. Utfordringen er at ulike definisjoner av «rettferdig» kan være matematisk uforenlige.

**Hvem har ansvar for å forhindre algoritmisk skjevhet?**
Ansvaret deles mellom utviklere, selskaper som tar AI i bruk, regulatorer og politikere.

## Oppsummering

Algoritmisk skjevhet er et alvorlig problem der AI-systemer systematisk behandler noen grupper dårligere enn andre. Det oppstår ofte fra skjeve treningsdata og kan føre til diskriminering i viktige livsavgjørelser. Ansvarlig AI-utvikling krever aktiv innsats for å identifisere og redusere slike skjevheter.

Se også: [Hva er kunstig intelligens](/ai/hva-er-kunstig-intelligens), [Hva er maskinlæring](/ai/hva-er-maskinlaering), [Hva er AI-hallusinasjon](/ai/hva-er-ai-hallusinasjon)
