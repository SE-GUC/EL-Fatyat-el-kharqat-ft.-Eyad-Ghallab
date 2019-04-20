const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Admin= require('../../models/Admin')
const validator = require('../../validations/Adminvalid')



router.get("/", async (req, res) => {
  const admins = await Admin.find();
  res.json({msg:"Admin was recieved" ,data: admins });
});
// get admin by id

router.get('/:id', function(req, res, next) {
    Admin.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json({msg : "Admin was recieved"},post);
    });
  });

// Create a Admin
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newAdmin = await Admin.create(req.body)
    res.json({msg:'Admin was created successfully', data: newAdmin})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})
// @route   DELETE api/Admins/:id
// @desc    Delete A Admin
// @access  Public
router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const deletedAdmin = await Admin.findByIdAndRemove(id);
      res.json({ msg: "Admin was deleted successfully", data: deletedAdmin });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  });

router.put('/:id',async (req,res) => {
    try {
     const id = req.params.id
     const forma = await Admin.findOne({id})
     if(!Admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
      
 })


 router.post('/register', async (req, res) => {
	try {
		const isValidated = validator.registerValidation(req.body);
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
		const {email, name, password,username, address} = req.body;
		const admin = await Admin.findOne({ email });
		if (admin) return res.status(400).json({ email: 'Email already exists' });
		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(password, salt);
		const newUser = new Admin({
			name,
			password: hashedPassword,
      email,
      username,
      address
		});
		await Admin.create(newUser);
		res.json({ msg: 'Admin created successfully', data: newUser });
	} catch (error) {
		res.status(422).send({ error: 'Can not create user' });
	}
});
 

 router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const admin = await Admin.findOne({ email });
		if (!admin) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, admin.password);
		if (match) {
            const payload = {
                id: admin.id,
                name: admin.name,
                email: admin.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});







 router.get('/', (req, res) => res.json({ data: Admins }));
  



module.exports = router