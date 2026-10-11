/* Uitbreiding van Sterrengids: overzichtspagina's (hubs) en extra onderwerpen.
   Bronnen: NASA Science (galaxies, black holes, stars, comets, asteroids), NASA Hubble, ESA/Hubble,
   ESO (eso2208), Planck, Nature Astronomy (2025). Waarden afgerond; schattingen zijn als zodanig aangeduid. */

/* ---- De acht planeten horen bij de hub "Planeten" ---- */
PLANETS.forEach((p) => {
  if (PLANET_NAMES.map((n) => n.toLowerCase()).includes(p.id)) p.group = "planeten";
});

/* ---- Hulpfuncties voor grafieken ---- */
const sciBar = (title, labels, values, unit, axis, note, extra) => Object.assign({
  type: "bar", title, labels, values, unit, axis, note, log: true
}, extra || {});

const MELKWEG_ZON = "Zon";

/* ====================================================================== */
const MORE = [

/* ---------------------------- STERRENSTELSELS -------------------------- */
{
  id: "andromeda", name: "Het Andromedastelsel", short: "Andromeda", sub: "Spiraalstelsel",
  group: "sterrenstelsels", cardSpecs: [0, 1, 3],
  visual: { kind: "galaxy", variant: "andromeda" },
  tag: "Sterrenstelsel · M31",
  lead: "Het dichtstbijzijnde grote sterrenstelsel en een van de verste dingen die je met het blote oog kunt zien.",
  badges: ["Spiraalstelsel", "Lokale Groep", "Komt dichterbij"],
  specs: [
    ["Type", "Spiraalstelsel (M31)"],
    ["Afstand", "ca. 2,5 miljoen lichtjaar"],
    ["Diameter", "ca. 150.000 – 220.000 lichtjaar"],
    ["Aantal sterren", "ca. 1 biljoen"],
    ["Massa", "ca. 1 – 1,2 biljoen zonsmassa's"],
    ["Snelheid richting Melkweg", "ca. 110 km/s"],
    ["Zwart gat in het centrum", "ca. 100 – 200 miljoen zonsmassa's"],
    ["Sterrenbeeld", "Andromeda"],
    ["Eerste beschrijving", "ca. 964 (al-Sufi)"],
    ["Satellietstelsels", "o.a. M32 en M110"]
  ],
  know: "Het licht dat je met het blote oog van Andromeda ziet, is ongeveer 2,5 miljoen jaar onderweg geweest. Het vertrok dus ruim voor de moderne mens bestond.",
  sections: {
    algemeen: {
      summary: "De grote buur van de Melkweg",
      text: [
        "Het Andromedastelsel, ook M31 genoemd, is het dichtstbijzijnde grote sterrenstelsel bij de Melkweg. Samen domineren ze de Lokale Groep. Het is een spiraalstelsel dat qua vorm en grootte sterk op onze Melkweg lijkt, met naar schatting ongeveer een biljoen sterren. Op een heldere, donkere nacht zie je het als een vage, langgerekte vlek in het sterrenbeeld Andromeda.",
        "Hoe groot Andromeda precies is, hangt af van waar je de rand legt. Een schijf van ruim 150.000 lichtjaar wordt vaak aangehouden, maar metingen van de ijle buitenlagen komen uit op zo'n 220.000 lichtjaar. In 2008 zag NASA's Swift-telescoop in ultraviolet een enorme ring van jonge, hete sterren met een doorsnede van ongeveer 150.000 lichtjaar."
      ],
      facts: [
        "Het centrum heeft een dubbele kern. Hoe die is ontstaan, is nog niet bekend.",
        "Rond Andromeda draaien tientallen kleinere stelsels, waaronder M32 en M110.",
        "‘M31’ betekent dat het het 31e object is in de catalogus van Charles Messier."
      ],
      chart: {
        type: "bar", title: "Aantal sterren per stelsel (miljard, logaritmisch)",
        labels: ["Andromeda", "Melkweg", "Triangulum", "Grote Magelhaense Wolk", "Kleine Magelhaense Wolk"],
        values: [1000, 250, 40, 30, 3], highlight: 0, unit: "miljard sterren", log: true, min: 1,
        axis: "Miljard sterren (logaritmische schaal)",
        note: "Indicatief. Voor de Melkweg is het midden van 100 – 400 miljard genomen. Schattingen voor de Magelhaense Wolken lopen sterk uiteen."
      }
    },
    geschiedenis: {
      summary: "Van ‘kleine wolk’ tot bewijs voor een groter heelal",
      text: [
        "De Perzische sterrenkundige al-Sufi beschreef Andromeda rond het jaar 964 als een ‘kleine wolk’. In 1612 keek Simon Marius er als een van de eersten met een telescoop naar, en in 1764 nam Charles Messier het op als nummer 31 in zijn catalogus. Lange tijd dacht men dat het een nevel binnen de Melkweg was.",
        "Dat veranderde in de jaren 20 van de vorige eeuw. Edwin Hubble vond in Andromeda veranderlijke sterren, cepheïden, waarmee hij de afstand kon bepalen. Het bleek veel te ver weg om bij de Melkweg te horen: Andromeda is een eigen sterrenstelsel. Daarmee werd het bekende heelal ineens veel groter."
      ],
      events: [
        { when: "Ca. 964", text: "Al-Sufi beschrijft Andromeda als een ‘kleine wolk’." },
        { when: "1612", text: "Simon Marius bekijkt het stelsel met een telescoop." },
        { when: "1764", text: "Messier neemt Andromeda op als M31." },
        { when: "1923 – 1924", text: "Hubble vindt cepheïden en bepaalt de afstand: Andromeda is een eigen stelsel." },
        { when: "2008", text: "NASA's Swift ziet een ring van jonge sterren in ultraviolet." },
        { when: "2012", text: "Hubble-metingen leiden tot de verwachting dat Andromeda en de Melkweg over ca. 4 miljard jaar botsen." },
        { when: "2025", text: "Een nieuwe studie schat de kans op een botsing binnen 10 miljard jaar op ca. 50%." }
      ],
      chartTitle: "Tijdlijn: ontdekking en onderzoek van Andromeda"
    },
    samenstelling: {
      summary: "Sterren, gas en veel donkere materie",
      text: [
        "Net als de Melkweg bestaat Andromeda vooral uit donkere materie. Van de gewone materie zit het meeste in sterren; er is verhoudingsgewijs minder gas dan in de Melkweg of in het kleinere Triangulumstelsel. Het stelsel heeft een verdikte kern, een schijf met spiraalarmen en een uitgestrekte halo van oude sterren en bolvormige sterrenhopen.",
        "In het midden zit een superzwaar zwart gat van ongeveer 100 tot 200 miljoen zonsmassa's. Gas en stof in de schijf leveren nog steeds grondstof voor nieuwe sterren."
      ],
      facts: [
        "Andromeda heeft honderden bolvormige sterrenhopen, meer dan de Melkweg.",
        "De halo van oude sterren reikt tot ver buiten de zichtbare schijf."
      ],
      chart: {
        type: "doughnut", title: "Verdeling van de massa van Andromeda (indicatief, %)",
        labels: ["Donkere materie", "Sterren", "Gas en stof"], values: [91, 8, 1],
        note: "Indicatieve verdeling op basis van een totale massa van ca. 1,2 biljoen en een stermassa van ca. 100 miljard zonsmassa's."
      }
    },
    toekomst: {
      summary: "Een botsing was verwacht, maar is niet meer zeker",
      text: [
        "Andromeda komt met ongeveer 110 kilometer per seconde op de Melkweg af. Op basis van Hubble-metingen uit 2012 werd een botsing over ongeveer 4 miljard jaar verwacht. Een studie uit 2025 in Nature Astronomy nam ook de zwaartekracht van de Grote Magelhaense Wolk en de meetonzekerheden mee, en komt uit op een kans van ongeveer 50 procent dat de twee stelsels binnen 10 miljard jaar samensmelten.",
        "Als het gebeurt, ontstaat uit de twee spiraalstelsels waarschijnlijk één groot elliptisch stelsel. Sterren zelf botsen nauwelijks, want de afstanden tussen sterren zijn enorm. Wel raken banen verstoord en komt er een golf van nieuwe sterrenvorming."
      ],
      facts: [
        "Het Triangulumstelsel draait waarschijnlijk om Andromeda en kan bij een botsing worden meegesleurd.",
        "Over miljarden jaren is het gas voor nieuwe sterren grotendeels opgebruikt."
      ],
      chart: {
        type: "doughnut", title: "Kans op samensmelting met de Melkweg binnen 10 miljard jaar (%)",
        labels: ["Samensmelting", "Geen samensmelting"], values: [50, 50],
        note: "Bron: Sawala e.a., Nature Astronomy (2025). Eerdere voorspellingen gingen uit van een zekere botsing."
      }
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "triangulum", name: "Het Triangulumstelsel", short: "Triangulum", sub: "Spiraalstelsel",
  group: "sterrenstelsels", cardSpecs: [0, 1, 3],
  visual: { kind: "galaxy", variant: "face" },
  tag: "Sterrenstelsel · M33",
  lead: "Het derde grote stelsel van de Lokale Groep: een gasrijke spiraal vol jonge sterren.",
  badges: ["Spiraalstelsel", "Lokale Groep", "Gasrijk"],
  specs: [
    ["Type", "Spiraalstelsel (M33)"],
    ["Afstand", "ca. 3 miljoen lichtjaar"],
    ["Diameter", "ca. 60.000 lichtjaar"],
    ["Aantal sterren", "ca. 40 miljard"],
    ["Massa", "ca. 10 – 40 miljard zonsmassa's"],
    ["Plaats in de Lokale Groep", "Derde grootste stelsel"],
    ["Sterrenbeeld", "Driehoek (Triangulum)"],
    ["Groot sterrenvormingsgebied", "NGC 604"],
    ["Eerste vermelding", "vóór 1654 (Hodierna)"],
    ["Zichtbaarheid", "Blote oog bij zeer donkere hemel"]
  ],
  know: "NGC 604, een sterrenvormingsgebied in Triangulum, is ongeveer 1.500 lichtjaar breed. De Orionnevel in de Melkweg is daarbij vergeleken klein.",
  sections: {
    algemeen: {
      summary: "De derde grote spiraal in onze buurt",
      text: [
        "Het Triangulumstelsel, M33, is na Andromeda en de Melkweg het derde grootste stelsel van de Lokale Groep. Het staat onder een hoek van ongeveer 55 graden naar ons toe gericht, waardoor de spiraalarmen goed te zien zijn.",
        "Met ongeveer 60.000 lichtjaar doorsnede is M33 iets groter dan de helft van de Melkweg, met ongeveer 40 miljard sterren. Onder een zeer donkere hemel is het net met het blote oog te zien, en daarmee een van de verste objecten die je zonder kijker kunt waarnemen."
      ],
      facts: [
        "Het stelsel is rijk aan gas en maakt nog actief nieuwe sterren.",
        "Het heeft geen balk en nauwelijks een bolle kern.",
        "Mogelijk draait M33 om Andromeda; zeker is dat de twee elkaar beïnvloeden."
      ],
      chart: {
        type: "bar", title: "Afstand tot ons (lichtjaar, logaritmisch)",
        labels: ["Zon – centrum Melkweg", "Grote Magelhaense Wolk", "Kleine Magelhaense Wolk", "Andromeda", "Triangulum"],
        values: [26000, 160000, 200000, 2500000, 3000000], highlight: 4, unit: "lichtjaar", log: true, min: 10000,
        axis: "Lichtjaar (logaritmische schaal)",
        note: "Afgeronde waarden. De afstand tot Triangulum wordt in de literatuur opgegeven tussen ca. 2,7 en 3 miljoen lichtjaar."
      }
    },
    geschiedenis: {
      summary: "Van een vage vlek tot meting van zijn beweging",
      text: [
        "Giovanni Battista Hodierna beschreef het stelsel waarschijnlijk al vóór 1654. Charles Messier nam het in 1764 op als nummer 33 in zijn catalogus. In de jaren 20 van de vorige eeuw vond Edwin Hubble er cepheïden in, wat liet zien dat M33 een eigen stelsel is, ver buiten de Melkweg.",
        "In 2005 mat een team met radiotelescopen voor het eerst de beweging van een ander sterrenstelsel aan de hemel: die van M33. Zulke metingen zijn nodig om te voorspellen hoe de stelsels in de Lokale Groep zich in de toekomst gedragen."
      ],
      events: [
        { when: "Vóór 1654", text: "Hodierna beschrijft het stelsel." },
        { when: "1764", text: "Messier neemt het op als M33." },
        { when: "1926", text: "Hubble vindt cepheïden en bepaalt de afstand." },
        { when: "2005", text: "Eerste meting van de eigen beweging van een ander sterrenstelsel." }
      ],
      chartTitle: "Tijdlijn: onderzoek van het Triangulumstelsel"
    },
    samenstelling: {
      summary: "Evenveel gas als sterren",
      text: [
        "M33 is gasrijk: grofweg evenveel gewone materie zit in gas als in sterren. Dat gas is de brandstof voor een hoog tempo van sterrenvorming, in verhouding tot de grootte van het stelsel. Er zijn veel jonge, hete sterren en grote gaswolken.",
        "Het grootste deel van de massa is waarschijnlijk, net als bij andere stelsels, donkere materie."
      ],
      facts: [
        "Het gas bestaat vooral uit waterstof, met wat helium en zwaardere elementen.",
        "NGC 604 is een van de grootste bekende sterrenvormingsgebieden in de Lokale Groep."
      ],
      chart: {
        type: "doughnut", title: "Gewone materie in M33 (indicatief, %)",
        labels: ["Sterren", "Gas"], values: [55, 45],
        note: "Indicatieve verdeling van de gewone materie, zonder donkere materie. Schattingen verschillen per onderzoek."
      }
    },
    toekomst: {
      summary: "Meegetrokken door Andromeda",
      text: [
        "M33 beweegt in het zwaartekrachtveld van Andromeda en wordt daar waarschijnlijk steeds sterker door beïnvloed. In simulaties van de botsing tussen Melkweg en Andromeda wordt M33 vaak meegesleurd of uiteengerukt, maar de uitkomst is onzeker.",
        "Zolang er gas is, maakt M33 nieuwe sterren. Over vele miljarden jaren raakt die voorraad op en dooft het stelsel langzaam."
      ],
      facts: [
        "Een botsing tussen Melkweg en Andromeda is niet meer zeker (zie het Andromedastelsel).",
        "De echte baan van M33 is nog onzeker."
      ],
      events: [
        { when: "Nu", text: "M33 vormt actief nieuwe sterren." },
        { when: "Komende miljarden jaren", text: "Wisselwerking met Andromeda wordt sterker." },
        { when: "Binnen 10 miljard jaar", text: "Kans van ca. 50% dat Melkweg en Andromeda botsen; M33 wordt dan meegetrokken." },
        { when: "Biljoenen jaren", text: "De laatste sterren doven." }
      ],
      chartTitle: "Tijdlijn: de toekomst van het Triangulumstelsel"
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "magelhaense-wolken", name: "De Magelhaense Wolken", short: "Magelhaense Wolken", sub: "Dwergstelsels",
  group: "sterrenstelsels", cardSpecs: [0, 1, 5],
  visual: { kind: "galaxy", variant: "irregular" },
  tag: "Satellietstelsels van de Melkweg",
  lead: "Twee onregelmatige dwergstelsels die om de Melkweg draaien en vanaf het zuidelijk halfrond als losse stukjes Melkweg te zien zijn.",
  badges: ["Dwergstelsels", "Satellieten van de Melkweg", "Zuidelijke hemel"],
  specs: [
    ["Type", "Onregelmatige dwergstelsels"],
    ["Afstand Grote Wolk (LMC)", "ca. 160.000 lichtjaar"],
    ["Afstand Kleine Wolk (SMC)", "ca. 200.000 lichtjaar"],
    ["Diameter LMC", "ca. 14.000 lichtjaar"],
    ["Diameter SMC", "ca. 7.000 lichtjaar"],
    ["Aantal sterren LMC", "ca. 20 – 30 miljard"],
    ["Aantal sterren SMC", "ca. 3 miljard (onzeker)"],
    ["Zichtbaar vanaf", "Zuidelijk halfrond"],
    ["Bekendste nevel", "Tarantulanevel (LMC)"],
    ["Bekende supernova", "SN 1987A (LMC)"]
  ],
  know: "In 1987 explodeerde in de Grote Magelhaense Wolk een ster. SN 1987A was de dichtstbijzijnde waargenomen supernova sinds 1604 en met het blote oog te zien.",
  sections: {
    algemeen: {
      summary: "De bekendste buren van de Melkweg",
      text: [
        "De Grote en de Kleine Magelhaense Wolk zijn twee dwergstelsels die om de Melkweg draaien. Vanaf het zuidelijk halfrond zien ze eruit als twee losgeraakte stukjes Melkweg. Het zijn de bekendste satellietstelsels van de Melkweg, op ongeveer 160.000 en 200.000 lichtjaar afstand.",
        "De naam verwijst naar de ontdekkingsreiziger Ferdinand Magellaan, wiens expeditie ze rond 1519 – 1522 beschreef. Volkeren op het zuidelijk halfrond kenden ze al veel langer. De wolken zijn onregelmatig van vorm en bevatten veel gas en jonge sterren."
      ],
      facts: [
        "Een brug van gas verbindt de twee wolken met elkaar.",
        "De Magelhaense Stroom, een lange sliert gas, strekt zich over een groot deel van de hemel uit.",
        "De Grote Wolk heeft een balk en een aanzet tot spiraalstructuur."
      ],
      chart: {
        type: "bar", title: "Diameter (lichtjaar)",
        labels: ["Melkweg", "Triangulum", "Grote Magelhaense Wolk", "Kleine Magelhaense Wolk"],
        values: [100000, 60000, 14000, 7000], highlight: 2, unit: "lichtjaar",
        axis: "Lichtjaar",
        note: "Afgeronde waarden. De Grote Magelhaense Wolk is blauw gemarkeerd."
      }
    },
    geschiedenis: {
      summary: "Van zeevaarders tot sterrenkundige sleutelstelsels",
      text: [
        "Europese zeevaarders beschreven de wolken tijdens reizen naar het zuiden. In het begin van de 20e eeuw gebruikte Henrietta Leavitt veranderlijke sterren in de Kleine Magelhaense Wolk om te ontdekken dat hun helderheid en pulsatieperiode samenhangen. Daarmee kon Hubble later afstanden tot andere stelsels meten.",
        "In 1987 explodeerde in de Grote Magelhaense Wolk een ster als SN 1987A. Detectie van de neutrino's van die explosie bevestigde theorieën over supernova's. In 2007 lieten Hubble-metingen zien dat de wolken waarschijnlijk voor het eerst langs de Melkweg komen."
      ],
      events: [
        { when: "1519 – 1522", text: "De expeditie van Magellaan beschrijft de wolken." },
        { when: "1912", text: "Henrietta Leavitt publiceert het verband tussen helderheid en periode van cepheïden in de Kleine Wolk." },
        { when: "1987", text: "SN 1987A explodeert in de Grote Wolk." },
        { when: "2007", text: "Metingen suggereren dat de wolken voor het eerst langs de Melkweg komen." },
        { when: "2019", text: "Berekeningen voorspellen samensmelting van de Grote Wolk met de Melkweg over ca. 2,4 miljard jaar." }
      ],
      chartTitle: "Tijdlijn: onderzoek van de Magelhaense Wolken"
    },
    samenstelling: {
      summary: "Veel gas, weinig zware elementen",
      text: [
        "De wolken bevatten veel gas en relatief weinig zware elementen. De Grote Wolk heeft ongeveer de helft, de Kleine Wolk ongeveer een vijfde van het gehalte aan zware elementen in de Zon. Daardoor lijken ze op jonge stelsels uit het vroege heelal en zijn ze belangrijk om te begrijpen hoe sterren onder zulke omstandigheden ontstaan.",
        "In de Grote Wolk ligt de Tarantulanevel, een van de actiefste sterrenvormingsgebieden in de Lokale Groep."
      ],
      facts: [
        "Er zijn veel jonge sterrenhopen in beide wolken.",
        "Gas wordt door de Melkweg langzaam uit de wolken getrokken."
      ],
      chart: {
        type: "bar", title: "Gehalte aan zware elementen (Zon = 100%)",
        labels: ["Zon", "Grote Wolk (LMC)", "Kleine Wolk (SMC)"], values: [100, 50, 20], highlight: 1,
        unit: "%", axis: "Procent van het gehalte in de Zon",
        note: "Bij benadering. Bron: gangbare schattingen uit sterrenkundige literatuur."
      }
    },
    toekomst: {
      summary: "Opgeslokt door de Melkweg",
      text: [
        "De Melkweg trekt aan de wolken en rekt ze uit tot de Magelhaense Stroom. Berekeningen uit 2019 wijzen erop dat de Grote Wolk over ongeveer 2,4 miljard jaar met de Melkweg zal samensmelten. Door zijn massa beïnvloedt hij ook de baan van de Melkweg en daarmee de kans op een botsing met Andromeda.",
        "De Kleine Wolk zal naar verwachting door de Melkweg en de Grote Wolk worden uiteengetrokken."
      ],
      facts: [
        "Zo groeit de Melkweg door ‘kannibalisme’ op kleinere stelsels.",
        "De Melkweg heeft in het verleden al meerdere kleinere stelsels opgenomen."
      ],
      events: [
        { when: "Nu", text: "De wolken geven gas en sterren af aan de Melkweg." },
        { when: "Over ca. 2,4 miljard jaar", text: "De Grote Wolk smelt samen met de Melkweg (berekening uit 2019)." },
        { when: "Over 4 – 10 miljard jaar", text: "Melkweg en Andromeda kunnen botsen (kans ca. 50%)." }
      ],
      chartTitle: "Tijdlijn: de toekomst van de Magelhaense Wolken"
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "soorten-stelsels", name: "Soorten sterrenstelsels", short: "Soorten stelsels", sub: "Spiraal, elliptisch, onregelmatig",
  group: "sterrenstelsels", cardSpecs: [0, 2, 3],
  visual: { kind: "galaxy", variant: "elliptical" },
  tag: "Sterrenstelsels in het algemeen",
  lead: "Spiraal, elliptisch of onregelmatig: hoe sterrenstelsels eruitzien, waaruit ze bestaan en hoe ze samen het kosmische web vormen.",
  badges: ["Hubble-indeling", "Groepen en clusters", "Kosmisch web"],
  specs: [
    ["Hoofdtypen", "Spiraal, elliptisch, onregelmatig"],
    ["Indeling", "Hubble-stemvork (1926)"],
    ["Aantal sterren", "duizenden tot > 1 biljoen"],
    ["Grootte", "honderden tot > 1 miljoen lichtjaar"],
    ["Leeftijd", "meestal 10 – 13,6 miljard jaar"],
    ["Stelsels in het waarneembare heelal", "ca. 2 biljoen (schatting)"],
    ["Groepen", "tot ca. 100 stelsels"],
    ["Clusters", "duizenden stelsels"],
    ["Lokale Groep", "meer dan 50 stelsels"],
    ["Grootste structuur", "Laniakea-supercluster"]
  ],
  know: "We kunnen nu maar ongeveer 10 procent van de naar schatting 2 biljoen stelsels in het waarneembare heelal daadwerkelijk zien; de rest is te zwak.",
  sections: {
    algemeen: {
      summary: "Wat is een sterrenstelsel, en welke vormen zijn er?",
      text: [
        "Een sterrenstelsel is een samenstel van sterren, gas, stof en donkere materie dat door zwaartekracht bij elkaar blijft. De grootste stelsels hebben meer dan een biljoen sterren en zijn meer dan een miljoen lichtjaar breed. De kleinste hebben maar een paar duizend sterren en zijn een paar honderd lichtjaar groot.",
        "Edwin Hubble deelde de stelsels in 1926 in op vorm. Spiraalstelsels hebben een schijf met spiraalarmen. Elliptische stelsels zijn gladde bollen of eieren van oude sterren. Onregelmatige stelsels hebben geen vaste vorm. Daartussen zit het lenticulaire stelsel: een schijf zonder duidelijke armen. De indeling geldt nu als vereenvoudigd, maar de basis blijft bruikbaar."
      ],
      facts: [
        "Groepen bevatten tot ongeveer 100 stelsels, clusters duizenden.",
        "Groepen en clusters vormen samen superclusters, die weer deel uitmaken van het kosmische web van wanden en leegtes.",
        "Bijna elk groot stelsel heeft een superzwaar zwart gat in het centrum."
      ],
      chart: {
        type: "bar", title: "Aantal sterren per stelsel (logaritmisch)",
        labels: ["Kleinste dwergstelsels", "Kleine Magelhaense Wolk", "Melkweg", "Andromeda"],
        values: [5000, 3000000000, 250000000000, 1000000000000], unit: "sterren", log: true, min: 1000,
        axis: "Aantal sterren (logaritmische schaal)",
        note: "Indicatief. De kleinste dwergstelsels hebben een paar duizend sterren; de grootste stelsels meer dan een biljoen."
      }
    },
    geschiedenis: {
      summary: "Van ‘eilandheelallen’ tot de eerste stelsels van Webb",
      text: [
        "In 1750 beschreef Thomas Wright de Melkweg als een platte schijf, en in 1755 opperde Immanuel Kant dat nevelvlekken wel eens ‘eilandheelallen’ zouden kunnen zijn. Pas in de jaren 20 van de vorige eeuw kon Edwin Hubble dit aantonen met afstandsmetingen aan Andromeda.",
        "Sindsdien groeide ons beeld razendsnel. In 1995 liet het Hubble Deep Field duizenden verre stelsels zien in een klein stukje hemel, en sinds 2022 laat de James Webb-telescoop stelsels uit het vroege heelal zien."
      ],
      events: [
        { when: "1750", text: "Thomas Wright beschrijft de Melkweg als schijf." },
        { when: "1755", text: "Immanuel Kant oppert de gedachte aan ‘eilandheelallen’." },
        { when: "1845", text: "Lord Rosse ziet de spiraalstructuur van M51." },
        { when: "1924", text: "Hubble bewijst dat Andromeda een eigen stelsel is." },
        { when: "1926", text: "Hubble publiceert zijn indeling van stelsels." },
        { when: "1995", text: "Het Hubble Deep Field." },
        { when: "2016", text: "Schatting van ca. 2 biljoen stelsels in het waarneembare heelal." },
        { when: "2022", text: "De eerste beelden van de James Webb-telescoop." }
      ],
      chartTitle: "Tijdlijn: onderzoek van sterrenstelsels"
    },
    samenstelling: {
      summary: "Gewone materie, donkere materie en donkere energie",
      text: [
        "Sterrenstelsels bestaan uit sterren, gas, stof en veel donkere materie. Spiraalstelsels hebben veel gas en maken nieuwe sterren; in hun armen zitten jonge blauwe sterren. Elliptische stelsels bestaan vooral uit oude, roodachtige sterren en hebben nauwelijks gas of nieuwe sterrenvorming.",
        "In het heelal als geheel is ongeveer 5 procent gewone materie, ongeveer 27 procent donkere materie en ongeveer 68 procent donkere energie."
      ],
      facts: [
        "Donkere materie zien we niet; we merken haar aan haar zwaartekracht.",
        "Donkere energie lijkt de uitdijing van het heelal te versnellen."
      ],
      chart: {
        type: "doughnut", title: "Wat bestaat het heelal uit? (%)",
        labels: ["Donkere energie", "Donkere materie", "Gewone materie"], values: [68, 27, 5],
        note: "Afgeronde waarden uit Planck-metingen."
      }
    },
    toekomst: {
      summary: "Botsen, uit het zicht raken en doven",
      text: [
        "Sterrenstelsels groeien door samen te smelten, maar de versnelde uitdijing van het heelal zorgt ervoor dat stelsels buiten onze Lokale Groep op den duur steeds verder weg en uit het zicht raken. Op nog langere termijn raakt het gas op en doven de laatste sterren, in een tijdspanne van biljoenen jaren."
      ],
      facts: [
        "Binnen de Lokale Groep houdt de zwaartekracht de stelsels bij elkaar.",
        "De lichtste sterren branden zo langzaam dat ze biljoenen jaren meegaan."
      ],
      events: [
        { when: "Nu", text: "Naar schatting 2 biljoen stelsels in het waarneembare heelal." },
        { when: "Binnen 10 miljard jaar", text: "Kans van ca. 50% op samensmelting van Melkweg en Andromeda." },
        { when: "Over ca. 100 miljard jaar", text: "Stelsels buiten de Lokale Groep zijn door de uitdijing uit het zicht verdwenen (berekening)." },
        { when: "Biljoenen jaren", text: "De laatste sterren doven." }
      ],
      chartTitle: "Tijdlijn: de toekomst van sterrenstelsels"
    }
  }
},

/* ------------------------ ZWARTE GATEN & NEVELS ------------------------ */
{
  id: "zwarte-gaten", name: "Zwarte gaten", short: "Zwarte gaten", sub: "Extreme zwaartekracht",
  group: "zwarte-gaten-en-nevels", cardSpecs: [1, 5, 6],
  visual: { kind: "blackhole" },
  tag: "Extreem object",
  lead: "Plekken waar zoveel massa op zo weinig ruimte zit dat niets, zelfs licht niet, kan ontsnappen.",
  badges: ["Waarnemingshorizon", "Stellair tot superzwaar", "Eerste foto in 2019"],
  specs: [
    ["Wat is het", "Veel massa op zeer weinig ruimte"],
    ["Typen", "Stellair, intermediair, superzwaar"],
    ["Stellair", "enkele tot ca. 100 zonsmassa's"],
    ["Intermediair", "ca. 100 – 100.000 zonsmassa's"],
    ["Superzwaar", "miljoenen tot miljarden zonsmassa's"],
    ["Dichtstbijzijnde bekende", "Gaia BH1, ca. 1.500 lichtjaar"],
    ["Sagittarius A*", "ca. 4 miljoen zonsmassa's, ca. 27.000 lichtjaar"],
    ["M87*", "ca. 6,5 miljard zonsmassa's, ca. 55 miljoen lichtjaar"],
    ["Zwaarste gemeten", "TON 618, ca. 66 miljard zonsmassa's"],
    ["Eerste foto", "M87*, 10 april 2019"]
  ],
  know: "Het zwarte gat in het hart van de Melkweg lijkt op een foto even groot als dat in M87, hoewel M87* ongeveer duizend keer groter is: het staat gewoon veel verder weg.",
  sections: {
    algemeen: {
      summary: "Wat een zwart gat is en hoe zwaar ze kunnen worden",
      text: [
        "Een zwart gat is een enorme hoeveelheid materie, samengeperst in een zeer kleine ruimte. Het is eigenlijk geen ‘gat’. Voorbij de waarnemingshorizon is de zwaartekracht zo sterk dat niets kan ontsnappen, zelfs licht niet. Die horizon is een grens, geen vast oppervlak.",
        "Zwarte gaten ontstaan onder meer wanneer zware sterren door hun brandstof heen zijn en als supernova exploderen; wat overblijft, stort in elkaar. In het centrum van de meeste grote stelsels zit een superzwaar zwart gat. Hoe die zo zwaar worden, is nog niet helemaal opgelost."
      ],
      facts: [
        "Zwarte gaten zelf zijn onzichtbaar; we zien ze aan hun invloed: gloeiend gas en de banen van sterren.",
        "GRS 1915+105 draait meer dan 1.000 keer per seconde om zijn as.",
        "Het verste bekende zwarte gat ligt in het stelsel QSO J0313–1806, op ongeveer 13 miljard lichtjaar."
      ],
      chart: {
        type: "bar", title: "Massa van zwarte gaten (zonsmassa's, logaritmisch)",
        labels: ["Lichtste bekende", "Cygnus X-1", "Omega Centauri (intermediair)", "Sagittarius A*", "M87*", "TON 618"],
        values: [3.8, 21, 8200, 4000000, 6500000000, 66000000000], highlight: 3, unit: "zonsmassa's", log: true, min: 1,
        axis: "Zonsmassa's (logaritmische schaal)",
        note: "Bron: NASA Science en onderzoek aan Cygnus X-1 (2021). Sagittarius A* is blauw gemarkeerd."
      }
    },
    geschiedenis: {
      summary: "Van een denkbeeld uit 1783 tot de eerste foto's",
      text: [
        "In 1783 bedacht John Michell dat een ster zo zwaar kon zijn dat zelfs licht er niet uit kan ontsnappen. Na Einsteins algemene relativiteitstheorie (1915) vond Karl Schwarzschild in 1916 een oplossing die zo'n object beschrijft. De naam ‘zwart gat’ werd in 1967 populair door John Wheeler.",
        "In 1971 werd Cygnus X-1 het eerste sterke kandidaat-zwarte gat. In 1974 voorspelde Stephen Hawking dat zwarte gaten straling uitzenden. Zwaartekrachtsgolven in 2015 en de eerste foto's in 2019 (M87*) en 2022 (Sagittarius A*) hebben het bestaan van zwarte gaten bevestigd."
      ],
      events: [
        { when: "1783", text: "John Michell bedenkt ‘donkere sterren’." },
        { when: "1916", text: "Schwarzschild vindt de eerste oplossing van Einsteins vergelijkingen." },
        { when: "1967", text: "John Wheeler maakt de term ‘zwart gat’ populair." },
        { when: "1971", text: "Cygnus X-1 wordt kandidaat-zwart gat." },
        { when: "1974", text: "Hawking voorspelt straling van zwarte gaten." },
        { when: "2015", text: "Eerste meting van zwaartekrachtsgolven van botsende zwarte gaten." },
        { when: "2019", text: "De Event Horizon Telescope toont de eerste foto: M87*." },
        { when: "2020", text: "Nobelprijs voor Penrose, Genzel en Ghez." },
        { when: "2022", text: "Eerste foto van Sagittarius A*." }
      ],
      chartTitle: "Tijdlijn: de ontdekking van zwarte gaten"
    },
    samenstelling: {
      summary: "Geen samenstelling in gewone zin, wel een duidelijke maat",
      text: [
        "Een zwart gat heeft geen samenstelling in gewone zin: wat erin valt, verdwijnt achter de horizon. Het is volledig te beschrijven met drie eigenschappen: massa, draaiing (spin) en elektrische lading. Wat we zien, is de omgeving: een accretieschijf van heet, gloeiend gas die rond het gat wervelt, soms met stralen van materie die bijna met de lichtsnelheid wegschieten.",
        "De grootte van de horizon schaalt met de massa. Een zwart gat met de massa van de Zon heeft een horizon met een straal van ongeveer 3 kilometer. Die van Sagittarius A* is ongeveer 12 miljoen kilometer, ruim 17 keer de straal van de Zon."
      ],
      facts: [
        "In het centrum, de singulariteit, breken de huidige natuurkundige theorieën af.",
        "Materie die dicht bij een zwart gat komt, wordt door getijdenkrachten uitgerekt."
      ],
      chart: {
        type: "bar", title: "Straal van de horizon (km, logaritmisch)",
        labels: ["3 zonsmassa's", "10 zonsmassa's", "100.000 zonsmassa's", "Sagittarius A*", "M87*"],
        values: [8.9, 29.5, 295000, 11800000, 19200000000], highlight: 3, unit: "km", log: true, min: 1,
        axis: "Kilometer (logaritmische schaal)",
        note: "Berekend met de Schwarzschild-straal r = 2GM/c², ongeveer 2,95 km per zonsmassa."
      }
    },
    toekomst: {
      summary: "Groeien, botsen en op zeer lange termijn verdampen",
      text: [
        "Zwarte gaten groeien door materie op te slokken en door samen te smelten; de zwaartekrachtsgolven daarvan vertellen ons veel. Volgens Hawking verliest een zwart gat zeer langzaam massa door straling en verdampt het uiteindelijk. Hawking-straling is nog nooit gemeten.",
        "Voor een zwart gat met de massa van de Zon duurt dat ruwweg 10⁶⁷ jaar, en voor de zwaarste ruim 10⁹⁶ jaar: onvoorstelbaar veel langer dan het heelal nu bestaat."
      ],
      facts: [
        "Een zwart gat groeit zolang het meer straling opvangt dan het uitzendt.",
        "De verdampingstijd groeit met de derde macht van de massa."
      ],
      chart: {
        type: "bar", title: "Verdampingstijd door Hawking-straling (jaar, logaritmisch)",
        labels: ["1 zonsmassa", "Sagittarius A*", "M87*", "TON 618"],
        values: [2.1e67, 1.3e87, 5.8e96, 6e99], highlight: 1, unit: "jaar", log: true, min: 1e60, sci: true,
        axis: "Jaar (logaritmische schaal)",
        note: "Berekend met t ≈ 2,1·10⁶⁷ jaar × (M/M☉)³. Orde van grootte; de exponent verschilt licht per bron."
      }
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "nevels", name: "Nevels", short: "Nevels", sub: "Wolken van gas en stof",
  group: "zwarte-gaten-en-nevels", cardSpecs: [0, 3, 4],
  visual: { kind: "nebula" },
  tag: "Interstellaire wolken",
  lead: "Wolken van gas en stof: de geboorteplaatsen van sterren en wat er overblijft als ze sterven.",
  badges: ["Emissienevel", "Planetaire nevel", "Supernovarest"],
  specs: [
    ["Wat is het", "Wolk van gas en stof in de ruimte"],
    ["Bestaat uit", "vooral waterstof en helium, plus stof"],
    ["Typen", "Emissie, reflectie, donker, planetair, supernovarest"],
    ["Orionnevel (M42)", "ca. 1.300 – 1.500 lichtjaar"],
    ["Krabnevel (M1)", "ca. 6.500 lichtjaar"],
    ["Ringnevel (M57)", "ca. 2.300 lichtjaar"],
    ["Adelaarsnevel (M16)", "ca. 6.500 – 7.000 lichtjaar"],
    ["Paardenkopnevel", "ca. 1.400 lichtjaar"],
    ["Krabnevel is ontstaan", "uit de supernova van 1054"],
    ["Beroemdste foto", "Pilaren van de Schepping"]
  ],
  know: "De Krabnevel is wat overblijft van een ster die in 1054 explodeerde. Chinese sterrenkundigen zagen de nieuwe ster 23 dagen lang zelfs overdag.",
  sections: {
    algemeen: {
      summary: "Wolken in de ruimte, in vijf soorten",
      text: [
        "Een nevel is een wolk van gas en stof in de ruimte. Nevels zijn de geboorteplaatsen van sterren, maar ook wat er overblijft nadat sterren sterven. Sommige gloeien zelf, andere weerkaatsen of blokkeren het licht van sterren.",
        "Naar uiterlijk en oorsprong onderscheiden astronomen emissienevels, reflectienevels, donkere nevels, planetaire nevels en supernovaresten."
      ],
      facts: [
        "Emissienevels gloeien doordat hete sterren het gas aanslaan, zoals de Orionnevel.",
        "Reflectienevels weerkaatsen sterlicht en zien er vaak blauw uit.",
        "Donkere nevels blokkeren licht, zoals de Paardenkopnevel.",
        "Planetaire nevels hebben niets met planeten te maken: het zijn de afgestoten buitenlagen van een stervende ster.",
        "Supernovaresten zijn wat overblijft na een supernova, zoals de Krabnevel."
      ],
      chart: {
        type: "bar", title: "Afstand tot ons (lichtjaar)",
        labels: ["Paardenkopnevel", "Orionnevel", "Ringnevel", "Krabnevel", "Adelaarsnevel"],
        values: [1400, 1350, 2300, 6500, 6750], highlight: 1, unit: "lichtjaar",
        axis: "Lichtjaar",
        note: "Afgeronde waarden; in de literatuur lopen de afstanden per bron uiteen (bijvoorbeeld 1.300 – 1.500 lichtjaar voor Orion)."
      }
    },
    geschiedenis: {
      summary: "Van een ‘gastster’ in 1054 tot de beelden van Webb",
      text: [
        "In 1054 zagen Chinese sterrenkundigen een ‘gastster’ die zo helder was dat hij overdag zichtbaar was; het overblijfsel is de Krabnevel. Nicolas-Claude Fabri de Peiresc ontdekte in 1610 de Orionnevel, en Christiaan Huygens beschreef hem in 1656. Charles Messier nam de Krabnevel in 1758 als eerste object op in zijn catalogus.",
        "In 1864 liet William Huggins met een spectroscoop zien dat sommige nevels uit gloeiend gas bestaan. Hubble en later de James Webb-telescoop maakten beroemde beelden van de Pilaren van de Schepping in de Adelaarsnevel (1995 en 2022)."
      ],
      events: [
        { when: "1054", text: "Chinese astronomen zien de supernova die de Krabnevel achterliet." },
        { when: "1610", text: "Peiresc ontdekt de Orionnevel." },
        { when: "1656", text: "Christiaan Huygens beschrijft de Orionnevel." },
        { when: "1758", text: "Messier vindt de Krabnevel: M1." },
        { when: "1864", text: "Huggins toont met spectra dat nevels uit gas bestaan." },
        { when: "1995", text: "Hubble fotografeert de Pilaren van de Schepping." },
        { when: "2022", text: "Webb fotografeert dezelfde pilaren in infrarood." }
      ],
      chartTitle: "Tijdlijn: het onderzoek van nevels"
    },
    samenstelling: {
      summary: "Waterstof, helium en stof",
      text: [
        "Nevels bestaan voor ongeveer driekwart uit waterstof en voor een kwart uit helium, met een klein beetje zwaardere elementen en stof. Het stof bestaat uit minuscule korrels van silicaat, koolstof en ijs, gemaakt in sterren.",
        "In dichte, koude delen vormen zich moleculen als waterstofgas, koolmonoxide en water. Zulke ‘moleculaire wolken’ zijn de bakermat van sterren."
      ],
      facts: [
        "Moleculaire wolken kunnen 1.000 tot 10 miljoen keer de massa van de Zon bevatten.",
        "De kleuren op foto's komen vaak van gloeiend waterstof (rood), zuurstof (groen/blauw) en zwavel."
      ],
      chart: {
        type: "doughnut", title: "Typische samenstelling van interstellair gas (massa, %)",
        labels: ["Waterstof", "Helium", "Zwaardere elementen"], values: [71, 27, 2],
        note: "Typische waarden; stof maakt ongeveer 1% van de massa uit."
      }
    },
    toekomst: {
      summary: "Opgebruikt gas en een nevel voor de Zon",
      text: [
        "In een nevel als Orion blazen de jonge, hete sterren over enkele miljoenen jaren het resterende gas weg. Wat overblijft is een open sterrenhoop. Het gas dat door sterren wordt uitgestoten, wordt hergebruikt in de volgende generatie sterren.",
        "Over ongeveer 5 miljard jaar stoot de Zon haar buitenlagen af en vormt zelf een planetaire nevel, die enkele tienduizenden jaren zichtbaar blijft."
      ],
      facts: [
        "Planetaire nevels bestaan maar kort: enkele tienduizenden jaren.",
        "Supernovaresten als de Krabnevel dijen steeds verder uit en vervagen."
      ],
      events: [
        { when: "Nu", text: "De Orionnevel brengt nieuwe sterren voort." },
        { when: "Over enkele miljoenen jaren", text: "Jonge sterren blazen het gas weg; een sterrenhoop blijft over." },
        { when: "Over ca. 5 miljard jaar", text: "De Zon vormt een planetaire nevel." },
        { when: "Daarna", text: "Het gas wordt hergebruikt voor nieuwe sterren." }
      ],
      chartTitle: "Tijdlijn: de levensloop van een nevel"
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "supernovas", name: "Supernova's", short: "Supernova's", sub: "Exploderende sterren",
  group: "zwarte-gaten-en-nevels", cardSpecs: [1, 3, 4],
  visual: { kind: "burst" },
  tag: "Extreem object",
  lead: "De explosie van een ster aan het einde van zijn leven: kort helderder dan een heel sterrenstelsel.",
  badges: ["Type Ia en Type II", "Fabrieken van elementen", "1 – 2 per eeuw"],
  specs: [
    ["Wat is het", "Explosie van een ster"],
    ["Typen", "Type Ia (witte dwerg) en Type II (kerninstorting)"],
    ["Energie", "ca. 10⁴⁴ joule"],
    ["Helderheid", "kan een heel sterrenstelsel overtreffen"],
    ["Frequentie in de Melkweg", "ca. 1 – 2 per eeuw"],
    ["Laatste zichtbare in de Melkweg", "SN 1604 (Kepler)"],
    ["Dichtstbijzijnde waargenomen sinds 1604", "SN 1987A, ca. 160.000 lichtjaar"],
    ["Beroemd overblijfsel", "Krabnevel (SN 1054)"],
    ["Kandidaat", "Betelgeuze (binnen ca. 100.000 jaar)"],
    ["Wat blijft over", "Neutronenster of zwart gat"]
  ],
  know: "Het ijzer in je bloed en het calcium in je botten zijn ooit in een ster gemaakt en door een supernova de ruimte in geslingerd.",
  sections: {
    algemeen: {
      summary: "Hoe sterren op een spectaculaire manier eindigen",
      text: [
        "Een supernova is de krachtige explosie van een ster. Een zeer zware ster eindigt met een instortende kern. Een witte dwerg kan ook exploderen als hij te veel materie van een begeleidende ster opneemt. Voor korte tijd is een supernova helderder dan alle andere sterren in een heel sterrenstelsel samen.",
        "Bij zware sterren fuseert de kern steeds zwaardere elementen tot ijzer. IJzer kost energie in plaats van op te leveren, waardoor de kern instort en terugveert. Dat veroorzaakt de supernova. Wat overblijft is een neutronenster of een zwart gat."
      ],
      facts: [
        "In de Melkweg ontstaan naar schatting 1 tot 2 supernova's per eeuw, maar de meeste zijn achter stof verborgen.",
        "De laatste supernova die in de Melkweg met het blote oog werd gezien, was die van Kepler in 1604.",
        "Type Ia-supernova's gebruiken sterrenkundigen als ‘standaardkaars’ om afstanden te meten."
      ],
      chart: {
        type: "bar", title: "Afstand tot historische supernova's in de Melkweg (lichtjaar)",
        labels: ["SN 1006", "SN 1054 (Krabnevel)", "SN 1572 (Tycho)", "Cassiopeia A (ca. 1680)", "SN 1604 (Kepler)"],
        values: [7200, 6500, 8000, 11000, 20000], highlight: 1, unit: "lichtjaar",
        axis: "Lichtjaar",
        note: "Afgeronde waarden; afstanden verschillen per bron."
      }
    },
    geschiedenis: {
      summary: "Eeuwenlang vastgelegd door waarnemers",
      text: [
        "Chinese sterrenkundigen legden in het jaar 185 de eerste bekende supernova vast. Ook SN 1006, de helderste ooit waargenomen, en SN 1054 (Krabnevel) zijn in Chinese, Arabische en Japanse bronnen beschreven. Tycho Brahe zag er in 1572 een en Johannes Kepler in 1604.",
        "In 1987 verscheen in de Grote Magelhaense Wolk SN 1987A, de eerste supernova waarvan ook neutrino's werden gemeten. In 1998 lieten waarnemingen van Type Ia-supernova's zien dat de uitdijing van het heelal versnelt, goed voor de Nobelprijs van 2011."
      ],
      events: [
        { when: "185", text: "Chinese astronomen leggen de eerste bekende supernova vast." },
        { when: "1006", text: "SN 1006, de helderste ooit gezien." },
        { when: "1054", text: "SN 1054 laat de Krabnevel achter." },
        { when: "1572", text: "Tycho Brahe ziet een nieuwe ster in Cassiopeia." },
        { when: "1604", text: "Kepler ziet de laatste met het blote oog zichtbare supernova in de Melkweg." },
        { when: "1987", text: "SN 1987A in de Grote Magelhaense Wolk." },
        { when: "1998", text: "Type Ia-supernova's laten een versnellende uitdijing zien." }
      ],
      chartTitle: "Tijdlijn: bekende supernova's"
    },
    samenstelling: {
      summary: "Fabrieken van zware elementen",
      text: [
        "Supernova's zijn fabrieken van zware elementen. Zware sterren maken tijdens hun leven elementen tot ijzer; de explosie zelf produceert nog zwaardere elementen en slingert alles de ruimte in. Het zuurstof dat je inademt en het ijzer in je bloed zijn voor een groot deel in sterren gemaakt.",
        "Bij een kerninstortingssupernova gaat zo'n 99 procent van de energie weg als neutrino's. Ongeveer 1 procent wordt bewegingsenergie van het uitgeslingerde materiaal, en slechts een fractie van een procent komt vrij als licht."
      ],
      facts: [
        "Uitgeworpen materiaal verrijkt gaswolken met zware elementen.",
        "Sommige zeer zware elementen ontstaan bij botsingen van neutronensterren."
      ],
      chart: {
        type: "doughnut", title: "Waar blijft de energie van een kerninstortingssupernova? (%)",
        labels: ["Neutrino's", "Bewegingsenergie", "Licht"], values: [99, 0.99, 0.01],
        note: "Orde van grootte voor een kerninstortingssupernova."
      }
    },
    toekomst: {
      summary: "De volgende komt vanzelf",
      text: [
        "In de Melkweg is het niet de vraag óf, maar wanneer er weer een supernova komt. Een bekende kandidaat is de rode superreus Betelgeuze, op ongeveer 550 lichtjaar, die waarschijnlijk binnen 100.000 jaar zal exploderen. Op die afstand levert dat een spectaculair schouwspel op, maar geen gevaar.",
        "De Zon is te licht om als supernova te eindigen. Zij wordt een rode reus en daarna een witte dwerg."
      ],
      facts: [
        "Een supernova binnen enkele tientallen lichtjaren zou schade kunnen doen aan de ozonlaag; dichtbij genoeg zijn er geen bekende kandidaten.",
        "Moderne telescopen vinden elk jaar duizenden supernova's in andere stelsels."
      ],
      events: [
        { when: "Elk moment", text: "De volgende supernova in de Melkweg (1 – 2 per eeuw)." },
        { when: "Binnen ca. 100.000 jaar", text: "Betelgeuze explodeert waarschijnlijk." },
        { when: "Over ca. 5 miljard jaar", text: "De Zon wordt een rode reus, geen supernova." }
      ],
      chartTitle: "Tijdlijn: de volgende supernova's"
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "neutronensterren", name: "Neutronensterren en pulsars", short: "Neutronensterren", sub: "Pulsars en magnetars",
  group: "zwarte-gaten-en-nevels", cardSpecs: [0, 1, 4],
  visual: { kind: "pulsar" },
  tag: "Extreem object",
  lead: "De ingestorte kern van een zware ster: zwaarder dan de Zon, maar niet groter dan een stad.",
  badges: ["Pulsars", "Magnetars", "Extreme dichtheid"],
  specs: [
    ["Massa", "ca. 1,4 – 2 zonsmassa's"],
    ["Diameter", "ca. 20 – 30 km"],
    ["Dichtheid", "ca. 10¹⁷ kg/m³"],
    ["Een suikerklontje", "ca. 100 miljoen ton"],
    ["Rotatie", "tot ca. 700 keer per seconde"],
    ["Eerste pulsar", "PSR B1919+21, 1967"],
    ["Krabpulsar", "ca. 30 omwentelingen per seconde"],
    ["Magnetars", "magneetveld tot ca. 10¹⁵ gauss"],
    ["Gemeten door NASA's NICER", "PSR J0030+0451, ca. 26 km"],
    ["Botsing waargenomen", "GW170817 (2017)"]
  ],
  know: "Een suikerklontje materie van een neutronenster zou op Aarde ongeveer honderd miljoen ton wegen.",
  sections: {
    algemeen: {
      summary: "Een ster ter grootte van een stad",
      text: [
        "Een neutronenster is de ingestorte kern van een zware ster na een supernova. Er zit anderhalf tot twee keer de massa van de Zon in een bol van maar zo'n 20 kilometer doorsnede, ongeveer de afmeting van een stad. Op het oppervlak is de zwaartekracht honderden miljarden keer zo sterk als op Aarde.",
        "Veel neutronensterren draaien razendsnel en hebben een sterk magnetisch veld. Dat veld bundelt straling in smalle bundels, die als een vuurtoren over de hemel zwaaien. Komt zo'n bundel langs de Aarde, dan zien we een pulsar: een regelmatige reeks pulsen."
      ],
      facts: [
        "De snelste bekende pulsar draait ongeveer 716 keer per seconde.",
        "Magnetars hebben de sterkste magnetische velden die bekend zijn.",
        "NASA's NICER mat in 2019 de grootte van pulsar J0030+0451: ongeveer 26 kilometer."
      ],
      chart: {
        type: "bar", title: "Rotatiefrequentie van pulsars (omwentelingen per seconde)",
        labels: ["PSR B1919+21", "Krabpulsar", "PSR J0030+0451", "Snelste bekende"],
        values: [0.75, 30, 205, 716], highlight: 1, unit: "omw./s", log: true, min: 0.1,
        axis: "Omwentelingen per seconde (logaritmische schaal)",
        note: "Afgeronde waarden. PSR B1919+21 draait in 1,337 seconde rond; PSR J0030+0451 is door NICER gemeten."
      }
    },
    geschiedenis: {
      summary: "Van een voorspelling in 1934 tot botsende neutronensterren",
      text: [
        "In 1934 voorspelden Walter Baade en Fritz Zwicky dat supernova's neutronensterren achterlaten. In 1967 ontdekten Jocelyn Bell Burnell en Antony Hewish de eerste pulsar. Het signaal was zo regelmatig dat het eerst ‘LGM-1’ heette, van ‘Little Green Men’.",
        "In 1968 werd een pulsar gevonden in het hart van de Krabnevel, wat bewees dat pulsars uit supernova's voortkomen. In 2017 zagen zwaartekrachtsgolven en licht voor het eerst twee botsende neutronensterren, GW170817."
      ],
      events: [
        { when: "1932", text: "James Chadwick ontdekt het neutron." },
        { when: "1934", text: "Baade en Zwicky voorspellen neutronensterren." },
        { when: "1967", text: "Jocelyn Bell Burnell ontdekt de eerste pulsar." },
        { when: "1968", text: "Pulsar in de Krabnevel gevonden." },
        { when: "1974", text: "Hulse en Taylor vinden een dubbelpulsar." },
        { when: "1982", text: "Eerste milliseconde-pulsar ontdekt." },
        { when: "2017", text: "GW170817: botsing van twee neutronensterren." },
        { when: "2019", text: "NICER meet de grootte van PSR J0030+0451." }
      ],
      chartTitle: "Tijdlijn: de ontdekking van neutronensterren"
    },
    samenstelling: {
      summary: "Bijna alleen neutronen",
      text: [
        "Een neutronenster bestaat vooral uit neutronen, met aan de buitenkant een dunne korst van atoomkernen en elektronen. Dieper erin is de materie zo samengeperst dat protonen en elektronen zijn samengesmolten tot neutronen. Wat er in de kern precies gebeurt, is een open vraag, en daarom meet NICER de straal van neutronensterren.",
        "De dichtheid is vergelijkbaar met die van een atoomkern: ongeveer 10¹⁷ kilogram per kubieke meter."
      ],
      facts: [
        "Neutronensterren zijn de dichtste bekende sterren; alleen zwarte gaten zijn compacter.",
        "Het magnetisch veld is biljoenen tot biljarden keer sterker dan dat van de Aarde."
      ],
      chart: {
        type: "bar", title: "Dichtheid (kg/m³, logaritmisch)",
        labels: ["Water", "Aarde (gemiddeld)", "Kern van de Zon", "Witte dwerg", "Neutronenster"],
        values: [1000, 5514, 150000, 1e9, 1e17], highlight: 4, unit: "kg/m³", log: true, min: 100, sci: true,
        axis: "Kilogram per kubieke meter (logaritmische schaal)",
        note: "Orde van grootte. De dichtheid van een witte dwerg verschilt sterk per ster."
      }
    },
    toekomst: {
      summary: "Langzamer draaien en uitdoven",
      text: [
        "Pulsars vertragen langzaam doordat ze energie uitstralen: de Krabpulsar wordt per jaar ongeveer 13 microseconden langzamer. Na zo'n tien miljoen jaar draait een pulsar te traag om nog radiobundels uit te zenden. Daarna koelt de neutronenster af tot een donker, bijna onzichtbaar object.",
        "Botsen twee neutronensterren, dan ontstaat een kilonova, waarbij goud en andere zware elementen worden gemaakt. Sommige combinaties eindigen als zwart gat."
      ],
      facts: [
        "Veel neutronensterren zijn dubbelsterren en spiraliseren langzaam naar elkaar toe.",
        "Zwaartekrachtsgolfdetectoren zien steeds vaker samensmeltende compacte objecten."
      ],
      events: [
        { when: "Nu", text: "Pulsars sturen regelmatige signalen en vertragen." },
        { when: "Na ca. 10 miljoen jaar", text: "Een gewone pulsar stopt met pulsen in radio." },
        { when: "Bij een botsing", text: "Twee neutronensterren smelten samen: kilonova en zware elementen." },
        { when: "Biljoenen jaren", text: "Neutronensterren zijn afgekoeld." }
      ],
      chartTitle: "Tijdlijn: de toekomst van neutronensterren"
    }
  }
},

/* --------------------------- STERREN, ZON, KOMETEN --------------------- */
{
  id: "sterren", name: "Sterren", short: "Sterren", sub: "Van geboorte tot supernova",
  group: "sterren-zon-en-kometen", cardSpecs: [1, 2, 4],
  visual: { kind: "star" },
  tag: "Sterren",
  lead: "Bollen van heet gas die licht en warmte geven door kernfusie, en de bouwers van bijna alle elementen.",
  badges: ["Kernfusie", "Spectraaltypen O B A F G K M", "Rode dwergen overheersen"],
  specs: [
    ["Aantal in het heelal", "tot ca. 10²⁴ (een quadriljoen)"],
    ["Aantal in de Melkweg", "100 – 400 miljard"],
    ["Dichtstbijzijnde", "Proxima Centauri, ca. 4,2 lichtjaar"],
    ["Helderste aan de hemel", "Sirius, ca. 8,6 lichtjaar"],
    ["Levensduur", "miljoenen tot biljoenen jaren"],
    ["Oppervlaktetemperatuur", "ca. 2.300 tot meer dan 33.000 K"],
    ["Spectraaltypen", "O B A F G K M"],
    ["Meest voorkomend", "Rode dwergen (ca. 70 – 75%)"],
    ["Geboorteplaats", "Moleculaire wolken"],
    ["Energiebron", "Kernfusie"]
  ],
  know: "Het universum kan tot een quadriljoen (10²⁴) sterren bevatten: meer dan zandkorrels op alle stranden van de Aarde.",
  sections: {
    algemeen: {
      summary: "Wat een ster is en welke soorten er zijn",
      text: [
        "Een ster is een gigantische bol heet gas die licht en warmte geeft door kernfusie in zijn kern. Sterren bestaan voornamelijk uit waterstof, met helium en een beetje zwaardere elementen. De Zon is de dichtstbijzijnde ster; de volgende, Proxima Centauri, staat ruim vier lichtjaar weg.",
        "Sterren verschillen enorm in massa, temperatuur en kleur. Astronomen delen ze in met de letters O, B, A, F, G, K en M, van heet en blauw tot koel en rood. De Zon is een G-ster. Het merendeel van alle sterren is een koele, zwakke rode dwerg."
      ],
      facts: [
        "Sterren met meer massa branden sneller op en eindigen eerder.",
        "Veel sterren zijn dubbelsterren; Sirius is een dubbelster met een witte dwerg.",
        "Betelgeuze is een rode superreus en een kandidaat om als supernova te eindigen."
      ],
      chart: {
        type: "bar", title: "Oppervlaktetemperatuur per spectraaltype (ondergrens, kelvin)",
        labels: ["O (blauw)", "B (blauwwit)", "A (wit)", "F (geelwit)", "G (geel, Zon)", "K (oranje)", "M (rood)"],
        values: [33000, 10000, 7300, 6000, 5300, 3900, 2300], highlight: 4, unit: "K",
        axis: "Kelvin",
        colors: ["#6f93f5", "#8fb0ff", "#c9d6fb", "#f2ecc8", "#0a3fd6", "#f7b27a", "#ff7a1a"],
        note: "Ondergrens van het temperatuurbereik per type. De Zon (G) is blauw gemarkeerd."
      }
    },
    geschiedenis: {
      summary: "Van catalogus tot wat sterren echt zijn",
      text: [
        "Ptolemaeus legde rond 150 een catalogus aan van meer dan duizend sterren. In 1838 mat Friedrich Bessel als eerste de afstand tot een andere ster (61 Cygni) met parallax. In de 19e eeuw maakten spectra duidelijk waaruit sterren bestaan.",
        "Tussen 1910 en 1913 ontwikkelden Ejnar Hertzsprung en Henry Norris Russell het diagram dat temperatuur en helderheid verbindt. In 1925 toonde Cecilia Payne aan dat sterren vooral uit waterstof en helium bestaan, en in 1939 verklaarde Hans Bethe hoe kernfusie ze laat stralen."
      ],
      events: [
        { when: "Ca. 150", text: "Ptolemaeus publiceert een catalogus van ruim 1.000 sterren." },
        { when: "1838", text: "Bessel meet de eerste sterafstand met parallax." },
        { when: "1860s", text: "Spectroscopie laat zien waaruit sterren bestaan." },
        { when: "1910 – 1913", text: "Hertzsprung–Russelldiagram." },
        { when: "1925", text: "Cecilia Payne: sterren zijn vooral waterstof en helium." },
        { when: "1939", text: "Hans Bethe verklaart kernfusie in sterren." },
        { when: "2013", text: "De Gaia-satelliet start met het in kaart brengen van de Melkweg." }
      ],
      chartTitle: "Tijdlijn: ontdekkingen over sterren"
    },
    samenstelling: {
      summary: "Waterstof, helium en een snufje zwaardere elementen",
      text: [
        "Een ster begint als een koude, dichte wolk van gas die door zijn eigen zwaartekracht ineenstort. Als de kern heet genoeg is, begint waterstof te fuseren tot helium. Zo'n ster op de hoofdreeks is stabiel, omdat de druk van de fusie de zwaartekracht in evenwicht houdt. Zwaardere sterren fuseren in latere fasen steeds zwaardere elementen tot ijzer.",
        "Daardoor veranderen sterren de samenstelling van het heelal. Elementen als koolstof, zuurstof en ijzer zijn in sterren gemaakt en worden aan het einde teruggegeven aan het gas waaruit nieuwe sterren ontstaan."
      ],
      facts: [
        "Moleculaire wolken waarin sterren ontstaan, bevatten 1.000 tot 10 miljoen zonsmassa's gas.",
        "Groepen pas ontstane sterren heten sterrenhopen; hun geboorteplaats heet een kraamkamer."
      ],
      chart: {
        type: "doughnut", title: "Samenstelling van een ster als de Zon (massa, %)",
        labels: ["Waterstof", "Helium", "Zwaardere elementen"], values: [73, 25, 2],
        note: "De Zon als voorbeeld. Andere sterren hebben iets andere verhoudingen."
      }
    },
    toekomst: {
      summary: "Het lot van een ster hangt af van zijn massa",
      text: [
        "Wat er met een ster gebeurt, hangt af van zijn massa. Sterren als de Zon zwellen op tot rode reus en eindigen als witte dwerg, omringd door een planetaire nevel. Zwaardere sterren exploderen als supernova en laten een neutronenster of zwart gat achter.",
        "De lichtste sterren branden zo langzaam dat ze biljoenen jaren meegaan, veel langer dan het heelal nu bestaat."
      ],
      facts: [
        "Een zware ster leeft slechts enkele miljoenen jaren.",
        "Een rode dwerg kan biljoenen jaren schijnen."
      ],
      chart: {
        type: "bar", title: "Hoe lang leeft een ster op de hoofdreeks? (jaar, logaritmisch)",
        labels: ["0,1 zonsmassa", "0,5 zonsmassa", "1 zonsmassa (Zon)", "2 zonsmassa's", "10 zonsmassa's", "25 zonsmassa's"],
        values: [1e13, 5.5e10, 1e10, 1.2e9, 2e7, 7e6], highlight: 2, unit: "jaar", log: true, min: 1e6, sci: true,
        axis: "Jaar (logaritmische schaal)",
        note: "Bij benadering, afhankelijk van het model. De Zon is blauw gemarkeerd."
      }
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "zon", name: "De Zon", short: "De Zon", sub: "Onze ster",
  group: "sterren-zon-en-kometen", cardSpecs: [1, 2, 3],
  visual: { kind: "orb", id: "zonnestelsel" },
  tag: "Ster · G2V",
  lead: "Onze eigen ster: een gele dwerg op ongeveer halfweg haar leven, en de bron van bijna alle energie in het Zonnestelsel.",
  badges: ["Gele dwerg", "Kernfusie", "Zonnecyclus van 11 jaar"],
  specs: [
    ["Type", "Gele dwerg (spectraaltype G2V)"],
    ["Leeftijd", "ca. 4,6 miljard jaar"],
    ["Diameter", "ca. 1,39 miljoen km"],
    ["Massa", "ca. 333.000 × Aarde"],
    ["Oppervlak", "ca. 5.500 °C"],
    ["Kern", "ca. 15 miljoen °C"],
    ["Corona", "ca. 2 miljoen °C"],
    ["Afstand tot de Aarde", "149,6 miljoen km (8 min 20 s licht)"],
    ["Rotatie", "ca. 25 dagen (evenaar) – 35 dagen (polen)"],
    ["Zonnecyclus", "ca. 11 jaar"]
  ],
  know: "De corona, de buitenste atmosfeer van de Zon, is veel heter (ca. 2 miljoen graden) dan het oppervlak (ca. 5.500 graden). Waarom precies, is een van de grote raadsels van de zonnefysica.",
  sections: {
    algemeen: {
      summary: "De ster waar alles om draait",
      text: [
        "De Zon is de ster in het centrum van ons Zonnestelsel en bevat 99,86 procent van alle massa daarin. Ze is ongeveer 1,4 miljoen kilometer breed, ruim 100 keer de diameter van de Aarde, en er zouden meer dan 330.000 Aardes nodig zijn om de massa van de Zon te evenaren.",
        "De Zon is een gele dwerg van het type G. Hoe warm ze ook lijkt, ze is een doodgewone ster: er zijn er veel zwaardere en veel lichtere. In het centrum fuseert waterstof tot helium bij ongeveer 15 miljoen graden, en dat levert de energie die de Aarde nodig heeft."
      ],
      facts: [
        "De Zon draait in ongeveer 230 miljoen jaar één keer rond het centrum van de Melkweg.",
        "Ze draait sneller aan de evenaar (ca. 25 dagen) dan aan de polen (ca. 35 dagen).",
        "Zonlicht doet er ongeveer 8 minuten en 20 seconden over om de Aarde te bereiken."
      ],
      chart: {
        type: "bar", title: "Diameter van de Zon in vergelijking (km)",
        labels: ["Aarde", "Jupiter", "De Zon"], values: [12756, 142984, 1391000], highlight: 2, unit: "km",
        axis: "Kilometer",
        note: "Bron: NASA Science en NASA Planetary Fact Sheet."
      }
    },
    geschiedenis: {
      summary: "Van zonnevlekken tot een sonde in de corona",
      text: [
        "Rond 1610 zag Galilei zonnevlekken, al waren Thomas Harriot en Johannes Fabricius hem mogelijk voor. In 1843 ontdekte Heinrich Schwabe de zonnecyclus van ongeveer 11 jaar. In 1868 werd helium ontdekt in het spectrum van de Zon, vóórdat het op Aarde bekend was. In 1919 bevestigde Eddington tijdens een zonsverduistering Einsteins voorspelling van lichtafbuiging.",
        "Sinds 1995 observeert de ruimtesonde SOHO de Zon voortdurend. In 2018 lanceerde NASA de Parker Solar Probe, die in 2021 als eerste de corona binnenging en in december 2024 op ongeveer 6,1 miljoen kilometer van het oppervlak kwam."
      ],
      events: [
        { when: "Rond 1610", text: "Galilei en anderen zien zonnevlekken." },
        { when: "1843", text: "Schwabe ontdekt de zonnecyclus van ca. 11 jaar." },
        { when: "1868", text: "Helium wordt ontdekt in het zonnespectrum." },
        { when: "1919", text: "Zonsverduistering bevestigt lichtafbuiging door zwaartekracht." },
        { when: "1939", text: "Hans Bethe beschrijft hoe kernfusie de Zon laat stralen." },
        { when: "1995", text: "SOHO begint met permanente waarneming van de Zon." },
        { when: "2018", text: "Lancering van de Parker Solar Probe." },
        { when: "2024", text: "Parker komt op ca. 6,1 miljoen km van de Zon." }
      ],
      chartTitle: "Tijdlijn: onderzoek van de Zon"
    },
    samenstelling: {
      summary: "Waterstof, helium en een gelaagde bouw",
      text: [
        "De Zon bestaat voor ongeveer driekwart uit waterstof en voor een kwart uit helium, met een klein beetje zwaardere elementen. In de kern fuseert waterstof tot helium. Daaromheen ligt de stralingszone, waar energie door straling wordt vervoerd, en de convectiezone, waar heet gas opstijgt en afkoelend weer zakt.",
        "De zichtbare ‘oppervlakte’ is de fotosfeer. Daarboven liggen de chromosfeer en de corona, en de zonnewind: een stroom geladen deeltjes die met 350 tot 750 kilometer per seconde door het Zonnestelsel stroomt."
      ],
      facts: [
        "De zonnewind kan op de Aarde zorgen voor poollicht.",
        "Zonnevlekken zijn koelere, donkerdere gebieden met sterke magnetische velden."
      ],
      chart: {
        type: "doughnut", title: "Samenstelling van de Zon (massa, %)",
        labels: ["Waterstof", "Helium", "Zwaardere elementen"], values: [73, 25, 2],
        note: "Afgeronde waarden."
      }
    },
    toekomst: {
      summary: "Over ongeveer 5 miljard jaar een rode reus",
      text: [
        "De Zon is ongeveer halverwege haar leven als stabiele ster. Ze wordt langzaam helderder: over ongeveer een miljard jaar straalt ze zo'n 10 procent sterker. Over ongeveer 5 miljard jaar is de waterstof in de kern op en zwelt de Zon op tot een rode reus. Mercurius en Venus worden daarbij waarschijnlijk opgeslokt, en de Aarde mogelijk ook.",
        "Daarna stoot de Zon haar buitenlagen af en blijft er een witte dwerg over, die langzaam afkoelt."
      ],
      facts: [
        "De Zon verliest tijdens de rode-reusfase ongeveer eenderde van haar massa.",
        "Wat overblijft is een witte dwerg, mogelijk met enkele overgebleven planeten."
      ],
      chart: {
        type: "flux", au: null,
        title: "Helderheid van de Zon de komende 3 miljard jaar (nu = 100%)",
        note: "Modelberekening: eenvoudig model van Gough (1981). Een indicatie, geen voorspelling."
      }
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "kometen", name: "Kometen", short: "Kometen", sub: "IJzige zwervers",
  group: "sterren-zon-en-kometen", cardSpecs: [0, 2, 4],
  visual: { kind: "comet" },
  tag: "Kleine lichamen",
  lead: "Ijzige zwervers van stof en bevroren gassen die bij de Zon een glanzende staart krijgen.",
  badges: ["Kern, coma en staart", "Kuipergordel en Oortwolk", "Halley keert terug in 2061"],
  specs: [
    ["Bestaan uit", "bevroren gassen, stof en gesteente"],
    ["Aanduiding", "‘vuile sneeuwbal’"],
    ["Kern", "enkele km tot tientallen km"],
    ["Coma", "kan groter zijn dan een planeet"],
    ["Staart", "miljoenen kilometers lang"],
    ["Herkomst", "Kuipergordel en Oortwolk"],
    ["Halley", "ca. 76 jaar, volgende keer in 2061"],
    ["Bekende kometen", "ruim 4.000"],
    ["Bezochte kometen", "o.a. Halley, 67P, Tempel 1, Wild 2"],
    ["Interstellair", "2I/Borisov (2019)"]
  ],
  know: "Elk jaar in oktober en mei vallen sterschoten die van komeet Halley afkomstig zijn: de Orioniden en de Eta-Aquariden.",
  sections: {
    algemeen: {
      summary: "Sneeuwballen van de ruimte",
      text: [
        "Kometen zijn ijzige objecten die om de Zon draaien. Ze bestaan uit bevroren gassen, stof en gesteente. De bevroren kern is ongeveer zo groot als een stadje. Komt een komeet in de buurt van de Zon, dan warmt hij op en komen stof en gas vrij. Er ontstaat een grote, gloeiende kop (coma) en een staart van stof en gas die van de Zon af wijst en miljoenen kilometers lang kan zijn.",
        "Naar schatting zijn er miljarden kometen in de Kuipergordel en nog meer in de Oortwolk, de verre buitenrand van het Zonnestelsel. Kometen met een korte omlooptijd komen meestal uit de Kuipergordel, kometen met een lange omlooptijd uit de Oortwolk."
      ],
      facts: [
        "De staart wijst altijd van de Zon af, niet achter de komeet aan.",
        "Een komeet heeft vaak twee staarten: een van gas en een van stof.",
        "De omloop van de komeet Halley duurt gemiddeld ongeveer 76 jaar."
      ],
      chart: {
        type: "bar", title: "Omlooptijd van enkele kometen (jaar, logaritmisch)",
        labels: ["Encke", "67P (Rosetta)", "Halley", "Hale–Bopp"],
        values: [3.3, 6.4, 76, 2500], highlight: 2, unit: "jaar", log: true, min: 1,
        axis: "Jaar (logaritmische schaal)",
        note: "Afgeronde waarden. De omlooptijd van Halley wisselt tussen ca. 74 en 79 jaar."
      }
    },
    geschiedenis: {
      summary: "Van voorspelling in 1705 tot landing op een komeet",
      text: [
        "Eeuwenlang gold een komeet als voorbode van onheil. In 1705 voorspelde Edmond Halley dat de kometen van 1531, 1607 en 1682 dezelfde waren en in 1758 zouden terugkeren. Dat gebeurde, en de komeet kreeg zijn naam. In 1950 stelde de Nederlandse astronoom Jan Oort de Oortwolk voor, en Fred Whipple beschreef de komeetkern als ‘vuile sneeuwbal’.",
        "In 1986 vloog de Europese sonde Giotto langs Halley en zag voor het eerst een komeetkern van dichtbij. In 2014 bereikte de Rosetta-sonde komeet 67P en zette de lander Philae er neer."
      ],
      events: [
        { when: "1705", text: "Halley voorspelt de terugkeer van zijn komeet." },
        { when: "1758", text: "De komeet keert terug, zoals voorspeld." },
        { when: "1950", text: "Oort stelt de Oortwolk voor; Whipple de ‘vuile sneeuwbal’." },
        { when: "1986", text: "Giotto en de Vega-sondes vliegen langs Halley." },
        { when: "1994", text: "Komeet Shoemaker–Levy 9 stort op Jupiter." },
        { when: "2005", text: "Deep Impact raakt komeet Tempel 1." },
        { when: "2014", text: "Rosetta en lander Philae bereiken komeet 67P." },
        { when: "2019", text: "2I/Borisov, de tweede bekende interstellaire bezoeker." }
      ],
      chartTitle: "Tijdlijn: onderzoek van kometen"
    },
    samenstelling: {
      summary: "Water, koolmonoxide en stof",
      text: [
        "Een komeetkern bestaat uit ijs en stof. Het ijs bestaat vooral uit water, met daarnaast bevroren koolmonoxide, koolstofdioxide, methaan en ammoniak. In het stof zitten silicaten en koolstofverbindingen. Wanneer de komeet opwarmt, verdampt het ijs en nemen gas en stof een deel van het materiaal van de kern mee.",
        "Kometen zijn bouwstenen uit het vroege Zonnestelsel. Ze zijn nauwelijks veranderd sinds hun ontstaan en vertellen daardoor iets over de omstandigheden van toen."
      ],
      facts: [
        "Ook organische moleculen zijn in kometen gevonden.",
        "Misschien hebben kometen een deel van het water op Aarde aangevoerd; dat is onderwerp van debat."
      ],
      chart: {
        type: "doughnut", title: "Gassen in de coma van komeet Halley (%, indicatief)",
        labels: ["Waterdamp", "Koolmonoxide", "Koolstofdioxide", "Overig (o.a. methaan, ammoniak)"], values: [80, 10, 3.5, 6.5],
        note: "Gebaseerd op metingen van Giotto en Vega in 1986. Percentages zijn afgerond en indicatief."
      }
    },
    toekomst: {
      summary: "Halley is terug in 2061",
      text: [
        "Komeet Halley komt in 2061 weer langs; het perihelium valt rond 28 juli. Elke passage bij de Zon kost een komeet een laag materiaal, waardoor kometen met een korte omlooptijd na enkele duizenden tot tienduizenden jaren uitdoven of uiteenvallen.",
        "Hale–Bopp, die in 1997 prachtig zichtbaar was, komt pas rond het jaar 4385 terug. Tegelijk ontdekken telescopen steeds meer kometen, en er komen telkens kometen uit de Oortwolk."
      ],
      facts: [
        "Het puin van Halley veroorzaakt elk jaar de sterschoten van de Orioniden (oktober) en Eta-Aquariden (mei).",
        "Komeet 3I/ATLAS, ontdekt in 2025, is het derde bekende interstellaire object."
      ],
      events: [
        { when: "Elk jaar", text: "Sterschoten van Halley: Eta-Aquariden (mei) en Orioniden (oktober)." },
        { when: "2061", text: "Komeet Halley is weer te zien." },
        { when: "Ca. 4385", text: "Komeet Hale–Bopp keert terug." },
        { when: "Over duizenden jaren", text: "Kometen met korte omlooptijd verdwijnen of vallen uiteen." }
      ],
      chartTitle: "Tijdlijn: de toekomst van kometen"
    }
  }
},

/* ---------------------------------------------------------------------- */
{
  id: "planetoiden", name: "Planetoïden en meteoren", short: "Planetoïden", sub: "Rotsen in de ruimte",
  group: "sterren-zon-en-kometen", cardSpecs: [0, 2, 3],
  visual: { kind: "asteroid" },
  tag: "Kleine lichamen",
  lead: "Rotsachtige overblijfselen uit het jonge Zonnestelsel, van stofkorrels tot bergen, en de vallende sterren die ze veroorzaken.",
  badges: ["Planetoïdengordel", "Meteoren en meteorieten", "Planetaire verdediging"],
  specs: [
    ["Bekende planetoïden", "ruim 1,35 miljoen"],
    ["Waar", "vooral tussen Mars en Jupiter"],
    ["Totale massa", "minder dan de Maan"],
    ["Grootste", "Ceres, ca. 940 km (dwergplaneet)"],
    ["Daarna", "Vesta, ca. 530 km"],
    ["Kleinste", "minder dan 10 m"],
    ["Leeftijd", "ca. 4,6 miljard jaar"],
    ["Nabij de Aarde", "ruim 40.000 bekend"],
    ["Bezocht door", "NEAR, Hayabusa, Dawn, OSIRIS-REx, DART, Lucy"],
    ["Recent", "Bennu-monster op Aarde in 2023"]
  ],
  know: "Alle planetoïden samen hebben minder massa dan de Maan, hoewel er meer dan een miljoen van bekend zijn.",
  sections: {
    algemeen: {
      summary: "Brokstukken uit de beginperiode van het Zonnestelsel",
      text: [
        "Planetoïden, ook wel asteroïden genoemd, zijn rotsachtige, luchtloze overblijfselen van de vorming van het Zonnestelsel, ongeveer 4,6 miljard jaar geleden. De meeste draaien in de planetoïdengordel tussen Mars en Jupiter. Ze variëren van minder dan 10 meter tot ongeveer 530 kilometer (Vesta); de dwergplaneet Ceres, ongeveer 940 kilometer, is de grootste.",
        "Een meteoroïde is een klein stuk steen of metaal in de ruimte. Verbrandt zo'n stuk in de dampkring, dan zien we een meteoor, een vallende ster. Bereikt een stuk de grond, dan heet het een meteoriet."
      ],
      facts: [
        "Planetoïden die de baan van de Aarde naderen heten near-Earth objects (NEO's).",
        "De totale massa van alle planetoïden is kleiner dan die van de Maan.",
        "De planetoïdengordel is leger dan hij op plaatjes lijkt: de objecten staan ver uit elkaar."
      ],
      chart: {
        type: "bar", title: "Diameter van enkele planetoïden (km, logaritmisch)",
        labels: ["Ceres", "Vesta", "Pallas", "Hygiea", "Eros", "Bennu", "Dimorphos"],
        values: [940, 530, 512, 430, 17, 0.49, 0.16], highlight: 0, unit: "km", log: true, min: 0.1,
        axis: "Kilometer (logaritmische schaal)",
        note: "Afgeronde waarden. Ceres is ook een dwergplaneet."
      }
    },
    geschiedenis: {
      summary: "Van de ontdekking van Ceres tot een monster van Bennu",
      text: [
        "Op 1 januari 1801 ontdekte Giuseppe Piazzi Ceres, eerst aangezien voor een komeet of planeet. In de jaren daarna volgden Pallas, Juno en Vesta. In 1991 maakte de sonde Galileo de eerste opnames van een planetoïde van dichtbij (Gaspra). In 2001 landde NEAR op Eros.",
        "In 2013 explodeerde boven Tsjeljabinsk in Rusland een meteoor van ongeveer 20 meter, wat duizenden gebouwen beschadigde. In 2022 raakte NASA's DART de maan Dimorphos en veranderde zijn baan. In 2023 bracht OSIRIS-REx een monster van planetoïde Bennu naar de Aarde."
      ],
      events: [
        { when: "1801", text: "Piazzi ontdekt Ceres." },
        { when: "1898", text: "Eros, de eerste nabije planetoïde, wordt ontdekt." },
        { when: "1991", text: "Galileo maakt de eerste opnames van een planetoïde van dichtbij." },
        { when: "2001", text: "NEAR landt op Eros." },
        { when: "2013", text: "Meteoor boven Tsjeljabinsk." },
        { when: "2022", text: "DART raakt Dimorphos en verandert zijn baan." },
        { when: "2023", text: "OSIRIS-REx brengt een monster van Bennu terug." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van planetoïden"
    },
    samenstelling: {
      summary: "Koolstofrijk, stenig of metaalrijk",
      text: [
        "Planetoïden worden naar samenstelling in typen ingedeeld. De meeste (ongeveer driekwart) zijn C-type: donker en rijk aan koolstof. Ongeveer 17 procent is S-type: stenig, rijk aan silicaten. De rest, vooral M-type, bestaat voornamelijk uit metaal, zoals nikkel en ijzer.",
        "Monsters van Bennu en Ryugu bevatten water en organische stoffen, wat de gedachte versterkt dat planetoïden bouwstenen voor leven aan de Aarde hebben geleverd."
      ],
      facts: [
        "Sommige planetoïden zijn eigenlijk hopen puin, bij elkaar gehouden door zwaartekracht.",
        "Bennu-monsters bevatten onder meer water, aminozuren en nucleobasen."
      ],
      chart: {
        type: "doughnut", title: "Typen planetoïden (% van alle planetoïden, bij benadering)",
        labels: ["C-type (koolstofrijk)", "S-type (steenachtig)", "M-type en overig"], values: [75, 17, 8],
        note: "Bij benadering; het aandeel hangt af van de afstand tot de Zon."
      }
    },
    toekomst: {
      summary: "Bezoek van Apophis en onderzoek naar verdediging",
      text: [
        "Op 13 april 2029 passeert planetoïde Apophis de Aarde op ongeveer 32.000 kilometer, dichterbij dan veel satellieten, maar zonder botsing. NASA's OSIRIS-APEX gaat hem dan bestuderen. In dezelfde tijd bereikt de sonde Psyche een metalen planetoïde, en Lucy bezoekt de Trojanen van Jupiter.",
        "ESA's Hera, in 2024 gelanceerd, bereikt eind 2026 het systeem Didymos en Dimorphos om te zien wat DART precies heeft aangericht. Planetoïde 2024 YR4 maakte in 2025 nieuws; een inslag op de Aarde is uitgesloten."
      ],
      facts: [
        "Een planetaire-verdedigingsmissie is een nieuwe manier om de Aarde te beschermen.",
        "Meer dan 40.000 nabije planetoïden zijn bekend; nog niet alle grote zijn gevonden."
      ],
      events: [
        { when: "Eind 2026", text: "ESA's Hera bereikt het systeem Didymos en Dimorphos." },
        { when: "2027", text: "Lucy bezoekt de eerste Trojaanse planetoïde." },
        { when: "13 april 2029", text: "Apophis passeert de Aarde op ca. 32.000 km." },
        { when: "2029", text: "De sonde Psyche bereikt een metalen planetoïde." }
      ],
      chartTitle: "Tijdlijn: komende missies en passages"
    }
  }
}

]; /* einde MORE */

MORE.forEach((m) => PLANETS.push(m));

/* ====================================================================== */
/* Overzichtspagina's (hubs): de tegels in het menu                        */
const HUBS = [
  {
    id: "planeten", name: "Planeten", short: "Planeten", sub: "Acht planeten",
    visual: { kind: "orb", id: "jupiter" },
    tag: "Overzicht",
    lead: "Acht planeten draaien om de Zon: vier kleine rotsplaneten dichtbij en vier reuzen verder weg. Kies een planeet voor alle details.",
    intro: [
      "De vier binnenplaneten Mercurius, Venus, Aarde en Mars zijn rotsachtig en relatief klein. Daarna volgen de gasreuzen Jupiter en Saturnus, en de ijsreuzen Uranus en Neptunus. Hieronder kun je ze vergelijken, of klik op een planeet voor geschiedenis, samenstelling en toekomst."
    ],
    items: ["mercurius", "venus", "aarde", "mars", "jupiter", "saturnus", "uranus", "neptunus"],
    cardSpecs: [0, 2, 7],
    compare: true,
    know: "Jupiter is zwaarder dan alle andere planeten samen, ongeveer 2,5 keer. Toch zou hij 80 keer zwaarder moeten zijn om als ster te gaan stralen."
  },
  {
    id: "sterrenstelsels", name: "Sterrenstelsels", short: "Sterrenstelsels", sub: "Onze Melkweg en buren",
    visual: { kind: "galaxy", variant: "spiral" },
    tag: "Overzicht",
    lead: "Sterrenstelsels zijn de bouwstenen van het heelal: van de Melkweg en haar naaste buren tot de indeling van alle soorten.",
    intro: [
      "In het waarneembare heelal staan naar schatting 2 biljoen sterrenstelsels. Dichtbij liggen de Melkweg, Andromeda, Triangulum en de Magelhaense Wolken. Kies een onderwerp voor details."
    ],
    items: ["melkweg", "andromeda", "triangulum", "magelhaense-wolken", "soorten-stelsels"],
    know: "De grootste sterrenstelsels hebben meer dan een biljoen sterren; de kleinste maar een paar duizend."
  },
  {
    id: "zwarte-gaten-en-nevels", name: "Zwarte gaten & nevels", short: "Zwarte gaten & nevels", sub: "Extreme objecten",
    visual: { kind: "blackhole" },
    tag: "Overzicht",
    lead: "Waar sterren geboren worden en sterven: zwarte gaten, nevels, supernova's en neutronensterren.",
    intro: [
      "Sterren ontstaan in nevels en eindigen als witte dwerg, neutronenster of zwart gat, soms na een supernova. Deze objecten bepalen mede hoe het heelal eruitziet en welke elementen er zijn."
    ],
    items: ["zwarte-gaten", "nevels", "supernovas", "neutronensterren"],
    know: "Het zwarte gat in het centrum van de Melkweg heeft de massa van ongeveer 4 miljoen zonnen, en past binnen de baan van Mercurius."
  },
  {
    id: "sterren-zon-en-kometen", name: "Sterren, Zon & kometen", short: "Sterren, Zon & kometen", sub: "Van sterren tot rotsen",
    visual: { kind: "orb", id: "zonnestelsel" },
    tag: "Overzicht",
    lead: "Van de Zon en andere sterren tot de kleine lichamen in het Zonnestelsel: kometen, planetoïden en meteoren.",
    intro: [
      "De Zon is één van honderden miljarden sterren in de Melkweg. Om haar heen draaien niet alleen planeten, maar ook ijzige kometen en rotsachtige planetoïden die overgebleven bouwstenen zijn uit het begin van het Zonnestelsel."
    ],
    items: ["sterren", "zon", "kometen", "planetoiden"],
    know: "Licht van de Zon doet er ongeveer 8 minuten en 20 seconden over om de Aarde te bereiken. Het licht van de dichtstbijzijnde andere ster doet er ruim 4 jaar over."
  }
];

/* Vergelijking van de planeten (hub Planeten) */
const COMPARE_ROWS = [
  ["Mercurius", "4.879", "57,9", "88 dagen", "58,6 dagen", "167", "0", "Rots"],
  ["Venus", "12.104", "108,2", "224,7 dagen", "243 dagen (omgekeerd)", "464", "0", "Rots"],
  ["Aarde", "12.756", "149,6", "365,25 dagen", "23 u 56 min", "15", "1", "Rots"],
  ["Mars", "6.792", "228,0", "687 dagen", "24 u 37 min", "−65", "2", "Rots"],
  ["Jupiter", "142.984", "778,5", "11,9 jaar", "9 u 56 min", "−110", "95", "Gasreus"],
  ["Saturnus", "120.536", "1.432", "29,4 jaar", "10 u 42 min", "−140", "274", "Gasreus"],
  ["Uranus", "51.118", "2.867", "83,7 jaar", "17 u 14 min (omgekeerd)", "−195", "28", "IJsreus"],
  ["Neptunus", "49.528", "4.515", "163,7 jaar", "16 u 6 min", "−200", "16", "IJsreus"]
];
const COMPARE_HEAD = ["Planeet", "Diameter (km)", "Afstand tot de Zon (mln km)", "Jaar", "Dag", "Gem. temp. (°C)", "Manen", "Type"];

const COMPARE_METRICS = [
  { key: "diameter", label: "Diameter", unit: "km", axis: "Kilometer", values: [4879, 12104, 12756, 6792, 142984, 120536, 51118, 49528] },
  { key: "afstand", label: "Afstand tot de Zon", unit: "miljoen km", axis: "Miljoen kilometer", values: [57.9, 108.2, 149.6, 228.0, 778.5, 1432.0, 2867.0, 4515.0] },
  { key: "gravity", label: "Zwaartekracht", unit: "m/s²", axis: "Meter per seconde²", values: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0] },
  { key: "temp", label: "Temperatuur", unit: "°C", axis: "Graden Celsius (gemiddeld, bij 1 bar voor reuzen)", values: [167, 464, 15, -65, -110, -140, -195, -200] },
  { key: "manen", label: "Manen", unit: "manen", axis: "Aantal bevestigde manen", values: [0, 0, 1, 2, 95, 274, 28, 16] }
];
