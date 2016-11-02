var express = require("express");
var fs      = require("fs");
var path    = require("path");

var app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/test1", function(req, res) {
    res.send(req.query.name);
});

app.get("/json", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({name: req.query.name, age: 100}));
});


app.listen(3000, function() {
    console.log("Listener started on port 3000");
});