const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ADDRESSschme = Schema({
    type: {
      type: String,
      enum: ["street", "avenue", "way", "road", "square", "urbanization"],
      required: [true, "The type is required"],
    },
    street: {
      type: String,
      required: [true, "The street is required"],
    },
    number: {
      type: String,
      required: [true, "The number is required"],
    },
    block: {
      type: String,
    },
    floor: {
      type: String,
    },
    letter: {
      type: String,
    },
});

module.exports = mongoose.model("address", ADDRESSschme);
