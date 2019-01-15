const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja'); // Require it to use use model and schema

// get a list of ninjas from the db
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET'})
});

// add a new ninjas to db
router.post('/ninjas', (req, res) => {
    // Call Ninja and save to DB from schema and it returns a promise
    Ninja.create(req.body).then(ninja => {
        // send back response with ninja from db to client to show successful
        res.send(ninja);
    });
});

// update ninja in db
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'})
});

// delete a ninja
router.delete('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'})
});


module.exports = router;