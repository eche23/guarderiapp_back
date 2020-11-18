const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FEELDINGschema = Schema({
  feeding: {
    daily_meals: {
      type: Number,
    },
    hours_meals: {
      type: Number,
    },
    allergies: {
      type: Boolean,
      required: [true, "The allergies is required"],
    },
    type_allergies: {
      type: String,
      maxlength: [250, "Maximum characters is 250"],
    },
    observations: {
      type: String,
      maxlength: [250, "Maximum characters is 250"],
    },
  },
});

module.exports = mongoose.model("feeding", FEELDINGschema);