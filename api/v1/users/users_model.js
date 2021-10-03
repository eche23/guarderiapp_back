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
    required: [true, "the role is required"],
    default: "USER",
  },
  information: {
    type: {
      type: String,
      required: [true, "the type is required"],
      enum: [
        "mother",
        "father",
        "brother",
        "sister",
        "grandfather",
        "grandmother",
        "uncle",
        "aunt",
        "other",
      ],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    lastName1: {
      type: String,
      required: [true, "Last Name 1 is required"],
    },
    lastName2: {
      type: String,
    },
    dni: {
      type: String,
      unique: true,
      required: [true, "DNI is required"],
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "addresss",
      required: [true, "The address is required"],
    },
    telephone: {
      type: String,
      required: [true, "Telephone is required"],
    },
    documents: [
      {
        dni: {
          type: String
        }
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
