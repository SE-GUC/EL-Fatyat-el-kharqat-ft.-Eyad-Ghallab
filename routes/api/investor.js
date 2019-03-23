const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const inv = require('../../models/investor')
const validator = require('../../validations/investorvalid')



router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
    //  const investor = await inv.findOne({id})
    //  if(!investor) return res.status(404).send({error: 'investor does not exist'})
    //  const isValidated = validator.updateValidation(req.body)
    //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedinv = await inv.updateOne(req.body)
     res.json({msg: 'investor updated successfully', data: updatedinv})
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