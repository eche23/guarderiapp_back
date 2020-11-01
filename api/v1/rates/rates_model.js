const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const RATESschema = Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  hours: {
    type: Number,
    required: [true, "The hours is required"],
  },
  price: {
    type: Number,
    required: [true, "The price is required"],
  },
});

module.exports = mongoose.model("rate", RATESschema);
