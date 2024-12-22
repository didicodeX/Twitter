const {
  getAllTweets,
  deleteTweet,
  getTweetById,
  updateTweet,
  createTweet,
  getCurrentUserTweetsWithFollowing,
  getUserTweetsFromUsername,
} = require("../queries/tweets.queries");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getCurrentUserTweetsWithFollowing(req.user);
    res.render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.tweetNew = async (req, res, next) => {
  try {
    res.render("tweets/tweet-form", {
      tweet: {},
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createTweet({ ...body, author: req.user.id });
    res.redirect("/tweets");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("tweets/tweet-form", { errors });
  }
};

exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getCurrentUserTweetsWithFollowing(req.user);
    res.render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
      editable: true,
    });
  } catch (e) {
    next(e);
  }
};

exports.tweetEdit = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await getTweetById(tweetId);
    res.render("tweets/tweet-form", {
      tweet,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.tweetUpdate = async (req, res, next) => {
  const tweetId = req.params.tweetId;
  try {
    const body = req.body;
    await updateTweet(tweetId, body);
    res.redirect("/tweets");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("tweets/tweet-form", { errors });
  }
};
