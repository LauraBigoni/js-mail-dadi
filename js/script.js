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


// Recupero l'elemento in pagina 
const message = document.getElementById('messagemail');
const title = document.getElementById('messagetitle');
const sign = document.getElementById('sign-up-in');

// Creo un array
const emails = ['laura@hotmail.it' , 'marco@yahoo.com' , 'peppino@libero.it' , 'antonio@outlook.com' , 'cesare@alicemail.it'];

// Chiedo all'utente l'email
let address = prompt('Inserisci il tuo indirizzo email' , 'laura@hotmail.it').trim();
console.log(`la tua email è ${address}`);

// Controllo che l'email inserita dall'utente sia presente nella lista
let result = false;

for (let i = 0; i < emails.length; i++) {
    const currentEmail = emails[i];

    if (currentEmail === address) {
        result = true;
    }
}

// Stampo un messaggio in console con l'esito
// Stampo in pagina
if (result) {
    title.innerHTML = "Complimenti";
    message.innerHTML = "sei un utente regitrato";
    sign.innerHTML = "Entra nel sito"
    console.log("sei un utente regitrato");
} else {
    title.innerHTML = "Ci dispiace";
    message.innerHTML = "Non sei un utente registrato";
    sign.innerHTML = "Registrati per accedere";
    console.log("Non sei un utente registrato");
}

// Velocizzando il for
// const foundEmail = emails.includes(address);