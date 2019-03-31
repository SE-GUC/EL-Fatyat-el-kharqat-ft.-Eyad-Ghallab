const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Entity = require('../../models/ExternalEntities')
const validator = require('../../validations/entityValid')

router.get('/', async (req,res) => {
    const entities = await ExternalEntities.find()
    res.json({data: entities})
})


// Create a Entity
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newEntity = await ExternalEntities.create(req.body)
    res.json({msg:'Entity was created successfully', data: newEntity})
   }
   catch(error) {
       console.log(error)
   }  
})

router.delete('/:id', (req, res) => {
    ExternalEntities.findById(req.params.id)
    .then(ExternalEntities => ExternalEntities.remove().then(() => res.json({ msg: 'Entity Deleted successfully' })))
    .catch(err => res.status(404).json({  msg: 'Error 404' }));

});
router.put('/:id',async (req,res) => {
    try {
     const id = req.params.id
     const forma = await ExternalEntities.findOne({id})
     if(!ExternalEntities) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await ExternalEntities.updateOne(req.body)
     res.json({msg: 'Entity updated successfully'})
    }
    catch(error) {
       
        console.log(error)
    }
      
 })

 router.get('/', (req, res) => res.json({ data: entities }));
  



module.exports = router