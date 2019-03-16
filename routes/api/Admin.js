const express = require('express');
const Joi = require('joi');
const router = express.Router();
router.use(express.json())

const Admins = [
    {
    id:'1',
    name: 'Zefta', 
    email: 'sama@gmail.com',
    address: 'tagmo3',
    username:'sama.zidan',
     password: 'toty1998'},

    {
     id: '2',
    name: 'rawan',
     email: 'rawan@gmail.com',
     address: '7elwan',
      username:'rawraw',
       password: 'csen604'},


    { 
    id: '3',
    name: 'hana', 
    email: 'hana@gmail.com',
    address: 'madinaty',
    username:'hanoun', 
    password: 'csen602'},


    {
     id: '4',
    name: 'sarah', 
    email: 'saraseif@gmail.com',
    address: 'tagmoo3',
    username:'elcinderalla', 
    password: 'csen607'}  


];



router.get('/', (req, res) => res.json({ data: Admins }));



router.post('/', (req, res) => {
    const name= req.body.name
    const email= req.body.email
    const address= req.body.address
    const username=req.body.username
    const password=req.body.password
       

	
    const schema = {
		name: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string(),
        address:Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),

	}


	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	
    
    const Admin = {
        
        name:name,
        email:email,
        address:address,
        username:username,
        password:password,
        id: Admins.length + 1
        

    }

    Admins.push(Admin)
	return res.json({ data: Admins });
});

// router.get('/:id', (req, res) => {
//     const AdminId = req.params.id
//     const Admin = Admin.find(Admin => Admin.id === AdminId)
//     return res.json({ data: Admin });
   
// })

module.exports = router;