const reg = require("../models/regModal");
const asyncHandler = require("express-async-handler");

// login

const getLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

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
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
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
module.exports = { getLogin, postSigin };
