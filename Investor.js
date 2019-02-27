// Import express
const express = require('express')
// Create the app
const app = express()

const Joi = require('joi');

// Use it with post
app.use(express.json())

// We will treat this array of books as our database for now
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
]

// Default route (entry point)
app.get('/', (req, res) => {
    res.send('Hiiii')
})

// Get all investors
app.get('/api/investors', (req, res) => {
    res.send(investors)
})


// Get a certain investor
app.get('/api/investors/:id', (req, res) => {
    const investorId = req.params.id
    const investor = investors.find(investor => investor.id === investorId)
    res.send(investor)
})

// Create an investor
app.post('/api/investors/', (req, res) => {
    
    
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
    res.send(investors)
})


// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))