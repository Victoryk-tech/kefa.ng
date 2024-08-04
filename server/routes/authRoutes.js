const express = require("express");
const {
  Login,
  Logout,
  Register,
  getLoginStatus,
} = require("../controller/authController.js");

const upload = require("../utility/multerConfig");

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register); //rateLimitMiddleware,
router.get("/getLoginStatus", getLoginStatus);
router.get("/logout", Logout); //verifyJWT,

module.exports = router;
