const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ADDRESSschme = Schema({
  address: {
    type: {
      type: String,
      enum: [
        "calle",
        "avenida",
        "camino",
        "carretera",
        "plaza",
        "urbanizacion",
      ],
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
      typè: String,
    },
    floor: {
      type: String,
    },
    letter: {
      type: String,
    },
  },
});

module.exports = mongoose.model("address", ADDRESSschme);
