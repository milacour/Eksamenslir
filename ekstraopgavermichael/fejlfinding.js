// Fejl: Syntaxfejl i funktion
function sum(a, b) {
    return a + b;
  }
  
  const resultat = sum(3, 5); // Her manglede en parranetes.
  console.log(resultat);
  
/*
I dette eksempel er der en syntaxfejl i funktionen sum().
Ved kaldet af funktionen mangler der en lukkende parentes ) 
efter argumenterne 3 og 5. Din opgave er at opdage fejlen og rette syntaxen, så funktionen kaldes korrekt.
*/

// Fejl: Loop-afslutningsbetingelse er forkert
const talArray = [1, 2, 3, 4, 5];
for (let i = 0; i <= talArray.length; i++) {
  console.log(talArray[i]);
}

/*
I dette eksempel er der en fejl i afslutningsbetingelsen for løkken.
I stedet for < eller !== bruges <=, hvilket resulterer i, at løkken 
forsøger at få adgang til et element uden for arrayets grænser.
*/

// Fejl: Variabel er ikke defineret
function hilsen() {
    console.log(message);
  }
  
  hilsen();

  /*
  I dette eksempel er der en fejl, hvor variablen message ikke er defineret,
  men den forsøges at blive udskrevet i konsollen. Din opgave er at opdage fejlen
  og enten definere variablen eller korrigere koden, så den fungerer korrekt.
  */

  // Fejl: Logisk fejl i betingelse
function erPositiv(tal) {
    if (tal > 0 && tal < 10) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(erPositiv(15));

/*
I dette eksempel er der en logisk fejl i betingelsen for at kontrollere, om tallet er positivt.
I stedet for at kontrollere, om tallet er mindre end 10, kontrolleres det, om det er mindre end eller lig med 10.
*/

// Fejl: Manglende return statement
function gange(a, b) {
    const resultat = a * b;
  }
  
  console.log(gange(4, 5));

  /*
  I dette eksempel er der en fejl, hvor funktionen gange() mangler et return statement for at returnere resultatet
  af multiplikationen. Uden et return statement vil funktionen ikke give et resultat, når den kaldes.
 */
