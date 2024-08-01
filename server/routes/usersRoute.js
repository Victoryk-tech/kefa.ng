const express = require("express");
const router = express.Router();
const RegModal = require("../models/regModal");
const { getLogin, postSigin } = require("../controller/usersController");

router.post("/", getLogin);
router.post("/signup", postSigin);

module.exports = router;
