const { app } = require("../app");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {findUserPerEmail, findUserPerId} = require("../queries/users.queries");

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserPerId(id);
    done(null, user);
  } catch (e) { 
    done(e.message);
  }
});

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await findUserPerEmail(email);
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    } else {
      const match = await user.comparePassword(password);
      if (match) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    }
  } catch (e) {
    return done(e.message);
  }
}));

