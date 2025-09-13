const express = require('express');
const { connection } = require('./DataBase/db'); 
const userRouter = require("./userRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send("Hello, MongoDB connected project!");
});
app.use("/api/users", userRouter);
app.listen(3000, async () => {
  console.log("🚀 Server running on http://localhost:3000");

  try {
    await connection; // mongoose.connect promise ko wait karna
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.log("❌ Failed to connect to MongoDB:", err.message);
  }
});
