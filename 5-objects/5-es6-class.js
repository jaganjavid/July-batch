

class Person{

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName; 
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

}

const javid = new Person("Jagan", "Javid");

class Customer extends Person{
    constructor(firstName, lastName, phone, membership) {
       super(firstName, lastName);
       this.phone = phone;
       this.membership = membership;
    }

    whatProduct(product){
      return `i want this ${product}`
    }
}

const javidCustomer = new Customer("Jagan", "Javid", "111-111-1111", "Standard");

console.log(javidCustomer.greeting());
console.log(javidCustomer.whatProduct("shoes"));