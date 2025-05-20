
// Arrow function syntax
// Arrow functions are a more concise syntax for writing function expressions.
// They are often used for short functions that are not reused elsewhere.
const greet = (name) => { return "Hello " + name + "!"; }

console.log(greet("Eric"));

//explicit return
// If the function body consists of a single expression, you can omit the braces and the return keyword.
var greet1 = name => "Hello " + name + "!";

console.log(greet("Eric"));      // prints out Hello Eric!


//Exercise
var divideByTwo = (number) => {
    return number / 2;
}
console.log(divideByTwo(10)); // prints out 5

var divideByTwo = number => number / 2;
console.log(divideByTwo(10)); // prints out 5