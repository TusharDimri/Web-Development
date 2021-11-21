/*
=== - Is equal to.
!== Is not equal to.
> - Is greater than.
< - Is less than.
>= - Is greater than or equal to.
<= - Is less than or equal to.  
*/

// Difference between ===  and == 
var a  = 1;
console.log(typeof(a));
var b = "1";
console.log(typeof(b));

console.log("a == b gives", a==b);
console.log("a === b gives", a===b);

// Therefore, == compares only values while === compares both value and data type.