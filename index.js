const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/emp')
const Emp = require('./models/emp')

var app = express()
app.use('/', router)
app.use(express.static(__dirname + '/public'));

//MongoDB connection
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
mongoose.connection.once('open', function() {
    console.log('Database connected Successfully');
}).on('error', function(err) {
    console.log('Error', err);
})

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})


//Server
app.listen(8000, function() {
    console.log('Server is Up')
})