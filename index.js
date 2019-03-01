const express = require('express')

const app = express()
const bodeyParser=require('body-parser')
const Joi = require('joi');
app.use(express.json())
app.use(bodeyParser.urlencoded({extended:true}))
const reviewers = require('./routes/api/reviewers')

//mariams code
var x= new boolean(false);
if (x){
    console.log('this form is not accepted')
 
console.log('accpted')
}



app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the reviewers
    Eyad and Menna welcome you</h1>
    <a href="/api/reviewers">reviewers</a>
    `);
})
//update a reviewer


app.get('/api/reviewers/:id', (req, res) => {
    const reviewerid = req.params.id
    const reviwer = reviewers.find(reviewers => reviewer.id === reviewerid)
    res.send(reviewers)
})


app.put('/api/reviewers/:id', (req, res) => {
    const reviewerid = req.params.id 
    const reviewer = reviewers.find(reviewer => reviewer.id === reviewerid)

    if(req.body.username){
       const updatedusername=req.body.username
       reviewer.username=updatedusername 
       const schema ={
           name : Joi.string().alphanum.min(3).max(20).required()
       }
       const result = joi.validate(req.body, schema);
       if (result.console.error)return res.status(400).send({error:result.error.details[0].massage});
       

    }
    if(req.body.password){
      const updatedpassword= req.body.password
      reviewer.password=updatedpassword
      const schema ={
        name : Joi.string().alphanum.min(4).required()
    }
    const result = joi.validate(req.body, schema);
    if (result.console.error)return res.status(400).send({error:result.error.details[0].massage});
    

    if(req.body.email){
        const updatedemail = req.body.email
        reviewer.email=updatedemail
        const schema ={
            name : Joi.string().alphanum.min(6).max(20).required()
        }
        const result = joi.validate(req.body, schema);
        if (result.console.error)return res.status(400).send({error:result.error.details[0].massage});
        
    }

    }
    if(req.body.name){
        
        const updatedname = req.body.name
        reviewer.name=updatedname
        const schema ={
            name : Joi.string().alphanum.min(4).max(20).required()
        }
        const result = joi.validate(req.body, schema);
        if (result.console.error)return res.status(400).send({error:result.error.details[0].massage});
        
        
        
    }
    if(req.body.gender){
        
        const updatedgender = req.body.gender
        reviewer.Gender = updatedgender
        const schema ={
            name : Joi.string().alphanum.min(4).max(5).required()
        }
        const result = joi.validate(req.body, schema);
        if (result.console.error)return res.status(400).send({error:result.error.details[0].massage});
        
    }
    if(req.body.age){
        const updatedage = req.body.age
        reviewer.age = updatedage 
        const schema ={
            name : Joi.number().alphanum.required()
        }
        const result = joi.validate(req.body, schema);
        if (result.console.error)return res.status(400).send({error:result.error.details[0].massage});
        
        
    }
    if(req.body.yearsofexp){
        const updatedyearsofexp = req.body.yearsofexp
        reviewer.yearsofexp = updatedyearsofexp 
        const schema ={
            name : Joi.number().alphanum.required()
        }
        const result = joi.validate(req.body, schema);
        if (result.console.error)return res.status(400).send({error:result.error.details[0].massage});
        
        
    }
    
    console.log(req.body)
    
   
 })



// Delete a reviewer

app.delete('/api/reviewers/:id', (req, res) => {
    const reviewerId = req.params.id 
    const reviewer = reviewers.find(reviewer => reviewer.id === reviewerId)
    const index = reviewers.indexOf(reviewer)
    books.splice(index,1)
    res.send(reviewers)
})
=======

const reviewers = require('./routes/api/reviewers')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Reviewer page</h1>
    <a href="/api/reviewers"> View Reviewers </a>
    `);
})



// Direct routes to appropriate files 

app.use('/api/reviewers', reviewers)
//app.use('/api/create', reviewers)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 5353
app.listen(port, () => console.log(`Server up and running on port ${port}`))
