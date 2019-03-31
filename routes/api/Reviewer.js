const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
var bodyParser= require('body-parser')
var schema = require('../../models/Reviewer')
const Rev = require('../../models/Reviewer')
const validator = require('../../validations/ReviewerValid')
const mongoURL = 'mongodb+srv://sama123:sama.1998@se-q3mun.mongodb.net/test?retryWrites=true'
mongoose.set('useCreateIndex',true);
mongoose.set('useNewUrlParser',true);
router.use(bodyParser.urlencoded({extended:false}))



router.get('/', async (req,res) => {
    const Reviewer = await Rev.find()
    res.json({data: Reviewer})
})

 

// Create a reviewer
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const Reviewer = await Rev.create(req.body)
    res.json({msg:'Reviewer was created successfully', data: Reviewer})
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
     const Reviewer = await Rev.findOne({id})
     if(!Rev) return res.status(404).send({error: 'reviewer does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedreviewer = await Rev.updateOne(req.body)
    res.json({msg: 'reviewer updated successfully', data:updatedreviewer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 //delete a reviewer
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedreviewer = await Rev.findByIdAndRemove(id)
     res.json({msg:'reviewer was deleted successfully', data: deletedreviewer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })




module.exports = router;