const { urlencoded } = require('express');
const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser : true});

const app = express();
const port = 80;

app.use("/static", express.static('static')); 

app.use(express.urlencoded()); 

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); 


app.get("/", (request, response)=>{
    response.status(200).render('home.pug');
});

// Defining Mongoose Schema:-
var contactSchema = new mongoose.Schema({
    name : String,
    phone : Number,
    email : String,
    address : String,
    desc : String,
});
// Compliling Schema to a Model:-
var Contact = mongoose.model('Contact', contactSchema);

app.get("/contact", (request, response)=>{
    response.status(200).render('contact.pug');
});

app.post("/contact", (request, response)=> {
    var myData = new Contact(request.body);
    myData.save().then(()=>{
        response.status(400).render("contact.pug");
    }).catch(()=>{
        response.send("Sorry! We coudnn't save yor contact to the database");
    });
    // response.status(200).render('contact.pug');
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});