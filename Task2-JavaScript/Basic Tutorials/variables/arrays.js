// This code demonstrates how to create arrays in JavaScript using different methods.
var array = [1, 2, 3, 4, 5]; 
var array2 = new Array(1, 2, 3, 4, 5);

// Arrays in js are sparse, we can assign variables to random indexes, though previous cells are undefined.
array[10] = 10;
console.log(array);

//Special types of objects so can store different types of data in the same array.
var array3 = [1, "Hello", true, null, undefined, { name: "Aditya" }, [1, 2, 3]];

//Array manipulation methods.
var array4 = [];
array4.push(1);
array4.push(2);
console.log(array4);
array4.pop();
console.log(array4);
//
array4.unshift(0);
console.log(array4);
console.log(array4.shift());
array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array4.splice(3, 5);
console.log(array4);

//Exercise
var array = [];
array.push(42);
console.log(array)
console.log(array.shift());
console.log(array)