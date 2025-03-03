/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetingUser(nameUser) {
    let greeting = new Date();
    let hour = greeting.getHours();
    if ((hour > 0o6) && (hour <= 13)) {
        console.log(`Buongiorno ${nameUser}`);
    }
    if ((hour > 13) && (hour <= 17)) {
        console.log(`Buon pomeriggio ${nameUser}`);
    }
    if ((hour > 17) && (hour <= 24)) {
        console.log(`Buonasera ${nameUser}`);
    }
    if ((hour >= 0o0) && (hour <= 0o6)) {
        console.log(`Buonanotte ${nameUser}`);
    }
}
// Invoca la funzione qui e stampa il risultato in console

greetingUser(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.