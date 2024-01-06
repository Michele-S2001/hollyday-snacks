# snack four

- Per quanto riguarda questo snack ho capito al volo che dovevo sbarazzarmi delle lettere ripetute una dopo l'altra e sostituirle con una sola di esse, ho pensato a queste due soluzioni:

  - Per il primo caso ho sviluppato una funzione custom che va prima di tutto a dichiarare una variabile con la prima lettera della parola, poi con un ciclo "for" partendo dalla seconda lettera verifico che non sia uguale a quella precedente, SE la condizioni è "true" allora la aggiungo alla variabile "normalWord" e restituisco quest'ultima terminato il ciclo
  
  - Per la seconda soluzione, quella più "smart" e veloce, ho semplicemente creato una regex che mi prendesse ogni qualsiasi carattere che è seguito da se stesso 1 o più volte, e lo sostituisca con il carattere singolo '$1', tutto questo inserito nel metodo replace nei suoi due argomenti