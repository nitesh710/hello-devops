var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello World");
})

app.listen(5004, function(){
    console.log("Server listening on port 5004");
})