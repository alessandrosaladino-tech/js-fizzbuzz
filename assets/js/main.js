/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 -per i multipli di 3 stampi “Fizz” al posto del numero
 - per i multipli di 5 stampi “Buzz”.
 - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

const listEl = document.getElementById("list")

//Inizio con la stampa dei numeri in console (se il numero è multiplo di tre stampo"Fizz" , se il numero è multiplo di 5 stampo "Buzz" se il numero è multiplo sia di 3 che di 5 stampo "FizzBuzz" )
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        const fizzBuzzReturn = "FizzBuzz"
        console.log(fizzBuzzReturn)

        //Stampo in pagina il risultato
        const fizzBuzzCard = `<div class=col-2><div class="d-flex align-items-center justify-content-center fw-bold p-2 m-2 ">${fizzBuzzReturn}</div></div>`;
        listEl.innerHTML += fizzBuzzCard;
    }
    else if (i % 3 == 0) {
        const fizzBuzzReturn = "Fizz"
        console.log(fizzBuzzReturn);

        //Stampo in pagina il risultato
        const fizzBuzzCard = `<div class=col-2><div class="d-flex align-items-center justify-content-center fw-bold p-2 m-2 ">${fizzBuzzReturn}</div></div>`;
        listEl.innerHTML += fizzBuzzCard;
    } else if (i % 5 == 0) {
        const fizzBuzzReturn = "Buzz"
        console.log(fizzBuzzReturn);

        //Stampo in pagina il risultato
        const fizzBuzzCard = `<div class=col-2><div class="d-flex align-items-center justify-content-center fw-bold p-2 m-2 ">${fizzBuzzReturn}</div></div>`;
        listEl.innerHTML += fizzBuzzCard;
    } else {
        const fizzBuzzReturn = i;
        console.log(fizzBuzzReturn);

        //Stampo in pagina il risultato
        const fizzBuzzCard = `<div class=col-2><div class="d-flex align-items-center justify-content-center fw-bold p-2 m-2 ">${fizzBuzzReturn}</div></div>`;
        listEl.innerHTML += fizzBuzzCard;


    }
}