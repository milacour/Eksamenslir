// Opgave: Lav en funktion i JavaScript, der sorterer et array med tal i stigende rækkefølge.

function sorterTal(array) {
    return array.sort((a, b) => a - b);
  }
  
  // Eksempelkald og test af funktionen
  const talEksempelArray = [8, 3, 5, 2, 10, 1];
  const sorteretArray = sorterTal(talEksempelArray);
  console.log('Sorteret array:', sorteretArray);
  
/*
I denne opgave skal man implementere en funktion, der tager et array af tal som input og returnerer
arrayet sorteret i stigende rækkefølge. Funktionen bruger sort() metoden på arrayet og en sammenligningsfunktion
til at sortere tallene korrekt. Funktionen returnerer det sorterende array.

I eksemplet oprettes et array med tal, og funktionen sorterTal() kaldes med dette array.
Det sorteret array udskrives derefter i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der filtrerer et array og returnerer et nyt array med kun positive tal.

function filtrerPositiveTal(array2) {
  return array2.filter(tal => tal > 0);
}

// Eksempelkald og test af funktionen
const tal2Array = [-1, 3, -5, 0, 10, -2];
console.log(filtrerPositiveTal(tal2Array)); // Forventet output: [3, 10]

/*
I denne opgave skal man oprette en funktion filtrerPositiveTal, der tager et array som input og filtrerer det,
så kun positive tal er tilbage. Funktionen bruger filter()-metoden på arrayet og en betingelse (tal > 0) for at bestemme,
hvilke elementer der skal bevares i det filtrerede array.

I eksemplet er der et array med tal, og funktionen filtrerPositiveTal kaldes med dette array.
Resultatet, det filtrerede array med kun positive tal, udskrives i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der tager et array af navne som input og returnerer et nyt array med navnene i stort format.

function konverterTilStortFormat(navnArray) {
  return navnArray.map(navn => navn.toUpperCase());
}

// Eksempelkald og test af funktionen
const navne = ['Alice', 'Bob', 'Charlie'];
console.log(konverterTilStortFormat(navne)); // Forventet output: ['ALICE', 'BOB', 'CHARLIE']

/* I denne opgave skal man oprette en funktion konverterTilStortFormat, der tager et array af navne som input og returnerer et nyt array
med navnene i stort format. Funktionen bruger map()-metoden på arrayet og anvender toUpperCase()-metoden på hvert navn for at konvertere
det til stort format.

I eksemplet er der et array med navne, og funktionen konverterTilStortFormat kaldes med dette array. Resultatet, et nyt array med navnene
i stort format, udskrives i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der tager et array af tal som input og udskriver hvert tal i konsollen.

function udskrivTal(talArray) {
  talArray.forEach(tal => console.log(tal));
}

// Eksempelkald og test af funktionen
const tal = [1, 2, 3, 4, 5];
udskrivTal(tal);
// Forventet output:
// 1
// 2
// 3
// 4
// 5

/*
I denne opgave skal man oprette en funktion udskrivTal, der tager et array af tal som input og udskriver hvert tal i konsollen.
Funktionen bruger forEach()-metoden på arrayet til at iterere over hvert element og udføre en handling, i dette tilfælde at
udskrive tallet i konsollen.

I eksemplet er der et array med tal, og funktionen udskrivTal kaldes med dette array.
Resultatet er, at hvert tal i arrayet udskrives i konsollen på separate linjer.
*/

// Opgave: Lav en funktion i JavaScript, der tager et array af objekter og sorterer dem baseret på en bestemt egenskab.

function sorterObjekter(array, egenskab) {
  return array.sort((a, b) => a[egenskab] > b[egenskab] ? 1 : -1);
}

// Eksempelkald og test af funktionen
const personer = [
  { navn: 'Alice', alder: 25 },
  { navn: 'Bob', alder: 30 },
  { navn: 'Charlie', alder: 20 }
];
console.log(sorterObjekter(personer, 'alder')); // Forventet output: [{ navn: 'Charlie', alder: 20 }, { navn: 'Alice', alder: 25 }, { navn: 'Bob', alder: 30 }]

/*
I denne opgave skal man oprette en funktion sorterObjekter, der tager et array af objekter som input og sorterer dem baseret på en bestemt egenskab.
Funktionen bruger sort()-metoden på arrayet og en sammenligningsfunktion til at afgøre rækkefølgen af objekterne. Sammenligningsfunktionen sammenligner værdien
af den angivne egenskab for hvert par af objekter og returnerer en sorteringsværdi baseret på resultatet af sammenligningen.

I eksemplet er der et array af personobjekter, og funktionen sorterObjekter kaldes med arrayet og egenskaben 'alder'.
Resultatet, det sorteret array af objekter baseret på alder, udskrives i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der tager et array af tal som input og returnerer summen af alle talene.

function beregnSum(array) {
  return array.reduce((sum, tal) => sum + tal, 0);
}

// Eksempelkald og test af funktionen
const talArray = [1, 2, 3, 4, 5];
console.log(beregnSum(talArray)); // Forventet output: 15

/*
I denne opgave skal man oprette en funktion beregnSum, der tager et array af tal som input og returnerer summen af alle talene ved hjælp af reduce()-metoden på arrayet.
reduce()-metoden tager en reduceringsfunktion som parameter, der udfører en handling på hvert element i arrayet og akkumulerer resultatet.

I eksemplet er der et array af tal, og funktionen beregnSum kaldes med dette array. Resultatet, summen af alle talene, udskrives i konsollen.
*/

// Opgave: Lav en funktion i JavaScript, der tager et array af brugere som input og genererer HTML-kode til at vise brugerne i en liste.

function genererBrugerListe(brugere) {
  const listeElement = document.createElement('ul');

  brugere.forEach(bruger => {
    const listepunkt = document.createElement('li');
    listepunkt.textContent = `${bruger.navn} (${bruger.alder} år)`;
    listeElement.appendChild(listepunkt);
  });

  return listeElement;
}

// Eksempelkald og test af funktionen
const brugere = [
  { navn: 'Alice', alder: 25 },
  { navn: 'Bob', alder: 30 },
  { navn: 'Charlie', alder: 20 }
];

const brugerListe = genererBrugerListe(brugere);
document.body.appendChild(brugerListe);

/*
I denne opgave skal man oprette en funktion genererBrugerListe, der tager et array af brugere som input og genererer
HTML-kode til at vise brugerne i en liste. Funktionen bruger createElement() til at oprette <ul>- og <li>-elementer.
Ved hjælp af en forEach-løkke og template strings (${}) tilføjes brugerne som listeelementer til den oprettede liste.
Til sidst returneres <ul>-elementet.

I eksemplet er der et array af brugere, og funktionen genererBrugerListe kaldes med dette array.
Resultatet, en HTML-liste med brugerne, bliver tilføjet til dokumentet ved at bruge appendChild() på document.body.
*/

// Opgave: Lav en funktion i JavaScript, der beregner gennemsnittet af et array med objekter baseret på en bestemt attribut.

function beregnGennemsnit(array, attribut) {
  const sum = array.reduce((accumulator, current) => accumulator + current[attribut], 0);
  const gennemsnit = sum / array.length;
  return gennemsnit;
}

// Eksempelkald og test af funktionen
const data = [
  { navn: "A", værdi: 10 },
  { navn: "B", værdi: 20 },
  { navn: "C", værdi: 30 },
  { navn: "D", værdi: 40 },
  { navn: "E", værdi: 50 }
];
const attribut = "værdi";
const resultat = beregnGennemsnit(data, attribut);
console.log(resultat); // Output: 30

/*
I dette eksempel har vi en funktion beregnGennemsnit, der tager et array af objekter og en attribut som input.
Vi bruger reduce-metoden til at beregne summen af værdierne for den angivne attribut i hvert objekt i arrayet.
Derefter dividerer vi summen med længden af arrayet for at få gennemsnittet. Funktionen returnerer gennemsnittet.

Vi tester funktionen ved at oprette et array data med objekter, der indeholder et navn og en værdi.
Vi angiver attributten "værdi" og kalder beregnGennemsnit med data og attributten. Resultatet logges til konsollen,
og vi får gennemsnitsværdien 30.
*/


