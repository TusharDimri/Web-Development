console.log("We are at Tutorial 50");

let str = "This is a String";
console.log(str);

// Locating the index of a word in a string:-

let pos1 = str.indexOf('is'); 
// indexOf method returns the first occurance of given substring in the given string
console.log(pos1);

let pos2 = str.lastIndexOf('is');
// lastIndexOf method returns the last occurance of given substring in the given string
console.log(pos2)


//  Extracting/Slicing a substring from a string

//  Using slice method:-
let substr1 = str.slice(0, 5);
// 0 is inclusive and 5 is exclusive
console.log(substr1);

// Using substring method:-
let substr2 = str.substring(0, 7);
//  0 is inclusive and 7 is exclusive
console.log(substr2);

//  Difference between slice and substing :-
// slice method can take -ve indexes but substring method can take only +ve indexes

// Using substr method:-
let substr3 = str.substr(0, 10);
// substr method extracts 10 characters strating from 0 index from the given strnig. Here 0 is inclusive.
console.log(substr3);


// Replacing a substring from a string:-

let replace = str.replace('a String', 'Tushar');
console.log(replace); // New String
console.log(str); // Original String 
// Above 2 lines show that replace method does not modify a string. It rather creates a new string.


// Changing case of a string:-

// Converting string to Upper Case:-
console.log(str.toUpperCase());

// Converting string to Lower Case:-
console.log(str.toLowerCase());


// Concatenation:-
let newString = str.concat(' New String');
console.log(newString);
// We can use + for string concateantion


// Removing leading and Trailing Blanks from a String:-
let string = "  Hey there     How are you?   "
console.log(string);
console.log(string.trim());


// Extracing Characters from a String:-
let char = str.charAt(3);
console.log(char);
charCode = str.charCodeAt(3); // Not that important
console.log(charCode);


// String Slicing :-
console.log(str[1]);
// 1 is inclusive and 10 is exclusive.