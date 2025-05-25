const express = require("express");
require("dotenv").config();
const { mongoose } = require("mongoose");
const app = express();
const PORT_NUMBER = process.env.PORT_NUMBER;

mongoose.connection.on("connected", () => {
  console.log("✅ Mongoose connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection error:", err);
});

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_AUTH_URL);
    console.log("🚀 Connected to MongoDB (await complete)");

    app.listen(PORT_NUMBER, () => {
      console.log(`🚀 Server is running on PORT: ${PORT_NUMBER}`);
    });
  } catch (error) {
    console.error("❌ Error Connecting to MongoDB:", error);
    process.exit(1);
  }
}

main();
