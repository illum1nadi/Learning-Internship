//type auto assigned for s as the calling array names already has a type defined.
type StringArray1 = Array<string>;
const names : StringArray = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});


 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
    // s is inferred to be of type string from names.
    console.log(typeof s); 
    console.log(s.toUpperCase());
});

//Optional Property with ? which is last. 
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//Sample usage of optional property
function greet(name?: string) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, stranger!");
  }
}
//Can be used for hooks not needed to the user in Real-World Scenarios.

//to narrow down a union code else it will crash.
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// A type cannot be changed after being created.

//This is a type assertion. It tells the compiler to treat the variable as a different type.
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//Angular bracket syntax
const myCanvas1 = <HTMLCanvasElement>document.getElementById("main_canvas");

//literal types for const variables that do not change giving them their unique type.
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;
//usually invalid as it is not a string but a string literal

//But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
//printText("G'day, mate", "centre"); error as "centre" is not a valid value for the alignment parameter.

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method); 
// ❌ Error: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'
//As parameter types are not same the same structure is not applicable.

//Fixes
handleRequest(req.url, req.method as "GET" | "POST");
//Alternately, can type the req object to match the expected structure
// const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method);

//For post null checking.
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

//Enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
//You cannot declare an enum member without an initializer after a computed member. TypeScript doesn't know how to auto-increment after a computed value at compile time.
// enum E {
//   A = getSomeValue(),
//   B, // Error: Enum member must have initializer
//   C = 1,
//   D, // OK
// } 

//Rare primitive types:
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);
 
// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

//Symbols are unique and immutable references to a value. They are often used as unique object property keys.
const firstName = Symbol("name");
const secondName = Symbol("name");

// console.log(firstName === secondName); // false ❌
// The two symbols are not equal, even though they have the same description