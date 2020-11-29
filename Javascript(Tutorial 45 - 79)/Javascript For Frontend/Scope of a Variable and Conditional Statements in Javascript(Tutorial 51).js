console.log("We are at Tutorial 51");


//                              Scope of a Variable in Javascript:-

var string1 = "This is a String";
var string1 = "This is string1"; // Redeclaring a variable
console.log(string1);
// Note:- Scope of the variables declared using var keyword is Global.

let a = "U";
// We can't redeclare a as it is created using let keyword.
// Note:- Scope of variables declared using let keyrod is block level scope.
{
   let a = "Tushar"; // The scope of this variable is only limited to this block.
   console.log(a); 
       
}
console.log(a);
// We weare able to redclare a using let keyword as both the different variables ere declared in different blocks.

// Creating constants using const keyword:-
const c = "This cannot be changed";
console.log(c);
// c = "Change this";
// Above line will return an error as we cannot change the value of varibales declared using const keyword


//                               Conditional Statements in Javascript:- 

// 1. if-else ladder:-
let age = 18;
if (age>=18){
    console.log("You can drive legally");
}
else{
    console.log("You cannot legally drive");
}

// To check whether a number is +ve , -ve or 0.
let num = 1;
if (num > 0){
    console.log("Number is +ve");
}
else if(num < 0){
    console.log("Number is -ve");
}
else{
    console.log("Number is 0");
}
// If we use multiple if statments rather than else if statement, then all conditions are checked even if any condition is satisfied. 

// 2. Switch Case Statements:-
const cups = 32;
switch (cups) {
    case 4:
        console.log("The value of cups is 4");
        break;

    case 32:
        console.log("The value of cups is 32");
        break;

    default:
        console.log("No value is defined for cups");
        break;
}
//  case 4: evaluates to => if cups = 4
// We use break keyword to come out of the case block once the conditions are satisfied and the specified tasks are complete 
// if we don't use break statement all the cases after the case satisfying the condition are executed.