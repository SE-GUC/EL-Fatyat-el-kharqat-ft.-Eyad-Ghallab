const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var schema = require("../../models/Reviewer");
const Rev = require("../../models/Reviewer");

const validator = require("../../validations/Reviewervalid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const us = require("../../models/user");

const tokenKey = require("../../config/keys").secretOrKey;

router.get("/", async (req, res) => {
  const Reviewer = await Rev.find();
  res.json({ data: Reviewer });
});

// Create a reviewer

router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const Reviewer = await Rev.create(req.body);
    res.json({ msg: "Reviewer was created successfully", data: Reviewer });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// router.post("/register", async (req, res) => {
//   console.log("ana da5alt");
//   try {
//     // const isValidated = validator.registerValidation(req.body);
//     // console.log("malak?");
//     // if (isValidated.error)
//     //   return res
//     //     .status(400)
//     //     .send({ error: isValidated.error.details[0].message });
//     console.log("ana da5alt hena");
//     const {
//       Name,
//       Email,
//       Password,
//       YearsOfExperience,
//       Username,
//       Gender
//     } = req.body;
//     const reviewer = await Rev.findOne({ Email });
//     console.log("ana gayaaaa");
//     if (reviewer)
//       return res.status(400).json({ email: "Email already exists" });
//     console.log("we hena");
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(Password, salt);
//     const newUser = new Rev({
//       Name,
//       Email,
//       Password: hashedPassword,
//       YearsOfExperience,
//       Username,
//       Gender
//     });
//     console.log("ana da5alt hena kaman");
//     await Rev.create(newUser);
//     console.log("ana hena");
//     //const user = await us.create(req.body);
//     const type = new us({
//       type: "reviewer",
//       email,
//       password: hashedPassword,
//       id: newUser.id
//     });
//     console.log("what the hell ");
//     const user = await us.create(type);
//     res.json({ msg: "User created successfully", data: newUser });
//   } catch (error) {
//     res.status(422).send({ error: "Can not create user" });
//   }
// });

router.post("/register", async (req, res) => {
  console.log("ana da5alt");
  try {
    // const isValidated = validator.registerValidation(req.body);
    // console.log("malak?");
    // if (isValidated.error)
    //   return res
    //     .status(400)
    //     .send({ error: isValidated.error.details[0].message });
    console.log("ana da5alt hena");
    const {
      name,
      email,
      password,
      yearsOfExperience,
      username,
      gender
    } = req.body;
    const reviewer = await Rev.findOne({ email });
    if (reviewer)
      return res.status(400).json({ email: "Email already exists" });
    console.log("we hena");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new Rev({
      name,
      email,
      password: hashedPassword,
      yearsOfExperience,
      username,
      gender
    });
    console.log("ana da5alt hena kaman");
    await Rev.create(newUser);
    //const user = await us.create(req.body);
    const type = new us({
      type: "reviewer",
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

//update a reviewer
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Reviewer = await Rev.findOne({ id });
    if (!Rev) return res.status(404).send({ error: "reviewer does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedreviewer = await Rev.updateOne(req.body);
    res.json({ msg: "reviewer updated successfully", data: updatedreviewer });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//delete a reviewer
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedreviewer = await Rev.findByIdAndRemove(id);
    res.json({
      msg: "reviewer was deleted successfully",
      data: deletedreviewer
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.get("/find/SSC", (req, res) => {
  SSC.find({ Lawyer_review: "accepted" })
    .sort({ Formdate: -1 })
    .then(SSC => {
      console.log(`There are ${SSC.length} SSC forms`);
      res.json({ msg: "accepted spc forms", data: SSC });
    });
});

//update a reviewer
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Reviewer = await Rev.findOne({ id });
    if (!Rev) return res.status(404).send({ error: "reviewer does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedreviewer = await Rev.updateOne(req.body);
    res.json({ msg: "reviewer updated successfully", data: updatedreviewer });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//delete a reviewer
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedreviewer = await Rev.findByIdAndRemove(id);
    res.json({
      msg: "reviewer was deleted successfully",
      data: deletedreviewer
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// get all accepted SPC forms

router.get("/find/SPC", (req, res) => {
  SpcForm.find({ Lawyer_review: "accepted" })
    .sort({ Form_Date: -1 })
    .then(SpcForm => {
      console.log(`There are ${SpcForm.length} SPC forms`);
      res.json({ msg: "accepted spc forms", data: SpcForm });
    })
    .catch(error => {
      return res.send(
        `Error encountered retrieving all accounts. Error: ${error}`
      );
    });
});

//update Status of SPC form
router.put("/spcform/:id", async (req, res) => {
  try {
    //   const id = req.params.id
    const Rev = await SpcForm.findById(req.params.id);
    //if(!Lawyer) return res.status(404).send({error: 'form does not exist'})
    const isValidated = validator.updateValidation(req.body);
    const updatedform = await Rev.updateOne(req.body);
    if (isValidated.error) {
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    }
    res.status(500).json({
      message: "Reviewer is updated the formstatus  successfully",
      data: updatedform
    });
  } catch (error) {
    res.status(500).json({
      message: "error"
      //console.log(error)
    });
  }
});

//update Status of SSC form
router.put("/sscform/:id", async (req, res) => {
  try {
    //   const id = req.params.id
    const Rev = await SSC.findById(req.params.id);
    //if(!Lawyer) return res.status(404).send({error: 'form does not exist'})
    const isValidated = validator.updateValidation(req.body);
    const updatedForm = await Rev.updateOne(req.body);
    if (isValidated.error) {
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    }
    res.status(500).json({
      message: "Reviewer is updated the status  successfully",
      data: updatedForm
    });
  } catch (error) {
    res.status(500).json({
      message: "error"
      //console.log(error)
    });
  }
});
// get all accepted status SSC forms
router.get("/find/sscform", (req, res) => {
  SSC.find({ Status: "accepted" })
    .sort({ Formdate: -1 })
    .then(SSC => {
      console.log(`There are ${SSC.length} SSC forms`);
      res.json({ msg: "accepted ssc forms", data: SSC });
    })

    .catch(error => {
      return res.send(
        `Error encountered retrieving all accounts. Error: ${error}`
      );
    });
});

// get all accepted status SPC forms
router.get("/find/spcform", (req, res) => {
  SpcForm.find({ Status: "accepted" })
    .sort({ Form_Date: -1 })
    .then(SpcForm => {
      console.log(`There are ${SpcForm.length} SPC forms`);
      res.json({ msg: "accepted spc forms", data: SpcForm });
    })
    .catch(error => {
      return res.send(
        `Error encountered retrieving all accounts. Error: ${error}`
      );
    });
});

module.exports = router;
