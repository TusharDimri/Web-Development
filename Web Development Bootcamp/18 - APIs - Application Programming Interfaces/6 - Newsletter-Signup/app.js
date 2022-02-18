const express = require('express');
const body_parser = require('body-parser');
const https = require("https");
// const mailchimp = require("@mailchimp/mailchimp_marketing");
const port = 3000

const app = express();

app.use(
    body_parser.urlencoded({extended: true}), 
    express.static("public")
);
// app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", (req, res)=>{
    const f_name = req.body.fName;
    const l_name = req.body.lName;
    const userEmail = req.body.email;
    // console.log(`Name: ${f_name} ${l_name} and email: ${userEmail}`);

    let data = {
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: f_name,
                    LNAME: l_name
                } 
            }
        ]        
    }
    jsonData = JSON.stringify(data);
 
    const url = "https://us14.api.mailchimp.com/3.0/lists/c623f47ca6";
    options = {
        method: "POST",
        auth: "tushar:e1bd0f54f0a9921d6679419e366b2b24-us14"
    }

    const request = https.request(url, options, (response)=>{
        if (response.statusCode === 200) {
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }

        response.on("data", (data)=>{
            console.log(JSON.parse(data));
        });

    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", (req, res)=>{
    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log(`Server is running in port ${port}`);
});

//  e1bd0f54f0a9921d6679419e366b2b24-us14
//  c623f47ca6