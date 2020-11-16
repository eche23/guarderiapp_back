const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SLEEPschema = Schema({
  emotional_state: {
    state: {
      type: String,
      enum: ["nervous", "quiet"],
      required: [true, "The emotional state is required"],
    },
    observations: {
      type: String,
      maxlength: [250, "Maximun characters is 250"],
    },
  },
});

module.exports = mongoose.model("sleep", SLEEPschema);
