const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const SpcForm = require("../../models/SPC");
const validator = require("../../validations/SPCvalid");

const Nexmo = require("nexmo");
const nexmo = new Nexmo({
  apiKey: "5f5fb4ce",
  apiSecret: "48bJxSynuSXO0Xnj"
});
router.get("/:investor_nationalid/SPC", async (req, res) => {
  const nationalid = req.params.investor_nationalid;

  const national = await SpcForm.findOne({ investor_nationalid: nationalid });
  res.json({ data: national });
});

router.post("/msg", async (req, res) => {
  const number = req.body.number;
  const msg = req.body.msg;

  nexmo.message.sendSms(
    "NEXMO",
    "2" + number,
    "Your case has been accepted please pay" +
      msg +
      " using fawry , vodafone cash or mobinil cash",
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
  );
});

//Create Form
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const { Facility_name } = req.body;
    const form = await SpcForm.findOne({ Facility_name });
    if (form)
      return res
        .status(400)
        .json({ Facility_name: "Facility name already exists" });
    const newSpcForm = await SpcForm.create(req.body);
    res.json({ msg: "Form was created successfully", data: newSpcForm });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//Read Form
router.get("/all", async (req, res) => {
  const spcforms = await SpcForm.find();
  //res.json({data: spcforms})
  res.json({ msg: "Here are the SPC Forms", data: spcforms });
});

// router.get("/:id", async (req, res) => {
//   const spcforms = await SpcForm.findById(req.params.id);
//   res.json({ data: spcforms });
// });

// router.get("/:investor_nationalid", async (req, res) => {
//   const investor = req.params.investor_nationalid;
//   console.log(investor);
//   const spc = await SpcForm.findOne({ investor });
//   if (spc) {
//     console.log(spc);
//   }
//   res.json({ data: spc });
// });
//Update Form
router.put("/:id", async (req, res) => {
  console.log("hiiii");
  const id = req.params.id;
  const updatedspcform = req.body;
  const isValidated = validator.updateValidation(req.body);
  if (isValidated.error) {
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });
  } else {
    SpcForm.update({ _id: id }, { $set: updatedspcform })
      .exec()
      .then(() => {
        res.status(500).json({
          message: "Form is updated Successfully",
          data: updatedspcform
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Server error"
        });
      });
  }
});

// Delete Form
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSpcForm = await SpcForm.findByIdAndRemove(id);
    res.json({ msg: "Form was deleted successfully", data: deletedSpcForm });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
//user story sama
router.get("/:id/find", async (req, res) => {
  const spcforms = await SpcForm.findById(req.params.id);
  const estimatedprice = spcforms.get("capital");
  var price = estimatedprice / 1000;
  var price2 = 0.0025 * estimatedprice;
  var finalprice = 0;
  console.log(estimatedprice);
  if (price < 100) {
    finalprice += 100;
  }
  if (price2 < 10) {
    finalprice += 10;
  }
  if (price > 1000) {
    finalprice += 1000;
  }
  if (price2 > 1000) {
    finalprice += 1000;
  }
  if (price >= 100 && price <= 1000) {
    finalprice += price;
  }
  if (price2 >= 10 && price2 <= 1000) {
    finalprice += price2;
  }
  finalprice += 660;

  res.json({ data: finalprice });
});
// user story Hana
router.get("/", (req, res) => {
  SpcForm.find({
    Status: "accepted",
    is_the_external_entities_notified: "true"
  })
    .then(Hana => {
      res.json({ data: Hana });
    })
    .catch(error => {
      return res.send(
        `Error encountered retrieving all accounts. Error: ${error}`
      );
    });
});

module.exports = router;
