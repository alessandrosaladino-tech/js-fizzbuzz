/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 -per i multipli di 3 stampi “Fizz” al posto del numero
 - per i multipli di 5 stampi “Buzz”.
 - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/



//Inizio con la stampa dei numeri in console (se il numero è multiplo di tre stampo"Fizz" , se il numero è multiplo di 5 stampo "Buzz" se il numero è multiplo sia di 3 che di 5 stampo "FizzBuzz" )
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}