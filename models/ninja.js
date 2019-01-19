const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// "geometry": {
//   "type": "Point",
//   "coordinates": [125.6, 10.1]
// },

// create geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

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
  },
  geometry: GeoSchema
});

// Model
// 'ninja' will become the ninjas collection
const Ninja = mongoose.model("ninja", NinjaSchema);

// Export model
module.exports = Ninja;
