const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create ninja Schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }

  // add in geolocation
});

// Model
// 'ninja' will become the ninjas collection
const Ninja = mongoose.model("ninja", NinjaSchema);

// Export model
module.exports = Ninja;
