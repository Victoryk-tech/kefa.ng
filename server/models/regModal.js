const mongoose = require("mongoose");

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
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      require: [true, "Please add a profile picture"],
      default: "https://randomuser.me/api/portraits/women/50.jpg",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const RegModal = mongoose.model("RegModal", registerSchema); //product model

module.exports = RegModal;
