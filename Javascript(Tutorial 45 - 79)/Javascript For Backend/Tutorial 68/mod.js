console.log('This is module');

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element; 
        average = sum / arr.length;
    });
    return average;
}

module.exports = {
    avg : average,
    name : "Tushar"
};
// We export the function and a name from this file in an object.So if we access this file using require we will get the given object

// Note that module.exports is an object;
module.exports.instrments = ["Guitar", "Violin"];