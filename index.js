const express = require('express')
const app = express()
const bodeyParser=require('body-parser')
const Joi = require('joi');
app.use(express.json())
app.use(bodeyParser.urlencoded({extended:true}))



const reviewers = require('./routes/api/reviewers')





app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Book Store</h1>
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

    const username = req.body.username
	const password = req.body.password
	const name = req.body.name
    const gender = req.body.gender
    const age = req.body.age
    const yearsofexp = req.body.yearsofexp


    if(req.body.username){
        username=req.body.username
    }
    if(req.body.password){
       
       // const updatedpassword = req.body.password
       password= req.body.password
    }
    if(req.body.name){
        
        const name = req.body.name
        
        name = name
        
    }
    if(req.body.gender){
        
        const updatedgender = req.body.gender
        
        Gender = updatedgender
        
    }
    if(req.body.age){
        
        const updatedage = req.body.age
        
        age = updatedage 
        
    }
    if(req.body.yearsofexp){
        
        const updatedyearsofexp = req.body.yearsofexp
        
        yearsofexp = updatedyearsofexp 
        
    }

   
    
    console.log(req.body)
    

	

	const schema = {
        username: Joi.string().min(5).required(),
        password: Joi.string().min(4).required(),
        name: Joi.string().min(9).required(),
        age:Joi.number().required(),
        gender: Joi.string().alphanum().required(),
        yearsofexp: Joi.number().required(),
    }
   

     Joi.validate(req.body, schema,(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        else{
            reviewers.push({id:reviewer.id,username:username,password:password,
            name:name,age:age,email:email
            ,yearsofexp:yearsofexp,gender:Gender})
    res.send(reviewers);
        }
    }
    );
    
   
   
 })
// app.post('/joi', (req, res) => {
   
    
//     const username = req.body.username
// 	const password = req.body.password
// 	const fullname = req.body.fullname
// 	const bithdate = req.body.bithdate
// 	const email = req.body.email
// 	const phonenumber = req.body.phonenumber
//     const legaltype = req.body.legaltype
//     const gender = req.body.gender
// 	const noOfPrevCases = req.body.noOfPrevCases


	

// 	const schema = {
//         //id: joi.integer().unique().required(),
//         username: joi.string().min(5).required(),
//         password: joi.string().min(4).required(),
//         fullname: joi.string().min(9).required(),
//         bithdate: joi.date().min(1990).max(1997).required(),
//         email: joi.string().email().required(),
//         phonenumber:joi.integer().phonenumber().required(),
//         legaltype: joi.string().alphanum().required(),
//         gender: joi.string().alphanum().required(),
//         noOfPrevCases: joi.integer().required(),

		
	
// 	}

// 	const result = Joi.validate(req.body, schema);

// 	if (result.error) return res.status(400).send({ error: result.error.details[0].message });


// 	return res.json({ data: lawyers });
// });


// Delete a reviewer

app.delete('/api/reviewers/:id', (req, res) => {
    const reviewerId = req.params.id 
    const reviewer = reviewers.find(reviewer => reviewer.id === reviewerId)
    const index = reviewers.indexOf(reviewer)
    books.splice(index,1)
    res.send(reviewers)
})

// Direct routes to appropriate files 
app.use('/api/reviewers', reviewers)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
