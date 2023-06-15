// Opgave: Lav en asynkron funktion i JavaScript, der henter data fra en API og returnerer resultatet.

async function hentDataFraAPI(url) {
    try {
      const respons = await fetch(url);
      const data = await respons.json();
      return data;
    } catch (fejl) {
      console.log('Der opstod en fejl:', fejl);
    }
  }
  
  // Eksempelkald og test af funktionen
  const apiUrl = 'https://api.example.com/data';
  hentDataFraAPI(apiUrl)
    .then(data => console.log('Data:', data))
    .catch(fejl => console.log('Der opstod en fejl:', fejl));

/*
I denne opgave skal man oprette en asynkron funktion hentDataFraAPI, der bruger async/await-syntaxen til a
håndtere asynkron kode. Funktionen tager en URL som input, henter data fra API'et ved hjælp af fetch-funktionen
og konverterer det til JSON-format ved hjælp af .json()-metoden på responsobjektet. Resultatet returneres, medmindre
der opstår en fejl, som bliver fanget og udskrevet i catch-blokken.

I eksemplet bruges en fiktiv URL apiUrl til at kalde funktionen hentDataFraAPI. Resultatet, data fra API'et, logges i
konsollen ved brug af .then() og eventuelle fejl håndteres med .catch().
*/

// Opgave: Lav en asynkron funktion i JavaScript, der henter data fra to forskellige API'er og kombinerer resultatet.

async function hentOgKombinerData(apiUrl1, apiUrl2) {
    try {
      const respons1 = await fetch(apiUrl1);
      const respons2 = await fetch(apiUrl2);
      const data1 = await respons1.json();
      const data2 = await respons2.json();
      const kombineretData = { ...data1, ...data2 };
      return kombineretData;
    } catch (fejl) {
      console.log('Der opstod en fejl:', fejl);
    }
  }
  
  // Eksempelkald og test af funktionen
  const apiUrl1 = 'https://api.example.com/data1';
  const apiUrl2 = 'https://api.example.com/data2';
  hentOgKombinerData(apiUrl1, apiUrl2)
    .then(data => console.log('Kombineret data:', data))
    .catch(fejl => console.log('Der opstod en fejl:', fejl));

/*
I denne opgave skal man oprette en asynkron funktion hentOgKombinerData,
der henter data fra to forskellige API'er og kombinerer resultatet. 
unktionen bruger async/await-syntaxen til at håndtere asynkron kode og 
fetch-funktionen til at hente data fra API'erne. Resultatet fra hvert API konverteres til JSON-format,
og derefter kombineres dataene ved at oprette et nyt objekt med spread-operator (...).

I eksemplet bruges to fiktive URL'er apiUrl1 og apiUrl2 til at kalde funktionen hentOgKombinerData.
Resultatet, den kombinerede data fra begge API'er, logges i konsollen ved brug af .then() og eventuelle
fejl håndteres med .catch().
*/

// Opgave: Lav en funktion i JavaScript, der foretager en AJAX-anmodning ved hjælp af fetch og behandler resultatet.

function hentDataFraAPI(apiUrl3) {
    fetch(apiUrl3)
      .then(response => response.json())
      .then(data => console.log('Data fra API:', data))
      .catch(error => console.log('Der opstod en fejl:', error));
  }
  
  // Eksempelkald og test af funktionen
  const apiUrl3 = 'https://api.example.com/data';
  hentDataFraAPI(apiUrl3);

/*
I denne opgave skal man oprette en funktion hentDataFraAPI, der foretager en AJAX-anmodning til en API ved hjælp af fetch.
Funktionen tager en URL til API'en som input. Når anmodningen er færdigbehandlet, bruges .then()-metoden til at behandle
responsen ved at konvertere den til JSON-format og udskrive dataene i konsollen. Hvis der opstår en fejl under anmodningen,
håndteres den med .catch()-blokken, der udskriver fejlmeddelelsen i konsollen.

I eksemplet udføres en AJAX-anmodning ved at kalde hentDataFraAPI med en fiktiv URL til en API.
Resultatet, dataene fra API'en, logges i konsollen. Hvis der opstår en fejl under anmodningen, logges fejlmeddelelsen i stedet.
*/