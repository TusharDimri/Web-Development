// Synchronous or Blocking - This type of code executes line by line. 
//                               vs
//  Asynchronous or Non Blocking - line by line exection not gurantted. Callbacks will fire.

// Understanding asynchronous programming:-
const fs = require("fs");
const { readFile } = require("fs/promises");
// let text = fs.readFile("File.txt", "utf-8");  This line will return an error
let text = fs.readFile("File.txt", "utf-8", (error, data)=>{
    console.log(error, data)
});
console.log('This is a message'); //Output shows that this line is logged first
// When we use asynchronous function in javascript the function executes after the task is done. 


/*
Check out Node.js.org(Node.js Documentation) after you complete the basics.
*/