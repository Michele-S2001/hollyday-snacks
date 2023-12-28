// array di numeri interi
const array = [1, 3, 5, 2, 10, 6, 4, 9];

// variabile per filtrare ciò che vogliamo
let isEven = false;

// funzione che filtra i numeri pari o dispari

/**
 * SPERIMENTAZIONI CON LA PROGRAMMAZIONE FUNZIONALE
 * 
 * function oddOrEven(arrayToFilter, switchParam) {
 *  const result = arrayToFilter
 *         .filter((el) => switchParam ? el % 2 === 0 : el % 2 !== 0)
 *         .map((el) => el ** 2)
 *         .reduce((accumulator, currentValue) => {
 *           return accumulator + currentValue;
 *         }, 0);
 *  return result;
 * }
 */
function oddOrEven(arrayToFilter, switchParam) {
  return arrayToFilter.filter((el) => switchParam ? el % 2 === 0 : el % 2 !== 0);
}

const filteredArray = oddOrEven(array, isEven);

console.log(filteredArray);
