const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HEALTHschema = Schema({
  problems_childbirth: {
    type: Boolean,
    required: [true, "The problems in childbirth is required"],
  },
  type_problems_childbirth: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  handicap: {
    type: Boolean,
    required: [true, "The handicap is required"],
  },
  type_handicap: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  serious_diseases: {
    type: Boolean,
    required: [true, "The serious diseases is required"],
  },
  type_diseases: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  operations: {
    type: Boolean,
    required: [true, "The operations is required"],
  },
  type_operations: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  medication: {
    type: Boolean,
    required: [true, "The medication is required"],
  },
  type_medication: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  drug_allergies: {
    type: Boolean,
    requierd: [true, "The drug allergies is required"],
  },
  type_drug_allergies: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
  observations: {
    type: String,
    maxlength: [250, "Maximun characters is 250"],
  },
});

module.exports = mongoose.model("health", HEALTHschema);
