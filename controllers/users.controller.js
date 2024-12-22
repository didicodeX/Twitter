const { createUser, findUserPerUsername } = require("../queries/users.queries");

const { getUserTweetsFormAuthorId } = require("../queries/tweets.queries");

const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/avatars");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()} - ${file.originalname}`);
    },
  }),
});

exports.signupForm = (req, res, next) => {
  res.render("users/user-form", {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const user = req.body;
    await createUser(user);
    res.redirect("/");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("users/user-form", {
      errors,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.updateImage = [
  upload.single("avatar"),
  async (req, res, next) => {
    try {
      const user = req.user;
      user.avatar = `/img/avatars/${req.file.filename}`;
      await user.save();
      res.redirect("/");
    } catch (e) {
      next(e);
    }
  },
];

exports.userProfile = async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await findUserPerUsername(username);
    const tweets = await getUserTweetsFormAuthorId(user._id);
    res.render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
    });
  } catch (e) {
    next(e);
  }
};
