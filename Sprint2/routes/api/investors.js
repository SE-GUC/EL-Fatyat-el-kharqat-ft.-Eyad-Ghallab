const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//const uuid = require('uuid');

const inv = require('../../models/investor')
const validator = require('../../validations/investorvalid')

// router.get('/', async (req,res) => {
//     const investors = await inv.find()
//     res.json({data: investors})
// })

router.get('/', async (req,res) => {
    const investors = await inv.find()
    res.json({data: investors})

})




router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const investor = await inv.create(req.body)
     res.json({msg:'investor was created successfully', data: investor})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })





 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedinvestor = await inv.findByIdAndRemove(id)
     res.json({msg:'investor was deleted successfully', data: deletedinvestor})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router