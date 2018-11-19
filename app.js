var express = require("express");
var bodyParser = require("body-parser");
var app = express();


var data = [
    {entry: "test data"}

]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing", {data: data})
});

app.post("/new", function(req, res){
    console.log("POST");
    var newEntry = req.body;
    var newData = {entry: newEntry};
    data.push(newData);
    res.redirect("/");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("it's up")
});