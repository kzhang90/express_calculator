var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send("HELLO WORLD!");
});

app.get('/hello/:name', function(req, res){
    res.render('index', {name:req.params.name})
});

app.get('/:operation/:x/:y', function(req, res){
    var operators = {
        add: "+",
        sub: "-",
        mult: "*",
        div: "/"
    }
    var operator = operators[req.params.operation]
    var result = eval(req.params.x + operator + req.params.y);
    res.render('index', {
        result: result,
        op1: req.params.x,
        op2: req.params.y,
        operator: operator
    });
});

app.listen(3000, function(){
    console.log("STARTING SERVER ON 3000");
})