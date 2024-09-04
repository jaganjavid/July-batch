
const name = "Jagan";
const age = 27;
const job = "Web Dev";
const city = "Chennai";

let val;

// Without template Strings

// val = "My name is " + name + " " + "im" + " " + age + " " + "my job is" + " " + job + " " + "and im coming from" + " " + city; 

// With Template Strings

val = `My name is ${name} im ${age} my job is ${job} and im coming from ${city}`;



console.log(val);