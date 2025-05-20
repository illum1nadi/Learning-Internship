// This function simulates a server request that returns a promise
function getServerStatus() {
    const result = fetch("/server/status");

    result.then(function(status) {
        console.log("The status from the server is: ", status.ok);
    });
}

//promise is a javascript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// A promise is in one of three states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Meaning that the operation was completed successfully.
// 3. Rejected: Meaning that the operation failed.

function sumAsync(x, y) {
    const p = new Promise((resolve, reject) => {
        // this resolves the promise we just created with the output of x+y
        resolve(x + y);                        
    });

    // This returns the promise, not the value
    return p;
}
//resolve is a function that is called when the promise is fulfilled
//reject is a function that is called when the promise is rejected
// The promise is fulfilled with the value of x + y
// The promise is rejected with an error message if the input is not a number

// let's use the function now
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
});


//Exercise
function upperCaseAsync(str) {
    const p = new Promise((resolve, reject) => {
        if(str == null || str == undefined) {    
            reject("The input is not a string");
        }
        else {
            resolve(str.toUpperCase());
        }
    });
    return p;
}