const express = require('express');
const path = require('path');
const fs = require('fs');
const { response } = require('express');

const app = express();
const port = 80;

app.use("/static", express.static('static')); 

app.use(express.urlencoded());

app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, 'views')); 


app.get("/", (request, response)=>{
    response.status(200).render('index.pug');
});

app.post("/", (request, response)=>{
    let formData = request.body;
    console.log(formData);
    name = request.body.name;
    age = request.body.age;
    gmail = request.body.gmail;
    address = request.body.address;

    strData = `Client's name is ${name}, age is ${age}, gmail is ${gmail} and address is ${address}`;
    fs.writeFileSync('Data from Website.txt', strData);

    const params = {'message' : 'Your form has beeen submitted successfully'};
    response.status(200).render('index.pug', params);
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});