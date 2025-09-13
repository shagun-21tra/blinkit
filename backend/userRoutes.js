const express = require("express");
const User = require("./user");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    let user = new User(req.body);  // request se data lena
    await user.save();              // database me save karna
    res.send(user);                 // response bhejna
  } catch (err) {
    res.send({ error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    let users = await User.find();  // sabhi users lana
    res.send(users);
  } catch (err) {
    res.send({ error: err.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
  } catch (err) {
    res.send({ error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);   // id se delete karna
    res.send({ message: "User deleted" });
  } catch (err) {
    res.send({ error: err.message });
  }
});

module.exports = router;