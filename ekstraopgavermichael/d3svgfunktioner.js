// Opgave: Lav en funktion i JavaScript, der bruger D3 og SVG til at oprette en cirkel på en given position med en given radius.

function opretCirkel(positionX, positionY, radius) {
    const svg = d3.select("body").append("svg").attr("width", 400).attr("height", 400);
    svg.append("circle")
      .attr("cx", positionX)
      .attr("cy", positionY)
      .attr("r", radius)
      .style("fill", "red");
  }
  
  // Eksempelkald og test af funktionen
  opretCirkel(200, 200, 50);
  
/*
I denne opgave bruger man D3 og SVG til at oprette en simpel rød cirkel i et SVG-element. Funktionen opretCirkel tager
positionen (positionX og positionY) samt radiusen som input. Ved hjælp af D3's select og append-metoder oprettes et
SVG-element og tilføjes til HTML-dokumentet. Derefter tilføjes en cirkel til SVG-elementet ved at angive cx (x-koordinat),
cy (y-koordinat) og r (radius) attributter. Cirklen farves rød ved at anvende style-metoden.

I eksemplet kaldes opretCirkel med positionen (200, 200) og en radius på 50. Dette resulterer i oprettelsen af en rød cirkel
i midten af SVG-elementet.
*/

// Opgave: Lav en funktion i JavaScript, der bruger D3 og SVG til at oprette et kagediagram baseret på et givet datasæt.

function opretKagediagram(dataset) {
  const svgWidth = 400;
  const svgHeight = 300;
  const radius = Math.min(svgWidth, svgHeight) / 2;

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  const pie = d3.pie()
    .value(d => d);

  const svg = d3.select("body").append("svg").attr("width", svgWidth).attr("height", svgHeight);

  const arcs = svg.selectAll("arc")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("class", "arc")
    .attr("transform", `translate(${svgWidth / 2}, ${svgHeight / 2})`);

  arcs.append("path")
    .attr("d", arc)
    .attr("fill", (d, i) => d3.schemeCategory10[i]);
}

// Eksempelkald og test af funktionen
const data = [30, 50, 20];
opretKagediagram(data);

/*
I dette eksempel bruger vi D3 og SVG til at oprette et kagediagram baseret på et givet datasæt.
Funktionen opretKagediagram tager datasættet som input.

Vi definerer en radius baseret på SVG-elementets bredde og højde. Vi bruger også d3.arc() til at definere en buegenerator,
der vil generere buerne til kagediagrammet. Vi bruger d3.pie() til at oprette en pie-layoutfunktion,
der vil konvertere datapunkterne til en pie-layoutdatastruktur.

Vi opretter et SVG-element og angiver bredden og højden på det. Derefter bruger vi selectAll til at vælge alle arc-elementer
og binder pie-layoutdataen til disse elementer. Vi opretter en gruppe (g) for hver arc og angiver en transformering for at
centrere diagrammet. Derefter tilføjer vi en path til hver arc og angiver d-attributten til at være baseret på arc-generatoren.
Vi farver hver bue ved hjælp af fill og d3.schemeCategory10 farveskalaen.

I eksemplet oprettes et kagediagram baseret på datasættet [30, 50, 20]. Hver bue i diagrammet vil have en andel baseret på 
datapunkternes værdier og vil blive farvet ved hjælp af en farveskala.
*/

// Opgave: Lav en funktion i JavaScript, der bruger D3 og SVG til at oprette en tooltip i en datavisualisering ved mouseover-hændelse.

function opretTooltip(elementId, tekst) {
  const element = d3.select("#" + elementId);
  
  element.on("mouseover", () => {
    d3.select("#tooltip")
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY + "px")
      .text(tekst)
      .classed("synlig", true);
  });
  
  element.on("mouseout", () => {
    d3.select("#tooltip")
      .classed("synlig", false);
  });
}

// Eksempelkald og test af funktionen
opretTooltip("cirkel", "Dette er en cirkel");

/*
I dette eksempel bruger vi D3 og SVG til at oprette en tooltip i en datavisualisering,
der vises ved mouseover-hændelse. Funktionen opretTooltip tager elementets id og tooltip-teksten som input.

Vi bruger D3's select-metode til at vælge det angivne element baseret på dets id. Vi tilføjer derefter eventlyttere
til elementet for mouseover og mouseout-hændelser.

Når musemarkøren bevæger sig over elementet (mouseover), oprettes en div med id'et "tooltip" og tilpasses til musemarkørens
position. Teksten sættes til den angivne tooltip-tekst, og CSS-klassen "synlig" tilføjes for at gøre tooltip'en synlig.

Når musemarkøren fjernes fra elementet (mouseout), fjernes "synlig" CSS-klassen fra tooltip'en, hvilket gør den usynlig.

I eksemplet oprettes en tooltip i forbindelse med et element med id'et "cirkel", og teksten "Dette er en cirkel" vises,
når musen placeres over elementet.
*/

// Opgave: Lav en funktion i JavaScript, der bruger D3 og SVG til at opbygge et simpelt interaktivt kort.

function opretInteraktivtKort(kortData) {
  const svg = d3.select("body").append("svg").attr("width", 800).attr("height", 600);
  
  svg.selectAll("path")
    .data(kortData.features)
    .enter().append("path")
    .attr("d", d3.geoPath())
    .attr("fill", "steelblue")
    .on("mouseover", function(d) {
      d3.select(this).attr("fill", "orange");
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", "steelblue");
    });
}

// Eksempelkald og test af funktionen
const kortData = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", geometry: { type: "Point", coordinates: [10, 20] } },
    { type: "Feature", geometry: { type: "Point", coordinates: [30, 40] } },
    { type: "Feature", geometry: { type: "Point", coordinates: [50, 60] } }
  ]
};
opretInteraktivtKort(kortData);

/*
I dette eksempel bruger vi D3 og SVG til at opbygge et simpelt interaktivt kort baseret på geografiske data.
Funktionen opretInteraktivtKort tager kortdata som input.

Vi opretter et SVG-element og angiver dets dimensioner.
Vi bruger selectAll-metoden til at vælge eksisterende path-elementer eller oprette nye baseret på kortdataens features.
Vi bruger geoPath-metoden til at konvertere geografiske data til SVG-stier.

Vi angiver en standard farve ("steelblue") til hvert path-element og tilføjer hændelseslyttere for mouseover og mouseout-hændelser.
Når musen befinder sig over et element, skifter farven til "orange", og når musen fjernes, skifter farven tilbage til den oprindelige farve.

I eksemplet oprettes et simpelt interaktivt kort baseret på det angivne kortdata. Der vises tre punkter på kortet, og når musen placeres over et punkt,
skifter farven midlertidigt.
*/