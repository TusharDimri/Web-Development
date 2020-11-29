console.log('We are at Tutorial 55');

// for loop:-
let i;
for (i=1; i<=7; i++){
    console.log(i);
}
// for(initialization; condition; updation){ Logic }

console.log("\n");

// Traversing an Array:-
let instruments = ["Guitar", "Violin", "Ukelele", "Piano", "Harmonica", "Mandolin"];

// Method 1:-
for (let i = 0; i < instruments.length; i++) {
    const element = instruments[i];
    console.log(element);
}

console.log("\n");

// Method 2:-
instruments.forEach(function (element) {
    console.log(element);
})

console.log("\n");

// Method 3:-
for (element of instruments){
    console.log(element);
}

console.log("\n");


// Traversing an Object:-
let Employee = {
    name: "Tushar Dimri",
    age : 18,
}
for (key in Employee){
    console.log(`The ${key} of employee is ${Employee[key]}`)
}

console.log("\n");


// while loop in Javascript:-
let j = 1;
while(j <= 5){
    console.log(j);
    j++;
}

console.log("\n");

// do while loop in Javascript:-
let x = 0;
do{
    console.log(x);
    x++;
}while(x <=5);