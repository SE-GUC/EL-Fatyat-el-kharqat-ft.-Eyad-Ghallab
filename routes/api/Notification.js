const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const notification = require('../../models/Notification')
const validator = require('../../validations/Notificationvalid')

const SpcForm = require('../../models/SPC')
const Form = require('../../models/SSC')
//const funcs = require('../Functions/Funcs');
const Validator = require('../../validations/SSCvalid')


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

 

 router.post('/ssc', async (req,res) => {
     
    const Forms = Form.find({status:'rejected'})
    
    
  if( Forms)
  try {
   
   const isValidated = validator.createValidation( {
   
   "investor_Email": "test@gmail.com" ,
   "MSG": "abos edak update el form wenabyyyyy",
   "reviewer_Name":"aliaa",
   "notify_number": "2",
   "User_id": "1"
 })
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const newnotification = await notification.create({
                "investor_Email": "test@gmail.com" ,
                "MSG": "abos edak update el form wenabyyyyy",
                "reviewer_Name":"aliaa",
                "notify_number": "2",
                "User_id": "1"
              })
   res.json({msg:'A Notification', data: newnotification})
  }
  catch(error) {
     
      console.log(error)
  }  

})

router.post('/spc', async (req,res) => {
  
   const Forms = SpcForm.find({status:'rejected'})
   
   
 if( Forms)
 try {
  
  const isValidated = validator.createValidation( {
  
  "investor_Email": "test@gmail.com" ,
  "MSG": "abos edak update el form wenabyyyyy",
  "reviewer_Name":"aliaa",
  "notify_number": "2",
  "User_id": "1"
})
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
  const newnotification = await notification.create({
               "investor_Email": "test@gmail.com" ,
               "MSG": "abos edak update el form wenabyyyyy",
               "reviewer_Name":"aliaa",
               "notify_number": "2",
               "User_id": "1"
             })
  res.json({msg:'A Notification', data: newnotification})
 }
 catch(error) {
    
     console.log(error)
 }  

})
router.post('/SSC', async (req,res) => {
  console.log('hi')
  const Forms = Form.find({status:'accepted'})
  
  
  
if( Forms)
try {
 
 const isValidated = validator.createValidation( {
 
 "investor_Email": "test@gmail.com" ,
 "MSG": "abos edak update el form wenabyyyyy",
 "reviewer_Name":"aliaa",
 "notify_number": "2",
 "User_id": "1"
})

 if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
 const newnotification = await notification.create({
              "investor_Email": "test@gmail.com" ,
              "MSG": "abos edak update el form wenabyyyyy",
              "reviewer_Name":"aliaa",
              "notify_number": "2",
              "User_id": "1"
            })
 res.json({msg:'Please pay the fees', data: newnotification})
}
catch(error) {
}
})

router.post('/SPC', async (req,res) => {
  console.log('hi')
  const SpcForm = SpcForm.find({status:'accepted'})
  
  
  
if( SpcForm)
try {
 
 const isValidated = validator.createValidation( {
 
 "investor_Email": "test@gmail.com" ,
 "MSG": "abos edak update el form wenabyyyyy",
 "reviewer_Name":"aliaa",
 "notify_number": "2",
 "User_id": "1"
})

 if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
 const newnotification = await notification.create({
              "investor_Email": "test@gmail.com" ,
              "MSG": "abos edak update el form wenabyyyyy",
              "reviewer_Name":"aliaa",
              "notify_number": "2",
              "User_id": "1"
            })
 res.json({msg:'Please pay the fees', data: newnotification})
}
catch(error) {
}
})





module.exports = router
