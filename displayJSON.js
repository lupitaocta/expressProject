var express = require("express");
var logfmt = require("logfmt");
var app = express();
var fs = require("fs"); 
var json = JSON.parse(fs.readFileSync('./product.json', 'utf8'));

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/display', function(req, res) {
    res.send(json);
});

var port = Number(process.env.PORT || 4000);
app.listen(port, function() {
    console.log("Listening on " + port);
});