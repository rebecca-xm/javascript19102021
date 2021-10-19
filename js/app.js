
let myName = "rebecca";
let mySurname = "mollica";

// var imgPath = "assets/img/build/"; esempio di variabile per ricordare il percorso img, da considerare però che var è una sintassi ormai datata

let imgPath = "assets/img/build/"; // questa variabile serve a scopo globale
// const: serve a dichiarare variabili che non potranno mai essere modificate nel corso del codice

console.log( myName + mySurname );

//if(   )
{
    let imgPath = "altro path"; // qui sto riassegnando la variabile, che sarà differente solo all'interno di questo script
}