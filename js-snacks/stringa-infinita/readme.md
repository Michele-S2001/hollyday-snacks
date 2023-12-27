> Data una stringa con un pattern ripetuto (es. ABCDE), ipoteticamente infinita, restituire le lettere racchiuse fra due indici (es. 13 e 16) inclusi

> stringa = "ABCDE";
> start = 13;
> end = 16;
> // risultato DEAB

- Dichiaro una variabile alla quale assegno una stringa con pattern ripetuto
- Creo una funzione all'interno del quale:

  - Inizializzo una variabile con valore stringa vuota
  - Eseguo un ciclo for sulla stringa passata tra gli argomenti della funzione
  - Creo una condizione if in modo tale che alla variabile con stringa vuota vengano aggiunte le lettere tra 2 limiti che vengono passati sempre come argomenti
  - Ritorno poi il pezzo di stringa

- Creo anche una funzione dedicata per la generazione di una stringa con pattern ripetuto, in cui un argomento sarà il pattern da rispettare e il secondo argomento sarà il numero di volte in cui si vuole che sia ripetuto

> Ho provato anche a utilizzare metodi nativi di js come "substring" o "slice", ma entrambi i metodi hanno l'indice finale escluso, e con i parametri start ed end forniti dalla consegna non mi garantivano lo stesso risultato
