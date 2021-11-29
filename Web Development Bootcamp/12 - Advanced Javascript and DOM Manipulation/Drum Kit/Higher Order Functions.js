function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(1, 4, add));
console.log(calculator(12, 16, subtract));
console.log(calculator(3, 9, multiply));
console.log(calculator(32, 16, divide));

// Higher Order Functions:-
/*
Higer Order Functions are the functions that can take other functions as inputs(parameters).
*/