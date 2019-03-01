const express = require('express')
const app = express()
app.use(express.json())

const lawyers=[
    {id:'1',
       username:'rawan22',
       password: '1111',
       fullname: 'rawan essily',
       birthdate:'22/6/1996',
       email:'rawan@gamil.com',
       phonenumber:'0111111111',
       legaltype:'business',
       gender:'female',
       noOfPrevCases:'30'},
    { id:'2',
    username:'aliaa12',
    password:'2222',
    fullname: 'aliaa adel',
    birthdate: '16/6/1996',
    email: 'aliaa@gamil.com',
    phonenumber:'0111111112',
    legaltype: 'business',
    gender: 'female',
    noOfPrevCases:'40'},
    { id:'3',
    username:'samaaa',
    password:'33333',
    fullname: 'sama zidan',
    birthdate: '20/6/1996',
    email: 'sama@gamil.com',
    phonenumber:'0111111113',
    legaltype: 'family',
    gender: 'female',
    noOfPrevCases:'45'},
    { id:'4',
    username:'eyaddd',
    password:'44444',
    fullname: 'eyad seada',
    birthdate: '5/6/1996',
    email: 'eyad@gamil.com',
    phonenumber:'0111111114',
    legaltype: 'family',
    gender: 'male',
    noOfPrevCases:'50'},


    

];
app.get('/', (req, res) => {
    res.send(`<h1>lawyers profiles </h1>
    <a href="/api/lawyers">lawyers</a>
  
    `);
})
app.get('/api/lawyers', (req, res) => {
    res.send(lawyers)
})
app.get('/api/lawyers/:id', (req, res) => {
    const lawyerid = req.params.id
    const lawyer = lawyers.find(lawyers => lawyer.id === lawyerid)
    res.send(lawyers)
})
app.put('/api/lawyers/:id', (req, res) => {
    console.log("hello")
    const lawyerid = req.params.id 
    const lawyer = lawyers.find(lawyer => lawyer.id === lawyerid)


    if(req.body.username){
        
        const updatedusername = req.body.username
        lawyer.username = updatedusername
        const schema = {
            username: joi.string().min(5).required(),
        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    }
    if(req.body.password){
       
        const updatedpassword = req.body.password
         lawyer.password = updatedpassword
         const schema = {
            password: joi.string().min(4).required(),
         }
         const result = Joi.validate(req.body, schema);
         if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    }
    if(req.body.fullname){
       
        const updatedfullname = req.body.fullname
       
        lawyer.fullname = updatedfullname
        const schema = {
            fullname: joi.string().min(9).required(),
   
        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
        
    }
    if(req.body.birthdate){
        
        const updatedbirthdate = req.body.birthdate
        
        lawyer.birthdate = updatedbirthdate
        const schema = {
            bithdate: joi.date().min(1990).max(1997).required(),
        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    }
    if(req.body.email){
        
        const updatedemail = req.body.email
        
        lawyer.email = updatedemail
        const schema = {
            email: joi.string().email().required(),

        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
        
    }
    if(req.body.phonenumber){
        
        const updatedphonenumber = req.body.phonenumber
        
        lawyer.phonenumber = updatedphonenumber
        const schema = {
            phonenumber:joi.integer().phonenumber().required(),
    
        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
        
    }
    if(req.body.legaltype){
        
        const updatedlegaltype = req.body.legaltype
        
        lawyer.legaltype = updatedlegaltype
        const schema = {
            legaltype: joi.string().alphanum().required(),
   
        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
        
    }
    if(req.body.gender){
        
        const updatedgender = req.body.gender
        
        lawyer.gender = updatedgender
        const schema = {
            gender: joi.string().alphanum().required(),
        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    }
    if(req.body.noOfPrevCases){
        
        const updatednoOfPrevCases = req.body.noOfPrevCases
        
        lawyer.noOfPrevCases = updatednoOfPrevCases
        const schema = {
            noOfPrevCases: joi.integer().required(),
        }
        const result = Joi.validate(req.body, schema);
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    }
    
   
   
   
    

    
    res.send(lawyers)
})
app.delete('/api/lawyers/:id', (req, res) => {
    const lawyerid = req.params.id 
    const lawyer = lawyers.find(lawyer => lawyer.id === lawyerid)
    const index = lawyers.indexOf(lawyer)
    lawyers.splice(index,1)
    res.send(lawyers)
})
const port = process.env.PORT | 5000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })
