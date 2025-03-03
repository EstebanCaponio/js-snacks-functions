/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filter(array, letter) {
    const filtered = [];
    let element = '';

    for (i = 0; i < array.length; i++) {
        element = array[i];

        if (letter === element[0] || letter === element[0].toLowerCase()) {
            filtered.push(element);
        }

    }

    return filtered;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filter(names, 'A'));
console.log(filter(names, 'm'));
console.log(filter(names, 'l'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]