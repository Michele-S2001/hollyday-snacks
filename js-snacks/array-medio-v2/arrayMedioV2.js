// credo una funzione che come parametri abbia l'array e lo userNumber
function getDivisibleNumbers(rdmArray, userNum) {
  /*
   applico una filter all'array, dove accetto solo i valori   il cui modulo di tra valore / userNumber risulti 0
  */
  return rdmArray.filter((el) => (el % userNum === 0));
}

// inizializzo una variabile userNumber con l'intero "5"
const userNumber = 5;

// inizializzo un array di numeri interi casuali
const array = [1,3,5,2,10,6,4,9];

// prova
console.log(getDivisibleNumbers(array, userNumber));