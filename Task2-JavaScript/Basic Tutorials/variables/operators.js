//+ can be used for both numbers and strings, just to concanate strings.
var a = 5;
var c = 10;
var d = a + c;
console.log(d); // 15
var a = "aditya";
var b = "reddy";
console.log(a + b); // aditya reddy

//-, +, / do their normal operations on numbers.
console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6

//% for remainder.
console.log(5 % 2);     // outputs 1

//+=, -=, *=, /=, %= are shorthand for the above operations.
var a = 5;
a += 5; // a = a + 5
console.log(a); // 10  

//Math module also available for advanced operations.
Math.abs(-5); // 5
Math.ceil(5.1); // 6
Math.floor(5.9); // 5
Math.max(5, 10); // 10
Math.min(5, 10); // 5
Math.pow(2, 3); // 8    
Math.sqrt(16); // 4     
Math.random(); // random number between 0 and 1
Math.round(5.5); // 6
Math.round(5.4); // 5
Math.exp(2); // e^2

//Exercises
var firstName = "Aditya";
var lastName = "Reddy";
var fullName = firstName + " " + lastName;
console.log(fullName); // Aditya Reddy
var myNumber = 5;
var meaningOfLife = myNumber * 2;
console.log(meaningOfLife); // 10