//in operator to check if a property exists in an object.
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

//instance of isa type guard for classes.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//Makes type of variable union of number and string.
let x = Math.random() < 0.5 ? 10 : "hello world!";


//Discriminated union types
interface Shape1 {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
//Even though circle cannot guarentee radius and square cannot guarantee sideLength, the compiler will not throw an error as it is a union type.

//Fix:
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
//The default case will never be reached as the compiler will throw an error if it is reached.
//This is a good way to ensure that all cases are handled in a switch statement.
