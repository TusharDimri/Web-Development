var y = 3; // Global Variable

function scope(){
    var x = 2; // Local Variable
    console.log(x);
    console.log(y);
}

scope()

// console.log(x); // Outside the scope of the function in ehich x is declared.
console.log(y);


// Scope in Javascript:
/*
If we create a variable inside if-else block, for or while loops or anything other than the function block, then we can access them globally.
*/ 

// Other Javascript keyword to create variables:
// 1. Using let keyword:
let a = 34;
console.log(a);


const b = 3.14;
// b = 3.142; // Error as b is a constant.
console.log(b);

/*
var and let behave differently in relation to scope.
1. In terms of function, al the three(let, const, var) are Local.
2. Outside the function, all three of these are Global.
3. Inside an if-else block or inside a loop:
    - let or const: Local for that block.
    - var: Global. 

Avoiding the use of var keyword is considered a good practice.
*/