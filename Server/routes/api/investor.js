const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const multer = require("multer");
const upload = multer({
  dest: "./uploads" // this saves your file into a directory called "uploads"
});

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')

const mongoose = require("mongoose");

const inv = require("../../models/investor");
const us = require("../../models/user");
const validator = require("../../validations/Investorvalid");

const tokenKey = require("../../config/keys").secretOrKey;

router.get("/", async (req, res) => {
  const investors = await inv.find();
  res.json({ data: investors });
});
router.delete("/", async (req, res) => {
  try {
    //const id = req.params.id;
    const deletedinvestor = await inv.findOneAndDelete();
    res.json({
      msg: "investor was deleted successfully",
      data: deletedinvestor
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const Investor = await inv.findById(req.params.id);
  res.json({ data: Investor });
});

router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const investor = await inv.create(req.body);
    const type = {
      type: "investor",
      email: req.body.email,
      password: req.body.password
    };
    const user = await us.create(type);
    res.json({ msg: "investor was created successfully", data: investor });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const investor = await inv.findById(req.params.id);
    if (!investor)
      return res.status(404).send({ error: "investor does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedinv = await investor.updateOne(req.body);
    res.json({ msg: "investor updated successfully", data: updatedinv });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedinvestor = await inv.findByIdAndRemove(id);
    res.json({
      msg: "investor was deleted successfully",
      data: deletedinvestor
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/Investor.js");
});

router.post("/", upload.single("file-to-upload"), (req, res) => {
  res.redirect("/");
});

router.post("/register", async (req, res) => {
  try {
    const isValidated = validator.registerValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const {
      email,
      name,
      password,
      username,
      nationality,
      gender,
      birthdate,
      city,
      country,
      jobtitle,
      mobilenumber,
      nationalid
    } = req.body;
    const investor = await inv.findOne({ email });
    if (investor)
      return res.status(400).json({ email: "Email already exists" });
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new inv({
      name,
      password: hashedPassword,
      email,
      username,
      nationality,
      gender,
      birthdate,
      city,
      country,
      jobtitle,
      mobilenumber,
      nationalid
    });

    await inv.create(newUser);
    //const user = await us.create(req.body);
    const type = new us({
      type: "investor",
      email,
      password: hashedPassword,
      id: newUser.id,
      nationalid: newUser.nationalid
    });
    const user = await us.create(type);
    res.json({ msg: "User created successfully", data: newUser });
  } catch (error) {
    res.status(422).send({ error: "Can not create user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const investor = await inv.findOne({ email });
    if (!investor)
      return res.status(404).json({ email: "Email does not exist" });
    const match = bcrypt.compareSync(password, investor.password);
    if (match) {
      const payload = {
        id: investor.id,
        name: investor.name,
        email: investor.email
      };
      const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
      return res.json({ token: `Bearer ${token}` });
    } else return res.status(400).send({ password: "Wrong password" });
  } catch (e) {}
});

module.exports = router;
