console.log ('JS OK!')
/*
Traccia:
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.
*/

// 1 - Creare un array (lista) di email
// 2 - Chiedere all'utente la propria mail
// 3 - Controllare che sia presente nella lista delle email e che quindi possa accedere
// 4 - Stampare un messaggio in console con l'esito
// 5 - Stampare in pagina

// Chiedo all'utente l'email
let address = prompt('Inserisci il tuo indirizzo email' , 'laura@hotmail.it').trim();
console.log(`la tua email è ${address}`);

// Creo un array
// Controllo che l'email inserita dall'utente sia presente nella lista
const emails = ['laura@hotmail.it' , 'marco@yahoo.com' , 'peppino@libero.it' , 'antonio@outlook.com' , 'cesare@alicemail.it'];

let result ='';

// Stampo un messaggio in console con l'esito
for (let i = 0; i < emails.lenght; i++) {
    let currentEmail = emails[i];
    
    if (currentEmail === address) {
        result = "Sei un utente registrato";
        console.log("Sei un utente registrato");
    } else {
        result = "Non sei un utente registrato";
        console.log("Non sei un utente registrato");
    }
}

console.log(`result a fine ciclo:`, result)

// Velocizzando il for
// const foundEmail = emails.includes(address);