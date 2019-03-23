
const express = require('express')


// Create the app

// Use it with post

const router = express.Router()
//router.use(express.json());
//const Joi = require('joi');
const mongoose = require('mongoose')

const Form = require('../../models/SSC')
const validator = require('../../validations/SSCvalid')

router.get('/', async (req,res) => {
    const forms = await SSC.find()
    res.json({data: forms})
})





// Create a form
router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const NewForm = await SSC.create(req.body)
   res.json({msg:'Form was created successfully', data: NewForm})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})

// Update a book
router.put('/:id', async (req,res) => {
  try {
    
  /* const id = req.params.id
   const form = await SSC.findOne({id})
   if(!form) return res.status(404).send({error: 'form does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })*/
   const updatedform = await SSC.updateOne(req.body)
   res.json({msg: 'Form updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})




router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedForm = await SSC.findByIdAndRemove(id)
   res.json({msg:'Book was deleted successfully', data: deletedForm})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})



module.exports = router

