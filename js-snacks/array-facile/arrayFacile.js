// array di numeri casuali
array = [1, 3, 5, 2, 10, 6, 4, 9, 12, 32, 17];

// applico la filter
const evenElements = array.filter((el) => el % 2 === 0);
console.log(evenElements);
