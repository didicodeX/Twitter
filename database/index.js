const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE } =
  process.env;

const clientPromise = mongoose
  .connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(
      `✅ Connecté à ${MONGODB_DATABASE} avec succès! [${new Date().toLocaleString()}]`
    );
    return mongoose.connection.getClient();
  })
  .catch((err) => {
    console.log("❌ Failed to connect to database", err.message);
  });

exports.clientPromise = clientPromise;
