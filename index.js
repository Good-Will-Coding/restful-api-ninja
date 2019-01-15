const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/api');

// Set up express app
const app = express();

// connect to mongodb - if ninjago doesn't exist, it will create it for us.
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use imported routes/ initialize routes
app.use('/api', routes)


// Listen for requests

app.listen(process.env.port || 5000, () => {
    console.log('now listening for requests');
});



