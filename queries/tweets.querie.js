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