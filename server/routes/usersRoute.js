const express = require("express");
const router = express.Router();
const RegModal = require("../models/regModal");
const {
  getLogin,
  postSigin,
  getUsers,
} = require("../controller/usersController");

router.post("/", getLogin);
router.post("/signup", postSigin);
router.post("/users", getUsers);

module.exports = router;
