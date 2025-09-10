const express = require('express');
const { connection } = require('./DataBase/db'); // destructure (kyunki tum export object kar rahe ho)

const app = express();

// Default route
app.get('/', (req, res) => {
  res.send("Hello, MongoDB connected project!");
});

// Server
app.listen(3000, async () => {
  console.log("🚀 Server running on http://localhost:3000");

  try {
    await connection; // mongoose.connect promise ko wait karna
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.log("❌ Failed to connect to MongoDB:", err.message);
  }
});
