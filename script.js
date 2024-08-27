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


// # STAGING

// * Recupero gli elementi dal DOM
const givenNumbers = document.getElementById('givennumbers');
const resultElement = document.getElementById('result');
const startwindow = document.getElementById('startwindow');
const userwindow = document.getElementById('userwindow');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const timer = document.getElementById('timer');


// * Creo un array dove mettere i numeri casuali
const randomNumbers = [];
// * Array dove arriveranno i numeri dell'utente
const userNumbers = [];
// * Array con i numeri corretti
const correctNumbers = [];

// @ FUNCTIONS 

// * Funzione per creare numeri casuali
function getRandomNumbers(min = 1, max = 100, isMaxIncluded = true) {
    if (isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

// * Funzione per inserire i numeri dell'utente dal form a JS
function getUserNumbers() {

    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(parseInt(inputs[i].value));
    }

    console.log('usernumbers: ', userNumbers)
}

// ------- Starting phase ------ //

// * Creo un timer di 30 secondi

let seconds = 30;
timer.innerText = seconds;

const timerInterval = setInterval(() => {
    timer.innerText = --seconds;
    if (seconds === 0) {
        clearInterval(timerInterval);

        startwindow.classList.remove('d-flex');
        startwindow.classList.add('d-none');

        userwindow.classList.remove('d-none');
        userwindow.classList.add('d-flex');
    }
}, 1000);

// --- Random numbers ----

// * Creo 5 numeri random

for (i = 0; i < 5; i++) {
    const fiveNumbers = getRandomNumbers();

    // * Li inserisco all'interno dell'array
    randomNumbers.push(fiveNumbers);
}
console.log(randomNumbers);

// * Li stampo in pagina
givenNumbers.innerHTML = randomNumbers.join(' ');


// # DATA GATHERING


form.addEventListener('submit', function (event) {

    // ! Blocco il form
    event.preventDefault();

    // * Prendo i numeri dati dall'utente
    getUserNumbers();

    // * Li confronto con i numeri casuali

    for (let i = 0; i < userNumbers.length; i++) {
        let userNumber = userNumbers[i];
        // Se nel mio array c'è il numero dell'utente, mettilo nell'array dei corretti
        if (randomNumbers.includes(userNumber)) {
            correctNumbers.push(userNumber);
        }
    }

    // * Stampo in pagina il risultato

    let message = `Hai memorizzato correttamente ${correctNumbers.length} numero/i! (${correctNumbers.join(' - ')})`

    resultElement.innerHTML = message;

});




// # EVENT HANDLING
// # PROCESSING
// # OUTPUT 