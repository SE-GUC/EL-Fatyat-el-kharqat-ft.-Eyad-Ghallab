const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Admin= require('../../models/Admin')
const validator = require('../../validations/AdminValidations')

router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
})


// Create a book
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




module.exports = router