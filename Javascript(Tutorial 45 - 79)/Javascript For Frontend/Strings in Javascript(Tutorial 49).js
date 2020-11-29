console.log("We are at Tutorial 49");

let str = `This is a string`; // We can also use "" or '' to create a string
// `` are uued to create template literals
let name = "Tushar";
let message = "Tushar's Message";

console.log(str);
console.log(name);
console.log(message);
console.log(str + " " + name + " " + message); // String Concatenation
console.log(`My name is ${name}`);
console.log(`The length of 'message' is :- ${message.length}`); // This logs the length of string 'message'
console.log("Hello World\nMy name is Tushar Dimri"); // '\n' is a escape sequence character to add a newline.
// \t and \b are some other escape sequence characters among many others.
// To escape these characers we use /. For Example:-
console.log("\\n is escape sequence charater for newline");

let string  = new String("Hello World"); // This is another way to create a String
console.log(string);

// Adding a String to the DOM
document.getElementById('content').innerHTML = "<b> This is a String </b>";