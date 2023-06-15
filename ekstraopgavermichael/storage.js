// Opgave: Lav en funktion i JavaScript, der gemmer data i Local Storage og en funktion, der henter data fra Local Storage.

function gemDataILocalStorage(nøgle, data) {
    localStorage.setItem(nøgle, JSON.stringify(data));
  }
  
  function hentDataFraLocalStorage(nøgle) {
    const gemtData = localStorage.getItem(nøgle);
    return JSON.parse(gemtData);
  }
  
  // Eksempelkald og test af funktionerne
  const brugerData = { navn: 'Alice', alder: 25 };
  const nøgle = 'bruger';
  gemDataILocalStorage(nøgle, brugerData);
  const hentetData = hentDataFraLocalStorage(nøgle);
  console.log('Hentet data:', hentetData);
  
/*
I denne opgave skal du oprette to funktioner, gemDataILocalStorage og hentDataFraLocalStorage,
der henholdsvis gemmer data i Local Storage og henter data fra Local Storage.
Funktionen gemDataILocalStorage bruger localStorage.setItem() til at gemme data som en JSON-streng ved hjælp
af JSON.stringify(). Funktionen hentDataFraLocalStorage bruger localStorage.getItem() til at hente data som en JSON-streng
og konverterer den tilbage til et JavaScript-objekt ved hjælp af JSON.parse().

I eksemplet gemmes brugerdata i Local Storage ved at kalde gemDataILocalStorage med en nøgle og data.
Derefter hentes data fra Local Storage ved at kalde hentDataFraLocalStorage med samme nøgle.
Det hentede data logges i konsollen.
*/