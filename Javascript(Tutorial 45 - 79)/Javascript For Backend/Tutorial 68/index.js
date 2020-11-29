console.log('This is index.js');

const myModule = require("./mod");
/*
myModule will contain the value that mod.js exported

myModule =  {
    avg : average,
    name : "Tushar"
};

where average is a function we defined in the file mod.js.

*/

console.log(myModule);

avg = myModule.avg([1, 2, 3, 4, 5]);
console.log(avg);

console.log(myModule.name);
console.log(myModule.instrments);
