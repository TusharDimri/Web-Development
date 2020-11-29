console.log('We are at Tutorial 61');

//                                    Math Object in Javascript

let m = Math;
console.log(m);

// Some commonly used constants:-

// E: 2.718281828459045
// LN2: 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E: 0.4342944819032518
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951

// Above constants using Math Object:-

console.log(Math.E); // Euler's Number
console.log(Math.PI); 
console.log(Math.LN2);
console.log(Math.LOG2E);


// Some methods of Math Object:-

let a = 32.34;
let b = 89;
console.log('First Number is ' + a);
console.log('Second Number is ' + b);

// Rounding off a number:- 
console.log(Math.round(a));
console.log(Math.round(b));

// Powers:-
console.log(Math.pow(2, 5)); // 2 raised to the power 5

// Square Root:-
console.log(Math.sqrt(36)); 
console.log(Math.sqrt(a)); 
console.log(Math.sqrt(b)); 

// Floor and Ceil:-
console.log(Math.ceil(5.2)); // Number Rounded Up
console.log(Math.floor(5.2)); // Number Raounded Down
console.log(Math.ceil(9.8)); // Number Rounded Up
console.log(Math.floor(9.8)); // Number Rounded Down

// Absolute Values :-
console.log(Math.abs(5.6));
console.log(Math.abs(-5.6));
console.log(Math.abs(424.645));
console.log(Math.abs(-424.645));

console.log(Math.cos(Math.PI)); 

// Trignometric Functions:-
// These methods accept values in radians and not in degrees
console.log(Math.sin(Math.PI));
console.log(Math.cos(Math.PI));
console.log(Math.tan(Math.PI));

// Min and Max :-
console.log(Math.min(4, 5, 6));
console.log(Math.max(4, 5, 6));


// Random Numbers:-

// 1. Generating Random Numbers between 0 and 1:-
r = Math.random();
console.log('Random Number is ' + r) 
// r contains a random number betwwen 0 and 1

// 2. Generating Random Number b/w a and b:-
//  Formula :- a + (b-a)* Math.random()
let a1 = 1; 
let b1 = 100;
ran = a + (b-a)*Math.random();
console.log('Random number bwtween 1 and 100= ' + ran);