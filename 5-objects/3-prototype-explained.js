function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// const javid = new Person("Jagan", "Javid");

// javid.__proto__.__proto__.fullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// console.log(javid);

// console.log(javid.fullName());


const arr = [1,2,3];

console.log(arr);

arr.__proto__.hello = function(){
    console.log("Hello");
};

arr.hello();
