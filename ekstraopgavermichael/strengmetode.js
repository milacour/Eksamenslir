// Opgave: Lav en metode i JavaScript, der finder det længste ord i en streng.

function findLængsteOrd(streng) {
    const ordArray = streng.split(' ');
    let længsteOrd = '';
  
    for (let i = 0; i < ordArray.length; i++) {
      if (ordArray[i].length > længsteOrd.length) {
        længsteOrd = ordArray[i];
      }
    }
  
    return længsteOrd;
  }
  
  // Eksempelkald og test af metoden
  const tekst = 'Dette er et eksempel på en sætning';
  const længsteOrd = findLængsteOrd(tekst);
  console.log('Det længste ord er:', længsteOrd);
  
  /* I denne opgave skal man implementere en metode, der tager en streng som input
  og returnerer det længste ord i strengen. Metoden starter med at opdele strengen
  i et array af ord ved hjælp af split()-funktionen og mellemrum som adskillelsesparameter.
  Derefter gennemgår den hvert ord i arrayet og sammenligner længden af hvert ord med den
  aktuelt længste. Hvis længden af det aktuelle ord er længere end den tidligere længste,
  opdateres variablen længsteOrd til at indeholde det nye længste ord. Til sidst returneres
  længsteOrd.
  
  I eksemplet oprettes en streng og metoden findLængsteOrd() kaldes med strengen som argument.
  Resultatet, det længste ord, udskrives derefter i konsollen.
  */