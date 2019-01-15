const express = require('express');
// const bodyParser = require('body-parser');

const routes = require('./routes/api');

// Set up express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use imported routes/ initialize routes
app.use('/api', routes)


// Listen for requests

app.listen(process.env.port || 5000, () => {
    console.log('now listening for requests');
});



