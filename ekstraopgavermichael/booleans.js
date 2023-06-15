// Opgave: Lav en funktion i JavaScript, der validerer indtastninger i en formular og returnerer et boolean-værdi baseret på gyldigheden.

function validerFormular(formularData) {
    const { navn, email, telefon } = formularData;
    if (navn.trim() === '' || email.trim() === '' || telefon.trim() === '') {
      return false;
    }
    return true;
  }
  
  // Eksempelkald og test af funktionen
  const formular = {
    navn: 'Alice',
    email: 'alice@example.com',
    telefon: '12345678'
  };
  console.log(validerFormular(formular)); // Forventet output: true

/*
I denne opgave skal du oprette en funktion validerFormular, der tager en formulardata som input og validerer indtastningerne
Funktionen kontrollerer, om navn, email og telefon ikke er tomme (efter at eventuelle blanke mellemrum er fjernet).
Hvis mindst en af indtastningerne er tom, returneres false, ellers returneres true.

I eksemplet er der en formular med navn, email og telefonoplysninger, og funktionen validerFormular kaldes med formulardataen.
Resultatet, en boolean-værdi der angiver gyldigheden af formularen, udskrives i konsollen.
*/