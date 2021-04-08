var express = require('express');
require('dotenv').config();
var PORT = process.env.PORT || 5000

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb:27017/mydb', { useNewUrlParser : true });

var app = express();
var productRoute = require('./routes/productRoute');

app.use('/product', productRoute);

app.listen(PORT, () => {
    console.log("Express Server Running");
});