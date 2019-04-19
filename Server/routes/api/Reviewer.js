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

router.post("/register", async (req, res) => {
  console.log("ana da5alt");
  try {
    const isValidated = validator.registerValidation(req.body);
    console.log("malak?");
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    console.log("ana da5alt hena");
    const {
      Name,
      Email,
      Password,
      YearsOfExperience,
      Username,
      Gender
    } = req.body;
    const reviewer = await Rev.findOne({ email });
    if (reviewer)
      return res.status(400).json({ email: "Email already exists" });
    console.log("we hena");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new Rev({
      Name,
      Email,
      Password: hashedPassword,
      YearsOfExperience,
      Username,
      Gender
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
      // var datassc='';
      // SSC.forEach((SSC) => {
      //   datassc+=`<p>Company_name:${SSC.Company_name}
      //     Governorate:${SSC.Governorate}
      //     City:${SSC.City}
      //     Locked:${SSC.Locked}
      //     Formdate:${SSC.Formdate}
      //     reviews:${SSC.reviews}
      //     Company_Address:${SSC.Company_Address}
      //     Company_Phone_Number:${SSC.Company_Phone_Number}
      //     Fax:${SSC.Fax}
      //     Capital_Currency:${SSC.Capital_Currency}
      //     capital:${SSC.capital}
      //     investorname:${SSC.investorname}
      //     Investor_type:${SSC.Investor_type}
      //     Gender:${SSC.Gender}
      //     Nationality:${SSC.Nationality}
      //     TypeOf_IdentityProof:${SSC.TypeOf_IdentityProof}
      //     investor_nationalid:${SSC.investor_nationalid}
      //     Address:${SSC.Address}
      //     Phone_Number:${SSC.Phone_Number}
      //     email:${SSC.email}
      //     BOD_Name:${SSC.BOD_Name}
      //     BOD_Investor_Type:${SSC.BOD_Investor_Type}
      //     BOD_Gender:${SSC.BOD_Gender}
      //     BOD_Nationality:${SSC.BOD_Nationality}
      //     BOD_TypeOfIdentityProof:${SSC.BOD_TypeOfIdentityProof}
      //     BOD_NationalID:${SSC.BOD_NationalID}
      //     BOD_BirthDate:${SSC.BOD_BirthDate}
      //     BOD_Address:${SSC.BOD_Address}
      //     PositionInBOD:${SSC.PositionInBOD}
      //     is_the_external_entities_notified:${SSC.is_the_external_entities_notified}
      //     Status:${SSC.Status}
      //     Lawyer_review:${SSC.Lawyer_review}

      //     </p></br> `;
      // });
      // return res.send(datassc)
    })

    .catch(error => {
      return res.send(
        `Error encountered retrieving all accounts. Error: ${error}`
      );
    });
});

// get all accepted SPC forms
router.get("/find/SPC", (req, res) => {
  SpcForm.find({ Lawyer_review: "accepted" })
    .sort({ Form_Date: -1 })
    .then(SpcForm => {
      console.log(`There are ${SpcForm.length} SPC forms`);
      res.json({ msg: "accepted spc forms", data: SpcForm });
      //    var dataspc='';
      //     SpcForm.forEach((SPC) => {
      //       dataspc+=`<p>Company_name:${SPC.Company_name}
      //         Governorate:${SPC.Governorate}
      //         City:${SPC.City}
      //         Locked:${SPC.Locked}
      //         Form_Date:${SPC.Form_Date}
      //         Facility_Address:${SPC.Facility_Address}
      //         Facility_Phone_Number:${SPC.Facility_Phone_Number}
      //         Capital_Currency:${SPC.Capital_Currency}
      //         Fax:${SPC.Fax}
      //         capital:${SPC.capital}
      //         investorname:${SPC.investorname}
      //         Gender:${SPC.Gender}
      //         Nationality:${SPC.Nationality}
      //         TypeOf_IdentityProof:${SPC.TypeOf_IdentityProof}
      //         investor_nationalid:${SPC.investor_nationalid}
      //         BirthDate:${SPC.BirthDate}
      //         Phone_Number:${SPC.Phone_Number}
      //         Investor_Fax:${SPC.Investor_Fax}
      //         email:${SPC.email}
      //         Investor_Address:${SPC.Investor_Address}
      //         Status:${SPC.Status}
      //         is_the_external_entities_notified:${SPC.is_the_external_entities_notified}
      //         Lawyer_review:${SPC.Lawyer_review}
      //         </p></br> `;

      //     });
      //    return  res.json({data: dataspc})
      //    //return res.send(dataspc);
    })
    .catch(error => {
      return res.send(
        `Error encountered retrieving all accounts. Error: ${error}`
      );
    });
});

module.exports = router;
