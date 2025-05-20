var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");
//Prototype Inheritance
// In JavaScript, every object has a prototype.
// The prototype is an object that is associated with every function and object by default.
// The prototype is used to add properties and methods to an object.
// The prototype is also used to implement inheritance.
// The prototype chain is the mechanism by which JavaScript objects inherit features from one another.
// When you try to access a property of an object, JavaScript will first look at the object itself.
// If the property is not found, it will look at the object's prototype.
// If the property is not found in the prototype, it will look at the prototype's prototype, and so on.

//Exercise
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

var Teacher = function () {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    console.log(this.name + " is now Teaching " + subject);
}

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");