// Loops in JavaScript
// For loop
var i;  
for (i = 0; i < 3; i = i + 1)
{
    console.log(i);
}

var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++)
{
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

// While loop
var i = 99;
while (i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}

//Break and continue statements
// Break statement
// The break statement is used to exit a loop or switch statement.
var i = 99;
while (true)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 0)
    {
        break;
    }
}
// Continue statement
// The continue statement is used to skip the current iteration of a loop and continue with the next iteration.
for (var i = 0; i < 100; i++)
{
    // check that the number is even
    if (i % 2 == 0)
    {
         continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}

//Exercise
for(var i = 0; i < myArray.length; i++)
{
    console.log(myArray[i])
}