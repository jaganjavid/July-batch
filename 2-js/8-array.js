
const numbers = [2,43,56,76,23,76,2,58,21,11];


let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];
val = numbers[5];

// Insert into array
// val = numbers[0] = 20;

// Find the index of value
val = numbers.indexOf(23);
val = numbers.indexOf(1000); // if array match is retun the index if not -1;

// Mutate Array

// Add on the end
// numbers.push(1000);
// numbers.push(2000);

// Add on the front
// numbers.unshift(3000);
// numbers.unshift(4000);

// Take of from the end
// numbers.pop();
// numbers.pop();
// numbers.pop();

// Take of from the front
// numbers.shift();
// numbers.shift();
// numbers.shift();

const fruits = ["Apple", "Banana", "Orange", "Kiwi"];

// Splice() ==> helps to add and also remove

// To remove
// fruits.splice(2,1);


// To add
fruits.splice(2,1,"strawberry");


console.log(fruits);