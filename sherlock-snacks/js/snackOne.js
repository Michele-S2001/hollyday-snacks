/*

### Snack 1 ------> risultati possibili

INPUT: `[1,2,3,4,5,6,7]` 
OUTPUT: `14` 

INPUT: `[5,10,15,20]` 
OUTPUT: `25` 

INPUT: `[10,10]` 
OUTPUT: `10`

*/

const numbers = [5, 10, 15, 20];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue / 2;
}, 0)

console.log(sum); 
