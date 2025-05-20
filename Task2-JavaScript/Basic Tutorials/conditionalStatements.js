//These are conditionals they are used to check if a condition is true or false
if (confirm("Are you John Smith?"))
{
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}


// These are comparison operators
// == is used to compare two values for equality
// === is used to compare two values for equality and type
// != is used to compare two values for inequality
console.log("1" == 1); // true
console.log("1" === 1); // false
console.log("1" != 1); // false

// This is a switch statement.
// It is used to execute different code blocks based on different conditions.
var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}



//Exercise
function checkNumber(myNumber) {
    if(myNumber == 42) {
        console.log("Correct");
    }
    else {
        console.log("Incorrect");
    }
}