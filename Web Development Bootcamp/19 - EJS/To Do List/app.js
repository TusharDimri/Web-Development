// EJS - Embedded Javascript Templating

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.set('view engine', 'ejs'); // EJS not the onle way that we can use to do templating.
const tasks = [];
const work_items = []
/*
Note:
While working with arrays, const keyword if used to declare an array, then the array cannot be changed but we can append items to that array even though it's declared using const.

In case of an object, a const object cannot be changed but we can change the calues associated with it.

So, we can say that Javascript constants are'nt protecting the things inside the constant but are protecting only the constant itself.
*/

app.get("/", (req, res)=>{

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
    
    let day = date.getDate();
    console.log(date.getDay());
    
    // res.sendFile(__dirname+"/index.html");
    res.render("index", {tasks: tasks, listTitle: day});
});

app.post("/", (req, res) => {
    // console.log(req.body);
    if (req.body.list === "Work") {
        work_items.push(req.body.task);
        console.log(work_items);
        res.redirect("/work");
    }
    else{
        tasks.push(req.body.task);
        console.log(tasks);
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {
    res.render("index", {listTitle: "Work", tasks:work_items});
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});