const mongoose = require('mongoose');

// const database_name = 'fruitsDB';
const database_name = 'fruitsDB';
const url = 'mongodb://localhost:27017';

mongoose.connect(
    `${url}/${database_name}`,
    {useNewUrlParser:true},
);


// Creating schema for the database:
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});
// Creating Collection(Singluar name will be converted to plural by mongoose): 
const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit",
// });

// fruit.save();
// console.log("Saved");


const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the name of the person."],
    },
    age: {
        type: Number,
        min: 0,
        max: 130,
    },
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleSchema);

// const person = new Person({
//     name: "Kurt",
//     age: 27,
// });

// person.save()

// console.log("Saved to the database");

// const person1 = new Person({
//     name: "abc",
//     age: 32,
// });
// const person2 = new Person({
//     name: "xyz",
//     age: 22,
// });
// const person3 = new Person({
//     name: "xxx",
//     age: 11,
// });



// Person.insertMany([person1, person2, person3], (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully Saved");
//     }
// });


// On uncommenting the lines below, we will get a validation error:
// const person4 = new Person({
//     name:"Invalid",
//     age: 140,
// });
// person4.save();

// On uncommenting the lines below, we will get a validation error:
// const persve(on5 = new Person({
//     age: 10,
// });
// person5.sa);

// Updating the data:
// Person.updateOne(
//     {name: "Nameless"},
//     {name:"Test", age:20},
//     (err)=>{
//         if (err) {
//             console.log(err);
//         }
//         else{
//             console.log("Successfully Updated the document.");
//         }
//     }
// );


// Deleting data:
Person.deleteOne(
    {name: "xxx"},
    (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Deleted successfully");
        }
    }
    );
    
// const litchi = new Fruit({
//     name: "Litchi",
//     rating: 9,
//     review:"Amazing fruit"
// });

// litchi.save();

// Person.updateOne(
//     {name:'xyz'},
//     {favouriteFruit: litchi},
//     (err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Updated Successfully")
//         }
//     }
// );

// Getting data in the database:
Person.find((err, people)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(people);
        // mongoose.connection.close();
        people.forEach((person)=>{
        console.log(person["name"]);
        });
    }
});

Fruit.find((err, fruits)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(fruits);
        mongoose.connection.close();
        fruits.forEach((fruit)=>{
        console.log(fruit["name"]);
        });
    }
});




