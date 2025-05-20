function Person(firstName, lastName) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;

    // a method which returns the full name
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var myPerson = new Person("John", "Smith");
console.log(myPerson.fullName());            // outputs "John Smith"

//new keyword creates a new object is the same as the constructor function.
var myPerson = {
    firstName : "John",
    lastName : "Smith",
    fullName : function()
    {
        return this.firstName + " " + this.lastName;
    }
}

//Exercise
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.describe = () => {
        return this.name  + ", " + this.age + " years old";
    }
};