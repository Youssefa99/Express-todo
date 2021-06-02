var express = require('express'); //export express to use
var todoController = require('./todoController'); // export the controller

var app = express(); // start the express app

app.set('view engine', 'ejs'); // set the view engine for the ejs template 

app.use(express.static('./public')); // to serve static files such as css

todoController(app); // fire the controller

app.listen(3000); // listen on port 3000

console.log('listening on port 3000')