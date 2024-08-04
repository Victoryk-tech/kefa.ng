const reg = require("../models/regModal");
const asyncHandler = require("express-async-handler");
const handleUpload = require("../utility/cloudinaryConfig");
const multer = require("multer");

// all users
const getUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await reg.find({}).select("-password").sort("-createdAt");
    if (!users?.length) {
      return res.status(400).json({ message: "No user found!" });
    }

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

//getUser
const getUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await reg.findById(req.user._id).select("-password");
    if (user) {
      res.status(200).json(user);
    }
  } catch (err) {
    next(err);
  }
});

//getUsersCount
const getUsersCount = asyncHandler(async (req, res, next) => {
  try {
    const users = await reg.find({}).count();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

//deleteUser
const deleteUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await reg.findByIdAndDelete(req.user._id);

    if (user) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json("User not found");
    }
  } catch (err) {
    next(err);
  }
});

//updateUser
const updateUser = asyncHandler(async (req, res, next) => {
  try {
    let { username, email, address, phone, profilePicture } = req.body;

    if (req.file) {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = `data:${req.file.mimetype};base64,${b64}`;

      const result = await handleUpload(dataURI);
      profilePicture = result.secure_url;
      //  console.log(profilePicture)
    }

    const user = await reg.findByIdAndUpdate(
      req.user._id,
      {
        username,
        email,
        address,
        phone,
        ...(profilePicture && { profilePicture }),
      },
      { new: true }
    );

    if (!user) {
      res.status(400).json({ message: `user not found` });
    }

    if (username) user.username = username;
    if (email) user.email = email;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    if (profilePicture) user.profilePicture = profilePicture;

    const updateProfile = await user.save();

    res.status(200).json(updateProfile);
  } catch (err) {
    next(err);
  }
});

// login

const getLogin = asyncHandler(async (req, res, next) => {
  const { email, password, username } = req.body;

  try {
    const check = await reg.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (err) {
    next(err);
  }
});
// SIGNIN

const postSigin = asyncHandler(async (req, res, next) => {
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
  } catch (err) {
    next(err);
  }
});
module.exports = {
  getLogin,
  postSigin,
  getUsers,
  getUser,
  deleteUser,
  getUsersCount,
  updateUser,
};
