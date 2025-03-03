/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function arrayFirstLetter(array) {

    const firstLetter = [];
    let element = '';

    for (i = 0; i < array.length; i++) {
        element = array[i];
        firstLetter.push(element[0]);
    }

    return firstLetter;
}
// Invoca la funzione qui e stampa il risultato in console
arrayFirstLetter(names);
console.log(arrayFirstLetter(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]