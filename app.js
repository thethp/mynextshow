var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000);
console.log('Server running on port 8000');
