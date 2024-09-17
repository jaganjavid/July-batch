

const person = {
    // KEY & VALUE PAIRS
    // Properties
    firstName:"Jagan",
    lastName:"Javid",
    age:27,
    email:"jj@gmail.com",
    hadDinner:false,
    hobbies:["music", "sports"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

// (.)

let val;

val = person;

// Get a specific value

val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[1];
val = person.address.state;

console.log(person.getFullName());


console.log(val);