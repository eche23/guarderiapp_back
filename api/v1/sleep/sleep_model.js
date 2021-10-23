const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SLEEPschema = Schema({
  sleep_alone: {
    type: Boolean,
    required: [true, "The sleep alone is required"],
  },
  sleep_who: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  sleeping_object: {
    type: Boolean,
    required: [true, "The sleeping object is required"],
  },
  type_sleeping_object: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  night_dream: {
    type: String,
    enum: ["very_good", "good", "normal", "bad", "very_bad"],
    required: [true, "The night dream is required"],
  },
  sleeping_posture: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
    required: [true, "The sleeping posture is required"],
  },
  observations: {
    type: String,
    maxlength: [250, "Maximum characters is 250"],
  },
});

module.exports = mongoose.model("sleep", SLEEPschema);
