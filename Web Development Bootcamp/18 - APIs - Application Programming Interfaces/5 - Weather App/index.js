const express = require("express");
const https = require("https"); // This is a native Node JS Module.
const bodyParser = require("body-parser");
const port = 3000;

const app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res)=>{
    const city = req.body.city;
    const api_key = "86cdefa3662381c3e5a5d69c170b3d7e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

    https.get(url , (response)=>{
        response.on('data', (d) => {
            // process.stdout.write(d);
            const weather_data = JSON.parse(d); // Parsing a JSON Object to JS Object
            // JSON.stringify(obj) Parsing a JS Object to JSON Object
            // console.log(weather_data);
            const temp = weather_data.main.temp;
            const desc = weather_data.weather[0].description;
            const icon = weather_data.weather[0].icon;
            const image_url = `http://openweathermap.org/img/wn/${icon}@2x.png`
            // console.log(temp);
            // console.log(desc);
            res.write(`<h1>The temperature in ${city} is: ${temp} degree Celcius</h1>`);
            res.write(`<h1>The weather is currently ${desc}</h1>`);
            res.write(`<img src="${image_url}">`);
        });
        console.log(response.statusCode);
    });    
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

