const express = require('express');
const bodyParter = require('body-parser');
const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.text)
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.send("Confirm working");
    // res.sendFile("index.html");
    res.sendFile(__dirname + "/index.html");        //gives the path as we may not know the full path on server
});

app.post("/",function(req, res){
    // req.body
    // req.body.num1
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;

    res.send("The result of adding these two numbers is: " + result);
});

app.get("/bmi-calc", function(req, res){
    // res.send("Confirm working");
    // res.sendFile("index.html");
    res.sendFile(__dirname + "/bmi-calc.html");        //gives the path as we may not know the full path on server
});

app.post("/bmi-calc", function(req, res){
    // res.send("Confirm working");
    // res.sendFile("index.html");
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight/ (height*height);

    res.send("Your BMI is " + bmi);
});


app.listen(3000, function(){
    console.log("Server running");
});
