const mongoose = require("mongoose");
require("dotenv").config();

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_DATABASE,
} = process.env;

mongoose
  .connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("✅ Connected to database:", MONGODB_DATABASE);
  })
  .catch((err) => {
    console.log("❌ Failed to connect to database", err.message);
  });
