var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var requestCount = 0;
app.listen(port, onStarted);

function onStarted() {
    console.log('Server started. Listening to port: ' + port);
}

app.get('/', handleHelloWorld);

function handleHelloWorld(req, res)
{
    res.send('Hello World!');
}