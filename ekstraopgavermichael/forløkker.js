// Opgave: Lav en for-løkke, der udskriver tallene fra 1 til 10 i konsollen.

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
/*
I denne opgave skal du bruge en for-løkke til at udskrive tallene fra 1 til 10 i konsollen.
Løkken starter med en variabel i initialiseret til 1, og løkken gentages så længe i er mindre
end eller lig med 10. I hver iteration af løkken øges værdien af i med 1, og tallet udskrives i konsollen.
*/

// Opgave: Lav en for-løkke, der summerer tallene fra 1 til 10 og gemmer resultatet i en variabel.

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Summen er:", sum);

/* I denne opgave skal du bruge en for-løkke til at summere tallene fra 1 til 10 og gemme resultatet i variablen sum.
Løkken starter med en variabel i initialiseret til 1, og løkken gentages så længe i er mindre end eller lig med 10.
I hver iteration af løkken tilføjes værdien af i til sum, så summen gradvist opdateres. Til sidst udskrives summen i konsollen.
*/

// Opgave: Lav en for-løkke, der genererer en HTML-tabel med rækker og kolonner.

const rows = 4;
const columns = 3;

let table = "<table>";

for (let i = 0; i < rows; i++) {
  table += "<tr>";
  
  for (let j = 0; j < columns; j++) {
    table += "<td>Række " + (i + 1) + ", Kolonne " + (j + 1) + "</td>";
  }
  
  table += "</tr>";
}

table += "</table>";

console.log(table);

/*
I denne opgave skal du bruge to for-løkker til at generere en HTML-tabel med et bestemt antal rækker og kolonner.
De to variabler rows og columns angiver antallet af rækker og kolonner i tabellen. Første løkke går igennem hver række,
og inden for hver række går anden løkke igennem hver kolonne. I hver iteration af anden løkke opbygges en celle med
den passende række- og kolonneværdi. Til sidst samles alle rækker og kolonner op i variablen table, der indeholder
den komplette HTML-tabel. Resultatet udskrives i konsollen.
*/

// Opgave: Lav en for-løkke, der beregner faktorialen af et tal.

const num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("Faktorialen af", num, "er:", factorial);

/* I denne opgave skal du bruge en for-løkke til at beregne faktorialen af et givet tal.
Faktorialen af et tal er produktet af alle positive heltal mindre end eller lig med det givne tal.
Løkken starter med en variabel i initialiseret til 1, og løkken gentages så længe i er mindre end eller
lig med det givne tal (num). I hver iteration af løkken multipliceres factorial med værdien af i,
så faktorialen gradvist opdateres. Til sidst udskrives faktorialen i konsollen.
*/

// Opgave: Lav en for-løkke, der genererer Fibonacci sekvensen op til et givent antal led.

const num2 = 8;
let fibSeq = [0, 1];

for (let i = 2; i < num2; i++) {
  fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
}

console.log("Fibonacci sekvensen op til", num2, "led:", fibSeq);

/*
I denne opgave skal du bruge en for-løkke til at generere Fibonacci sekvensen op til et givet antal led.
Fibonacci sekvensen er en sekvens af tal, hvor hvert tal er summen af de to foregående tal.
Løkken starter med en variabel i initialiseret til 2, da de første to tal allerede er defineret som 0 og 1.
Løkken gentages, indtil i når det givne antal led (num). I hver iteration af løkken beregnes det næste tal i
sekvensen ved at summere de to foregående tal og gemmes i fibSeq arrayet. Til sidst udskrives Fibonacci sekvensen
i konsollen.
*/

// Opgave: Lav en for-løkke, der genererer en multiplikationstabel op til et givet tal.

const num3 = 5;

for (let i = 1; i <= num3; i++) {
  for (let j = 1; j <= num3; j++) {
    const resultat = i * j;
    console.log(i + " * " + j + " = " + resultat);
  }
  console.log("--------------------");
}

/*
I denne opgave skal du bruge to for-løkker til at generere en multiplikationstabel op til et givet tal
Den første løkke styrer rækkerne i tabellen, og den anden løkke styrer kolonnerne. For hver kombination 
af række og kolonne beregnes produktet og udskrives i konsollen. Derudover indsættes en linje adskiller
 hver række i tabellen.
 */

// Opgave: Lav en for-løkke, der udskriver tallene fra et givet tal ned til 1.

const num4 = 10;

for (let i = num4; i >= 1; i--) {
  console.log(i);
}

/*
I denne opgave skal du bruge en for-løkke til at udskrive tallene fra et givet tal ned til 1 i omvendt rækkefølge.
Løkken starter med variablen i initialiseret til det givne tal, og den gentages så længe i er større end eller lig med 1.
I hver iteration af løkken udskrives værdien af i i konsollen, og i opdateres med værdien af i - 1.
Dette skaber en udskrivning i omvendt rækkefølge
*/

