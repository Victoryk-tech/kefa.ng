const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");

const registerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
      minLength: [2, "minimum 2letters"],
      maxLength: 30,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please add a password!"],
      validate: [validator.isStrongPassword, "Please use a strong password!"],
      trim: true,
    },
    profilePicture: {
      type: String,
      require: [true, "Please add a profile picture"],
      default: "https://randomuser.me/api/portraits/women/50.jpg",
      trim: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
      required: [true, "Pls choose a role!"],
      lowercase: true,
    },
    address: {
      type: String,
      default: "Nigeria",
      trim: true,
    },
    phone: {
      type: String,
      default: "+234",
    },
  },
  {
    timestamps: true,
  }
);
//hash the password before saving to database!
registerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next;
  }

  //hash password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const RegModal = mongoose.model("RegModal", registerSchema); //user model

module.exports = RegModal;
