const router = require("express").Router();
const {
  signup,
  signupForm,
  updateImage,
  userProfile,
} = require("../controllers/users.controller");

const { ensureAuthenticated } = require("../config/guards.config");

router.get("/:username", userProfile);
router.get("/signup/form", signupForm);
router.post("/signup", signup);
router.post("/update/image", ensureAuthenticated, updateImage);

module.exports = router;
