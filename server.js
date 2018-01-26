// 1. Load modules into variables
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');


// Configure express
app.use(bodyParser.json());
// This line is new -Nick
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use(session({secret: 'SuperSecret'}));

// mongoose connection
mongoose.connect('mongodb://localhost/january_2018_loginreg');
require('./server/config/mongoose.js');

// load routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// server listen
app.listen(8000, function(){
	console.log('on port 8000');
})