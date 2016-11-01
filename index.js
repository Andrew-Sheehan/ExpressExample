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

app.listen(3000, function() {
    console.log("Listener started on port 3000");
});