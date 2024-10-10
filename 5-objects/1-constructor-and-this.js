
function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    // Methode
    this.fullName = function(){
      return `${this.firstName} ${this.lastName}`;
    }
    this.test = function(){
        console.log(this);
    }


}


const javid = new Person("Jagan", "Javid");
const arun = new Person("Arun", "Kumar");

console.log(javid);
console.log(arun);


