const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CHILDRENschema = Schema({
  children: {
    name: {
      type: String,
      required: [true, "The name is required"],
    },
    lastName1: {
      type: String,
      required: [true, "The last name 1 is required"],
    },
    lastName2: {
      type: String,
    },
    dni: {
      type: String,
    },
    birthdate: {
      type: String,
      required: [true, "The birthdate is required"],
    },
    rate: {
      type: Schema.Types.ObjectId,
      ref: "rates",
      required: [true, "The rate is required"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "The gender is required"],
    },
  },
  father: {
    name: {
      type: String,
    },
    lastName1: {
      type: String,
    },
    lastName2: {
      type: String,
    },
    dni: {
      type: String,
    },
    telephone: {
      type: String,
    },
    email: {
      type: String,
    },
    contact_email: {
      type: Boolean,
      default: true,
    },
  },
  mother: {
    name: {
      type: String,
    },
    lastName1: {
      type: String,
    },
    lastName2: {
      type: String,
    },
    dni: {
      type: String,
    },
    telephone: {
      type: String,
    },
    email: {
      type: String,
    },
    contact_email: {
      type: Boolean,
      default: true,
    },
  },
  documents: {
    father_dni: {
      type: String,
    },
    mother_dni: {
      type: String,
    },
    health_card: {
      type: String,
    },
  },
  billing: {},
  active: {
    type: Boolean,
    default: true
  }
});

CHILDRENschema.pre("save", function (next) {
  try {
    let children = this;
    console.log(children.father.email);
    if (children.father.email == null) children.father.contact_email = false;
    if (children.mother.email == null) children.mother.contact_email = false;
    if (children.father.name == null && children.mother.name == null)
      next("The father/mother is required");
    else return next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("children", CHILDRENschema);
