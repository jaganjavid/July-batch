

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}

const javid = new Person("Jagan", "Javid");

console.log(javid.greeting());

// Customer object
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype
Customer.prototype = Object.create(Person.prototype);



const javidCustomer = new Customer("Arun", "Kumar", "111-111-1111", "standard");


console.log(javidCustomer.greeting());


