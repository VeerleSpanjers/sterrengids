/* Inhoud van Sterrengids.
   Bronnen: NASA Planetary Fact Sheet, NASA Science, ESA, UWA/Nature Astronomy (2025). */

const PLANET_NAMES = ["Mercurius", "Venus", "Aarde", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];
const DIAMETER_KM = [4879, 12104, 12756, 6792, 142984, 120536, 51118, 49528];
const DISTANCE_MKM = [57.9, 108.2, 149.6, 228.0, 778.5, 1432.0, 2867.0, 4515.0];

const diameterChart = (i) => ({
  type: "bar",
  title: "Diameter van de planeten (km)",
  labels: PLANET_NAMES,
  values: DIAMETER_KM,
  highlight: i,
  unit: "km",
  axis: "Diameter in kilometer",
  note: "Bron: NASA Planetary Fact Sheet. De gekozen planeet is blauw gemarkeerd."
});

const atmosChart = (labels, values, note) => ({
  type: "doughnut",
  title: "Samenstelling van de atmosfeer (% van het volume)",
  labels, values,
  note: note || "Bron: NASA Planetary Fact Sheet. Waarden zijn afgerond; sporengassen zijn weggelaten."
});

const fluxChart = (au, note) => ({
  type: "flux",
  title: "Zonnestraling op deze planeet de komende 3 miljard jaar",
  au,
  note: note || "Modelberekening: eenvoudig model van Gough (1981) voor de toename van de helderheid van de Zon, toegepast op de afstand van deze planeet. Een indicatie, geen voorspelling."
});

const PLANETS = [

/* ------------------------------------------------------------------ */
{
  id: "melkweg", name: "De Melkweg", short: "Melkweg", sub: "Sterrenstelsel",
  tag: "Sterrenstelsel",
  lead: "Ons thuisstelsel: een balkspiraalstelsel met honderden miljarden sterren, waarvan de Zon er één is.",
  badges: ["Balkspiraalstelsel", "Onderdeel van de Lokale Groep"],
  specs: [
    ["Type", "Balkspiraalstelsel"],
    ["Diameter van de schijf", "100.000 – 120.000 lichtjaar"],
    ["Dikte van de schijf", "ca. 1.000 lichtjaar"],
    ["Aantal sterren", "100 – 400 miljard"],
    ["Leeftijd", "ruim 13 miljard jaar"],
    ["Zwart gat in het centrum", "Sagittarius A*, ca. 4 miljoen zonsmassa's"],
    ["Afstand Zon – centrum", "ca. 26.000 lichtjaar"],
    ["Totale massa", "1,2 – 1,9 biljoen zonsmassa's"],
    ["Omlooptijd van de Zon", "ca. 230 miljoen jaar"],
    ["Dichtstbijzijnde grote buur", "Andromeda, 2,5 miljoen lichtjaar"]
  ],
  know: "Het licht van het centrum van de Melkweg doet er ongeveer 26.000 jaar over om ons te bereiken. Als je naar de band van de Melkweg kijkt, kijk je dus ruim 26.000 jaar terug in de tijd.",
  sections: {
    algemeen: {
      summary: "Vorm, afmetingen en onze plek in het stelsel",
      text: [
        "De Melkweg is het sterrenstelsel waarin ons Zonnestelsel ligt. Het is een balkspiraalstelsel: een platte, draaiende schijf met spiraalarmen rond een verdikt midden met een staafvormige balk van sterren. Omdat wij midden in die schijf zitten, zien we het stelsel vanaf de Aarde als een lichtgevende band aan de nachtelijke hemel.",
        "De schijf is ongeveer 100.000 tot 120.000 lichtjaar breed, maar slechts zo'n 1.000 lichtjaar dik. De Zon ligt op ongeveer 26.000 lichtjaar van het centrum, in een kleine structuur tussen twee grote spiraalarmen: de Orionarm, ook wel Lokale Arm genoemd. Eén omloop om het centrum duurt ongeveer 230 miljoen jaar."
      ],
      facts: [
        "Hoofdarmen: Perseus, Scutum-Centaurus, Sagittarius en Norma.",
        "De Melkweg hoort bij de Lokale Groep, een verzameling van tientallen sterrenstelsels. Andromeda is de grootste, de Melkweg de tweede.",
        "Rond de Melkweg draaien dwergstelsels, zoals de Grote en de Kleine Magelhaense Wolk."
      ],
      chart: {
        type: "bar",
        title: "Afstanden en afmetingen (lichtjaar, logaritmische schaal)",
        labels: ["Dikte van de schijf", "Afstand Zon – centrum", "Diameter van de schijf", "Grote Magelhaense Wolk", "Andromedastelsel"],
        values: [1000, 26000, 110000, 160000, 2500000],
        highlight: 2,
        unit: "lichtjaar",
        axis: "Lichtjaar (logaritmische schaal)",
        log: true, min: 100,
        note: "Afgeronde waarden; de diameter is het midden van de schatting van 100.000 – 120.000 lichtjaar."
      }
    },
    geschiedenis: {
      summary: "Van de oerknal tot de eerste foto van het zwarte gat",
      text: [
        "Kort na de oerknal, ruim 13 miljard jaar geleden, ontstonden de eerste sterren en kleine sterrenstelsels. De Melkweg groeide door gas aan te trekken en door samen te smelten met kleinere stelsels. Een van de grootste botsingen vond zo'n 10 miljard jaar geleden plaats met het dwergstelsel Gaia-Enceladus. Sterren uit dat stelsel zijn nog steeds terug te vinden in de halo van de Melkweg.",
        "Mensen kenden de Melkweg altijd als lichtband aan de hemel. In 1610 zag Galilei met zijn telescoop dat die band uit talloze sterren bestaat. In 1924 toonde Edwin Hubble aan dat Andromeda een eigen sterrenstelsel is. Sindsdien weten we dat de Melkweg één van vele stelsels is."
      ],
      events: [
        { short: "13,8 mld", when: "13,8 miljard jaar geleden", text: "Oerknal: het heelal ontstaat." },
        { short: "13+ mld", when: "Ruim 13 miljard jaar geleden", text: "De eerste sterren en bolvormige sterrenhopen ontstaan in de jonge Melkweg." },
        { short: "10 mld", when: "Ca. 10 miljard jaar geleden", text: "Samensmelting met het dwergstelsel Gaia-Enceladus." },
        { short: "4,6 mld", when: "4,6 miljard jaar geleden", text: "De Zon en ons Zonnestelsel ontstaan in de Melkweg." },
        { short: "1610", when: "1610", text: "Galilei ziet dat de Melkweg uit sterren bestaat." },
        { short: "1785", when: "1785", text: "William Herschel maakt de eerste kaart van de Melkweg door sterren te tellen." },
        { short: "1918", when: "1918", text: "Harlow Shapley toont aan dat de Zon ver van het centrum staat." },
        { short: "1924", when: "1924", text: "Edwin Hubble bewijst dat Andromeda een eigen sterrenstelsel is." },
        { short: "2022", when: "2022", text: "De Event Horizon Telescope maakt de eerste foto van Sagittarius A*, het zwarte gat in het centrum." }
      ],
      chartTitle: "Tijdlijn: belangrijke momenten in de geschiedenis van de Melkweg"
    },
    samenstelling: {
      summary: "Sterren, gas, stof en veel onzichtbare materie",
      text: [
        "Het grootste deel van de massa van de Melkweg is niet zichtbaar. Donkere materie maakt naar schatting 85 procent of meer van de totale massa uit; de schattingen verschillen per onderzoek. Van de gewone materie zit het meeste in sterren. De rest is gas, vooral waterstof, en stof waaruit nieuwe sterren ontstaan.",
        "Het stelsel heeft een duidelijke opbouw: een centrale verdikking met een balk van oude sterren, een dunne schijf met spiraalarmen, jonge sterren en gas, een dikkere schijf, en een bijna bolvormige halo met oude sterrenhopen. In het centrum zit Sagittarius A*, een superzwaar zwart gat van ongeveer 4 miljoen zonsmassa's."
      ],
      facts: [
        "Rode dwergen zijn veruit de talrijkste soort ster in de Melkweg.",
        "Het gas in de schijf bestaat voor ongeveer driekwart uit waterstof en een kwart uit helium (naar massa).",
        "Schattingen van het aantal sterren lopen uiteen van 100 tot 400 miljard."
      ],
      chart: {
        type: "doughnut",
        title: "Verdeling van de massa van de Melkweg (indicatief, %)",
        labels: ["Donkere materie", "Sterren", "Gas en stof"],
        values: [85, 12.5, 2.5],
        note: "Indicatieve verdeling op basis van schattingen van NASA en andere bronnen. De exacte percentages verschillen per onderzoek."
      }
    },
    toekomst: {
      summary: "Andromeda komt dichterbij, maar een botsing is niet zeker",
      text: [
        "Het Andromedastelsel beweegt met ongeveer 110 kilometer per seconde in de richting van de Melkweg. Lange tijd gold een botsing over 4 tot 5 miljard jaar als zeker. Een studie uit 2025 in Nature Astronomy nam ook de zwaartekracht van de Grote Magelhaense Wolk mee en komt op een kans van ongeveer 50 procent dat de twee stelsels binnen 10 miljard jaar samensmelten.",
        "Als ze botsen, ontstaat waarschijnlijk één groot elliptisch stelsel. Sterren zelf botsen nauwelijks, want de afstanden tussen sterren zijn enorm. Wel raken banen verstoord en komt er een golf van nieuwe sterrenvorming op gang. Los hiervan wordt de Zon over ongeveer 5 miljard jaar een rode reus."
      ],
      facts: [
        "De Grote Magelhaense Wolk, een dwergstelsel dat om de Melkweg draait, blijkt de kans op een botsing met Andromeda te beïnvloeden.",
        "Over miljarden jaren raakt het gas voor nieuwe sterren op; sterrenvorming in de Melkweg neemt langzaam af."
      ],
      events: [
        { short: "Nu", when: "Nu", text: "Andromeda nadert met ca. 110 km/s." },
        { short: "1 mld", when: "Over ca. 1 miljard jaar", text: "De Zon is ongeveer 10% helderder; het wordt veel warmer op Aarde." },
        { short: "4-5 mld", when: "Over 4 tot 5 miljard jaar", text: "Eerder verwachte botsing met Andromeda. Volgens de studie van 2025 is dit onwaarschijnlijk." },
        { short: "5 mld", when: "Over ca. 5 miljard jaar", text: "De Zon wordt een rode reus." },
        { short: "10 mld", when: "Binnen 10 miljard jaar", text: "Kans van ongeveer 50% dat Melkweg en Andromeda zijn samengesmolten." }
      ],
      chartTitle: "Tijdlijn: wat staat de Melkweg en de Zon te wachten?"
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "zonnestelsel", name: "Het Zonnestelsel", short: "Zonnestelsel", sub: "De Zon en planeten",
  tag: "Planetenstelsel",
  lead: "De Zon en alles wat door haar zwaartekracht wordt vastgehouden: acht planeten, dwergplaneten, manen, planetoïden en kometen.",
  badges: ["Planetenstelsel", "4,6 miljard jaar oud"],
  specs: [
    ["Centrale ster", "De Zon (gele dwerg)"],
    ["Leeftijd", "ca. 4,6 miljard jaar"],
    ["Planeten", "8"],
    ["Erkende dwergplaneten", "5 (o.a. Ceres en Pluto)"],
    ["Diameter van de Zon", "ca. 1,4 miljoen km"],
    ["Massa van de Zon", "99,86% van het stelsel"],
    ["Temperatuur oppervlak Zon", "ca. 5.500 °C"],
    ["Temperatuur kern Zon", "ca. 15 miljoen °C"],
    ["Lichttijd Zon – Aarde", "ca. 8 min en 20 s"],
    ["Baan om de Melkweg", "ca. 230 miljoen jaar"]
  ],
  know: "Voyager 1, in 1977 gelanceerd, is het verste door mensen gemaakte object. Het is meer dan 160 keer zo ver van de Zon als de Aarde en reist sinds 2012 door de interstellaire ruimte.",
  sections: {
    algemeen: {
      summary: "De opbouw van het stelsel, van binnen naar buiten",
      text: [
        "Het Zonnestelsel bestaat uit de Zon en alles wat eromheen draait. Dichtbij de Zon liggen de vier rotsachtige planeten: Mercurius, Venus, Aarde en Mars. Daarachter ligt de planetoïdengordel, en dan komen de gasreuzen Jupiter en Saturnus en de ijsreuzen Uranus en Neptunus. Nog verder naar buiten ligt de Kuipergordel met dwergplaneten zoals Pluto, en verder weg de Oortwolk, een theoretische wolk van ijzige objecten.",
        "De Zon bevat 99,86 procent van alle massa in het stelsel. De planeten draaien allemaal in dezelfde richting en bijna in hetzelfde vlak, een erfenis van de schijf van gas en stof waaruit ze zijn ontstaan."
      ],
      facts: [
        "De vijf erkende dwergplaneten zijn Ceres, Pluto, Haumea, Makemake en Eris.",
        "Eén astronomische eenheid (AE) is de gemiddelde afstand van de Aarde tot de Zon: ongeveer 149,6 miljoen km.",
        "Er zijn honderden manen bekend; Saturnus en Jupiter hebben er de meeste."
      ],
      chart: {
        type: "bar",
        title: "Afstand van de planeten tot de Zon (AE)",
        labels: PLANET_NAMES,
        values: DISTANCE_MKM.map(v => Math.round(v / 149.6 * 100) / 100),
        highlight: 2,
        unit: "AE",
        axis: "Astronomische eenheden (1 AE = afstand Aarde – Zon)",
        note: "Gemiddelde afstand, omgerekend uit de NASA Planetary Fact Sheet. De Aarde is blauw gemarkeerd."
      }
    },
    geschiedenis: {
      summary: "Van een wolk van gas en stof tot ons huidige beeld",
      text: [
        "Het Zonnestelsel ontstond ongeveer 4,6 miljard jaar geleden uit een instortende wolk van gas en stof. Het grootste deel van het materiaal werd de Zon. De rest vormde een draaiende schijf, waarin stofkorrels aan elkaar klonterden tot steeds grotere brokken en uiteindelijk planeten. Dichtbij de Zon was het te warm voor ijs, daar ontstonden rotsplaneten. Verder weg konden reuzen ontstaan die veel gas en ijs vasthielden.",
        "Ons beeld van het stelsel is steeds veranderd. Copernicus plaatste de Zon in 1543 in het midden, Galilei zag in 1610 manen rond Jupiter, en Newton verklaarde in 1687 de banen met zwaartekracht. In 2006 besloot de Internationale Astronomische Unie dat Pluto een dwergplaneet is."
      ],
      events: [
        { short: "4,6 mld", when: "4,6 miljard jaar geleden", text: "De Zon en de planeten ontstaan uit een wolk van gas en stof." },
        { short: "4,5 mld", when: "Ca. 4,5 miljard jaar geleden", text: "Een botsing met een protoplaneet vormt de Maan." },
        { short: "1543", when: "1543", text: "Copernicus publiceert zijn model met de Zon in het midden." },
        { short: "1610", when: "1610", text: "Galilei ontdekt de vier grote manen van Jupiter." },
        { short: "1687", when: "1687", text: "Newton beschrijft de zwaartekracht en verklaart de planeetbanen." },
        { short: "1781", when: "1781", text: "William Herschel ontdekt Uranus." },
        { short: "1846", when: "1846", text: "Neptunus wordt ontdekt, na voorspellingen op basis van wiskunde." },
        { short: "1930", when: "1930", text: "Clyde Tombaugh ontdekt Pluto." },
        { short: "2006", when: "2006", text: "Pluto wordt een dwergplaneet; er zijn nu acht planeten." }
      ],
      chartTitle: "Tijdlijn: van vorming tot nieuwe inzichten"
    },
    samenstelling: {
      summary: "Waar bestaat de Zon uit, en hoe is de massa verdeeld?",
      text: [
        "De Zon bestaat voor ongeveer driekwart uit waterstof en voor een kwart uit helium. In de kern, bij ongeveer 15 miljoen graden, smelt waterstof samen tot helium en dat levert de energie van de Zon.",
        "De planeten verschillen sterk. De binnenplaneten zijn klein en bestaan uit gesteente en metaal. Jupiter en Saturnus zijn vooral waterstof en helium. Uranus en Neptunus bevatten veel water, ammoniak en methaan in een ijzige toestand. Samen hebben de planeten maar een fractie van de massa van de Zon; Jupiter alleen is al bijna tweeënhalf keer zo zwaar als alle andere planeten bij elkaar."
      ],
      facts: [
        "Planetoïden zijn restanten van de bouwstenen van planeten, vooral tussen Mars en Jupiter.",
        "Kometen zijn bevroren brokken ijs en stof die ontstaan zijn in het koude buitenste deel van het stelsel.",
        "Zon: ca. 73% waterstof en 25% helium (naar massa)."
      ],
      chart: {
        type: "doughnut",
        title: "Verdeling van de massa van de planeten (%)",
        labels: ["Jupiter", "Saturnus", "Neptunus", "Uranus", "Mercurius, Venus, Aarde en Mars"],
        values: [71.2, 21.3, 3.8, 3.3, 0.4],
        note: "Berekend uit de massa's in de NASA Planetary Fact Sheet. De Zon, met 99,86% van alle massa, is niet meegerekend."
      }
    },
    toekomst: {
      summary: "De Zon wordt helderder en zwelt over miljarden jaren op",
      text: [
        "De Zon wordt langzaam helderder. Over ongeveer een miljard jaar straalt ze zo'n 10 procent sterker. Over ongeveer 5 miljard jaar is de waterstof in de kern op en zwelt de Zon op tot een rode reus. Mercurius en Venus worden daarbij waarschijnlijk opgeslokt; of de Aarde dat lot deelt, is onzeker.",
        "Daarna stoot de Zon haar buitenlagen af en blijft er een witte dwerg over, een compact restant dat langzaam afkoelt."
      ],
      facts: [
        "De grafiek hiernaast toont de modelmatige toename van de helderheid van de Zon.",
        "De Zon is nu ongeveer halverwege haar leven als stabiele ster."
      ],
      chart: {
        type: "flux",
        au: null,
        title: "Helderheid van de Zon de komende 3 miljard jaar (nu = 100%)",
        note: "Modelberekening: eenvoudig model van Gough (1981). Een indicatie, geen voorspelling."
      }
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "mercurius", name: "Mercurius", short: "Mercurius", sub: "Rotsplaneet", au: 0.387,
  tag: "Planeet 1 van 8",
  lead: "De kleinste planeet en de dichtstbijzijnde bij de Zon: een kale, bekraterde wereld met extreme temperatuurverschillen.",
  badges: ["Rotsplaneet", "Binnenste planeet", "Geen manen"],
  specs: [
    ["Diameter", "4.879 km"],
    ["Massa", "0,055 × Aarde"],
    ["Afstand tot de Zon", "57,9 miljoen km (0,39 AE)"],
    ["Omlooptijd (jaar)", "88 aardse dagen"],
    ["Rotatie (sterrendag)", "58,6 aardse dagen"],
    ["Zwaartekracht", "3,7 m/s²"],
    ["Gemiddelde temperatuur", "167 °C"],
    ["Manen", "0"],
    ["Ringen", "Nee"],
    ["Atmosfeer", "Zeer ijl (exosfeer)"]
  ],
  know: "Een dag op Mercurius, van zonsopgang tot zonsopgang, duurt 176 aardse dagen. Dat is twee keer zo lang als een Mercuriusjaar van 88 dagen.",
  sections: {
    algemeen: {
      summary: "Klein, snel en extreem",
      text: [
        "Mercurius is de kleinste planeet van het Zonnestelsel, maar iets groter dan onze Maan. Hij draait in slechts 88 dagen om de Zon en is daarmee de snelste planeet, met zo'n 47 kilometer per seconde. De planeet draait langzaam om zijn as: drie omwentelingen duren precies twee omlopen om de Zon.",
        "Omdat Mercurius vrijwel geen atmosfeer heeft, wordt warmte niet vastgehouden. Aan de dagzijde loopt de temperatuur op tot ongeveer 430 °C, aan de nachtzijde zakt ze tot ongeveer −180 °C. Het oppervlak lijkt sterk op dat van de Maan en zit vol kraters."
      ],
      facts: [
        "Naam: de Romeinse god van de boodschappers.",
        "Kleiner dan de manen Ganymedes (Jupiter) en Titan (Saturnus), maar veel zwaarder.",
        "De baan is de meest elliptische van de acht planeten (excentriciteit 0,206)."
      ],
      chart: diameterChart(0)
    },
    geschiedenis: {
      summary: "Al duizenden jaren bekend, pas sinds kort goed in kaart gebracht",
      text: [
        "Mercurius is met het blote oog te zien en was al in de oudheid bekend. Omdat hij dicht bij de Zon staat, is hij alleen kort na zonsondergang of voor zonsopgang zichtbaar. De oude Grieken dachten daarom lang dat het om twee verschillende hemellichamen ging.",
        "Pas ruimtevaart gaf een goed beeld. Mariner 10 vloog in 1974 en 1975 drie keer langs en bracht ongeveer de helft van het oppervlak in beeld. MESSENGER draaide van 2011 tot 2015 als eerste ruimtevaartuig om de planeet en bracht alles in kaart."
      ],
      events: [
        { short: "Oudheid", when: "Oudheid", text: "Mercurius is al bekend bij onder meer de Babyloniërs en de Grieken." },
        { short: "1631", when: "1631", text: "Pierre Gassendi ziet als eerste een overgang van Mercurius voor de Zon." },
        { short: "1965", when: "1965", text: "Radarmetingen laten zien dat Mercurius in 59 dagen om zijn as draait." },
        { short: "1974", when: "1974 – 1975", text: "Mariner 10 maakt drie scheervluchten langs Mercurius." },
        { short: "2011", when: "2011", text: "MESSENGER wordt het eerste ruimtevaartuig in een baan om Mercurius." },
        { short: "2018", when: "2018", text: "BepiColombo (ESA en JAXA) wordt gelanceerd." },
        { short: "2026", when: "2026", text: "BepiColombo staat gepland om in november in een baan om Mercurius te komen." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van Mercurius"
    },
    samenstelling: {
      summary: "Een enorme ijzeren kern onder een dun korstje",
      text: [
        "Mercurius is een dichte planeet: na de Aarde heeft hij de hoogste dichtheid van het Zonnestelsel. Dat komt door zijn grote metalen kern, die ongeveer 85 procent van de straal van de planeet inneemt. Daaromheen zit een mantel en een dunne korst van gesteente.",
        "De atmosfeer is zo ijl dat hij een exosfeer heet: atomen die door de zonnewind van het oppervlak worden geslagen. In kraters bij de polen die nooit zonlicht zien, is waterijs gevonden."
      ],
      facts: [
        "Dichtheid: 5.429 kg/m³, bijna net zo hoog als de Aarde.",
        "Mercurius heeft een eigen magnetisch veld, ondanks zijn kleine formaat.",
        "Het oppervlak bestaat uit silicaatgesteente en is rijk aan zwavel."
      ],
      chart: atmosChart(["Zuurstof", "Natrium", "Waterstof", "Helium", "Kalium en overig"], [42, 29, 22, 6, 1], "Bron: NASA Planetary Fact Sheet. De exosfeer is zo ijl dat de samenstelling steeds verandert.")
    },
    toekomst: {
      summary: "Nieuwe missie, een krimpende planeet en een lot dat vastligt",
      text: [
        "De Europees-Japanse missie BepiColombo, in 2018 gelanceerd, staat gepland om in november 2026 in een baan om Mercurius te komen. Twee ruimtevaartuigen gaan dan de planeet, zijn magnetisch veld en zijn oppervlak onderzoeken.",
        "Mercurius krimpt nog steeds langzaam doordat zijn ijzeren kern afkoelt; de straal is al ongeveer 7 kilometer kleiner geworden. Op de lange termijn kan de baan volgens simulaties met ongeveer 1 procent kans onstabiel worden. Wat vaststaat: over ongeveer 5 miljard jaar wordt de Zon een rode reus en wordt Mercurius waarschijnlijk opgeslokt."
      ],
      facts: [
        "BepiColombo: eerste orbiter (MPO) gepland op 21 november 2026, tweede (Mio) op 10 december 2026.",
        "De Zon neemt in grootte toe; Mercurius is het eerste slachtoffer."
      ],
      chart: fluxChart(0.387)
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "venus", name: "Venus", short: "Venus", sub: "Rotsplaneet", au: 0.723,
  tag: "Planeet 2 van 8",
  lead: "Even groot als de Aarde, maar een hete, gifachtige wereld onder een dik wolkendek: de heetste planeet van het Zonnestelsel.",
  badges: ["Rotsplaneet", "Dichte atmosfeer", "Geen manen"],
  specs: [
    ["Diameter", "12.104 km"],
    ["Massa", "0,815 × Aarde"],
    ["Afstand tot de Zon", "108,2 miljoen km (0,72 AE)"],
    ["Omlooptijd (jaar)", "224,7 aardse dagen"],
    ["Rotatie (sterrendag)", "243 aardse dagen (omgekeerd)"],
    ["Zwaartekracht", "8,9 m/s²"],
    ["Gemiddelde temperatuur", "464 °C"],
    ["Manen", "0"],
    ["Ringen", "Nee"],
    ["Luchtdruk oppervlak", "92 bar"]
  ],
  know: "Venus draait in de tegenovergestelde richting van bijna alle andere planeten. Op Venus komt de Zon dus op in het westen. Een dag op Venus duurt langer dan een jaar.",
  sections: {
    algemeen: {
      summary: "De tweelingzus van de Aarde, maar dan heel anders",
      text: [
        "Venus lijkt qua grootte en massa sterk op de Aarde en wordt vaak haar zusterplaneet genoemd. Daar houdt de gelijkenis op. De atmosfeer is zo dik dat de druk aan het oppervlak 92 keer zo hoog is als op Aarde, vergelijkbaar met de druk op zo'n 900 meter diepte in zee.",
        "Door een extreem broeikaseffect is het er gemiddeld 464 °C, heter dan op Mercurius, hoewel Venus twee keer zo ver van de Zon staat. Na de Zon en de Maan is Venus het helderste object aan de hemel."
      ],
      facts: [
        "Venus draait zo langzaam dat een sterrendag (243 dagen) langer is dan een jaar (225 dagen).",
        "De wolken bestaan uit zwavelzuurdruppels.",
        "Naam: de Romeinse godin van de liefde en schoonheid."
      ],
      chart: diameterChart(1)
    },
    geschiedenis: {
      summary: "Avondster, morgenster en de eerste landing op een andere planeet",
      text: [
        "Venus is al duizenden jaren bekend als de Avondster en de Morgenster. Galilei zag in 1610 dat Venus fases heeft zoals de Maan, een belangrijk bewijs dat de planeten om de Zon draaien. In 1761 ontdekte Michail Lomonosov tijdens een overgang van Venus voor de Zon dat de planeet een atmosfeer heeft.",
        "Venus was het eerste doel van de ruimtevaart. Mariner 2 vloog in 1962 als eerste ruimtevaartuig succesvol langs een andere planeet, en in 1970 landde Venera 7 als eerste op een andere planeet. Magellan bracht in de jaren 90 bijna het hele oppervlak in kaart met radar."
      ],
      events: [
        { short: "Oudheid", when: "Oudheid", text: "Venus is bekend als Avondster en Morgenster." },
        { short: "1610", when: "1610", text: "Galilei ziet de fases van Venus." },
        { short: "1761", when: "1761", text: "Lomonosov ontdekt de atmosfeer van Venus." },
        { short: "1962", when: "1962", text: "Mariner 2 is de eerste geslaagde scheervlucht langs een andere planeet." },
        { short: "1970", when: "1970", text: "Venera 7 landt en zendt als eerste gegevens vanaf een andere planeet." },
        { short: "1990", when: "1990 – 1994", text: "Magellan brengt het oppervlak in kaart met radar." },
        { short: "2015", when: "2015", text: "Het Japanse Akatsuki komt in een baan om Venus." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van Venus"
    },
    samenstelling: {
      summary: "Een atmosfeer vol koolstofdioxide",
      text: [
        "De atmosfeer van Venus bestaat voor ongeveer 96,5 procent uit koolstofdioxide en voor 3,5 procent uit stikstof, met kleine hoeveelheden zwaveldioxide. Die dichte deken houdt de warmte vast.",
        "Onder de wolken ligt een oppervlak van basalt, met uitgestrekte vlaktes, hooglanden en duizenden vulkanen. Binnenin heeft Venus waarschijnlijk een metalen kern en een mantel van gesteente, vergelijkbaar met de Aarde. Een eigen magnetisch veld is er niet."
      ],
      facts: [
        "Het oppervlak is jong: waarschijnlijk niet ouder dan enkele honderden miljoenen jaren.",
        "Dichtheid: 5.243 kg/m³.",
        "Venus heeft duizenden vulkanen; hoeveel er nog actief zijn, is onderwerp van onderzoek."
      ],
      chart: atmosChart(["Koolstofdioxide", "Stikstof"], [96.5, 3.5])
    },
    toekomst: {
      summary: "Nieuwe missies in de jaren 2030",
      text: [
        "Na jaren van relatief weinig aandacht komt Venus weer in beeld. NASA's DAVINCI en VERITAS en ESA's EnVision zijn gepland voor de jaren 2030. Ze moeten onder meer uitzoeken of Venus ooit oceanen had en of er nu nog vulkanen actief zijn.",
        "Venus laat zien wat er kan gebeuren als het broeikaseffect op hol slaat. Over ongeveer 5 miljard jaar wordt de Zon een rode reus en wordt Venus waarschijnlijk opgeslokt."
      ],
      facts: [
        "Planetenonderzoekers zien Venus als testcase voor hoe bewoonbare planeten bewoonbaar blijven.",
        "De exacte lanceerdata van de missies kunnen verschuiven."
      ],
      chart: fluxChart(0.723)
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "aarde", name: "Aarde", short: "Aarde", sub: "Rotsplaneet", au: 1,
  tag: "Planeet 3 van 8",
  lead: "Onze thuisplaneet: de enige plek waar we leven kennen, met vloeibaar water, een beschermende atmosfeer en een grote maan.",
  badges: ["Rotsplaneet", "Vloeibaar water", "1 maan"],
  specs: [
    ["Diameter", "12.756 km"],
    ["Massa", "5,97 × 10²⁴ kg"],
    ["Afstand tot de Zon", "149,6 miljoen km (1 AE)"],
    ["Omlooptijd (jaar)", "365,25 dagen"],
    ["Rotatie (sterrendag)", "23 u 56 min"],
    ["Zwaartekracht", "9,8 m/s²"],
    ["Gemiddelde temperatuur", "15 °C"],
    ["Manen", "1"],
    ["Ringen", "Nee"],
    ["Luchtdruk oppervlak", "1 bar"]
  ],
  know: "Ongeveer 71 procent van het aardoppervlak is bedekt met water. Vanuit de ruimte is de Aarde daarom blauw, en wordt ze de blauwe planeet genoemd.",
  sections: {
    algemeen: {
      summary: "De derde planeet, op precies de juiste afstand",
      text: [
        "De Aarde is de derde planeet vanaf de Zon en de grootste van de vier rotsplaneten. Ze ligt in de bewoonbare zone: op een afstand waarbij water op het oppervlak vloeibaar kan zijn. De atmosfeer houdt de warmte vast, beschermt tegen schadelijke straling en brengt meteoroïden vaak tot verbranding voor ze het oppervlak bereiken.",
        "De as van de Aarde staat ongeveer 23,4 graden schuin, en dat geeft ons de seizoenen. Onze Maan, ruim een kwart van de diameter van de Aarde, stabiliseert die kanteling en veroorzaakt eb en vloed."
      ],
      facts: [
        "De Aarde heeft een sterk magnetisch veld dat de zonnewind afbuigt.",
        "Het is de enige planeet met aangetoond leven en met platentektoniek.",
        "Dichtheid: 5.514 kg/m³, de hoogste van alle planeten."
      ],
      chart: diameterChart(2)
    },
    geschiedenis: {
      summary: "4,5 miljard jaar van vulkanen, oceanen en leven",
      text: [
        "De Aarde ontstond ongeveer 4,54 miljard jaar geleden. Kort daarna sloeg een protoplaneet tegen de jonge Aarde en ontstond uit het puin de Maan. De Aarde koelde af, er vormden zich oceanen, en minstens 3,5 miljard jaar geleden was er al leven.",
        "Ongeveer 2,4 miljard jaar geleden nam het zuurstofgehalte in de atmosfeer toe door fotosynthese. De mens, Homo sapiens, verscheen zo'n 300.000 jaar geleden. In 1543 stelde Copernicus dat de Aarde om de Zon draait, en met Spoetnik 1 in 1957 kwam de eerste kunstmatige satelliet in een baan om de Aarde."
      ],
      events: [
        { short: "4,54 mld", when: "4,54 miljard jaar geleden", text: "De Aarde ontstaat." },
        { short: "4,5 mld", when: "Ca. 4,5 miljard jaar geleden", text: "Een botsing met een protoplaneet vormt de Maan." },
        { short: "3,5 mld", when: "Minstens 3,5 miljard jaar geleden", text: "Oudste duidelijke sporen van leven." },
        { short: "2,4 mld", when: "Ca. 2,4 miljard jaar geleden", text: "Zuurstof hoopt zich op in de atmosfeer." },
        { short: "66 mln", when: "66 miljoen jaar geleden", text: "Een inslag draagt bij aan het uitsterven van de dinosauriërs." },
        { short: "300.000", when: "Ca. 300.000 jaar geleden", text: "Homo sapiens verschijnt." },
        { short: "1543", when: "1543", text: "Copernicus: de Aarde draait om de Zon." },
        { short: "1957", when: "1957", text: "Spoetnik 1, de eerste kunstmatige satelliet." },
        { short: "1972", when: "1972", text: "De Apollo 17-bemanning maakt de foto 'Blue Marble'." }
      ],
      chartTitle: "Tijdlijn: de geschiedenis van de Aarde"
    },
    samenstelling: {
      summary: "Stikstof, zuurstof en een gelaagd binnenste",
      text: [
        "De atmosfeer bestaat voor ongeveer 78 procent uit stikstof en 21 procent uit zuurstof, met een beetje argon, koolstofdioxide en waterdamp. De zuurstof is het gevolg van miljarden jaren fotosynthese.",
        "Het binnenste heeft lagen: een kern van ijzer en nikkel (de buitenkern is vloeibaar), daaromheen een dikke mantel van gesteente, en bovenop een dunne korst. De korst is slechts ongeveer 0,4 procent van de massa."
      ],
      facts: [
        "Ongeveer 32% van de massa is kern, 67% mantel en 0,4% korst.",
        "De vloeibare buitenkern veroorzaakt het magnetisch veld.",
        "De atmosfeer reikt ruwweg 100 km omhoog tot de rand van de ruimte."
      ],
      chart: atmosChart(["Stikstof", "Zuurstof", "Argon en overig"], [78.1, 20.9, 1])
    },
    toekomst: {
      summary: "Een warmere Zon en een Maan die steeds verder weg gaat",
      text: [
        "De Zon wordt langzaam helderder. Volgens veel klimaatmodellen kan de Aarde over ongeveer een miljard jaar te heet worden voor vloeibaar water: de oceanen verdampen. Over zo'n 600 miljoen jaar kan er te weinig koolstofdioxide zijn voor de meeste planten.",
        "De Maan verwijdert zich ongeveer 3,8 centimeter per jaar van de Aarde. Over ruwweg 600 miljoen jaar is ze zo ver weg dat er geen totale zonsverduisteringen meer zijn. Over ongeveer 5 miljard jaar wordt de Zon een rode reus; of de Aarde dan wordt opgeslokt, is onzeker."
      ],
      facts: [
        "De platen schuiven door: over ongeveer 250 miljoen jaar kan er weer een supercontinent zijn.",
        "De Aarde ontvangt nu ongeveer 1.361 W/m² aan zonnestraling, de zogeheten zonneconstante."
      ],
      chart: fluxChart(1, "Modelberekening: eenvoudig model van Gough (1981) voor de toename van de helderheid van de Zon. Een indicatie, geen voorspelling. Nu: ca. 1.361 W/m².")
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "mars", name: "Mars", short: "Mars", sub: "Rotsplaneet", au: 1.524,
  tag: "Planeet 4 van 8",
  lead: "De rode planeet: koud en droog, met de hoogste vulkaan van het Zonnestelsel en sporen van een vochtiger verleden.",
  badges: ["Rotsplaneet", "Dunne atmosfeer", "2 manen"],
  specs: [
    ["Diameter", "6.792 km"],
    ["Massa", "0,107 × Aarde"],
    ["Afstand tot de Zon", "228,0 miljoen km (1,52 AE)"],
    ["Omlooptijd (jaar)", "687 aardse dagen"],
    ["Rotatie (sterrendag)", "24 u 37 min"],
    ["Zwaartekracht", "3,7 m/s²"],
    ["Gemiddelde temperatuur", "−65 °C"],
    ["Manen", "2 (Phobos en Deimos)"],
    ["Ringen", "Nee"],
    ["Luchtdruk oppervlak", "ca. 0,01 bar"]
  ],
  know: "Olympus Mons op Mars is ongeveer 22 kilometer hoog, ruim twee en een half keer zo hoog als de Mount Everest en de hoogste vulkaan van het Zonnestelsel.",
  sections: {
    algemeen: {
      summary: "Koud, rood en bijna net zo groot als de helft van de Aarde",
      text: [
        "Mars is de vierde planeet vanaf de Zon en ongeveer half zo groot als de Aarde. De dagen zijn bijna even lang als de onze (24 uur en 37 minuten), en de as staat 25 graden schuin, dus Mars kent seizoenen. Een Marsjaar duurt wel bijna twee aardse jaren.",
        "De atmosfeer is erg dun, ongeveer 1 procent van de luchtdruk op Aarde. Daardoor is het er koud: gemiddeld −65 °C, met uitschieters van ongeveer 20 °C overdag in de zomer tot onder de −100 °C 's nachts. Stofstormen kunnen de hele planeet omhullen."
      ],
      facts: [
        "Naam: de Romeinse god van de oorlog; de rode kleur dankt Mars aan ijzeroxide (roest).",
        "Valles Marineris is een kloof van ongeveer 4.000 km lang, ongeveer zo lang als de Verenigde Staten breed zijn.",
        "De twee manen, Phobos en Deimos, zijn klein en onregelmatig van vorm."
      ],
      chart: diameterChart(3)
    },
    geschiedenis: {
      summary: "Van waterkanalen op papier tot rovers op het oppervlak",
      text: [
        "Mars is met het blote oog te zien en wordt al duizenden jaren bestudeerd. De nauwkeurige metingen van zijn baan hielpen Johannes Kepler om de wetten van de planeetbanen af te leiden. In 1877 zag Giovanni Schiaparelli lijnen die hij 'canali' noemde, wat later tot de misvatting van Marskanalen leidde. In hetzelfde jaar ontdekte Asaph Hall de manen Phobos en Deimos.",
        "Sinds de jaren 60 wordt Mars bezocht door ruimtevaartuigen. Viking 1 en 2 landden in 1976. Sinds 1997 rijden rovers rond: Sojourner, Spirit, Opportunity, Curiosity en Perseverance. In 2021 maakte de helikopter Ingenuity de eerste aangedreven vlucht op een andere planeet."
      ],
      events: [
        { short: "1609", when: "1609", text: "Kepler gebruikt waarnemingen van Mars om zijn wetten van de planeetbanen te onderbouwen." },
        { short: "1877", when: "1877", text: "Asaph Hall ontdekt de manen Phobos en Deimos." },
        { short: "1965", when: "1965", text: "Mariner 4 maakt de eerste foto's van dichtbij." },
        { short: "1976", when: "1976", text: "Viking 1 en 2 landen op Mars." },
        { short: "1997", when: "1997", text: "Mars Pathfinder en de rover Sojourner." },
        { short: "2004", when: "2004", text: "De rovers Spirit en Opportunity landen." },
        { short: "2012", when: "2012", text: "Curiosity landt in de krater Gale." },
        { short: "2021", when: "2021", text: "Perseverance en de helikopter Ingenuity landen; ook China's Zhurong." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van Mars"
    },
    samenstelling: {
      summary: "Een dunne atmosfeer van koolstofdioxide, ijs en roestig gesteente",
      text: [
        "De atmosfeer van Mars bestaat voor ongeveer 95 procent uit koolstofdioxide, met stikstof en argon. De korst is basalt, en het stof is rood door ijzeroxide.",
        "Bij de polen ligt ijs van water en bevroren koolstofdioxide. Onder het oppervlak zit waarschijnlijk veel waterijs. Mars heeft een metalen kern, die waarschijnlijk deels vloeibaar is. Het globale magnetische veld is verdwenen, wat helpt verklaren waarom de atmosfeer zo dun is geworden."
      ],
      facts: [
        "Rovers vonden bewijs voor oude rivieren en meren, onder meer in de krater Jezero.",
        "Dichtheid: 3.934 kg/m³, lager dan Aarde, Venus of Mercurius.",
        "Of er diep in de korst nog vloeibaar water zit, is onderwerp van discussie."
      ],
      chart: atmosChart(["Koolstofdioxide", "Stikstof", "Argon", "Overig"], [95.3, 2.7, 1.6, 0.4])
    },
    toekomst: {
      summary: "Plannen voor bezoek, en een maan die uiteenvalt",
      text: [
        "Mars blijft het belangrijkste doel van onderzoek naar leven buiten de Aarde. Er zijn plannen voor onder meer de Europese Rosalind Franklin-rover, die gepland staat voor 2028. Er zijn ook plannen om mensen naar Mars te sturen, maar daarvoor is nog geen vaste datum.",
        "De maan Phobos komt langzaam dichter bij Mars, ongeveer 1,8 meter per eeuw. Over 30 tot 50 miljoen jaar valt hij waarschijnlijk uiteen tot een ring of stort hij neer. Over ongeveer 5 miljard jaar zwelt de Zon op, maar Mars wordt waarschijnlijk niet opgeslokt."
      ],
      facts: [
        "Een terraformen van Mars, het bewoonbaar maken, is voorlopig sciencefiction.",
        "Een Marsdag heet een sol en duurt 24 uur en 39 minuten."
      ],
      chart: fluxChart(1.524)
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "jupiter", name: "Jupiter", short: "Jupiter", sub: "Gasreus", au: 5.204,
  tag: "Planeet 5 van 8",
  lead: "De grootste planeet: een gasreus waarin alle andere planeten samen meer dan twee keer passen.",
  badges: ["Gasreus", "Ringen", "95 manen"],
  specs: [
    ["Diameter", "142.984 km"],
    ["Massa", "318 × Aarde"],
    ["Afstand tot de Zon", "778,5 miljoen km (5,2 AE)"],
    ["Omlooptijd (jaar)", "11,86 aardse jaren"],
    ["Rotatie (dag)", "9 u 56 min"],
    ["Zwaartekracht", "23,1 m/s²"],
    ["Temperatuur (bij 1 bar)", "−110 °C"],
    ["Manen", "95 (bevestigd)"],
    ["Ringen", "Ja (zwak)"],
    ["Magnetisch veld", "Zeer sterk"]
  ],
  know: "Jupiter is zwaarder dan alle andere planeten van het Zonnestelsel samen, ongeveer 2,5 keer. Toch is hij niet zwaar genoeg om een ster te worden.",
  sections: {
    algemeen: {
      summary: "De koning van de planeten",
      text: [
        "Jupiter is de vijfde planeet vanaf de Zon en veruit de grootste. Zo'n 1.300 Aardes passen erin. Hij heeft geen vast oppervlak: wat we zien zijn de wolken in de bovenste laag van een enorme atmosfeer van waterstof en helium. De planeet draait razendsnel om zijn as, in iets minder dan 10 uur, waardoor hij aan de polen is afgeplat en de wolken in kleurrijke banden zijn getrokken.",
        "De beroemdste kenmerken zijn de Grote Rode Vlek, een storm die al eeuwen woedt, en de vier grote manen die Galilei in 1610 ontdekte: Io, Europa, Ganymedes en Callisto. Ganymedes is de grootste maan van het Zonnestelsel, groter dan Mercurius."
      ],
      facts: [
        "De Grote Rode Vlek is iets breder dan de Aarde en wordt al enige tijd kleiner.",
        "Jupiter heeft het sterkste magnetische veld van alle planeten.",
        "Jupiter heeft ook ringen, maar die zijn zwak en donker."
      ],
      chart: diameterChart(4)
    },
    geschiedenis: {
      summary: "De ontdekking van de manen veranderde ons wereldbeeld",
      text: [
        "Jupiter is met het blote oog te zien en was al in de oudheid bekend. Wanneer Galilei in 1610 vier manen om Jupiter zag draaien, was dat het eerste bewijs dat niet alles om de Aarde draait. Later bepaalde Ole Rømer met de manen van Jupiter voor het eerst de snelheid van het licht.",
        "Pioneer 10 vloog in 1973 als eerste langs. Voyager 1 en 2 ontdekten in 1979 de ringen en de vulkanen op Io. De Galileo-sonde ging in 1995 in een baan en liet een sonde in de atmosfeer vallen. Sinds 2016 onderzoekt Juno de planeet vanuit een polaire baan."
      ],
      events: [
        { short: "1610", when: "1610", text: "Galilei ontdekt de vier grote manen." },
        { short: "1665", when: "Ca. 1665", text: "Giovanni Cassini volgt een grote vlek, waarschijnlijk de voorloper van de Grote Rode Vlek." },
        { short: "1973", when: "1973", text: "Pioneer 10 is de eerste ruimtesonde die langs Jupiter vliegt." },
        { short: "1979", when: "1979", text: "Voyager 1 en 2 ontdekken de ringen en vulkanen op Io." },
        { short: "1995", when: "1995", text: "De Galileo-sonde komt in een baan om Jupiter." },
        { short: "2016", when: "2016", text: "Juno komt in een baan om Jupiter." },
        { short: "2023", when: "2023", text: "ESA's JUICE wordt gelanceerd; Europa Clipper volgt in 2024." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van Jupiter"
    },
    samenstelling: {
      summary: "Bijna alleen waterstof en helium",
      text: [
        "Jupiter bestaat vooral uit waterstof en helium, net als de Zon. De wolken bevatten onder meer ammoniak en water. Diep in de planeet neemt de druk zo toe dat waterstof een vloeibaar metaal wordt, dat het sterke magnetische veld opwekt.",
        "Wat zich in het midden bevindt, is nog onderwerp van onderzoek. Metingen van Juno wijzen op een kern die niet scherp afgebakend is maar 'vaag', vermengd met omringend materiaal."
      ],
      facts: [
        "Dichtheid: 1.326 kg/m³, ongeveer een kwart van de Aarde.",
        "Wat de kleuren van de wolken precies veroorzaakt, is nog niet volledig bekend.",
        "Jupiter straalt meer warmte uit dan hij van de Zon ontvangt."
      ],
      chart: atmosChart(["Waterstof", "Helium", "Methaan en overig"], [89.5, 10.2, 0.3])
    },
    toekomst: {
      summary: "Missies naar de ijsmanen",
      text: [
        "De komende jaren staan Jupiters ijzige manen centraal. NASA's Europa Clipper, in oktober 2024 gelanceerd, komt rond 2030 aan en onderzoekt of er onder het ijs van Europa een oceaan is die leven kan herbergen. ESA's JUICE, in 2023 gelanceerd, komt in 2031 aan en richt zich op Ganymedes.",
        "Jupiter blijft zo goed als onveranderd tot de Zon over ongeveer 5 miljard jaar een rode reus wordt. Dan worden de ijsmanen warmer, en kan het ijs gaan smelten."
      ],
      facts: [
        "De Grote Rode Vlek krimpt: in de 19e eeuw was hij nog zo'n 40.000 km breed.",
        "Het aantal bekende manen blijft groeien met nieuwe waarnemingen."
      ],
      chart: fluxChart(5.204)
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "saturnus", name: "Saturnus", short: "Saturnus", sub: "Gasreus", au: 9.572,
  tag: "Planeet 6 van 8",
  lead: "De planeet met de spectaculaire ringen: een gasreus die lichter is dan water.",
  badges: ["Gasreus", "Opvallende ringen", "274 manen"],
  specs: [
    ["Diameter", "120.536 km"],
    ["Massa", "95 × Aarde"],
    ["Afstand tot de Zon", "1.432 miljoen km (9,6 AE)"],
    ["Omlooptijd (jaar)", "29,4 aardse jaren"],
    ["Rotatie (dag)", "10 u 42 min"],
    ["Zwaartekracht", "9,0 m/s²"],
    ["Temperatuur (bij 1 bar)", "−140 °C"],
    ["Manen", "274 (bevestigd)"],
    ["Ringen", "Ja (opvallend)"],
    ["Dichtheid", "687 kg/m³"]
  ],
  know: "Saturnus heeft een gemiddelde dichtheid van 687 kg/m³, lager dan die van water (1.000 kg/m³). In een denkbeeldig bad groot genoeg zou de planeet blijven drijven.",
  sections: {
    algemeen: {
      summary: "De tweede reus, met een ringenstelsel van meer dan 280.000 km breed",
      text: [
        "Saturnus is de zesde planeet vanaf de Zon en na Jupiter de grootste. De planeet draait snel om zijn as, in iets minder dan 11 uur, en is daardoor sterk afgeplat. De atmosfeer is vooral waterstof en helium, met zachte gele en bruine banden.",
        "Het hoogtepunt zijn de ringen. Ze zijn bijna 300.000 kilometer breed, maar op de meeste plaatsen slechts tientallen meters dik. Rond de noordpool ligt een zeshoekige storm die is vastgelegd door Cassini. Saturnus heeft de meeste bekende manen, waaronder Titan, de enige maan met een dichte atmosfeer."
      ],
      facts: [
        "De ringen zijn vooral waterijs, van stofkorrels tot brokken zo groot als huizen.",
        "Titan is groter dan Mercurius en heeft meren van vloeibare methaan en ethaan.",
        "Enceladus spuit waterdamp en ijs de ruimte in vanuit een oceaan onder zijn ijskorst."
      ],
      chart: diameterChart(5)
    },
    geschiedenis: {
      summary: "Van 'oren' tot de Cassini-missie",
      text: [
        "Saturnus is al sinds de oudheid bekend als de verste planeet met het blote oog. Galilei zag in 1610 vreemde 'oren' aan de planeet, maar kon niet begrijpen wat het was. Christiaan Huygens, een Nederlander, ontdekte in 1655 de maan Titan en begreep in 1659 dat de planeet door een dunne ring wordt omringd.",
        "In 2004 kwam Cassini in een baan om Saturnus en bleef daar 13 jaar. De sonde Huygens, genoemd naar Christiaan Huygens, landde in 2005 op Titan. In 2017 eindigde de missie met een gecontroleerde duik in de atmosfeer."
      ],
      events: [
        { short: "1610", when: "1610", text: "Galilei ziet 'oren' aan Saturnus." },
        { short: "1655", when: "1655", text: "Christiaan Huygens ontdekt Titan." },
        { short: "1659", when: "1659", text: "Huygens beschrijft de ring." },
        { short: "1675", when: "1675", text: "Cassini ontdekt de opening in de ringen, nu de Cassini-spleet." },
        { short: "1979", when: "1979 – 1981", text: "Pioneer 11 en Voyager 1 en 2 vliegen langs." },
        { short: "2004", when: "2004", text: "Cassini komt in een baan om Saturnus." },
        { short: "2005", when: "2005", text: "De Huygens-sonde landt op Titan." },
        { short: "2017", when: "2017", text: "Cassini eindigt met een duik in Saturnus." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van Saturnus"
    },
    samenstelling: {
      summary: "Waterstof, helium en ringen van ijs",
      text: [
        "De atmosfeer bestaat voor ongeveer 96 procent uit waterstof en 3 procent uit helium, met een beetje methaan. Diep in de planeet gaat het gas over in vloeibare en metallische waterstof, rond een kern van gesteente en ijs.",
        "De ringen bestaan voor 95 tot 99 procent uit waterijs, met een beetje rotsstof. De korrels draaien allemaal als kleine maantjes om de planeet."
      ],
      facts: [
        "Saturnus is de enige planeet die minder dicht is dan water.",
        "Het zeshoekige patroon rond de noordpool heeft een doorsnede van ongeveer 30.000 km.",
        "Tijdens de Cassini-missie werd 'ringregen' gemeten: materiaal dat uit de ringen naar de planeet valt."
      ],
      chart: atmosChart(["Waterstof", "Helium", "Methaan"], [96.3, 3.25, 0.45])
    },
    toekomst: {
      summary: "De ringen verdwijnen, en Dragonfly gaat naar Titan",
      text: [
        "De ringen van Saturnus zijn niet voor altijd. Materiaal valt uit de ringen naar de planeet, 'ringregen'. Op basis van Cassini-gegevens schatten wetenschappers dat de ringen over 100 tot 300 miljoen jaar zijn verdwenen.",
        "NASA's Dragonfly, een helikopter op kernenergie, staat gepland voor lancering in 2028 en komt in 2034 aan op Titan. Over ongeveer 5 miljard jaar wordt de Zon een rode reus; Titan kan dan tijdelijk warm genoeg worden voor vloeibaar water."
      ],
      facts: [
        "De leeftijd van de ringen is onderwerp van discussie: schattingen lopen uiteen van enkele honderden miljoenen tot miljarden jaren.",
        "Dragonfly is de eerste missie die een vliegend voertuig op Titan inzet."
      ],
      chart: fluxChart(9.572)
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "uranus", name: "Uranus", short: "Uranus", sub: "IJsreus", au: 19.19,
  tag: "Planeet 7 van 8",
  lead: "De ijsreus die op zijn zij ligt: een koude, blauwgroene wereld die maar één keer van dichtbij is bezocht.",
  badges: ["IJsreus", "Gekanteld op zijn zij", "28 manen"],
  specs: [
    ["Diameter", "51.118 km"],
    ["Massa", "14,5 × Aarde"],
    ["Afstand tot de Zon", "2.867 miljoen km (19,2 AE)"],
    ["Omlooptijd (jaar)", "83,7 aardse jaren"],
    ["Rotatie (dag)", "17 u 14 min (omgekeerd)"],
    ["Zwaartekracht", "8,7 m/s²"],
    ["Temperatuur (bij 1 bar)", "−195 °C"],
    ["Manen", "28 (bevestigd)"],
    ["Ringen", "Ja (13)"],
    ["Kanteling van de as", "97,8°"]
  ],
  know: "Uranus draait op zijn zij. Daardoor is er op elke pool ongeveer 42 jaar licht gevolgd door 42 jaar duisternis.",
  sections: {
    algemeen: {
      summary: "Een planeet die rolt in plaats van tolt",
      text: [
        "Uranus is de zevende planeet vanaf de Zon en de derde grootste. De as staat bijna haaks op het baanvlak, met 97,8 graden. Daardoor lijkt Uranus op zijn baan te rollen, en zijn de seizoenen extreem: elk seizoen duurt zo'n 21 jaar. Een mogelijke verklaring is een enorme botsing in het verleden.",
        "De atmosfeer is koud, tot ongeveer −224 °C is gemeten, de laagste temperatuur in het Zonnestelsel. De planeet heeft 13 bekende ringen en 28 bekende manen, die vernoemd zijn naar personages van Shakespeare en Alexander Pope."
      ],
      facts: [
        "Een jaar op Uranus duurt bijna 84 aardse jaren.",
        "De planeet draait, net als Venus, in tegenovergestelde richting om zijn as.",
        "Voyager 2 is in 1986 als enige ruimtesonde langsgevlogen."
      ],
      chart: diameterChart(6)
    },
    geschiedenis: {
      summary: "De eerste planeet die met een telescoop werd ontdekt",
      text: [
        "Uranus was de eerste planeet die niet in de oudheid bekend was. William Herschel zag hem op 13 maart 1781 met een telescoop en dacht eerst aan een komeet. Het werd duidelijk dat het een nieuwe planeet was, waarmee het Zonnestelsel in één klap twee keer zo groot werd.",
        "In 1977 werden de ringen ontdekt toen Uranus voor een ster langs schoof. Voyager 2 vloog in 1986 langs en is tot nu toe de enige sonde die de planeet bezocht. In 2022 maakte de James Webb-telescoop nieuwe beelden van de ringen."
      ],
      events: [
        { short: "1781", when: "1781", text: "William Herschel ontdekt Uranus." },
        { short: "1787", when: "1787", text: "Herschel ontdekt de manen Titania en Oberon." },
        { short: "1948", when: "1948", text: "Gerard Kuiper ontdekt de maan Miranda." },
        { short: "1977", when: "1977", text: "De ringen worden ontdekt bij een sterbedekking." },
        { short: "1986", when: "1986", text: "Voyager 2 vliegt langs, de enige bezoeker tot nu toe." },
        { short: "2022", when: "2022", text: "De James Webb-telescoop fotografeert de ringen." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van Uranus"
    },
    samenstelling: {
      summary: "Een mantel van 'ijs' onder een atmosfeer van waterstof en helium",
      text: [
        "De atmosfeer bestaat voor ongeveer 83 procent uit waterstof, 15 procent uit helium en 2 procent uit methaan. Methaan neemt rood licht op en geeft Uranus zijn blauwgroene kleur.",
        "Onder de atmosfeer ligt een dikke mantel van water, ammoniak en methaan in een hete, dichte vloeibare toestand: astronomen noemen dat 'ijs', ook al is het niet bevroren. Daaronder zit een kleine rotsachtige kern."
      ],
      facts: [
        "Dichtheid: 1.270 kg/m³.",
        "Het magnetische veld staat scheef ten opzichte van de rotatieas.",
        "Uranus straalt opvallend weinig eigen warmte uit."
      ],
      chart: atmosChart(["Waterstof", "Helium", "Methaan"], [82.5, 15.2, 2.3])
    },
    toekomst: {
      summary: "Een nieuwe missie staat bovenaan het verlanglijstje",
      text: [
        "In 2022 zette de Amerikaanse planetaire wetenschap een Uranus Orbiter en Probe bovenaan de lijst met prioriteiten voor een nieuwe grote missie. Die zou een baan om de planeet maken en een sonde in de atmosfeer laten vallen. Een lancering rond het begin van de jaren 2030 is bekeken, maar er is nog geen definitief besluit.",
        "De seizoenen wisselen langzaam: rond 2028 bereikt Uranus een zonnewende, waarbij een pool recht naar de Zon wijst. Over ongeveer 5 miljard jaar wordt de Zon een rode reus, wat de buitenplaneten waarschijnlijk niet opslokt."
      ],
      facts: [
        "Uranus is zo ver weg dat een reis er meer dan tien jaar duurt.",
        "Er is nog veel onbekend over de binnenkant en de manen."
      ],
      chart: fluxChart(19.19)
    }
  }
},

/* ------------------------------------------------------------------ */
{
  id: "neptunus", name: "Neptunus", short: "Neptunus", sub: "IJsreus", au: 30.07,
  tag: "Planeet 8 van 8",
  lead: "De verste planeet: een donkerblauwe ijsreus met de hardste winden van het Zonnestelsel.",
  badges: ["IJsreus", "Verste planeet", "16 manen"],
  specs: [
    ["Diameter", "49.528 km"],
    ["Massa", "17,1 × Aarde"],
    ["Afstand tot de Zon", "4.515 miljoen km (30,1 AE)"],
    ["Omlooptijd (jaar)", "163,7 aardse jaren"],
    ["Rotatie (dag)", "16 u 6 min"],
    ["Zwaartekracht", "11,0 m/s²"],
    ["Temperatuur (bij 1 bar)", "−200 °C"],
    ["Manen", "16 (bevestigd)"],
    ["Ringen", "Ja (5)"],
    ["Windsnelheid", "tot ca. 2.000 km/u"]
  ],
  know: "Neptunus is de enige planeet die eerst met wiskunde werd 'gevonden' en daarna pas met een telescoop gezien. De berekeningen van Urbain Le Verrier wezen in 1846 de plek aan waar hij stond.",
  sections: {
    algemeen: {
      summary: "Ver, koud en stormachtig",
      text: [
        "Neptunus is de achtste en verste planeet van het Zonnestelsel. Het licht van de Zon doet er ruim vier uur over om hem te bereiken. Een jaar duurt er bijna 165 aardse jaren, dus Neptunus heeft sinds zijn ontdekking pas één keer een volledige omloop gemaakt.",
        "Ondanks de afstand is de atmosfeer actief. Er waaien de snelste winden van het Zonnestelsel, tot ongeveer 2.000 kilometer per uur, en er verschijnen donkere stormen die na enkele jaren weer verdwijnen. De planeet geeft ongeveer 2,6 keer zo veel warmte af als hij van de Zon ontvangt."
      ],
      facts: [
        "Naam: de Romeinse god van de zee.",
        "De grootste maan, Triton, draait in de omgekeerde richting om de planeet.",
        "Voyager 2 is in 1989 als enige ruimtesonde langsgevlogen."
      ],
      chart: diameterChart(7)
    },
    geschiedenis: {
      summary: "Ontdekt dankzij wiskunde",
      text: [
        "Nadat Uranus was ontdekt, bleek zijn baan niet precies te kloppen. Urbain Le Verrier en John Couch Adams berekenden onafhankelijk dat een nog onbekende planeet daarvoor verantwoordelijk moest zijn. Op 23 september 1846 vond Johann Galle in Berlijn Neptunus, binnen een graad van de voorspelde plek.",
        "Triton werd al enkele weken later ontdekt. Voyager 2 vloog in 1989 langs en ontdekte de Grote Donkere Vlek, ringen en ijsgeisers op Triton. In 2011 voltooide Neptunus zijn eerste hele baan sinds zijn ontdekking."
      ],
      events: [
        { short: "1846", when: "1846", text: "Neptunus wordt ontdekt in Berlijn na voorspellingen van Le Verrier." },
        { short: "1846", when: "1846", text: "William Lassell ontdekt de maan Triton." },
        { short: "1989", when: "1989", text: "Voyager 2 vliegt langs en ontdekt de Grote Donkere Vlek." },
        { short: "2011", when: "2011", text: "Neptunus maakt zijn eerste volledige omloop sinds de ontdekking." },
        { short: "2022", when: "2022", text: "De James Webb-telescoop fotografeert de ringen." }
      ],
      chartTitle: "Tijdlijn: ontdekking en verkenning van Neptunus"
    },
    samenstelling: {
      summary: "Net als Uranus, maar met meer interne warmte",
      text: [
        "De atmosfeer bestaat voor ongeveer 80 procent uit waterstof, 19 procent uit helium en 1,5 procent uit methaan. Methaan geeft de planeet een blauwe tint, maar Neptunus is dieper blauw dan Uranus. Wat daarvoor zorgt, is nog niet precies bekend.",
        "Onder de atmosfeer ligt een mantel van water, ammoniak en methaan, onder hoge druk en bij hoge temperatuur, rond een rotsachtige kern. Neptunus is zwaarder dan Uranus, maar iets kleiner."
      ],
      facts: [
        "Dichtheid: 1.638 kg/m³, hoger dan die van Jupiter, Saturnus en Uranus.",
        "Neptunus heeft vijf hoofdringen met klontjes van stof en ijs.",
        "Triton is waarschijnlijk een ingevangen object uit de Kuipergordel."
      ],
      chart: atmosChart(["Waterstof", "Helium", "Methaan"], [80, 19, 1.5])
    },
    toekomst: {
      summary: "Een maan die in stukken breekt",
      text: [
        "Triton draait tegen de richting van Neptunus in en komt daardoor heel langzaam dichterbij. Over ongeveer 3,6 miljard jaar komt hij zo dichtbij dat de getijdenkrachten hem waarschijnlijk uiteen laten vallen, waarna een nieuwe, indrukwekkende ring kan ontstaan.",
        "Er is geen goedgekeurde missie naar Neptunus. Voorstellen voor een orbiter bestaan, maar de reis is lang. Over ongeveer 5 miljard jaar wordt de Zon een rode reus."
      ],
      facts: [
        "De donkere vlekken op Neptunus komen en gaan binnen enkele jaren.",
        "Neptunus staat op een afstand waarop de Zon ongeveer 900 keer zwakker schijnt dan op Aarde."
      ],
      chart: fluxChart(30.07)
    }
  }
}

];
