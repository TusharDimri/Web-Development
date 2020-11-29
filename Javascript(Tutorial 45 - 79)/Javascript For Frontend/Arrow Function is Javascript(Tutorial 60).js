console.log('We are at Tutorial 60');

function greet() {
    console.log('Welcome to my world');
}
greet();

// Shortcut way of writing above function:-
greet = () => {
    console.log('Welcome to my world');
}
greet();

// Using arrow functions:-

setTimeout(() => {
    console.log("Thank you for you patience");
}, 3000);

let sum = (a, b) => {
    return a+b;
} 
console.log(sum(21, 32));

// Shorcut for arrow functions(skipping return statement):-
let product = (a, b) => a*b;
console.log(product(32, 5));

// Shortcut for an Arrow Function(skipping the brackets)
let half = num => num/2; // halves a number
console.log(half(124));
// Note:- we cannot skip brackets if the function takes more than one argment
// let divide = n1, n2 => n1/n2; is wrong.
// let duvude = (n1, n2) => n1/n2 us correct.


// If function has no return value:-
g = () => console.log("Hello World");
g();

obj1 = {
    names : ['Tushar', 'John', 'James', 'Christian'],
    greeting : 'Good Morning',
    speak(){
        this.names.forEach(student => {
            console.log(this.greeting + " " + student);
        });
    }   
}
obj1.speak();

// Using function rather than arrow function for above code
obj2 = {
    names : ['Tushar', 'John', 'James', 'Christian'],
    greeting : 'Good Morning',
    speak(){
        this.names.forEach(function(student) {
            console.log(this.greeting + " " + student); // this.greeting is undefined
        });
    }   
}
obj2.speak();


// In a normal function this.object is checked inside the function but in case of arrow function the same is done outside it.
// this keyword inside an arrow function is called as 'lexical this'.