
const firstName = "jagan";
const lastName = "Javid";
const age = 27;


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";

val = val;
// val = val + " Doe";
val += " Doe";

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();


// Get by Index
val = firstName[0];
val = firstName[firstName.length - 1];

// CharAT

val = firstName.charAt(2);
val = firstName.charAt(firstName.length - 1);

// Slice

const fruit = "strawberry";

val = fruit.slice(1,5);
// console.log(fruit);

// Split

const str = "Hello my name is jagan and im a web dev";

const tags = "App,Web,UI/UX";

val = str.split(" ");
val = tags.split(",");

// Replace
// val = str.replace("jagan", "javid");

// Include
val = str.includes("jagan");


console.log(val);
