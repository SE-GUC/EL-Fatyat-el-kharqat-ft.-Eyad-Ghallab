const express = require('express')
const router = express.Router();

const lawyer = require('../../models/Lawyer')
const validator = require('../../validations/Lawyervalid')



 

// We will treat this array of lawyers as our database for now
// const lawyers = [
//  {fullname: 'Norhan Tarek',
//   email: 'norhan98@yahoo.com',
//   phonenumber: '0111200300',
//   legaltype: 'Legal',
//   birthdate: '1/1/1967',
//   noOfPreviousCases: 50,
//   gender: 'Female', 
//   username: 'NorhanTarek98',
//   password: 'abcdefg122', 
//   id: '1'}, 

//  {fullname: 'Shadya kamel',
//   email: 'Shadooda@yahoo.com',
//   phonenumber: '01112123300',
//   legaltype: 'Legal',
//   birthdate: '1/2/1967',
//   noOfPreviousCases: 10,
//   gender: 'Female',
//   username: 'Shadyaelgamda', 
//    password: 'shadooda', id:'2'},

// {fullname: 'Farah Hossam',
//  email: 'Foffa@yahoo.com',
//  phoneNumber: '0115670300',
//  legaltype: 'Legal',
//  birthdate: '1/1/1967', 
//  noOfPreviousCases: 50,
//  gender: 'Female', 
//  username: 'Foffaelgamda', 
//  password: 'foffa98',
//  id: '3'}]







  //  router.get('/', (req, res) => res.json({ data: lawyers}))
router.get('/', async (req,res) => {
    const lawyers = await Lawyer.find()
    res.json({data: lawyers})
})

router.put('/:id', async (req,res) => {
    console.log('hiiiii')
    try {
        const id = req.params.id
        const lawyer = await Lawyer.findOne({id})
        // if(!lawyer) return res.status(404).send({error: 'lawyer does not exist'})
        // const isValidated = validator.updateValidation(req.body)
        // if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updated = await Lawyer.updateOne(req.body)
        res.json({msg: 'lawyer updated successfully'})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }   
 })
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedLawyer = await Lawyer.findByIdAndRemove(id)
     res.json({msg:'lawyer was deleted successfully', data: deletedLawyer})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router
    