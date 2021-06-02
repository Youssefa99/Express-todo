var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = [{item: 'get milk'}, {item: 'make bed'}, {item: 'go shopping'} ];

module.exports = function(app){

app.get('/todo', function(req, res){
  res.render('todo.ejs', {todos: data});

});

app.post('/todo', urlencodedParser, function(req, res){
  data.push(req.body);
  res.json(data);
});

app.delete('/todo/:item', function(req, res){
data = data.filter(function(todo){
  return todo.item.replace(/ /g, "-") !== req.params.item; // if item == the item in the url paramater remove from array
})
res.json(data);
});


};