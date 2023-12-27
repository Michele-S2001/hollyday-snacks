<?php
/* funzione per la verifica delle vocali*/
function isVowel(String $char)
{
  $vowels = ["a", "e", "i", "o", "u"];
  return in_array($char, $vowels);
}

/* funzione per la conversione in alfabeto farfallino */
function getStrIntoFarfallino(String $randomString)
{

  //$arrString = str_split($randomString, 1);
  $farfString = '';

  for ($i = 0; $i < strlen($randomString); $i++) {
    $char = $randomString[$i];
    if (isVowel($char)) {
      $farfString .= $char . "f" . $char;
    } else {
      $farfString .= $char;
    }
  }
  /*foreach ($arrString as $char) {

    if (isVowel($char)) {
      $farfString .= $char . "f" . $char;
    } else {
      $farfString .= $char;
    }
  }*/

  return $farfString;
}
$rdmStr = 'marco';
echo getStrIntoFarfallino($rdmStr);
