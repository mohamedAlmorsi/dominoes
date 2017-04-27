var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var index = require('./routes');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use(index);

mongoose.connect("mongodb://localhost:27017/dominos", function(err, db) {
    if (!err) {
        console.log("We're Connected");
    } else {
        console.log("There is an Error");
    }
});



app.listen(8080, function() {
    console.log('Server started in 8080');
});