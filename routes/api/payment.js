const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const pay = require('../../models/payment')
const validator = require('../../validations/Paymentvalid')

console.log("first")
router.get('/', async (req,res) => {
    const payment = await pay.find()
    res.json({data: payment})
})

 

// Create a Payment
console.log("second")
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const payment = await pay.create(req.body)
    res.json({msg:'Payment was created successfully', data: payment})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})




module.exports = router;