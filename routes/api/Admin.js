const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../../models/Admin");
const validator = require("../../validations/Adminvalid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const us = require("../../models/user");

const tokenKey = require("../../config/keys").secretOrKey;

router.get("/", async (req, res) => {
  const admins = await Admin.find();
  res.json({ msg: "Admin was recieved", data: admins });
});


router.get("/:id", async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  res.json({ data: admin });
});

// Create a Admin
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newAdmin = await Admin.create(req.body);
    res.json({ msg: "Admin was created successfully", data: newAdmin });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  console.log("ana da5alt");
  try {
    
    console.log("ana da5alt hena");
    const {
      name,

      email,

      address,

      username,

      password
    } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ email: "Email already exists" });
    console.log("we hena");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new Admin({
      name,

      email,

      address,

      username,

      password: hashedPassword
    });
    console.log("ana da5alt hena kaman");
    await Admin.create(newUser);
    
    const type = new us({
      type: "admin",
      email,
      password: hashedPassword,
      id: newUser.id
    });
    console.log("what the hell ");
    const user = await us.create(type);
    res.json({ msg: "User created successfully", data: newUser });
  } catch (error) {
    res.status(422).send({ error: "Can not create user" });
  }
});

// @route   DELETE api/Admins/:id
// @desc    Delete A Admin
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedAdmin = await Admin.findByIdAndRemove(id);
    res.json({ msg: "Admin was deleted successfully", data: deletedAdmin });
  } catch (error) {
    
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).send({ error: "admin does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedadmin = await admin.updateOne(req.body);
    res.json({ msg: "Admin updated successfully", data: updatedadmin });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    //const id = req.params.id;
    const deletedinvestor = await Admin.findOneAndDelete();
    res.json({
      msg: "investor was deleted successfully",
      data: deletedinvestor
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.get("/", (req, res) => res.json({ data: Admins }));

module.exports = router;
