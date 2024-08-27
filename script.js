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

// * Creo un array dove mettere i numeri casuali
const randomNumbers = [];

// * Creo 5 numeri casuali con una funzione

function getRandomNumbers(min = 1, max = 100, isMaxIncluded = true) {
    if (isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

// Li inserisco all'interno dell'array

for (i = 0; i < 5; i++) {
    const fiveNumbers = getRandomNumbers();
    randomNumbers.push(fiveNumbers);
}
console.log(randomNumbers);
givenNumbers.innerHTML = randomNumbers;



// Li inserisco in pagina


// # STAGING

// # DATA GATHERING
// # EVENT HANDLING
// # PROCESSING
// # OUTPUT 