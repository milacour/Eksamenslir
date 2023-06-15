// Opgave: Lav en funktion i JavaScript, der ændrer teksten i et HTML-element baseret på dets id.

function ændreTekst(elementId, nyTekst) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = nyTekst;
    }
  }
  
  // Eksempelkald og test af funktionen
  ændreTekst('overskrift', 'Velkommen til min hjemmeside!');

/*
I denne opgave skal man oprette en funktion ændreTekst, der ændrer teksten i et HTML-element baseret på dets id.
Funktionen bruger getElementById til at finde det ønskede element i dokumentet og ændrer dets textContent til den
nye tekst.

I eksemplet ændres teksten i et element med id 'overskrift' til 'Velkommen til min hjemmeside!'. Hvis elementet findes, vil teksten blive opdateret. Hvis elementet ikke findes, sker der ingen ændringer.
*/
