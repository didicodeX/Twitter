const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = new schema({
  content: { type: String, maxlength: 280, minlegth: 1, required: true },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;