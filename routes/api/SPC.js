const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const SpcForm = require('../../models/SPC')
const validator = require('../../validations/SPCvalid')

router.get('/', async (req,res) => {
    const spcforms = await SpcForm.find()
    res.json({data: spcforms})
})

// Create a book
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newSpcForm = await SpcForm.create(req.body)
     res.json({msg:'Form was created successfully', data: newSpcForm})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// Update a book
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     //const spcform = await SpcForm.findOne({id})
     //if(!spcform) return res.status(404).send({error: 'Form does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedSpcForm = await SpcForm.updateOne(req.body)
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
     const deletedSpcForm = await SpcForm.findByIdAndRemove(id)
     res.json({msg:'Form was deleted successfully', data: deletedSpcForm})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 


module.exports = router