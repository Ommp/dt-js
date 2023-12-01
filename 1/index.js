// conditionals oppgave


const userName = "Tom";
const userAge = 33;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

if (userName && userAge >= 18 && !userIsBlocked) {
  goToPage = "/home";
  userIsLoggedIn = true;

  if (userIsAdmin) {
    goToPage = "/admin";
  }
} else {
  console.log(`
    error: one or more conditions have not been met:
    Is the username valid (not empty or null)?
    Is the age 18 or higher?
    Is the user not blocked? 
    username: ${userName}
    userAge: ${userAge}
    userIsBlocked: ${userIsBlocked}
    `);
}

console.log(`goToPage is: ${goToPage}`);



/*
Anbefaler å kopiere hele oppgaveteksten inn i VSCode


Lag en conditional som sjekker om userName eksisterer (har innhold), at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".
 
 
console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.
 
endre på verdiene i variablene for å se at din conditional kan håndtere alle cases


Husk å levere inn med link til github repo!
*/