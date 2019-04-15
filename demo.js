var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var session = require('express-session');
// var multer = require('multer');
// var upload = multer();



app.set('view engine' , 'jade');
app.set('views', path.join(__dirname, './views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(upload.array());
app.use(cookieParser());
app.use(session({secret:"shh! its a secret"}));

var Users = [];


app.get('/signup', function(req,res)  {
    res.sendFile(__dirname + "/" + "signup.jade");
});

app.post('/signup', function(req,res)  {
    if(!req.body.id || req.body.password){
        res.status("400");
        res.send("Invalid Status!!");
    }  else {
        Users.filter(function(user)  {
            if(user.id == req.body.id) {
                res.render('signup', {
                    message:"User already exist !! Login into another user id"});
            }
        });
        var newUser = {id: req.body.id, password:req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect("/proctected_page");
    }
});


    

var server = app.listen(4000, function()   {
    console.log("Node server is running....");
});