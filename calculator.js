const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("Confirm working");
});

app.listen(3000, function(){
    console.log("Server running");
});
