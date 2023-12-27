<?php

function generatePatternString(String $pattern, Int $repNumb)
{
  $patternStr = '';
  for ($i = 0; $i < $repNumb; $i++) {
    $patternStr .= $pattern;
  }
  return $patternStr;
}


function getStrBetTwoIdx(String $infiniteString, Int $startLimit, Int $endLimit)
{
  $peaceOfString = '';
  $arrInfiniteString = str_split($infiniteString, 1);

  foreach ($arrInfiniteString as $key => $char) {
    if ($key >= $startLimit && $key <= $endLimit) {
      $peaceOfString .= $char;
    }
  }

  return $peaceOfString;
}

echo getStrBetTwoIdx(generatePatternString('ABCDE', 8), 13, 16);
