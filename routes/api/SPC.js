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

  const national = await SpcForm.find({
    investor_nationalid: nationalid,
    Status: "accepted"
  });
  res.json({ data: national });
});
router.get("/:investor_nationalid/update", async (req, res) => {
  const nationalid = req.params.investor_nationalid;

  const national = await SpcForm.find({
    investor_nationalid: nationalid,
  });
  res.json({ data: national });
});
router.get("/:investor_nationalid/status", async (req, res) => {
  const nationalid = req.params.investor_nationalid;

  const national = await SpcForm.find({
    investor_nationalid: nationalid
  });
  res.json({ data: national });
});


router.put("/:investor_nationalid/update", async (req, res) => {
  console.log("hiiii");
  const id = req.params.investor_nationalid;
  const updatedspcform = req.body;
  const isValidated = validator.updateValidation(req.body);
  console.log("bb")
  if (isValidated.error) {
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });
  } else {
    SpcForm.update({ investor_nationalid: id }, { $set: updatedspcform })
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
router.post("/msg", async (req, res) => {
  const number = req.body.number;
  const msg = req.body.msg;

  nexmo.message.sendSms(
    "NEXMO",
    "2" + number,
    "Please update your case",
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
  );
});

router.post("/pay", async (req, res) => {
  const number = req.body.number;
  const msg = req.body.msg;

  nexmo.message.sendSms(
    "NEXMO",
    "2" + number,
    "Your case has been accepted please pay using fawry",
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
    console.log(error);
  }
});

//Read Form
router.get("/all", async (req, res) => {
  const spcforms = await SpcForm.find();
  res.json({ msg: "Here are the SPC Forms", data: spcforms });
});

router.get("/:id", async (req, res) => {
  const spcforms = await SpcForm.findById(req.params.id);
  //const spcforms = await SpcForm.findById(req.params.id);
  res.json({ data: spcforms });
});

router.get("/gov/:id", async (req, res) => {
  const spcforms = await SpcForm.findById(req.params.id);
  res.json({ data: spcforms.Governorate });
});

router.get("/name/:id", async (req, res) => {
  const spcforms = await SpcForm.findById(req.params.id);
  res.json({ data: spcforms.Facility_name });
});

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

router.delete("/", async (req, res) => {
  try {
    //const id = req.params.id;
    const deletedinvestor = await SpcForm.findOneAndDelete();
    res.json({
      msg: "investor was deleted successfully",
      data: deletedinvestor
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
module.exports = router;
