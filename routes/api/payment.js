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
//update a reviewer
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const payment = await pay.findOne({id})
     if(!pay) return res.status(404).send({error: 'payment does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedPayment = await pay.updateOne(req.body)
    res.json({msg: 'payment updated successfully', data:updatedPayment})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 //delete a paymnet
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedPayment = await pay.findByIdAndRemove(id)
     res.json({msg:'payment was deleted successfully', data: deletedPayment})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })




module.exports = router;