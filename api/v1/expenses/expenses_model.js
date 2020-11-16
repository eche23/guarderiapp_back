const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date();
const year = date.getFullYear().toString();
const month = date.getMonth().toString();

const EXPENSEschema = Schema({
  [`${year}`]: {
    [`${month}`]: [
      {
        expense: {
          type: {
            type: String,
            enum: [
              "Feeding",
              "Salary",
              "Taxes",
              "School Supplies",
              "Rental",
              "Toys",
              "Cleaning",
              "Others",
            ],
            required: [true, "The type is required"],
          },
          business: {
            type: String,
            required: [true, "The business is required"],
          },
          invoice_numbre: {
            type: String,
            required: [true, "The invoice number is required"],
          },
          date: {
            type: String,
            required: [true, "The date is required"],
          },
          amount: {
            type: Number,
            required: [true, "The amount is required"],
          },
          file: {
            type: String,
            required: [true, "The file is required"],
          },
        },
      },
    ],
  },
});

module.exports = mongoose.model("expense", EXPENSEschema);
