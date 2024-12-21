const { createUser } = require("../queries/users.queries");

exports.signupForm = (req, res, next) => {
  res.render("users/user-form", {errors: null});
};

exports.signup = async (req, res, next) => {
  try {
    const user = req.body;
    await createUser(user);
    res.redirect("/");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("users/user-form", { errors });
  }
};
