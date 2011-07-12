var express = require('express');
var app = express.createServer();

app.configure(function(){
    app.use(express.static(__dirname + '/bin'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/hello', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT || 8001);