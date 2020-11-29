const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF:-
app.use("/static", express.static('static')); // Serving Static Files using Exress

app.use(express.urlencoded()); // This is used as a middleware to get data from HTML forms(as they are urlencoded forms)

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Setting the Template Engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Our pug demo endpoint:-
app.get("/demo", (request, response)=>{
    response.status(200).render('demo', {title : "Hey", message: "Welcome to my world"});
});

// Our Endpoints (Without PUG):-

// app.get("/", (request, response)=>{
//     response.status(200).send("This is the home page of my first express app");
// });
// app.get("/about", (request, response)=>{
//     response.send("This is about page of my first express app");
// });
// app.post("/about", (request, response)=>{
//     response.send("This is about page with post request of my first express app");
// });
// app.get("/this", (request, response)=>{
//     response.status(404).send("Page not found");
// });


// Our Endpoints (With PUG):-

app.get("/", (request, response)=>{
    const con = `This is the content i added to the website using backend(Node.js - Express and Pug)`;
    const params = {
        'title' : "Using Plain HTML in PUG",
        'content' : con
    };
    response.status(200).render('index.pug', params);
});

// Fetching Data from forms:-
app.post("/", (request, response)=>{
    // console.log(request.body); 
    // request.body contains the data from html form as a Javascript Object
    let formData = request.body; 
    let name = request.body.name; 
    let age = request.body.age; 
    let address = request.body.address; 

    console.log(formData);
    outputData = `The name of the client is ${name}, age is ${age} and address is ${address}`;
    fs.writeFileSync('output.txt', outputData);


    const params = {'message' : 'Your form has beeen submitted successfully'};
    response.status(200).render('index.pug', params)
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
