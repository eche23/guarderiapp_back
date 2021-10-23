const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date();
const year = date.getFullYear().toString();
const month = date.getMonth().toString();
const db = year + "/" + "10";

const REGISTERSchema = Schema({
  children: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  hour: {
    type: Number
  },
  register: [
    {
      day: {
        type: Number,
      },
      in: {
        type: Date,
      },
      out: {
        type: Date,
      },
      extras: {
        type: Number,
      },
      schelude: {
        type: String,
        maxlength: [500, "Maximum characters is 500"],
      },
    },
  ],
});

module.exports = mongoose.model(db, REGISTERSchema);
