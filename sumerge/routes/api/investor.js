
// Dependencies
const express = require('express');
const Joi = require('joi');
//const uuid = require('uuid');
const router = express.Router();

// Models
//const Investor = require('../../models/Investor');

// temporary data created as if it was pulled out of the database ...
const investors = [
	{
        id: '1',
        name: 'Farah Hossam',
        email: 'Farah@gmail.com',
        nationality:'Egyptian',
        gender: 'female',
        birthdate: '20/05/1998',
        address: '1 abc',
        city:'Cairo',
        country:'Egypt',
        jobtitle: 'Manager',
        mobilenumber: '12345678911',
        username: 'Farah.Hossam',
        password: 'abcd'
    },
    {
        id: '2',
        name: 'Shahd Hossam',
        email: 'Shahd@gmail.com',
        nationality:'American',
        gender: 'female',
        birthdate:'19/06/1994',
        address: '1 abc',
        city:'Cairo',
        country:'Egypt',
        jobtitle: 'Manager',
        mobilenumber: '1299999999911',
        username: 'Shahd.Hossam',
        password: 'efhg'
    },
    {
        id: '3',
        name: 'Dalia Hatat',
        email: 'Dalia@gmail.com',
        nationality:'Egyptian',
        gender: 'female',
        birthdate:'10/11/1964',
        address: '1 abc',
        city:'Cairo',
        country:'Egypt',
        jobtitle: 'Doctor',
        mobilenumber: '76543218911',
        username: 'Dalia.Hatata',
        password: 'ghij'
    }
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: investors }));

// Create a new user
// router.post('/', (req, res) => {
// 	const name = req.body.name;
// 	const age = req.body.age;

// 	if (!name) return res.status(400).send({ err: 'Name field is required' });
// 	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
// 	if (!age) return res.status(400).send({ err: 'Age field is required' });
// 	if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });

// 	const newUser = {
// 		name,
// 		age,
// 		id: uuid.v4(),
// 	};
// 	return res.json({ data: newUser });
// });

router.post('/joi', (req, res) => {
	// const name = req.body.name
    // const age = req.body.age
    
    const name= req.body.name
    const email= req.body.email
    const nationality=req.body.nationality
    const gender= req.body.gender
    const birthdate=req.body.birthdate
    const address= req.body.address
    const city= req.body.city
    const country=req.body.country
    const jobtitle= req.body.jobtitle
    const mobilenumber= req.body.mobilenumber
    const username=req.body.username
    const password=req.body.password
       

	// const schema = {
	// 	name: Joi.string().min(3).required(),
	// 	age: Joi.number().required(),
    // }
    
    const schema = {
		name: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email().regex(/example.com/),
        nationality: Joi.string().required(),
        gender:Joi.string().allow('').optional(),
        birthdate:Joi.string().required(),
        address:Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
        jobtitle:Joi.string().allow('').optional(),
        mobilenumber: Joi.string().trim().regex(/^[0-9]{11,11}$/).required(),
        username: Joi.string().required(),
        password: Joi.string().required(),

	}


	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	// const newUser = {
	// 	name,
	// 	age,
	// 	id: uuid.v4(),
    // };
    
    const investor = {
       
        
        name:name,
        email:email,
        nationality:nationality,
        gender:gender,
        birthdate:birthdate,
        address:address,
        city:city,
        country:country,
        jobtitle:jobtitle,
        mobilenumber:mobilenumber,
        username:username,
        password:password,
        id: investors.length + 1

    }

    investors.push(investor)
    //res.send(investors)
	return res.json({ data: investor });
});

router.get('/:id', (req, res) => {
    const investorId = req.params.id
    const investor = investors.find(investor => investor.id === investorId)
    return res.json({ data: investor });
    //res.send(investor)
})

//module.exports = router;
=======
//const express = require('express');


const Joi = require('joi');
const router = express.Router()
router.use(express.json())
// We will be connecting using database 
//const investor = require('../../models/investor')
// const Investors = [
//     { id:'1',
//     name: 'sama', 
//     email: 'sama@gmail.com',
//     nationality: 'Egyptian',
//     gender: 'female',
//     birthdate: '1/1/1998',address: 'tagmo3'
//     ,city: 'cairo', 
//     country: 'Egypt', 
//     jobtitle: 'developer',
//     mobilenumber:'01929284',
//     username:'sama.zidan',
//      password: 'csen603'},

//     { id: '2',
//     name: 'rawan',
//      email: 'rawan@gmail.com',
//      nationality: 'Egyptian',
//      gender: 'female',
//      birthdate: '1/3/1998',
//      address: '7elwan'
//     ,city: 'cairo',
//      country: 'Egypt',
//       jobtitle: 'developer',
//       mobilenumber:'01929284',
//       username:'rawraw',
//        password: 'csen604'},



//     { id: '3',
//     name: 'hana', 
//     email: 'hana@gmail.com',
//     nationality: 'Egyptian',
//     gender: 'female',
//     birthdate: '1/2/1997',
//     address: 'madinaty'
//     ,city: 'cairo', 
//     country: 'Egypt', 
//     jobtitle: 'developer',
//     mobilenumber:'01929284',
//     username:'hanoun', 
//     password: 'csen602'},


//     { id: '4',
//     name: 'sarah', 
//     email: 'saraseif@gmail.com',
//     nationality: 'Egyptian',
//     gender: 'female',
//     birthdate: '1/2/1997',
//     address: 'tagmoo3'
//     ,city: 'cairo', 
//     country: 'Egypt', 
//     jobtitle: 'developer',
//     mobilenumber:'0087130871037',
//     username:'elcinderalla', 
//     password: 'csen607'}  

 


// ];
router.put('/:id', (req, res) => {
    const investorId = req.params.id 
    const investor = investors.find(investor => investor.id === investorId)
  
  
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
return res.json({ data: investors });


})




router.delete('/:id', (req, res) => {
    console.log("whyy")
    const investorId = req.params.id 
    const investor = investors.find(investor => investor.id === investorId)
    const index = investors.indexOf(investor)
    investors.splice(index,1)
    return res.json({ data: investors })
})

router.get('/', (req, res) => res.json({ data: investors }))

module.exports = router

