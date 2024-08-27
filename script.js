// PLANNING

/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS 1:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
BONUS 2:
Generiamo gli input da JS, invece di scriverli nel codice
*/

/* Visualizzare in pagina 5 numeri casuali. */

// * Recupero gli elementi dal DOM
const givenNumbers = document.getElementById('givennumbers');
const resultElement = document.getElementById('result');

// * Creo un array dove mettere i numeri casuali
const randomNumbers = [];
// * Array dove arriveranno i numeri dell'utente
const userNumbers = [81, 57, 16, 24, 54];
// * Array con i numeri corretti
const correctNumbers = [];

// * Creo il messaggio che apparirà a fine gioco.
let message = `Hai memorizzato correttamente ${correctNumbers.length} numeri! (${correctNumbers})`


// * Creo 5 numeri casuali con una funzione
function getRandomNumbers(min = 1, max = 100, isMaxIncluded = true) {
    if (isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

// * Li inserisco all'interno dell'array
for (i = 0; i < 5; i++) {
    const fiveNumbers = getRandomNumbers();
    randomNumbers.push(fiveNumbers);
}
console.log(randomNumbers);

// * Li inserisco in pagina
givenNumbers.innerHTML = randomNumbers;


// "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

// * Confrontare numeri in comune

for (let i = 0; i < userNumbers.length; i++) {
    let userNumber = userNumbers[i];
    // Se nel mio array c'è il numero dell'utente, mettilo nell'array dei corretti
    if (randomNumbers.includes(userNumber)) {
        correctNumbers.push(userNumber);
    }
}

resultElement.innerHTML = message;

// # STAGING

// # DATA GATHERING
// # EVENT HANDLING
// # PROCESSING
// # OUTPUT 