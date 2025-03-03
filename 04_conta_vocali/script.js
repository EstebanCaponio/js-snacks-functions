/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vocalCount(testWord) {

    let vocal = 0

    for (i = 0; i < testWord.length; i++) {
        if (testWord[i] === "a" || testWord[i] === "e" || testWord[i] === "i" || testWord[i] === "o" || testWord[i] === "u") {
            vocal++;
        }
    }
    return vocal
}
// Invoca la funzione qui e stampa il risultato in console

console.log(vocalCount(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)