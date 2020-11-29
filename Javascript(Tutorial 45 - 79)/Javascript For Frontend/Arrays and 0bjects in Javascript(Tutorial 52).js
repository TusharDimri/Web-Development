console.log("We are at Tutorial 52");

// Primitive Data Types in Javascript:-

let myvar1 = 34; // Numbers
let myvar2 = '34'; // Strings
let myvar3 = true; // Boolean
let myvar4 = null; // Null
let myvar5 = undefined; // Undefined 


// Referrence Data Types in Javascript:-

let employee = {
    name: "Tushar Dimri",
    salary : 10000000000,
    "Favourite Programming Language" : "Python",
} // This is a Javascript Object
console.log(employee);
// Notation 1 :-
console.log(employee.name);
console.log(employee.salary);
// Notation 2 :-
console.log(employee['name']);
console.log(employee['salary']);
console.log(employee['Favourite Programming Language'])

let arr = [1, 34, "69", "Guitar", true, null, undefined]; // This is a Javascript Array
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

// Creating arrays using new keyword
let array = new Array(1, 34, "69", "Guitar", true, null, undefined);
console.log(array); 
console.log(array[1]); 
console.log(array[2]); 
console.log(array[3]); 
// Check this:- 
let ar = new Array(20); // This will create an array with 20 empty spaces.
console.log(ar);

// Note:- An array a special type of object in Javascript.

console.log(arr.length);
console.log(array.length);

let a = arr.sort();
console.log(a);
let b = array.sort();
console.log(b);

// Adding and Removing Elements from an Array:-

arr.push("Pushed"); // Appends the element at the end of the array
console.log(arr);

