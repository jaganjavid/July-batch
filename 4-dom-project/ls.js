

// get, set, remove, clear

// localStorage.setItem("user", "javid");

// console.log(localStorage.getItem("user"));

// localStorage.removeItem("user");

// console.log(localStorage.getItem("user"));

// if localStorage does not contain the key means it return null


// JSON

const arr = [1,2,3,4,5];

console.log(arr);

const arrToString = JSON.stringify(arr);

console.log(arrToString);
console.log(typeof arrToString);

const stringToarr = JSON.parse(arrToString);

console.log(stringToarr);