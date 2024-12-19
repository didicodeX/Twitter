const router = require("express").Router();

router.get("/tweet/new", (req, res) => {
  res.render("tweets/tweet-form");
});

router.get("/", (req, res) => { res.render("tweets/tweet-list"); });


module.exports = router;