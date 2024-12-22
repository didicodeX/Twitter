const router = require("express").Router();
const {
  tweetList,
  tweetNew,
  tweetCreate,
  tweetDelete,
  tweetUpdate,
  tweetEdit,
} = require("../controllers/tweet.controller");

router.get("/", tweetList);
router.get("/new", tweetNew);
router.post("/", tweetCreate);
router.get("/delete/:tweetId", tweetDelete);
router.post("/update/:tweetId", tweetUpdate);
router.get("/edit/:tweetId", tweetEdit);

module.exports = router;

// pour les controller on fait tweet...
//pour les queretie on fais ...tweet
