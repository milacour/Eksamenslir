// Opgave: Lav en metode i JavaScript, der konverterer en given sætning til titel-case.

function konverterTilTitelCase(sætning) {
    const ordArray = sætning.split(' ');
  
    for (let i = 0; i < ordArray.length; i++) {
      const førsteBogstav = ordArray[i][0].toUpperCase();
      const restenAfOrdet = ordArray[i].substring(1).toLowerCase();
      ordArray[i] = førsteBogstav + restenAfOrdet;
    }
  
    return ordArray.join(' ');
  }
  
  // Eksempelkald og test af metoden
  const tekst = 'dette er en sætning i små bogstaver';
  const titelCaseTekst = konverterTilTitelCase(tekst);
  console.log('Sætningen i titel-case er:', titelCaseTekst);
  
  /* I denne opgave skal man implementere en metode, der tager en sætning som input og returnerer
  sætningen i titel-case, hvor hvert ord starter med et stort bogstav og resten af ordet er i
  små bogstaver. Metoden opdeler sætningen i et array af ord ved hjælp af split()-funktionen og
  mellemrum som adskillelsesparameter. Derefter gennemgår den hvert ord i arrayet. For hvert ord
  konverteres det første bogstav til stort bogstav ved hjælp af toUpperCase(), og resten af ordet
  konverteres til små bogstaver ved hjælp af toLowerCase(). Til sidst samles ordene sammen igen ved
  hjælp af join(' '), hvor mellemrummet bruges som adskillelse.
  
  I eksemplet oprettes en sætning i små bogstaver, og metoden konverterTilTitelCase() kaldes med
  sætningen som argument. Resultatet, sætningen i titel-case, udskrives derefter i konsollen.
  */

  // Opgave: Lav en funktion i JavaScript, der tager en dato som input i formatet "yyyy-mm-dd" og returnerer den i formatet "dd-mm-yyyy".

function konverterDato(dato) {
    const datoArray = dato.split('-');
    const dag = datoArray[2];
    const måned = datoArray[1];
    const år = datoArray[0];
    return `${dag}-${måned}-${år}`;
  }
  
  // Eksempelkald og test af funktionen
  const dato = '2022-07-15';
  console.log('Konverteret dato:', konverterDato(dato)); // Forventet output: '15-07-2022'
  
  /*
I denne opgave skal du implementere en funktion, der tager en dato som input i formatet "yyyy-mm-dd"
og konverterer den til formatet "dd-mm-yyyy". Funktionen splitter datoen ved bindestregen og genopbygger
den i det ønskede format ved at ændre rækkefølgen på dag, måned og år. Den konverterede dato returneres som en streng.

I eksemplet er der en dato, og funktionen konverterDato() kaldes med denne dato. Resultatet, den konverterede dato,
udskrives derefter i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der konverterer en temperatur fra Celsius til Fahrenheit.

function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
  }
  
  // Eksempelkald og test af funktionen
  const celsius = 25;
  const resultat = celsiusToFahrenheit(celsius);
  console.log(resultat); // Output: 77
  
/*
I dette eksempel bruger vi en funktion celsiusToFahrenheit, der tager en temperatur i Celsius som input.
Vi anvender formlen til at konvertere Celsius til Fahrenheit: (Celsius * 9/5) + 32. Funktionen returnerer Fahrenheit-værdien.

Vi tester funktionen ved at oprette en Celsius-værdi på 25 og kalde celsiusToFahrenheit med denne værdi.
Resultatet logges til konsollen, og vi får Fahrenheit-værdien 77.
*/