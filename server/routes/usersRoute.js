const express = require("express");
const router = express.Router();
const { adminOnly, protect } = require("../middleware/authMiddleware");

const upload = require("../utility/multerConfig");
const {
  getLogin,
  postSigin,
  getUsers,
  getUser,
  deleteUser,
  getUsersCount,
  updateUser,
} = require("../controller/usersController");

router.use(protect);
router.post("/", getLogin);
router.post("/signup", postSigin);
router.get("/users", adminOnly, getUsers);
router.get("/user", getUser);
router.delete("/deleteUser/:id", deleteUser);
router.get("/getUsersCount", getUsersCount);
router.patch("/updateUser", upload.single("profilePicture"), updateUser);

module.exports = router;
