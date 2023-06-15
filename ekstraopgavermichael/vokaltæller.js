// Opgave: Lav en metode i JavaScript, der tæller antallet af vokaler i en given streng.

function tælVokaler(streng) {
    const vokaler = ['a', 'e', 'i', 'o', 'u', 'y'];
    let antalVokaler = 0;
  
    for (let i = 0; i < streng.length; i++) {
      const bogstav = streng[i].toLowerCase();
  
      if (vokaler.includes(bogstav)) {
        antalVokaler++;
      }
    }
  
    return antalVokaler;
  }
  
  // Eksempelkald og test af metoden
  const tekst = 'Dette er en tekst med vokaler';
  const antalVokaler = tælVokaler(tekst);
  console.log('Antallet af vokaler er:', antalVokaler);

  
  /* I denne opgave skal du implementere en metode, der tager en streng som input og returnerer
  antallet af vokaler i strengen. Metoden opretter et array vokaler, der indeholder alle vokalerne.
  Derefter gennemgår den hvert bogstav i strengen ved hjælp af en løkke. For hvert bogstav konverteres
  det til små bogstaver ved hjælp af toLowerCase(), og der tjekkes, om det er en vokal ved at
  sammenligne det med elementerne i vokaler-arrayet ved hjælp af includes(). 
  
  Hvis det er tilfældet, øges antalVokaler med 1. Til sidst returneres antalVokaler.
  I eksemplet oprettes en streng, og metoden tælVokaler() kaldes med strengen som argument. 
  Resultatet, antallet af vokaler, udskrives derefter i konsollen.
  */