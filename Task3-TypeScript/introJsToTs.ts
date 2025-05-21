//General usage of JavaScript
const user = {
    name: "John",
    age: 30,
}

//TypeScript unlike JavaScript is typed
//TypeScript allows you to define the type of a variable.
interface User {
    name: string;
    age: number;
}


//Using the interface since UserAccount has same properties as User so we can use the same interface.
interface User1 {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user1: User1 = new UserAccount("Murphy", 1);

//Function which inputs the type User1.
function deleteUser(user: User1) {
  return user.name;
}

//Function which returns the type User1.
//Because ts and js are dynamically scoped was able to return a global object user1
function getAdminUser(): User1 {
  return user1;
}

console.log(getAdminUser().id);

//Composing Types

//| is the union operator to define MyBool can be one of many types.
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//This implies input can be either a string or an array of strings.
function getLength(obj: string | string[]) {
  return obj.length;
}

const adi : MyBool = true;

//Use typeof to check the type of the object.
console.log(typeof adi);

//Define using generic types like an array of strings or numbers, as normal arrays can contain any type.
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


//This is how to make an interface with a parameterized type.
//add is a function which takes an object of type Type and returns nothing.
//get is a function which returns an object of type Type.
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
 
// Since the backpack variable is a string, you can't pass a number to the add function.
//backpack.add(23);
// Works now as "hello" is a string.
backpack.add("hello");


//Though point was not explicity defined as a Point, it is still a Point because it has the same properties as Point.
//So by structure typescript allows this as the structure of point is same as Point.
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

//Noticed this is till working but is throwing a warning and running on the playground.
interface Point1 {
  x: number;
  y: number;
  z: number;
}
 
function logPoint1(p: Point1) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point1 = { x: 12, y: 26, z: 89 };
logPoint1(point1);