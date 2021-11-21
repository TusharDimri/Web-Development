var n = Math.random(); // 16 decimal places number between 0.0000000000000000 - 0.999999999999999999 is generated.
console.log(n);

// To convert the random number generated to a number between 1 and 6.
n = n * 6;
n = Math.ceil(n);
// Ponder why we use Math.ceil() and not Math.floor().
// n = Math.floor(n)+1;
console.log(n); // n will be between 1 and 6

// Random Love Calculator 
// l1 = prompt("Enter your name: ");
// l2 = prompt("Enter your lover's name: ");

var num = Math.ceil(Math.random() * 100);

// console.log("Love percentage between %s and %s is %d", l1, l2, num);
console.log(num);