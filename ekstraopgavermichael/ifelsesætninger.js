// Opgave: Lav en funktion i JavaScript, der beregner den n-te værdi i Fibonacci-sekvensen.

function beregnFibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let a = 0;
      let b = 1;
      let resultat = 0;
      for (let i = 2; i <= n; i++) {
        resultat = a + b;
        a = b;
        b = resultat;
      }
      return resultat;
    }
  }
  
  // Eksempelkald og test af funktionen
  const n = 6;
  const resultat = beregnFibonacci(n);
  console.log(resultat); // Output: 8

/*
I dette eksempel bruger vi en funktion beregnFibonacci, der tager et ikke-negativt heltal som input.
Vi håndterer specialtilfældene, hvor tallet er 0 eller 1, og returnerer henholdsvis 0 og 1 i disse tilfælde.
Ellers bruger vi en for-løkke til at beregne den n-te værdi i Fibonacci-sekvensen ved hjælp af to variabler, a og b,
der repræsenterer de foregående tal i sekvensen. Vi opdaterer variablerne i hver iteration af løkken. Funktionen returnerer resultatet.

Vi tester funktionen ved at oprette tallet 6 og kalde beregnFibonacci med dette tal.
Resultatet logges til konsollen, og vi får værdien 8, som er den 6. værdi i Fibonacci-sekvensen.
*/

// Opgave: Lav en funktion i JavaScript, der bedømmer en elevs eksamensresultat baseret på en givet score.

function bedømEksamensresultat(score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  // Eksempelkald og test af funktionen
  const elevScore = 75;
  const resultat2 = bedømEksamensresultat(elevScore);
  console.log(resultat2); // Output: "C"

/*
I dette eksempel bruger vi en funktion bedømEksamensresultat, der tager en elevs score som input.
Vi bruger en række if-else-udtryk til at evaluere scoren og returnere den tilsvarende bedømmelse.
Hvis scoren er 90 eller derover, returnerer funktionen "A". Hvis scoren er mellem 80 og 89, returneres "B", og så videre.
Hvis ingen af betingelserne er opfyldt, returneres "F".

Vi tester funktionen ved at oprette en elevscore på 75 og kalde bedømEksamensresultat med denne score.
esultatet logges til konsollen, og vi får bedømmelsen "C".
*/

// Opgave: Lav en funktion i JavaScript, der bestemmer årstiden baseret på et givet månedsnummer.

function bestemÅrstid(månedsnummer) {
    if (månedsnummer === 12 || månedsnummer === 1 || månedsnummer === 2) {
      return "Vinter";
    } else if (månedsnummer >= 3 && månedsnummer <= 5) {
      return "Forår";
    } else if (månedsnummer >= 6 && månedsnummer <= 8) {
      return "Sommer";
    } else if (månedsnummer >= 9 && månedsnummer <= 11) {
      return "Efterår";
    } else {
      return "Ugyldigt månedsnummer";
    }
  }
  
  // Eksempelkald og test af funktionen
  const månedsnummer = 7;
  const resultat3 = bestemÅrstid(månedsnummer);
  console.log(resultat3); // Output: "Sommer"

/*
I dette eksempel bruger vi en funktion bestemÅrstid, der tager et månedsnummer som input.
Vi bruger en række if-else-udtryk til at bestemme årstiden baseret på det givne månedsnummer.
Hvis månedsnummeret er 12, 1 eller 2, returnerer funktionen "Vinter".
Hvis månedsnummeret er mellem 3 og 5, returneres "Forår", og så videre.
Hvis ingen af betingelserne er opfyldt, returneres "Ugyldigt månedsnummer".

Vi tester funktionen ved at oprette et månedsnummer på 7 og kalde bestemÅrstid med dette nummer.
Resultatet logges til konsollen, og vi får årstiden "Sommer".
*/


// Opgave: Lav en funktion i JavaScript, der tjekker gyldigheden af et brugernavn og en adgangskode.

function tjekLogin(brugernavn, adgangskode) {
    const korrektBrugernavn = "admin";
    const korrektAdgangskode = "password";
  
    if (brugernavn === korrektBrugernavn && adgangskode === korrektAdgangskode) {
      return "Login successful";
    } else {
      return "Login failed";
    }
  }
  
  // Eksempelkald og test af funktionen
  const brugernavn = "admin";
  const adgangskode = "password";
  const resultat4 = tjekLogin(brugernavn, adgangskode);
  console.log(resultat4); // Output: "Login successful"
  
/*
I dette eksempel har vi en funktion tjekLogin, der tager et brugernavn og en adgangskode som input.
Vi definerer et korrekt brugernavn og adgangskode, og bruger en if-else-sætning til at tjekke, om de angivne værdier matcher de korrekte værdier.

Vi tester funktionen ved at oprette et brugernavn "admin" og en adgangskode "password" og kalde tjekLogin med disse værdier.
Resultatet logges til konsollen, og vi får beskeden "Login successful".
*/

// Opgave: Lav en funktion i JavaScript, der tjekker et tal for at afgøre, om det er positivt, negativt eller nul.

function tjekTal(tal) {
    if (tal > 0) {
      console.log("Tallet er positivt.");
    } else if (tal < 0) {
      console.log("Tallet er negativt.");
    } else {
      console.log("Tallet er nul.");
    }
  }
  
  // Eksempelkald og test af funktionen
  tjekTal(5); // Output: Tallet er positivt.
  tjekTal(-3); // Output: Tallet er negativt.
  tjekTal(0); // Output: Tallet er nul.


/*
I dette eksempel har vi en funktion tjekTal, der tager et tal som input. Vi bruger if-else-udsagn til at tjekke, om tallet er større end 0,
mindre end 0 eller lig med 0. Afhængigt af resultatet af tjekket, logges den passende besked til konsollen.

Vi tester funktionen ved at kalde den med forskellige talværdier.
For tallet 5 logges beskeden "Tallet er positivt." For tallet -3 logges beskeden "Tallet er negativt." Og for tallet 0 logges beskeden "Tallet er nul."
*/

// Opgave: Lav en funktion i JavaScript, der tjekker et år for at afgøre, om det er et skudår eller ej.

function tjekSkudår(år) {
    if (år % 4 === 0 && (år % 100 !== 0 || år % 400 === 0)) {
      console.log(år + " er et skudår.");
    } else {
      console.log(år + " er ikke et skudår.");
    }
  }
  
  // Eksempelkald og test af funktionen
  tjekSkudår(2020); // Output: 2020 er et skudår.
  tjekSkudår(2021); // Output: 2021 er ikke et skudår.

/*
I dette eksempel bruger vi en funktion tjekSkudår, der tager et år som input. Vi bruger if-else-udsagn til at tjekke, om året er et skudår eller ej.
 Vi bruger modulus-operatoren (%) til at tjekke, om året er deleligt med 4 og samtidig ikke er deleligt med 100 (medmindre det også er deleligt med 400).
  Afhængigt af resultatet logges en passende besked til konsollen.

Vi tester funktionen ved at kalde tjekSkudår med forskellige år. Outputtet vil variere afhængigt af det givne år.
*/

// Opgave: Lav en funktion i JavaScript, der validerer en bruger's alder og bestemmer, om de er berettiget til en bestemt tjeneste.

function validerAlder(alder) {
    if (alder >= 18) {
      return "Du er berettiget til tjenesten.";
    } else {
      return "Du er ikke berettiget til tjenesten.";
    }
  }
  
  // Eksempelkald og test af funktionen
  const brugerAlder = 25;
  const resultat5 = validerAlder(brugerAlder);
  console.log(resultat5); // Output: "Du er berettiget til tjenesten."

/*
I dette eksempel bruger vi en funktion validerAlder, der tager en bruger's alder som input. Vi bruger en if else-betingelse til at kontrollere,
om brugerens alder er større end eller lig med 18 år. Hvis det er tilfældet, returnerer vi beskeden "Du er berettiget til tjenesten."
Hvis ikke, returnerer vi beskeden "Du er ikke berettiget til tjenesten."

Vi tester funktionen ved at oprette en bruger alder på 25 år og kalde validerAlder med denne alder.
Resultatet logges til konsollen, og vi får beskeden "Du er berettiget til tjenesten."
*/
  
// Opgave: Lav en funktion i JavaScript, der tjekker en persons alder for adgangskontrol til en bestemt begivenhed.

function tjekAldersgrænse(alder) {
    const aldersgrænse = 18;
    
    if (alder >= aldersgrænse) {
      console.log("Du har adgang til begivenheden.");
    } else {
      console.log("Beklager, du skal være mindst " + aldersgrænse + " år gammel for at få adgang til begivenheden.");
    }
  }
  
  // Eksempelkald og test af funktionen
  const personensAlder = 20;
  tjekAldersgrænse(personensAlder);
  // Output: "Du har adgang til begivenheden."
  
  const enAndenAlder = 16;
  tjekAldersgrænse(enAndenAlder);
  // Output: "Beklager, du skal være mindst 18 år gammel for at få adgang til begivenheden."

/*
I dette eksempel bruger vi en funktion tjekAldersgrænse, der tager en persons alder som input.
Vi definerer en aldersgrænse (i dette tilfælde 18 år) og sammenligner personens alder med aldersgrænsen.

Hvis personens alder er større end eller lig med aldersgrænsen, logges en meddelelse ud, der bekræfter,
at personen har adgang til begivenheden. Hvis personens alder er mindre end aldersgrænsen, logges en meddelelse ud,
der informerer om, at personen skal være mindst 18 år gammel for at få adgang.
*/

// Opgave: Lav en funktion i JavaScript, der finder det største af to tal.

function findStørsteTal(tal1, tal2) {
    if (tal1 > tal2) {
      return tal1;
    } else {
      return tal2;
    }
  }
  
  // Eksempelkald og test af funktionen
  const tal1 = 10;
  const tal2 = 5;
  const størsteTal = findStørsteTal(tal1, tal2);
  console.log(størsteTal); // Output: 10

/*
I dette eksempel bruger vi en funktion findStørsteTal, der tager to tal som input.
Vi bruger et if-else-udtryk til at sammenligne de to tal og returnere det største tal.
Hvis tal1 er større end tal2, returneres tal1. Ellers, hvis tal2 er større end eller lig med tal1, returneres tal2.

Vi tester funktionen ved at oprette to tal, 10 og 5, og kalde findStørsteTal med disse tal.
Resultatet logges til konsollen, og vi får det største tal, som er 10.
*/

