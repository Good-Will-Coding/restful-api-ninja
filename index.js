const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


//require routes from routes folder
const routes = require("./routes/api");

// Set up express app
const app = express();

// connect to mongodb - if ninjago doesn't exist, it will create it for us.
mongoose.connect("mongodb://localhost/ninjago",  { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// parse json
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// use imported routes/ initialize routes
app.use("/api", routes);

// error handling (NEXT)
app.use((err, req, res, next) => {
    console.log(err); 
    res.status(422).send({error: err._message})
    // error key can be named anything
    //.status(422) adds the request error
});

// Listen for requests

app.listen(process.env.port || 5000, () => {
  console.log("now listening for requests");
});
