//
const express = require('express')

//const app = express()
const router = express.Router()
router.use(express.json())
//const Joi=require('joi')

// temporary data created as if it was pulled out of the database ...
const reviewers = [
   
   {Name: "Menna",
    id:"1",
    Email:"Menna1@gamil.com",
    Username:"Menna1",
    Password:"abc12345",
    YearsOfExperience: "10",
    Gender:"Female"},

    {
        Name: "Ahmed",
    id:"2",
    Email:"Ahmed2@gmail.com",
    Username:"Ahmed2",
    Password:"defg6789",
    YearsOfExperience: "11",
    Gender:"Male"},

    {
        Name: "Khaled",
    id:"3",
    Email:"Khaled3@gmail.com",
    Username:"Khaled3",
    Password:"hijklm12",
    YearsOfExperience: "5",
    Gender:"Male"}
    
    
    


];

router.get('/', (req, res) => res.json({ data: reviewers }));
router.post('/', (req, res) => {
	const Name = req.body.Name;
    const id = req.body.id;
    const Email = req.body.Email;
    const Username=req.body.Username;
    const Password=req.body.Password;
    const YearsOfExperience = req.body.YearsOfExperience;
    const Gender = req.body.Gender;
    

	if (!Name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof Name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	//if (!ID) return res.status(400).send({ err: 'id field is required' });
    //if (typeof ID !== 'number') return res.status(400).send({ err: 'Invalid value for id' });
    if (!Email) return res.status(400).send({ err: 'email field is required' });
    if (typeof Email !== 'string') return res.status(400).send({ err: 'Invalid value for email' });
    if (!Username) return res.status(400).send({ err: 'Username field is required' });
    if (typeof Username !== 'string') return res.status(400).send({ err: 'Invalid value for Username' });
    if (!Password) return res.status(400).send({ err: 'Password field is required' });
    if (typeof Password !== 'string') return res.status(400).send({ err: 'Invalid value for Password' });
    if (!YearsOfExperience) return res.status(400).send({ err: 'yearsofexp field is required' });
    if (typeof YearsOfExperience !== 'number') return res.status(400).send({ err: 'Invalid value for yearsofexp' });
    if (!Gender) return res.status(400).send({ err: 'gender field is required' });
	if (typeof Gender !== 'string') return res.status(400).send({ err: 'Invalid value for gender' });

	const newReviewer = {
        Name,
        id:reviewers.length+1,
        Email,
        Username,
        Password,
        YearsOfExperience,
        Gender,
        
    }
    
    reviewers.push(newReviewer)
    res.send(reviewers) 

});


module.exports = router;