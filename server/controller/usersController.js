const reg = require("../models/regModal");
const asyncHandler = require("express-async-handler");

// all users
const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await reg.find({}).select("-password").sort("-createdAt");
    if (!users?.length) {
      return res.status(400).json({ message: "No user found!" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//getUser
const getUser = async (req, res, next) => {
  try {
    const user = await reg.findById(req.user._id).select("-password");
    if (user) {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500);
    throw new Error(error.message);
  }
};

//getUsersCount
const getUsersCount = async (req, res, next) => {
  try {
    const users = await reg.find({}).count();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

//deleteUser
const deleteUser = async (req, res, next) => {
  try {
    const user = await reg.findByIdAndDelete(req.user._id);

    if (user) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json("User not found");
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};
// login

const getLogin = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const check = await reg.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});
// SIGNIN

const postSigin = asyncHandler(async (req, res) => {
  const { email, password, username, profilePicture } = req.body;

  const data = {
    email: email,
    password: password,
    username: username,
    profilePicture: profilePicture,
  };

  try {
    const check = await reg.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await reg.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});
module.exports = {
  getLogin,
  postSigin,
  getUsers,
  getUser,
  deleteUser,
  getUsersCount,
};
