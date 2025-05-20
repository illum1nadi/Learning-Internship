//Objects in JavaScript

//Defining an object.
var emptyObject = {};
var personObject = {
    firstName : "John",
    lastName : "Smith"
}

//Adding properties to an object.
var personObject = {
    firstName : "John",
    lastName : "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;

//Iterating over an object.
// The for..in statement is used to iterate over the properties of an object.
for (var member in personObject)
{
    if (personObject.hasOwnProperty(member))
    {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}

//Exercise
var person = {
    firstName : "Jack",
    lastName : "Smith",
    age : 19,
    employed : true,
};