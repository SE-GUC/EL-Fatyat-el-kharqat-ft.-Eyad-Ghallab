const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const notification = require('../../models/Notification')
const validator = require('../../validations/Notificationvalid')

router.get('/', async (req,res) => {
    const Notifications = await notification.find()
    res.json({msg:'this is the notifications', data: Notifications})
})


router.get('/:User_id', async (req,res) => {
    const User_id = req.params.User_id
    const Notifications = await notification.find({User_id})
    res.json({msg : "Notification was recieved", data: Notifications})
})


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newnotification = await notification.create(req.body)
     res.json({msg:'notification was created successfully', data: newnotification})
    }
    catch(error) {
  
        console.log(error)
    }  
 })




// Update a notification
router.put('/:id', async (req,res) => {
    try {
     //const id = req.params.id
     //const notification = await notification.findOne({id})
     //if(!notification) return res.status(404).send({error: 'notification does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatednotification = await notification.updateOne(req.body)
     res.json({msg: 'notification updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletednotification = await notification.findByIdAndRemove(id)
     res.json({msg:'notification was deleted successfully', data: deletednotification})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router
