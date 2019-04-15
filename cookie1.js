var express = require('express');
var cookieParser = require('cookie-parser');
var app  = express();

app.use(cookieParser());

app.get('/', function(req,res)  {
  console.log('cookies:', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
});

var server = app.listen(4000,function()  {
    console.log('Node Server is Listening..');
});
