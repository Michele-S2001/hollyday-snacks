// array di oggetti
const array = [
	{ 
    name: "Marco", 
    age: 22 
  },
	{ 
    name: "Anna", 
    age: 24 
  },
	{ 
    name: "Luca", 
    age: 17 
  },
	{ 
    name: "Gianni", 
    age: 53 
  }
];
// utilizzo il metodo sort
array.sort((a, b) => a.age - b.age)
// log
console.log(array);