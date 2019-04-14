const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')

const inv = require('../../models/investor')
const validator = require('../../validations/Investorvalid')

const tokenKey = require('../../config/keys').secretOrKey




router.get('/', async (req,res) => {
    const investors = await inv.find()
    res.json({data: investors})


})

router.get('/:id', async (req,res) => {
    const Investor = await inv.findById(req.params.id)
   res.json({data : Investor})
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

//  router.post('/login', async (req, res) => {
// 	try {
// 		const { email, password } = req.body;
//         const investor = await inv.findOne({ email });
//         console.log(investor)
// 		if (!investor) return res.status(404).json({ email: 'Email does not exist' });
// 		//const match = bcrypt.compareSync(password, investor.get("password"));
// 		if (password == investor.get("password")) {
//             const payload = {
//                 id: investor.id,
//                 name: investor.name,
//                 email: investor.email
//             }
//             const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
//             res.json({data: `Bearer ${token}`})
//             return res.json({ data: 'Token' })
//         }
// 		else return res.status(400).send({ password: 'Wrong password' });
// 	} catch (error) {

//         console.log(error)
//     }
// });



router.put('/:id', async (req,res) => {

    try {

  //   const id = req.params.id
     const investor = await inv.findById(req.params.id)
     if(!investor) return res.status(404).send({error: 'investor does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedinv = await investor.updateOne(req.body)
     res.json({msg: 'investor updated successfully', data: updatedinv})

    }
    catch(error) {
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


 router.post('/register', async (req, res) => {
	try {
		const isValidated = validator.registerValidation(req.body);
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
		const {email, name, password,username, nationality,gender, birthdate, city, country, jobtitle, mobilenumber} = req.body;
		const investor = await inv.findOne({ email });
		if (investor) return res.status(400).json({ email: 'Email already exists' });
		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(password, salt);
		const newUser = new inv({
			name,
			password: hashedPassword,
            email,
            username,
            nationality,
            gender, 
            birthdate,  
            city, 
            country, 
            jobtitle, 
            mobilenumber
			
		});
		await inv.create(newUser);
		res.json({ msg: 'User created successfully', data: newUser });
	} catch (error) {
		res.status(422).send({ error: 'Can not create user' });
	}
});
 

 router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const investor = await inv.findOne({ email });
		if (!investor) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, investor.password);
		if (match) {
            const payload = {
                id: investor.id,
                name: investor.name,
                email: investor.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});


 

module.exports = router