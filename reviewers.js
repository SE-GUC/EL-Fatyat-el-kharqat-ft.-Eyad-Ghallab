const express = require('express')
const app = express()
const router = express.Router()
app.use(express.json())
const Joi=require('joi')
const reviewers=[
    {ID:'1',
    Username:'MENNAHOSSAM',
    Password: '1111',
    Name: 'MENNA HOSSAM',
    Email:'MENNA@gamil.com',
    Gender:'female',
    YearsOfExprerience:'5'},
 { ID:'2',
 Username:'aliaa12',
 Password:'2222',
 Eame: 'aliaa adel',
 Email: 'aliaa@gamil.com',
 Gender: 'female',
 YearsOfExprerience:'40'},
 
]
router.get('/', (req, res) => {
    res.send(`<h1>reviewer profiles </h1>
    <a href="/api/reviewers">reviewers</a>
  
    `);
})
router.get('/api/reviewers', (req, res) => {
    res.send(reviewers)
})
router.get('/api/reviewers/:ID', (req, res) => {
    const reviewerid = req.params.ID
    const reviewer = reviewers.find(reviewer => reviewer.ID === reviewerid)
    res.send(reviewers)
})
router.put('/api/reviewers/:ID', (req, res) => {
    const reviewerid = req.params.ID 
    const reviewer = reviewers.find(reviewer => reviewer.ID === reviewerid)

    if(req.body.Username){
       const updatedusername=req.body.Username
       reviewer.Username=updatedusername 
       const schema ={
        Username : Joi.string().alphanum().min(3).max(20).required()
       }
       const result = Joi.validate(req.body, schema);
       if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    }
    if(req.body.Password){
      const updatedpassword= req.body.Password
      reviewer.Password=updatedpassword
      const schema ={
        Password : Joi.string().alphanum().min(4).required()
    }
    const result = Joi.validate(req.body, schema);
    if (result.error)return res.status(400).send({error:result.error.details[0].massage});
    

    if(req.body.Email){
        const updatedemail = req.body.Email
        reviewer.Email=updatedemail
        const schema ={
            Email : Joi.string().alphanum().min(6).max(20).required()
        }
        const result = Joi.validate(req.body, schema);
        if (result.error)return res.status(400).send({error:result.error.details[0].massage});
        
    }

    }
    if(req.body.Name){
        
        const updatedname = req.body.Name
        reviewer.Name=updatedname
        const schema ={
            Name : Joi.string().alphanum().min(4).max(20).required()
        }
        const result = Joi.validate(req.body, schema);
        if (result.error)return res.status(400).send({error:result.error.details[0].massage});
        
        
        
    }
    if(req.body.Gender){
        
        const updatedgender = req.body.Gender
        reviewer.Gender = updatedgender
        const schema ={
            Gender : Joi.string().alphanum().min(4).max(5).required()
        }
        const result = Joi.validate(req.body, schema);
        if (result.error)return res.status(400).send({error:result.error.details[0].massage});
        
    }
    
    if(req.body.YearsOfExprerience){
        const updatedyearsofexp = req.body.YearsOfExprerience
        reviewer.YearsOfExprerience = updatedyearsofexp 
        const schema ={
            YearsOfExprerience : Joi.number().alphanum().required()
        }
        const result = Joi.validate(req.body, schema);
        if (result.error)return res.status(400).send({error:result.error.details[0].massage});
        
        
    }
    res.send(reviewers)
})
router.delete('/api/reviewers/:ID', (req, res) => {
    const reviewerId = req.params.ID 
    const reviewer = reviewers.find(reviewer => reviewer.ID === reviewerId)
    const index = reviewers.indexOf(reviewer)
    reviewers.splice(index,1)
    res.send(reviewers)
})
 
module.exports= router ;
