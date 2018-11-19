var express = require("express");
var app = express();


var data = []

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing", {data: data})
});

app.post("/", function(req, res))



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("it's up")
});