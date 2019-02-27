const express = require('express')
var Joi=require('joi')
//const uuid = require('uuid');
const router = express.Router()

// We will be connecting using database 
const Reviewer = require('../../Models/Reviewer')

// temporary data created as if it was pulled out of the database ...
const reviewers = [
    new Reviewer('Menna',1, 'Menna1@gamil.com','Menna1','abc12345',10 ,'Female'),
    new Reviewer('Ahmed',2,'Ahmed2@gmail.com' ,'Ahmed2','defg6789',11 ,'Male'),
    new Reviewer('Khaled',3,'Khaled3@gmail.com' ,'Khaled3','hijklm12', 5,'Male'),
    new Reviewer('Eyad', 4,'Eyad4@gmail.com', 'Eyad4','nopqrst929',15,'Male'),
    new Reviewer('Aliaa',5,'Aliaa5@gmail.com' ,'Aliaa5','uvwxyz333',20 ,'Female'),
    
];

router.get('/', (req, res) => res.json({ data: reviewers }));
router.post('/', (req, res) => {
	const Name = req.body.Name;
    const ID = req.body.ID;
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
        ID:reviewers.length+1,
        Email,
        Username,
        Password,
        YearsOfExperience,
        Gender,
        
    }
    

    //return res.json({ data: newReviewer });
    reviewers.push(newReviewer)
    res.send(reviewers) 

});
/*
router.get('/joi', (req, res) => {
	const Name = req.body.Name;
    const ID = req.body.ID;
    const Email = req.body.Email;
    const Username=req.body.Username;
    const Password=req.body.Password;
    const YearsOfExperience = req.body.YearsOfExperience;
    const Gender = req.body.Gender;
    

	const schema = {
		Name: Joi.string().min(3).required(),
        ID: Joi.number().required(),
        Email: Joi.string().required(),
        Username: Joi.string().required(),
        Password: Joi.string().required(),
        YearsOfExperience: Joi.number().required(),
        Gender: Joi.string().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newReviewer = {
		Name,
        Id: uuid.v4(),
        Email,
        Username,
        Password,
        YearsOfExperience,
        Gender,
	};
    return res.json({ data: newReviewer });
    
    
    
    
}); */

module.exports = router;
