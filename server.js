var express = require('express');

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(port, function(err){
  console.log('connected at ', port);
});