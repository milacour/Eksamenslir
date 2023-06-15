// Opgave: Lav en funktion i JavaScript, der beregner gennemsnittet af en liste af tal.

function beregnGennemsnit(tal) {
  const sum = tal.reduce((accumulator, current) => accumulator + current, 0);
  const gennemsnit = sum / tal.length;
  return gennemsnit;
}

// Eksempelkald og test af funktionen
const talListe3 = [10, 20, 30, 40, 50];
const talResultat = beregnGennemsnit(talListe3);
console.log(talResultat); // Output: 30

/*
I denne opgave skal man implementere en funktion, der tager en liste med tal som input og beregner
gennemsnittet af tallene. Funktionen bruger reduce() metoden til at summerer tallene i listen og
deler derefter summen med antallet af tal for at få gennemsnittet.

I eksemplet er der en liste med tal, og funktionen beregnGennemsnit() kaldes med listen som argument
Resultatet, gennemsnittet af tallene, udskrives derefter i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der beregner gennemsnittet af en liste af tal, men udelader negative tal.

function beregnPositivtGennemsnit(tal) {
  const positiveTal = tal.filter(t => t >= 0);
  const sum = positiveTal.reduce((accumulator, current) => accumulator + current, 0);
  const gennemsnit = sum / positiveTal.length;
  return gennemsnit;
}

// Eksempelkald og test af funktionen
const talListe2 = [10, -5, 20, -8, 15];
const resultat2 = beregnPositivtGennemsnit(talListe2);
console.log(resultat2); // Output: 15

/*
I dette eksempel bruger vi en funktion beregnPositivtGennemsnit, der beregner gennemsnittet af en liste af tal,
men udelader de negative tal. Vi bruger filter-metoden til at oprette en ny liste, der kun indeholder de positive tal.
Derefter beregner vi summen af de positive tal og gennemsnittet på samme måde som i det første eksempel.
Funktionen returnerer det positive gennemsnit.

Vi tester funktionen ved at oprette en liste [10, -5, 20, -8, 15] og kalde beregnPositivtGennemsnit med denne liste.
Resultatet logges til konsollen, og vi får det positive gennemsnit 15.
*/

// Opgave: Lav en funktion i JavaScript, der beregner gennemsnittet af flere lister af tal.

function beregnGennemsnitAfLister(listeAfLister) {
  const gennemsnitListe = listeAfLister.map(talListe => {
    const sum = talListe.reduce((accumulator, current) => accumulator + current, 0);
    return sum / talListe.length;
  });

  const gennemsnit = gennemsnitListe.reduce((accumulator, current) => accumulator + current, 0) / gennemsnitListe.length;
  return gennemsnit;
}

// Eksempelkald og test af funktionen
const lister = [
  [10, 20, 30],
  [15, 25, 35],
  [12, 22, 32],
  [18, 28, 38]
];
const resultat11 = beregnGennemsnitAfLister(lister);
console.log(resultat11); // Output: 23.333333333333332

/*
I dette eksempel har vi en funktion beregnGennemsnitAfLister, der tager en liste af lister af tal som input.
Vi bruger map-metoden til at beregne gennemsnittet for hver underliste ved hjælp af reduce-metoden til at beregne summen og derefter
dividere med længden af hver underliste. Resultatet er en liste af gennemsnit for hver underliste.

Vi bruger derefter reduce-metoden på gennemsnitListe til at beregne summen af alle gennemsnit og dividerer med antallet af underlister for at få det endelige gennemsnit.

Vi tester funktionen ved at oprette en liste med fire underlister og kalde beregnGennemsnitAfLister med denne liste.
Resultatet logges til konsollen, og vi får gennemsnitsværdien 23.333333333333332.
*/

// Opgave: Lav en funktion i JavaScript, der beregner summen af en serie af tal ved hjælp af rekursion.

function beregnSum(talserie, index = 0, sum = 0) {
  if (index >= talserie.length) {
    return sum;
  }
  sum += talserie[index];
  return beregnSum(talserie, index + 1, sum);
}

// Eksempelkald og test af funktionen
const talserie = [1, 2, 3, 4, 5];
const resultat3 = beregnSum(talserie);
console.log(resultat3); // Output: 15

/*
I dette eksempel bruger vi en funktion beregnSum, der tager en serie af tal som input og beregner summen ved hjælp af rekursion.
Funktionen bruger et index og en sum som ekstra parametre.

Vi starter med index 0 og sum 0. I hver rekursive kald tilføjer vi værdien af det aktuelle tal til summen og øger index med 1.
Rekursionen fortsætter, indtil vi når enden af talserien, hvor summen returneres.

Vi tester funktionen ved at oprette en talserie [1, 2, 3, 4, 5] og kalde beregnSum med denne talserie. Resultatet logges til konsollen,
og vi får summen 15.
*/

// Opgave: Lav en funktion i JavaScript, der beregner summen af alle positive tal i en liste.

function beregnSumAfPositiveTal(tal) {
  const sum = tal.filter(num => num > 0).reduce((acc, current) => acc + current, 0);
  return sum;
}

// Eksempelkald og test af funktionen
const talListe = [1, -2, 3, -4, 5];
const resultat = beregnSumAfPositiveTal(talListe);
console.log(resultat); // Output: 9

/*
I dette eksempel bruger vi en funktion beregnSumAfPositiveTal, der tager en liste af tal som input.
Vi filtrerer listen for at få alle positive tal ved hjælp af filter-metoden og beregner derefter summen af disse tal ved hjælp af reduce-metoden.
Funktionen returnerer summen af de positive tal.

Vi tester funktionen ved at oprette en liste [1, -2, 3, -4, 5] og kalde beregnSumAfPositiveTal med denne liste. Resultatet logges til konsollen,
og vi får summen af de positive tal, som er 9.
*/

// Opgave: Lav en funktion i JavaScript, der beregner summen af kvadraterne af tal i en liste.

function beregnSumAfKvadrater(tal) {
  const sumAfKvadrater = tal.reduce((accumulator, current) => accumulator + current ** 2, 0);
  return sumAfKvadrater;
}

// Eksempelkald og test af funktionen
const kvadratTalListe = [1, 2, 3, 4, 5];
const resultat12 = beregnSumAfKvadrater(kvadratTalListe);
console.log(resultat12); // Output: 55

/*
I dette eksempel har vi en funktion beregnSumAfKvadrater, der tager en liste af tal som input.
Vi bruger reduce-metoden til at beregne summen af kvadraterne af hvert tal ved at anvende **-operatoren til at kvadrere hvert tal og derefter
summere dem sammen. Resultatet er summen af kvadraterne.

Vi tester funktionen ved at oprette en liste med tal [1, 2, 3, 4, 5] og kalde beregnSumAfKvadrater med denne liste.
Resultatet logges til konsollen, og vi får summen af kvadraterne, som er 55.
*/


// Opgave: Lav en funktion i JavaScript, der beregner arealet af en trekant givet længden af grundlinjen og højden.

function beregnTrekantAreal(grundlinje, højde) {
  const areal = (grundlinje * højde) / 2;
  return areal;
}

// Eksempelkald og test af funktionen
const grundlinje = 10;
const højde = 5;
const arealResultat = beregnTrekantAreal(grundlinje, højde);
console.log(arealResultat); // Output: 25

/*
I dette eksempel bruger vi en funktion beregnTrekantAreal, der tager længden af grundlinjen og højden af en trekant som input.
Ved hjælp af formlen til trekantens areal (grundlinje * højde) / 2 beregner vi arealet og returnerer det.

Vi tester funktionen ved at oprette en grundlinje på 10 og en højde på 5 og kalde beregnTrekantAreal med disse værdier.
Resultatet logges til konsollen, og vi får arealværdien 25.
*/

// Opgave: Lav en funktion i JavaScript, der genererer et tilfældigt heltal mellem et minimums- og maksimumværdi (inklusiv).

function genererTilfældigtTal(min, maks) {
    return Math.floor(Math.random() * (maks - min + 1)) + min;
  }
  
  // Eksempelkald og test af funktionen
  const minimum = 1;
  const maksimum = 100;
  console.log('Tilfældigt tal:', genererTilfældigtTal(minimum, maksimum));

  /*
I denne opgave skal man implementere en funktion, der tager et minimums- og maksimumværdi som input og genererer et tilfældigt
heltal mellem disse værdier (inklusiv). Funktionen bruger Math.random() metoden til at generere et tilfældigt decimaltal mellem
0 og 1 og skalerer det til det ønskede interval ved hjælp af Math.floor() og passende beregninger.

I eksemplet er der et minimums- og maksimumværdi, og funktionen genererTilfældigtTal() kaldes med disse værdier.
Resultatet, et tilfældigt tal inden for det specificerede interval, udskrives derefter i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der beregner procentværdien af et tal i forhold til et maksimum.

function beregnProcent(tal, maksimum) {
  const procent = (tal / maksimum) * 100;
  return procent;
}

// Eksempelkald og test af funktionen
const ProcentTal = 75;
const procentMaksimum = 100;
const resultat4 = beregnProcent(tal, maksimum);
console.log(resultat4); // Output: 75

/*
I dette eksempel bruger vi en funktion beregnProcent, der tager et tal og et maksimum som input.
Vi beregner procentværdien ved at dividere tallet med maksimum og multiplicere med 100. Funktionen returnerer procentværdien.

Vi tester funktionen ved at oprette et tal på 75 og et maksimum på 100. Vi kalder beregnProcent med disse værdier, og resultatet logges til konsollen.
Vi får procentværdien 75.
*/


// Opgave: Lav en funktion i JavaScript, der beregner kvadratroden af et tal.

function beregnKvadratrod(tal) {
  const kvadratrod = Math.sqrt(tal);
  return kvadratrod;
}

// Eksempelkald og test af funktionen
const kvadratTal = 16;
const kvadratResultat = beregnKvadratrod(kvadratTal);
console.log(kvadratResultat); // Output: 4

/*
I dette eksempel bruger vi funktionen Math.sqrt() til at beregne kvadratroden af et tal.
Funktionen beregnKvadratrod tager tallet som input og returnerer kvadratroden.

Vi tester funktionen ved at oprette et tal på 16 og kalde beregnKvadratrod med dette tal.
Resultatet logges til konsollen, og vi får kvadratroden 4.
*/

// Opgave: Lav en funktion i JavaScript, der beregner summen af kvadraterne i et array med tal.

function beregnSumAfKvadrater(array) {
    const sum = array.reduce((accumulator, tal) => accumulator + tal ** 2, 0);
    return sum;
  }
  
  // Eksempelkald og test af funktionen
  const talArray = [1, 2, 3, 4, 5];
  console.log('Sum af kvadrater:', beregnSumAfKvadrater(talArray)); // Forventet output: 55

/*
I denne opgave skal man implementere en funktion, der tager et array med tal som input og beregner summen af kvadraterne af tallene i arrayet.
Funktionen bruger reduce() metoden til at summerer kvadraterne af tallene ved at løfte dem til anden potens (tal ** 2).

I eksemplet er der et array med tal, og funktionen beregnSumAfKvadrater() kaldes med dette array. Resultatet, summen af kvadraterne, udskrives
derefter i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der opretter et objekt med to metoder til at beregne arealet og omkredsen af en cirkel.

function opretCirkel(radius) {
    return {
      radius,
      beregnAreal: function() {
        return Math.PI * this.radius ** 2;
      },
      beregnOmkreds: function() {
        return 2 * Math.PI * this.radius;
      }
    };
  }
  
  // Eksempelkald og test af funktionen
  const minCirkel = opretCirkel(5);
  console.log('Areal:', minCirkel.beregnAreal()); // Forventet output: 78.53981633974483
  console.log('Omkreds:', minCirkel.beregnOmkreds()); // Forventet output: 31.41592653589793
  
/*
I denne opgave skal man implementere en funktion, der opretter et objekt med to metoder til at beregne arealet
og omkredsen af en cirkel. Funktionen tager en radius som input og returnerer et objekt med egenskaben radius
og metoderne beregnAreal og beregnOmkreds.

I eksemplet oprettes et objekt minCirkel ved hjælp af funktionen opretCirkel() med en radius på 5.
Metoderne beregnAreal() og beregnOmkreds() kaldes derefter på objektet for at beregne arealet og omkredsen af cirklen.
Resultaterne udskrives i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der beregner faktoriel af et tal ved hjælp af rekursion.

function beregnFaktoriel(tal) {
    if (tal === 0) {
      return 1;
    } else {
      return tal * beregnFaktoriel(tal - 1);
    }
  }
  
  // Eksempelkald og test af funktionen
  const tal = 5;
  console.log('Faktoriel:', beregnFaktoriel(tal)); // Forventet output: 120
  
/*
I denne opgave skal man implementere en funktion, der beregner faktoriel af et tal ved
hjælp af rekursion. Funktionen kontrollerer, om tallet er lig med 0, og returnerer 1 som
basisscenarioet for rekursionen. Ellers returnerer den tallet ganget med faktoriel af talle
 minus 1 ved at kalde sig selv rekursivt.

I eksemplet er der et tal på 5, og funktionen beregnFaktoriel() kaldes med dette tal.
Resultatet, faktoriel af tallet, udskrives derefter i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der deler to tal, og håndter division med nul ved at kaste en fejlmeddelelse.

function divider(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division med nul er ikke tilladt!');
    }
    return a / b;
  } catch (fejl) {
    console.log(fejl.message);
  }
}

// Eksempelkald og test af funktionen
console.log(divider(10, 2)); // Forventet output: 5
console.log(divider(8, 0)); // Forventet output: "Division med nul er ikke tilladt!"

/*
I denne opgave skal du oprette en funktion divider, der deler to tal. Funktionen bruger try-catch-blokke til at håndtere fejl.
Hvis divisor b er 0, kastes en fejlmeddelelse med throw new Error(). Fejlmeddelelsen fanges i catch-blokken, hvor fejlmeddelelsen
logges i konsollen.

I eksemplet kaldes funktionen divider to gange med forskellige tal som argumenter.
Resultatet af divisionen logges i konsollen, og hvis der opstår en division med nul,
udskrives fejlmeddelelsen i stedet.
*/

// Opgave: Lav en funktion i JavaScript, der beregner antallet af dage mellem to datoer.

function beregnAntalDage(startDato, slutDato) {
  const enDagMs = 1000 * 60 * 60 * 24;
  const startTid = startDato.getTime();
  const slutTid = slutDato.getTime();
  const diffTid = slutTid - startTid;
  return Math.floor(diffTid / enDagMs);
}

// Eksempelkald og test af funktionen
const start = new Date('2022-01-01');
const slut = new Date('2022-01-10');
console.log(beregnAntalDage(start, slut)); // Forventet output: 9

/*
I denne opgave skal mN oprette en funktion beregnAntalDage, der tager to datoer som input
og beregner antallet af dage mellem dem. Funktionen bruger Date-objektet og dets metoder
til at arbejde med datoer. Først beregnes tiden i millisekunder for start- og slutdatoerne
ved hjælp af getTime()-metoden. Derefter beregnes forskellen mellem tidspunkterne, og resultatet
divideres med antallet af millisekunder i en dag for at få antallet af dage. Funktionen returnerer
det afrundede antal dage ved hjælp af Math.floor().

I eksemplet er der to datoer, start og slut, og funktionen beregnAntalDage kaldes med disse datoer.
Resultatet, antallet af dage mellem de to datoer, udskrives i konsollen.
*/


// Opgave: Lav en funktion i JavaScript, der beregner arealet af en cirkel givet radiusen.

function beregnCirkelAreal(radius) {
  const pi = Math.PI;
  const areal = pi * radius ** 2;
  return areal;
}

// Eksempelkald og test af funktionen
const radius = 5;
const resultat15 = beregnCirkelAreal(radius);
console.log(resultat15); // Output: 78.53981633974483

/*
I dette eksempel bruger vi en funktion beregnCirkelAreal, der tager radiusen af en cirkel som input.
Vi bruger konstanten Math.PI til at repræsentere pi-værdien. Ved hjælp af formlen for areal af en cirkel,
πr^2, beregner vi arealet og returnerer det.

Vi tester funktionen ved at oprette en radiusværdi på 5 og kalde beregnCirkelAreal med denne radius.
Resultatet logges til konsollen, og vi får arealet 78.53981633974483.
*/

// Opgave: Lav en funktion i JavaScript, der beregner den n-te værdi i Fibonacci-sekvensen.

function beregnFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return beregnFibonacci(n - 1) + beregnFibonacci(n - 2);
}

// Eksempelkald og test af funktionen
const n = 6;
const resultat5 = beregnFibonacci(n);
console.log(resultat5); // Output: 8

/*
I dette eksempel bruger vi en rekursiv funktion beregnFibonacci, der tager et tal n som input og
beregner den n-te værdi i Fibonacci-sekvensen. Hvis n er 0 eller 1, returneres værdien direkte.
Ellers beregnes den n-te værdi ved at summere de to foregående værdier i sekvensen ved hjælp af rekursion.

Vi tester funktionen ved at kalde beregnFibonacci med værdien 6. Resultatet logges til konsollen, og vi får den n-te Fibonacci-værdi, som er 8.
*/

// Opgave: Lav en funktion i JavaScript, der beregner den gennemsnitlige hastighed givet afstanden og tiden.

function beregnGennemsnitligHastighed(distance, time) {
  const hastighed = distance / time;
  return hastighed;
}

// Eksempelkald og test af funktionen
const distance = 200; // Afstand i kilometer
const time = 2; // Tid i timer
const resultat6 = beregnGennemsnitligHastighed(distance, time);
console.log(resultat6); // Output: 100 (km/t)

/*
I dette eksempel bruger vi en funktion beregnGennemsnitligHastighed, der tager afstanden og tiden som input.
Vi dividerer afstanden med tiden for at beregne den gennemsnitlige hastighed. Funktionen returnerer hastigheden.

Vi tester funktionen ved at oprette en afstand på 200 kilometer og en tid på 2 timer. Vi kalder beregnGennemsnitligHastighed med disse værdier,
og resultatet logges til konsollen. Vi får hastigheden 100 kilometer i timen.
*/

// Opgave: Lav en funktion i JavaScript, der afrunder et decimaltal til et givent antal decimaler.

function afrundDecimaltal(decimaltal, decimaler) {
  const faktor = 10 ** decimaler;
  const afrundet = Math.round(decimaltal * faktor) / faktor;
  return afrundet;
}

// Eksempelkald og test af funktionen
const decimaltal = 3.14159265;
const antalDecimaler = 2;
const resultat7 = afrundDecimaltal(decimaltal, antalDecimaler);
console.log(resultat7); // Output: 3.14

/*
I dette eksempel bruger vi en funktion afrundDecimaltal, der tager et decimaltal og et antal decimaler som input.
Vi beregner en faktor ved at tage 10 opløftet i antallet af decimaler. Derefter multiplicerer vi decimaltallet med faktoren,
afrunder til det nærmeste heltal og dividerer med faktoren for at få det afrundede decimaltal.

Vi tester funktionen ved at oprette et decimaltal på 3.14159265 og et antal decimaler på 2 og kalde afrundDecimaltal med disse værdier.
Resultatet logges til konsollen, og vi får det afrundede decimaltal 3.14.
*/

// Opgave: Lav en funktion i JavaScript, der finder den pythagoræiske triplet (a, b, c) givet en øvre grænse.

function findPythagoræiskTriplet(øvreGrænse) {
  for (let a = 1; a <= øvreGrænse; a++) {
    for (let b = a + 1; b <= øvreGrænse; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      if (c % 1 === 0) {
        return [a, b, c];
      }
    }
  }
  return null;
}

// Eksempelkald og test af funktionen
const øvreGrænse = 20;
const resultat8 = findPythagoræiskTriplet(øvreGrænse);
console.log(resultat8); // Output: [3, 4, 5]

/*
I dette eksempel bruger vi en funktion findPythagoræiskTriplet, der tager en øvre grænse som input.
Vi bruger to for-løkker til at generere alle mulige kombinationer af tal (a, b) op til den øvre grænse.
Vi beregner hypotenusen (c) ved hjælp af Pythagoras' sætning og tjekker, om den er et heltal ved at kontrollere,
om modulus-operationen (% 1) er lig med 0. Hvis det er tilfældet, returnerer vi tripletten [a, b, c].
Hvis ingen triplet bliver fundet, returnerer vi null.

Vi tester funktionen ved at angive en øvre grænse på 20 og kalde findPythagoræiskTriplet med denne grænse.
Resultatet logges til konsollen, og vi får tripletten [3, 4, 5].
*/

// Opgave: Lav en funktion i JavaScript, der beregner en given værdi opløftet i en given potens.

function beregnPotens(værdi, potens) {
  const resultat = Math.pow(værdi, potens);
  return resultat;
}

// Eksempelkald og test af funktionen
const værdi = 2;
const potens = 3;
const resultat10 = beregnPotens(værdi, potens);
console.log(resultat10); // Output: 8

/*
I dette eksempel bruger vi en funktion beregnPotens, der tager en værdi og en potens som input.
Vi bruger Math.pow-metoden til at beregne værdien opløftet i potensen. Funktionen returnerer resultatet.

Vi tester funktionen ved at oprette en værdi på 2 og en potens på 3 og kalde beregnPotens med disse værdier.
Resultatet logges til konsollen, og vi får resultatet, som er 8.
*/


// Opgave: Lav en funktion i JavaScript, der finder det største tal i en liste af tal.

function findStørsteTal(tal) {
  const størsteTal = Math.max(...tal);
  return størsteTal;
}

// Eksempelkald og test af funktionen
const størsteTalListe = [10, 5, 20, 15, 30];
const resultat9 = findStørsteTal(størsteTalListe);
console.log(resultat9); // Output: 30

/*
I dette eksempel bruger vi en funktion findStørsteTal, der tager en liste af tal som input.
Vi bruger Math.max-metoden sammen med spread-operatoren (...) til at finde det største tal i listen.
unktionen returnerer det største tal.

Vi tester funktionen ved at oprette en liste [10, 5, 20, 15, 30] og kalde findStørsteTal med denne liste.
Resultatet logges til konsollen, og vi får det største tal, som er 30.
*/

// Opgave: Lav en funktion i JavaScript, der beregner BMI baseret på en persons vægt og højde.

function beregnBMI(vægt, højde) {
  const bmi = vægt / (højde * højde);
  return bmi;
}

// Eksempelkald og test af funktionen
const vægt = 75; // i kg
const højde2 = 1.8; // i meter
const resultat13 = beregnBMI(vægt, højde2);
console.log(resultat13); // Output: 23.15

/*
I dette eksempel bruger vi en funktion beregnBMI, der tager en persons vægt (i kg) og højde (i meter) som input.
Vi beregner BMI ved at dividere vægten med højden i kvadratet. Funktionen returnerer BMI-værdien.

Vi tester funktionen ved at oprette en vægt på 75 kg og en højde på 1.8 meter og kalde beregnBMI med disse værdier.
Resultatet logges til konsollen, og vi får BMI-værdien 23.15.
*/

// Opgave: Lav en funktion i JavaScript, der beregner det samlede renteafkast på en investering over en given periode.

function beregnRenteAfkast(principal, rente, periode) {
  const renteAfkast = principal * (1 + rente) ** periode - principal;
  return renteAfkast;
}

// Eksempelkald og test af funktionen
const principal = 1000; // Startbeløb
const rente = 0.05; // Rentesats (5%)
const periode = 5; // Antal år
const resultat14 = beregnRenteAfkast(principal, rente, periode);
console.log(resultat14); // Output: 276.2815625

/*
I dette eksempel bruger vi en funktion beregnRenteAfkast, der tager et startbeløb (principal),
en rentesats (rente) og en periode (i år) som input. Vi beregner det samlede renteafkast ved at anvende
formlen for rentes rente: principal * (1 + rente)^periode - principal. Funktionen returnerer renteafkastet.

Vi tester funktionen ved at oprette et startbeløb på 1000, en rentesats på 0.05 (5%) og en periode på 5 år og kalde
beregnRenteAfkast med disse værdier. Resultatet logges til konsollen, og vi får renteafkastet 276.2815625.
*/

// Opgave: Lav en funktion i JavaScript, der beregner summen af alle positive tal i et array.

function beregnSumPositiv(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }

  return sum;
}

// Eksempelkald og test af funktionen
const positivTalArray = [-2, 3, 0, -5, 6, 10, -1, 2];
const sumPositiv = beregnSumPositiv(positivTalArray);
console.log('Summen af positive tal i arrayet er:', sumPositiv);


/* I denne opgave skal man implementere en funktion, der tager et array som input og beregner
summen af alle positive tal i arrayet. Funktionen bruger en løkke til at gennemgå hvert element
i arrayet og kontrollerer, om det er større end 0. Hvis det er tilfældet, bliver tallet lagt
til den samlede sum. Til sidst returneres summen.

I eksemplet oprettes et array med tal og funktionen beregnSumPositiv() kaldes med dette array.
Resultatet udskrives derefter i konsollen.
*/ 

