// Opgave: Lav en funktion i JavaScript, der tilføjer en hændelseslytter til et HTML-element og udfører en handling, når hændelsen udløses.

function tilføjHændelseslytter(elementId) {
    const element = document.getElementById(elementId);
    element.addEventListener('click', function() {
      console.log('Klikket på elementet med id:', elementId);
    });
  }
  
  // Eksempelkald og test af funktionen
  tilføjHændelseslytter('minKnap');
  
/*
I denne opgave skal man oprette en funktion tilføjHændelseslytter, der tager et id på et HTML-element som input og tilføjer en hændelseslytter til elementet.
Funktionen bruger addEventListener()-metoden på det fundne HTML-element til at registrere en hændelse (i dette tilfælde et klik). Når hændelsen udløses, udføres
den angivne funktion, der udskriver en besked i konsollen.

I eksemplet tilføjes en hændelseslytter til et HTML-element med id 'minKnap'. Når knappen klikkes, vil beskeden 'Klikket på elementet med id: minKnap' blive
udskrevet i konsollen.
*/