# snack four - difficile

- Questo snack è stato sicuramente il meno intuitivo di tutti, ci ho messo diverso tempo, ma alla fine ho pensato a questa soluzione: 

- prima di tutto all'aggiunta di un counter di supporto che aumenta ogni qualvolta la lettera corrente fosse uguale a quella successiva, quando l'uguaglianza non è soddisfatta allora va ad aggiungere la lettera concatenata al valore del counter SOLO se maggiore di 1, se no concatena stringa vuota ed entrando in questa condizione resetta il counter facendolo tornare a valore 1. Infine restituisce la stringa