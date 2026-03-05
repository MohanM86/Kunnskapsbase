---
title: Hva er forsterkningslæring
slug: hva-er-forsterkningslaeering
category: ai
description: Forsterkningslæring er en AI-metode der et system lærer gjennom prøving og feiling ved å motta belønning for riktige handlinger og straff for feil.
keywords: forsterkningslæring, reinforcement learning, belønning, AI-trening, spillende AI, AlphaGo, robotikk
readingTime: 5 min
updatedAt: "2025-01-15"
---

# Hva er forsterkningslæring

Forsterkningslæring er en metode innen maskinlæring der et AI-system lærer å ta gode beslutninger gjennom prøving og feiling ved å motta belønning for riktige handlinger og negativ tilbakemelding for feil.

## Hva betyr begrepet

Forsterkningslæring kalles på engelsk «Reinforcement Learning» og forkortes RL. Begrepet er inspirert av psykologi og dyretrening: Hvis en hund setter seg på kommando og får en godbit, lærer den at denne atferden er ønsket. Kunstig intelligens kan trenes på nøyaktig samme prinsipp.

I forsterkningslæring er det tre hovedelementer:

- **Agent** – AI-systemet som skal lære, for eksempel en robot eller et spillprogram
- **Miljø** – Verden agenten opererer i, for eksempel et sjakkbrett eller en fabrikkhall
- **Belønningssignal** – Tilbakemelding agenten mottar etter en handling; positiv ved godt resultat, negativ ved dårlig

Agenten utforsker miljøet, prøver ulike handlinger og justerer strategien sin basert på hvilke handlinger som gir mest belønning over tid. Over tid lærer den en optimal strategi kalt en policy.

## Hvordan fungerer det

Treningen foregår som en løpende syklus:

1. Agenten observerer miljøets tilstand (for eksempel brikkenes posisjon i sjakk).
2. Den velger en handling basert på sin nåværende strategi.
3. Miljøet endrer seg som følge av handlingen.
4. Agenten mottar en belønning eller straff.
5. Den oppdaterer sin strategi basert på resultatet.
6. Prosessen gjentas millioner av ganger.

En sentral utfordring er balansen mellom **utforskning** (prøve nye ting) og **utnyttelse** (gjøre det som allerede fungerer). For mye utforskning gir kaotisk atferd; for mye utnyttelse hindrer forbedring.

I moderne forsterkningslæring brukes gjerne dype nevrale nettverk til å representere agentens strategi, noe som gir den evnen til å håndtere svært komplekse miljøer.

## Hvorfor er det viktig

Forsterkningslæring er spesielt kraftfullt i situasjoner der det er vanskelig å definere eksplisitte regler, men der det finnes et klart mål å optimere mot – som å vinne et spill, kontrollere en robot eller styre en prosess.

Det er teknologien bak noen av de mest imponerende AI-gjennombruddene de siste tiårene. Det brukes også til å trene store språkmodeller til å svare mer hjelpsomt og sikkert – en teknikk kalt RLHF (Reinforcement Learning from Human Feedback) som brukes i ChatGPT og Claude.

## Eksempler

- **AlphaGo** – DeepMinds system som i 2016 slo verdensmesteren i brettspillet Go, ansett som for komplekst for datamaskiner å mestre.
- **Atari-spill** – DeepMinds DQN lærte å spille over 50 klassiske Atari-spill på rekordnivå uten noen regler – kun fra piksler og poeng.
- **Robotikk** – Robotarmer trenes til å gripe gjenstander ved å prøve tusenvis av ganger i simulering.
- **Energistyring** – Google brukte forsterkningslæring til å redusere energiforbruket i sine datasentre med over 40 prosent.
- **RLHF i ChatGPT** – Menneskelige evaluatorer gir tilbakemelding på svar, og modellen lærer å gi bedre svar over tid.

## Vanlige spørsmål

**Hva er forskjellen mellom forsterkningslæring og veiledet læring?**
Veiledet læring trenes på merkede eksempler med kjente svar. Forsterkningslæring trenes gjennom prøving og feiling uten fasit – systemet oppdager selv hva som fungerer.

**Kan forsterkningslæring brukes i den virkelige verden?**
Ja, men det er krevende fordi feil i virkeligheten kan ha konsekvenser. Mye trening skjer derfor i simulerte miljøer, og det trente systemet overføres deretter til virkeligheten.

**Hva er belønningshacking?**
Det er et problem der agenten finner uventede måter å maksimere belønningen på som ikke er ønsket. For eksempel kan en agent i et spill finne en feil i spillet fremfor å spille på riktig måte.

**Er forsterkningslæring det samme som evolusjonære algoritmer?**
Nei, men begge inspireres av naturen. Evolusjonære algoritmer bruker seleksjon og mutasjon. Forsterkningslæring bruker belønningssignaler og gradientbasert optimering.

**Hva er RLHF?**
RLHF betyr Reinforcement Learning from Human Feedback. Det er en teknikk der menneskelige tilbakemeldinger på AI-svar brukes som belønningssignal for å trene modellen til å svare mer nyttig og trygt.

## Oppsummering

Forsterkningslæring er en maskinlæringsmetode der AI-systemer lærer av egne handlinger gjennom belønning og straff. Det er teknologien bak AlphaGo, avansert robotstyring og treningen av moderne chatboter som ChatGPT.

Se også: [Hva er maskinlæring](/ai/hva-er-maskinlaering), [Hva er nevrale nettverk](/ai/hva-er-nevrale-nettverk), [Hva er kunstig intelligens](/ai/hva-er-kunstig-intelligens)
