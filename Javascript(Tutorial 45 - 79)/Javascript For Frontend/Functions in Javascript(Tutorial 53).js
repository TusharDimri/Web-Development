console.log('We are at Tutorial 53');

//                            Functions in Javascript


// Code without using functions:-
let nm = "A";
let nm1 = "B";
let nm2 = "C";
let nm3 = "D";
console.log(nm + " is a good person");
console.log(nm1 + " is a good person");
console.log(nm2 + " is a good person");
console.log(nm3 + " is a good person");


// Code using functions:-
function greet(name, greetText='Good Morning') { // The default value of greetText is Good Morning
    let nm = "Tushar Dimri"; 
    // nm is a local variable and has block level scope(i.e. it scope is limited to this function)
    console.log(greetText + " " + nm);
    console.log(name + ' is a good person');
}
// Calling above function using different variables:-
greet(nm);
greet(nm1);
greet(nm2);
greet(nm3, "Good Evening");


// Using functions that return a value:-
function add(a, b, c) {
    return a + b + c;
    console.log('This will be ignored as this is written after return statement');
}
sum = add(32, 44, 24);
console.log(sum);
// Note:- Whatever we write after return statement inside a function is not executed(you can think of it as a comment)