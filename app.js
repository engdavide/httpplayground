var express = require("express");
var bodyParser = require("body-parser");
var app = express();


var data = [
    {entry: "test data"}

]

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing", {data: data})
});

app.get("/new", function(req,res){
    res.render("new");
});

app.post("/new", function(req, res){
    console.log("POST");
    console.log(req);
    console.log(req.body);
    var newEntry = req.body.entry;
    var newData = {entry: newEntry};
    data.push(newData);
    res.redirect("/");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("it's up")
});