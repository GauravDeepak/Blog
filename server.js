var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var port = 3001;

var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost:27017/demo',(err,db) => {
    useMongoClient: true
    /* other options */
});
var post = require('./admin/lPost');

var app = express();

//adding middleware
app.use(cors());

// adding bodyparse
app.use(bodyparser.json());


mongoose.connection.on('connected', () => {
    console.log("connection stablished");
})

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error to connect database');
    }
})

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello word");
})

app.use('/api', post);
app.listen(port, () => {
    console.log('server is running on port no ' + port);
})