console.log('We are at Tutorial 62');

// JSON stands for Java Script Object Notation and is used to transport and store data

// A JSON Object
let jsonObj = {
    name : "Tushar",
    university : "Graphic Era Hill University",
    programmingLanguages : ["Python", "Javascript", "C"],
    languades : ["Hindi", "English", "Japanese"],
    instruments : ["Guitar", "Violin", "Ukelele"],
    male : true
}

console.log(jsonObj);

//                               Transporting a JSON Object through a network.

// We first convert the JSON Object to a string:-
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);
// myJsonStr is a string made from JSON Object


// Performing string manipulations on JSON String
myJsonStr = myJsonStr.replace('Tushar', "Tushar Dimri")
console.log(myJsonStr);


// We will then parse the JSON string  back to a JSON Object:-
newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);
// JSON.pearsetakes a valid json string and parse it into a JSON ONject.