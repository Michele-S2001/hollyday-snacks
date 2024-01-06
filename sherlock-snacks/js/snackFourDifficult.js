/*
### Snack 4 - Difficile

INPUT: `"maammmmp"` 
OUTPUT: `"ma2m4p"` 

INPUT: `"ciaooooooooo"` 
OUTPUT: `"ciao9"` 

INPUT: `"ppppprrrrrrrrroovvvvvvvaaaaaaaaaaaaa"` 
OUTPU: `"p5r9o2v7a13"`
*/

/**
 * Opzione con la funzione custom
 */

function getNormalWord(word) {

  let normalWord = '';
  let count = 1;

  for (let i = 0; i < word.length; i++) {

    if(word[i] === word[i + 1]) {
      count++;
    } else {
      normalWord += word[i] + (count > 1 ? count : '');
      count = 1;
    }

    /*if(word[i] !== word[i - 1]) {
      normalWord += (count > 1 ? count : '') + word[i];
      count = 1;
    } else {
      count++;
    }*/
  }

  return normalWord
}

const wrd = 'tteeelefffffffffffffoonooooooooo';

console.log(getNormalWord(wrd));