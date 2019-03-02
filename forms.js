const express = require('express');
const router = express.Router();

// form Model
const form = require('../../models/form');

// @route   GET api/forms
// @desc    Get All forms
// @access  Public
router.get('/', (req, res) => {
    form.find()
    .sort({ date: -1 })
    .then(forms => res.json(forms));
});

// @route   POST api/forms
// @desc    Create An form
// @access  Public
router.post('/', (req, res) => {
  const newform = new form({
    name: req.body.name,
    comment: req.body.comment
  });

  newform.save().then(form => res.json(form));
});

// @route   DELETE api/forms/:id
// @desc    Delete A form
// @access  Public
router.delete('/:id', (req, res) => {
    form.findById(req.params.id)
    .then(form => form.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// Update a book
router.put('/:id',async (req,res) => {
    try {
     const id = req.params.id
     const forma = await form.findOne({id})
     if(!forma) return res.status(404).send({error: 'Book does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedBook = await form.updateOne(req.body)
     res.json({msg: 'Book updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;