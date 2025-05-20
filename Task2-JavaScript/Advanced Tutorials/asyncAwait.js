//Async and Await 
// Async and Await are syntactic sugar over Promises.
// They allow you to write asynchronous code in a more synchronous fashion.
// Async functions always return a promise.
// Await can only be used inside async functions.
// Await makes JavaScript wait until the promise is resolved.
// It can be used to wait for a promise to resolve or reject.
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sumAsync(x, y) {
    // this code waits here for 500 milliseconds
    await sleep(500);
    // done waiting. let's calculate and return the value
    return x+y;
}

// sumAsync is an async function, which means it returns a Promise.
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
});

// The above code is equivalent to the following code:
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        sleep(500).then(() => {
            resolve(x + y);
        });
    });
}

// let's use the function now
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
});

//Exercise
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function upperCaseAsync(str) {
    // this code waits here for 500 milliseconds
    await sleep(500);
    // done waiting. let's calculate and return the value
    return str.toUpperCase();
}