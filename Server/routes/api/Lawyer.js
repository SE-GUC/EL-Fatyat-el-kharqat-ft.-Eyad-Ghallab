const express = require("express");
const router = express.Router();

const Lawyer = require("../../models/Lawyer");
const validator = require("../../validations/Lawyervalid");
const SpcForm = require("../../models/SPC");
const Form = require("../../models/SSC");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const us = require("../../models/user");

const tokenKey = require("../../config/keys").secretOrKey;

//update lawyers
router.put("/:id", async (req, res) => {
  try {
    const id = await Lawyer.findById(req.params.id);

    const isValidated = validator.updateValidation(req.body);
    const updatedlawyer = await id.updateOne(req.body);
    if (isValidated.error) {
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    }

    
    res.status(500).json({
      message: "Lawyer is updated successfully",
      data: updatedlawyer
    });
  } catch (error) {
    res.status(500).json({
      message: "error"
    });
  }
});

//update lawyer_review SPc form
router.put("/spcform/:id", async (req, res) => {
  try {
    const Lawyer = await SpcForm.findById(req.params.id);
    const isValidated = validator.updateValidation(req.body);
    const updatedlawyer = await Lawyer.updateOne(req.body);
    if (isValidated.error) {
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    }
    res.status(500).json({
      message: "Lawyer is updated the form  successfully",
      data: updatedlawyer
    });
  } catch (error) {
    res.status(500).json({
      message: "error"
    });
  }
});

router.put("/sscform/:id", async (req, res) => {
  try {
    const Lawyer = await SSC.findById(req.params.id);
    const isValidated = validator.updateValidation(req.body);
    const updatedlawyer = await Lawyer.updateOne(req.body);
    if (isValidated.error) {
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    }
    res.status(500).json({
      message: "Lawyer is updated the form  successfully",
      data: updatedlawyer
    });
  } catch (error) {
    res.status(500).json({
      message: "error"
    });
  }
});



router.get("/find/SPC", async (req, res) => {
  const forms = await SpcForm.find({
    Locked: false,
    Lawyer_review: "binding"
  });
  res.json({ data: forms });
});

router.get("/find/SSC", async (req, res) => {
  const forms = await Form.find({
    Locked: false,
    Lawyer_review: "binding"
  });
  res.json({ data: forms });
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedLawyer = await Lawyer.findByIdAndRemove(id);
    res.json({ msg: "lawyer was deleted successfully", data: deletedLawyer });
  } catch (error) {
    console.log(error);
  }
});
//Get all lawyers

router.get("/", async (req, res) => {
  const lawyers = await Lawyer.find();
  res.json({ msg: "Lawyers are here", data: lawyers });
});

router.get("/:id", async (req, res) => {
  const lawyers = await Lawyer.findById(req.params.id);
  res.json({ data: lawyers });
});

// Create a Lawyer
router.post("/register", async (req, res) => {
  console.log("ana da5alt");
  try {
   
    console.log("ana da5alt hena");
    const {
      username,
      password,
      fullname,
      email,
      phonenumber,
      legaltype,
      birthdate,
      noOfPreviousCases,
      gender
    } = req.body;
    const lawyer = await Lawyer.findOne({ email });
    if (lawyer) return res.status(400).json({ email: "Email already exists" });
    console.log("we hena");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new Lawyer({
      username,
      password: hashedPassword,
      fullname,
      email,
      phonenumber,
      legaltype,
      birthdate,
      noOfPreviousCases,
      gender
    });
    console.log("ana da5alt hena kaman");
    await Lawyer.create(newUser);
    const type = new us({
      type: "lawyer",
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

router.post("/createlawyer", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newLawyer = await Lawyer.create(req.body);
    res.json({ msg: "Lawyer was created successfully", data: newLawyer });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
