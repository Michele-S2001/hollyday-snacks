/*

### Snack 2

INPUT: `1, "Ciao"` 
OUTPUT: `"oaiC"` 

INPUT: `26, "Test"` 
OUTPUT: `"Test"` 

INPUT: `117, "Vue"` 
OUTPUT: `"euV"`

**NOTA: i parametri in ingresso per la funzione sono 2**

*/

function flipIfOdd(num, str) {

  let currString = str;

  if(num % 2 !== 0) {
    currString = str.split("").reverse().join("");
  }

  return currString;

}

const word = 'Ciao';
console.log(flipIfOdd(26, word));

/**
 * Custom fn to flip strings
 */
function flipString(str) {

  let newString = '';

  for(let i = str.length - 1; i >= 0; i--) {
    newString += str[i]; 
  }

  return newString;
}