function getStrBetTwoIdx(infiniteString, startLimit, endLimit) {
  /* versione custom dell'estrazione di una stringa*/
  let peaceOfString = "";

  for (let i = 0; i < infiniteString.length; i++) {
    const char = infiniteString[i];

    if (i >= startLimit && i <= endLimit) {
      peaceOfString += char;
    }
  }

  return peaceOfString;
}

function generatePatternString(pattern, repNumb) {
  let patternStr = "";

  for (let i = 0; i < repNumb; i++) {
    patternStr += pattern;
  }

  return patternStr;
}

// stringa con pattern ripetuto
const repeatedStringPat = generatePatternString("ABCDE", 8);

console.log(getStrBetTwoIdx(repeatedStringPat, 13, 16));
