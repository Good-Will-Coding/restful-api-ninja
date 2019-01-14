const express = require('express');
const router = express.Router();

// get a list of ninjas from the db
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET'})
});

// add a new ninjas to db
router.post('/ninjas', (req, res) => {
    res.send({type: 'POST'})
});

// update ninja in db
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'})
});

// delete a ninja
router.delete('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'})
});

