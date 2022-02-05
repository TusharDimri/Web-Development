// import express from "express";
const express = require("express");

const app = express();

const port = 3000  // A port is basically a channel that we've tuned our server to. For example: Channel 104.9FM in a radio.

//  The function below handles the get request made by the browser to the app at the given location ("/" means the root) and sends response with a callback funxtion:
app.get("/", (request, response)=>{
    // console.log(request); 
    response.send("<h1>Hello World</h1>");
    // console.log("\n\n\n", response);
    // request and response are objects.
});
// The forward slash respresents localhost 3000 (the port which we are listening to). Also, on making a get request to the provided endpoint("/") we will get the provided response. 

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Me</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>My name is Tushar Dimri.</h1>");
});


// Making our browser listen on a particular port(3000 in this case):
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});