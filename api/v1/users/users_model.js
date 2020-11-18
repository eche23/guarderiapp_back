const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const vars = require("./defaults");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  password: {
    type: String,
    minlength: 7,
    match: [vars.regexPassword],
    select: false,
    required: [true, "the field password is required"], //8 characters min, capital, num, schar
  },
  email: {
    type: String,
    lowercase: true,
    match: [vars.regexEmail],
    unique: true,
    required: [true, "the field email is required"], //unique
  },
  contact_email: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "EMPLOYEE"],
    required: true,
    default: "USER",
  },
  information: {
    type: {
      type: String,
      required: [true, "the type is required"],
      enum: [
        "Mother",
        "Father",
        "Brother",
        "Sister",
        "Grandfather",
        "Grandmother",
        "Uncle",
        "Aunt",
        "Other",
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
    documents: [
      {
        type: String,
      },
    ],
  },
});

function generateHashPassword(plainPassword) {
  return bcrypt.hashSync(plainPassword, bcrypt.genSaltSync(10));
}

UserSchema.pre("save", function (next) {
  try {
    let user = this;
    if (!user.isModified("password")) return next();
    user.password = generateHashPassword(user.password);
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = function (
  candidatePassword,
  hashPassword,
  cd
) {
  bcrypt.compare(candidatePassword, hashPassword, function (err, isMatch) {
    if (err) {
      return cd(err);
    }
    cd(null, isMatch);
  });
};

module.exports = mongoose.model("user", UserSchema);
