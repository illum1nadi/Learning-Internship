//callbacks are functions that are passed as arguments to other functions.
var callback = function() {
    console.log("Done!");
}

setTimeout(callback, 5000);

//can also be written as an anonymous function.
setTimeout(function() {
    console.log("Done!");
}, 5000);

//Exercise 
var callback = function(arg) {
    console.log(arg);
}

