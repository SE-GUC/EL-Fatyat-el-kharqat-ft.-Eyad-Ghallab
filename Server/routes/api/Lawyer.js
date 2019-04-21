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

    // else{
    //   Lawyer.updateOne({id:id},{$set:updatedlawyer}).exec().then(()=>{
    res.status(500).json({
      message: "Lawyer is updated successfully",
      data: updatedlawyer
    });
  } catch (error) {
    res.status(500).json({
      message: "error"
      //console.log(error)
    });
  }
  //}
});

//update lawyer_review SPc form
router.put("/spcform/:id", async (req, res) => {
  try {
    //   const id = req.params.id
    const Lawyer = await SpcForm.findById(req.params.id);
    //if(!Lawyer) return res.status(404).send({error: 'form does not exist'})
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
      //console.log(error)
    });
  }
});

//update lawyer_review ssc form
router.put("/sscform/:id", async (req, res) => {
  try {
    //   const id = req.params.id
    const Lawyer = await SSC.findById(req.params.id);
    //if(!Lawyer) return res.status(404).send({error: 'form does not exist'})
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
      //console.log(error)
    });
  }
});

// get all unlocked SSC forms

router.get("/find/SSC", (req, res) => {
  Form.find({ Locked: false })
    .sort({ Formdate: -1 })
    .then(Form => {
      console.log(`There are ${Form.length} SSC forms`);
      res.json({ msg: "Unlocked spc forms", data: Form });
    })

    // });
    // return res.send(datassc)

    .catch(error => {
      return res.send(
        `Error encountered retrieving all accounts. Error: ${error}`
      );
    });
});

// get all unclocked SPC forms
router.get("/find/SPC", (req, res) => {
  SpcForm.find({ Locked: false })
    .sort({ Form_Date: -1 })
    .then(SpcForm => {
      console.log(`There are ${SpcForm.length} SPC forms`);
      res.json({ msg: "Unlocked spc forms", data: SpcForm });
    });
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedLawyer = await Lawyer.findByIdAndRemove(id);
    res.json({ msg: "lawyer was deleted successfully", data: deletedLawyer });
  } catch (error) {
    // We will be handling the error later
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
    // const isValidated = validator.registerValidation(req.body);
    // console.log("malak?");
    // if (isValidated.error)
    //   return res
    //     .status(400)
    //     .send({ error: isValidated.error.details[0].message });
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
    //const user = await us.create(req.body);
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
    // We will be handling the error later
    console.log(error);
  }
});

module.exports = router;
