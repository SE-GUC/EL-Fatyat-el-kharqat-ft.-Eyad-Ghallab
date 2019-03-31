
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Contract = require('../../models/Contract')
const validator = require('../../validations/Contractvalid')

router.get('/', async (req,res) => {
    const Contratcs = await Contract.find()
    res.json({data: Contratcs})
})

router.get('/:id', async (req,res) => {
    const Contratcs = await Contract.findById(req.params.id)
   res.json({data : Contratcs})
})


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newContract = await Contract.create(req.body)
     res.json({msg:'Contract was created successfully', data: newContract})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.put('/:id', async (req,res) => {
    try{
  //  const id = req.params.id;
    const contract= await Contract.findById(req.params.id);
    if (!contract) return res.status(404).send({ error: "Contract does not exist."})
    const isValidated = validator.updateValidation(req.body);
    if(isValidated.error)
        return res.status(400).send({ error : isValidated.error.details[0].message})
    const updatedContract= await Contract.updateOne(req.body);
    res.json({msg:'Contract was created successfully', data: updatedContract})
    } catch(error) {
        console.log(error);
    }

 }) 

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedContract = await Contract.findByIdAndRemove(id)
     res.json({msg:'Contract was deleted successfully', data: deletedContract})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 


module.exports = router

