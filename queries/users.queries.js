const User = require("../database/models/user.model");

exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword,
      },
    });
    return newUser.save();
  } catch (e) {
    throw e;
  }
};

exports.findUserPerEmail = async (email) => {
  try {
    const user = await User.findOne({ "local.email": email });
    return user;
  } catch (e) {
    throw e;
  }
};

exports.findUserPerId = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    throw e;
  }
};

exports.comparePassword = async (password) => {
  try {
    const match = await User.comparePassword(password);
    return match;
  } catch (e) {
    throw e;
  }
};
