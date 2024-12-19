const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://tanodylane:123@cluster0.olht8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("✅ Connected to database");
  })
  .catch((err) => {
    console.log("❌ Failed to connect to database", err.message);
  });
