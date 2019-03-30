const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Admin= require('../../models/Admin')
const validator = require('../../validations/Adminvalid')

router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
})
// get admin by id

router.get('/:id', function(req, res, next) {
    Admin.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json({msg : "Admin was recieved"},post);
    });
  });

// Create a Admin
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newAdmin = await Admin.create(req.body)
    res.json({msg:'Admin was created successfully', data: newAdmin})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})
// @route   DELETE api/Admins/:id
// @desc    Delete A Admin
// @access  Public
router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const deletedAdmin = await Admin.findByIdAndRemove(id);
      res.json({ msg: "Admin was deleted successfully", data: deletedAdmin });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  });

router.put('/:id',async (req,res) => {
    try {
     const id = req.params.id
     const forma = await Admin.findOne({id})
     if(!Admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
      
 })

 router.get('/', (req, res) => res.json({ data: Admins }));
  



module.exports = router