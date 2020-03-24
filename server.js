const express = require('express');
const app = express()
const mongoose = require('mongoose')
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//* Connects ANGULAR
app.use(express.static(__dirname + '/public/dist/public'));
//* Connects ANGULAR

mongoose.connect('mongodb://localhost/rate_my_cakes', {useNewUrlParse:true})
require('./server/config/routes.js')(app)


app.listen(8000, () => console.log("listening on port 8000"))