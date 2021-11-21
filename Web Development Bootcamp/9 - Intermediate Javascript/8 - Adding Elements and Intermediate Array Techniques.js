var output = [];
var count = 1;

function fizzbuzz(){
    // output.push(output[output.length - 1] + 1);
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


    count += 1;

    console.log(output);
}

// output.push(1);
// output.push(2);
// output.push(3);
// // output.pop(3);
// console.log(output);

fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
