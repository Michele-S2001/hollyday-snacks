> Dato un array di oggetti, ordinare l'array in base al valore di una proprietà degli oggetti (es. name: “Marco”, age: 22)

> array = [
	{ name: "Marco", age: 22 },
	{ name: "Anna", age: 24 },
	{ name: "Luca", age: 17 },
	{ name: "Gianni", age: 53 }
];
// risultato
// [
//     { name: "Luca", age: 17 },
//     { name: "Marco", age: 22 },
//     { name: "Anna", age: 24 },
//     { name: "Gianni", age: 53 }
// ]

- utilizzo il metodo sort, e nella funzione di callback li ordino con l'età crescente