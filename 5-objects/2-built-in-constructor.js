

// String
const name1 = "Javid";
const name2 = new String("Javid");


// console.log(name1);
// console.log(typeof name1);

// console.log(name2);
// console.log(typeof name2);

// if(name1 === name2){
//     console.log("Yes Match");
// } else {
//     console.log("Not Match");
// }


// Number

const num1 = 5;
const num2 = new Number(10);

// console.log(num1)
// console.log(typeof num1)

// console.log(num2)
// console.log(typeof num2)

// Boolean

const bool1 = true;
const bool2 = new Boolean(false);

// console.log(typeof bool1);
// console.log(typeof bool2);

// Function
const getSum1 = function(x, y){
    return x + y;
}

// console.log(getSum1(10, 10));

const getSum2 = new Function("x", "y", "return x + y");

// console.log(getSum2(20, 20));

// Object

const obj1 = {name:"jagan"};
const obj2 = new Object({name:"javid"})


// console.log(obj1);
// console.log(obj2);

// Arr

const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);

// console.log(arr1, arr2);


function test(){
    console.log("Hello");
}

test.x = "Bruh";

console.log(test.x);



