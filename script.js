// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let utenteKm = prompt('Inserisci il numero di km che desideri percorrere');

let utenteEta = prompt('Inserisci la tua età');

let biglietto = 0.21 * utenteKm;

let prezzoFinale;

if(utenteEta <= 17){
    prezzoFinale = biglietto - biglietto * 0.2;
}

else if(utenteEta >= 65){
    prezzoFinale = biglietto - biglietto *0.4;
}

else{
    prezzoFinale = biglietto;
}

console.log(`Il prezzo finale da pagare è di ${prezzoFinale}`);