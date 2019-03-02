const express = require('express');


const Joi = require('joi');
const router = express.Router()
router.use(express.json())
// We will be connecting using database 
//const investor = require('../../models/investor')
const Investors = [
    { id:'1',
    name: 'sama', 
    email: 'sama@gmail.com',
    nationality: 'Egyptian',
    gender: 'female',
    birthdate: '1/1/1998',address: 'tagmo3'
    ,city: 'cairo', 
    country: 'Egypt', 
    jobtitle: 'developer',
    mobilenumber:'01929284',
    username:'sama.zidan',
     password: 'csen603'},

    { id: '2',
    name: 'rawan',
     email: 'rawan@gmail.com',
     nationality: 'Egyptian',
     gender: 'female',
     birthdate: '1/3/1998',
     address: '7elwan'
    ,city: 'cairo',
     country: 'Egypt',
      jobtitle: 'developer',
      mobilenumber:'01929284',
      username:'rawraw',
       password: 'csen604'},



    { id: '3',
    name: 'hana', 
    email: 'hana@gmail.com',
    nationality: 'Egyptian',
    gender: 'female',
    birthdate: '1/2/1997',
    address: 'madinaty'
    ,city: 'cairo', 
    country: 'Egypt', 
    jobtitle: 'developer',
    mobilenumber:'01929284',
    username:'hanoun', 
    password: 'csen602'},


    { id: '4',
    name: 'sarah', 
    email: 'saraseif@gmail.com',
    nationality: 'Egyptian',
    gender: 'female',
    birthdate: '1/2/1997',
    address: 'tagmoo3'
    ,city: 'cairo', 
    country: 'Egypt', 
    jobtitle: 'developer',
    mobilenumber:'0087130871037',
    username:'elcinderalla', 
    password: 'csen607'}  

 


];
router.put('/:id', (req, res) => {
    const investorId = req.params.id 
    const investor = Investors.find(investor => investor.id === investorId)
  
  
  if (req.body.name ){
    const updatedName = req.body.name
    investor.name = updatedName
    const schema = {
        name: Joi.string().alphanum().min(3).max(30).required()
    }
	const result = Joi.validate(req.body, schema);
	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  
}

if (req.body.email){
    const updatedemail = req.body.email
    investor.email = updatedemail

    const schema = {
        email: Joi.string().email().regex(/example.com/)
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  






}
if (req.body.nationality){
    const updatednationality = req.body.nationality
    investor.nationality = updatednationality


    const schema = {
        nationality: Joi.string().required()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  





}
   if (req.body.gender ){
    const updatedgender = req.body.gender
    investor.gender = updatedgender


    const schema = {
        gender:Joi.string().allow('').optional()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  




}
if (req.body.birthdate ){
    const updatedbirthdate = req.body.birthdate
    investor.birthdate = updatedbirthdate

    const schema = {
        birthdate:Joi.string().required()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  





}
if (req.body.address){
    const updatedaddress = req.body.address
    investor.address = updatedaddress
    const schema = {
        address:Joi.string().required()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  



}
    if (req.body.city){
    const updatedcity = req.body.city
    investor.city = updatedcity


    const schema = {
        city: Joi.string().required()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  
}
    if(req.body.country){
    const updatedcountry = req.body.country
    investor.country= updatedcountry




    const schema = {
        country: Joi.string().required()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  
}
    if(req.body.jobtitle){
    const updatedjobtitle= req.body.jobtitle
    investor.jobtitle = updatedjobtitle


    const schema = {
        jobtitle:Joi.string().allow('').optional()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  
}
    if(req.body.mobilenumber){
    const updatedmobilenumber = req.body.mobilenumber
    investor.mobilenumber = updatedmobilenumber



    const schema = {
        mobilenumber: Joi.string().trim().regex(/^[0-9]{11,11}$/).required()}

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  
}
    if(req.body.username){
    const updatedusername = req.body.username
    investor.username = updatedusername


    const schema = {
        username: Joi.string().required()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  
}
    if(req.body.password){
    const updatedpassword = req.body.password
    investor.password = updatedpassword



    const schema = {
        password: Joi.string().required()
    }

	const result = Joi.validate(req.body, schema);


	if (result.error) return res.status(400).send({ error: result.error.details[0].message });  
}
return res.json({ data: Investors });


})




router.delete('/:id', (req, res) => {
    console.log("whyy")
    const investorId = req.params.id 
    const investor = Investors.find(investor => investor.id === investorId)
    const index = Investors.indexOf(investor)
    Investors.splice(index,1)
    return res.json({ data: Investors })
})

router.get('/', (req, res) => res.json({ data: Investors }))

module.exports = router