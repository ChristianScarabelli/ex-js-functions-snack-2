/* Snack 1
Crea una funzione che somma due numeri.

- Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
- Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
- Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

// Funzione dichiarativa
function somma(a, b) {
    return a + b;
}
console.log('Dichiarativa:', somma(5, 5))   // 10

// Funzione anonima assegnata a una variabile
const sommaAnonima = (a, b) => a + b;

console.log('Anonima in variabile:', sommaAnonima(2, 2))    // 4

// Arrow function
const sum = (a, b) => a + b;

console.log('Arrow function:', sum(3, 3))   // 6




/* Snack 2
Crea una arrow function che calcola il quadrato di un numero.

- Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

const quadrato = (num) => num * num;

console.log('Inline Arrow function:', quadrato(5))  // 25



/* Snack 3
Crea una funzione eseguiOperazione

- Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
La funzione deve eseguire l'operazione fornita sui due numeri.
*/

const addizione = (a, b) => a + b
const sottrai = (a, b) => a - b

function eseguiOperazione(a, b, operazione) {
    return operazione(a, b)
}

console.log('HOF 1 Addizione:', eseguiOperazione(5, 5, addizione))  // 10
console.log('HOF 2 Sottrazione:', eseguiOperazione(10, 10, sottrai))    // 0



/* Snack 4
Crea un generatore di funzioni creaTimer
- Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer(time) {
    return function () {
        setTimeout(() => console.log('Timer:, Tempo scaduto!'), time)
    }
}

const timer = creaTimer(3000)
timer() // Timer diventa la funzione anonima del return, avviando quindi il setTimeout

// creaTimer(3000)()  // Chiamo direttamente la funzione anonima del return


/* Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
- Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/

function stampaOgniSecondo(messaggio) {
    setInterval(() => console.log(messaggio), 1000)
}
// stampaOgniSecondo('Messaggio al secondo')



/* Snack 6
Crea un contatore automatico con setInterval
- Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

function creaContatoreAutomatico(time) {
    return function () {
        let counter = 0
        setInterval(() => {
            console.log(`Contatore: ${++counter}`)
        }, time)
    }
}

const contatoreAutomatico = creaContatoreAutomatico(2000)
// contatoreAutomatico()   // Avvio il contatore automatico



/* Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
- Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

function eseguiEferma(messaggio, start, stop) {
    return function () {
        const timerStart = setInterval(() => {
            console.log('Messaggio temporizzato:', messaggio)
        }, start)
        setTimeout(() => {
            clearInterval(timerStart)
            console.log('Messaggio temporizzato fermato!')
        }, stop)
    }
}

const eseguiTimer = eseguiEferma('Timer partito!', 3000, 10000)
eseguiTimer()



/* Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
- Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, 
con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

function contoAllaRovescia(num) {
    return function () {
        let counter = num
        const timerStart = setInterval(() => {
            console.log('Conto alla rovescia:', counter)
            counter--
            if (counter === 0) {
                clearInterval(timerStart)
                console.log('Conto alla rovescia: Tempo scaduto!')
            }
        }, 1000)
    }
}

const contoRovescia = contoAllaRovescia(10)
contoRovescia()



/* Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/

function sequenzaOperazioni(operations = [], time) {
    operations.forEach((operation, index) => {      // il forEach esegue tutte le operazioni insieme. Perciò per fare la progressione occorre moltiplicare l'indice dell'operazione per il tempo
        setTimeout(operation, index * time)
    })
}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000);
