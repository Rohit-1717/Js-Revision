//* Number

let balance = 1000;

let currentBalance = new Number(1000);

// console.log(balance);

// console.log(currentBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof currentBalance);

//! everything is an object in JS, because every data type can be converted to object.

//* Boolean

let isActive = true;

let isReallyActive = new Boolean(true); //! using new keyword any primitive data type can be converted to Non - Primitive data type.

// console.log(isActive);
// console.log(isReallyActive);

//* null and undefined

let firstName;
// console.log(first); // undefined

let lastName = null;
// console.log(lastName); // null

let middleName = undefined;
// console.log(middleName); // undefined

//* String

let myName = "Rohit";
let yourName = "Vishwakarma";

let greetings = "hello";

let userName = `rohit123`;

let oldGreet = greetings + " Rohit";
// console.log(oldGreet);

let greetingMessage = `Hello ${myName} !`; // Sring Interpolation

// console.log(greetingMessage);   


//* Symbol

let sym1 = Symbol("Rohit");
let sym2 = Symbol("Rohit");

console.log(sym1 == sym2); 

console.log(sym1)


