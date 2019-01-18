const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja"); // Require it to use use model and schema

// get a list of ninjas from the db
router.get("/ninjas", (req, res, next) => {
  res.send({ type: "GET" });
});

// add a new ninjas to db
// add next parameter for going to next middleware if error
router.post("/ninjas", (req, res, next) => {
  // Call Ninja and save to DB from schema and it returns a promise
  Ninja.create(req.body)
    .then(ninja => {
      // send back response with ninja from db to client to show successful
      res.send(ninja);
    })
    .catch(next);
});

// update ninja in db
router.put("/ninjas/:id", (req, res, next) => {
  // Find ninja by id, update it using req.body
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true}).then(ninja => {
        res.send(ninja);
 
    })
    .catch(next);
});

// delete a ninja
router.delete("/ninjas/:id", (req, res, next) => {
  // req.params.id takes the id after /ninjas/
  //   console.log(req.params.id);
  // Ninja refers to the ninja model we required; findbyid is a mongoose method
  Ninja.findByIdAndRemove({ _id: req.params.id })
    .then(ninja => {
      // Removes ninja using id from db and returns ninja promise
      res.send(ninja);
    })
    .catch(next);
});

module.exports = router;
