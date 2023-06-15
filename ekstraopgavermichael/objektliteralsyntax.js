// Opgave: Lav et objekt i JavaScript ved hjælp af Object Literal-syntaks, der har egenskaber og metoder relateret til en person.

const person = {
    navn: 'Alice',
    alder: 25,
    by: 'København',
    præsenterDig: function() {
      console.log(`Hej, jeg hedder ${this.navn}, er ${this.alder} år gammel og bor i ${this.by}.`);
    }
  };
  
  // Eksempelkald og test af objektet
  person.præsenterDig(); // Forventet output: "Hej, jeg hedder Alice, er 25 år gammel og bor i København."

/*
I denne opgave skal du oprette et objekt person ved hjælp af Object Literal-syntaks. Objektet har egenskaberne navn, alder og by,
der repræsenterer forskellige oplysninger om personen. Derudover har objektet en metode præsenterDig, der udskriver en præsentationsbesked
med oplysningerne om personen ved hjælp af console.log().

I eksemplet oprettes objektet person med de angivne egenskaber og metode. Metoden præsenterDig kaldes derefter på objektet,
hvilket resulterer i udskrivningen af præsentationsbeskeden i konsollen.
*/