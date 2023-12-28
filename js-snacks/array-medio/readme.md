> Dato un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array con solo i numeri pari o solo i numeri dispari (su richiesta dell'utente)

> array = [1,3,5,2,10,6,4,9]
> even = true
> // risultato [2,10,6,4]

> array = [1,3,5,2,10,6,4,9]
> even = false
> // risultato [1,3,5,9]

- Dichiaro una funzione che come argomenti abbia l'array da filtrare e un parametro "switch" che può essere true o false

- Creo una filter in modo tale che se il parametro risulta con valore "true" allora il filtro lascierà passare i valori con modulo di 2 uguale a 0, se dovesse risultare con valore "false" invece, saranno accettati solo i valori dispari quindi con modulo di 2 diverso da 0
