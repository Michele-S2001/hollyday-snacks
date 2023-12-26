// creo una funzione per verificare se la lettera corrente sia una vocale
function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < vowels.length; i++) {
    const vowel = vowels[i];

    if (vowel === char) {
      return true;
    }
  }
  /**
   * vowels.forEach((vowel) => {
   *  if (vowel === char) {
   *    return true;
   *  }
   * });
   */
  return false;

  /**
   * \/\/\/ versione semplificata con il metodo includes \/\/\/
   * return ['a', 'e', 'i', 'o', 'u'].includes(char);
   */
}

function getStrIntoFarfallino(randomString) {
  // dichiaro una variabile per la stringa farfallina
  let rdmStringFar = "";

  // creo un ciclo per analizzare ogni lettera della stringa random
  for (let i = 0; i < randomString.length; i++) {
    const letter = randomString[i];

    if (isVowel(letter)) {
      rdmStringFar += letter + "f" + letter;
    } else {
      rdmStringFar += letter;
    }
  }

  return rdmStringFar;
}
const rdmWord = "marco";
console.log(getStrIntoFarfallino(rdmWord));
