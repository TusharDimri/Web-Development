/*
Syntax:
for(start;end;change){
    // Do Something
}
*/ 


/*
for (i =0; i<= 10; i++){
    console.log(i);
}
*/

// var  i = 1;

// while (i < 6) {
//     console.log(i);
//     i++;
// }

var output = [];
var count = 1;

function fizzbuzz(){
    // output.push(output[output.length - 1] + 1);
    for(count = 1; count <= 100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
        else{
            output.push(count);
        }
    }

    console.log(output);
}

fizzbuzz();

/*
while loop:-
while(something is true){
    do something
}
Checking for State

for loop:-
for(var i=0; i<= 10; i++){
    do something
}
Iterate
*/