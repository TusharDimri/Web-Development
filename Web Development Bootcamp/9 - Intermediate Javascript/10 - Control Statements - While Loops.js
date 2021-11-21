// var  i = 1;

// while (i < 6) {
//     console.log(i);
//     i++;
// }

var output = [];
var count = 1;

function fizzbuzz(){
    // output.push(output[output.length - 1] + 1);
    while (count <= 100) {
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
        count ++;
    }

    console.log(output);
}

fizzbuzz();
