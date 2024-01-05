/*

### Snack 3

INPUT: `"cane","gatto"` 
OUTPUT: `"a"` 

INPUT: `"troppo", "poco"` 
OUTPUT: `""` 

INPUT: `"sempre", "mamp"` 
OUTPUT: `"m"`

**NOTA: i parametri in ingresso per la funzione sono 2**

*/

function getFirstCommonChar(firstWord,secondWord) {

  // evito errori prendendo come riferimento per il ciclo la lunghezza della parola più corta
  const minLength = Math.min(firstWord.length, secondWord.length);
  
  let commChar = '';

  for (let i = 0; i < minLength; i++) {
    const charFirstWord = firstWord[i];
    const charSecondWord = secondWord[i];

    if(charFirstWord === charSecondWord && commChar.length === 0) {
      commChar = charFirstWord;
    }
  }

  return commChar;

} 

const word1 = 'macchina';
const word2 = 'accetta';

const firstCommChar = getFirstCommonChar(word1, word2);

console.log(firstCommChar);