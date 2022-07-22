// EJS - Embedded Javascript Templating

const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.set('view engine', 'ejs'); // EJS not the onle way that we can use to do templating.
var tasks = [];

app.get("/", (req, res)=>{
    let today = new Date();

    // let currentDay = today.getDay();
    // if (currentDay === 6 || currentDay === 7){
    //     // res.sendFile(__dirname+"/index.html");
    //     day = "weekend";
    // }
    // else{
    //     day = "weekday";
    // }
    // dayOfWeek = "";
    // switch (currentDay) {
    //     case 0:
    //         dayOfWeek = "Sunday";
    //         break;
    //     case 1:
    //         dayOfWeek = "Monday";
    //         break;
    //     case 2:
    //         dayOfWeek = "Tuesday";
    //         break;
    //     case 3:
    //         dayOfWeek = "Wednesday";
    //         break;
    //     case 4:
    //         dayOfWeek = "Thursday";
    //         break;
    //     case 5:
    //         dayOfWeek = "Friday";
    //         break;
    //     case 6:
    //         dayOfWeek = "Saturday";
    //         break;
    
    //     default:
    //         break;
    // }
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);

    
    // res.sendFile(__dirname+"/index.html");
    res.render("index", { day: day, tasks: tasks});
});

app.post("/", (req, res) => {
    tasks.push(req.body.task);
    console.log(tasks);
    res.redirect("/");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});