const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tushar', {useNewUrlParser : true, useUnifiedTopology : true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're Connected");
});

// Schema of our Data:-
var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
}
  
// Compiling our schema to a model:-
var Kitten = mongoose.model('Kitten', kittySchema);
// A model is a class which we use to construct documents 

// Creating an object with above schema:-
var myKitty = new Kitten({name : "Clean"});
console.log(myKitty.name);
myKitty.speak();

// Saving the object:-
myKitty.save((error, myKitty)=>{
    if (error) return console.log(error);
    myKitty.save();
});
/*
The Model is saved as:-
The plural of models in lower case is the name of the collections in which the objects/documents are saved
In this case , they are stored in kittens(Plural of Kitten in lower case)
*/

// Creating & Saving ohter object:
var herKitty = new Kitten({name : "Mr. Whiskers"});
herKitty.save((error, herKitty)=>{
    if (error) return console.log(error);
    herKitty.save();
});