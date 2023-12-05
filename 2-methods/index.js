// METHODS Kopier hele oppgaven til vs code

/*
Bruk string methods på text til å:


Bytte ut ordet 'vanskelig' med ordet 'gøy'.


Gjør hele setningen om til store bokstaver.


Fjern mellomrom på begynnelsen og slutten av setningen.
*/
const text = "  Javascript er vanskelig  ";

const newText = text.replace("vanskelig", "gøy").toUpperCase().trim();

console.log(newText)


/*
Vi har ikke snakket om det, men prøv å bruke google for å finne frem til løsningen


Bruk number methods til å:


Begrense antall siffer etter desimalpunktet til 2


Konvertere tallet til en string
*/

const number = 56123.321313;

const twoDecimalPlaces = number.toFixed(2).toString();



console.log(twoDecimalPlaces);
console.log(typeof(twoDecimalPlaces));


/*
Bruk array methods til å:


Legge til en ny marvel helt på slutten av arrayet


Fjerne den første helten i arrayet (Spider-Man)


Bytt ut 'Doctor Strange' med 'Thanatos'


Slå sammen arrayet til en string med et utropstegn (!) mellom hver helt.
*/


const marvelHeroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
];

marvelHeroes.push("Wolverine");
marvelHeroes.shift();
marvelHeroes[2] = "Thanatos";

const heroesAsString = marvelHeroes.toString().replaceAll(",", "!");

console.log(heroesAsString)


