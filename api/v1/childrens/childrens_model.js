const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    address: {
      type: Schema.Types.ObjectId,
      ref: "addresss",
      required: [true, "The address is required"],
    },
    other_dates: {
      type: String,
      maxlength: [250, "Maximum characters is 250"],
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
  other_tutor: {
    type: {
      type: String,
      enum: [
        "mother",
        "father",
        "grandfather",
        "grandmother",
        "brother",
        "sister",
        "uncle",
        "aunt",
        "other",
      ],
    },
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
      default: false,
    },
  },
  feeding: {
    type: Schema.Types.ObjectId,
    ref: "feedings",
    //required: [true, "The feeding info is required"],
  },
  health: {
    type: Schema.Types.ObjectId,
    ref: "healths",
   //required: [true, "The health info is required"],
  },
  sleep: {
    type: Schema.Types.ObjectId,
    ref: "sleeps",
    //required: [true, "The sleep info is required"],
  },
  emotional_state: {
    type: Schema.Types.ObjectId,
    ref: "emotional_states",
    //required: [true, "The emotional state info is required"],
  },
  billing: {},
  active: {
    type: Boolean,
    default: true,
  },
});

/* CHILDRENschema.pre("save", function (next) {
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
}); */

module.exports = mongoose.model("children", CHILDRENschema);
