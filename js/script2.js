console.log('JS OK!');
/*
Traccia:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
*/

// 1 - Generare un numero random per il giocatore
// 2 - Generare un numero random per il computer
// 3 - In base al numero più alto stabilire il vincitore
// 4 - Cosa succede in caso di pareggio?
// 5 - Stampare in console i tiri di dado e il risultato
// 6 - Stampare in pagina i tiri di dado e il risultato


// Recupero l'elemento in pagina 
const personalDice = document.getElementById('your-score');
const computerDice = document.getElementById('computer-score');
const resultMessage = document.getElementById('game-result');


// Genero un numero random per il giocatore e il computer
let computerScore = Math.floor(Math.random() * 6) + 1;
let yourScore = Math.floor(Math.random() * 6) + 1;

// Stampo in console i tiri di dado con il risultato
console.log("Il tuo punteggio è:" + ' ' + yourScore);
console.log("Il punteggio del computer è:" + ' ' + computerScore);

// In base al numero più alto stabilisco il vincitore
// Aggiungo l'opzione del pareggio
let result = '';

if (yourScore === computerScore) {
    result = "Pareggio";
    console.log("Pareggio");
} else if (yourScore > computerScore) {
    result = 'Hai vinto';
    console.log('Hai vinto');
} else {
    result = 'Hai perso';
    console.log('Hai perso');
}

// Stampo in pagina i tiri di dado con il risultato
personalDice.innerHTML = yourScore;
computerDice.innerHTML = computerScore;
resultMessage.innerHTML = result ;