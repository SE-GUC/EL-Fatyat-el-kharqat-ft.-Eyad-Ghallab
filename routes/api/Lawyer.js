// 
// Import express
const express = require('express')
// Create the app
//const app = express()
// Use it with post
const Joi = require('joi');
//app.use(express.json())
const router = express.Router();
// We will treat this array of lawyers as our database for now
const lawyers = [
 {fullname: 'Norhan Tarek',
  email: 'norhan98@yahoo.com',
  phonenumber: '0111200300',
  legaltype: 'Legal',
  birthdate: '1/1/1967',
  noOfPreviousCases: 50,
  gender: 'Female', 
  username: 'NorhanTarek98',
  password: 'abcdefg122', 
  id: '1'}, 

 {fullname: 'Shadya kamel',
  email: 'Shadooda@yahoo.com',
  phonenumber: '01112123300',
  legaltype: 'Legal',
  birthdate: '1/2/1967',
  noOfPreviousCases: 10,
  gender: 'Female',
  username: 'Shadyaelgamda', 
   password: 'shadooda', id:'2'},

{fullname: 'Farah Hossam',
 email: 'Foffa@yahoo.com',
 phoneNumber: '0115670300',
 legaltype: 'Legal',
 birthdate: '1/1/1967', 
 noOfPreviousCases: 50,
 gender: 'Female', 
 username: 'Foffaelgamda', 
 password: 'foffa98',
 id: '3'}]





// Get all lawyers
router.get('/', (req, res) => res.json({ data: lawyers }));


// Get a certain lawyer
router.get('/:id', (req, res) => {
    const id = req.params.id
    const Lawyer = lawyers.find(Lawyer => Lawyer.id === id)
    return res.json({ data: Lawyer })
    res.send(Lawyer)
})

// Create a lawyer
router.post('/joi', (req, res) => {
    console.log(req.body)
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phonenumber= req.body.phonenumber
    const legaltype=req.body.legaltype
    const birthdate=req.body.birthdate
    const noOfPreviousCases=req.body.noOfPreviousCases
    const  gender= req.body.gender
    const username=req.body.username
    const password=req.body.password

    const schema = {
        fullname: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        phonenumber: Joi.string().trim().regex(/^[0-9]{11,11}$/).required(),
        legaltype: Joi.string().min(3).required(),
        birthdate: Joi.date().max(1990).required(),
        noOfPreviousCases: Joi.number().required(),
        gender: Joi.string().allow('').optional(),
        username:  Joi.string().required(),
        password: Joi.string().min(8).required(),
        
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });  

    const lawyer= {
        fullname :fullname,
        email : email,
        phonenumber:phonenumber,
        legaltype: legaltype,
        birthdate:birthdate,
        noOfPreviousCases:noOfPreviousCases,
        gender:gender,
        username:username,
        password:password,
        id : lawyers.length+1
           
        }
       lawyers.push(lawyer)
       return res.json({ data: lawyers }) })
       ;
       //res.send(lawyers)

      

module.exports = router
    

            
  //  });

    
    
