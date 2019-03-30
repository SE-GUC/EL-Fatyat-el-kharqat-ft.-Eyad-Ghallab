const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')

const inv = require('../../models/investor')
const validator = require('../../validations/investorvalid')

const tokenKey = require('../../config/keys').secretOrKey

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

 router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
        const investor = await inv.findOne({ email });
        console.log(investor)
		if (!investor) return res.status(404).json({ email: 'Email does not exist' });
		//const match = bcrypt.compareSync(password, investor.get("password"));
		if (password == investor.get("password")) {
            const payload = {
                id: investor.id,
                name: investor.name,
                email: investor.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            res.json({data: `Bearer ${token}`})
            return res.json({ data: 'Token' })
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (error) {

        console.log(error)
    }
});



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