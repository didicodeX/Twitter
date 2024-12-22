const Tweet = require('../database/models/tweet.model');

exports.getAllTweets = () => {
  return Tweet.find({}).exec();
};

exports.getTweetById = (tweetId) => {
  return Tweet.findById(tweetId).exec();
};

exports.deleteTweet = (tweetId) => {
  return Tweet.findByIdAndDelete(tweetId).exec();
};

exports.updateTweet = (tweetId, tweet) => {
  return Tweet.findByIdAndUpdate(tweetId, {$set: tweet}, {runValidators: true}).exec();
};

exports.createTweet = (tweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};

exports.getCurrentUserTweetsWithFollowing = (user) => {
  return Tweet.find({author: {$in: [user.following, user._id]}}).populate('author').exec();
};

exports.getUserTweetsFromUsername = (authorId) => {
  return Tweet.find({author: authorId}).populate('author').exec();
};