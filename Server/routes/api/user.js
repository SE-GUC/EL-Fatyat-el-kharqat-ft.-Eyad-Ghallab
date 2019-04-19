const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const us = require("../../models/user");

const tokenKey = require("../../config/keys").secretOrKey;

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const user = await us.findOne({ email });

  if (user) {
    console.log("found it");
  } else {
    console.log("did not find it");
  }
  // const user = await us.findOne(req.params.email);
  const type = user.type;
  console.log(user);
  console.log(type);
  res.json({ data: user });
});

router.get("/", async (req, res) => {
  const users = await us.find();
  res.json({ msg: "us was recieved", data: users });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await us.findOne({ email });
    if (!user) return res.status(404).json({ email: "Email does not exist" });
    const match = bcrypt.compareSync(password, user.password);
    if (match) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      };
      const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
      return res.json({ token: `Bearer ${token}` });
    } else return res.status(400).send({ password: "Wrong password" });
  } catch (e) {}
});

module.exports = router;
