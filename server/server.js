var express = require('express');
require('dotenv').config();
var PORT = process.env.PORT || 5000

var app = express();

app.get('/', (res, req) => res.setEncoding("Express Server"))

app.listen(PORT, () => {
    console.log("Express Server Running");
});