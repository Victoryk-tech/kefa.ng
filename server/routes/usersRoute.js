const express = require("express");
const router = express.Router();
const RegModal = require("../models/regModal");
const {
  getLogin,
  postSigin,
  getUsers,
  getUser,
  deleteUser,
  getUsersCount,
} = require("../controller/usersController");

router.post("/", getLogin);
router.post("/signup", postSigin);
router.get("/users", getUsers);
router.get("/user", getUser);
router.delete("/deleteUser/:id", deleteUser);
router.get("/getUsersCount", getUsersCount);

module.exports = router;
