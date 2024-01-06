/*
### Snack 4

INPUT: `"maammmmp"` 
OUTPUT: `"mamp"` 

INPUT: `"ciaooooooooo"` 
OUTPUT: `"ciao"` 

INPUT: `"ppppprrrrrrrrroovvvvvvvaaaaaaaaaaaaa"` 
OUTPU: `"prova"`
*/

/**
 * Opzione con la funzione custom
 */

function getNormalWord(word) {

  let normalWord = word[0];

  for (let i = 1; i < word.length; i++) {
    const currElement = word[i];

    if(currElement !== word[i - 1]) {
      normalWord += currElement;
    }
    
  }

  return normalWord

}

const rdmWord = 'pppprrrrroooovvvvvaaaa';

console.log('Con la funzione custom: ', getNormalWord(rdmWord));

/**
 * Opzione alternativa con le regex
 */

const rdmWordConv = rdmWord.replace(/(.)\1+/g, '$1');
console.log('Con le regex: ', rdmWordConv);