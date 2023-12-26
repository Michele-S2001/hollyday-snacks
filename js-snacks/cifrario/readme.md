> Data una stringa, restituire la versione in alfabeto farfallino (le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u-> ufu)

> stringa = “marco”; // risultato mafarcofo

- creo una funzione che mi permetta di verificare se un carattere è una vocale o meno

  - inserisco come argomento il carattere
  - creo all'interno un array con tutte le vocali
  - utilizzo il metodo "includes" per farmi ritornare true o false a seconda della sua presenza o meno all'interno dell'array delle vocali
  - oppure una versione custom con un ciclo

- creo un'altra funzione che sarà quella che effettivamente converte in alfabeto farfallino
  - come argomento della funzione inserisco la stringa random
  - creo una stringa vuota a cui andrò a concatenare tutte le lettere a formare la parola farfallina
  - con un ciclo for basato sulla lunghezza della stringa
    - recupero lo iesimo elemento utilizzando l'indice
    - SE la lettera corrente è una vocale (utilizzando la funzione che ho creato in precedenza)
      - allora fai questa concatenazione char + 'f' + char
    - ALTRIMENTI
      - concateni semplicemente la lettera corrente
  - la funzione in fine ritornerà la stringa convertita in alfabeto farfallino
