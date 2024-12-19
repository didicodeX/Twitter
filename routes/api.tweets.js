const router = require("express").Router();
const Tweet = require("../database/models/tweet.model");

router.post("/", (req, res) => {
  const body = req.body;
  console.log("Received tweet data:", body);
  const tweet = new Tweet(body);
  tweet
    .save()
    .then((tweet) => res.redirect("/"))
    .catch((err) => {
      const errors = Object.keys(err.errors).map((key) => err.errors[key].message);
      res.status(422).render("tweets/tweet-form", { errors });
    });
});

module.exports = router;
