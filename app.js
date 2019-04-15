var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

app.use(cookieParser());

//set Engine View
app.set('views', path.join(__dirname, './views'));
app.set("view engine", "pug");

app.get('/cookieDemo', function(req,res)  {
    res.cookie('name' , 'express').send('cookie is Set');
});

app.get('showCookie', function(req,res)  {
    res.cookie("Hello" + req.cookie["username"]);
});

 app.get('/', function(req,res)  {
    res.render('homepage',{
        name: req.query[' username']
    });
 });   


app.get('/dynamic_view', function(req,res)  {
        res.render('test' , {
        user: req.query["username"]
    });
});

var server = app.listen(4000, function()  {
    console.log('Node Server is Listening..');
});




