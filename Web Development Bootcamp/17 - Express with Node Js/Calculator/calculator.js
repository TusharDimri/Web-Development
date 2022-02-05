const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", (req, res)=>{
    // res.send("<h1>Hello World</h1>")
    res.sendFile(__dirname+"/index.html");
    // __dirname is the path of the directory which we are currently in.
});

app.get("/bmiCalculator", (req, res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});


app.post("/", (req, res)=>{
    // console.log(req.body);
    n1 = parseFloat(req.body.num1);
    n2 = parseFloat(req.body.num2);
    let result = n1+n2;
    res.send(`Result:\n${result}`);
});

app.post("/bmiCalculator", (req, res)=>{
    // console.log(req.body);
    height = parseFloat(req.body.height);
    weight = parseFloat(req.body.weight);
    let bmi = weight/(height * height);
    // console.log(bmi);
    res.send(`You BMI:\n${Math.round(bmi)}`);
});

app.listen(port, ()=>{
     console.log(`Server started on port ${port}`);
})

