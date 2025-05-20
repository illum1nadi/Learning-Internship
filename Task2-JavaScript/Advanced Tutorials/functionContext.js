//Function Context
// In JavaScript, the context of a function refers to the value of `this` inside that function.
// The value of `this` is determined by how a function is called, not where it is defined.
// The value of `this` can be different depending on the context in which a function is called.
var person = {
    name : "John"
};

function printName()
{
    console.log(this.name);
}

printName(); // undefined

var newPrintName = printName.bind(person);
newPrintName(); // John
// The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.

printName.call(person); // John
printName.apply(person); // John
// The `call` and `apply` methods call a function with a given `this` value and arguments.
// The difference between `call` and `apply` is that `call` takes arguments as a list, while `apply` takes arguments as an array.

//Exercise
var boundPrintFullName = printFullName.bind(person);
var boundPrintDetails = printDetails.bind(person)