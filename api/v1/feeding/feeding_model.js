const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FEELDINGschema = Schema({
    daily_meals: {
      type: Number,
      required: [true, "The daily meals is required"],
    },
    hours_meals: {
      type: Number,
      required: [true, "The hours meals is required"],
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
});

module.exports = mongoose.model("feeding", FEELDINGschema);