const express = require("express");
require("dotenv").config();
const { mongoose } = require("mongoose");
const { adminRouter } = require("./routes/adminRouter");
const { userRouter } = require("./routes/userRouter");
const { commonRouter } = require("./routes/commonRouter");
const cors = require("cors");
const app = express();
const PORT_NUMBER = process.env.PORT_NUMBER;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow this specific origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/common", commonRouter);
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
